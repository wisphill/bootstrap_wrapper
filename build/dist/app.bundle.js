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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Base = function () {
    function Base(selector, index) {
        _classCallCheck(this, Base);

        this.setSelector(selector);
        this.setIndex(index);
    }

    _createClass(Base, [{
        key: "setIndex",
        value: function setIndex(index) {
            this.index = index;
        }
    }, {
        key: "setSelector",
        value: function setSelector(selector) {
            this.selector = selector;
        }
    }]);

    return Base;
}();

exports.default = Base;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Panel = __webpack_require__(2);

var _Panel2 = _interopRequireDefault(_Panel);

var _Tab = __webpack_require__(3);

var _Tab2 = _interopRequireDefault(_Tab);

var _Form = __webpack_require__(4);

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var templates = ["tab", "panel"];

$(document).ready(function () {
	scan();
});

/**
 * Scan all templates of project
 * Check functions and templates
 */
function scan() {
	for (var i = 0; i < templates.length; i++) {
		var template_item = templates[i];
		var items = $(template_item);
		for (var j = 0; j < items.length; j++) {
			// check replacer function
			var tabTest = new _Tab2.default($(items[j]), j);
			if (eval("typeof " + "tabTest." + template_item + "Replacer") == "function") {
				$(items[j]).index = j;
				eval("tabTest." + template_item + "Replacer()");
			}
			console.log(j);
		}
	}
	var panel = new _Panel2.default($("panel"), 0);
	panel.replacer();
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Base2 = __webpack_require__(0);

var _Base3 = _interopRequireDefault(_Base2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //require("./Base/Base.js");

var Panel = function (_Base) {
    _inherits(Panel, _Base);

    function Panel(selector, index) {
        _classCallCheck(this, Panel);

        var _this = _possibleConstructorReturn(this, (Panel.__proto__ || Object.getPrototypeOf(Panel)).call(this, selector, index));

        _this.panelTitle = function () {
            return $(this.selector).find("panel-title").html();
        };

        _this.panelBody = function () {
            return $(this.selector).find("panel-body").html();
        };

        return _this;
    }

    _createClass(Panel, [{
        key: "replacer",
        value: function replacer() {
            this.createBlock();
            this.selector.replaceWith(this.panel_block);
        }
    }, {
        key: "createBlock",
        value: function createBlock() {
            // main block and container
            this.panel_block = document.createElement('div');
            $(this.panel_block).attr("id", "panel" + this.index);
            $(this.panel_block).addClass("panel panel-default");
            this.addMainElement();
        }
    }, {
        key: "addMainElement",
        value: function addMainElement() {
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
    }]);

    return Panel;
}(_Base3.default);

exports.default = Panel;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Base2 = __webpack_require__(0);

var _Base3 = _interopRequireDefault(_Base2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tab = function (_Base) {
    _inherits(Tab, _Base);

    function Tab(selector, index) {
        _classCallCheck(this, Tab);

        var _this = _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).call(this, selector, index));

        _this.currentTabItem = 0;

        _this.TabItem = function (tabIndex, itemIndex, selector, active, link, title, content) {
            // body...
            tabIndex: tabIndex;
            itemIndex: itemIndex;
            selector: selector;
            active: active;
            link: link;
            title: title;
            content: content;
            this.getItem = function () {
                // body...
                var a = document.createElement('a');
                $(a).attr('href', "#tab-content-" + tabIndex + "-item-" + itemIndex);
                $(a).attr('data-toggle', 'tab');
                $(a).html(title);

                // check and active tab item
                if (active != null) {
                    if (active == "on") {
                        $(a).addClass('nav-link active');
                    } else if (active == "off") {
                        $(a).addClass('nav-link disabled');
                    } else {
                        $(a).addClass('nav-link');
                    }
                } else {
                    $(a).addClass('nav-link');
                }

                var li = document.createElement('li');
                $(li).addClass("nav-item");
                li.appendChild(a);
                return li;
            };
            this.getContent = function () {
                // body...
                // check and active contenblock
                var divContent = document.createElement("div");
                $(divContent).attr("id", "tab-content-" + tabIndex + "-item-" + itemIndex);
                //console.log("tab-index  " + tabIndex + itemIndex);
                if (active == "on") {

                    $(divContent).addClass("tab-pane fade active show");
                } else {

                    $(divContent).addClass("tab-pane fade");
                }
                $(divContent).html(content);
                return divContent;
            };
        };

        _this.listTabItem = new Array();
        return _this;
    }

    _createClass(Tab, [{
        key: 'createBlock',
        value: function createBlock() {
            // main block and container
            this.tab_block = document.createElement('div');
            $(this.tab_block).attr("id", "tab" + this.index);
            $(this.tab_block).addClass("container");
            this.addMainElement();
        }
    }, {
        key: 'addMainElement',
        value: function addMainElement() {
            var tab_content_block = document.createElement('div');
            $(tab_content_block).addClass("tab-content");
            console.log(tab_content_block);
            // Main element
            var ul = document.createElement('ul');
            $(ul).addClass("nav nav-tabs");

            this.tab_item = this.selector.children();
            for (var i = 0; i < this.tab_item.length; i++) {
                this.currentTabItem = i;
                // properties
                var tab_active = $(this.tab_item[i]).attr("active");
                var tab_link = $(this.tab_item[i]).find($('tab-title')).attr("link");
                var tab_title = $(this.tab_item[i]).find($('tab-title')).html();
                var tab_content = $(this.tab_item[i]).find('tab-content:first').html();

                var tabItem = new this.TabItem(this.index, i, $(this.tab_item[i]), tab_active, tab_link, tab_title, tab_content);
                $(tab_content_block).append(tabItem.getContent());
                // re-structure
                ul.appendChild(tabItem.getItem());
            }
            this.tab_block.append(ul);
            this.tab_block.append(tab_content_block);
        }
    }, {
        key: 'tabReplacer',
        value: function tabReplacer() {
            this.createBlock();
            // replace
            this.selector.replaceWith(this.tab_block);
        }
    }, {
        key: 'tab_item_preload',
        value: function tab_item_preload(item_id) {
            // body...
            this.selector.ready(function () {});
        }
    }]);

    return Tab;
}(_Base3.default);

exports.default = Tab;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Base2 = __webpack_require__(0);

var _Base3 = _interopRequireDefault(_Base2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_Base) {
    _inherits(Form, _Base);

    function Form(selector, index) {
        _classCallCheck(this, Form);

        return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, selector, index));
    }

    return Form;
}(_Base3.default);

exports.default = Form;

/***/ })
/******/ ]);