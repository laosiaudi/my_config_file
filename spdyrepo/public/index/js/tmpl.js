(function() {
	var TMPL = {};
	TMPL.tmpl_launch_card = function(packageName) {
		var app = res[packageName];
		var h = ['<div class="card" packageName="' + packageName + '">',
					  	'<div class="cover">',
					  		'<div class="thumb-nail"><img src="' + app.img + '" /></div>',
					  	'</div>',
					  	'<div class="name">' + app.name + '</div>',
					  '</div>'];

		return h.join('');
	}

	TMPL.tmpl_launch_status = function(packageName) {
		var app = res[packageName];
		var h = [
			'<div class="swipeCon">',
			 	'<div class="manage-item" packageName="' + app.packageName + '">',
			  	'<div class="cover">',
			  		'<div class="thumb-nail"><img src="' + app.img + '" /></div>',
			  	'</div>',
			  	'<div class="name">' + app.name + '</div>',
			  '</div>',
			'</div>'];

		return h.join('');
	}

	this.TMPL = TMPL;
}).call(this);