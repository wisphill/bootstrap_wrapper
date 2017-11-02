"use strict";


// remove
require('./../lib/js/bootstrap.min.js');

import './../lib/css/bootstrap.css';
import './../lib/css/tether.css';

import Panel from './wrapper/Panel.js';
import Tab from './wrapper/Tab.js';
import Form from './wrapper/Form/Form.js';
import FormInput from './wrapper/Form/Component/FormInput.js';

var component_types = [
	Tab,
	Panel,
    Form,
	FormInput
];

$(document).ready(function() {
	scan();
});



/**
 * Scan all component_types of project
 * Check functions and component_types
 */
function scan(){
	for( var i = 0; i < component_types.length; i++){
	    // item type
		var template_item = component_types[i];
		// list item
		var items = $(template_item.name.toLowerCase());
        for (var j = 0; j < items.length; j++){
            $(items[j]).index = j;
            var objectSelector = new (Function.prototype.bind.call(template_item, null, $(items[j]), j));
            objectSelector.replacer();
        }
	}
}


