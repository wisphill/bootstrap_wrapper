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
class Tab{


	constructor(selector, index){
		this.setSelector(selector);
		this.setIndex(index);
		this.currentTabItem = 0;

		this.TabItem = function (tabIndex, itemIndex, selector, active, link, title, content) {
			// body...
			tabIndex: tabIndex;
			itemIndex: itemIndex;
			selector: selector;
			active: active;
			link: link;
			title: title;
			content: content;
			this.getItem = function () {
				// body...
				var a = document.createElement('a');
		        $(a).attr('href', "#tab-content-"+ tabIndex+"-item-"+itemIndex);
		        $(a).attr('data-toggle', 'tab');
		        $(a).html(title);

		        	        // check and active tab item
		        if( active != null){
		            if (active == "on"){
		                $(a).addClass('nav-link active');
		            } else if (active == "off"){
		                $(a).addClass('nav-link disabled');
		            } else {
		                $(a).addClass('nav-link');
		            }
		        } else {
		            $(a).addClass('nav-link');
		        }

	        	var li = document.createElement('li');
	        	$(li).addClass("nav-item");
	        	li.appendChild(a);
	        	return li;

			};
			this.getContent = function () {
				// body...
				// check and active contenblock
				var divContent = document.createElement("div");
		        $(divContent).attr("id", "tab-content-"+ tabIndex+"-item-"+itemIndex);
		        //console.log("tab-index  " + tabIndex + itemIndex);
		        if (active == "on"){

		        	$(divContent).addClass("tab-pane fade active show");
			    } else {

		        	$(divContent).addClass("tab-pane fade");
			    }
	        	$(divContent).html(content);
			    return divContent;
			}
		}

		this.listTabItem = new this.TabItem();
	}

	setIndex(index){
		this.tab_index = index;
	}

	setSelector(selector){
		this.tab_selector = selector;
	}

	createTabBlock(){
		// main block and container
		this.tab_block = document.createElement('div');
		$(this.tab_block).attr("id", "tab" + this.tab_index);
		$(this.tab_block).addClass("container");
		this.addMainElement();
	}

	addMainElement(){
		var tab_content_block = document.createElement('div');
	    $(tab_content_block).addClass("tab-content");
	    console.log(tab_content_block);
	    // Main element
		var ul = document.createElement('ul');
	    $(ul).addClass("nav nav-tabs");

		this.tab_item = this.tab_selector.children();
	    for (var i = 0; i < this.tab_item.length; i++) {
	    	this.currentTabItem = i;
			// properties
			var tab_active  = $(this.tab_item[i]).attr("active");
			var tab_link    = $(this.tab_item[i]).find($('tab-title')).attr("link");
			var tab_title   = $(this.tab_item[i]).find($('tab-title')).html();
			var tab_content = $(this.tab_item[i]).find('tab-content:first').html();

			var tabItem = new this.TabItem(this.tab_index, i, $(this.tab_item[i]), tab_active, tab_link, tab_title, tab_content);
	        $(tab_content_block).append(tabItem.getContent());
	        // re-structure
			ul.appendChild(tabItem.getItem());
		}
		this.tab_block.append(ul);
	    this.tab_block.append(tab_content_block);
	}

	tabReplacer() {
		this.createTabBlock();
	    // replace
	    this.tab_selector.replaceWith(this.tab_block);
	}

	tab_item_preload(item_id) {
		// body...
		this.tab_selector.ready(function(){
		});
	}
}


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
}


