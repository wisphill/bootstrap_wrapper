export default class Base{
    constructor(selector, index) {
        console.log(selector);
        this.setSelector(selector);
        this.setIndex(index);

    }


    setIndex(index){
        this.index = index;
    }

    setSelector(selector){
        this.selector = selector;
    }

    setMainId(mainId){
        this.mainId = mainId;
    }


    replacer() {
        this.createBlock();
        // replace
        $(this.selector).replaceWith(this.main_block);
    }

    check(){
        this.checkId();
        this.checkTooltip();
    }

    checkId(){
        this.id = $(this.selector).attr('id');
        if (this.id != '' ){
            if (this.main_block != null) {
                $(this.main_block).attr('id', this.id);
            }
        }
    }

    checkTooltip(){

        this.data_toggle = $(this.selector).attr('data-toggle');
        this.data_placement = $(this.selector).attr('data-placement');
        this.title = $(this.selector).attr('title');
        //data-toggle="tooltip" data-placement="top" title="Tooltip on top"
        if (this.data_toggle == 'tooltip' ){
            if (this.main_block != null){
                $(this.main_block).attr('data-toggle', this.data_toggle);
                $(this.main_block).attr('data-placement', this.data_placement);
                $(this.main_block).attr('title', this.title);
            }
        }
    }


}
