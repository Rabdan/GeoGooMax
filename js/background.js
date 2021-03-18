var BG_NOTIFICATIONS = (function(){
    function Bg_notifications(){

    }

    Bg_notifications.prototype.createNotification = function(options){
        let opt = {
            type: "basic",
            title: options.title,
            message: options.message,
            iconUrl: 'img/icons/logo/logo_128.png',
            eventTime : (new Date).getTime() + 120000
        };

        let idString = (new Date()).getTime().toString();
        if(options.tabId && options.windowId) {
            idString += '__' + options.tabId + '__' + options.windowId;
        }

        chrome.notifications.create(idString, opt);
    };

    return new Bg_notifications();
})();

var BG_FUNCT = (function(){
    function BgFunct(){
        this.delimiter = "%%%";
        this.storageName = "places";
        this.currentQuery = false;
        this.previousResultStrings = {};
    }


    BgFunct.prototype.sortResult = function(result, query){
        var queryArray = query.split(new RegExp("[ ]+"));
        //var originalFirstWord = queryArray[0].toLowerCase();
        for(var i in queryArray) {
            queryArray[i] = queryArray[i].toLowerCase();
            if(queryArray[i].length > 3) queryArray[i] = queryArray[i].slice(0, queryArray[i].length - 1);
        }
        var firstWord = queryArray[0];

        return result.sort(function(a, b) {
            var aText = a.text.toLowerCase();
            var bText = b.text.toLowerCase();

            var aMatchesCount = 0;
            var bMatchesCount = 0;
            for(var i in queryArray){
                var regexp = new RegExp(queryArray[i], "g");
                var aMatches = aText.match(regexp);
                var bMatches = bText.match(regexp);
                if(aMatches) aMatchesCount += aMatches.length;
                if(bMatches) bMatchesCount += bMatches.length;
            }

            if (aMatchesCount < bMatchesCount) return 1;
            if (aMatchesCount > bMatchesCount) return -1;

            /*var aIndex = aText.indexOf(originalFirstWord);
             var bIndex = bText.indexOf(originalFirstWord);
             if (aIndex < 0){
                 aIndex = aText.indexOf(firstWord);
                 bIndex = bText.indexOf(firstWord);
                 if (aIndex > bIndex) return 1;
                 if (aIndex < bIndex) return -1;
                 return 0;
             }
             if (bIndex < 0) return -1;
             if (aIndex > bIndex) return 1;
             if (aIndex < bIndex) return -1;*/

            aIndex = aText.indexOf(firstWord);
            bIndex = bText.indexOf(firstWord);
            if (aIndex > bIndex) return 1;
            if (aIndex < bIndex) return -1;
        });
    };


    BgFunct.prototype.parseDataString = function(options){

        if(this.currentQuery != options.query) return false;
        var res = options.res;
        var queryArray = options.query.split(new RegExp("[ ]+"));
        var query = options.query;
        if (queryArray.length > 1) {
            for(var i in queryArray){
                if(queryArray[i].length > 3) queryArray[i] += "*";
            }
            query = '(' + queryArray.join('.*') + '|' + queryArray.reverse().join('.*') + ')';
        }
        else if(query.length > 3) query += '*';
        var result = String(res).match(new RegExp('.*' + query + '.*', 'ig'));
        if(!result) result = [];

        this.previousResultStrings[options.query] = result.join("\n");

        for(var i in result){
            var resultArray = result[i].split("%");
            var newItem = {
                place : resultArray[0],
                text : resultArray[0],
                code : resultArray[2]
            };

            if(options.isRuQuery) newItem.text = resultArray[1];
            result[i] = newItem
        }

        result = BG_FUNCT.sortResult(result, options.query);

//        	console.log('parse',result);

        options.callback(result);
    };


    BgFunct.prototype.getDataByQuery = function(options){
        options.query = options.query.trim();
        this.currentQuery = options.query;
        if(!options.query || options.query.length < 3) {
            options.callback([]);
            return false;
        }

        var targetString = false;
        var targetLength = 0;
        for(var i in this.previousResultStrings){
            if(options.query.indexOf(i) == -1) delete this.previousResultStrings[i];
            else if(i.length > targetLength){
                targetString = this.previousResultStrings[i];
                targetLength = i.length;
            }
        }


        if(targetString){
            BG_FUNCT.parseDataString({
                res : targetString,
                query : options.query,
                callback : options.callback,
                isRuQuery : options.isRuQuery
            });
            //console.log("targetString", this.previousResultStrings);
            return true;
        }

        if(this.currentQuery != options.query) return false;

        const url = "en_ru_geo_data.txt";

        const x = new XMLHttpRequest();
		x.open("GET", url, true);
		x.onload = function(){
			let res = x.response;
			BG_FUNCT.parseDataString({
                res : res,
                query : options.query,
                callback : options.callback,
                isRuQuery : options.isRuQuery
        	});
		};
		x.send(null);
    };

	BgFunct.prototype.isRegionSwitch = function(url) {
	    const settings = SETTINGS.getSettings();
	    if(settings){
	        if(
	            (settings.currentGoogleRegion && url.match("^http(s|)://www.google.[^/]+/"))
	        ){
	            return true;
	        }
	    }

	    return false
	};

    BgFunct.prototype.getPlaces = function(){
        return STORAGE_SINGLETON.getStorageProperty({
            propertyName : "places"
        });
    };


    BgFunct.prototype.savePlace = function(options){
        var places = STORAGE_SINGLETON.getStorageProperty({
            propertyName : "places"
        });

        if(!places || !places[options.place]){
//        	console.log('savePlace save');
            STORAGE_SINGLETON.saveToStorage({
                propertyName : "places" + this.delimiter + options.place,
                value : {
                    text : options.text,
                    place : options.place,
                    textForSort : options.textForSort,
                    code : options.code
                },
                propertyNameDelimiter : this.delimiter
            });

            return true;
        }
        else return false;
    };

    BgFunct.prototype.removePlace = function(place){
        CONTEXT_ITEM_FACTORY.removeItem({id : place});
        STORAGE_SINGLETON.removeFromStorage({
            propertyName : this.storageName + this.delimiter + place,
            propertyNameDelimiter : this.delimiter
        });
    };

    BgFunct.prototype.createURL =  function(options) {

        const settings = SETTINGS.getSettings();

        let url = options.url;

        if( settings.switch_on ) {
            if(
                settings.currentGoogleRegion
                && url.match("^http(s|)://www.google.[^/]+/search")
            ){
                let ncode = settings.currentGoogleRegion.code;

        	    let canonical = settings.currentGoogleRegion.place;

        	    const symbol = DATA.symbolsByLength[canonical.length];
        	    const base64 = btoa(canonical.replace(new RegExp("–", "g"), "-"));
        	    let targetString = "w+CAIQICI" + symbol + base64;

        	    let countryUrl = DATA.countryUrls["COM"];

        //	    console.log('countryUrl',options.queryWords);

        	    let additionalParameters = '';
                if( settings.switch_lng ) {
                    let lcode = DATA.LangCodes[ncode];
                    console.log(lcode);
                    if( lcode ) {
                        additionalParameters = "&hl=" + lcode.languages[0];
                    }
                }
                if( settings.switch_obr ) {
                    additionalParameters = additionalParameters + "&cr=country" + ncode;
                    countryUrl = DATA.countryUrls[ncode];
                    if(!countryUrl) countryUrl = DATA.countryUrls["COM"];
                }

                let q = url.match("[#&\?]q=([^&]+)");

        	    url = countryUrl + "/search?q="+ q[1] +
        	        "&geomaxim=1&pws=0&uule=" + targetString + additionalParameters + "&ip=0.0.0.0&source_ip=0.0.0.0";

            }
        } else {
            url = BG_FUNCT.removeURLParameters(url);            
        }
	    options.callback(url);
	};

	BgFunct.prototype.checkGoogleSearchInput = function(){
	    chrome.tabs.query({ active : true }, function (tabs){
	        const tab = tabs[0];
	        if(
	            tab
	            && (
	                tab.url.match("^https://www.google\.")
	            )
	        ){
	            return true;
	        } else {
	        	return false;
	        }
	    });
	};

	BgFunct.prototype.removeURLParameter = function(url, parameter) {
	    //prefer to use l.search if you have a location/link object
	    var urlparts = url.split('?');   
	    if (urlparts.length >= 2) {

	        var prefix = encodeURIComponent(parameter) + '=';
	        var pars = urlparts[1].split(/[&;]/g);

	        //reverse iteration as may be destructive
	        for (var i = pars.length; i-- > 0;) {    
	            //idiom for string.startsWith
	            if (pars[i].lastIndexOf(prefix, 0) !== -1) {  
	                pars.splice(i, 1);
	            }
	        }

	        return urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : '');
	    }
	    return url;
	}

    BgFunct.prototype.removeURLParameters = function(url) {
        url = BG_FUNCT.removeURLParameter(url,"uule");
        url = BG_FUNCT.removeURLParameter(url,"geomaxim");
        url = BG_FUNCT.removeURLParameter(url,"ip");
        url = BG_FUNCT.removeURLParameter(url,"source_ip");
        url = BG_FUNCT.removeURLParameter(url,"hl");
        url = BG_FUNCT.removeURLParameter(url,"cr");

        return url;
    }

    return new BgFunct();
})();


STORAGE_SINGLETON.updateStorageVariable(function(items){
    console.log('items', items);

    if(SETTINGS.getSetting({setting : 'switch_on'}) === undefined){
        SETTINGS.saveSetting({
            setting : "switch_on",
            value : true
        });
    }
    if(SETTINGS.getSetting({setting : 'switch_lng'}) === undefined){
        SETTINGS.saveSetting({
            setting : "switch_lng",
            value : false
        });
    }
    if(SETTINGS.getSetting({setting : 'switch_obr'}) === undefined){
        SETTINGS.saveSetting({
            setting : "switch_obr",
            value : false
        });
    }
    if(SETTINGS.getSetting({setting : 'currentGoogleRegion'}) === undefined){
        SETTINGS.saveSetting({
            setting : "currentGoogleRegion",
            value : undefined
        });
    }

});
/*
addChangeHeader();

function addChangeHeader(){
	
    if(SETTINGS.changeHeaderListener) return false;

    chrome.webRequest.onBeforeSendHeaders.addListener(
        function (details) {
            if (
                BG_FUNCT.isRegionSwitch(details.url)
            ) {
                for (let i = 0; i < details.requestHeaders.length; ++i) {
                    if (details.requestHeaders[i].name === 'User-Agent') {
                        details.requestHeaders[i].value = platform;
                        break;
                    }
                }
                return {requestHeaders: details.requestHeaders};
            }
        },
        {
            urls: DATA.urlPatterns
        },
        ["blocking", "requestHeaders"]
    );
    SETTINGS.changeHeaderListener = true;

}
*/
//page listener
chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {
    var title = response.title;
    if(response.body) var body = response.body;

    if(title == 'noSearchWords') {
        BG_NOTIFICATIONS.createNotification({
            title : "Нет поискового запроса!",
            message : "Вы не указали, что хотите искать."
        });
    }

    else if(title == 'getDataByQuery' && body) {
        BG_FUNCT.getDataByQuery({
            query : body.query,
            isRuQuery : body.isRuQuery,
            callback : function(result){
                chrome.tabs.sendMessage(
                    sender.tab.id,
                    {
                        'title': 'regionSearchResult',
                        'body' : {
                            result : result,
                            isRuQuery : body.isRuQuery
                        }
                    }
                );
            }
        });
    }
    else if(title == 'savePlace' && body) {
        BG_FUNCT.savePlace(body);
    }
    else if(title == 'openPlace' && body ) {
//    	console.log('sender',sender);
        BG_FUNCT.createURL({
            url: sender.tab.url,
        	callback: function (newUrl) {
                if (newUrl) {
                    chrome.tabs.update(sender.tab.id, {"url": newUrl});
                }
            }
        });   	
    }
    else if(title == 'openSwitch' && body) {
//    	console.log('sender',body);
        BG_FUNCT.createURL({
            url: body.tab.url,
        	callback: function (newUrl) {
                if (newUrl) {
                    chrome.tabs.update(body.tab.id, {"url": newUrl});
                }
            }
        });  
    }
    else if(title == 'saveSetting' && body) {
        SETTINGS.saveSetting({
            setting : body.setting,
            value : body.value
        })
    }

});

chrome.tabs.onUpdated.addListener(function(tabId, tab, tabInfo){
    if(tabInfo.status == "complete") {
    	const settings = SETTINGS.getSettings();
        if (
            tabInfo.url.match("^https://www.google\.")
        ) {
            chrome.tabs.sendMessage(
                tabId,
                {
                    title: 'addMenuButton',
                    settings: settings
                }
            );
        }
    }
});
