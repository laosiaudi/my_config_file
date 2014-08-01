/*
 *	The switcher is for moblie window switch
 *	It requires the element position absolute, its container element position relative
 *
 *  version 0.1 jquery require
 *	author: xiao peng
 */

(function() {
	var swipeMinWidth = 8;
	var lockTime = 500;
	var transDelay = 200;

	var Switcher = function($con, $nav, windowNum) {
		this.startX = 0;
		this.startY = 0;

		this.element = $con;
		this.nav = $nav;

		this.mobile = true;
		this.windowNum = windowNum;

		this.left = 0;
		this.blockleft = [0];
		this.currentIndex = 0;
		this.on = false;
		this.lock = false;
		this.fingerlock = false;

		this.initEventHandler();
		this.initNav();

		return this;
	}

	Switcher.prototype.switchWindow = function(v, doTrans) {
		var _this = this;
		var clientWidth = $(window).width();

		if(v >=0 && v < this.windowNum) {
			this.left = -1 * v * clientWidth;	
			this.currentIndex = v;

			if(doTrans) {
				this.element.addClass('trans');
				this.lock = true;
				setTimeout(function() {_this.lock = false}, _this.lockTime);
			}
			else this.element.removeClass('trans');
			this.element.css("left", this.left);

			this.navs.removeClass('active');
			this.navs.eq(v).addClass('active');
			this.block.css("left", this.blockleft[v]);
			this.block.css("width", this.navs.eq(v).width());
		}
		// if(v == 1 && this.left > this.showcaseContainerMinLeft) this.left -= clientWidth;
		// if(v == -1 && this.left < 0) this.left += clientWidth;
	}

	Switcher.prototype.initNav = function() {
		var _this = this;
		var navs = _this.navs = _this.nav.find('li');
		var block = _this.block = _this.nav.find('.active-block');	

		block.css('width', navs.eq(0).width());

		for(var i = 0; i < navs.length; i++) {
			(function(i) {
				navs.eq(i).bind('touchend', function() {
					_this.switchWindow(i, false);					
				})
				if(i != 0) _this.blockleft[i] = navs.eq(i - 1).width() + _this.blockleft[i - 1];
			})(i);
		}
	}

	Switcher.prototype.initEventHandler = function() {
		var _this = this;

		_this.element[0].addEventListener('touchstart', function(e) {
			if(_this.lock || !e.touches) return;

			var touch = e.touches[0];

			_this.startX = touch.pageX;
			_this.startY = touch.pageY;	
			_this.on = true;		

			_this.element.removeClass('trans');	
		});

		_this.element[0].addEventListener('touchend', function(e) {
			if(_this.lock || !e.touches) return;

			var endX = e.changedTouches[0].pageX;
			var clientWidth = $(window).width();

			if(_this.startX - endX > clientWidth / 4) _this.switchWindow(_this.currentIndex + 1, true);
			else if(_this.startX - endX < -1 * clientWidth / 4) _this.switchWindow(_this.currentIndex - 1, true);
			else _this.switchWindow(_this.currentIndex, true);

			_this.on = false;
			_this.fingerlock = false;
		});

		_this.element[0].addEventListener('touchmove', function(e) {			
			if(_this.fingerlock || _this.lock || !e.touches || !_this.on) return;

			var moveX = e.touches[0].pageX;
			var moveY = e.touches[0].pageY;

			if(Math.abs(moveX - _this.startX) < Math.abs(moveY - _this.startY)) {
			  _this.fingerlock = true;
			  return;
			}
			else {
				e.preventDefault();
				if(_this.startX > moveX && _this.currentIndex < _this.windowNum - 1 ||
				_this.startX < moveX && _this.currentIndex > 0) _this.element.css('left', _this.left - (_this.startX - moveX));
			}
		});
	}

	var Swiper = function($swipeitem, cb) {
		var _this = this;
		this.element = $swipeitem;
		this.mobile = true;
		this.lock = false;
		this.initailLeft = 0;
		this.callback = cb;
		this.startX = 0;
		this.startY = 0;

		_this.element[0].addEventListener('touchstart', function(e) {
			if(_this.lock || !e.touches) return;

			var touch = e.touches[0];

			_this.startX = touch.pageX;
			_this.startY = touch.pageY;	
			_this.on = true;		
		});

		_this.element[0].addEventListener('touchend', function(e) {
			if(_this.lock || !e.touches) return;

			var endX = e.changedTouches[0].pageX;

			if(endX - _this.startX > _this.element.width() / 3) _this.fade(true);
			else _this.fade(false);

			_this.on = false;
		});

		_this.element[0].addEventListener('touchmove', function(e) {			
			if(_this.fingerlock || _this.lock || !e.touches || !_this.on) return;

			var moveX = e.touches[0].pageX;
			var moveY = e.touches[0].pageY;

			if(Math.abs(moveX - _this.startX) < Math.abs(moveY - _this.startY)) {
			  return;
			}
			else {
				e.preventDefault();
				if(_this.startX < moveX) {
					_this.element.css('left', - (_this.startX - moveX));
					_this.element.css('opacity', 1 - (moveX - _this.startX) / _this.element.width());
				}
			}
		});		
	}

	Swiper.prototype.fade = function(close) {
		var _this = this;

		_this.element.addClass('trans');
		_this.lock = true;		

		if(close) {
			_this.element.css("opacity", 0);
			_this.element.css("left", _this.width);
			_this.callback();

			setTimeout(function() {
				_this.element.parent().css("height", 0);
				setTimeout(function() {
					_this.element.parent().remove();
				}, transDelay + 100);	
			}, transDelay);
		}
		else {
			_this.element.css("opacity", 1);
			_this.element.css("left", _this.initailLeft);
		}

		setTimeout(function() {_this.lock = false;_this.element.removeClass('trans')}, transDelay);
	}

	this.Swiper = Swiper;
	this.Switcher = Switcher;
}).call(this);
