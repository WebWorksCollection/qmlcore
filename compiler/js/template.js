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
	{% for component in components -%}
		{{ component }}
	{%- endfor %}

	{{ imports }}

	return exports;
} )();
{% if module %}
module.exports = {{ns}}
module.exports.run = function(nativeContext) {
{% endif %}

try {
	var l10n = {{ l10n }}

	var context = {{ns}}._context = new qml.{{context_type}}(null, false, {id: 'qml-context-{{app}}', l10n: l10n, nativeContext: {% if module %} nativeContext {% else %} null {% endif %}})
	context.init()
	{{ startup }}
} catch(ex) { log("{{ns}} initialization failed: ", ex, ex.stack) }
{% if module %}

	return context
}
{% endif %}
