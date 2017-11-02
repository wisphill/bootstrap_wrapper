import Base from './../../Base/Base.js';

export default class FormInput extends Base{



    constructor(selector, index) {

        super(selector, index);
        this.formInputComponent = {
            "formLabelHtmlTag": "label",
            "formInputHtmlTag": "input"
        };
    }

    /**
     * Create main block of form input
     */
    createBlock(){
        // main block and container
        /*this.main_block = document.createElement('form');
        $(this.main_block).attr("id", "form" + this.index);
        $(this.main_block).addClass("form-horizontal");
        this.addMainElement();*/
        this.mainId = "form-input-";
        this.main_block = document.createElement("div");
        $(this.main_block).append(this.formLabel());
        $(this.main_block).append(this.formInputText());
        console.log("Result" + this.main_block);
    }

    /**
     * Create form input component
     */
    formLabel(){
        var formLabel = document.createElement(this.formInputComponent["formLabelHtmlTag"]);
        $(formLabel).addClass("control-label col-sm-2");
        $(formLabel).attr("id", this.mainId+ "-form-label-"+ this.index);
        $(formLabel).html("Form label");
        return formLabel;
    }

    formInputText(){
        var formInputDiv = document.createElement("div");
        $(formInputDiv).addClass("col-sm-10");

        var formInputText = document.createElement(this.formInputComponent["formInputHtmlTag"]);
        $(formInputText).addClass("form-control");
        $(formInputText).attr("id", this.mainId+ "-form-input-"+ this.index);
        $(formInputText).attr("type" , "text");
        $(formInputText).attr("placeholder", "Enter...");

        formInputDiv.appendChild(formInputText);
        return formInputDiv;
    }
}