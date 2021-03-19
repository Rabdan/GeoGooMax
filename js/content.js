var MAX_GEO_MENU = (function(){

    function MaxGeoMenu(){

	    this.googleSelectors = {
	        "button_line" : "#hdtb-msb",
	        "search_input" : "#lst-ib",
	        "address_label" : "#swml-loc",
	        "append_box" : "#hdtb",
	    };

    }

    MaxGeoMenu.prototype.isMobile = function(){
    	const but = document.querySelector(this.googleSelectors.button_line).closest("#hdtbSum");	
        if(but) {
            return false;
        } else {
	        return true;
        }
    };

    MaxGeoMenu.prototype.addSearchResult = function(options){

//    	console.log('add result',options);

        let elem1 = document.getElementById("result_box-geogoomax");
        if( elem1 ) elem1.remove();

        let result = options.result;
        if(result && result.length){
            const targetElement = document.getElementById('region_input_box-geogoomax');


            if(!targetElement) return false;
            let minusLeft = 30;


            let top = parseFloat(targetElement.offsetTop) + 20;
            let left = parseFloat(targetElement.offsetLeft) + minusLeft;

            if(this.isMobile()) {
            	/*
                targetElement = document.getElementById("main");
                top = "top: " + (menuBox.position().top) +'px;';
                left = $('#main').position().left + 300;
                minusLeft = 0;
                */
            }

            result = result.slice(0, 50);
            let innerH = '';
            for(let i in result){
                let textArray = result[i].text.split(",");
                let secondPart = textArray.slice(1);
                secondPart = secondPart.join(", ");
                innerH = innerH + 
                    `<div class="choice_row_item" code="${result[i].code}" text="${result[i].text}" value="${result[i].place}">
                        <b>${textArray[0]}</b>, <small>${secondPart}</small>
                    </div>`;
            }

            const mn = document.createElement('div');

            mn.innerHTML = `<div id="result_box-geogoomax" class="hdtb-mn-o open" aria-expanded="true" style="${top}px; left:${left}px;padding: 16px 0;">
            	${innerH}
			</div>`;


            targetElement.appendChild( mn.firstChild );

            const els = targetElement.getElementsByClassName("choice_row_item")

           	Array.prototype.forEach.call(els, function(el) {
	
				el.addEventListener('click', function(elem) {

	            	console.log('choice',this);

	                let textForSort = this.getAttribute("text").split(",").reverse().join(",");
	                let text = this.innerHTML;
	                let place = this.getAttribute("value");
	                let code = this.getAttribute("code");

	                chrome.runtime.sendMessage({
	                    'title': 'savePlace',
	                    'body' : {"place" : place, "text" : text, "textForSort" : textForSort, "code" : code}
	                });

			        chrome.runtime.sendMessage({
			            'title': 'saveSetting',
			            'body' : {
			                setting : "currentGoogleRegion",
			                value : {"place" : place, "text" : text, "code" : code}
			            }
			        });
                    document.location.reload();
	            });

            });
        }
    };

    MaxGeoMenu.prototype.addMenuButton = function(settings){

 //   	console.log(settings);

    	const butpanel = document.querySelector(this.googleSelectors.button_line);

        if(
            butpanel && !document.querySelector('#hdtb-tls-geogoomax') && settings.switch_on
        ) {

            var e = document.createElement('div');

            if(this.isMobile()) {
	            e.innerHTML = `<div class="t2vtad" id="hdtb-tls-geogoomax" aria-controls="hdtbMenus" aria-expanded="false" role="button" tabindex="0"><span style="width:16px;height:16px;display:inline-block;margin-right:5px;transform:translateY(2px);">
<svg focusable="false" viewBox="0 0 128 128"><defs><style>.cls-1{fill:#3b4551;}.cls-2{fill:#E52626;}</style></defs><title>a</title><path class="cls-1" d="M102.64854,88.474v4.17013L62.48166,86.32006,47.50738,56.38876H69.73621c-.448-1.03385-.87883-2.10221-1.27523-3.18781a51.739,51.739,0,0,1-1.55078-4.99721H4.96253A4.08891,4.08891,0,0,0,.8614,52.30487v68.80582a4.08891,4.08891,0,0,0,4.10113,4.10113h101.7699a4.08891,4.08891,0,0,0,4.10113-4.10113V81.02994A87.74276,87.74276,0,0,1,102.64854,88.474ZM9.06366,56.38876H38.34015L52.539,84.752,9.06366,77.911Zm0,60.6208V86.21667l47.97286,7.54745,11.63134,23.24543Zm93.58488,0H77.835L66.99633,95.33226l35.65221,5.61752Z"/><path class="cls-2" d="M121.25635,14.47589C115.86327,7.37984,107.2219,2.78818,98.711,2.78818S81.55854,7.37984,76.16546,14.47589c-7.5769,9.9696-7.04357,25.51928-2.85009,36.94658C80.80644,71.8361,98.71085,84.983,98.71085,84.983s17.90451-13.14689,25.3957-33.56052C128.29992,39.99517,128.83325,24.44549,121.25635,14.47589ZM98.711,48.69869a17.97077,17.97077,0,1,1,17.97067-17.97077A17.97081,17.97081,0,0,1,98.711,48.69869Z"/></svg>
				</span>GeoGooMax</div>`;
            }
            else{
	            e.innerHTML = `<div class="t2vtad" id="hdtb-tls-geogoomax" aria-controls="hdtbMenus" aria-expanded="false" role="button" tabindex="0"><span style="width:16px;height:16px;display:inline-block;margin-right:5px;transform:translateY(2px);">
<svg focusable="false" viewBox="0 0 128 128"><defs><style>.cls-1{fill:#3b4551;}.cls-2{fill:#E52626;}</style></defs><title>a</title><path class="cls-1" d="M102.64854,88.474v4.17013L62.48166,86.32006,47.50738,56.38876H69.73621c-.448-1.03385-.87883-2.10221-1.27523-3.18781a51.739,51.739,0,0,1-1.55078-4.99721H4.96253A4.08891,4.08891,0,0,0,.8614,52.30487v68.80582a4.08891,4.08891,0,0,0,4.10113,4.10113h101.7699a4.08891,4.08891,0,0,0,4.10113-4.10113V81.02994A87.74276,87.74276,0,0,1,102.64854,88.474ZM9.06366,56.38876H38.34015L52.539,84.752,9.06366,77.911Zm0,60.6208V86.21667l47.97286,7.54745,11.63134,23.24543Zm93.58488,0H77.835L66.99633,95.33226l35.65221,5.61752Z"/><path class="cls-2" d="M121.25635,14.47589C115.86327,7.37984,107.2219,2.78818,98.711,2.78818S81.55854,7.37984,76.16546,14.47589c-7.5769,9.9696-7.04357,25.51928-2.85009,36.94658C80.80644,71.8361,98.71085,84.983,98.71085,84.983s17.90451-13.14689,25.3957-33.56052C128.29992,39.99517,128.83325,24.44549,121.25635,14.47589ZM98.711,48.69869a17.97077,17.97077,0,1,1,17.97067-17.97077A17.97081,17.97081,0,0,1,98.711,48.69869Z"/></svg>
				</span>GeoGooMax</div>`;
            }
            butpanel.appendChild(e);

            const but = document.getElementById('hdtb-tls-geogoomax');
            let top = parseFloat(but.offsetTop) - 2;
            let left = parseFloat(but.offsetLeft) - 16;

	        if(this.isMobile() ) {
/*	        	
	            top = parseFloat( document.getElementById("sfcnt").offsetTop + 50 );
	            left = 0;
*/	            
	        }

            const mn = document.createElement('div');

            mn.innerHTML = `<div id="regions_box-geogoomax" class="hdtb-mn-o" aria-expanded="true" style="${top}px; left:${left}px;">
            <div id="region_input_box-geogoomax">
            	<label>Select region:</label>
                <input id="region_input-geogoomax" type="text" list="state_list" placeholder="search region">
                <div id="result_region_input-geogoomax"></div>
            </div>
            <div class="geogoomax_geo_category_title">Saved regions:</div>
            <div id="saved_regions_box-geogoomax"></div>
			</div>`;

            const targetElement = document.querySelector(this.googleSelectors.append_box);

            targetElement.appendChild(mn.firstChild);

            chrome.storage.local.get(['places', 'settings'], function(items) {
                let places = items.places;
                if(places){
	                let msavedPlace = '';
                    for(let i in places) {
                    	msavedPlace = msavedPlace + `
			                <div class="data_row_item" code="${places[i].code}" value="${places[i].place}">
			                    ${places[i].text}
			                </div>
                    	`;
                    }

                    const savedr = document.getElementById("saved_regions_box-geogoomax");
                    savedr.innerHTML = msavedPlace;

		            const els = savedr.getElementsByClassName('data_row_item');
					Array.prototype.forEach.call(els, function(el) {

						el.addEventListener('click', function(elem) {

				            const place = this.getAttribute("value");
				            const code = this.getAttribute("code");
					        chrome.runtime.sendMessage({
					            'title': 'saveSetting',
					            'body' : {
					                setting : "currentGoogleRegion",
					                value : {"place" : place, "text" : this.innerHTML, "code" : code }
					            }
					        });
                            document.location.reload();
				    	});
		            });

                }

                let settings = items.settings;
                if(settings && settings.currentGoogleRegion){
 //               	console.log(settings.currentGoogleRegion);
                	document.getElementById("region_input-geogoomax").setAttribute('placeholder',settings.currentGoogleRegion.place);
                }
            });


            but.addEventListener('click',function(e){
            	const submenu = document.getElementById('regions_box-geogoomax');
            	submenu.classList.toggle('open');

            });

            const searchInput = document.getElementById("region_input-geogoomax");
            searchInput.addEventListener("input", function(e){

                let query = searchInput.value.trim();
                if(query){
                    var isRuQuery = query.match("[а-яА-Я]");
                    chrome.runtime.sendMessage({
                        'title': 'getDataByQuery',
                        'body' : {
                            query : query,
                            isRuQuery : isRuQuery,
                        }
                    });
                }
                else document.getElementById("result_region_input-geogoomax").classList.remove("open");
            });

            const foot = document.getElementById("gc9Iqb");
            if( foot && window.location.href.match("[&\?]geomaxim=([^&]+)") ) {
            	foot.innerHTML = 'GeoGooMax';
            }

        }
    };

    return new MaxGeoMenu();

})();

chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {
	const title = response.title;

    if( title === 'addMenuButton' && response.settings ) {
    	MAX_GEO_MENU.addMenuButton(response.settings);
    }

    else if (title == 'regionSearchResult' && response.body) {
        MAX_GEO_MENU.addSearchResult(response.body);
    }


});