function layout() {
	var clientHeight = $(window).height();
	var clientWidth = $(window).width();

	var $showcases = $(".showcase");
	var $window = $(".window");
	var $viewapp = $(".view-list");
	var $manager = $(".manager-list");

	$showcases.css("height", clientHeight - 100);
	$window.css("height", clientHeight - 100);
	$viewapp.css("height", clientHeight - 105);
	$manager.css("height", clientHeight - 100);

	$showcases.css("width", clientWidth);

	for(var i = 1; i < $showcases.length; i++) {
		$showcases.eq(i).css("left", i * clientWidth);
	}
}

layout();

screen.lockOrientation('portrait');

var $sc = $(".showcase-container");
var $manager = $(".manager-list");
var $nav = $(".cnav");
var switcher = new Switcher($sc, $nav, 3);
var manager = new Manager($manager);

for(var i in res) {
	$(".view-list").append($(TMPL.tmpl_launch_card(i)));
}

$("#launcher .card").bind("click", function() {
	var $this = $(this);

	var pn = $this.attr('packageName');
	manager.addTask(pn);
})

$(window).bind("resize", function() {
	layout();
})

//Add long press event
$("#launcher .card").bind("touchstart", function() {
  var i = 0;
  var _this = $(this);
  var pn = _this.attr('packageName');

  timer = setInterval(function() {
    i += 10;
    if (i >= 500) {
      clearInterval(timer);
      longpress($(this)[0], pn);
    }
  }, 10)
}).bind("touchend", function() {clearInterval(timer);});

var time = 0;
function longpress(component, pn) {
  if (confirm("Create desktop shortcut for the game?")) {
    manager.shortCut(pn);
  }
}


