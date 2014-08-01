cordova.define("com.intel.xdk.stub.intelxdkstub", function(require, exports, module) { // (function () {

//     function notSupported(prop) {
//         var xwalkRe = new RegExp('Crosswalk/([^ ]*)');
//         var xwalkVersion = xwalkRe.exec(navigator.userAgent)[1];
//         var aaVersion = (typeof window.__APP_ANALYZER__ !== 'undefined') ? window.__APP_ANALYZER__.version() : null;
//         if (aaVersion) {
//             alert('intel.xdk.' + prop + ' is not supported by this version of App Analyzer (' + aaVersion + ')');
//         } else {
//             alert('intel.xdk.' + prop + ' is not supported by this version of the Crosswalk container (' + xwalkVersion + ')');
//         }
//     }

//     var intelXdkApiStub = {
//         // objects
//         get facebook() { notSupported('facebook'); },
//         get multitouch() { notSupported('multitouch'); },
//         get oauth() { notSupported('oauth'); },
//     };

//     module.exports = intelXdkApiStub;

// })();

(function () {

    //all of the extra handling was an attempt to make this work with "merges" instead of "clobbers"
    //but it didn't work
    //instead, reverted to clobbers - this means that this must be the first intel.xdk plugin or it will clobber the others
    
    var intelXdkApiStub = {
        notSupported: function(prop) {
            var xwalkRe = new RegExp('Crosswalk/([^ ]*)');
            var xwalkVersion = xwalkRe.exec(navigator.userAgent)[1];
            var aaVersion = (typeof window.__APP_ANALYZER__ !== 'undefined') ? window.__APP_ANALYZER__.version() : null;
            if (aaVersion) {
                alert('intel.xdk.' + prop + ' is not supported by this version of App Analyzer (' + aaVersion + ')');
            } else {
                alert('intel.xdk.' + prop + ' is not supported by this version of the Crosswalk container (' + xwalkVersion + ')');
            }
        },
        // objects
        get facebook() { 
            if(arguments.callee.caller.toString().indexOf("recursiveMerge")==-1) {
                this.notSupported('facebook');
            } else {
                if(console) console.log('skipped alert for facebook');
            } 
        },
        get multitouch() { 
            if(arguments.callee.caller.toString().indexOf("recursiveMerge")==-1) {
                this.notSupported('multitouch');
            } else {
                if(console) console.log('skipped alert for multitouch');
            } 
        },
        get oauth() { 
            if(arguments.callee.caller.toString().indexOf("recursiveMerge")==-1) {
                this.notSupported('oauth');
            } else {
                if(console) console.log('skipped alert for oauth');
            } 
        },
    };

    module.exports = intelXdkApiStub;

})();
});
