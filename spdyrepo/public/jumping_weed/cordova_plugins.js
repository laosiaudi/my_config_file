cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.core.battery-status/www/battery.js",
        "id": "org.apache.cordova.core.battery-status.battery",
        "clobbers": [
            "navigator.battery"
        ]
    },
    {
        "file": "plugins/com.intel.xdk.stub/www/intelxdk.js",
        "id": "com.intel.xdk.stub.intelxdkstub",
        "clobbers": [
            "intel.xdk"
        ]
    }
]
});