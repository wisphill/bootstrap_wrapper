//require("./Base/Base.js");

import Base from "./Base/Base.js";

export default class Panel extends Base{
    constructor(selector, index){
        super(selector, index);

        this.panelTitle = function () {
            return $(this.selector).find("panel-title").html();
        };

        this.panelBody = function () {
            return $(this.selector).find("panel-body").html();
        };

    }

    replacer(){
        this.createBlock();
        this.selector.replaceWith(this.panel_block);
    }

    createBlock(){
        // main block and container
        this.panel_block = document.createElement('div');
        $(this.panel_block).attr("id", "panel" + this.index);
        $(this.panel_block).addClass("panel panel-default");
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

        this.panel_block.appendChild(panelTitle);
        this.panel_block.appendChild(panelBody);

    }
}
