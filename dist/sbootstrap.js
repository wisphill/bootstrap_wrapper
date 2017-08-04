var templates = [
	"tab",
	"next-template",
];

$(document).ready(function() {
	scan();
});

// NOTE: eval
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
        	if(eval("typeof " + template_item+"Replacer") == "function"){
                eval(template_item+"Replacer")($(items[j]), j);
			}
			console.log(j);	
        }
	}
}

function tabReplacer(tab, index) {
	// body and base...
	var tab_block = document.createElement('div');
	$(tab_block).attr("id", "tab" + index);
	$(tab_block).addClass("container");

	var ul = document.createElement('ul');
    $(ul).addClass("nav nav-tabs");

    var tab_content_block = document.createElement('div');
    $(tab_content_block).addClass("tab-content");
    //
	var tab_item = tab.children();

    for (var i = 0; i < tab_item.length; i++) {
		// properties
        var tab_active  = $(tab_item[i]).attr("active");
		var tab_link    = $(tab_item[i]).find($('tab-title')).attr("link");
		var tab_title   = $(tab_item[i]).find($('tab-title')).html();
		var tab_content = $(tab_item[i]).find('tab-content:first').html();

		// create element and replace content
        var a = document.createElement('a');
        $(a).attr('href', "#tab"+index +"item"+i);
        $(a).attr('data-toggle', 'tab');
        $(a).html(tab_title);

        if( tab_active != null){
            if (tab_active == "on"){
                $(a).addClass('nav-link active');
            } else if (tab_active == "off"){
                $(a).addClass('nav-link disabled');
            } else {
                $(a).addClass('nav-link');
            }
        } else {
            $(a).addClass('nav-link');
        }

		var divContent = document.createElement("div");
        $(divContent).attr("id", "tab"+index+"item"+i);
        if (tab_active == "on"){

        	$(divContent).addClass("tab-pane fade active show");
	    } else {

        	$(divContent).addClass("tab-pane fade");
	    }
        $(divContent).html(tab_content);
        $(tab_content_block).append(divContent);
        // re-structure
        var li = document.createElement('li');
        $(li).addClass("nav-item");
		li.appendChild(a);
		ul.appendChild(li);
	}


	$(tab_block).append(ul);
    tab_block.append(tab_content_block);
    // replace
    tab.replaceWith(tab_block);
}

function tab_title_replacer(tab_title) {
	// body...
}

function tab_content_replacer(tab_content) {
	// body...
}


function tab_event(argument) {
	// body...
}