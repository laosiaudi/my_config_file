cordova.define("com.otc.gamecenter.appmanager.AppManager", function(require, exports, module) {
	var exec = require("cordova/exec");

	// var AppManager = function() {
	// 	var getAppList = 
	//
	exports.removeApp = function(cb, packagename) {
		exec(cb, cb, "AppManager", "remove", [packagename]);
	}
	exports.getAppList = function(cb) {
		exec(cb, cb, "AppManager", "taskList");
	}
	exports.addApp = function(cb, fcb, packagename) {
		exec(cb, fcb, "AppManager", "add", [packagename]);
	}
	exports.start = function(cb, fcb, packagename, url) {
		exec(cb, fcb, "AppManager", "start", [packagename, url]);
	}
  exports.addShortCut = function(cb, packagename, url) {
    exec(cb, cb, "AppManager", "shortcut", [packagename, url]);
  }
});
