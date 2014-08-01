angular.module("gamecenter", []);
angular.module("gamecenter.home", []);

angular.module("gamecenter").controller("HeaderController", ["$scope", "$location", function($scope, $location) {
	var navs = [
		{name: "Launcher", href: "index.html"},
		{name: "New", href: "new.html"},
		{name: "Top", href: "top.html"}
	];

	
	$scope.navs = navs;

}]);