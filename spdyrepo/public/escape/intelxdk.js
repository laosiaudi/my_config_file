//mostly empty placeholder to prevent 404

//check for cordova.js - make demos work that expect intexdk.js
window.addEventListener('load', function(e){
	if( document.querySelector("script[src='cordova.js']") == null ) {
		//cordova.js is missing: add it
		var cdv = document.createElement("script");
		cdv.type = "text/javascript";
		cdv.src = "cordova.js";
		document.getElementsByTagName('head')[0].appendChild(cdv);
	}
}, false);
