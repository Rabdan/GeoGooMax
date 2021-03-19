document.addEventListener('DOMContentLoaded', function() {
	const bg = chrome.extension.getBackgroundPage();
	const SwitchCheckbox =  document.getElementById("geomaxim_switch_on");
	const SwitchCheckboxLng =  document.getElementById("geomaxim_switch_lng");
	const SwitchCheckboxOBR =  document.getElementById("geomaxim_switch_obr");
	const settings = bg.SETTINGS.getSettings();
	if(settings){
        if(settings.switch_on) { 
        	SwitchCheckbox.checked = true 
        } else {
        	SwitchCheckbox.checked = false 
        }
        if(settings.switch_lng) { 
        	SwitchCheckboxLng.checked = true 
        } else {
        	SwitchCheckboxLng.checked = false 
        }
        if(settings.switch_obr) { 
        	SwitchCheckboxOBR.checked = true 
        } else {
        	SwitchCheckboxOBR.checked = false 
        }
    }
    /*
    var SwitchCheckbox_enabled = bg.BG_FUNCT.checkGoogleSearchInput();
    console.log(SwitchCheckbox_enabled);
	if( SwitchCheckbox_enabled ) {
		SwitchCheckbox.disabled = false;
	} else {
		SwitchCheckbox.disabled = true;
	}	
	*/
	    SwitchCheckbox.addEventListener("change", function(event) {
			bg.SETTINGS.saveSetting({
	            setting : "switch_on",
	            value : this.checked
	        });
	        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs){
	        	let currentTab = tabs[0];
		        chrome.tabs.reload();
	        });

		});
	    SwitchCheckboxLng.addEventListener("change", function(event) {
			bg.SETTINGS.saveSetting({
	            setting : "switch_lng",
	            value : this.checked
	        });
	        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs){
	        	let currentTab = tabs[0];
		        chrome.tabs.reload();
	        });

		});
	    SwitchCheckboxOBR.addEventListener("change", function(event) {
			bg.SETTINGS.saveSetting({
	            setting : "switch_obr",
	            value : this.checked
	        });
	        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs){
	        	let currentTab = tabs[0];
		        chrome.tabs.reload();
	        });

		});
});