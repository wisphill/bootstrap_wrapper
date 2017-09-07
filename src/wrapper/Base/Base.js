export default class Base{
    constructor(selector, index) {
        this.setSelector(selector);
        this.setIndex(index);
    }


    setIndex(index){
        this.index = index;
    }

    setSelector(selector){
        this.selector = selector;
    }
}
