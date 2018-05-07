import Base from "./Base/Base.js"

/**
	Syntax:
	<breadcrumb>
		<item></item>
		<item></item>
		<item></item>
	</breadcrumb>
**/
export default class Breadcrumb extends Base {
	constructor(selector, index){
        super(selector, index);

		this.BreadcrumbItem = function (itemIndex, active, content) {
			this.itemIndex = itemIndex;
			this.active = active;
			this.content = content;

			this.Body = function () {
				var li = document.createElement('li');
				$(li).addClass('breadcrumb-item');

				if (active == 'on'){
					$(li).addClass('active');
				}

				$(li).html(this.content);
				return li;
            };
        }
	}

	createBlock(){
		this.main_block = document.createElement('ol');
		this.check();
		$(this.main_block).attr('id', 'breadcrumb-' + this.index);
		$(this.main_block).addClass("breadcrumb")
		this.addMainElement();
	}

	addMainElement(){

        this.breadcrumb_item = this.selector.children();
        for (var i = 0; i < this.breadcrumb_item.length; i++) {
            this.currentBreadcrumbItem = i;
            // properties
            var item_active  = $(this.breadcrumb_item[i]).attr("active");
            var item_content = $(this.breadcrumb_item[i]).html();

            var breadcrumbItem = new this.BreadcrumbItem(i, item_active, item_content);
            $(this.main_block).append(breadcrumbItem.Body());
        }
	}
}