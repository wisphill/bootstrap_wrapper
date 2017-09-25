import Base from './Base/Base.js';

export default class Form extends Base{
    constructor(selector, index){

        super(selector, index);
        // define form group item
        this.FormGroup = function(formGroupIndex, formGroupContent){
            this.formGroupIndex   = formGroupIndex;

            this.formGroupContent = formGroupContent;

            this.Body             = function(){
                var divContent = document.createElement("div");
                $(divContent).addClass("form-group");
                $(divContent).attr("id", "form-group-"+ index +"-item-"+formGroupIndex);
                $(divContent).html(this.formGroupContent);
                return divContent;
            }
        }
    }

    createBlock(){
        // main block and container
        this.main_block = document.createElement('form');
        $(this.main_block).attr("id", "form" + this.index);
        $(this.main_block).addClass("form-horizontal");
        this.addMainElement();
    }

    addMainElement(){

        this.formGroup = this.selector.children();
        for (var i = 0; i < this.formGroup.length; i++) {
            this.currentTabItem = i;
            // properties
            var formGroupContent = $(this.formGroup[i]).html();

            console.log("Content Form +" +formGroupContent);
            var formGroup = new this.FormGroup(i, formGroupContent);
            // re-structure
            this.main_block.appendChild(formGroup.Body());
        }
    }


}

