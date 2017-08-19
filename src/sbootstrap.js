"use strict";

var templates = [
	"tab",
	"panel",
];

$(document).ready(function() {
	scan();
});



/**
 * Scan all templates of project
 * Check functions and templates
 */
function scan(){
	for( var i = 0; i < templates.length; i++){
		var template_item = templates[i];
		var items = $(template_item);
        for (var j = 0; j < items.length; j++){
        	// check replacer function
        	var tabTest = new Tab($(items[j]),j);
        	if(eval("typeof " + "tabTest."+template_item+"Replacer") == "function"){
        		$(items[j]).index = j;
                eval("tabTest."+template_item+"Replacer()");
			}
			console.log(j);	
        }
	}
	var panel = new Panel($("panel"), 0);
	panel.replacer();

}


