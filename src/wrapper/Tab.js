import Base from "./Base/Base.js";

export default class Tab extends Base{
    constructor(selector, index){
        super(selector, index);

        this.currentTabItem = 0;

        this.TabItem = function (itemIndex, active, link, title, content) {
            // body...
            this.itemIndex = itemIndex;
            this.active    = active;
            this.link      = link;
            this.title     = title;
            this.content   = content;
            this.Header = function () {
                // body...
                var a = document.createElement('a');
                $(a).attr('href', "#tab-content-"+ index +"-item-"+ this.itemIndex);
                $(a).attr('data-toggle', 'tab');
                $(a).html(this.title);

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
            this.Body = function () {
                // body...
                // check and active contenblock
                var divContent = document.createElement("div");
                $(divContent).attr("id", "tab-content-"+ index +"-item-"+ this.itemIndex);
                if (active == "on"){

                    $(divContent).addClass("tab-pane fade active show");
                } else {

                    $(divContent).addClass("tab-pane fade");
                }
                $(divContent).html(this.content);
                return divContent;
            }
        }

        this.listTabItem = new Array();
    }

    createBlock(){
        // main block and container
        this.main_block = document.createElement('div');
        $(this.main_block).attr("id", "tab" + this.index);
        this.addMainElement();
    }

    addMainElement(){
        var tab_content_block = document.createElement('div');
        $(tab_content_block).addClass("tab-content");
        console.log(tab_content_block);
        // Main element
        var ul = document.createElement('ul');
        $(ul).addClass("nav nav-tabs");

        this.tab_item = this.selector.children();
        for (var i = 0; i < this.tab_item.length; i++) {
            this.currentTabItem = i;
            // properties
            var tab_active  = $(this.tab_item[i]).attr("active");
            var tab_link    = $(this.tab_item[i]).find($('tab-title')).attr("link");
            var tab_title   = $(this.tab_item[i]).find($('tab-title')).html();
            var tab_content = $(this.tab_item[i]).find('tab-content:first').html();

            var tabItem = new this.TabItem(i, tab_active, tab_link, tab_title, tab_content);
            $(tab_content_block).append(tabItem.Body());
            // re-structure
            ul.appendChild(tabItem.Header());
        }
        this.main_block.append(ul);
        this.main_block.append(tab_content_block);
    }


    tab_item_preload(item_id) {
        // body...
        this.selector.ready(function(){
        });
    }
}
