(function() {
	var Manager = function($list) {
		this.element = $list;

		return this;
	}

	Manager.prototype.addTask = function(packageName) {
		var app = res[packageName];		

		var taskEle = $(TMPL.tmpl_launch_status(packageName));
		taskEle.appendTo(this.element);

		AppManager.start(function(num) {
			var swiper = new Swiper(taskEle.children(), function(){
				AppManager.removeApp(function(num) {
				}, packageName);
			});
		}, function() {
		}, packageName, app.url);
	}

  Manager.prototype.shortCut = function(packageName) {
	var app = res[packageName];
    AppManager.addShortCut(function(num) {
    }, packageName, app.url);
  }

	this.Manager = Manager;
}).call(this);
