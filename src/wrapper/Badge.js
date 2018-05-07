import Base from "./Base/Base.js"

/**
    Syntax:
    <badge type="primany">
        Main content of this badge
    </badge>
 **/
export default class Badge extends Base {
    /**
     * Badge contains:
     * 1. Type
     * 2. Content
     * 3. Pill
     * @param selector
     * @param index
     */
    constructor(selector, index){
        super(selector, index);

        this.badgeContent = function () {
            // get content of badge
            return $(this.selector).html();
        }

        this.badgePill = function () {
            // get content of badge
            return $(this.selector).attr('pill');
        }

        this.badgeType = function () {
            // get type of badge
            return $(this.selector).attr('type');
        }
    }

    createBlock(){
        this.main_block = document.createElement('span');
        this.check();
        $(this.main_block).attr('id', 'badge-' + this.index);
        this.addMainElement();
    }

    addMainElement(){
        $(this.main_block).addClass('badge badge-'+  this.badgeType());
        $(this.main_block).html(this.badgeContent());

        var pill = this.badgePill();
        if (pill == "on"){
            $(this.main_block).addClass('badge-pill');
        }
    }
}