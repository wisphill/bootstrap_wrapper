/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);

class Panel extends Base{
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


/***/ }),
/* 1 */
/***/ (function(module, exports) {



class Base{
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


/***/ })
/******/ ]);