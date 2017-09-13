//require("./Base/Base.js");

import Base from "./Base/Base.js";

export default class Panel extends Base{
    constructor(selector, index){
        super(selector, index);

        this.panelTitle = function () {
            return $(this.selector).find("panel-title").html();
        };

        console.log(this.panelTitle());
        this.panelBody = function () {
            return $(this.selector).find("panel-body").html();
        };

    }

    createBlock(){
        // main block and container
        this.main_block = document.createElement('div');
        $(this.main_block).attr("id", "panel" + this.index);
        $(this.main_block).addClass("panel panel-default");
        this.addMainElement();
    }

    addMainElement(){
        var panelTitle = document.createElement('div');
        $(panelTitle).addClass('panel-heading');

        $(panelTitle).html(this.panelTitle());
        console.log(panelTitle);

        var panelBody = document.createElement('div');
        $(panelBody).addClass('panel-body');
        $(panelBody).html(this.panelBody());

        this.main_block.appendChild(panelTitle);
        this.main_block.appendChild(panelBody);

    }
}
