{% if strict %}'use strict'{% endif %}
{% if release %}var log = function() { }{% else %}var log = null{% endif %}
{{ manifest }}
/** @const @type {!CoreObject} */
var {{ns}} = (function() {/** @const */
	var exports = {}
	/** @const */
	var _globals = exports
	{{ prologue }}

	//========================================

	/** @const @type {!CoreObject} */
	var core = _globals.core.core
	{{ code }}

	{{ imports }}
	return exports
})()
{{ startup }}
