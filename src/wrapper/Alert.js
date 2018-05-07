import Base from "./Base/Base.js"

/**
	Syntax:
	<alert type="primany">
		Main content of this alert
	</alert>
**/
export default class Alert extends Base {
	constructor(selector, index){
        super(selector, index);

		this.alertContent = function () {
			// get content of alert
			return $(this.selector).html();
		}
	}

	createBlock(){
		this.main_block = document.createElement('div');
		this.check();
		$(this.main_block).attr('id', 'alert-' + this.index);
		$(this.main_block).attr("role", "alert");
		$(this.main_block).addClass("alert")
		this.addMainElement();
	}

	addMainElement(){
		var type = $(this.selector).attr("type");
		$(this.main_block).addClass('alert alert-'+  type);
		$(this.main_block).html(this.alertContent());
	}
}