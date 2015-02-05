/* qml.core javascript code */

if (!_globals.core)
	_globals.core = {}

_globals.core.Object = function() {
}

function Context() {
	var windowW = $(window).width();
	var windowH = $(window).height();
	console.log("window size: " + windowW + "x" + windowH);
	body = $('body');
	body.append("<div id='renderer'></div>");
	this.element = $('#renderer')
	this.element.css({width: windowW, height: windowH});
	console.log("context created");
}

exports.add_property = function(self, type, name) {
	var value;
	switch(type) {
		case 'int':			value = 0;
		case 'bool':		value = false;
		case 'real':		value = 0.0;
		default: if (type[0].toUpperCase() == type[0]) value = null;
	}
	Object.defineProperty(self, name, {
		get: function() {
			return value;
		},
		set: function(newValue) {
			value = newValue;
			self._update(name, newValue);
		}
	});
}

exports.context = new Context();
