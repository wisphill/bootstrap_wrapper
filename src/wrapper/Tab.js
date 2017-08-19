class Tab extends Base{
    constructor(selector, index){
        super(selector, index);

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

        this.listTabItem = new Array();
    }

    createBlock(){
        // main block and container
        this.tab_block = document.createElement('div');
        $(this.tab_block).attr("id", "tab" + this.index);
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

        this.tab_item = this.selector.children();
        for (var i = 0; i < this.tab_item.length; i++) {
            this.currentTabItem = i;
            // properties
            var tab_active  = $(this.tab_item[i]).attr("active");
            var tab_link    = $(this.tab_item[i]).find($('tab-title')).attr("link");
            var tab_title   = $(this.tab_item[i]).find($('tab-title')).html();
            var tab_content = $(this.tab_item[i]).find('tab-content:first').html();

            var tabItem = new this.TabItem(this.index, i, $(this.tab_item[i]), tab_active, tab_link, tab_title, tab_content);
            $(tab_content_block).append(tabItem.getContent());
            // re-structure
            ul.appendChild(tabItem.getItem());
        }
        this.tab_block.append(ul);
        this.tab_block.append(tab_content_block);
    }

    tabReplacer() {
        this.createBlock();
        // replace
        this.selector.replaceWith(this.tab_block);
    }

    tab_item_preload(item_id) {
        // body...
        this.selector.ready(function(){
        });
    }
}
