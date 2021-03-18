var STORAGE_SINGLETON = (function(){

    // Storage class
    function Storage(){
        this._storageProperties = [
            "places",
            "settings",
            "domains"
        ];
        this._storage = {};
    }

    Object.defineProperty(Storage.prototype, 'storage', {
        get : function(){ return this._storage; }
    });

    Storage.prototype.propertyNameDelimiter = function(options){
        let delimiter = "\.";
        if(options.propertyNameDelimiter) {
            delimiter = options.propertyNameDelimiter;
        }
        return options.propertyName.split(delimiter);
    };

    Storage.prototype.saveToStorage = function(options){
        // required properties: options.propertyName, options.value
        // optional properties: options.propertyNameDelimiter
        if(!options || !options.propertyName) return false;

        let propertyName = this.propertyNameDelimiter(options);

        let value = false;
        if(options.value || options.value === 0) value = options.value;

        if(this._storageProperties.indexOf(propertyName[0]) == -1) return false;

        function updateStorageProperties(count, storage){
            if(!propertyName[count + 1]) storage[propertyName[count]] = value;
            else{
                if(!storage[propertyName[count]]) {
                    storage[propertyName[count]] = {};
                }
                updateStorageProperties(count + 1,  storage[propertyName[count]]);
            }
        }

        updateStorageProperties(0, this._storage);
        let data = {};
        data[propertyName[0]] = this._storage[propertyName[0]];
        chrome.storage.local.set(data);
        return true;
    };

    Storage.prototype.updateStorageVariable = function(callBackFunction){
        let currentObject = this;
        chrome.storage.local.get(this._storageProperties, function (items) {
            currentObject._storage = items;
            if(callBackFunction) callBackFunction(items);
        });
    };

    Storage.prototype.getStorageProperty = function(options){
        // required properties: options.propertyName
        // optional properties: options.propertyNameDelimiter
        if(!options || !options.propertyName) return undefined;
        let propertyName = this.propertyNameDelimiter(options);

        function getStorageProperties(count, storage){
            if(!storage[propertyName[count]]) return undefined;
            if(!propertyName[count + 1]) return storage[propertyName[count]];
            return getStorageProperties(count + 1,  storage[propertyName[count]]);
        }

        return getStorageProperties(0, this._storage);
    };


    Storage.prototype.removeFromStorage = function(options){
        // required properties: options.propertyName
        // optional properties: options.propertyNameDelimiter
        if(!options || !options.propertyName) return false;

        let propertyName = this.propertyNameDelimiter(options);
        if(this._storageProperties.indexOf(propertyName[0]) == -1) return false;

        function removeStorageProperties(count, storage){
            if(!propertyName[count + 1]) delete storage[propertyName[count]];
            else if(storage[propertyName[count]]){
                removeStorageProperties(count + 1, storage[propertyName[count]]);
            }
        }

        removeStorageProperties(0, this._storage);
        if(this._storage[propertyName[0]]) {
            let data = {};
            data[propertyName[0]] = this._storage[propertyName[0]];
            chrome.storage.local.set(data);
        }
        else  chrome.storage.local.remove(propertyName[0]);

        return true;
    };

    // create storage instance
    return new Storage();
})();

var SETTINGS = (function () {
    function Settings(){
        this.changeHeaderListener = false;
    }


    Settings.prototype.getSettings = function(){
        return STORAGE_SINGLETON.getStorageProperty({
            propertyName : "settings"
        });
    };

    Settings.prototype.getSetting = function(options){
        return STORAGE_SINGLETON.getStorageProperty({
            propertyName : "settings ." + options.setting
        });
    };

    Settings.prototype.saveSetting = function(options){
        STORAGE_SINGLETON.saveToStorage({
            propertyName : "settings%%%" + options.setting,
            value : options.value,
            propertyNameDelimiter : "%%%"
        });
    };


    Settings.prototype.saveDomain = function(options){
        STORAGE_SINGLETON.saveToStorage({
            propertyName : "domains%%%" + options.domain,
            value : true,
            propertyNameDelimiter : "%%%"
        });
        this.changeContentDomains();
    };

    Settings.prototype.removeDomain = function(options){
        STORAGE_SINGLETON.removeFromStorage({
            propertyName : "domains%%%" + options.domain,
            propertyNameDelimiter : "%%%"
        });
        this.changeContentDomains();
    };

    Settings.prototype.getDomains = function(){
        return STORAGE_SINGLETON.getStorageProperty({
            propertyName : "domains"
        });
    };


    Settings.prototype.changeContentDomains = function(){
        chrome.tabs.query({}, function (tabs){
            const domains = SETTINGS.getDomains();
            for(let i in tabs){
                const tab = tabs[i];
                if(
                    tab.url.match("^https://www.google\.")
                ){
                    chrome.tabs.sendMessage(
                        tab.id, {
                            'title': 'changeDomains',
                            'body' : {
                                "domains" : domains
                            }
                        }
                    );
                }
            }


        });
    };

    return new Settings();
})();

//geo location
var useGeolocation = false;
if(useGeolocation) {
    chrome.storage.local.get('countryCode', function (items) {
        if (!items.countryCode) {
            navigator.geolocation.getCurrentPosition(function (position) {
                $.get(
                    'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + ',' + position.coords.longitude + '&sensor=true',
                    '',
                    function (res) {
                        chrome.storage.local.set({'countryCode': res.results[res.results.length - 1].address_components[0].short_name});
                    }
                )
            });
        }
    });
}
