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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
(function (global, factory) {

	"use strict";

	if (( false ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ? factory(global, true) : function (w) {
			if (!w.document) {
				throw new Error("jQuery requires a window with a document");
			}
			return factory(w);
		};
	} else {
		factory(global);
	}

	// Pass this if window is not defined yet
})(typeof window !== "undefined" ? window : undefined, function (window, noGlobal) {

	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";

	var arr = [];

	var document = window.document;

	var getProto = Object.getPrototypeOf;

	var _slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var fnToString = hasOwn.toString;

	var ObjectFunctionString = fnToString.call(Object);

	var support = {};

	function DOMEval(code, doc) {
		doc = doc || document;

		var script = doc.createElement("script");

		script.text = code;
		doc.head.appendChild(script).parentNode.removeChild(script);
	}
	/* global Symbol */
	// Defining this global in .eslintrc.json would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module


	var version = "3.2.1",


	// Define a local copy of jQuery
	jQuery = function jQuery(selector, context) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init(selector, context);
	},


	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,


	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	    rdashAlpha = /-([a-z])/g,


	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function fcamelCase(all, letter) {
		return letter.toUpperCase();
	};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function toArray() {
			return _slice.call(this);
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function get(num) {

			// Return all the elements in a clean array
			if (num == null) {
				return _slice.call(this);
			}

			// Return just the one element from the set
			return num < 0 ? this[num + this.length] : this[num];
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function pushStack(elems) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge(this.constructor(), elems);

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function each(callback) {
			return jQuery.each(this, callback);
		},

		map: function map(callback) {
			return this.pushStack(jQuery.map(this, function (elem, i) {
				return callback.call(elem, i, elem);
			}));
		},

		slice: function slice() {
			return this.pushStack(_slice.apply(this, arguments));
		},

		first: function first() {
			return this.eq(0);
		},

		last: function last() {
			return this.eq(-1);
		},

		eq: function eq(i) {
			var len = this.length,
			    j = +i + (i < 0 ? len : 0);
			return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
		},

		end: function end() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function () {
		var options,
		    name,
		    src,
		    copy,
		    copyIsArray,
		    clone,
		    target = arguments[0] || {},
		    i = 1,
		    length = arguments.length,
		    deep = false;

		// Handle a deep copy situation
		if (typeof target === "boolean") {
			deep = target;

			// Skip the boolean and the target
			target = arguments[i] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ((typeof target === "undefined" ? "undefined" : _typeof(target)) !== "object" && !jQuery.isFunction(target)) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if (i === length) {
			target = this;
			i--;
		}

		for (; i < length; i++) {

			// Only deal with non-null/undefined values
			if ((options = arguments[i]) != null) {

				// Extend the base object
				for (name in options) {
					src = target[name];
					copy = options[name];

					// Prevent never-ending loop
					if (target === copy) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {

						if (copyIsArray) {
							copyIsArray = false;
							clone = src && Array.isArray(src) ? src : [];
						} else {
							clone = src && jQuery.isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[name] = jQuery.extend(deep, clone, copy);

						// Don't bring in undefined values
					} else if (copy !== undefined) {
						target[name] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend({

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function error(msg) {
			throw new Error(msg);
		},

		noop: function noop() {},

		isFunction: function isFunction(obj) {
			return jQuery.type(obj) === "function";
		},

		isWindow: function isWindow(obj) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function isNumeric(obj) {

			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type(obj);
			return (type === "number" || type === "string") &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN(obj - parseFloat(obj));
		},

		isPlainObject: function isPlainObject(obj) {
			var proto, Ctor;

			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if (!obj || toString.call(obj) !== "[object Object]") {
				return false;
			}

			proto = getProto(obj);

			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if (!proto) {
				return true;
			}

			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
			return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
		},

		isEmptyObject: function isEmptyObject(obj) {

			/* eslint-disable no-unused-vars */
			// See https://github.com/eslint/eslint/issues/6125
			var name;

			for (name in obj) {
				return false;
			}
			return true;
		},

		type: function type(obj) {
			if (obj == null) {
				return obj + "";
			}

			// Support: Android <=2.3 only (functionish RegExp)
			return (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
		},

		// Evaluates a script in a global context
		globalEval: function globalEval(code) {
			DOMEval(code);
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 13
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function camelCase(string) {
			return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
		},

		each: function each(obj, callback) {
			var length,
			    i = 0;

			if (isArrayLike(obj)) {
				length = obj.length;
				for (; i < length; i++) {
					if (callback.call(obj[i], i, obj[i]) === false) {
						break;
					}
				}
			} else {
				for (i in obj) {
					if (callback.call(obj[i], i, obj[i]) === false) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android <=4.0 only
		trim: function trim(text) {
			return text == null ? "" : (text + "").replace(rtrim, "");
		},

		// results is for internal usage only
		makeArray: function makeArray(arr, results) {
			var ret = results || [];

			if (arr != null) {
				if (isArrayLike(Object(arr))) {
					jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
				} else {
					push.call(ret, arr);
				}
			}

			return ret;
		},

		inArray: function inArray(elem, arr, i) {
			return arr == null ? -1 : indexOf.call(arr, elem, i);
		},

		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function merge(first, second) {
			var len = +second.length,
			    j = 0,
			    i = first.length;

			for (; j < len; j++) {
				first[i++] = second[j];
			}

			first.length = i;

			return first;
		},

		grep: function grep(elems, callback, invert) {
			var callbackInverse,
			    matches = [],
			    i = 0,
			    length = elems.length,
			    callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for (; i < length; i++) {
				callbackInverse = !callback(elems[i], i);
				if (callbackInverse !== callbackExpect) {
					matches.push(elems[i]);
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function map(elems, callback, arg) {
			var length,
			    value,
			    i = 0,
			    ret = [];

			// Go through the array, translating each of the items to their new values
			if (isArrayLike(elems)) {
				length = elems.length;
				for (; i < length; i++) {
					value = callback(elems[i], i, arg);

					if (value != null) {
						ret.push(value);
					}
				}

				// Go through every key on the object,
			} else {
				for (i in elems) {
					value = callback(elems[i], i, arg);

					if (value != null) {
						ret.push(value);
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply([], ret);
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function proxy(fn, context) {
			var tmp, args, proxy;

			if (typeof context === "string") {
				tmp = fn[context];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if (!jQuery.isFunction(fn)) {
				return undefined;
			}

			// Simulated bind
			args = _slice.call(arguments, 2);
			proxy = function proxy() {
				return fn.apply(context || this, args.concat(_slice.call(arguments)));
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	});

	if (typeof Symbol === "function") {
		jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
	}

	// Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (i, name) {
		class2type["[object " + name + "]"] = name.toLowerCase();
	});

	function isArrayLike(obj) {

		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
		    type = jQuery.type(obj);

		if (type === "function" || jQuery.isWindow(obj)) {
			return false;
		}

		return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
	}
	var Sizzle =
	/*!
  * Sizzle CSS Selector Engine v2.3.3
  * https://sizzlejs.com/
  *
  * Copyright jQuery Foundation and other contributors
  * Released under the MIT license
  * http://jquery.org/license
  *
  * Date: 2016-08-08
  */
	function (window) {

		var i,
		    support,
		    Expr,
		    getText,
		    isXML,
		    tokenize,
		    compile,
		    select,
		    outermostContext,
		    sortInput,
		    hasDuplicate,


		// Local document vars
		setDocument,
		    document,
		    docElem,
		    documentIsHTML,
		    rbuggyQSA,
		    rbuggyMatches,
		    matches,
		    contains,


		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		    preferredDoc = window.document,
		    dirruns = 0,
		    done = 0,
		    classCache = createCache(),
		    tokenCache = createCache(),
		    compilerCache = createCache(),
		    sortOrder = function sortOrder(a, b) {
			if (a === b) {
				hasDuplicate = true;
			}
			return 0;
		},


		// Instance methods
		hasOwn = {}.hasOwnProperty,
		    arr = [],
		    pop = arr.pop,
		    push_native = arr.push,
		    push = arr.push,
		    slice = arr.slice,

		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function indexOf(list, elem) {
			var i = 0,
			    len = list.length;
			for (; i < len; i++) {
				if (list[i] === elem) {
					return i;
				}
			}
			return -1;
		},
		    booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",


		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",


		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",


		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
		    pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" + ")\\)|)",


		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp(whitespace + "+", "g"),
		    rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
		    rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
		    rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
		    rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
		    rpseudo = new RegExp(pseudos),
		    ridentifier = new RegExp("^" + identifier + "$"),
		    matchExpr = {
			"ID": new RegExp("^#(" + identifier + ")"),
			"CLASS": new RegExp("^\\.(" + identifier + ")"),
			"TAG": new RegExp("^(" + identifier + "|[*])"),
			"ATTR": new RegExp("^" + attributes),
			"PSEUDO": new RegExp("^" + pseudos),
			"CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
			"bool": new RegExp("^(?:" + booleans + ")$", "i"),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
		},
		    rinputs = /^(?:input|select|textarea|button)$/i,
		    rheader = /^h\d$/i,
		    rnative = /^[^{]+\{\s*\[native \w/,


		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		    rsibling = /[+~]/,


		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
		    funescape = function funescape(_, escaped, escapedWhitespace) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ? escaped : high < 0 ?
			// BMP codepoint
			String.fromCharCode(high + 0x10000) :
			// Supplemental Plane codepoint (surrogate pair)
			String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
		},


		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		    fcssescape = function fcssescape(ch, asCodePoint) {
			if (asCodePoint) {

				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if (ch === "\0") {
					return "\uFFFD";
				}

				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
			}

			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},


		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function unloadHandler() {
			setDocument();
		},
		    disabledAncestor = addCombinator(function (elem) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		}, { dir: "parentNode", next: "legend" });

		// Optimize for push.apply( _, NodeList )
		try {
			push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
			// Support: Android<4.0
			// Detect silently failing push.apply
			arr[preferredDoc.childNodes.length].nodeType;
		} catch (e) {
			push = { apply: arr.length ?

				// Leverage slice if possible
				function (target, els) {
					push_native.apply(target, slice.call(els));
				} :

				// Support: IE<9
				// Otherwise append directly
				function (target, els) {
					var j = target.length,
					    i = 0;
					// Can't trust NodeList.length
					while (target[j++] = els[i++]) {}
					target.length = j - 1;
				}
			};
		}

		function Sizzle(selector, context, results, seed) {
			var m,
			    i,
			    elem,
			    nid,
			    match,
			    groups,
			    newSelector,
			    newContext = context && context.ownerDocument,


			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

			results = results || [];

			// Return early from calls with invalid selector or context
			if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {

				return results;
			}

			// Try to shortcut find operations (as opposed to filters) in HTML documents
			if (!seed) {

				if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
					setDocument(context);
				}
				context = context || document;

				if (documentIsHTML) {

					// If the selector is sufficiently simple, try using a "get*By*" DOM method
					// (excepting DocumentFragment context, where the methods don't exist)
					if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {

						// ID selector
						if (m = match[1]) {

							// Document context
							if (nodeType === 9) {
								if (elem = context.getElementById(m)) {

									// Support: IE, Opera, Webkit
									// TODO: identify versions
									// getElementById can match elements by name instead of ID
									if (elem.id === m) {
										results.push(elem);
										return results;
									}
								} else {
									return results;
								}

								// Element context
							} else {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if (newContext && (elem = newContext.getElementById(m)) && contains(context, elem) && elem.id === m) {

									results.push(elem);
									return results;
								}
							}

							// Type selector
						} else if (match[2]) {
							push.apply(results, context.getElementsByTagName(selector));
							return results;

							// Class selector
						} else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {

							push.apply(results, context.getElementsByClassName(m));
							return results;
						}
					}

					// Take advantage of querySelectorAll
					if (support.qsa && !compilerCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {

						if (nodeType !== 1) {
							newContext = context;
							newSelector = selector;

							// qSA looks outside Element context, which is not what we want
							// Thanks to Andrew Dupont for this workaround technique
							// Support: IE <=8
							// Exclude object elements
						} else if (context.nodeName.toLowerCase() !== "object") {

							// Capture the context ID, setting it first if necessary
							if (nid = context.getAttribute("id")) {
								nid = nid.replace(rcssescape, fcssescape);
							} else {
								context.setAttribute("id", nid = expando);
							}

							// Prefix every selector in the list
							groups = tokenize(selector);
							i = groups.length;
							while (i--) {
								groups[i] = "#" + nid + " " + toSelector(groups[i]);
							}
							newSelector = groups.join(",");

							// Expand context for sibling selectors
							newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
						}

						if (newSelector) {
							try {
								push.apply(results, newContext.querySelectorAll(newSelector));
								return results;
							} catch (qsaError) {} finally {
								if (nid === expando) {
									context.removeAttribute("id");
								}
							}
						}
					}
				}
			}

			// All others
			return select(selector.replace(rtrim, "$1"), context, results, seed);
		}

		/**
   * Create key-value caches of limited size
   * @returns {function(string, object)} Returns the Object data after storing it on itself with
   *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
   *	deleting the oldest entry
   */
		function createCache() {
			var keys = [];

			function cache(key, value) {
				// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
				if (keys.push(key + " ") > Expr.cacheLength) {
					// Only keep the most recent entries
					delete cache[keys.shift()];
				}
				return cache[key + " "] = value;
			}
			return cache;
		}

		/**
   * Mark a function for special use by Sizzle
   * @param {Function} fn The function to mark
   */
		function markFunction(fn) {
			fn[expando] = true;
			return fn;
		}

		/**
   * Support testing using an element
   * @param {Function} fn Passed the created element and returns a boolean result
   */
		function assert(fn) {
			var el = document.createElement("fieldset");

			try {
				return !!fn(el);
			} catch (e) {
				return false;
			} finally {
				// Remove from its parent by default
				if (el.parentNode) {
					el.parentNode.removeChild(el);
				}
				// release memory in IE
				el = null;
			}
		}

		/**
   * Adds the same handler for all of the specified attrs
   * @param {String} attrs Pipe-separated list of attributes
   * @param {Function} handler The method that will be applied
   */
		function addHandle(attrs, handler) {
			var arr = attrs.split("|"),
			    i = arr.length;

			while (i--) {
				Expr.attrHandle[arr[i]] = handler;
			}
		}

		/**
   * Checks document order of two siblings
   * @param {Element} a
   * @param {Element} b
   * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
   */
		function siblingCheck(a, b) {
			var cur = b && a,
			    diff = cur && a.nodeType === 1 && b.nodeType === 1 && a.sourceIndex - b.sourceIndex;

			// Use IE sourceIndex if available on both nodes
			if (diff) {
				return diff;
			}

			// Check if b follows a
			if (cur) {
				while (cur = cur.nextSibling) {
					if (cur === b) {
						return -1;
					}
				}
			}

			return a ? 1 : -1;
		}

		/**
   * Returns a function to use in pseudos for input types
   * @param {String} type
   */
		function createInputPseudo(type) {
			return function (elem) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === type;
			};
		}

		/**
   * Returns a function to use in pseudos for buttons
   * @param {String} type
   */
		function createButtonPseudo(type) {
			return function (elem) {
				var name = elem.nodeName.toLowerCase();
				return (name === "input" || name === "button") && elem.type === type;
			};
		}

		/**
   * Returns a function to use in pseudos for :enabled/:disabled
   * @param {Boolean} disabled true for :disabled; false for :enabled
   */
		function createDisabledPseudo(disabled) {

			// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
			return function (elem) {

				// Only certain elements can match :enabled or :disabled
				// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
				// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
				if ("form" in elem) {

					// Check for inherited disabledness on relevant non-disabled elements:
					// * listed form-associated elements in a disabled fieldset
					//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
					//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
					// * option elements in a disabled optgroup
					//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
					// All such elements have a "form" property.
					if (elem.parentNode && elem.disabled === false) {

						// Option elements defer to a parent optgroup if present
						if ("label" in elem) {
							if ("label" in elem.parentNode) {
								return elem.parentNode.disabled === disabled;
							} else {
								return elem.disabled === disabled;
							}
						}

						// Support: IE 6 - 11
						// Use the isDisabled shortcut property to check for disabled fieldset ancestors
						return elem.isDisabled === disabled ||

						// Where there is no isDisabled, check manually
						/* jshint -W018 */
						elem.isDisabled !== !disabled && disabledAncestor(elem) === disabled;
					}

					return elem.disabled === disabled;

					// Try to winnow out elements that can't be disabled before trusting the disabled property.
					// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
					// even exist on them, let alone have a boolean value.
				} else if ("label" in elem) {
					return elem.disabled === disabled;
				}

				// Remaining elements are neither :enabled nor :disabled
				return false;
			};
		}

		/**
   * Returns a function to use in pseudos for positionals
   * @param {Function} fn
   */
		function createPositionalPseudo(fn) {
			return markFunction(function (argument) {
				argument = +argument;
				return markFunction(function (seed, matches) {
					var j,
					    matchIndexes = fn([], seed.length, argument),
					    i = matchIndexes.length;

					// Match elements found at the specified indexes
					while (i--) {
						if (seed[j = matchIndexes[i]]) {
							seed[j] = !(matches[j] = seed[j]);
						}
					}
				});
			});
		}

		/**
   * Checks a node for validity as a Sizzle context
   * @param {Element|Object=} context
   * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
   */
		function testContext(context) {
			return context && typeof context.getElementsByTagName !== "undefined" && context;
		}

		// Expose support vars for convenience
		support = Sizzle.support = {};

		/**
   * Detects XML nodes
   * @param {Element|Object} elem An element or a document
   * @returns {Boolean} True iff elem is a non-HTML XML node
   */
		isXML = Sizzle.isXML = function (elem) {
			// documentElement is verified for cases where it doesn't yet exist
			// (such as loading iframes in IE - #4833)
			var documentElement = elem && (elem.ownerDocument || elem).documentElement;
			return documentElement ? documentElement.nodeName !== "HTML" : false;
		};

		/**
   * Sets document-related variables once based on the current document
   * @param {Element|Object} [doc] An element or document object to use to set the document
   * @returns {Object} Returns the current document
   */
		setDocument = Sizzle.setDocument = function (node) {
			var hasCompare,
			    subWindow,
			    doc = node ? node.ownerDocument || node : preferredDoc;

			// Return early if doc is invalid or already selected
			if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
				return document;
			}

			// Update global variables
			document = doc;
			docElem = document.documentElement;
			documentIsHTML = !isXML(document);

			// Support: IE 9-11, Edge
			// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
			if (preferredDoc !== document && (subWindow = document.defaultView) && subWindow.top !== subWindow) {

				// Support: IE 11, Edge
				if (subWindow.addEventListener) {
					subWindow.addEventListener("unload", unloadHandler, false);

					// Support: IE 9 - 10 only
				} else if (subWindow.attachEvent) {
					subWindow.attachEvent("onunload", unloadHandler);
				}
			}

			/* Attributes
   ---------------------------------------------------------------------- */

			// Support: IE<8
			// Verify that getAttribute really returns attributes and not properties
			// (excepting IE8 booleans)
			support.attributes = assert(function (el) {
				el.className = "i";
				return !el.getAttribute("className");
			});

			/* getElement(s)By*
   ---------------------------------------------------------------------- */

			// Check if getElementsByTagName("*") returns only elements
			support.getElementsByTagName = assert(function (el) {
				el.appendChild(document.createComment(""));
				return !el.getElementsByTagName("*").length;
			});

			// Support: IE<9
			support.getElementsByClassName = rnative.test(document.getElementsByClassName);

			// Support: IE<10
			// Check if getElementById returns elements by name
			// The broken getElementById methods don't pick up programmatically-set names,
			// so use a roundabout getElementsByName test
			support.getById = assert(function (el) {
				docElem.appendChild(el).id = expando;
				return !document.getElementsByName || !document.getElementsByName(expando).length;
			});

			// ID filter and find
			if (support.getById) {
				Expr.filter["ID"] = function (id) {
					var attrId = id.replace(runescape, funescape);
					return function (elem) {
						return elem.getAttribute("id") === attrId;
					};
				};
				Expr.find["ID"] = function (id, context) {
					if (typeof context.getElementById !== "undefined" && documentIsHTML) {
						var elem = context.getElementById(id);
						return elem ? [elem] : [];
					}
				};
			} else {
				Expr.filter["ID"] = function (id) {
					var attrId = id.replace(runescape, funescape);
					return function (elem) {
						var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
						return node && node.value === attrId;
					};
				};

				// Support: IE 6 - 7 only
				// getElementById is not reliable as a find shortcut
				Expr.find["ID"] = function (id, context) {
					if (typeof context.getElementById !== "undefined" && documentIsHTML) {
						var node,
						    i,
						    elems,
						    elem = context.getElementById(id);

						if (elem) {

							// Verify the id attribute
							node = elem.getAttributeNode("id");
							if (node && node.value === id) {
								return [elem];
							}

							// Fall back on getElementsByName
							elems = context.getElementsByName(id);
							i = 0;
							while (elem = elems[i++]) {
								node = elem.getAttributeNode("id");
								if (node && node.value === id) {
									return [elem];
								}
							}
						}

						return [];
					}
				};
			}

			// Tag
			Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
				if (typeof context.getElementsByTagName !== "undefined") {
					return context.getElementsByTagName(tag);

					// DocumentFragment nodes don't have gEBTN
				} else if (support.qsa) {
					return context.querySelectorAll(tag);
				}
			} : function (tag, context) {
				var elem,
				    tmp = [],
				    i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName(tag);

				// Filter out possible comments
				if (tag === "*") {
					while (elem = results[i++]) {
						if (elem.nodeType === 1) {
							tmp.push(elem);
						}
					}

					return tmp;
				}
				return results;
			};

			// Class
			Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
				if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
					return context.getElementsByClassName(className);
				}
			};

			/* QSA/matchesSelector
   ---------------------------------------------------------------------- */

			// QSA and matchesSelector support

			// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
			rbuggyMatches = [];

			// qSa(:focus) reports false when true (Chrome 21)
			// We allow this because of a bug in IE8/9 that throws an error
			// whenever `document.activeElement` is accessed on an iframe
			// So, we allow :focus to pass through QSA all the time to avoid the IE error
			// See https://bugs.jquery.com/ticket/13378
			rbuggyQSA = [];

			if (support.qsa = rnative.test(document.querySelectorAll)) {
				// Build QSA regex
				// Regex strategy adopted from Diego Perini
				assert(function (el) {
					// Select is set to empty string on purpose
					// This is to test IE's treatment of not explicitly
					// setting a boolean content attribute,
					// since its presence should be enough
					// https://bugs.jquery.com/ticket/12359
					docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";

					// Support: IE8, Opera 11-12.16
					// Nothing should be selected when empty strings follow ^= or $= or *=
					// The test attribute must be unknown in Opera but "safe" for WinRT
					// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
					if (el.querySelectorAll("[msallowcapture^='']").length) {
						rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
					}

					// Support: IE8
					// Boolean attributes and "value" are not treated correctly
					if (!el.querySelectorAll("[selected]").length) {
						rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
					}

					// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
					if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
						rbuggyQSA.push("~=");
					}

					// Webkit/Opera - :checked should return selected option elements
					// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
					// IE8 throws error here and will not see later tests
					if (!el.querySelectorAll(":checked").length) {
						rbuggyQSA.push(":checked");
					}

					// Support: Safari 8+, iOS 8+
					// https://bugs.webkit.org/show_bug.cgi?id=136851
					// In-page `selector#id sibling-combinator selector` fails
					if (!el.querySelectorAll("a#" + expando + "+*").length) {
						rbuggyQSA.push(".#.+[+~]");
					}
				});

				assert(function (el) {
					el.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";

					// Support: Windows 8 Native Apps
					// The type and name attributes are restricted during .innerHTML assignment
					var input = document.createElement("input");
					input.setAttribute("type", "hidden");
					el.appendChild(input).setAttribute("name", "D");

					// Support: IE8
					// Enforce case-sensitivity of name attribute
					if (el.querySelectorAll("[name=d]").length) {
						rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
					}

					// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
					// IE8 throws error here and will not see later tests
					if (el.querySelectorAll(":enabled").length !== 2) {
						rbuggyQSA.push(":enabled", ":disabled");
					}

					// Support: IE9-11+
					// IE's :disabled selector does not pick up the children of disabled fieldsets
					docElem.appendChild(el).disabled = true;
					if (el.querySelectorAll(":disabled").length !== 2) {
						rbuggyQSA.push(":enabled", ":disabled");
					}

					// Opera 10-11 does not throw on post-comma invalid pseudos
					el.querySelectorAll("*,:x");
					rbuggyQSA.push(",.*:");
				});
			}

			if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {

				assert(function (el) {
					// Check to see if it's possible to do matchesSelector
					// on a disconnected node (IE 9)
					support.disconnectedMatch = matches.call(el, "*");

					// This should fail with an exception
					// Gecko does not error, returns false instead
					matches.call(el, "[s!='']:x");
					rbuggyMatches.push("!=", pseudos);
				});
			}

			rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
			rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));

			/* Contains
   ---------------------------------------------------------------------- */
			hasCompare = rnative.test(docElem.compareDocumentPosition);

			// Element contains another
			// Purposefully self-exclusive
			// As in, an element does not contain itself
			contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
				    bup = b && b.parentNode;
				return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
			} : function (a, b) {
				if (b) {
					while (b = b.parentNode) {
						if (b === a) {
							return true;
						}
					}
				}
				return false;
			};

			/* Sorting
   ---------------------------------------------------------------------- */

			// Document order sorting
			sortOrder = hasCompare ? function (a, b) {

				// Flag for duplicate removal
				if (a === b) {
					hasDuplicate = true;
					return 0;
				}

				// Sort on method existence if only one input has compareDocumentPosition
				var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
				if (compare) {
					return compare;
				}

				// Calculate position if both inputs belong to the same document
				compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) :

				// Otherwise we know they are disconnected
				1;

				// Disconnected nodes
				if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {

					// Choose the first element that is related to our preferred document
					if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
						return -1;
					}
					if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
						return 1;
					}

					// Maintain original order
					return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
				}

				return compare & 4 ? -1 : 1;
			} : function (a, b) {
				// Exit early if the nodes are identical
				if (a === b) {
					hasDuplicate = true;
					return 0;
				}

				var cur,
				    i = 0,
				    aup = a.parentNode,
				    bup = b.parentNode,
				    ap = [a],
				    bp = [b];

				// Parentless nodes are either documents or disconnected
				if (!aup || !bup) {
					return a === document ? -1 : b === document ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;

					// If the nodes are siblings, we can do a quick check
				} else if (aup === bup) {
					return siblingCheck(a, b);
				}

				// Otherwise we need full lists of their ancestors for comparison
				cur = a;
				while (cur = cur.parentNode) {
					ap.unshift(cur);
				}
				cur = b;
				while (cur = cur.parentNode) {
					bp.unshift(cur);
				}

				// Walk down the tree looking for a discrepancy
				while (ap[i] === bp[i]) {
					i++;
				}

				return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck(ap[i], bp[i]) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
			};

			return document;
		};

		Sizzle.matches = function (expr, elements) {
			return Sizzle(expr, null, null, elements);
		};

		Sizzle.matchesSelector = function (elem, expr) {
			// Set document vars if needed
			if ((elem.ownerDocument || elem) !== document) {
				setDocument(elem);
			}

			// Make sure that attribute selectors are quoted
			expr = expr.replace(rattributeQuotes, "='$1']");

			if (support.matchesSelector && documentIsHTML && !compilerCache[expr + " "] && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {

				try {
					var ret = matches.call(elem, expr);

					// IE 9's matchesSelector returns false on disconnected nodes
					if (ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11) {
						return ret;
					}
				} catch (e) {}
			}

			return Sizzle(expr, document, null, [elem]).length > 0;
		};

		Sizzle.contains = function (context, elem) {
			// Set document vars if needed
			if ((context.ownerDocument || context) !== document) {
				setDocument(context);
			}
			return contains(context, elem);
		};

		Sizzle.attr = function (elem, name) {
			// Set document vars if needed
			if ((elem.ownerDocument || elem) !== document) {
				setDocument(elem);
			}

			var fn = Expr.attrHandle[name.toLowerCase()],

			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;

			return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
		};

		Sizzle.escape = function (sel) {
			return (sel + "").replace(rcssescape, fcssescape);
		};

		Sizzle.error = function (msg) {
			throw new Error("Syntax error, unrecognized expression: " + msg);
		};

		/**
   * Document sorting and removing duplicates
   * @param {ArrayLike} results
   */
		Sizzle.uniqueSort = function (results) {
			var elem,
			    duplicates = [],
			    j = 0,
			    i = 0;

			// Unless we *know* we can detect duplicates, assume their presence
			hasDuplicate = !support.detectDuplicates;
			sortInput = !support.sortStable && results.slice(0);
			results.sort(sortOrder);

			if (hasDuplicate) {
				while (elem = results[i++]) {
					if (elem === results[i]) {
						j = duplicates.push(i);
					}
				}
				while (j--) {
					results.splice(duplicates[j], 1);
				}
			}

			// Clear input after sorting to release objects
			// See https://github.com/jquery/sizzle/pull/225
			sortInput = null;

			return results;
		};

		/**
   * Utility function for retrieving the text value of an array of DOM nodes
   * @param {Array|Element} elem
   */
		getText = Sizzle.getText = function (elem) {
			var node,
			    ret = "",
			    i = 0,
			    nodeType = elem.nodeType;

			if (!nodeType) {
				// If no nodeType, this is expected to be an array
				while (node = elem[i++]) {
					// Do not traverse comment nodes
					ret += getText(node);
				}
			} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
				// Use textContent for elements
				// innerText usage removed for consistency of new lines (jQuery #11153)
				if (typeof elem.textContent === "string") {
					return elem.textContent;
				} else {
					// Traverse its children
					for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
						ret += getText(elem);
					}
				}
			} else if (nodeType === 3 || nodeType === 4) {
				return elem.nodeValue;
			}
			// Do not include comment or processing instruction nodes

			return ret;
		};

		Expr = Sizzle.selectors = {

			// Can be adjusted by the user
			cacheLength: 50,

			createPseudo: markFunction,

			match: matchExpr,

			attrHandle: {},

			find: {},

			relative: {
				">": { dir: "parentNode", first: true },
				" ": { dir: "parentNode" },
				"+": { dir: "previousSibling", first: true },
				"~": { dir: "previousSibling" }
			},

			preFilter: {
				"ATTR": function ATTR(match) {
					match[1] = match[1].replace(runescape, funescape);

					// Move the given value to match[3] whether quoted or unquoted
					match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

					if (match[2] === "~=") {
						match[3] = " " + match[3] + " ";
					}

					return match.slice(0, 4);
				},

				"CHILD": function CHILD(match) {
					/* matches from matchExpr["CHILD"]
     	1 type (only|nth|...)
     	2 what (child|of-type)
     	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
     	4 xn-component of xn+y argument ([+-]?\d*n|)
     	5 sign of xn-component
     	6 x of xn-component
     	7 sign of y-component
     	8 y of y-component
     */
					match[1] = match[1].toLowerCase();

					if (match[1].slice(0, 3) === "nth") {
						// nth-* requires argument
						if (!match[3]) {
							Sizzle.error(match[0]);
						}

						// numeric x and y parameters for Expr.filter.CHILD
						// remember that false/true cast respectively to 0/1
						match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
						match[5] = +(match[7] + match[8] || match[3] === "odd");

						// other types prohibit arguments
					} else if (match[3]) {
						Sizzle.error(match[0]);
					}

					return match;
				},

				"PSEUDO": function PSEUDO(match) {
					var excess,
					    unquoted = !match[6] && match[2];

					if (matchExpr["CHILD"].test(match[0])) {
						return null;
					}

					// Accept quoted arguments as-is
					if (match[3]) {
						match[2] = match[4] || match[5] || "";

						// Strip excess characters from unquoted arguments
					} else if (unquoted && rpseudo.test(unquoted) && (
					// Get excess from tokenize (recursively)
					excess = tokenize(unquoted, true)) && (
					// advance to the next closing parenthesis
					excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {

						// excess is a negative index
						match[0] = match[0].slice(0, excess);
						match[2] = unquoted.slice(0, excess);
					}

					// Return only captures needed by the pseudo filter method (type and argument)
					return match.slice(0, 3);
				}
			},

			filter: {

				"TAG": function TAG(nodeNameSelector) {
					var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
					return nodeNameSelector === "*" ? function () {
						return true;
					} : function (elem) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
				},

				"CLASS": function CLASS(className) {
					var pattern = classCache[className + " "];

					return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
						return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
					});
				},

				"ATTR": function ATTR(name, operator, check) {
					return function (elem) {
						var result = Sizzle.attr(elem, name);

						if (result == null) {
							return operator === "!=";
						}
						if (!operator) {
							return true;
						}

						result += "";

						return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
					};
				},

				"CHILD": function CHILD(type, what, argument, first, last) {
					var simple = type.slice(0, 3) !== "nth",
					    forward = type.slice(-4) !== "last",
					    ofType = what === "of-type";

					return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function (elem) {
						return !!elem.parentNode;
					} : function (elem, context, xml) {
						var cache,
						    uniqueCache,
						    outerCache,
						    node,
						    nodeIndex,
						    start,
						    dir = simple !== forward ? "nextSibling" : "previousSibling",
						    parent = elem.parentNode,
						    name = ofType && elem.nodeName.toLowerCase(),
						    useCache = !xml && !ofType,
						    diff = false;

						if (parent) {

							// :(first|last|only)-(child|of-type)
							if (simple) {
								while (dir) {
									node = elem;
									while (node = node[dir]) {
										if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [forward ? parent.firstChild : parent.lastChild];

							// non-xml :nth-child(...) stores cache data on `parent`
							if (forward && useCache) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[expando] || (node[expando] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

								cache = uniqueCache[type] || [];
								nodeIndex = cache[0] === dirruns && cache[1];
								diff = nodeIndex && cache[2];
								node = nodeIndex && parent.childNodes[nodeIndex];

								while (node = ++nodeIndex && node && node[dir] || (

								// Fallback to seeking `elem` from the start
								diff = nodeIndex = 0) || start.pop()) {

									// When found, cache indexes on `parent` and break
									if (node.nodeType === 1 && ++diff && node === elem) {
										uniqueCache[type] = [dirruns, nodeIndex, diff];
										break;
									}
								}
							} else {
								// Use previously-cached element index if available
								if (useCache) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[expando] || (node[expando] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

									cache = uniqueCache[type] || [];
									nodeIndex = cache[0] === dirruns && cache[1];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if (diff === false) {
									// Use the same loop as above to seek `elem` from the start
									while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {

										if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {

											// Cache the index of each encountered element
											if (useCache) {
												outerCache = node[expando] || (node[expando] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[node.uniqueID] || (outerCache[node.uniqueID] = {});

												uniqueCache[type] = [dirruns, diff];
											}

											if (node === elem) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || diff % first === 0 && diff / first >= 0;
						}
					};
				},

				"PSEUDO": function PSEUDO(pseudo, argument) {
					// pseudo-class names are case-insensitive
					// http://www.w3.org/TR/selectors/#pseudo-classes
					// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
					// Remember that setFilters inherits from pseudos
					var args,
					    fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);

					// The user may use createPseudo to indicate that
					// arguments are needed to create the filter function
					// just as Sizzle does
					if (fn[expando]) {
						return fn(argument);
					}

					// But maintain support for old signatures
					if (fn.length > 1) {
						args = [pseudo, pseudo, "", argument];
						return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
							var idx,
							    matched = fn(seed, argument),
							    i = matched.length;
							while (i--) {
								idx = indexOf(seed, matched[i]);
								seed[idx] = !(matches[idx] = matched[i]);
							}
						}) : function (elem) {
							return fn(elem, 0, args);
						};
					}

					return fn;
				}
			},

			pseudos: {
				// Potentially complex pseudos
				"not": markFunction(function (selector) {
					// Trim the selector passed to compile
					// to avoid treating leading and trailing
					// spaces as combinators
					var input = [],
					    results = [],
					    matcher = compile(selector.replace(rtrim, "$1"));

					return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
						var elem,
						    unmatched = matcher(seed, null, xml, []),
						    i = seed.length;

						// Match elements unmatched by `matcher`
						while (i--) {
							if (elem = unmatched[i]) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) : function (elem, context, xml) {
						input[0] = elem;
						matcher(input, null, xml, results);
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
				}),

				"has": markFunction(function (selector) {
					return function (elem) {
						return Sizzle(selector, elem).length > 0;
					};
				}),

				"contains": markFunction(function (text) {
					text = text.replace(runescape, funescape);
					return function (elem) {
						return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
					};
				}),

				// "Whether an element is represented by a :lang() selector
				// is based solely on the element's language value
				// being equal to the identifier C,
				// or beginning with the identifier C immediately followed by "-".
				// The matching of C against the element's language value is performed case-insensitively.
				// The identifier C does not have to be a valid language name."
				// http://www.w3.org/TR/selectors/#lang-pseudo
				"lang": markFunction(function (lang) {
					// lang value must be a valid identifier
					if (!ridentifier.test(lang || "")) {
						Sizzle.error("unsupported lang: " + lang);
					}
					lang = lang.replace(runescape, funescape).toLowerCase();
					return function (elem) {
						var elemLang;
						do {
							if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {

								elemLang = elemLang.toLowerCase();
								return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
							}
						} while ((elem = elem.parentNode) && elem.nodeType === 1);
						return false;
					};
				}),

				// Miscellaneous
				"target": function target(elem) {
					var hash = window.location && window.location.hash;
					return hash && hash.slice(1) === elem.id;
				},

				"root": function root(elem) {
					return elem === docElem;
				},

				"focus": function focus(elem) {
					return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
				},

				// Boolean properties
				"enabled": createDisabledPseudo(false),
				"disabled": createDisabledPseudo(true),

				"checked": function checked(elem) {
					// In CSS3, :checked should return both checked and selected elements
					// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
					var nodeName = elem.nodeName.toLowerCase();
					return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
				},

				"selected": function selected(elem) {
					// Accessing this property makes selected-by-default
					// options in Safari work properly
					if (elem.parentNode) {
						elem.parentNode.selectedIndex;
					}

					return elem.selected === true;
				},

				// Contents
				"empty": function empty(elem) {
					// http://www.w3.org/TR/selectors/#empty-pseudo
					// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
					//   but not by others (comment: 8; processing instruction: 7; etc.)
					// nodeType < 6 works because attributes (2) do not appear as children
					for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
						if (elem.nodeType < 6) {
							return false;
						}
					}
					return true;
				},

				"parent": function parent(elem) {
					return !Expr.pseudos["empty"](elem);
				},

				// Element/input types
				"header": function header(elem) {
					return rheader.test(elem.nodeName);
				},

				"input": function input(elem) {
					return rinputs.test(elem.nodeName);
				},

				"button": function button(elem) {
					var name = elem.nodeName.toLowerCase();
					return name === "input" && elem.type === "button" || name === "button";
				},

				"text": function text(elem) {
					var attr;
					return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && (

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					(attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
				},

				// Position-in-collection
				"first": createPositionalPseudo(function () {
					return [0];
				}),

				"last": createPositionalPseudo(function (matchIndexes, length) {
					return [length - 1];
				}),

				"eq": createPositionalPseudo(function (matchIndexes, length, argument) {
					return [argument < 0 ? argument + length : argument];
				}),

				"even": createPositionalPseudo(function (matchIndexes, length) {
					var i = 0;
					for (; i < length; i += 2) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),

				"odd": createPositionalPseudo(function (matchIndexes, length) {
					var i = 1;
					for (; i < length; i += 2) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),

				"lt": createPositionalPseudo(function (matchIndexes, length, argument) {
					var i = argument < 0 ? argument + length : argument;
					for (; --i >= 0;) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),

				"gt": createPositionalPseudo(function (matchIndexes, length, argument) {
					var i = argument < 0 ? argument + length : argument;
					for (; ++i < length;) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				})
			}
		};

		Expr.pseudos["nth"] = Expr.pseudos["eq"];

		// Add button/input type pseudos
		for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
			Expr.pseudos[i] = createInputPseudo(i);
		}
		for (i in { submit: true, reset: true }) {
			Expr.pseudos[i] = createButtonPseudo(i);
		}

		// Easy API for creating new setFilters
		function setFilters() {}
		setFilters.prototype = Expr.filters = Expr.pseudos;
		Expr.setFilters = new setFilters();

		tokenize = Sizzle.tokenize = function (selector, parseOnly) {
			var matched,
			    match,
			    tokens,
			    type,
			    soFar,
			    groups,
			    preFilters,
			    cached = tokenCache[selector + " "];

			if (cached) {
				return parseOnly ? 0 : cached.slice(0);
			}

			soFar = selector;
			groups = [];
			preFilters = Expr.preFilter;

			while (soFar) {

				// Comma and first run
				if (!matched || (match = rcomma.exec(soFar))) {
					if (match) {
						// Don't consume trailing commas as valid
						soFar = soFar.slice(match[0].length) || soFar;
					}
					groups.push(tokens = []);
				}

				matched = false;

				// Combinators
				if (match = rcombinators.exec(soFar)) {
					matched = match.shift();
					tokens.push({
						value: matched,
						// Cast descendant combinators to space
						type: match[0].replace(rtrim, " ")
					});
					soFar = soFar.slice(matched.length);
				}

				// Filters
				for (type in Expr.filter) {
					if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
						matched = match.shift();
						tokens.push({
							value: matched,
							type: type,
							matches: match
						});
						soFar = soFar.slice(matched.length);
					}
				}

				if (!matched) {
					break;
				}
			}

			// Return the length of the invalid excess
			// if we're just parsing
			// Otherwise, throw an error or return tokens
			return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) :
			// Cache the tokens
			tokenCache(selector, groups).slice(0);
		};

		function toSelector(tokens) {
			var i = 0,
			    len = tokens.length,
			    selector = "";
			for (; i < len; i++) {
				selector += tokens[i].value;
			}
			return selector;
		}

		function addCombinator(matcher, combinator, base) {
			var dir = combinator.dir,
			    skip = combinator.next,
			    key = skip || dir,
			    checkNonElements = base && key === "parentNode",
			    doneName = done++;

			return combinator.first ?
			// Check against closest ancestor/preceding element
			function (elem, context, xml) {
				while (elem = elem[dir]) {
					if (elem.nodeType === 1 || checkNonElements) {
						return matcher(elem, context, xml);
					}
				}
				return false;
			} :

			// Check against all ancestor/preceding elements
			function (elem, context, xml) {
				var oldCache,
				    uniqueCache,
				    outerCache,
				    newCache = [dirruns, doneName];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if (xml) {
					while (elem = elem[dir]) {
						if (elem.nodeType === 1 || checkNonElements) {
							if (matcher(elem, context, xml)) {
								return true;
							}
						}
					}
				} else {
					while (elem = elem[dir]) {
						if (elem.nodeType === 1 || checkNonElements) {
							outerCache = elem[expando] || (elem[expando] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

							if (skip && skip === elem.nodeName.toLowerCase()) {
								elem = elem[dir] || elem;
							} else if ((oldCache = uniqueCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {

								// Assign to newCache so results back-propagate to previous elements
								return newCache[2] = oldCache[2];
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[key] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if (newCache[2] = matcher(elem, context, xml)) {
									return true;
								}
							}
						}
					}
				}
				return false;
			};
		}

		function elementMatcher(matchers) {
			return matchers.length > 1 ? function (elem, context, xml) {
				var i = matchers.length;
				while (i--) {
					if (!matchers[i](elem, context, xml)) {
						return false;
					}
				}
				return true;
			} : matchers[0];
		}

		function multipleContexts(selector, contexts, results) {
			var i = 0,
			    len = contexts.length;
			for (; i < len; i++) {
				Sizzle(selector, contexts[i], results);
			}
			return results;
		}

		function condense(unmatched, map, filter, context, xml) {
			var elem,
			    newUnmatched = [],
			    i = 0,
			    len = unmatched.length,
			    mapped = map != null;

			for (; i < len; i++) {
				if (elem = unmatched[i]) {
					if (!filter || filter(elem, context, xml)) {
						newUnmatched.push(elem);
						if (mapped) {
							map.push(i);
						}
					}
				}
			}

			return newUnmatched;
		}

		function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
			if (postFilter && !postFilter[expando]) {
				postFilter = setMatcher(postFilter);
			}
			if (postFinder && !postFinder[expando]) {
				postFinder = setMatcher(postFinder, postSelector);
			}
			return markFunction(function (seed, results, context, xml) {
				var temp,
				    i,
				    elem,
				    preMap = [],
				    postMap = [],
				    preexisting = results.length,


				// Get initial elements from seed or context
				elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),


				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
				    matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || (seed ? preFilter : preexisting || postFilter) ?

				// ...intermediate processing is necessary
				[] :

				// ...otherwise use results directly
				results : matcherIn;

				// Find primary matches
				if (matcher) {
					matcher(matcherIn, matcherOut, context, xml);
				}

				// Apply postFilter
				if (postFilter) {
					temp = condense(matcherOut, postMap);
					postFilter(temp, [], context, xml);

					// Un-match failing elements by moving them back to matcherIn
					i = temp.length;
					while (i--) {
						if (elem = temp[i]) {
							matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
						}
					}
				}

				if (seed) {
					if (postFinder || preFilter) {
						if (postFinder) {
							// Get the final matcherOut by condensing this intermediate into postFinder contexts
							temp = [];
							i = matcherOut.length;
							while (i--) {
								if (elem = matcherOut[i]) {
									// Restore matcherIn since elem is not yet a final match
									temp.push(matcherIn[i] = elem);
								}
							}
							postFinder(null, matcherOut = [], temp, xml);
						}

						// Move matched elements from seed to results to keep them synchronized
						i = matcherOut.length;
						while (i--) {
							if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {

								seed[temp] = !(results[temp] = elem);
							}
						}
					}

					// Add elements to results, through postFinder if defined
				} else {
					matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
					if (postFinder) {
						postFinder(null, results, matcherOut, xml);
					} else {
						push.apply(results, matcherOut);
					}
				}
			});
		}

		function matcherFromTokens(tokens) {
			var checkContext,
			    matcher,
			    j,
			    len = tokens.length,
			    leadingRelative = Expr.relative[tokens[0].type],
			    implicitRelative = leadingRelative || Expr.relative[" "],
			    i = leadingRelative ? 1 : 0,


			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator(function (elem) {
				return elem === checkContext;
			}, implicitRelative, true),
			    matchAnyContext = addCombinator(function (elem) {
				return indexOf(checkContext, elem) > -1;
			}, implicitRelative, true),
			    matchers = [function (elem, context, xml) {
				var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			}];

			for (; i < len; i++) {
				if (matcher = Expr.relative[tokens[i].type]) {
					matchers = [addCombinator(elementMatcher(matchers), matcher)];
				} else {
					matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);

					// Return special upon seeing a positional matcher
					if (matcher[expando]) {
						// Find the next relative operator (if any) for proper handling
						j = ++i;
						for (; j < len; j++) {
							if (Expr.relative[tokens[j].type]) {
								break;
							}
						}
						return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice(0, i - 1).concat({ value: tokens[i - 2].type === " " ? "*" : "" })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
					}
					matchers.push(matcher);
				}
			}

			return elementMatcher(matchers);
		}

		function matcherFromGroupMatchers(elementMatchers, setMatchers) {
			var bySet = setMatchers.length > 0,
			    byElement = elementMatchers.length > 0,
			    superMatcher = function superMatcher(seed, context, xml, results, outermost) {
				var elem,
				    j,
				    matcher,
				    matchedCount = 0,
				    i = "0",
				    unmatched = seed && [],
				    setMatched = [],
				    contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]("*", outermost),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
				    len = elems.length;

				if (outermost) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for (; i !== len && (elem = elems[i]) != null; i++) {
					if (byElement && elem) {
						j = 0;
						if (!context && elem.ownerDocument !== document) {
							setDocument(elem);
							xml = !documentIsHTML;
						}
						while (matcher = elementMatchers[j++]) {
							if (matcher(elem, context || document, xml)) {
								results.push(elem);
								break;
							}
						}
						if (outermost) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if (bySet) {
						// They will have gone through all possible matchers
						if (elem = !matcher && elem) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if (seed) {
							unmatched.push(elem);
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if (bySet && i !== matchedCount) {
					j = 0;
					while (matcher = setMatchers[j++]) {
						matcher(unmatched, setMatched, context, xml);
					}

					if (seed) {
						// Reintegrate element matches to eliminate the need for sorting
						if (matchedCount > 0) {
							while (i--) {
								if (!(unmatched[i] || setMatched[i])) {
									setMatched[i] = pop.call(results);
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense(setMatched);
					}

					// Add matches to results
					push.apply(results, setMatched);

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {

						Sizzle.uniqueSort(results);
					}
				}

				// Override manipulation of globals by nested matchers
				if (outermost) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

			return bySet ? markFunction(superMatcher) : superMatcher;
		}

		compile = Sizzle.compile = function (selector, match /* Internal Use Only */) {
			var i,
			    setMatchers = [],
			    elementMatchers = [],
			    cached = compilerCache[selector + " "];

			if (!cached) {
				// Generate a function of recursive functions that can be used to check each element
				if (!match) {
					match = tokenize(selector);
				}
				i = match.length;
				while (i--) {
					cached = matcherFromTokens(match[i]);
					if (cached[expando]) {
						setMatchers.push(cached);
					} else {
						elementMatchers.push(cached);
					}
				}

				// Cache the compiled function
				cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));

				// Save selector and tokenization
				cached.selector = selector;
			}
			return cached;
		};

		/**
   * A low-level selection function that works with Sizzle's compiled
   *  selector functions
   * @param {String|Function} selector A selector or a pre-compiled
   *  selector function built with Sizzle.compile
   * @param {Element} context
   * @param {Array} [results]
   * @param {Array} [seed] A set of elements to match against
   */
		select = Sizzle.select = function (selector, context, results, seed) {
			var i,
			    tokens,
			    token,
			    type,
			    find,
			    compiled = typeof selector === "function" && selector,
			    match = !seed && tokenize(selector = compiled.selector || selector);

			results = results || [];

			// Try to minimize operations if there is only one selector in the list and no seed
			// (the latter of which guarantees us context)
			if (match.length === 1) {

				// Reduce context if the leading compound selector is an ID
				tokens = match[0] = match[0].slice(0);
				if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {

					context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
					if (!context) {
						return results;

						// Precompiled matchers will still verify ancestry, so step up a level
					} else if (compiled) {
						context = context.parentNode;
					}

					selector = selector.slice(tokens.shift().value.length);
				}

				// Fetch a seed set for right-to-left matching
				i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
				while (i--) {
					token = tokens[i];

					// Abort if we hit a combinator
					if (Expr.relative[type = token.type]) {
						break;
					}
					if (find = Expr.find[type]) {
						// Search, expanding context for leading sibling combinators
						if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {

							// If seed is empty or no tokens remain, we can return early
							tokens.splice(i, 1);
							selector = seed.length && toSelector(tokens);
							if (!selector) {
								push.apply(results, seed);
								return results;
							}

							break;
						}
					}
				}
			}

			// Compile and execute a filtering function if one is not provided
			// Provide `match` to avoid retokenization if we modified the selector above
			(compiled || compile(selector, match))(seed, context, !documentIsHTML, results, !context || rsibling.test(selector) && testContext(context.parentNode) || context);
			return results;
		};

		// One-time assignments

		// Sort stability
		support.sortStable = expando.split("").sort(sortOrder).join("") === expando;

		// Support: Chrome 14-35+
		// Always assume duplicates if they aren't passed to the comparison function
		support.detectDuplicates = !!hasDuplicate;

		// Initialize against the default document
		setDocument();

		// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
		// Detached nodes confoundingly follow *each other*
		support.sortDetached = assert(function (el) {
			// Should return 1, but returns 4 (following)
			return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
		});

		// Support: IE<8
		// Prevent attribute/property "interpolation"
		// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
		if (!assert(function (el) {
			el.innerHTML = "<a href='#'></a>";
			return el.firstChild.getAttribute("href") === "#";
		})) {
			addHandle("type|href|height|width", function (elem, name, isXML) {
				if (!isXML) {
					return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
				}
			});
		}

		// Support: IE<9
		// Use defaultValue in place of getAttribute("value")
		if (!support.attributes || !assert(function (el) {
			el.innerHTML = "<input/>";
			el.firstChild.setAttribute("value", "");
			return el.firstChild.getAttribute("value") === "";
		})) {
			addHandle("value", function (elem, name, isXML) {
				if (!isXML && elem.nodeName.toLowerCase() === "input") {
					return elem.defaultValue;
				}
			});
		}

		// Support: IE<9
		// Use getAttributeNode to fetch booleans when getAttribute lies
		if (!assert(function (el) {
			return el.getAttribute("disabled") == null;
		})) {
			addHandle(booleans, function (elem, name, isXML) {
				var val;
				if (!isXML) {
					return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
				}
			});
		}

		return Sizzle;
	}(window);

	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;

	// Deprecated
	jQuery.expr[":"] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;

	var dir = function dir(elem, _dir, until) {
		var matched = [],
		    truncate = until !== undefined;

		while ((elem = elem[_dir]) && elem.nodeType !== 9) {
			if (elem.nodeType === 1) {
				if (truncate && jQuery(elem).is(until)) {
					break;
				}
				matched.push(elem);
			}
		}
		return matched;
	};

	var _siblings = function _siblings(n, elem) {
		var matched = [];

		for (; n; n = n.nextSibling) {
			if (n.nodeType === 1 && n !== elem) {
				matched.push(n);
			}
		}

		return matched;
	};

	var rneedsContext = jQuery.expr.match.needsContext;

	function nodeName(elem, name) {

		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	};
	var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow(elements, qualifier, not) {
		if (jQuery.isFunction(qualifier)) {
			return jQuery.grep(elements, function (elem, i) {
				return !!qualifier.call(elem, i, elem) !== not;
			});
		}

		// Single element
		if (qualifier.nodeType) {
			return jQuery.grep(elements, function (elem) {
				return elem === qualifier !== not;
			});
		}

		// Arraylike of elements (jQuery, arguments, Array)
		if (typeof qualifier !== "string") {
			return jQuery.grep(elements, function (elem) {
				return indexOf.call(qualifier, elem) > -1 !== not;
			});
		}

		// Simple selector that can be filtered directly, removing non-Elements
		if (risSimple.test(qualifier)) {
			return jQuery.filter(qualifier, elements, not);
		}

		// Complex selector, compare the two sets, removing non-Elements
		qualifier = jQuery.filter(qualifier, elements);
		return jQuery.grep(elements, function (elem) {
			return indexOf.call(qualifier, elem) > -1 !== not && elem.nodeType === 1;
		});
	}

	jQuery.filter = function (expr, elems, not) {
		var elem = elems[0];

		if (not) {
			expr = ":not(" + expr + ")";
		}

		if (elems.length === 1 && elem.nodeType === 1) {
			return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
		}

		return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
			return elem.nodeType === 1;
		}));
	};

	jQuery.fn.extend({
		find: function find(selector) {
			var i,
			    ret,
			    len = this.length,
			    self = this;

			if (typeof selector !== "string") {
				return this.pushStack(jQuery(selector).filter(function () {
					for (i = 0; i < len; i++) {
						if (jQuery.contains(self[i], this)) {
							return true;
						}
					}
				}));
			}

			ret = this.pushStack([]);

			for (i = 0; i < len; i++) {
				jQuery.find(selector, self[i], ret);
			}

			return len > 1 ? jQuery.uniqueSort(ret) : ret;
		},
		filter: function filter(selector) {
			return this.pushStack(winnow(this, selector || [], false));
		},
		not: function not(selector) {
			return this.pushStack(winnow(this, selector || [], true));
		},
		is: function is(selector) {
			return !!winnow(this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
		}
	});

	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,


	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
	    init = jQuery.fn.init = function (selector, context, root) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if (!selector) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if (typeof selector === "string") {
			if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [null, selector, null];
			} else {
				match = rquickExpr.exec(selector);
			}

			// Match html or make sure no context is specified for #id
			if (match && (match[1] || !context)) {

				// HANDLE: $(html) -> $(array)
				if (match[1]) {
					context = context instanceof jQuery ? context[0] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));

					// HANDLE: $(html, props)
					if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
						for (match in context) {

							// Properties of context are called as methods if possible
							if (jQuery.isFunction(this[match])) {
								this[match](context[match]);

								// ...and otherwise set as attributes
							} else {
								this.attr(match, context[match]);
							}
						}
					}

					return this;

					// HANDLE: $(#id)
				} else {
					elem = document.getElementById(match[2]);

					if (elem) {

						// Inject the element directly into the jQuery object
						this[0] = elem;
						this.length = 1;
					}
					return this;
				}

				// HANDLE: $(expr, $(...))
			} else if (!context || context.jquery) {
				return (context || root).find(selector);

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor(context).find(selector);
			}

			// HANDLE: $(DOMElement)
		} else if (selector.nodeType) {
			this[0] = selector;
			this.length = 1;
			return this;

			// HANDLE: $(function)
			// Shortcut for document ready
		} else if (jQuery.isFunction(selector)) {
			return root.ready !== undefined ? root.ready(selector) :

			// Execute immediately if ready is not present
			selector(jQuery);
		}

		return jQuery.makeArray(selector, this);
	};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery(document);

	var rparentsprev = /^(?:parents|prev(?:Until|All))/,


	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

	jQuery.fn.extend({
		has: function has(target) {
			var targets = jQuery(target, this),
			    l = targets.length;

			return this.filter(function () {
				var i = 0;
				for (; i < l; i++) {
					if (jQuery.contains(this, targets[i])) {
						return true;
					}
				}
			});
		},

		closest: function closest(selectors, context) {
			var cur,
			    i = 0,
			    l = this.length,
			    matched = [],
			    targets = typeof selectors !== "string" && jQuery(selectors);

			// Positional selectors never match, since there's no _selection_ context
			if (!rneedsContext.test(selectors)) {
				for (; i < l; i++) {
					for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {

						// Always skip document fragments
						if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {

							matched.push(cur);
							break;
						}
					}
				}
			}

			return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
		},

		// Determine the position of an element within the set
		index: function index(elem) {

			// No argument, return index in parent
			if (!elem) {
				return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if (typeof elem === "string") {
				return indexOf.call(jQuery(elem), this[0]);
			}

			// Locate the position of the desired element
			return indexOf.call(this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[0] : elem);
		},

		add: function add(selector, context) {
			return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(), jQuery(selector, context))));
		},

		addBack: function addBack(selector) {
			return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
		}
	});

	function sibling(cur, dir) {
		while ((cur = cur[dir]) && cur.nodeType !== 1) {}
		return cur;
	}

	jQuery.each({
		parent: function parent(elem) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function parents(elem) {
			return dir(elem, "parentNode");
		},
		parentsUntil: function parentsUntil(elem, i, until) {
			return dir(elem, "parentNode", until);
		},
		next: function next(elem) {
			return sibling(elem, "nextSibling");
		},
		prev: function prev(elem) {
			return sibling(elem, "previousSibling");
		},
		nextAll: function nextAll(elem) {
			return dir(elem, "nextSibling");
		},
		prevAll: function prevAll(elem) {
			return dir(elem, "previousSibling");
		},
		nextUntil: function nextUntil(elem, i, until) {
			return dir(elem, "nextSibling", until);
		},
		prevUntil: function prevUntil(elem, i, until) {
			return dir(elem, "previousSibling", until);
		},
		siblings: function siblings(elem) {
			return _siblings((elem.parentNode || {}).firstChild, elem);
		},
		children: function children(elem) {
			return _siblings(elem.firstChild);
		},
		contents: function contents(elem) {
			if (nodeName(elem, "iframe")) {
				return elem.contentDocument;
			}

			// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
			// Treat the template element as a regular one in browsers that
			// don't support it.
			if (nodeName(elem, "template")) {
				elem = elem.content || elem;
			}

			return jQuery.merge([], elem.childNodes);
		}
	}, function (name, fn) {
		jQuery.fn[name] = function (until, selector) {
			var matched = jQuery.map(this, fn, until);

			if (name.slice(-5) !== "Until") {
				selector = until;
			}

			if (selector && typeof selector === "string") {
				matched = jQuery.filter(selector, matched);
			}

			if (this.length > 1) {

				// Remove duplicates
				if (!guaranteedUnique[name]) {
					jQuery.uniqueSort(matched);
				}

				// Reverse order for parents* and prev-derivatives
				if (rparentsprev.test(name)) {
					matched.reverse();
				}
			}

			return this.pushStack(matched);
		};
	});
	var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;

	// Convert String-formatted options into Object-formatted ones
	function createOptions(options) {
		var object = {};
		jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
			object[flag] = true;
		});
		return object;
	}

	/*
  * Create a callback list using the following parameters:
  *
  *	options: an optional list of space-separated options that will change how
  *			the callback list behaves or a more traditional option object
  *
  * By default a callback list will act like an event callback list and can be
  * "fired" multiple times.
  *
  * Possible options:
  *
  *	once:			will ensure the callback list can only be fired once (like a Deferred)
  *
  *	memory:			will keep track of previous values and will call any callback added
  *					after the list has been fired right away with the latest "memorized"
  *					values (like a Deferred)
  *
  *	unique:			will ensure a callback can only be added once (no duplicate in the list)
  *
  *	stopOnFalse:	interrupt callings when a callback returns false
  *
  */
	jQuery.Callbacks = function (options) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);

		var // Flag to know if list is currently firing
		firing,


		// Last fire value for non-forgettable lists
		memory,


		// Flag to know if list was already fired
		_fired,


		// Flag to prevent firing
		_locked,


		// Actual callback list
		list = [],


		// Queue of execution data for repeatable lists
		queue = [],


		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,


		// Fire callbacks
		fire = function fire() {

			// Enforce single-firing
			_locked = _locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			_fired = firing = true;
			for (; queue.length; firingIndex = -1) {
				memory = queue.shift();
				while (++firingIndex < list.length) {

					// Run callback and check for early termination
					if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if (!options.memory) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if (_locked) {

				// Keep an empty list if we have data for future add calls
				if (memory) {
					list = [];

					// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},


		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function add() {
				if (list) {

					// If we have memory from a past run, we should fire after adding
					if (memory && !firing) {
						firingIndex = list.length - 1;
						queue.push(memory);
					}

					(function add(args) {
						jQuery.each(args, function (_, arg) {
							if (jQuery.isFunction(arg)) {
								if (!options.unique || !self.has(arg)) {
									list.push(arg);
								}
							} else if (arg && arg.length && jQuery.type(arg) !== "string") {

								// Inspect recursively
								add(arg);
							}
						});
					})(arguments);

					if (memory && !firing) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function remove() {
				jQuery.each(arguments, function (_, arg) {
					var index;
					while ((index = jQuery.inArray(arg, list, index)) > -1) {
						list.splice(index, 1);

						// Handle firing indexes
						if (index <= firingIndex) {
							firingIndex--;
						}
					}
				});
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function has(fn) {
				return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function empty() {
				if (list) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function disable() {
				_locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function disabled() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function lock() {
				_locked = queue = [];
				if (!memory && !firing) {
					list = memory = "";
				}
				return this;
			},
			locked: function locked() {
				return !!_locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function fireWith(context, args) {
				if (!_locked) {
					args = args || [];
					args = [context, args.slice ? args.slice() : args];
					queue.push(args);
					if (!firing) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function fire() {
				self.fireWith(this, arguments);
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function fired() {
				return !!_fired;
			}
		};

		return self;
	};

	function Identity(v) {
		return v;
	}
	function Thrower(ex) {
		throw ex;
	}

	function adoptValue(value, resolve, reject, noValue) {
		var method;

		try {

			// Check for promise aspect first to privilege synchronous behavior
			if (value && jQuery.isFunction(method = value.promise)) {
				method.call(value).done(resolve).fail(reject);

				// Other thenables
			} else if (value && jQuery.isFunction(method = value.then)) {
				method.call(value, resolve, reject);

				// Other non-thenables
			} else {

				// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
				// * false: [ value ].slice( 0 ) => resolve( value )
				// * true: [ value ].slice( 1 ) => resolve()
				resolve.apply(undefined, [value].slice(noValue));
			}

			// For Promises/A+, convert exceptions into rejections
			// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
			// Deferred#then to conditionally suppress rejection.
		} catch (value) {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.apply(undefined, [value]);
		}
	}

	jQuery.extend({

		Deferred: function Deferred(func) {
			var tuples = [

			// action, add listener, callbacks,
			// ... .then handlers, argument index, [final state]
			["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory"), 2], ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), 1, "rejected"]],
			    _state = "pending",
			    _promise = {
				state: function state() {
					return _state;
				},
				always: function always() {
					deferred.done(arguments).fail(arguments);
					return this;
				},
				"catch": function _catch(fn) {
					return _promise.then(null, fn);
				},

				// Keep pipe for back-compat
				pipe: function pipe() /* fnDone, fnFail, fnProgress */{
					var fns = arguments;

					return jQuery.Deferred(function (newDefer) {
						jQuery.each(tuples, function (i, tuple) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction(fns[tuple[4]]) && fns[tuple[4]];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[tuple[1]](function () {
								var returned = fn && fn.apply(this, arguments);
								if (returned && jQuery.isFunction(returned.promise)) {
									returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
								} else {
									newDefer[tuple[0] + "With"](this, fn ? [returned] : arguments);
								}
							});
						});
						fns = null;
					}).promise();
				},
				then: function then(onFulfilled, onRejected, onProgress) {
					var maxDepth = 0;
					function resolve(depth, deferred, handler, special) {
						return function () {
							var that = this,
							    args = arguments,
							    mightThrow = function mightThrow() {
								var returned, then;

								// Support: Promises/A+ section 2.3.3.3.3
								// https://promisesaplus.com/#point-59
								// Ignore double-resolution attempts
								if (depth < maxDepth) {
									return;
								}

								returned = handler.apply(that, args);

								// Support: Promises/A+ section 2.3.1
								// https://promisesaplus.com/#point-48
								if (returned === deferred.promise()) {
									throw new TypeError("Thenable self-resolution");
								}

								// Support: Promises/A+ sections 2.3.3.1, 3.5
								// https://promisesaplus.com/#point-54
								// https://promisesaplus.com/#point-75
								// Retrieve `then` only once
								then = returned && (

								// Support: Promises/A+ section 2.3.4
								// https://promisesaplus.com/#point-64
								// Only check objects and functions for thenability
								(typeof returned === "undefined" ? "undefined" : _typeof(returned)) === "object" || typeof returned === "function") && returned.then;

								// Handle a returned thenable
								if (jQuery.isFunction(then)) {

									// Special processors (notify) just wait for resolution
									if (special) {
										then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special));

										// Normal processors (resolve) also hook into progress
									} else {

										// ...and disregard older resolution values
										maxDepth++;

										then.call(returned, resolve(maxDepth, deferred, Identity, special), resolve(maxDepth, deferred, Thrower, special), resolve(maxDepth, deferred, Identity, deferred.notifyWith));
									}

									// Handle all other returned values
								} else {

									// Only substitute handlers pass on context
									// and multiple values (non-spec behavior)
									if (handler !== Identity) {
										that = undefined;
										args = [returned];
									}

									// Process the value(s)
									// Default process is resolve
									(special || deferred.resolveWith)(that, args);
								}
							},


							// Only normal processors (resolve) catch and reject exceptions
							process = special ? mightThrow : function () {
								try {
									mightThrow();
								} catch (e) {

									if (jQuery.Deferred.exceptionHook) {
										jQuery.Deferred.exceptionHook(e, process.stackTrace);
									}

									// Support: Promises/A+ section 2.3.3.3.4.1
									// https://promisesaplus.com/#point-61
									// Ignore post-resolution exceptions
									if (depth + 1 >= maxDepth) {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if (handler !== Thrower) {
											that = undefined;
											args = [e];
										}

										deferred.rejectWith(that, args);
									}
								}
							};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if (depth) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if (jQuery.Deferred.getStackHook) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout(process);
							}
						};
					}

					return jQuery.Deferred(function (newDefer) {

						// progress_handlers.add( ... )
						tuples[0][3].add(resolve(0, newDefer, jQuery.isFunction(onProgress) ? onProgress : Identity, newDefer.notifyWith));

						// fulfilled_handlers.add( ... )
						tuples[1][3].add(resolve(0, newDefer, jQuery.isFunction(onFulfilled) ? onFulfilled : Identity));

						// rejected_handlers.add( ... )
						tuples[2][3].add(resolve(0, newDefer, jQuery.isFunction(onRejected) ? onRejected : Thrower));
					}).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function promise(obj) {
					return obj != null ? jQuery.extend(obj, _promise) : _promise;
				}
			},
			    deferred = {};

			// Add list-specific methods
			jQuery.each(tuples, function (i, tuple) {
				var list = tuple[2],
				    stateString = tuple[5];

				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				_promise[tuple[1]] = list.add;

				// Handle state
				if (stateString) {
					list.add(function () {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						_state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[3 - i][2].disable,

					// progress_callbacks.lock
					tuples[0][2].lock);
				}

				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add(tuple[3].fire);

				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[tuple[0]] = function () {
					deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
					return this;
				};

				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[tuple[0] + "With"] = list.fireWith;
			});

			// Make the deferred a promise
			_promise.promise(deferred);

			// Call given func if any
			if (func) {
				func.call(deferred, deferred);
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function when(singleValue) {
			var

			// count of uncompleted subordinates
			remaining = arguments.length,


			// count of unprocessed arguments
			i = remaining,


			// subordinate fulfillment data
			resolveContexts = Array(i),
			    resolveValues = _slice.call(arguments),


			// the master Deferred
			master = jQuery.Deferred(),


			// subordinate callback factory
			updateFunc = function updateFunc(i) {
				return function (value) {
					resolveContexts[i] = this;
					resolveValues[i] = arguments.length > 1 ? _slice.call(arguments) : value;
					if (! --remaining) {
						master.resolveWith(resolveContexts, resolveValues);
					}
				};
			};

			// Single- and empty arguments are adopted like Promise.resolve
			if (remaining <= 1) {
				adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject, !remaining);

				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if (master.state() === "pending" || jQuery.isFunction(resolveValues[i] && resolveValues[i].then)) {

					return master.then();
				}
			}

			// Multiple arguments are aggregated like Promise.all array elements
			while (i--) {
				adoptValue(resolveValues[i], updateFunc(i), master.reject);
			}

			return master.promise();
		}
	});

	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

	jQuery.Deferred.exceptionHook = function (error, stack) {

		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
			window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
		}
	};

	jQuery.readyException = function (error) {
		window.setTimeout(function () {
			throw error;
		});
	};

	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();

	jQuery.fn.ready = function (fn) {

		readyList.then(fn)

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch(function (error) {
			jQuery.readyException(error);
		});

		return this;
	};

	jQuery.extend({

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Handle when the DOM is ready
		ready: function ready(wait) {

			// Abort if there are pending holds or we're already ready
			if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if (wait !== true && --jQuery.readyWait > 0) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith(document, [jQuery]);
		}
	});

	jQuery.ready.then = readyList.then;

	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener("DOMContentLoaded", completed);
		window.removeEventListener("load", completed);
		jQuery.ready();
	}

	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {

		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout(jQuery.ready);
	} else {

		// Use the handy event callback
		document.addEventListener("DOMContentLoaded", completed);

		// A fallback to window.onload, that will always work
		window.addEventListener("load", completed);
	}

	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function access(elems, fn, key, value, chainable, emptyGet, raw) {
		var i = 0,
		    len = elems.length,
		    bulk = key == null;

		// Sets many values
		if (jQuery.type(key) === "object") {
			chainable = true;
			for (i in key) {
				access(elems, fn, i, key[i], true, emptyGet, raw);
			}

			// Sets one value
		} else if (value !== undefined) {
			chainable = true;

			if (!jQuery.isFunction(value)) {
				raw = true;
			}

			if (bulk) {

				// Bulk operations run against the entire set
				if (raw) {
					fn.call(elems, value);
					fn = null;

					// ...except when executing function values
				} else {
					bulk = fn;
					fn = function fn(elem, key, value) {
						return bulk.call(jQuery(elem), value);
					};
				}
			}

			if (fn) {
				for (; i < len; i++) {
					fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
				}
			}
		}

		if (chainable) {
			return elems;
		}

		// Gets
		if (bulk) {
			return fn.call(elems);
		}

		return len ? fn(elems[0], key) : emptyGet;
	};
	var acceptData = function acceptData(owner) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
	};

	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		cache: function cache(owner) {

			// Check if the owner object already has a cache
			var value = owner[this.expando];

			// If not, create one
			if (!value) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if (acceptData(owner)) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if (owner.nodeType) {
						owner[this.expando] = value;

						// Otherwise secure it in a non-enumerable property
						// configurable must be true to allow the property to be
						// deleted when data is removed
					} else {
						Object.defineProperty(owner, this.expando, {
							value: value,
							configurable: true
						});
					}
				}
			}

			return value;
		},
		set: function set(owner, data, value) {
			var prop,
			    cache = this.cache(owner);

			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if (typeof data === "string") {
				cache[jQuery.camelCase(data)] = value;

				// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for (prop in data) {
					cache[jQuery.camelCase(prop)] = data[prop];
				}
			}
			return cache;
		},
		get: function get(owner, key) {
			return key === undefined ? this.cache(owner) :

			// Always use camelCase key (gh-2257)
			owner[this.expando] && owner[this.expando][jQuery.camelCase(key)];
		},
		access: function access(owner, key, value) {

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if (key === undefined || key && typeof key === "string" && value === undefined) {

				return this.get(owner, key);
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set(owner, key, value);

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function remove(owner, key) {
			var i,
			    cache = owner[this.expando];

			if (cache === undefined) {
				return;
			}

			if (key !== undefined) {

				// Support array or space separated string of keys
				if (Array.isArray(key)) {

					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map(jQuery.camelCase);
				} else {
					key = jQuery.camelCase(key);

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
				}

				i = key.length;

				while (i--) {
					delete cache[key[i]];
				}
			}

			// Remove the expando if there's no more data
			if (key === undefined || jQuery.isEmptyObject(cache)) {

				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if (owner.nodeType) {
					owner[this.expando] = undefined;
				} else {
					delete owner[this.expando];
				}
			}
		},
		hasData: function hasData(owner) {
			var cache = owner[this.expando];
			return cache !== undefined && !jQuery.isEmptyObject(cache);
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();

	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	    rmultiDash = /[A-Z]/g;

	function getData(data) {
		if (data === "true") {
			return true;
		}

		if (data === "false") {
			return false;
		}

		if (data === "null") {
			return null;
		}

		// Only convert to a number if it doesn't change the string
		if (data === +data + "") {
			return +data;
		}

		if (rbrace.test(data)) {
			return JSON.parse(data);
		}

		return data;
	}

	function dataAttr(elem, key, data) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if (data === undefined && elem.nodeType === 1) {
			name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
			data = elem.getAttribute(name);

			if (typeof data === "string") {
				try {
					data = getData(data);
				} catch (e) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set(elem, key, data);
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend({
		hasData: function hasData(elem) {
			return dataUser.hasData(elem) || dataPriv.hasData(elem);
		},

		data: function data(elem, name, _data) {
			return dataUser.access(elem, name, _data);
		},

		removeData: function removeData(elem, name) {
			dataUser.remove(elem, name);
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function _data(elem, name, data) {
			return dataPriv.access(elem, name, data);
		},

		_removeData: function _removeData(elem, name) {
			dataPriv.remove(elem, name);
		}
	});

	jQuery.fn.extend({
		data: function data(key, value) {
			var i,
			    name,
			    data,
			    elem = this[0],
			    attrs = elem && elem.attributes;

			// Gets all values
			if (key === undefined) {
				if (this.length) {
					data = dataUser.get(elem);

					if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
						i = attrs.length;
						while (i--) {

							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if (attrs[i]) {
								name = attrs[i].name;
								if (name.indexOf("data-") === 0) {
									name = jQuery.camelCase(name.slice(5));
									dataAttr(elem, name, data[name]);
								}
							}
						}
						dataPriv.set(elem, "hasDataAttrs", true);
					}
				}

				return data;
			}

			// Sets multiple values
			if ((typeof key === "undefined" ? "undefined" : _typeof(key)) === "object") {
				return this.each(function () {
					dataUser.set(this, key);
				});
			}

			return access(this, function (value) {
				var data;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if (elem && value === undefined) {

					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get(elem, key);
					if (data !== undefined) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr(elem, key);
					if (data !== undefined) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each(function () {

					// We always store the camelCased key
					dataUser.set(this, key, value);
				});
			}, null, value, arguments.length > 1, null, true);
		},

		removeData: function removeData(key) {
			return this.each(function () {
				dataUser.remove(this, key);
			});
		}
	});

	jQuery.extend({
		queue: function queue(elem, type, data) {
			var queue;

			if (elem) {
				type = (type || "fx") + "queue";
				queue = dataPriv.get(elem, type);

				// Speed up dequeue by getting out quickly if this is just a lookup
				if (data) {
					if (!queue || Array.isArray(data)) {
						queue = dataPriv.access(elem, type, jQuery.makeArray(data));
					} else {
						queue.push(data);
					}
				}
				return queue || [];
			}
		},

		dequeue: function dequeue(elem, type) {
			type = type || "fx";

			var queue = jQuery.queue(elem, type),
			    startLength = queue.length,
			    fn = queue.shift(),
			    hooks = jQuery._queueHooks(elem, type),
			    next = function next() {
				jQuery.dequeue(elem, type);
			};

			// If the fx queue is dequeued, always remove the progress sentinel
			if (fn === "inprogress") {
				fn = queue.shift();
				startLength--;
			}

			if (fn) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if (type === "fx") {
					queue.unshift("inprogress");
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call(elem, next, hooks);
			}

			if (!startLength && hooks) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function _queueHooks(elem, type) {
			var key = type + "queueHooks";
			return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
				empty: jQuery.Callbacks("once memory").add(function () {
					dataPriv.remove(elem, [type + "queue", key]);
				})
			});
		}
	});

	jQuery.fn.extend({
		queue: function queue(type, data) {
			var setter = 2;

			if (typeof type !== "string") {
				data = type;
				type = "fx";
				setter--;
			}

			if (arguments.length < setter) {
				return jQuery.queue(this[0], type);
			}

			return data === undefined ? this : this.each(function () {
				var queue = jQuery.queue(this, type, data);

				// Ensure a hooks for this queue
				jQuery._queueHooks(this, type);

				if (type === "fx" && queue[0] !== "inprogress") {
					jQuery.dequeue(this, type);
				}
			});
		},
		dequeue: function dequeue(type) {
			return this.each(function () {
				jQuery.dequeue(this, type);
			});
		},
		clearQueue: function clearQueue(type) {
			return this.queue(type || "fx", []);
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function promise(type, obj) {
			var tmp,
			    count = 1,
			    defer = jQuery.Deferred(),
			    elements = this,
			    i = this.length,
			    resolve = function resolve() {
				if (! --count) {
					defer.resolveWith(elements, [elements]);
				}
			};

			if (typeof type !== "string") {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while (i--) {
				tmp = dataPriv.get(elements[i], type + "queueHooks");
				if (tmp && tmp.empty) {
					count++;
					tmp.empty.add(resolve);
				}
			}
			resolve();
			return defer.promise(obj);
		}
	});
	var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;

	var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");

	var cssExpand = ["Top", "Right", "Bottom", "Left"];

	var isHiddenWithinTree = function isHiddenWithinTree(elem, el) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" || elem.style.display === "" &&

		// Otherwise, check computed style
		// Support: Firefox <=43 - 45
		// Disconnected elements can have computed display: none, so first confirm that elem is
		// in the document.
		jQuery.contains(elem.ownerDocument, elem) && jQuery.css(elem, "display") === "none";
	};

	var swap = function swap(elem, options, callback, args) {
		var ret,
		    name,
		    old = {};

		// Remember the old values, and insert the new ones
		for (name in options) {
			old[name] = elem.style[name];
			elem.style[name] = options[name];
		}

		ret = callback.apply(elem, args || []);

		// Revert the old values
		for (name in options) {
			elem.style[name] = old[name];
		}

		return ret;
	};

	function adjustCSS(elem, prop, valueParts, tween) {
		var adjusted,
		    scale = 1,
		    maxIterations = 20,
		    currentValue = tween ? function () {
			return tween.cur();
		} : function () {
			return jQuery.css(elem, prop, "");
		},
		    initial = currentValue(),
		    unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),


		// Starting value computation is required for potential unit mismatches
		initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));

		if (initialInUnit && initialInUnit[3] !== unit) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[3];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style(elem, prop, initialInUnit + unit);

				// Update scale, tolerating zero or NaN from tween.cur()
				// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (scale !== (scale = currentValue() / initial) && scale !== 1 && --maxIterations);
		}

		if (valueParts) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
			if (tween) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}

	var defaultDisplayMap = {};

	function getDefaultDisplay(elem) {
		var temp,
		    doc = elem.ownerDocument,
		    nodeName = elem.nodeName,
		    display = defaultDisplayMap[nodeName];

		if (display) {
			return display;
		}

		temp = doc.body.appendChild(doc.createElement(nodeName));
		display = jQuery.css(temp, "display");

		temp.parentNode.removeChild(temp);

		if (display === "none") {
			display = "block";
		}
		defaultDisplayMap[nodeName] = display;

		return display;
	}

	function showHide(elements, show) {
		var display,
		    elem,
		    values = [],
		    index = 0,
		    length = elements.length;

		// Determine new display value for elements that need to change
		for (; index < length; index++) {
			elem = elements[index];
			if (!elem.style) {
				continue;
			}

			display = elem.style.display;
			if (show) {

				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if (display === "none") {
					values[index] = dataPriv.get(elem, "display") || null;
					if (!values[index]) {
						elem.style.display = "";
					}
				}
				if (elem.style.display === "" && isHiddenWithinTree(elem)) {
					values[index] = getDefaultDisplay(elem);
				}
			} else {
				if (display !== "none") {
					values[index] = "none";

					// Remember what we're overwriting
					dataPriv.set(elem, "display", display);
				}
			}
		}

		// Set the display of the elements in a second loop to avoid constant reflow
		for (index = 0; index < length; index++) {
			if (values[index] != null) {
				elements[index].style.display = values[index];
			}
		}

		return elements;
	}

	jQuery.fn.extend({
		show: function show() {
			return showHide(this, true);
		},
		hide: function hide() {
			return showHide(this);
		},
		toggle: function toggle(state) {
			if (typeof state === "boolean") {
				return state ? this.show() : this.hide();
			}

			return this.each(function () {
				if (isHiddenWithinTree(this)) {
					jQuery(this).show();
				} else {
					jQuery(this).hide();
				}
			});
		}
	});
	var rcheckableType = /^(?:checkbox|radio)$/i;

	var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i;

	var rscriptType = /^$|\/(?:java|ecma)script/i;

	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE <=9 only
		option: [1, "<select multiple='multiple'>", "</select>"],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [1, "<table>", "</table>"],
		col: [2, "<table><colgroup>", "</colgroup></table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],

		_default: [0, "", ""]
	};

	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;

	function getAll(context, tag) {

		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret;

		if (typeof context.getElementsByTagName !== "undefined") {
			ret = context.getElementsByTagName(tag || "*");
		} else if (typeof context.querySelectorAll !== "undefined") {
			ret = context.querySelectorAll(tag || "*");
		} else {
			ret = [];
		}

		if (tag === undefined || tag && nodeName(context, tag)) {
			return jQuery.merge([context], ret);
		}

		return ret;
	}

	// Mark scripts as having already been evaluated
	function setGlobalEval(elems, refElements) {
		var i = 0,
		    l = elems.length;

		for (; i < l; i++) {
			dataPriv.set(elems[i], "globalEval", !refElements || dataPriv.get(refElements[i], "globalEval"));
		}
	}

	var rhtml = /<|&#?\w+;/;

	function buildFragment(elems, context, scripts, selection, ignored) {
		var elem,
		    tmp,
		    tag,
		    wrap,
		    contains,
		    j,
		    fragment = context.createDocumentFragment(),
		    nodes = [],
		    i = 0,
		    l = elems.length;

		for (; i < l; i++) {
			elem = elems[i];

			if (elem || elem === 0) {

				// Add nodes directly
				if (jQuery.type(elem) === "object") {

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge(nodes, elem.nodeType ? [elem] : elem);

					// Convert non-html into a text node
				} else if (!rhtml.test(elem)) {
					nodes.push(context.createTextNode(elem));

					// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild(context.createElement("div"));

					// Deserialize a standard representation
					tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
					wrap = wrapMap[tag] || wrapMap._default;
					tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];

					// Descend through wrappers to the right content
					j = wrap[0];
					while (j--) {
						tmp = tmp.lastChild;
					}

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge(nodes, tmp.childNodes);

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while (elem = nodes[i++]) {

			// Skip elements already in the context collection (trac-4087)
			if (selection && jQuery.inArray(elem, selection) > -1) {
				if (ignored) {
					ignored.push(elem);
				}
				continue;
			}

			contains = jQuery.contains(elem.ownerDocument, elem);

			// Append to fragment
			tmp = getAll(fragment.appendChild(elem), "script");

			// Preserve script evaluation history
			if (contains) {
				setGlobalEval(tmp);
			}

			// Capture executables
			if (scripts) {
				j = 0;
				while (elem = tmp[j++]) {
					if (rscriptType.test(elem.type || "")) {
						scripts.push(elem);
					}
				}
			}
		}

		return fragment;
	}

	(function () {
		var fragment = document.createDocumentFragment(),
		    div = fragment.appendChild(document.createElement("div")),
		    input = document.createElement("input");

		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute("type", "radio");
		input.setAttribute("checked", "checked");
		input.setAttribute("name", "t");

		div.appendChild(input);

		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;

		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
	})();
	var documentElement = document.documentElement;

	var rkeyEvent = /^key/,
	    rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	    rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch (err) {}
	}

	function _on(elem, types, selector, data, fn, one) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {

			// ( types-Object, selector, data )
			if (typeof selector !== "string") {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for (type in types) {
				_on(elem, type, selector, data, types[type], one);
			}
			return elem;
		}

		if (data == null && fn == null) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if (fn == null) {
			if (typeof selector === "string") {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if (fn === false) {
			fn = returnFalse;
		} else if (!fn) {
			return elem;
		}

		if (one === 1) {
			origFn = fn;
			fn = function fn(event) {

				// Can use an empty set, since event contains the info
				jQuery().off(event);
				return origFn.apply(this, arguments);
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
		}
		return elem.each(function () {
			jQuery.event.add(this, types, fn, data, selector);
		});
	}

	/*
  * Helper functions for managing events -- not part of the public interface.
  * Props to Dean Edwards' addEvent library for many of the ideas.
  */
	jQuery.event = {

		global: {},

		add: function add(elem, types, handler, data, selector) {

			var handleObjIn,
			    eventHandle,
			    tmp,
			    events,
			    t,
			    handleObj,
			    special,
			    handlers,
			    type,
			    namespaces,
			    origType,
			    elemData = dataPriv.get(elem);

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if (!elemData) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if (handler.handler) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if (selector) {
				jQuery.find.matchesSelector(documentElement, selector);
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if (!handler.guid) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if (!(events = elemData.events)) {
				events = elemData.events = {};
			}
			if (!(eventHandle = elemData.handle)) {
				eventHandle = elemData.handle = function (e) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = (types || "").match(rnothtmlwhite) || [""];
			t = types.length;
			while (t--) {
				tmp = rtypenamespace.exec(types[t]) || [];
				type = origType = tmp[1];
				namespaces = (tmp[2] || "").split(".").sort();

				// There *must* be a type, no attaching namespace-only handlers
				if (!type) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[type] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = (selector ? special.delegateType : special.bindType) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[type] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend({
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test(selector),
					namespace: namespaces.join(".")
				}, handleObjIn);

				// Init the event handler queue if we're the first
				if (!(handlers = events[type])) {
					handlers = events[type] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {

						if (elem.addEventListener) {
							elem.addEventListener(type, eventHandle);
						}
					}
				}

				if (special.add) {
					special.add.call(elem, handleObj);

					if (!handleObj.handler.guid) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if (selector) {
					handlers.splice(handlers.delegateCount++, 0, handleObj);
				} else {
					handlers.push(handleObj);
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[type] = true;
			}
		},

		// Detach an event or set of events from an element
		remove: function remove(elem, types, handler, selector, mappedTypes) {

			var j,
			    origCount,
			    tmp,
			    events,
			    t,
			    handleObj,
			    special,
			    handlers,
			    type,
			    namespaces,
			    origType,
			    elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

			if (!elemData || !(events = elemData.events)) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = (types || "").match(rnothtmlwhite) || [""];
			t = types.length;
			while (t--) {
				tmp = rtypenamespace.exec(types[t]) || [];
				type = origType = tmp[1];
				namespaces = (tmp[2] || "").split(".").sort();

				// Unbind all events (on this namespace, if provided) for the element
				if (!type) {
					for (type in events) {
						jQuery.event.remove(elem, type + types[t], handler, selector, true);
					}
					continue;
				}

				special = jQuery.event.special[type] || {};
				type = (selector ? special.delegateType : special.bindType) || type;
				handlers = events[type] || [];
				tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");

				// Remove matching events
				origCount = j = handlers.length;
				while (j--) {
					handleObj = handlers[j];

					if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
						handlers.splice(j, 1);

						if (handleObj.selector) {
							handlers.delegateCount--;
						}
						if (special.remove) {
							special.remove.call(elem, handleObj);
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if (origCount && !handlers.length) {
					if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {

						jQuery.removeEvent(elem, type, elemData.handle);
					}

					delete events[type];
				}
			}

			// Remove data and the expando if it's no longer used
			if (jQuery.isEmptyObject(events)) {
				dataPriv.remove(elem, "handle events");
			}
		},

		dispatch: function dispatch(nativeEvent) {

			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix(nativeEvent);

			var i,
			    j,
			    ret,
			    matched,
			    handleObj,
			    handlerQueue,
			    args = new Array(arguments.length),
			    handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
			    special = jQuery.event.special[event.type] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[0] = event;

			for (i = 1; i < arguments.length; i++) {
				args[i] = arguments[i];
			}

			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if (special.preDispatch && special.preDispatch.call(this, event) === false) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call(this, event, handlers);

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
				event.currentTarget = matched.elem;

				j = 0;
				while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

						if (ret !== undefined) {
							if ((event.result = ret) === false) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if (special.postDispatch) {
				special.postDispatch.call(this, event);
			}

			return event.result;
		},

		handlers: function handlers(event, _handlers) {
			var i,
			    handleObj,
			    sel,
			    matchedHandlers,
			    matchedSelectors,
			    handlerQueue = [],
			    delegateCount = _handlers.delegateCount,
			    cur = event.target;

			// Find delegate handlers
			if (delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!(event.type === "click" && event.button >= 1)) {

				for (; cur !== this; cur = cur.parentNode || this) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
						matchedHandlers = [];
						matchedSelectors = {};
						for (i = 0; i < delegateCount; i++) {
							handleObj = _handlers[i];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if (matchedSelectors[sel] === undefined) {
								matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
							}
							if (matchedSelectors[sel]) {
								matchedHandlers.push(handleObj);
							}
						}
						if (matchedHandlers.length) {
							handlerQueue.push({ elem: cur, handlers: matchedHandlers });
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			cur = this;
			if (delegateCount < _handlers.length) {
				handlerQueue.push({ elem: cur, handlers: _handlers.slice(delegateCount) });
			}

			return handlerQueue;
		},

		addProp: function addProp(name, hook) {
			Object.defineProperty(jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,

				get: jQuery.isFunction(hook) ? function () {
					if (this.originalEvent) {
						return hook(this.originalEvent);
					}
				} : function () {
					if (this.originalEvent) {
						return this.originalEvent[name];
					}
				},

				set: function set(value) {
					Object.defineProperty(this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					});
				}
			});
		},

		fix: function fix(originalEvent) {
			return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function trigger() {
					if (this !== safeActiveElement() && this.focus) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function trigger() {
					if (this === safeActiveElement() && this.blur) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function trigger() {
					if (this.type === "checkbox" && this.click && nodeName(this, "input")) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function _default(event) {
					return nodeName(event.target, "a");
				}
			},

			beforeunload: {
				postDispatch: function postDispatch(event) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if (event.result !== undefined && event.originalEvent) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function (elem, type, handle) {

		// This "if" is needed for plain objects
		if (elem.removeEventListener) {
			elem.removeEventListener(type, handle);
		}
	};

	jQuery.Event = function (src, props) {

		// Allow instantiation without the 'new' keyword
		if (!(this instanceof jQuery.Event)) {
			return new jQuery.Event(src, props);
		}

		// Event object
		if (src && src.type) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined &&

			// Support: Android <=2.3 only
			src.returnValue === false ? returnTrue : returnFalse;

			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;

			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;

			// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if (props) {
			jQuery.extend(this, props);
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[jQuery.expando] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function preventDefault() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if (e && !this.isSimulated) {
				e.preventDefault();
			}
		},
		stopPropagation: function stopPropagation() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if (e && !this.isSimulated) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function stopImmediatePropagation() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if (e && !this.isSimulated) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each({
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,

		which: function which(event) {
			var button = event.button;

			// Add which for key events
			if (event.which == null && rkeyEvent.test(event.type)) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
				if (button & 1) {
					return 1;
				}

				if (button & 2) {
					return 3;
				}

				if (button & 4) {
					return 2;
				}

				return 0;
			}

			return event.which;
		}
	}, jQuery.event.addProp);

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function (orig, fix) {
		jQuery.event.special[orig] = {
			delegateType: fix,
			bindType: fix,

			handle: function handle(event) {
				var ret,
				    target = this,
				    related = event.relatedTarget,
				    handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if (!related || related !== target && !jQuery.contains(target, related)) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply(this, arguments);
					event.type = fix;
				}
				return ret;
			}
		};
	});

	jQuery.fn.extend({

		on: function on(types, selector, data, fn) {
			return _on(this, types, selector, data, fn);
		},
		one: function one(types, selector, data, fn) {
			return _on(this, types, selector, data, fn, 1);
		},
		off: function off(types, selector, fn) {
			var handleObj, type;
			if (types && types.preventDefault && types.handleObj) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
				return this;
			}
			if ((typeof types === "undefined" ? "undefined" : _typeof(types)) === "object") {

				// ( types-object [, selector] )
				for (type in types) {
					this.off(type, selector, types[type]);
				}
				return this;
			}
			if (selector === false || typeof selector === "function") {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if (fn === false) {
				fn = returnFalse;
			}
			return this.each(function () {
				jQuery.event.remove(this, types, fn, selector);
			});
		}
	});

	var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,


	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,


	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	    rscriptTypeMasked = /^true\/(.*)/,
	    rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	// Prefer a tbody over its parent table for containing new rows
	function manipulationTarget(elem, content) {
		if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {

			return jQuery(">tbody", elem)[0] || elem;
		}

		return elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript(elem) {
		elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
		return elem;
	}
	function restoreScript(elem) {
		var match = rscriptTypeMasked.exec(elem.type);

		if (match) {
			elem.type = match[1];
		} else {
			elem.removeAttribute("type");
		}

		return elem;
	}

	function cloneCopyEvent(src, dest) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if (dest.nodeType !== 1) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if (dataPriv.hasData(src)) {
			pdataOld = dataPriv.access(src);
			pdataCur = dataPriv.set(dest, pdataOld);
			events = pdataOld.events;

			if (events) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for (type in events) {
					for (i = 0, l = events[type].length; i < l; i++) {
						jQuery.event.add(dest, type, events[type][i]);
					}
				}
			}
		}

		// 2. Copy user data
		if (dataUser.hasData(src)) {
			udataOld = dataUser.access(src);
			udataCur = jQuery.extend({}, udataOld);

			dataUser.set(dest, udataCur);
		}
	}

	// Fix IE bugs, see support tests
	function fixInput(src, dest) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if (nodeName === "input" && rcheckableType.test(src.type)) {
			dest.checked = src.checked;

			// Fails to return the selected option to the default selected state when cloning options
		} else if (nodeName === "input" || nodeName === "textarea") {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip(collection, args, callback, ignored) {

		// Flatten any nested arrays
		args = concat.apply([], args);

		var fragment,
		    first,
		    scripts,
		    hasScripts,
		    node,
		    doc,
		    i = 0,
		    l = collection.length,
		    iNoClone = l - 1,
		    value = args[0],
		    isFunction = jQuery.isFunction(value);

		// We can't cloneNode fragments that contain checked, in WebKit
		if (isFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
			return collection.each(function (index) {
				var self = collection.eq(index);
				if (isFunction) {
					args[0] = value.call(this, index, self.html());
				}
				domManip(self, args, callback, ignored);
			});
		}

		if (l) {
			fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
			first = fragment.firstChild;

			if (fragment.childNodes.length === 1) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if (first || ignored) {
				scripts = jQuery.map(getAll(fragment, "script"), disableScript);
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for (; i < l; i++) {
					node = fragment;

					if (i !== iNoClone) {
						node = jQuery.clone(node, true, true);

						// Keep references to cloned scripts for later restoration
						if (hasScripts) {

							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge(scripts, getAll(node, "script"));
						}
					}

					callback.call(collection[i], node, i);
				}

				if (hasScripts) {
					doc = scripts[scripts.length - 1].ownerDocument;

					// Reenable scripts
					jQuery.map(scripts, restoreScript);

					// Evaluate executable scripts on first document insertion
					for (i = 0; i < hasScripts; i++) {
						node = scripts[i];
						if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {

							if (node.src) {

								// Optional AJAX dependency, but won't run scripts if not present
								if (jQuery._evalUrl) {
									jQuery._evalUrl(node.src);
								}
							} else {
								DOMEval(node.textContent.replace(rcleanScript, ""), doc);
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function _remove(elem, selector, keepData) {
		var node,
		    nodes = selector ? jQuery.filter(selector, elem) : elem,
		    i = 0;

		for (; (node = nodes[i]) != null; i++) {
			if (!keepData && node.nodeType === 1) {
				jQuery.cleanData(getAll(node));
			}

			if (node.parentNode) {
				if (keepData && jQuery.contains(node.ownerDocument, node)) {
					setGlobalEval(getAll(node, "script"));
				}
				node.parentNode.removeChild(node);
			}
		}

		return elem;
	}

	jQuery.extend({
		htmlPrefilter: function htmlPrefilter(html) {
			return html.replace(rxhtmlTag, "<$1></$2>");
		},

		clone: function clone(elem, dataAndEvents, deepDataAndEvents) {
			var i,
			    l,
			    srcElements,
			    destElements,
			    clone = elem.cloneNode(true),
			    inPage = jQuery.contains(elem.ownerDocument, elem);

			// Fix IE cloning issues
			if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {

				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll(clone);
				srcElements = getAll(elem);

				for (i = 0, l = srcElements.length; i < l; i++) {
					fixInput(srcElements[i], destElements[i]);
				}
			}

			// Copy the events from the original to the clone
			if (dataAndEvents) {
				if (deepDataAndEvents) {
					srcElements = srcElements || getAll(elem);
					destElements = destElements || getAll(clone);

					for (i = 0, l = srcElements.length; i < l; i++) {
						cloneCopyEvent(srcElements[i], destElements[i]);
					}
				} else {
					cloneCopyEvent(elem, clone);
				}
			}

			// Preserve script evaluation history
			destElements = getAll(clone, "script");
			if (destElements.length > 0) {
				setGlobalEval(destElements, !inPage && getAll(elem, "script"));
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function cleanData(elems) {
			var data,
			    elem,
			    type,
			    special = jQuery.event.special,
			    i = 0;

			for (; (elem = elems[i]) !== undefined; i++) {
				if (acceptData(elem)) {
					if (data = elem[dataPriv.expando]) {
						if (data.events) {
							for (type in data.events) {
								if (special[type]) {
									jQuery.event.remove(elem, type);

									// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent(elem, type, data.handle);
								}
							}
						}

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[dataPriv.expando] = undefined;
					}
					if (elem[dataUser.expando]) {

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[dataUser.expando] = undefined;
					}
				}
			}
		}
	});

	jQuery.fn.extend({
		detach: function detach(selector) {
			return _remove(this, selector, true);
		},

		remove: function remove(selector) {
			return _remove(this, selector);
		},

		text: function text(value) {
			return access(this, function (value) {
				return value === undefined ? jQuery.text(this) : this.empty().each(function () {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						this.textContent = value;
					}
				});
			}, null, value, arguments.length);
		},

		append: function append() {
			return domManip(this, arguments, function (elem) {
				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					var target = manipulationTarget(this, elem);
					target.appendChild(elem);
				}
			});
		},

		prepend: function prepend() {
			return domManip(this, arguments, function (elem) {
				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					var target = manipulationTarget(this, elem);
					target.insertBefore(elem, target.firstChild);
				}
			});
		},

		before: function before() {
			return domManip(this, arguments, function (elem) {
				if (this.parentNode) {
					this.parentNode.insertBefore(elem, this);
				}
			});
		},

		after: function after() {
			return domManip(this, arguments, function (elem) {
				if (this.parentNode) {
					this.parentNode.insertBefore(elem, this.nextSibling);
				}
			});
		},

		empty: function empty() {
			var elem,
			    i = 0;

			for (; (elem = this[i]) != null; i++) {
				if (elem.nodeType === 1) {

					// Prevent memory leaks
					jQuery.cleanData(getAll(elem, false));

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function clone(dataAndEvents, deepDataAndEvents) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map(function () {
				return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
			});
		},

		html: function html(value) {
			return access(this, function (value) {
				var elem = this[0] || {},
				    i = 0,
				    l = this.length;

				if (value === undefined && elem.nodeType === 1) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {

					value = jQuery.htmlPrefilter(value);

					try {
						for (; i < l; i++) {
							elem = this[i] || {};

							// Remove element nodes and prevent memory leaks
							if (elem.nodeType === 1) {
								jQuery.cleanData(getAll(elem, false));
								elem.innerHTML = value;
							}
						}

						elem = 0;

						// If using innerHTML throws an exception, use the fallback method
					} catch (e) {}
				}

				if (elem) {
					this.empty().append(value);
				}
			}, null, value, arguments.length);
		},

		replaceWith: function replaceWith() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip(this, arguments, function (elem) {
				var parent = this.parentNode;

				if (jQuery.inArray(this, ignored) < 0) {
					jQuery.cleanData(getAll(this));
					if (parent) {
						parent.replaceChild(elem, this);
					}
				}

				// Force callback invocation
			}, ignored);
		}
	});

	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (name, original) {
		jQuery.fn[name] = function (selector) {
			var elems,
			    ret = [],
			    insert = jQuery(selector),
			    last = insert.length - 1,
			    i = 0;

			for (; i <= last; i++) {
				elems = i === last ? this : this.clone(true);
				jQuery(insert[i])[original](elems);

				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply(ret, elems.get());
			}

			return this.pushStack(ret);
		};
	});
	var rmargin = /^margin/;

	var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

	var getStyles = function getStyles(elem) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if (!view || !view.opener) {
			view = window;
		}

		return view.getComputedStyle(elem);
	};

	(function () {

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {

			// This is a singleton, we need to execute it only once
			if (!div) {
				return;
			}

			div.style.cssText = "box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild(container);

			var divStyle = window.getComputedStyle(div);
			pixelPositionVal = divStyle.top !== "1%";

			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild(container);

			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}

		var pixelPositionVal,
		    boxSizingReliableVal,
		    pixelMarginRightVal,
		    reliableMarginLeftVal,
		    container = document.createElement("div"),
		    div = document.createElement("div");

		// Finish early in limited (non-browser) environments
		if (!div.style) {
			return;
		}

		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode(true).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";
		container.appendChild(div);

		jQuery.extend(support, {
			pixelPosition: function pixelPosition() {
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function boxSizingReliable() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelMarginRight: function pixelMarginRight() {
				computeStyleTests();
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function reliableMarginLeft() {
				computeStyleTests();
				return reliableMarginLeftVal;
			}
		});
	})();

	function curCSS(elem, name, computed) {
		var width,
		    minWidth,
		    maxWidth,
		    ret,


		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

		computed = computed || getStyles(elem);

		// getPropertyValue is needed for:
		//   .css('filter') (IE 9 only, #12537)
		//   .css('--customProperty) (#3144)
		if (computed) {
			ret = computed.getPropertyValue(name) || computed[name];

			if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
				ret = jQuery.style(elem, name);
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if (!support.pixelMarginRight() && rnumnonpx.test(ret) && rmargin.test(name)) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" : ret;
	}

	function addGetHookIf(conditionFn, hookFn) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function get() {
				if (conditionFn()) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return (this.get = hookFn).apply(this, arguments);
			}
		};
	}

	var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	    rcustomProp = /^--/,
	    cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	    cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},
	    cssPrefixes = ["Webkit", "Moz", "ms"],
	    emptyStyle = document.createElement("div").style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName(name) {

		// Shortcut for names that are not vendor prefixed
		if (name in emptyStyle) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[0].toUpperCase() + name.slice(1),
		    i = cssPrefixes.length;

		while (i--) {
			name = cssPrefixes[i] + capName;
			if (name in emptyStyle) {
				return name;
			}
		}
	}

	// Return a property mapped along what jQuery.cssProps suggests or to
	// a vendor prefixed property.
	function finalPropName(name) {
		var ret = jQuery.cssProps[name];
		if (!ret) {
			ret = jQuery.cssProps[name] = vendorPropName(name) || name;
		}
		return ret;
	}

	function setPositiveNumber(elem, value, subtract) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec(value);
		return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
	}

	function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
		var i,
		    val = 0;

		// If we already have the right measurement, avoid augmentation
		if (extra === (isBorderBox ? "border" : "content")) {
			i = 4;

			// Otherwise initialize for horizontal or vertical properties
		} else {
			i = name === "width" ? 1 : 0;
		}

		for (; i < 4; i += 2) {

			// Both box models exclude margin, so add it if we want it
			if (extra === "margin") {
				val += jQuery.css(elem, extra + cssExpand[i], true, styles);
			}

			if (isBorderBox) {

				// border-box includes padding, so remove it if we want content
				if (extra === "content") {
					val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
				}

				// At this point, extra isn't border nor margin, so remove border
				if (extra !== "margin") {
					val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);

				// At this point, extra isn't content nor padding, so add border
				if (extra !== "padding") {
					val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
				}
			}
		}

		return val;
	}

	function getWidthOrHeight(elem, name, extra) {

		// Start with computed style
		var valueIsBorderBox,
		    styles = getStyles(elem),
		    val = curCSS(elem, name, styles),
		    isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";

		// Computed unit is not pixels. Stop here and return.
		if (rnumnonpx.test(val)) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);

		// Fall back to offsetWidth/Height when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		if (val === "auto") {
			val = elem["offset" + name[0].toUpperCase() + name.slice(1)];
		}

		// Normalize "", auto, and prepare for extra
		val = parseFloat(val) || 0;

		// Use the active box-sizing model to add/subtract irrelevant styles
		return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
	}

	jQuery.extend({

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function get(elem, computed) {
					if (computed) {

						// We should always get a number back from opacity
						var ret = curCSS(elem, "opacity");
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function style(elem, name, value, extra) {

			// Don't set styles on text and comment nodes
			if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
				return;
			}

			// Make sure that we're working with the right name
			var ret,
			    type,
			    hooks,
			    origName = jQuery.camelCase(name),
			    isCustomProp = rcustomProp.test(name),
			    style = elem.style;

			// Make sure that we're working with the right name. We don't
			// want to query the value if it is a CSS custom property
			// since they are user-defined.
			if (!isCustomProp) {
				name = finalPropName(origName);
			}

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

			// Check if we're setting a value
			if (value !== undefined) {
				type = typeof value === "undefined" ? "undefined" : _typeof(value);

				// Convert "+=" or "-=" to relative numbers (#7345)
				if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
					value = adjustCSS(elem, name, ret);

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if (value == null || value !== value) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if (type === "number") {
					value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
				}

				// background-* props affect original clone's values
				if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
					style[name] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {

					if (isCustomProp) {
						style.setProperty(name, value);
					} else {
						style[name] = value;
					}
				}
			} else {

				// If a hook was provided get the non-computed value from there
				if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[name];
			}
		},

		css: function css(elem, name, extra, styles) {
			var val,
			    num,
			    hooks,
			    origName = jQuery.camelCase(name),
			    isCustomProp = rcustomProp.test(name);

			// Make sure that we're working with the right name. We don't
			// want to modify the value if it is a CSS custom property
			// since they are user-defined.
			if (!isCustomProp) {
				name = finalPropName(origName);
			}

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

			// If a hook was provided get the computed value from there
			if (hooks && "get" in hooks) {
				val = hooks.get(elem, true, extra);
			}

			// Otherwise, if a way to get the computed value exists, use that
			if (val === undefined) {
				val = curCSS(elem, name, styles);
			}

			// Convert "normal" to computed value
			if (val === "normal" && name in cssNormalTransform) {
				val = cssNormalTransform[name];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if (extra === "" || extra) {
				num = parseFloat(val);
				return extra === true || isFinite(num) ? num || 0 : val;
			}

			return val;
		}
	});

	jQuery.each(["height", "width"], function (i, name) {
		jQuery.cssHooks[name] = {
			get: function get(elem, computed, extra) {
				if (computed) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test(jQuery.css(elem, "display")) && (

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function () {
						return getWidthOrHeight(elem, name, extra);
					}) : getWidthOrHeight(elem, name, extra);
				}
			},

			set: function set(elem, value, extra) {
				var matches,
				    styles = extra && getStyles(elem),
				    subtract = extra && augmentWidthOrHeight(elem, name, extra, jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles);

				// Convert to pixels if value adjustment is needed
				if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {

					elem.style[name] = value;
					value = jQuery.css(elem, name);
				}

				return setPositiveNumber(elem, value, subtract);
			}
		};
	});

	jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft, function (elem, computed) {
		if (computed) {
			return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function () {
				return elem.getBoundingClientRect().left;
			})) + "px";
		}
	});

	// These hooks are used by animate to expand properties
	jQuery.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function (prefix, suffix) {
		jQuery.cssHooks[prefix + suffix] = {
			expand: function expand(value) {
				var i = 0,
				    expanded = {},


				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [value];

				for (; i < 4; i++) {
					expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
				}

				return expanded;
			}
		};

		if (!rmargin.test(prefix)) {
			jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
		}
	});

	jQuery.fn.extend({
		css: function css(name, value) {
			return access(this, function (elem, name, value) {
				var styles,
				    len,
				    map = {},
				    i = 0;

				if (Array.isArray(name)) {
					styles = getStyles(elem);
					len = name.length;

					for (; i < len; i++) {
						map[name[i]] = jQuery.css(elem, name[i], false, styles);
					}

					return map;
				}

				return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
			}, name, value, arguments.length > 1);
		}
	});

	function Tween(elem, options, prop, end, easing) {
		return new Tween.prototype.init(elem, options, prop, end, easing);
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function init(elem, options, prop, end, easing, unit) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
		},
		cur: function cur() {
			var hooks = Tween.propHooks[this.prop];

			return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
		},
		run: function run(percent) {
			var eased,
			    hooks = Tween.propHooks[this.prop];

			if (this.options.duration) {
				this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
			} else {
				this.pos = eased = percent;
			}
			this.now = (this.end - this.start) * eased + this.start;

			if (this.options.step) {
				this.options.step.call(this.elem, this.now, this);
			}

			if (hooks && hooks.set) {
				hooks.set(this);
			} else {
				Tween.propHooks._default.set(this);
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function get(tween) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
					return tween.elem[tween.prop];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css(tween.elem, tween.prop, "");

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function set(tween) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if (jQuery.fx.step[tween.prop]) {
					jQuery.fx.step[tween.prop](tween);
				} else if (tween.elem.nodeType === 1 && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
					jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
				} else {
					tween.elem[tween.prop] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function set(tween) {
			if (tween.elem.nodeType && tween.elem.parentNode) {
				tween.elem[tween.prop] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function linear(p) {
			return p;
		},
		swing: function swing(p) {
			return 0.5 - Math.cos(p * Math.PI) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back compat <1.8 extension point
	jQuery.fx.step = {};

	var fxNow,
	    inProgress,
	    rfxtypes = /^(?:toggle|show|hide)$/,
	    rrun = /queueHooks$/;

	function schedule() {
		if (inProgress) {
			if (document.hidden === false && window.requestAnimationFrame) {
				window.requestAnimationFrame(schedule);
			} else {
				window.setTimeout(schedule, jQuery.fx.interval);
			}

			jQuery.fx.tick();
		}
	}

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout(function () {
			fxNow = undefined;
		});
		return fxNow = jQuery.now();
	}

	// Generate parameters to create a standard animation
	function genFx(type, includeWidth) {
		var which,
		    i = 0,
		    attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for (; i < 4; i += 2 - includeWidth) {
			which = cssExpand[i];
			attrs["margin" + which] = attrs["padding" + which] = type;
		}

		if (includeWidth) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween(value, prop, animation) {
		var tween,
		    collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
		    index = 0,
		    length = collection.length;
		for (; index < length; index++) {
			if (tween = collection[index].call(animation, prop, value)) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter(elem, props, opts) {
		var prop,
		    value,
		    toggle,
		    hooks,
		    oldfire,
		    propTween,
		    restoreDisplay,
		    display,
		    isBox = "width" in props || "height" in props,
		    anim = this,
		    orig = {},
		    style = elem.style,
		    hidden = elem.nodeType && isHiddenWithinTree(elem),
		    dataShow = dataPriv.get(elem, "fxshow");

		// Queue-skipping animations hijack the fx hooks
		if (!opts.queue) {
			hooks = jQuery._queueHooks(elem, "fx");
			if (hooks.unqueued == null) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function () {
					if (!hooks.unqueued) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always(function () {

				// Ensure the complete handler is called before this completes
				anim.always(function () {
					hooks.unqueued--;
					if (!jQuery.queue(elem, "fx").length) {
						hooks.empty.fire();
					}
				});
			});
		}

		// Detect show/hide animations
		for (prop in props) {
			value = props[prop];
			if (rfxtypes.test(value)) {
				delete props[prop];
				toggle = toggle || value === "toggle";
				if (value === (hidden ? "hide" : "show")) {

					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if (value === "show" && dataShow && dataShow[prop] !== undefined) {
						hidden = true;

						// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
			}
		}

		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject(props);
		if (!propTween && jQuery.isEmptyObject(orig)) {
			return;
		}

		// Restrict "overflow" and "display" styles during box animations
		if (isBox && elem.nodeType === 1) {

			// Support: IE <=9 - 11, Edge 12 - 13
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY
			opts.overflow = [style.overflow, style.overflowX, style.overflowY];

			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if (restoreDisplay == null) {
				restoreDisplay = dataPriv.get(elem, "display");
			}
			display = jQuery.css(elem, "display");
			if (display === "none") {
				if (restoreDisplay) {
					display = restoreDisplay;
				} else {

					// Get nonempty value(s) by temporarily forcing visibility
					showHide([elem], true);
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css(elem, "display");
					showHide([elem]);
				}
			}

			// Animate inline elements as inline-block
			if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
				if (jQuery.css(elem, "float") === "none") {

					// Restore the original display value at the end of pure show/hide animations
					if (!propTween) {
						anim.done(function () {
							style.display = restoreDisplay;
						});
						if (restoreDisplay == null) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}

		if (opts.overflow) {
			style.overflow = "hidden";
			anim.always(function () {
				style.overflow = opts.overflow[0];
				style.overflowX = opts.overflow[1];
				style.overflowY = opts.overflow[2];
			});
		}

		// Implement show/hide animations
		propTween = false;
		for (prop in orig) {

			// General show/hide setup for this element animation
			if (!propTween) {
				if (dataShow) {
					if ("hidden" in dataShow) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
				}

				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if (toggle) {
					dataShow.hidden = !hidden;
				}

				// Show elements before animating them
				if (hidden) {
					showHide([elem], true);
				}

				/* eslint-disable no-loop-func */

				anim.done(function () {

					/* eslint-enable no-loop-func */

					// The final step of a "hide" animation is actually hiding the element
					if (!hidden) {
						showHide([elem]);
					}
					dataPriv.remove(elem, "fxshow");
					for (prop in orig) {
						jQuery.style(elem, prop, orig[prop]);
					}
				});
			}

			// Per-property setup
			propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
			if (!(prop in dataShow)) {
				dataShow[prop] = propTween.start;
				if (hidden) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}

	function propFilter(props, specialEasing) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for (index in props) {
			name = jQuery.camelCase(index);
			easing = specialEasing[name];
			value = props[index];
			if (Array.isArray(value)) {
				easing = value[1];
				value = props[index] = value[0];
			}

			if (index !== name) {
				props[name] = value;
				delete props[index];
			}

			hooks = jQuery.cssHooks[name];
			if (hooks && "expand" in hooks) {
				value = hooks.expand(value);
				delete props[name];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for (index in value) {
					if (!(index in props)) {
						props[index] = value[index];
						specialEasing[index] = easing;
					}
				}
			} else {
				specialEasing[name] = easing;
			}
		}
	}

	function Animation(elem, properties, options) {
		var result,
		    stopped,
		    index = 0,
		    length = Animation.prefilters.length,
		    deferred = jQuery.Deferred().always(function () {

			// Don't match elem in the :animated selector
			delete tick.elem;
		}),
		    tick = function tick() {
			if (stopped) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
			    remaining = Math.max(0, animation.startTime + animation.duration - currentTime),


			// Support: Android 2.3 only
			// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
			temp = remaining / animation.duration || 0,
			    percent = 1 - temp,
			    index = 0,
			    length = animation.tweens.length;

			for (; index < length; index++) {
				animation.tweens[index].run(percent);
			}

			deferred.notifyWith(elem, [animation, percent, remaining]);

			// If there's more to do, yield
			if (percent < 1 && length) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if (!length) {
				deferred.notifyWith(elem, [animation, 1, 0]);
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith(elem, [animation]);
			return false;
		},
		    animation = deferred.promise({
			elem: elem,
			props: jQuery.extend({}, properties),
			opts: jQuery.extend(true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function createTween(prop, end) {
				var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
				animation.tweens.push(tween);
				return tween;
			},
			stop: function stop(gotoEnd) {
				var index = 0,


				// If we are going to the end, we want to run all the tweens
				// otherwise we skip this part
				length = gotoEnd ? animation.tweens.length : 0;
				if (stopped) {
					return this;
				}
				stopped = true;
				for (; index < length; index++) {
					animation.tweens[index].run(1);
				}

				// Resolve when we played the last frame; otherwise, reject
				if (gotoEnd) {
					deferred.notifyWith(elem, [animation, 1, 0]);
					deferred.resolveWith(elem, [animation, gotoEnd]);
				} else {
					deferred.rejectWith(elem, [animation, gotoEnd]);
				}
				return this;
			}
		}),
		    props = animation.props;

		propFilter(props, animation.opts.specialEasing);

		for (; index < length; index++) {
			result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
			if (result) {
				if (jQuery.isFunction(result.stop)) {
					jQuery._queueHooks(animation.elem, animation.opts.queue).stop = jQuery.proxy(result.stop, result);
				}
				return result;
			}
		}

		jQuery.map(props, createTween, animation);

		if (jQuery.isFunction(animation.opts.start)) {
			animation.opts.start.call(elem, animation);
		}

		// Attach callbacks from options
		animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);

		jQuery.fx.timer(jQuery.extend(tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		}));

		return animation;
	}

	jQuery.Animation = jQuery.extend(Animation, {

		tweeners: {
			"*": [function (prop, value) {
				var tween = this.createTween(prop, value);
				adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
				return tween;
			}]
		},

		tweener: function tweener(props, callback) {
			if (jQuery.isFunction(props)) {
				callback = props;
				props = ["*"];
			} else {
				props = props.match(rnothtmlwhite);
			}

			var prop,
			    index = 0,
			    length = props.length;

			for (; index < length; index++) {
				prop = props[index];
				Animation.tweeners[prop] = Animation.tweeners[prop] || [];
				Animation.tweeners[prop].unshift(callback);
			}
		},

		prefilters: [defaultPrefilter],

		prefilter: function prefilter(callback, prepend) {
			if (prepend) {
				Animation.prefilters.unshift(callback);
			} else {
				Animation.prefilters.push(callback);
			}
		}
	});

	jQuery.speed = function (speed, easing, fn) {
		var opt = speed && (typeof speed === "undefined" ? "undefined" : _typeof(speed)) === "object" ? jQuery.extend({}, speed) : {
			complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
		};

		// Go to the end state if fx are off
		if (jQuery.fx.off) {
			opt.duration = 0;
		} else {
			if (typeof opt.duration !== "number") {
				if (opt.duration in jQuery.fx.speeds) {
					opt.duration = jQuery.fx.speeds[opt.duration];
				} else {
					opt.duration = jQuery.fx.speeds._default;
				}
			}
		}

		// Normalize opt.queue - true/undefined/null -> "fx"
		if (opt.queue == null || opt.queue === true) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function () {
			if (jQuery.isFunction(opt.old)) {
				opt.old.call(this);
			}

			if (opt.queue) {
				jQuery.dequeue(this, opt.queue);
			}
		};

		return opt;
	};

	jQuery.fn.extend({
		fadeTo: function fadeTo(speed, to, easing, callback) {

			// Show any hidden elements after setting opacity to 0
			return this.filter(isHiddenWithinTree).css("opacity", 0).show()

			// Animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback);
		},
		animate: function animate(prop, speed, easing, callback) {
			var empty = jQuery.isEmptyObject(prop),
			    optall = jQuery.speed(speed, easing, callback),
			    doAnimation = function doAnimation() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation(this, jQuery.extend({}, prop), optall);

				// Empty animations, or finishing resolves immediately
				if (empty || dataPriv.get(this, "finish")) {
					anim.stop(true);
				}
			};
			doAnimation.finish = doAnimation;

			return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
		},
		stop: function stop(type, clearQueue, gotoEnd) {
			var stopQueue = function stopQueue(hooks) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop(gotoEnd);
			};

			if (typeof type !== "string") {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if (clearQueue && type !== false) {
				this.queue(type || "fx", []);
			}

			return this.each(function () {
				var dequeue = true,
				    index = type != null && type + "queueHooks",
				    timers = jQuery.timers,
				    data = dataPriv.get(this);

				if (index) {
					if (data[index] && data[index].stop) {
						stopQueue(data[index]);
					}
				} else {
					for (index in data) {
						if (data[index] && data[index].stop && rrun.test(index)) {
							stopQueue(data[index]);
						}
					}
				}

				for (index = timers.length; index--;) {
					if (timers[index].elem === this && (type == null || timers[index].queue === type)) {

						timers[index].anim.stop(gotoEnd);
						dequeue = false;
						timers.splice(index, 1);
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if (dequeue || !gotoEnd) {
					jQuery.dequeue(this, type);
				}
			});
		},
		finish: function finish(type) {
			if (type !== false) {
				type = type || "fx";
			}
			return this.each(function () {
				var index,
				    data = dataPriv.get(this),
				    queue = data[type + "queue"],
				    hooks = data[type + "queueHooks"],
				    timers = jQuery.timers,
				    length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue(this, type, []);

				if (hooks && hooks.stop) {
					hooks.stop.call(this, true);
				}

				// Look for any active animations, and finish them
				for (index = timers.length; index--;) {
					if (timers[index].elem === this && timers[index].queue === type) {
						timers[index].anim.stop(true);
						timers.splice(index, 1);
					}
				}

				// Look for any animations in the old queue and finish them
				for (index = 0; index < length; index++) {
					if (queue[index] && queue[index].finish) {
						queue[index].finish.call(this);
					}
				}

				// Turn off finishing flag
				delete data.finish;
			});
		}
	});

	jQuery.each(["toggle", "show", "hide"], function (i, name) {
		var cssFn = jQuery.fn[name];
		jQuery.fn[name] = function (speed, easing, callback) {
			return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
		};
	});

	// Generate shortcuts for custom animations
	jQuery.each({
		slideDown: genFx("show"),
		slideUp: genFx("hide"),
		slideToggle: genFx("toggle"),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function (name, props) {
		jQuery.fn[name] = function (speed, easing, callback) {
			return this.animate(props, speed, easing, callback);
		};
	});

	jQuery.timers = [];
	jQuery.fx.tick = function () {
		var timer,
		    i = 0,
		    timers = jQuery.timers;

		fxNow = jQuery.now();

		for (; i < timers.length; i++) {
			timer = timers[i];

			// Run the timer and safely remove it when done (allowing for external removal)
			if (!timer() && timers[i] === timer) {
				timers.splice(i--, 1);
			}
		}

		if (!timers.length) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function (timer) {
		jQuery.timers.push(timer);
		jQuery.fx.start();
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function () {
		if (inProgress) {
			return;
		}

		inProgress = true;
		schedule();
	};

	jQuery.fx.stop = function () {
		inProgress = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};

	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function (time, type) {
		time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
		type = type || "fx";

		return this.queue(type, function (next, hooks) {
			var timeout = window.setTimeout(next, time);
			hooks.stop = function () {
				window.clearTimeout(timeout);
			};
		});
	};

	(function () {
		var input = document.createElement("input"),
		    select = document.createElement("select"),
		    opt = select.appendChild(document.createElement("option"));

		input.type = "checkbox";

		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement("input");
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	})();

	var boolHook,
	    attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend({
		attr: function attr(name, value) {
			return access(this, jQuery.attr, name, value, arguments.length > 1);
		},

		removeAttr: function removeAttr(name) {
			return this.each(function () {
				jQuery.removeAttr(this, name);
			});
		}
	});

	jQuery.extend({
		attr: function attr(elem, name, value) {
			var ret,
			    hooks,
			    nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if (nType === 3 || nType === 8 || nType === 2) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if (typeof elem.getAttribute === "undefined") {
				return jQuery.prop(elem, name, value);
			}

			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
				hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
			}

			if (value !== undefined) {
				if (value === null) {
					jQuery.removeAttr(elem, name);
					return;
				}

				if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
					return ret;
				}

				elem.setAttribute(name, value + "");
				return value;
			}

			if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
				return ret;
			}

			ret = jQuery.find.attr(elem, name);

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function set(elem, value) {
					if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
						var val = elem.value;
						elem.setAttribute("type", value);
						if (val) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function removeAttr(elem, value) {
			var name,
			    i = 0,


			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match(rnothtmlwhite);

			if (attrNames && elem.nodeType === 1) {
				while (name = attrNames[i++]) {
					elem.removeAttribute(name);
				}
			}
		}
	});

	// Hooks for boolean attributes
	boolHook = {
		set: function set(elem, value, name) {
			if (value === false) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr(elem, name);
			} else {
				elem.setAttribute(name, name);
			}
			return name;
		}
	};

	jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
		var getter = attrHandle[name] || jQuery.find.attr;

		attrHandle[name] = function (elem, name, isXML) {
			var ret,
			    handle,
			    lowercaseName = name.toLowerCase();

			if (!isXML) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[lowercaseName];
				attrHandle[lowercaseName] = ret;
				ret = getter(elem, name, isXML) != null ? lowercaseName : null;
				attrHandle[lowercaseName] = handle;
			}
			return ret;
		};
	});

	var rfocusable = /^(?:input|select|textarea|button)$/i,
	    rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend({
		prop: function prop(name, value) {
			return access(this, jQuery.prop, name, value, arguments.length > 1);
		},

		removeProp: function removeProp(name) {
			return this.each(function () {
				delete this[jQuery.propFix[name] || name];
			});
		}
	});

	jQuery.extend({
		prop: function prop(elem, name, value) {
			var ret,
			    hooks,
			    nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if (nType === 3 || nType === 8 || nType === 2) {
				return;
			}

			if (nType !== 1 || !jQuery.isXMLDoc(elem)) {

				// Fix name and attach hooks
				name = jQuery.propFix[name] || name;
				hooks = jQuery.propHooks[name];
			}

			if (value !== undefined) {
				if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
					return ret;
				}

				return elem[name] = value;
			}

			if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
				return ret;
			}

			return elem[name];
		},

		propHooks: {
			tabIndex: {
				get: function get(elem) {

					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr(elem, "tabindex");

					if (tabindex) {
						return parseInt(tabindex, 10);
					}

					if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
						return 0;
					}

					return -1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	});

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	// eslint rule "no-unused-expressions" is disabled for this code
	// since it considers such accessions noop
	if (!support.optSelected) {
		jQuery.propHooks.selected = {
			get: function get(elem) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if (parent && parent.parentNode) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function set(elem) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if (parent) {
					parent.selectedIndex;

					if (parent.parentNode) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		jQuery.propFix[this.toLowerCase()] = this;
	});

	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse(value) {
		var tokens = value.match(rnothtmlwhite) || [];
		return tokens.join(" ");
	}

	function getClass(elem) {
		return elem.getAttribute && elem.getAttribute("class") || "";
	}

	jQuery.fn.extend({
		addClass: function addClass(value) {
			var classes,
			    elem,
			    cur,
			    curValue,
			    clazz,
			    j,
			    finalValue,
			    i = 0;

			if (jQuery.isFunction(value)) {
				return this.each(function (j) {
					jQuery(this).addClass(value.call(this, j, getClass(this)));
				});
			}

			if (typeof value === "string" && value) {
				classes = value.match(rnothtmlwhite) || [];

				while (elem = this[i++]) {
					curValue = getClass(elem);
					cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

					if (cur) {
						j = 0;
						while (clazz = classes[j++]) {
							if (cur.indexOf(" " + clazz + " ") < 0) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse(cur);
						if (curValue !== finalValue) {
							elem.setAttribute("class", finalValue);
						}
					}
				}
			}

			return this;
		},

		removeClass: function removeClass(value) {
			var classes,
			    elem,
			    cur,
			    curValue,
			    clazz,
			    j,
			    finalValue,
			    i = 0;

			if (jQuery.isFunction(value)) {
				return this.each(function (j) {
					jQuery(this).removeClass(value.call(this, j, getClass(this)));
				});
			}

			if (!arguments.length) {
				return this.attr("class", "");
			}

			if (typeof value === "string" && value) {
				classes = value.match(rnothtmlwhite) || [];

				while (elem = this[i++]) {
					curValue = getClass(elem);

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";

					if (cur) {
						j = 0;
						while (clazz = classes[j++]) {

							// Remove *all* instances
							while (cur.indexOf(" " + clazz + " ") > -1) {
								cur = cur.replace(" " + clazz + " ", " ");
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse(cur);
						if (curValue !== finalValue) {
							elem.setAttribute("class", finalValue);
						}
					}
				}
			}

			return this;
		},

		toggleClass: function toggleClass(value, stateVal) {
			var type = typeof value === "undefined" ? "undefined" : _typeof(value);

			if (typeof stateVal === "boolean" && type === "string") {
				return stateVal ? this.addClass(value) : this.removeClass(value);
			}

			if (jQuery.isFunction(value)) {
				return this.each(function (i) {
					jQuery(this).toggleClass(value.call(this, i, getClass(this), stateVal), stateVal);
				});
			}

			return this.each(function () {
				var className, i, self, classNames;

				if (type === "string") {

					// Toggle individual class names
					i = 0;
					self = jQuery(this);
					classNames = value.match(rnothtmlwhite) || [];

					while (className = classNames[i++]) {

						// Check each className given, space separated list
						if (self.hasClass(className)) {
							self.removeClass(className);
						} else {
							self.addClass(className);
						}
					}

					// Toggle whole class name
				} else if (value === undefined || type === "boolean") {
					className = getClass(this);
					if (className) {

						// Store className if set
						dataPriv.set(this, "__className__", className);
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if (this.setAttribute) {
						this.setAttribute("class", className || value === false ? "" : dataPriv.get(this, "__className__") || "");
					}
				}
			});
		},

		hasClass: function hasClass(selector) {
			var className,
			    elem,
			    i = 0;

			className = " " + selector + " ";
			while (elem = this[i++]) {
				if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
					return true;
				}
			}

			return false;
		}
	});

	var rreturn = /\r/g;

	jQuery.fn.extend({
		val: function val(value) {
			var hooks,
			    ret,
			    isFunction,
			    elem = this[0];

			if (!arguments.length) {
				if (elem) {
					hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

					if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
						return ret;
					}

					ret = elem.value;

					// Handle most common string cases
					if (typeof ret === "string") {
						return ret.replace(rreturn, "");
					}

					// Handle cases where value is null/undef or number
					return ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction(value);

			return this.each(function (i) {
				var val;

				if (this.nodeType !== 1) {
					return;
				}

				if (isFunction) {
					val = value.call(this, i, jQuery(this).val());
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if (val == null) {
					val = "";
				} else if (typeof val === "number") {
					val += "";
				} else if (Array.isArray(val)) {
					val = jQuery.map(val, function (value) {
						return value == null ? "" : value + "";
					});
				}

				hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];

				// If set returns undefined, fall back to normal setting
				if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
					this.value = val;
				}
			});
		}
	});

	jQuery.extend({
		valHooks: {
			option: {
				get: function get(elem) {

					var val = jQuery.find.attr(elem, "value");
					return val != null ? val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse(jQuery.text(elem));
				}
			},
			select: {
				get: function get(elem) {
					var value,
					    option,
					    i,
					    options = elem.options,
					    index = elem.selectedIndex,
					    one = elem.type === "select-one",
					    values = one ? null : [],
					    max = one ? index + 1 : options.length;

					if (index < 0) {
						i = max;
					} else {
						i = one ? index : 0;
					}

					// Loop through all the selected options
					for (; i < max; i++) {
						option = options[i];

						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ((option.selected || i === index) &&

						// Don't return options that are disabled or in a disabled optgroup
						!option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {

							// Get the specific value for the option
							value = jQuery(option).val();

							// We don't need an array for one selects
							if (one) {
								return value;
							}

							// Multi-Selects return an array
							values.push(value);
						}
					}

					return values;
				},

				set: function set(elem, value) {
					var optionSet,
					    option,
					    options = elem.options,
					    values = jQuery.makeArray(value),
					    i = options.length;

					while (i--) {
						option = options[i];

						/* eslint-disable no-cond-assign */

						if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
							optionSet = true;
						}

						/* eslint-enable no-cond-assign */
					}

					// Force browsers to behave consistently when non-matching value is set
					if (!optionSet) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	});

	// Radios and checkboxes getter/setter
	jQuery.each(["radio", "checkbox"], function () {
		jQuery.valHooks[this] = {
			set: function set(elem, value) {
				if (Array.isArray(value)) {
					return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
				}
			}
		};
		if (!support.checkOn) {
			jQuery.valHooks[this].get = function (elem) {
				return elem.getAttribute("value") === null ? "on" : elem.value;
			};
		}
	});

	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend(jQuery.event, {

		trigger: function trigger(event, data, elem, onlyHandlers) {

			var i,
			    cur,
			    tmp,
			    bubbleType,
			    ontype,
			    handle,
			    special,
			    eventPath = [elem || document],
			    type = hasOwn.call(event, "type") ? event.type : event,
			    namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if (elem.nodeType === 3 || elem.nodeType === 8) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if (rfocusMorph.test(type + jQuery.event.triggered)) {
				return;
			}

			if (type.indexOf(".") > -1) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split(".");
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf(":") < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[jQuery.expando] ? event : new jQuery.Event(type, (typeof event === "undefined" ? "undefined" : _typeof(event)) === "object" && event);

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join(".");
			event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if (!event.target) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ? [event] : jQuery.makeArray(data, [event]);

			// Allow special events to draw outside the lines
			special = jQuery.event.special[type] || {};
			if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {

				bubbleType = special.delegateType || type;
				if (!rfocusMorph.test(bubbleType + type)) {
					cur = cur.parentNode;
				}
				for (; cur; cur = cur.parentNode) {
					eventPath.push(cur);
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if (tmp === (elem.ownerDocument || document)) {
					eventPath.push(tmp.defaultView || tmp.parentWindow || window);
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {

				event.type = i > 1 ? bubbleType : special.bindType || type;

				// jQuery handler
				handle = (dataPriv.get(cur, "events") || {})[event.type] && dataPriv.get(cur, "handle");
				if (handle) {
					handle.apply(cur, data);
				}

				// Native handler
				handle = ontype && cur[ontype];
				if (handle && handle.apply && acceptData(cur)) {
					event.result = handle.apply(cur, data);
					if (event.result === false) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if (!onlyHandlers && !event.isDefaultPrevented()) {

				if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {

					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ontype];

						if (tmp) {
							elem[ontype] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[type]();
						jQuery.event.triggered = undefined;

						if (tmp) {
							elem[ontype] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function simulate(type, elem, event) {
			var e = jQuery.extend(new jQuery.Event(), event, {
				type: type,
				isSimulated: true
			});

			jQuery.event.trigger(e, null, elem);
		}

	});

	jQuery.fn.extend({

		trigger: function trigger(type, data) {
			return this.each(function () {
				jQuery.event.trigger(type, data, this);
			});
		},
		triggerHandler: function triggerHandler(type, data) {
			var elem = this[0];
			if (elem) {
				return jQuery.event.trigger(type, data, elem, true);
			}
		}
	});

	jQuery.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function (i, name) {

		// Handle event binding
		jQuery.fn[name] = function (data, fn) {
			return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
		};
	});

	jQuery.fn.extend({
		hover: function hover(fnOver, fnOut) {
			return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
		}
	});

	support.focusin = "onfocusin" in window;

	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if (!support.focusin) {
		jQuery.each({ focus: "focusin", blur: "focusout" }, function (orig, fix) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function handler(event) {
				jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
			};

			jQuery.event.special[fix] = {
				setup: function setup() {
					var doc = this.ownerDocument || this,
					    attaches = dataPriv.access(doc, fix);

					if (!attaches) {
						doc.addEventListener(orig, handler, true);
					}
					dataPriv.access(doc, fix, (attaches || 0) + 1);
				},
				teardown: function teardown() {
					var doc = this.ownerDocument || this,
					    attaches = dataPriv.access(doc, fix) - 1;

					if (!attaches) {
						doc.removeEventListener(orig, handler, true);
						dataPriv.remove(doc, fix);
					} else {
						dataPriv.access(doc, fix, attaches);
					}
				}
			};
		});
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = /\?/;

	// Cross-browser xml parsing
	jQuery.parseXML = function (data) {
		var xml;
		if (!data || typeof data !== "string") {
			return null;
		}

		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = new window.DOMParser().parseFromString(data, "text/xml");
		} catch (e) {
			xml = undefined;
		}

		if (!xml || xml.getElementsByTagName("parsererror").length) {
			jQuery.error("Invalid XML: " + data);
		}
		return xml;
	};

	var rbracket = /\[\]$/,
	    rCRLF = /\r?\n/g,
	    rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	    rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams(prefix, obj, traditional, add) {
		var name;

		if (Array.isArray(obj)) {

			// Serialize array item.
			jQuery.each(obj, function (i, v) {
				if (traditional || rbracket.test(prefix)) {

					// Treat each array item as a scalar.
					add(prefix, v);
				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(prefix + "[" + ((typeof v === "undefined" ? "undefined" : _typeof(v)) === "object" && v != null ? i : "") + "]", v, traditional, add);
				}
			});
		} else if (!traditional && jQuery.type(obj) === "object") {

			// Serialize object item.
			for (name in obj) {
				buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
			}
		} else {

			// Serialize scalar item.
			add(prefix, obj);
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function (a, traditional) {
		var prefix,
		    s = [],
		    add = function add(key, valueOrFunction) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction;

			s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
		};

		// If an array was passed in, assume that it is an array of form elements.
		if (Array.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {

			// Serialize the form elements
			jQuery.each(a, function () {
				add(this.name, this.value);
			});
		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for (prefix in a) {
				buildParams(prefix, a[prefix], traditional, add);
			}
		}

		// Return the resulting serialization
		return s.join("&");
	};

	jQuery.fn.extend({
		serialize: function serialize() {
			return jQuery.param(this.serializeArray());
		},
		serializeArray: function serializeArray() {
			return this.map(function () {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop(this, "elements");
				return elements ? jQuery.makeArray(elements) : this;
			}).filter(function () {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
			}).map(function (i, elem) {
				var val = jQuery(this).val();

				if (val == null) {
					return null;
				}

				if (Array.isArray(val)) {
					return jQuery.map(val, function (val) {
						return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
					});
				}

				return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
			}).get();
		}
	});

	var r20 = /%20/g,
	    rhash = /#.*$/,
	    rantiCache = /([?&])_=[^&]*/,
	    rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,


	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	    rnoContent = /^(?:GET|HEAD)$/,
	    rprotocol = /^\/\//,


	/* Prefilters
  * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
  * 2) These are called:
  *    - BEFORE asking for a transport
  *    - AFTER param serialization (s.data is a string if s.processData is true)
  * 3) key is the dataType
  * 4) the catchall symbol "*" can be used
  * 5) execution will start with transport dataType and THEN continue down to "*" if needed
  */
	prefilters = {},


	/* Transports bindings
  * 1) key is the dataType
  * 2) the catchall symbol "*" can be used
  * 3) selection will start with transport dataType and THEN go to "*" if needed
  */
	transports = {},


	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat("*"),


	// Anchor tag for parsing the document origin
	originAnchor = document.createElement("a");
	originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports(structure) {

		// dataTypeExpression is optional and defaults to "*"
		return function (dataTypeExpression, func) {

			if (typeof dataTypeExpression !== "string") {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
			    i = 0,
			    dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

			if (jQuery.isFunction(func)) {

				// For each dataType in the dataTypeExpression
				while (dataType = dataTypes[i++]) {

					// Prepend if requested
					if (dataType[0] === "+") {
						dataType = dataType.slice(1) || "*";
						(structure[dataType] = structure[dataType] || []).unshift(func);

						// Otherwise append
					} else {
						(structure[dataType] = structure[dataType] || []).push(func);
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {

		var inspected = {},
		    seekingTransport = structure === transports;

		function inspect(dataType) {
			var selected;
			inspected[dataType] = true;
			jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
				var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
				if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {

					options.dataTypes.unshift(dataTypeOrTransport);
					inspect(dataTypeOrTransport);
					return false;
				} else if (seekingTransport) {
					return !(selected = dataTypeOrTransport);
				}
			});
			return selected;
		}

		return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend(target, src) {
		var key,
		    deep,
		    flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for (key in src) {
			if (src[key] !== undefined) {
				(flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
			}
		}
		if (deep) {
			jQuery.extend(true, target, deep);
		}

		return target;
	}

	/* Handles responses to an ajax request:
  * - finds the right dataType (mediates between content-type and expected dataType)
  * - returns the corresponding response
  */
	function ajaxHandleResponses(s, jqXHR, responses) {

		var ct,
		    type,
		    finalDataType,
		    firstDataType,
		    contents = s.contents,
		    dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while (dataTypes[0] === "*") {
			dataTypes.shift();
			if (ct === undefined) {
				ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
			}
		}

		// Check if we're dealing with a known content-type
		if (ct) {
			for (type in contents) {
				if (contents[type] && contents[type].test(ct)) {
					dataTypes.unshift(type);
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if (dataTypes[0] in responses) {
			finalDataType = dataTypes[0];
		} else {

			// Try convertible dataTypes
			for (type in responses) {
				if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
					finalDataType = type;
					break;
				}
				if (!firstDataType) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if (finalDataType) {
			if (finalDataType !== dataTypes[0]) {
				dataTypes.unshift(finalDataType);
			}
			return responses[finalDataType];
		}
	}

	/* Chain conversions given the request and the original response
  * Also sets the responseXXX fields on the jqXHR instance
  */
	function ajaxConvert(s, response, jqXHR, isSuccess) {
		var conv2,
		    current,
		    conv,
		    tmp,
		    prev,
		    converters = {},


		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if (dataTypes[1]) {
			for (conv in s.converters) {
				converters[conv.toLowerCase()] = s.converters[conv];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while (current) {

			if (s.responseFields[current]) {
				jqXHR[s.responseFields[current]] = response;
			}

			// Apply the dataFilter if provided
			if (!prev && isSuccess && s.dataFilter) {
				response = s.dataFilter(response, s.dataType);
			}

			prev = current;
			current = dataTypes.shift();

			if (current) {

				// There's only work to do if current dataType is non-auto
				if (current === "*") {

					current = prev;

					// Convert response if prev dataType is non-auto and differs from current
				} else if (prev !== "*" && prev !== current) {

					// Seek a direct converter
					conv = converters[prev + " " + current] || converters["* " + current];

					// If none found, seek a pair
					if (!conv) {
						for (conv2 in converters) {

							// If conv2 outputs current
							tmp = conv2.split(" ");
							if (tmp[1] === current) {

								// If prev can be converted to accepted input
								conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
								if (conv) {

									// Condense equivalence converters
									if (conv === true) {
										conv = converters[conv2];

										// Otherwise, insert the intermediate dataType
									} else if (converters[conv2] !== true) {
										current = tmp[0];
										dataTypes.unshift(tmp[1]);
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if (conv !== true) {

						// Unless errors are allowed to bubble, catch and return them
						if (conv && s.throws) {
							response = conv(response);
						} else {
							try {
								response = conv(response);
							} catch (e) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend({

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test(location.protocol),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",

			/*
   timeout: 0,
   data: null,
   dataType: null,
   username: null,
   password: null,
   cache: null,
   throws: false,
   traditional: false,
   headers: {},
   */

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": JSON.parse,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function ajaxSetup(target, settings) {
			return settings ?

			// Building a settings object
			ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :

			// Extending ajaxSettings
			ajaxExtend(jQuery.ajaxSettings, target);
		},

		ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
		ajaxTransport: addToPrefiltersOrTransports(transports),

		// Main method
		ajax: function ajax(url, options) {

			// If url is an object, simulate pre-1.5 signature
			if ((typeof url === "undefined" ? "undefined" : _typeof(url)) === "object") {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,


			// URL without anti-cache param
			cacheURL,


			// Response headers
			responseHeadersString,
			    responseHeaders,


			// timeout handle
			timeoutTimer,


			// Url cleanup var
			urlAnchor,


			// Request state (becomes false upon send and true upon completion)
			completed,


			// To know if global events are to be dispatched
			fireGlobals,


			// Loop variable
			i,


			// uncached part of the url
			uncached,


			// Create the final options object
			s = jQuery.ajaxSetup({}, options),


			// Callbacks context
			callbackContext = s.context || s,


			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,


			// Deferreds
			deferred = jQuery.Deferred(),
			    completeDeferred = jQuery.Callbacks("once memory"),


			// Status-dependent callbacks
			_statusCode = s.statusCode || {},


			// Headers (they are sent all at once)
			requestHeaders = {},
			    requestHeadersNames = {},


			// Default abort message
			strAbort = "canceled",


			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function getResponseHeader(key) {
					var match;
					if (completed) {
						if (!responseHeaders) {
							responseHeaders = {};
							while (match = rheaders.exec(responseHeadersString)) {
								responseHeaders[match[1].toLowerCase()] = match[2];
							}
						}
						match = responseHeaders[key.toLowerCase()];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function getAllResponseHeaders() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function setRequestHeader(name, value) {
					if (completed == null) {
						name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
						requestHeaders[name] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function overrideMimeType(type) {
					if (completed == null) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function statusCode(map) {
					var code;
					if (map) {
						if (completed) {

							// Execute the appropriate callbacks
							jqXHR.always(map[jqXHR.status]);
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for (code in map) {
								_statusCode[code] = [_statusCode[code], map[code]];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function abort(statusText) {
					var finalText = statusText || strAbort;
					if (transport) {
						transport.abort(finalText);
					}
					done(0, finalText);
					return this;
				}
			};

			// Attach deferreds
			deferred.promise(jqXHR);

			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ((url || s.url || location.href) + "").replace(rprotocol, location.protocol + "//");

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if (s.crossDomain == null) {
				urlAnchor = document.createElement("a");

				// Support: IE <=8 - 11, Edge 12 - 13
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
				} catch (e) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if (s.data && s.processData && typeof s.data !== "string") {
				s.data = jQuery.param(s.data, s.traditional);
			}

			// Apply prefilters
			inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

			// If request was aborted inside a prefilter, stop there
			if (completed) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if (fireGlobals && jQuery.active++ === 0) {
				jQuery.event.trigger("ajaxStart");
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test(s.type);

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace(rhash, "");

			// More options handling for requests with no content
			if (!s.hasContent) {

				// Remember the hash so we can put it back
				uncached = s.url.slice(cacheURL.length);

				// If data is available, append data to url
				if (s.data) {
					cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add or update anti-cache param if needed
				if (s.cache === false) {
					cacheURL = cacheURL.replace(rantiCache, "$1");
					uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++ + uncached;
				}

				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;

				// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if (s.data && s.processData && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
				s.data = s.data.replace(r20, "+");
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if (s.ifModified) {
				if (jQuery.lastModified[cacheURL]) {
					jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
				}
				if (jQuery.etag[cacheURL]) {
					jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
				}
			}

			// Set the correct header, if data is being sent
			if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
				jqXHR.setRequestHeader("Content-Type", s.contentType);
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);

			// Check for headers option
			for (i in s.headers) {
				jqXHR.setRequestHeader(i, s.headers[i]);
			}

			// Allow custom headers/mimetypes and early abort
			if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			completeDeferred.add(s.complete);
			jqXHR.done(s.success);
			jqXHR.fail(s.error);

			// Get transport
			transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);

			// If no transport, we auto-abort
			if (!transport) {
				done(-1, "No Transport");
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if (fireGlobals) {
					globalEventContext.trigger("ajaxSend", [jqXHR, s]);
				}

				// If request was aborted inside ajaxSend, stop there
				if (completed) {
					return jqXHR;
				}

				// Timeout
				if (s.async && s.timeout > 0) {
					timeoutTimer = window.setTimeout(function () {
						jqXHR.abort("timeout");
					}, s.timeout);
				}

				try {
					completed = false;
					transport.send(requestHeaders, done);
				} catch (e) {

					// Rethrow post-completion exceptions
					if (completed) {
						throw e;
					}

					// Propagate others as results
					done(-1, e);
				}
			}

			// Callback for when everything is done
			function done(status, nativeStatusText, responses, headers) {
				var isSuccess,
				    success,
				    error,
				    response,
				    modified,
				    statusText = nativeStatusText;

				// Ignore repeat invocations
				if (completed) {
					return;
				}

				completed = true;

				// Clear timeout if it exists
				if (timeoutTimer) {
					window.clearTimeout(timeoutTimer);
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if (responses) {
					response = ajaxHandleResponses(s, jqXHR, responses);
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert(s, response, jqXHR, isSuccess);

				// If successful, handle type chaining
				if (isSuccess) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if (s.ifModified) {
						modified = jqXHR.getResponseHeader("Last-Modified");
						if (modified) {
							jQuery.lastModified[cacheURL] = modified;
						}
						modified = jqXHR.getResponseHeader("etag");
						if (modified) {
							jQuery.etag[cacheURL] = modified;
						}
					}

					// if no content
					if (status === 204 || s.type === "HEAD") {
						statusText = "nocontent";

						// if not modified
					} else if (status === 304) {
						statusText = "notmodified";

						// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if (status || !statusText) {
						statusText = "error";
						if (status < 0) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = (nativeStatusText || statusText) + "";

				// Success/Error
				if (isSuccess) {
					deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
				} else {
					deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
				}

				// Status-dependent callbacks
				jqXHR.statusCode(_statusCode);
				_statusCode = undefined;

				if (fireGlobals) {
					globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
				}

				// Complete
				completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

				if (fireGlobals) {
					globalEventContext.trigger("ajaxComplete", [jqXHR, s]);

					// Handle the global AJAX counter
					if (! --jQuery.active) {
						jQuery.event.trigger("ajaxStop");
					}
				}
			}

			return jqXHR;
		},

		getJSON: function getJSON(url, data, callback) {
			return jQuery.get(url, data, callback, "json");
		},

		getScript: function getScript(url, callback) {
			return jQuery.get(url, undefined, callback, "script");
		}
	});

	jQuery.each(["get", "post"], function (i, method) {
		jQuery[method] = function (url, data, callback, type) {

			// Shift arguments if data argument was omitted
			if (jQuery.isFunction(data)) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax(jQuery.extend({
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject(url) && url));
		};
	});

	jQuery._evalUrl = function (url) {
		return jQuery.ajax({
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		});
	};

	jQuery.fn.extend({
		wrapAll: function wrapAll(html) {
			var wrap;

			if (this[0]) {
				if (jQuery.isFunction(html)) {
					html = html.call(this[0]);
				}

				// The elements to wrap the target around
				wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

				if (this[0].parentNode) {
					wrap.insertBefore(this[0]);
				}

				wrap.map(function () {
					var elem = this;

					while (elem.firstElementChild) {
						elem = elem.firstElementChild;
					}

					return elem;
				}).append(this);
			}

			return this;
		},

		wrapInner: function wrapInner(html) {
			if (jQuery.isFunction(html)) {
				return this.each(function (i) {
					jQuery(this).wrapInner(html.call(this, i));
				});
			}

			return this.each(function () {
				var self = jQuery(this),
				    contents = self.contents();

				if (contents.length) {
					contents.wrapAll(html);
				} else {
					self.append(html);
				}
			});
		},

		wrap: function wrap(html) {
			var isFunction = jQuery.isFunction(html);

			return this.each(function (i) {
				jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
			});
		},

		unwrap: function unwrap(selector) {
			this.parent(selector).not("body").each(function () {
				jQuery(this).replaceWith(this.childNodes);
			});
			return this;
		}
	});

	jQuery.expr.pseudos.hidden = function (elem) {
		return !jQuery.expr.pseudos.visible(elem);
	};
	jQuery.expr.pseudos.visible = function (elem) {
		return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
	};

	jQuery.ajaxSettings.xhr = function () {
		try {
			return new window.XMLHttpRequest();
		} catch (e) {}
	};

	var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	    xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport(function (options) {
		var _callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if (support.cors || xhrSupported && !options.crossDomain) {
			return {
				send: function send(headers, complete) {
					var i,
					    xhr = options.xhr();

					xhr.open(options.type, options.url, options.async, options.username, options.password);

					// Apply custom fields if provided
					if (options.xhrFields) {
						for (i in options.xhrFields) {
							xhr[i] = options.xhrFields[i];
						}
					}

					// Override mime type if needed
					if (options.mimeType && xhr.overrideMimeType) {
						xhr.overrideMimeType(options.mimeType);
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if (!options.crossDomain && !headers["X-Requested-With"]) {
						headers["X-Requested-With"] = "XMLHttpRequest";
					}

					// Set headers
					for (i in headers) {
						xhr.setRequestHeader(i, headers[i]);
					}

					// Callback
					_callback = function callback(type) {
						return function () {
							if (_callback) {
								_callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if (type === "abort") {
									xhr.abort();
								} else if (type === "error") {

									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if (typeof xhr.status !== "number") {
										complete(0, "error");
									} else {
										complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status, xhr.statusText);
									}
								} else {
									complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									(xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText }, xhr.getAllResponseHeaders());
								}
							}
						};
					};

					// Listen to events
					xhr.onload = _callback();
					errorCallback = xhr.onerror = _callback("error");

					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if (xhr.onabort !== undefined) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function () {

							// Check readyState before timeout as it changes
							if (xhr.readyState === 4) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout(function () {
									if (_callback) {
										errorCallback();
									}
								});
							}
						};
					}

					// Create the abort callback
					_callback = _callback("abort");

					try {

						// Do send the request (this may raise an exception)
						xhr.send(options.hasContent && options.data || null);
					} catch (e) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if (_callback) {
							throw e;
						}
					}
				},

				abort: function abort() {
					if (_callback) {
						_callback();
					}
				}
			};
		}
	});

	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter(function (s) {
		if (s.crossDomain) {
			s.contents.script = false;
		}
	});

	// Install script dataType
	jQuery.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function textScript(text) {
				jQuery.globalEval(text);
				return text;
			}
		}
	});

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter("script", function (s) {
		if (s.cache === undefined) {
			s.cache = false;
		}
		if (s.crossDomain) {
			s.type = "GET";
		}
	});

	// Bind script tag hack transport
	jQuery.ajaxTransport("script", function (s) {

		// This transport only deals with cross domain requests
		if (s.crossDomain) {
			var script, _callback2;
			return {
				send: function send(_, complete) {
					script = jQuery("<script>").prop({
						charset: s.scriptCharset,
						src: s.url
					}).on("load error", _callback2 = function callback(evt) {
						script.remove();
						_callback2 = null;
						if (evt) {
							complete(evt.type === "error" ? 404 : 200, evt.type);
						}
					});

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild(script[0]);
				},
				abort: function abort() {
					if (_callback2) {
						_callback2();
					}
				}
			};
		}
	});

	var oldCallbacks = [],
	    rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function jsonpCallback() {
			var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
			this[callback] = true;
			return callback;
		}
	});

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {

		var callbackName,
		    overwritten,
		    responseContainer,
		    jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s.data) && "data");

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if (jsonProp || s.dataTypes[0] === "jsonp") {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;

			// Insert callback into url or form data
			if (jsonProp) {
				s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
			} else if (s.jsonp !== false) {
				s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters["script json"] = function () {
				if (!responseContainer) {
					jQuery.error(callbackName + " was not called");
				}
				return responseContainer[0];
			};

			// Force json dataType
			s.dataTypes[0] = "json";

			// Install callback
			overwritten = window[callbackName];
			window[callbackName] = function () {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always(function () {

				// If previous value didn't exist - remove it
				if (overwritten === undefined) {
					jQuery(window).removeProp(callbackName);

					// Otherwise restore preexisting value
				} else {
					window[callbackName] = overwritten;
				}

				// Save back as free
				if (s[callbackName]) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push(callbackName);
				}

				// Call if it was a function and we have a response
				if (responseContainer && jQuery.isFunction(overwritten)) {
					overwritten(responseContainer[0]);
				}

				responseContainer = overwritten = undefined;
			});

			// Delegate to script
			return "script";
		}
	});

	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = function () {
		var body = document.implementation.createHTMLDocument("").body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	}();

	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function (data, context, keepScripts) {
		if (typeof data !== "string") {
			return [];
		}
		if (typeof context === "boolean") {
			keepScripts = context;
			context = false;
		}

		var base, parsed, scripts;

		if (!context) {

			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if (support.createHTMLDocument) {
				context = document.implementation.createHTMLDocument("");

				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement("base");
				base.href = document.location.href;
				context.head.appendChild(base);
			} else {
				context = document;
			}
		}

		parsed = rsingleTag.exec(data);
		scripts = !keepScripts && [];

		// Single tag
		if (parsed) {
			return [context.createElement(parsed[1])];
		}

		parsed = buildFragment([data], context, scripts);

		if (scripts && scripts.length) {
			jQuery(scripts).remove();
		}

		return jQuery.merge([], parsed.childNodes);
	};

	/**
  * Load a url into a page
  */
	jQuery.fn.load = function (url, params, callback) {
		var selector,
		    type,
		    response,
		    self = this,
		    off = url.indexOf(" ");

		if (off > -1) {
			selector = stripAndCollapse(url.slice(off));
			url = url.slice(0, off);
		}

		// If it's a function
		if (jQuery.isFunction(params)) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

			// Otherwise, build a param string
		} else if (params && (typeof params === "undefined" ? "undefined" : _typeof(params)) === "object") {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if (self.length > 0) {
			jQuery.ajax({
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			}).done(function (responseText) {

				// Save response for use in complete callback
				response = arguments;

				self.html(selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :

				// Otherwise use the full result
				responseText);

				// If the request succeeds, this function gets "data", "status", "jqXHR"
				// but they are ignored because response was set above.
				// If it fails, this function gets "jqXHR", "status", "error"
			}).always(callback && function (jqXHR, status) {
				self.each(function () {
					callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
				});
			});
		}

		return this;
	};

	// Attach a bunch of functions for handling common AJAX events
	jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
		jQuery.fn[type] = function (fn) {
			return this.on(type, fn);
		};
	});

	jQuery.expr.pseudos.animated = function (elem) {
		return jQuery.grep(jQuery.timers, function (fn) {
			return elem === fn.elem;
		}).length;
	};

	jQuery.offset = {
		setOffset: function setOffset(elem, options, i) {
			var curPosition,
			    curLeft,
			    curCSSTop,
			    curTop,
			    curOffset,
			    curCSSLeft,
			    calculatePosition,
			    position = jQuery.css(elem, "position"),
			    curElem = jQuery(elem),
			    props = {};

			// Set position first, in-case top/left are set even on static elem
			if (position === "static") {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css(elem, "top");
			curCSSLeft = jQuery.css(elem, "left");
			calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if (calculatePosition) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
			} else {
				curTop = parseFloat(curCSSTop) || 0;
				curLeft = parseFloat(curCSSLeft) || 0;
			}

			if (jQuery.isFunction(options)) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call(elem, i, jQuery.extend({}, curOffset));
			}

			if (options.top != null) {
				props.top = options.top - curOffset.top + curTop;
			}
			if (options.left != null) {
				props.left = options.left - curOffset.left + curLeft;
			}

			if ("using" in options) {
				options.using.call(elem, props);
			} else {
				curElem.css(props);
			}
		}
	};

	jQuery.fn.extend({
		offset: function offset(options) {

			// Preserve chaining for setter
			if (arguments.length) {
				return options === undefined ? this : this.each(function (i) {
					jQuery.offset.setOffset(this, options, i);
				});
			}

			var doc,
			    docElem,
			    rect,
			    win,
			    elem = this[0];

			if (!elem) {
				return;
			}

			// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if (!elem.getClientRects().length) {
				return { top: 0, left: 0 };
			}

			rect = elem.getBoundingClientRect();

			doc = elem.ownerDocument;
			docElem = doc.documentElement;
			win = doc.defaultView;

			return {
				top: rect.top + win.pageYOffset - docElem.clientTop,
				left: rect.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function position() {
			if (!this[0]) {
				return;
			}

			var offsetParent,
			    offset,
			    elem = this[0],
			    parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if (jQuery.css(elem, "position") === "fixed") {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();
			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if (!nodeName(offsetParent[0], "html")) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset = {
					top: parentOffset.top + jQuery.css(offsetParent[0], "borderTopWidth", true),
					left: parentOffset.left + jQuery.css(offsetParent[0], "borderLeftWidth", true)
				};
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
				left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function offsetParent() {
			return this.map(function () {
				var offsetParent = this.offsetParent;

				while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			});
		}
	});

	// Create scrollLeft and scrollTop methods
	jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (method, prop) {
		var top = "pageYOffset" === prop;

		jQuery.fn[method] = function (val) {
			return access(this, function (elem, method, val) {

				// Coalesce documents and windows
				var win;
				if (jQuery.isWindow(elem)) {
					win = elem;
				} else if (elem.nodeType === 9) {
					win = elem.defaultView;
				}

				if (val === undefined) {
					return win ? win[prop] : elem[method];
				}

				if (win) {
					win.scrollTo(!top ? val : win.pageXOffset, top ? val : win.pageYOffset);
				} else {
					elem[method] = val;
				}
			}, method, val, arguments.length);
		};
	});

	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each(["top", "left"], function (i, prop) {
		jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
			if (computed) {
				computed = curCSS(elem, prop);

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
			}
		});
	});

	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each({ Height: "height", Width: "width" }, function (name, type) {
		jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name }, function (defaultExtra, funcName) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[funcName] = function (margin, value) {
				var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
				    extra = defaultExtra || (margin === true || value === true ? "margin" : "border");

				return access(this, function (elem, type, value) {
					var doc;

					if (jQuery.isWindow(elem)) {

						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
					}

					// Get document width or height
					if (elem.nodeType === 9) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
					}

					return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css(elem, type, extra) :

					// Set width or height on the element
					jQuery.style(elem, type, value, extra);
				}, type, chainable ? margin : undefined, chainable);
			};
		});
	});

	jQuery.fn.extend({

		bind: function bind(types, data, fn) {
			return this.on(types, null, data, fn);
		},
		unbind: function unbind(types, fn) {
			return this.off(types, null, fn);
		},

		delegate: function delegate(selector, types, data, fn) {
			return this.on(types, selector, data, fn);
		},
		undelegate: function undelegate(selector, types, fn) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
		}
	});

	jQuery.holdReady = function (hold) {
		if (hold) {
			jQuery.readyWait++;
		} else {
			jQuery.ready(true);
		}
	};
	jQuery.isArray = Array.isArray;
	jQuery.parseJSON = JSON.parse;
	jQuery.nodeName = nodeName;

	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}

	var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,


	// Map over the $ in case of overwrite
	_$ = window.$;

	jQuery.noConflict = function (deep) {
		if (window.$ === jQuery) {
			window.$ = _$;
		}

		if (deep && window.jQuery === jQuery) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if (!noGlobal) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ }),
/* 1 */
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

        console.log(selector);
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
    }, {
        key: "replacer",
        value: function replacer() {
            this.createBlock();
            // replace
            this.selector.replaceWith(this.main_block);
        }
    }]);

    return Base;
}();

exports.default = Base;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(8);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

__webpack_require__(6);

__webpack_require__(9);

var _Panel = __webpack_require__(11);

var _Panel2 = _interopRequireDefault(_Panel);

var _Tab = __webpack_require__(12);

var _Tab2 = _interopRequireDefault(_Tab);

var _Form = __webpack_require__(13);

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(14);

var component_types = [_Tab2.default, _Panel2.default, _Form2.default];

$(document).ready(function () {
  scan();
});

/**
 * Scan all component_types of project
 * Check functions and component_types
 */
function scan() {
  for (var i = 0; i < component_types.length; i++) {
    // item type
    var template_item = component_types[i];
    // list item
    var items = $(template_item.name.toLowerCase());
    for (var j = 0; j < items.length; j++) {
      $(items[j]).index = j;
      var objectSelector = new (Function.prototype.bind.call(template_item, null, $(items[j]), j))();
      objectSelector.replacer();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(7);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./bootstrap.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./bootstrap.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, "/*!\r\n * Bootstrap v4.0.0-alpha.6 (https://getbootstrap.com)\r\n * Copyright 2011-2017 The Bootstrap Authors\r\n * Copyright 2011-2017 Twitter, Inc.\r\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\r\n */\r\n/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\r\nhtml {\r\n  font-family: sans-serif;\r\n  line-height: 1.15;\r\n  -ms-text-size-adjust: 100%;\r\n  -webkit-text-size-adjust: 100%;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\narticle,\r\naside,\r\nfooter,\r\nheader,\r\nnav,\r\nsection {\r\n  display: block;\r\n}\r\n\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\n\r\nfigcaption,\r\nfigure,\r\nmain {\r\n  display: block;\r\n}\r\n\r\nfigure {\r\n  margin: 1em 40px;\r\n}\r\n\r\nhr {\r\n  -webkit-box-sizing: content-box;\r\n          box-sizing: content-box;\r\n  height: 0;\r\n  overflow: visible;\r\n}\r\n\r\npre {\r\n  font-family: monospace, monospace;\r\n  font-size: 1em;\r\n}\r\n\r\na {\r\n  background-color: transparent;\r\n  -webkit-text-decoration-skip: objects;\r\n}\r\n\r\na:active,\r\na:hover {\r\n  outline-width: 0;\r\n}\r\n\r\nabbr[title] {\r\n  border-bottom: none;\r\n  text-decoration: underline;\r\n  text-decoration: underline dotted;\r\n}\r\n\r\nb,\r\nstrong {\r\n  font-weight: inherit;\r\n}\r\n\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n\r\ncode,\r\nkbd,\r\nsamp {\r\n  font-family: monospace, monospace;\r\n  font-size: 1em;\r\n}\r\n\r\ndfn {\r\n  font-style: italic;\r\n}\r\n\r\nmark {\r\n  background-color: #ff0;\r\n  color: #000;\r\n}\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\naudio,\r\nvideo {\r\n  display: inline-block;\r\n}\r\n\r\naudio:not([controls]) {\r\n  display: none;\r\n  height: 0;\r\n}\r\n\r\nimg {\r\n  border-style: none;\r\n}\r\n\r\nsvg:not(:root) {\r\n  overflow: hidden;\r\n}\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: sans-serif;\r\n  font-size: 100%;\r\n  line-height: 1.15;\r\n  margin: 0;\r\n}\r\n\r\nbutton,\r\ninput {\r\n  overflow: visible;\r\n}\r\n\r\nbutton,\r\nselect {\r\n  text-transform: none;\r\n}\r\n\r\nbutton,\r\nhtml [type=\"button\"],\r\n[type=\"reset\"],\r\n[type=\"submit\"] {\r\n  -webkit-appearance: button;\r\n}\r\n\r\nbutton::-moz-focus-inner,\r\n[type=\"button\"]::-moz-focus-inner,\r\n[type=\"reset\"]::-moz-focus-inner,\r\n[type=\"submit\"]::-moz-focus-inner {\r\n  border-style: none;\r\n  padding: 0;\r\n}\r\n\r\nbutton:-moz-focusring,\r\n[type=\"button\"]:-moz-focusring,\r\n[type=\"reset\"]:-moz-focusring,\r\n[type=\"submit\"]:-moz-focusring {\r\n  outline: 1px dotted ButtonText;\r\n}\r\n\r\nfieldset {\r\n  border: 1px solid #c0c0c0;\r\n  margin: 0 2px;\r\n  padding: 0.35em 0.625em 0.75em;\r\n}\r\n\r\nlegend {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  color: inherit;\r\n  display: table;\r\n  max-width: 100%;\r\n  padding: 0;\r\n  white-space: normal;\r\n}\r\n\r\nprogress {\r\n  display: inline-block;\r\n  vertical-align: baseline;\r\n}\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n[type=\"checkbox\"],\r\n[type=\"radio\"] {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  padding: 0;\r\n}\r\n\r\n[type=\"number\"]::-webkit-inner-spin-button,\r\n[type=\"number\"]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n[type=\"search\"] {\r\n  -webkit-appearance: textfield;\r\n  outline-offset: -2px;\r\n}\r\n\r\n[type=\"search\"]::-webkit-search-cancel-button,\r\n[type=\"search\"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button;\r\n  font: inherit;\r\n}\r\n\r\ndetails,\r\nmenu {\r\n  display: block;\r\n}\r\n\r\nsummary {\r\n  display: list-item;\r\n}\r\n\r\ncanvas {\r\n  display: inline-block;\r\n}\r\n\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n[hidden] {\r\n  display: none;\r\n}\r\n\r\n@media print {\r\n  *,\r\n  *::before,\r\n  *::after,\r\n  p::first-letter,\r\n  div::first-letter,\r\n  blockquote::first-letter,\r\n  li::first-letter,\r\n  p::first-line,\r\n  div::first-line,\r\n  blockquote::first-line,\r\n  li::first-line {\r\n    text-shadow: none !important;\r\n    -webkit-box-shadow: none !important;\r\n            box-shadow: none !important;\r\n  }\r\n  a,\r\n  a:visited {\r\n    text-decoration: underline;\r\n  }\r\n  abbr[title]::after {\r\n    content: \" (\" attr(title) \")\";\r\n  }\r\n  pre {\r\n    white-space: pre-wrap !important;\r\n  }\r\n  pre,\r\n  blockquote {\r\n    border: 1px solid #999;\r\n    page-break-inside: avoid;\r\n  }\r\n  thead {\r\n    display: table-header-group;\r\n  }\r\n  tr,\r\n  img {\r\n    page-break-inside: avoid;\r\n  }\r\n  p,\r\n  h2,\r\n  h3 {\r\n    orphans: 3;\r\n    widows: 3;\r\n  }\r\n  h2,\r\n  h3 {\r\n    page-break-after: avoid;\r\n  }\r\n  .navbar {\r\n    display: none;\r\n  }\r\n  .badge {\r\n    border: 1px solid #000;\r\n  }\r\n  .table {\r\n    border-collapse: collapse !important;\r\n  }\r\n  .table td,\r\n  .table th {\r\n    background-color: #fff !important;\r\n  }\r\n  .table-bordered th,\r\n  .table-bordered td {\r\n    border: 1px solid #ddd !important;\r\n  }\r\n}\r\n\r\nhtml {\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  -webkit-box-sizing: inherit;\r\n          box-sizing: inherit;\r\n}\r\n\r\n@-ms-viewport {\r\n  width: device-width;\r\n}\r\n\r\nhtml {\r\n  -ms-overflow-style: scrollbar;\r\n  -webkit-tap-highlight-color: transparent;\r\n}\r\n\r\nbody {\r\n  font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\r\n  font-size: 1rem;\r\n  font-weight: normal;\r\n  line-height: 1.5;\r\n  color: #292b2c;\r\n  background-color: #fff;\r\n}\r\n\r\n[tabindex=\"-1\"]:focus {\r\n  outline: none !important;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n  margin-top: 0;\r\n  margin-bottom: .5rem;\r\n}\r\n\r\np {\r\n  margin-top: 0;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\nabbr[title],\r\nabbr[data-original-title] {\r\n  cursor: help;\r\n}\r\n\r\naddress {\r\n  margin-bottom: 1rem;\r\n  font-style: normal;\r\n  line-height: inherit;\r\n}\r\n\r\nol,\r\nul,\r\ndl {\r\n  margin-top: 0;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\nol ol,\r\nul ul,\r\nol ul,\r\nul ol {\r\n  margin-bottom: 0;\r\n}\r\n\r\ndt {\r\n  font-weight: bold;\r\n}\r\n\r\ndd {\r\n  margin-bottom: .5rem;\r\n  margin-left: 0;\r\n}\r\n\r\nblockquote {\r\n  margin: 0 0 1rem;\r\n}\r\n\r\na {\r\n  color: #0275d8;\r\n  text-decoration: none;\r\n}\r\n\r\na:focus, a:hover {\r\n  color: #014c8c;\r\n  text-decoration: underline;\r\n}\r\n\r\na:not([href]):not([tabindex]) {\r\n  color: inherit;\r\n  text-decoration: none;\r\n}\r\n\r\na:not([href]):not([tabindex]):focus, a:not([href]):not([tabindex]):hover {\r\n  color: inherit;\r\n  text-decoration: none;\r\n}\r\n\r\na:not([href]):not([tabindex]):focus {\r\n  outline: 0;\r\n}\r\n\r\npre {\r\n  margin-top: 0;\r\n  margin-bottom: 1rem;\r\n  overflow: auto;\r\n}\r\n\r\nfigure {\r\n  margin: 0 0 1rem;\r\n}\r\n\r\nimg {\r\n  vertical-align: middle;\r\n}\r\n\r\n[role=\"button\"] {\r\n  cursor: pointer;\r\n}\r\n\r\na,\r\narea,\r\nbutton,\r\n[role=\"button\"],\r\ninput,\r\nlabel,\r\nselect,\r\nsummary,\r\ntextarea {\r\n  -ms-touch-action: manipulation;\r\n      touch-action: manipulation;\r\n}\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  background-color: transparent;\r\n}\r\n\r\ncaption {\r\n  padding-top: 0.75rem;\r\n  padding-bottom: 0.75rem;\r\n  color: #636c72;\r\n  text-align: left;\r\n  caption-side: bottom;\r\n}\r\n\r\nth {\r\n  text-align: left;\r\n}\r\n\r\nlabel {\r\n  display: inline-block;\r\n  margin-bottom: .5rem;\r\n}\r\n\r\nbutton:focus {\r\n  outline: 1px dotted;\r\n  outline: 5px auto -webkit-focus-ring-color;\r\n}\r\n\r\ninput,\r\nbutton,\r\nselect,\r\ntextarea {\r\n  line-height: inherit;\r\n}\r\n\r\ninput[type=\"radio\"]:disabled,\r\ninput[type=\"checkbox\"]:disabled {\r\n  cursor: not-allowed;\r\n}\r\n\r\ninput[type=\"date\"],\r\ninput[type=\"time\"],\r\ninput[type=\"datetime-local\"],\r\ninput[type=\"month\"] {\r\n  -webkit-appearance: listbox;\r\n}\r\n\r\ntextarea {\r\n  resize: vertical;\r\n}\r\n\r\nfieldset {\r\n  min-width: 0;\r\n  padding: 0;\r\n  margin: 0;\r\n  border: 0;\r\n}\r\n\r\nlegend {\r\n  display: block;\r\n  width: 100%;\r\n  padding: 0;\r\n  margin-bottom: .5rem;\r\n  font-size: 1.5rem;\r\n  line-height: inherit;\r\n}\r\n\r\ninput[type=\"search\"] {\r\n  -webkit-appearance: none;\r\n}\r\n\r\noutput {\r\n  display: inline-block;\r\n}\r\n\r\n[hidden] {\r\n  display: none !important;\r\n}\r\n\r\nh1, h2, h3, h4, h5, h6,\r\n.h1, .h2, .h3, .h4, .h5, .h6 {\r\n  margin-bottom: 0.5rem;\r\n  font-family: inherit;\r\n  font-weight: 500;\r\n  line-height: 1.1;\r\n  color: inherit;\r\n}\r\n\r\nh1, .h1 {\r\n  font-size: 2.5rem;\r\n}\r\n\r\nh2, .h2 {\r\n  font-size: 2rem;\r\n}\r\n\r\nh3, .h3 {\r\n  font-size: 1.75rem;\r\n}\r\n\r\nh4, .h4 {\r\n  font-size: 1.5rem;\r\n}\r\n\r\nh5, .h5 {\r\n  font-size: 1.25rem;\r\n}\r\n\r\nh6, .h6 {\r\n  font-size: 1rem;\r\n}\r\n\r\n.lead {\r\n  font-size: 1.25rem;\r\n  font-weight: 300;\r\n}\r\n\r\n.display-1 {\r\n  font-size: 6rem;\r\n  font-weight: 300;\r\n  line-height: 1.1;\r\n}\r\n\r\n.display-2 {\r\n  font-size: 5.5rem;\r\n  font-weight: 300;\r\n  line-height: 1.1;\r\n}\r\n\r\n.display-3 {\r\n  font-size: 4.5rem;\r\n  font-weight: 300;\r\n  line-height: 1.1;\r\n}\r\n\r\n.display-4 {\r\n  font-size: 3.5rem;\r\n  font-weight: 300;\r\n  line-height: 1.1;\r\n}\r\n\r\nhr {\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n  border: 0;\r\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n\r\nsmall,\r\n.small {\r\n  font-size: 80%;\r\n  font-weight: normal;\r\n}\r\n\r\nmark,\r\n.mark {\r\n  padding: 0.2em;\r\n  background-color: #fcf8e3;\r\n}\r\n\r\n.list-unstyled {\r\n  padding-left: 0;\r\n  list-style: none;\r\n}\r\n\r\n.list-inline {\r\n  padding-left: 0;\r\n  list-style: none;\r\n}\r\n\r\n.list-inline-item {\r\n  display: inline-block;\r\n}\r\n\r\n.list-inline-item:not(:last-child) {\r\n  margin-right: 5px;\r\n}\r\n\r\n.initialism {\r\n  font-size: 90%;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.blockquote {\r\n  padding: 0.5rem 1rem;\r\n  margin-bottom: 1rem;\r\n  font-size: 1.25rem;\r\n  border-left: 0.25rem solid #eceeef;\r\n}\r\n\r\n.blockquote-footer {\r\n  display: block;\r\n  font-size: 80%;\r\n  color: #636c72;\r\n}\r\n\r\n.blockquote-footer::before {\r\n  content: \"\\2014   \\A0\";\r\n}\r\n\r\n.blockquote-reverse {\r\n  padding-right: 1rem;\r\n  padding-left: 0;\r\n  text-align: right;\r\n  border-right: 0.25rem solid #eceeef;\r\n  border-left: 0;\r\n}\r\n\r\n.blockquote-reverse .blockquote-footer::before {\r\n  content: \"\";\r\n}\r\n\r\n.blockquote-reverse .blockquote-footer::after {\r\n  content: \"\\A0   \\2014\";\r\n}\r\n\r\n.img-fluid {\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.img-thumbnail {\r\n  padding: 0.25rem;\r\n  background-color: #fff;\r\n  border: 1px solid #ddd;\r\n  border-radius: 0.25rem;\r\n  -webkit-transition: all 0.2s ease-in-out;\r\n  -o-transition: all 0.2s ease-in-out;\r\n  transition: all 0.2s ease-in-out;\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\n\r\n.figure {\r\n  display: inline-block;\r\n}\r\n\r\n.figure-img {\r\n  margin-bottom: 0.5rem;\r\n  line-height: 1;\r\n}\r\n\r\n.figure-caption {\r\n  font-size: 90%;\r\n  color: #636c72;\r\n}\r\n\r\ncode,\r\nkbd,\r\npre,\r\nsamp {\r\n  font-family: Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\r\n}\r\n\r\ncode {\r\n  padding: 0.2rem 0.4rem;\r\n  font-size: 90%;\r\n  color: #bd4147;\r\n  background-color: #f7f7f9;\r\n  border-radius: 0.25rem;\r\n}\r\n\r\na > code {\r\n  padding: 0;\r\n  color: inherit;\r\n  background-color: inherit;\r\n}\r\n\r\nkbd {\r\n  padding: 0.2rem 0.4rem;\r\n  font-size: 90%;\r\n  color: #fff;\r\n  background-color: #292b2c;\r\n  border-radius: 0.2rem;\r\n}\r\n\r\nkbd kbd {\r\n  padding: 0;\r\n  font-size: 100%;\r\n  font-weight: bold;\r\n}\r\n\r\npre {\r\n  display: block;\r\n  margin-top: 0;\r\n  margin-bottom: 1rem;\r\n  font-size: 90%;\r\n  color: #292b2c;\r\n}\r\n\r\npre code {\r\n  padding: 0;\r\n  font-size: inherit;\r\n  color: inherit;\r\n  background-color: transparent;\r\n  border-radius: 0;\r\n}\r\n\r\n.pre-scrollable {\r\n  max-height: 340px;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .container {\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .container {\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .container {\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .container {\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n  }\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .container {\r\n    width: 540px;\r\n    max-width: 100%;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .container {\r\n    width: 720px;\r\n    max-width: 100%;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .container {\r\n    width: 960px;\r\n    max-width: 100%;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .container {\r\n    width: 1140px;\r\n    max-width: 100%;\r\n  }\r\n}\r\n\r\n.container-fluid {\r\n  position: relative;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .container-fluid {\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .container-fluid {\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .container-fluid {\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .container-fluid {\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n  }\r\n}\r\n\r\n.row {\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-flex-wrap: wrap;\r\n      -ms-flex-wrap: wrap;\r\n          flex-wrap: wrap;\r\n  margin-right: -15px;\r\n  margin-left: -15px;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .row {\r\n    margin-right: -15px;\r\n    margin-left: -15px;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .row {\r\n    margin-right: -15px;\r\n    margin-left: -15px;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .row {\r\n    margin-right: -15px;\r\n    margin-left: -15px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .row {\r\n    margin-right: -15px;\r\n    margin-left: -15px;\r\n  }\r\n}\r\n\r\n.no-gutters {\r\n  margin-right: 0;\r\n  margin-left: 0;\r\n}\r\n\r\n.no-gutters > .col,\r\n.no-gutters > [class*=\"col-\"] {\r\n  padding-right: 0;\r\n  padding-left: 0;\r\n}\r\n\r\n.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl {\r\n  position: relative;\r\n  width: 100%;\r\n  min-height: 1px;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl {\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl {\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl {\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl {\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n  }\r\n}\r\n\r\n.col {\r\n  -webkit-flex-basis: 0;\r\n      -ms-flex-preferred-size: 0;\r\n          flex-basis: 0;\r\n  -webkit-box-flex: 1;\r\n  -webkit-flex-grow: 1;\r\n      -ms-flex-positive: 1;\r\n          flex-grow: 1;\r\n  max-width: 100%;\r\n}\r\n\r\n.col-auto {\r\n  -webkit-box-flex: 0;\r\n  -webkit-flex: 0 0 auto;\r\n      -ms-flex: 0 0 auto;\r\n          flex: 0 0 auto;\r\n  width: auto;\r\n}\r\n\r\n.col-1 {\r\n  -webkit-box-flex: 0;\r\n  -webkit-flex: 0 0 8.333333%;\r\n      -ms-flex: 0 0 8.333333%;\r\n          flex: 0 0 8.333333%;\r\n  max-width: 8.333333%;\r\n}\r\n\r\n.col-2 {\r\n  -webkit-box-flex: 0;\r\n  -webkit-flex: 0 0 16.666667%;\r\n      -ms-flex: 0 0 16.666667%;\r\n          flex: 0 0 16.666667%;\r\n  max-width: 16.666667%;\r\n}\r\n\r\n.col-3 {\r\n  -webkit-box-flex: 0;\r\n  -webkit-flex: 0 0 25%;\r\n      -ms-flex: 0 0 25%;\r\n          flex: 0 0 25%;\r\n  max-width: 25%;\r\n}\r\n\r\n.col-4 {\r\n  -webkit-box-flex: 0;\r\n  -webkit-flex: 0 0 33.333333%;\r\n      -ms-flex: 0 0 33.333333%;\r\n          flex: 0 0 33.333333%;\r\n  max-width: 33.333333%;\r\n}\r\n\r\n.col-5 {\r\n  -webkit-box-flex: 0;\r\n  -webkit-flex: 0 0 41.666667%;\r\n      -ms-flex: 0 0 41.666667%;\r\n          flex: 0 0 41.666667%;\r\n  max-width: 41.666667%;\r\n}\r\n\r\n.col-6 {\r\n  -webkit-box-flex: 0;\r\n  -webkit-flex: 0 0 50%;\r\n      -ms-flex: 0 0 50%;\r\n          flex: 0 0 50%;\r\n  max-width: 50%;\r\n}\r\n\r\n.col-7 {\r\n  -webkit-box-flex: 0;\r\n  -webkit-flex: 0 0 58.333333%;\r\n      -ms-flex: 0 0 58.333333%;\r\n          flex: 0 0 58.333333%;\r\n  max-width: 58.333333%;\r\n}\r\n\r\n.col-8 {\r\n  -webkit-box-flex: 0;\r\n  -webkit-flex: 0 0 66.666667%;\r\n      -ms-flex: 0 0 66.666667%;\r\n          flex: 0 0 66.666667%;\r\n  max-width: 66.666667%;\r\n}\r\n\r\n.col-9 {\r\n  -webkit-box-flex: 0;\r\n  -webkit-flex: 0 0 75%;\r\n      -ms-flex: 0 0 75%;\r\n          flex: 0 0 75%;\r\n  max-width: 75%;\r\n}\r\n\r\n.col-10 {\r\n  -webkit-box-flex: 0;\r\n  -webkit-flex: 0 0 83.333333%;\r\n      -ms-flex: 0 0 83.333333%;\r\n          flex: 0 0 83.333333%;\r\n  max-width: 83.333333%;\r\n}\r\n\r\n.col-11 {\r\n  -webkit-box-flex: 0;\r\n  -webkit-flex: 0 0 91.666667%;\r\n      -ms-flex: 0 0 91.666667%;\r\n          flex: 0 0 91.666667%;\r\n  max-width: 91.666667%;\r\n}\r\n\r\n.col-12 {\r\n  -webkit-box-flex: 0;\r\n  -webkit-flex: 0 0 100%;\r\n      -ms-flex: 0 0 100%;\r\n          flex: 0 0 100%;\r\n  max-width: 100%;\r\n}\r\n\r\n.pull-0 {\r\n  right: auto;\r\n}\r\n\r\n.pull-1 {\r\n  right: 8.333333%;\r\n}\r\n\r\n.pull-2 {\r\n  right: 16.666667%;\r\n}\r\n\r\n.pull-3 {\r\n  right: 25%;\r\n}\r\n\r\n.pull-4 {\r\n  right: 33.333333%;\r\n}\r\n\r\n.pull-5 {\r\n  right: 41.666667%;\r\n}\r\n\r\n.pull-6 {\r\n  right: 50%;\r\n}\r\n\r\n.pull-7 {\r\n  right: 58.333333%;\r\n}\r\n\r\n.pull-8 {\r\n  right: 66.666667%;\r\n}\r\n\r\n.pull-9 {\r\n  right: 75%;\r\n}\r\n\r\n.pull-10 {\r\n  right: 83.333333%;\r\n}\r\n\r\n.pull-11 {\r\n  right: 91.666667%;\r\n}\r\n\r\n.pull-12 {\r\n  right: 100%;\r\n}\r\n\r\n.push-0 {\r\n  left: auto;\r\n}\r\n\r\n.push-1 {\r\n  left: 8.333333%;\r\n}\r\n\r\n.push-2 {\r\n  left: 16.666667%;\r\n}\r\n\r\n.push-3 {\r\n  left: 25%;\r\n}\r\n\r\n.push-4 {\r\n  left: 33.333333%;\r\n}\r\n\r\n.push-5 {\r\n  left: 41.666667%;\r\n}\r\n\r\n.push-6 {\r\n  left: 50%;\r\n}\r\n\r\n.push-7 {\r\n  left: 58.333333%;\r\n}\r\n\r\n.push-8 {\r\n  left: 66.666667%;\r\n}\r\n\r\n.push-9 {\r\n  left: 75%;\r\n}\r\n\r\n.push-10 {\r\n  left: 83.333333%;\r\n}\r\n\r\n.push-11 {\r\n  left: 91.666667%;\r\n}\r\n\r\n.push-12 {\r\n  left: 100%;\r\n}\r\n\r\n.offset-1 {\r\n  margin-left: 8.333333%;\r\n}\r\n\r\n.offset-2 {\r\n  margin-left: 16.666667%;\r\n}\r\n\r\n.offset-3 {\r\n  margin-left: 25%;\r\n}\r\n\r\n.offset-4 {\r\n  margin-left: 33.333333%;\r\n}\r\n\r\n.offset-5 {\r\n  margin-left: 41.666667%;\r\n}\r\n\r\n.offset-6 {\r\n  margin-left: 50%;\r\n}\r\n\r\n.offset-7 {\r\n  margin-left: 58.333333%;\r\n}\r\n\r\n.offset-8 {\r\n  margin-left: 66.666667%;\r\n}\r\n\r\n.offset-9 {\r\n  margin-left: 75%;\r\n}\r\n\r\n.offset-10 {\r\n  margin-left: 83.333333%;\r\n}\r\n\r\n.offset-11 {\r\n  margin-left: 91.666667%;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .col-sm {\r\n    -webkit-flex-basis: 0;\r\n        -ms-flex-preferred-size: 0;\r\n            flex-basis: 0;\r\n    -webkit-box-flex: 1;\r\n    -webkit-flex-grow: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n    max-width: 100%;\r\n  }\r\n  .col-sm-auto {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 auto;\r\n        -ms-flex: 0 0 auto;\r\n            flex: 0 0 auto;\r\n    width: auto;\r\n  }\r\n  .col-sm-1 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 8.333333%;\r\n        -ms-flex: 0 0 8.333333%;\r\n            flex: 0 0 8.333333%;\r\n    max-width: 8.333333%;\r\n  }\r\n  .col-sm-2 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 16.666667%;\r\n        -ms-flex: 0 0 16.666667%;\r\n            flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n  }\r\n  .col-sm-3 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 25%;\r\n        -ms-flex: 0 0 25%;\r\n            flex: 0 0 25%;\r\n    max-width: 25%;\r\n  }\r\n  .col-sm-4 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 33.333333%;\r\n        -ms-flex: 0 0 33.333333%;\r\n            flex: 0 0 33.333333%;\r\n    max-width: 33.333333%;\r\n  }\r\n  .col-sm-5 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 41.666667%;\r\n        -ms-flex: 0 0 41.666667%;\r\n            flex: 0 0 41.666667%;\r\n    max-width: 41.666667%;\r\n  }\r\n  .col-sm-6 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 50%;\r\n        -ms-flex: 0 0 50%;\r\n            flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n  .col-sm-7 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 58.333333%;\r\n        -ms-flex: 0 0 58.333333%;\r\n            flex: 0 0 58.333333%;\r\n    max-width: 58.333333%;\r\n  }\r\n  .col-sm-8 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 66.666667%;\r\n        -ms-flex: 0 0 66.666667%;\r\n            flex: 0 0 66.666667%;\r\n    max-width: 66.666667%;\r\n  }\r\n  .col-sm-9 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 75%;\r\n        -ms-flex: 0 0 75%;\r\n            flex: 0 0 75%;\r\n    max-width: 75%;\r\n  }\r\n  .col-sm-10 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 83.333333%;\r\n        -ms-flex: 0 0 83.333333%;\r\n            flex: 0 0 83.333333%;\r\n    max-width: 83.333333%;\r\n  }\r\n  .col-sm-11 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 91.666667%;\r\n        -ms-flex: 0 0 91.666667%;\r\n            flex: 0 0 91.666667%;\r\n    max-width: 91.666667%;\r\n  }\r\n  .col-sm-12 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 100%;\r\n        -ms-flex: 0 0 100%;\r\n            flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n  .pull-sm-0 {\r\n    right: auto;\r\n  }\r\n  .pull-sm-1 {\r\n    right: 8.333333%;\r\n  }\r\n  .pull-sm-2 {\r\n    right: 16.666667%;\r\n  }\r\n  .pull-sm-3 {\r\n    right: 25%;\r\n  }\r\n  .pull-sm-4 {\r\n    right: 33.333333%;\r\n  }\r\n  .pull-sm-5 {\r\n    right: 41.666667%;\r\n  }\r\n  .pull-sm-6 {\r\n    right: 50%;\r\n  }\r\n  .pull-sm-7 {\r\n    right: 58.333333%;\r\n  }\r\n  .pull-sm-8 {\r\n    right: 66.666667%;\r\n  }\r\n  .pull-sm-9 {\r\n    right: 75%;\r\n  }\r\n  .pull-sm-10 {\r\n    right: 83.333333%;\r\n  }\r\n  .pull-sm-11 {\r\n    right: 91.666667%;\r\n  }\r\n  .pull-sm-12 {\r\n    right: 100%;\r\n  }\r\n  .push-sm-0 {\r\n    left: auto;\r\n  }\r\n  .push-sm-1 {\r\n    left: 8.333333%;\r\n  }\r\n  .push-sm-2 {\r\n    left: 16.666667%;\r\n  }\r\n  .push-sm-3 {\r\n    left: 25%;\r\n  }\r\n  .push-sm-4 {\r\n    left: 33.333333%;\r\n  }\r\n  .push-sm-5 {\r\n    left: 41.666667%;\r\n  }\r\n  .push-sm-6 {\r\n    left: 50%;\r\n  }\r\n  .push-sm-7 {\r\n    left: 58.333333%;\r\n  }\r\n  .push-sm-8 {\r\n    left: 66.666667%;\r\n  }\r\n  .push-sm-9 {\r\n    left: 75%;\r\n  }\r\n  .push-sm-10 {\r\n    left: 83.333333%;\r\n  }\r\n  .push-sm-11 {\r\n    left: 91.666667%;\r\n  }\r\n  .push-sm-12 {\r\n    left: 100%;\r\n  }\r\n  .offset-sm-0 {\r\n    margin-left: 0%;\r\n  }\r\n  .offset-sm-1 {\r\n    margin-left: 8.333333%;\r\n  }\r\n  .offset-sm-2 {\r\n    margin-left: 16.666667%;\r\n  }\r\n  .offset-sm-3 {\r\n    margin-left: 25%;\r\n  }\r\n  .offset-sm-4 {\r\n    margin-left: 33.333333%;\r\n  }\r\n  .offset-sm-5 {\r\n    margin-left: 41.666667%;\r\n  }\r\n  .offset-sm-6 {\r\n    margin-left: 50%;\r\n  }\r\n  .offset-sm-7 {\r\n    margin-left: 58.333333%;\r\n  }\r\n  .offset-sm-8 {\r\n    margin-left: 66.666667%;\r\n  }\r\n  .offset-sm-9 {\r\n    margin-left: 75%;\r\n  }\r\n  .offset-sm-10 {\r\n    margin-left: 83.333333%;\r\n  }\r\n  .offset-sm-11 {\r\n    margin-left: 91.666667%;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .col-md {\r\n    -webkit-flex-basis: 0;\r\n        -ms-flex-preferred-size: 0;\r\n            flex-basis: 0;\r\n    -webkit-box-flex: 1;\r\n    -webkit-flex-grow: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n    max-width: 100%;\r\n  }\r\n  .col-md-auto {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 auto;\r\n        -ms-flex: 0 0 auto;\r\n            flex: 0 0 auto;\r\n    width: auto;\r\n  }\r\n  .col-md-1 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 8.333333%;\r\n        -ms-flex: 0 0 8.333333%;\r\n            flex: 0 0 8.333333%;\r\n    max-width: 8.333333%;\r\n  }\r\n  .col-md-2 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 16.666667%;\r\n        -ms-flex: 0 0 16.666667%;\r\n            flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n  }\r\n  .col-md-3 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 25%;\r\n        -ms-flex: 0 0 25%;\r\n            flex: 0 0 25%;\r\n    max-width: 25%;\r\n  }\r\n  .col-md-4 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 33.333333%;\r\n        -ms-flex: 0 0 33.333333%;\r\n            flex: 0 0 33.333333%;\r\n    max-width: 33.333333%;\r\n  }\r\n  .col-md-5 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 41.666667%;\r\n        -ms-flex: 0 0 41.666667%;\r\n            flex: 0 0 41.666667%;\r\n    max-width: 41.666667%;\r\n  }\r\n  .col-md-6 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 50%;\r\n        -ms-flex: 0 0 50%;\r\n            flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n  .col-md-7 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 58.333333%;\r\n        -ms-flex: 0 0 58.333333%;\r\n            flex: 0 0 58.333333%;\r\n    max-width: 58.333333%;\r\n  }\r\n  .col-md-8 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 66.666667%;\r\n        -ms-flex: 0 0 66.666667%;\r\n            flex: 0 0 66.666667%;\r\n    max-width: 66.666667%;\r\n  }\r\n  .col-md-9 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 75%;\r\n        -ms-flex: 0 0 75%;\r\n            flex: 0 0 75%;\r\n    max-width: 75%;\r\n  }\r\n  .col-md-10 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 83.333333%;\r\n        -ms-flex: 0 0 83.333333%;\r\n            flex: 0 0 83.333333%;\r\n    max-width: 83.333333%;\r\n  }\r\n  .col-md-11 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 91.666667%;\r\n        -ms-flex: 0 0 91.666667%;\r\n            flex: 0 0 91.666667%;\r\n    max-width: 91.666667%;\r\n  }\r\n  .col-md-12 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 100%;\r\n        -ms-flex: 0 0 100%;\r\n            flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n  .pull-md-0 {\r\n    right: auto;\r\n  }\r\n  .pull-md-1 {\r\n    right: 8.333333%;\r\n  }\r\n  .pull-md-2 {\r\n    right: 16.666667%;\r\n  }\r\n  .pull-md-3 {\r\n    right: 25%;\r\n  }\r\n  .pull-md-4 {\r\n    right: 33.333333%;\r\n  }\r\n  .pull-md-5 {\r\n    right: 41.666667%;\r\n  }\r\n  .pull-md-6 {\r\n    right: 50%;\r\n  }\r\n  .pull-md-7 {\r\n    right: 58.333333%;\r\n  }\r\n  .pull-md-8 {\r\n    right: 66.666667%;\r\n  }\r\n  .pull-md-9 {\r\n    right: 75%;\r\n  }\r\n  .pull-md-10 {\r\n    right: 83.333333%;\r\n  }\r\n  .pull-md-11 {\r\n    right: 91.666667%;\r\n  }\r\n  .pull-md-12 {\r\n    right: 100%;\r\n  }\r\n  .push-md-0 {\r\n    left: auto;\r\n  }\r\n  .push-md-1 {\r\n    left: 8.333333%;\r\n  }\r\n  .push-md-2 {\r\n    left: 16.666667%;\r\n  }\r\n  .push-md-3 {\r\n    left: 25%;\r\n  }\r\n  .push-md-4 {\r\n    left: 33.333333%;\r\n  }\r\n  .push-md-5 {\r\n    left: 41.666667%;\r\n  }\r\n  .push-md-6 {\r\n    left: 50%;\r\n  }\r\n  .push-md-7 {\r\n    left: 58.333333%;\r\n  }\r\n  .push-md-8 {\r\n    left: 66.666667%;\r\n  }\r\n  .push-md-9 {\r\n    left: 75%;\r\n  }\r\n  .push-md-10 {\r\n    left: 83.333333%;\r\n  }\r\n  .push-md-11 {\r\n    left: 91.666667%;\r\n  }\r\n  .push-md-12 {\r\n    left: 100%;\r\n  }\r\n  .offset-md-0 {\r\n    margin-left: 0%;\r\n  }\r\n  .offset-md-1 {\r\n    margin-left: 8.333333%;\r\n  }\r\n  .offset-md-2 {\r\n    margin-left: 16.666667%;\r\n  }\r\n  .offset-md-3 {\r\n    margin-left: 25%;\r\n  }\r\n  .offset-md-4 {\r\n    margin-left: 33.333333%;\r\n  }\r\n  .offset-md-5 {\r\n    margin-left: 41.666667%;\r\n  }\r\n  .offset-md-6 {\r\n    margin-left: 50%;\r\n  }\r\n  .offset-md-7 {\r\n    margin-left: 58.333333%;\r\n  }\r\n  .offset-md-8 {\r\n    margin-left: 66.666667%;\r\n  }\r\n  .offset-md-9 {\r\n    margin-left: 75%;\r\n  }\r\n  .offset-md-10 {\r\n    margin-left: 83.333333%;\r\n  }\r\n  .offset-md-11 {\r\n    margin-left: 91.666667%;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .col-lg {\r\n    -webkit-flex-basis: 0;\r\n        -ms-flex-preferred-size: 0;\r\n            flex-basis: 0;\r\n    -webkit-box-flex: 1;\r\n    -webkit-flex-grow: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n    max-width: 100%;\r\n  }\r\n  .col-lg-auto {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 auto;\r\n        -ms-flex: 0 0 auto;\r\n            flex: 0 0 auto;\r\n    width: auto;\r\n  }\r\n  .col-lg-1 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 8.333333%;\r\n        -ms-flex: 0 0 8.333333%;\r\n            flex: 0 0 8.333333%;\r\n    max-width: 8.333333%;\r\n  }\r\n  .col-lg-2 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 16.666667%;\r\n        -ms-flex: 0 0 16.666667%;\r\n            flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n  }\r\n  .col-lg-3 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 25%;\r\n        -ms-flex: 0 0 25%;\r\n            flex: 0 0 25%;\r\n    max-width: 25%;\r\n  }\r\n  .col-lg-4 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 33.333333%;\r\n        -ms-flex: 0 0 33.333333%;\r\n            flex: 0 0 33.333333%;\r\n    max-width: 33.333333%;\r\n  }\r\n  .col-lg-5 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 41.666667%;\r\n        -ms-flex: 0 0 41.666667%;\r\n            flex: 0 0 41.666667%;\r\n    max-width: 41.666667%;\r\n  }\r\n  .col-lg-6 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 50%;\r\n        -ms-flex: 0 0 50%;\r\n            flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n  .col-lg-7 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 58.333333%;\r\n        -ms-flex: 0 0 58.333333%;\r\n            flex: 0 0 58.333333%;\r\n    max-width: 58.333333%;\r\n  }\r\n  .col-lg-8 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 66.666667%;\r\n        -ms-flex: 0 0 66.666667%;\r\n            flex: 0 0 66.666667%;\r\n    max-width: 66.666667%;\r\n  }\r\n  .col-lg-9 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 75%;\r\n        -ms-flex: 0 0 75%;\r\n            flex: 0 0 75%;\r\n    max-width: 75%;\r\n  }\r\n  .col-lg-10 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 83.333333%;\r\n        -ms-flex: 0 0 83.333333%;\r\n            flex: 0 0 83.333333%;\r\n    max-width: 83.333333%;\r\n  }\r\n  .col-lg-11 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 91.666667%;\r\n        -ms-flex: 0 0 91.666667%;\r\n            flex: 0 0 91.666667%;\r\n    max-width: 91.666667%;\r\n  }\r\n  .col-lg-12 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 100%;\r\n        -ms-flex: 0 0 100%;\r\n            flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n  .pull-lg-0 {\r\n    right: auto;\r\n  }\r\n  .pull-lg-1 {\r\n    right: 8.333333%;\r\n  }\r\n  .pull-lg-2 {\r\n    right: 16.666667%;\r\n  }\r\n  .pull-lg-3 {\r\n    right: 25%;\r\n  }\r\n  .pull-lg-4 {\r\n    right: 33.333333%;\r\n  }\r\n  .pull-lg-5 {\r\n    right: 41.666667%;\r\n  }\r\n  .pull-lg-6 {\r\n    right: 50%;\r\n  }\r\n  .pull-lg-7 {\r\n    right: 58.333333%;\r\n  }\r\n  .pull-lg-8 {\r\n    right: 66.666667%;\r\n  }\r\n  .pull-lg-9 {\r\n    right: 75%;\r\n  }\r\n  .pull-lg-10 {\r\n    right: 83.333333%;\r\n  }\r\n  .pull-lg-11 {\r\n    right: 91.666667%;\r\n  }\r\n  .pull-lg-12 {\r\n    right: 100%;\r\n  }\r\n  .push-lg-0 {\r\n    left: auto;\r\n  }\r\n  .push-lg-1 {\r\n    left: 8.333333%;\r\n  }\r\n  .push-lg-2 {\r\n    left: 16.666667%;\r\n  }\r\n  .push-lg-3 {\r\n    left: 25%;\r\n  }\r\n  .push-lg-4 {\r\n    left: 33.333333%;\r\n  }\r\n  .push-lg-5 {\r\n    left: 41.666667%;\r\n  }\r\n  .push-lg-6 {\r\n    left: 50%;\r\n  }\r\n  .push-lg-7 {\r\n    left: 58.333333%;\r\n  }\r\n  .push-lg-8 {\r\n    left: 66.666667%;\r\n  }\r\n  .push-lg-9 {\r\n    left: 75%;\r\n  }\r\n  .push-lg-10 {\r\n    left: 83.333333%;\r\n  }\r\n  .push-lg-11 {\r\n    left: 91.666667%;\r\n  }\r\n  .push-lg-12 {\r\n    left: 100%;\r\n  }\r\n  .offset-lg-0 {\r\n    margin-left: 0%;\r\n  }\r\n  .offset-lg-1 {\r\n    margin-left: 8.333333%;\r\n  }\r\n  .offset-lg-2 {\r\n    margin-left: 16.666667%;\r\n  }\r\n  .offset-lg-3 {\r\n    margin-left: 25%;\r\n  }\r\n  .offset-lg-4 {\r\n    margin-left: 33.333333%;\r\n  }\r\n  .offset-lg-5 {\r\n    margin-left: 41.666667%;\r\n  }\r\n  .offset-lg-6 {\r\n    margin-left: 50%;\r\n  }\r\n  .offset-lg-7 {\r\n    margin-left: 58.333333%;\r\n  }\r\n  .offset-lg-8 {\r\n    margin-left: 66.666667%;\r\n  }\r\n  .offset-lg-9 {\r\n    margin-left: 75%;\r\n  }\r\n  .offset-lg-10 {\r\n    margin-left: 83.333333%;\r\n  }\r\n  .offset-lg-11 {\r\n    margin-left: 91.666667%;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .col-xl {\r\n    -webkit-flex-basis: 0;\r\n        -ms-flex-preferred-size: 0;\r\n            flex-basis: 0;\r\n    -webkit-box-flex: 1;\r\n    -webkit-flex-grow: 1;\r\n        -ms-flex-positive: 1;\r\n            flex-grow: 1;\r\n    max-width: 100%;\r\n  }\r\n  .col-xl-auto {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 auto;\r\n        -ms-flex: 0 0 auto;\r\n            flex: 0 0 auto;\r\n    width: auto;\r\n  }\r\n  .col-xl-1 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 8.333333%;\r\n        -ms-flex: 0 0 8.333333%;\r\n            flex: 0 0 8.333333%;\r\n    max-width: 8.333333%;\r\n  }\r\n  .col-xl-2 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 16.666667%;\r\n        -ms-flex: 0 0 16.666667%;\r\n            flex: 0 0 16.666667%;\r\n    max-width: 16.666667%;\r\n  }\r\n  .col-xl-3 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 25%;\r\n        -ms-flex: 0 0 25%;\r\n            flex: 0 0 25%;\r\n    max-width: 25%;\r\n  }\r\n  .col-xl-4 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 33.333333%;\r\n        -ms-flex: 0 0 33.333333%;\r\n            flex: 0 0 33.333333%;\r\n    max-width: 33.333333%;\r\n  }\r\n  .col-xl-5 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 41.666667%;\r\n        -ms-flex: 0 0 41.666667%;\r\n            flex: 0 0 41.666667%;\r\n    max-width: 41.666667%;\r\n  }\r\n  .col-xl-6 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 50%;\r\n        -ms-flex: 0 0 50%;\r\n            flex: 0 0 50%;\r\n    max-width: 50%;\r\n  }\r\n  .col-xl-7 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 58.333333%;\r\n        -ms-flex: 0 0 58.333333%;\r\n            flex: 0 0 58.333333%;\r\n    max-width: 58.333333%;\r\n  }\r\n  .col-xl-8 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 66.666667%;\r\n        -ms-flex: 0 0 66.666667%;\r\n            flex: 0 0 66.666667%;\r\n    max-width: 66.666667%;\r\n  }\r\n  .col-xl-9 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 75%;\r\n        -ms-flex: 0 0 75%;\r\n            flex: 0 0 75%;\r\n    max-width: 75%;\r\n  }\r\n  .col-xl-10 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 83.333333%;\r\n        -ms-flex: 0 0 83.333333%;\r\n            flex: 0 0 83.333333%;\r\n    max-width: 83.333333%;\r\n  }\r\n  .col-xl-11 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 91.666667%;\r\n        -ms-flex: 0 0 91.666667%;\r\n            flex: 0 0 91.666667%;\r\n    max-width: 91.666667%;\r\n  }\r\n  .col-xl-12 {\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 100%;\r\n        -ms-flex: 0 0 100%;\r\n            flex: 0 0 100%;\r\n    max-width: 100%;\r\n  }\r\n  .pull-xl-0 {\r\n    right: auto;\r\n  }\r\n  .pull-xl-1 {\r\n    right: 8.333333%;\r\n  }\r\n  .pull-xl-2 {\r\n    right: 16.666667%;\r\n  }\r\n  .pull-xl-3 {\r\n    right: 25%;\r\n  }\r\n  .pull-xl-4 {\r\n    right: 33.333333%;\r\n  }\r\n  .pull-xl-5 {\r\n    right: 41.666667%;\r\n  }\r\n  .pull-xl-6 {\r\n    right: 50%;\r\n  }\r\n  .pull-xl-7 {\r\n    right: 58.333333%;\r\n  }\r\n  .pull-xl-8 {\r\n    right: 66.666667%;\r\n  }\r\n  .pull-xl-9 {\r\n    right: 75%;\r\n  }\r\n  .pull-xl-10 {\r\n    right: 83.333333%;\r\n  }\r\n  .pull-xl-11 {\r\n    right: 91.666667%;\r\n  }\r\n  .pull-xl-12 {\r\n    right: 100%;\r\n  }\r\n  .push-xl-0 {\r\n    left: auto;\r\n  }\r\n  .push-xl-1 {\r\n    left: 8.333333%;\r\n  }\r\n  .push-xl-2 {\r\n    left: 16.666667%;\r\n  }\r\n  .push-xl-3 {\r\n    left: 25%;\r\n  }\r\n  .push-xl-4 {\r\n    left: 33.333333%;\r\n  }\r\n  .push-xl-5 {\r\n    left: 41.666667%;\r\n  }\r\n  .push-xl-6 {\r\n    left: 50%;\r\n  }\r\n  .push-xl-7 {\r\n    left: 58.333333%;\r\n  }\r\n  .push-xl-8 {\r\n    left: 66.666667%;\r\n  }\r\n  .push-xl-9 {\r\n    left: 75%;\r\n  }\r\n  .push-xl-10 {\r\n    left: 83.333333%;\r\n  }\r\n  .push-xl-11 {\r\n    left: 91.666667%;\r\n  }\r\n  .push-xl-12 {\r\n    left: 100%;\r\n  }\r\n  .offset-xl-0 {\r\n    margin-left: 0%;\r\n  }\r\n  .offset-xl-1 {\r\n    margin-left: 8.333333%;\r\n  }\r\n  .offset-xl-2 {\r\n    margin-left: 16.666667%;\r\n  }\r\n  .offset-xl-3 {\r\n    margin-left: 25%;\r\n  }\r\n  .offset-xl-4 {\r\n    margin-left: 33.333333%;\r\n  }\r\n  .offset-xl-5 {\r\n    margin-left: 41.666667%;\r\n  }\r\n  .offset-xl-6 {\r\n    margin-left: 50%;\r\n  }\r\n  .offset-xl-7 {\r\n    margin-left: 58.333333%;\r\n  }\r\n  .offset-xl-8 {\r\n    margin-left: 66.666667%;\r\n  }\r\n  .offset-xl-9 {\r\n    margin-left: 75%;\r\n  }\r\n  .offset-xl-10 {\r\n    margin-left: 83.333333%;\r\n  }\r\n  .offset-xl-11 {\r\n    margin-left: 91.666667%;\r\n  }\r\n}\r\n\r\n.table {\r\n  width: 100%;\r\n  max-width: 100%;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.table th,\r\n.table td {\r\n  padding: 0.75rem;\r\n  vertical-align: top;\r\n  border-top: 1px solid #eceeef;\r\n}\r\n\r\n.table thead th {\r\n  vertical-align: bottom;\r\n  border-bottom: 2px solid #eceeef;\r\n}\r\n\r\n.table tbody + tbody {\r\n  border-top: 2px solid #eceeef;\r\n}\r\n\r\n.table .table {\r\n  background-color: #fff;\r\n}\r\n\r\n.table-sm th,\r\n.table-sm td {\r\n  padding: 0.3rem;\r\n}\r\n\r\n.table-bordered {\r\n  border: 1px solid #eceeef;\r\n}\r\n\r\n.table-bordered th,\r\n.table-bordered td {\r\n  border: 1px solid #eceeef;\r\n}\r\n\r\n.table-bordered thead th,\r\n.table-bordered thead td {\r\n  border-bottom-width: 2px;\r\n}\r\n\r\n.table-striped tbody tr:nth-of-type(odd) {\r\n  background-color: rgba(0, 0, 0, 0.05);\r\n}\r\n\r\n.table-hover tbody tr:hover {\r\n  background-color: rgba(0, 0, 0, 0.075);\r\n}\r\n\r\n.table-active,\r\n.table-active > th,\r\n.table-active > td {\r\n  background-color: rgba(0, 0, 0, 0.075);\r\n}\r\n\r\n.table-hover .table-active:hover {\r\n  background-color: rgba(0, 0, 0, 0.075);\r\n}\r\n\r\n.table-hover .table-active:hover > td,\r\n.table-hover .table-active:hover > th {\r\n  background-color: rgba(0, 0, 0, 0.075);\r\n}\r\n\r\n.table-success,\r\n.table-success > th,\r\n.table-success > td {\r\n  background-color: #dff0d8;\r\n}\r\n\r\n.table-hover .table-success:hover {\r\n  background-color: #d0e9c6;\r\n}\r\n\r\n.table-hover .table-success:hover > td,\r\n.table-hover .table-success:hover > th {\r\n  background-color: #d0e9c6;\r\n}\r\n\r\n.table-info,\r\n.table-info > th,\r\n.table-info > td {\r\n  background-color: #d9edf7;\r\n}\r\n\r\n.table-hover .table-info:hover {\r\n  background-color: #c4e3f3;\r\n}\r\n\r\n.table-hover .table-info:hover > td,\r\n.table-hover .table-info:hover > th {\r\n  background-color: #c4e3f3;\r\n}\r\n\r\n.table-warning,\r\n.table-warning > th,\r\n.table-warning > td {\r\n  background-color: #fcf8e3;\r\n}\r\n\r\n.table-hover .table-warning:hover {\r\n  background-color: #faf2cc;\r\n}\r\n\r\n.table-hover .table-warning:hover > td,\r\n.table-hover .table-warning:hover > th {\r\n  background-color: #faf2cc;\r\n}\r\n\r\n.table-danger,\r\n.table-danger > th,\r\n.table-danger > td {\r\n  background-color: #f2dede;\r\n}\r\n\r\n.table-hover .table-danger:hover {\r\n  background-color: #ebcccc;\r\n}\r\n\r\n.table-hover .table-danger:hover > td,\r\n.table-hover .table-danger:hover > th {\r\n  background-color: #ebcccc;\r\n}\r\n\r\n.thead-inverse th {\r\n  color: #fff;\r\n  background-color: #292b2c;\r\n}\r\n\r\n.thead-default th {\r\n  color: #464a4c;\r\n  background-color: #eceeef;\r\n}\r\n\r\n.table-inverse {\r\n  color: #fff;\r\n  background-color: #292b2c;\r\n}\r\n\r\n.table-inverse th,\r\n.table-inverse td,\r\n.table-inverse thead th {\r\n  border-color: #fff;\r\n}\r\n\r\n.table-inverse.table-bordered {\r\n  border: 0;\r\n}\r\n\r\n.table-responsive {\r\n  display: block;\r\n  width: 100%;\r\n  overflow-x: auto;\r\n  -ms-overflow-style: -ms-autohiding-scrollbar;\r\n}\r\n\r\n.table-responsive.table-bordered {\r\n  border: 0;\r\n}\r\n\r\n.form-control {\r\n  display: block;\r\n  width: 100%;\r\n  padding: 0.5rem 0.75rem;\r\n  font-size: 1rem;\r\n  line-height: 1.25;\r\n  color: #464a4c;\r\n  background-color: #fff;\r\n  background-image: none;\r\n  -webkit-background-clip: padding-box;\r\n          background-clip: padding-box;\r\n  border: 1px solid rgba(0, 0, 0, 0.15);\r\n  border-radius: 0.25rem;\r\n  -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\r\n  transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\r\n  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\r\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\r\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;\r\n}\r\n\r\n.form-control::-ms-expand {\r\n  background-color: transparent;\r\n  border: 0;\r\n}\r\n\r\n.form-control:focus {\r\n  color: #464a4c;\r\n  background-color: #fff;\r\n  border-color: #5cb3fd;\r\n  outline: none;\r\n}\r\n\r\n.form-control::-webkit-input-placeholder {\r\n  color: #636c72;\r\n  opacity: 1;\r\n}\r\n\r\n.form-control::-moz-placeholder {\r\n  color: #636c72;\r\n  opacity: 1;\r\n}\r\n\r\n.form-control:-ms-input-placeholder {\r\n  color: #636c72;\r\n  opacity: 1;\r\n}\r\n\r\n.form-control::placeholder {\r\n  color: #636c72;\r\n  opacity: 1;\r\n}\r\n\r\n.form-control:disabled, .form-control[readonly] {\r\n  background-color: #eceeef;\r\n  opacity: 1;\r\n}\r\n\r\n.form-control:disabled {\r\n  cursor: not-allowed;\r\n}\r\n\r\nselect.form-control:not([size]):not([multiple]) {\r\n  height: calc(2.25rem + 2px);\r\n}\r\n\r\nselect.form-control:focus::-ms-value {\r\n  color: #464a4c;\r\n  background-color: #fff;\r\n}\r\n\r\n.form-control-file,\r\n.form-control-range {\r\n  display: block;\r\n}\r\n\r\n.col-form-label {\r\n  padding-top: calc(0.5rem - 1px * 2);\r\n  padding-bottom: calc(0.5rem - 1px * 2);\r\n  margin-bottom: 0;\r\n}\r\n\r\n.col-form-label-lg {\r\n  padding-top: calc(0.75rem - 1px * 2);\r\n  padding-bottom: calc(0.75rem - 1px * 2);\r\n  font-size: 1.25rem;\r\n}\r\n\r\n.col-form-label-sm {\r\n  padding-top: calc(0.25rem - 1px * 2);\r\n  padding-bottom: calc(0.25rem - 1px * 2);\r\n  font-size: 0.875rem;\r\n}\r\n\r\n.col-form-legend {\r\n  padding-top: 0.5rem;\r\n  padding-bottom: 0.5rem;\r\n  margin-bottom: 0;\r\n  font-size: 1rem;\r\n}\r\n\r\n.form-control-static {\r\n  padding-top: 0.5rem;\r\n  padding-bottom: 0.5rem;\r\n  margin-bottom: 0;\r\n  line-height: 1.25;\r\n  border: solid transparent;\r\n  border-width: 1px 0;\r\n}\r\n\r\n.form-control-static.form-control-sm, .input-group-sm > .form-control-static.form-control,\r\n.input-group-sm > .form-control-static.input-group-addon,\r\n.input-group-sm > .input-group-btn > .form-control-static.btn, .form-control-static.form-control-lg, .input-group-lg > .form-control-static.form-control,\r\n.input-group-lg > .form-control-static.input-group-addon,\r\n.input-group-lg > .input-group-btn > .form-control-static.btn {\r\n  padding-right: 0;\r\n  padding-left: 0;\r\n}\r\n\r\n.form-control-sm, .input-group-sm > .form-control,\r\n.input-group-sm > .input-group-addon,\r\n.input-group-sm > .input-group-btn > .btn {\r\n  padding: 0.25rem 0.5rem;\r\n  font-size: 0.875rem;\r\n  border-radius: 0.2rem;\r\n}\r\n\r\nselect.form-control-sm:not([size]):not([multiple]), .input-group-sm > select.form-control:not([size]):not([multiple]),\r\n.input-group-sm > select.input-group-addon:not([size]):not([multiple]),\r\n.input-group-sm > .input-group-btn > select.btn:not([size]):not([multiple]) {\r\n  height: 1.8125rem;\r\n}\r\n\r\n.form-control-lg, .input-group-lg > .form-control,\r\n.input-group-lg > .input-group-addon,\r\n.input-group-lg > .input-group-btn > .btn {\r\n  padding: 0.75rem 1.5rem;\r\n  font-size: 1.25rem;\r\n  border-radius: 0.3rem;\r\n}\r\n\r\nselect.form-control-lg:not([size]):not([multiple]), .input-group-lg > select.form-control:not([size]):not([multiple]),\r\n.input-group-lg > select.input-group-addon:not([size]):not([multiple]),\r\n.input-group-lg > .input-group-btn > select.btn:not([size]):not([multiple]) {\r\n  height: 3.166667rem;\r\n}\r\n\r\n.form-group {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.form-text {\r\n  display: block;\r\n  margin-top: 0.25rem;\r\n}\r\n\r\n.form-check {\r\n  position: relative;\r\n  display: block;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.form-check.disabled .form-check-label {\r\n  color: #636c72;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.form-check-label {\r\n  padding-left: 1.25rem;\r\n  margin-bottom: 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.form-check-input {\r\n  position: absolute;\r\n  margin-top: 0.25rem;\r\n  margin-left: -1.25rem;\r\n}\r\n\r\n.form-check-input:only-child {\r\n  position: static;\r\n}\r\n\r\n.form-check-inline {\r\n  display: inline-block;\r\n}\r\n\r\n.form-check-inline .form-check-label {\r\n  vertical-align: middle;\r\n}\r\n\r\n.form-check-inline + .form-check-inline {\r\n  margin-left: 0.75rem;\r\n}\r\n\r\n.form-control-feedback {\r\n  margin-top: 0.25rem;\r\n}\r\n\r\n.form-control-success,\r\n.form-control-warning,\r\n.form-control-danger {\r\n  padding-right: 2.25rem;\r\n  background-repeat: no-repeat;\r\n  background-position: center right 0.5625rem;\r\n  -webkit-background-size: 1.125rem 1.125rem;\r\n          background-size: 1.125rem 1.125rem;\r\n}\r\n\r\n.has-success .form-control-feedback,\r\n.has-success .form-control-label,\r\n.has-success .col-form-label,\r\n.has-success .form-check-label,\r\n.has-success .custom-control {\r\n  color: #5cb85c;\r\n}\r\n\r\n.has-success .form-control {\r\n  border-color: #5cb85c;\r\n}\r\n\r\n.has-success .input-group-addon {\r\n  color: #5cb85c;\r\n  border-color: #5cb85c;\r\n  background-color: #eaf6ea;\r\n}\r\n\r\n.has-success .form-control-success {\r\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%235cb85c' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3E%3C/svg%3E\");\r\n}\r\n\r\n.has-warning .form-control-feedback,\r\n.has-warning .form-control-label,\r\n.has-warning .col-form-label,\r\n.has-warning .form-check-label,\r\n.has-warning .custom-control {\r\n  color: #f0ad4e;\r\n}\r\n\r\n.has-warning .form-control {\r\n  border-color: #f0ad4e;\r\n}\r\n\r\n.has-warning .input-group-addon {\r\n  color: #f0ad4e;\r\n  border-color: #f0ad4e;\r\n  background-color: white;\r\n}\r\n\r\n.has-warning .form-control-warning {\r\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23f0ad4e' d='M4.4 5.324h-.8v-2.46h.8zm0 1.42h-.8V5.89h.8zM3.76.63L.04 7.075c-.115.2.016.425.26.426h7.397c.242 0 .372-.226.258-.426C6.726 4.924 5.47 2.79 4.253.63c-.113-.174-.39-.174-.494 0z'/%3E%3C/svg%3E\");\r\n}\r\n\r\n.has-danger .form-control-feedback,\r\n.has-danger .form-control-label,\r\n.has-danger .col-form-label,\r\n.has-danger .form-check-label,\r\n.has-danger .custom-control {\r\n  color: #d9534f;\r\n}\r\n\r\n.has-danger .form-control {\r\n  border-color: #d9534f;\r\n}\r\n\r\n.has-danger .input-group-addon {\r\n  color: #d9534f;\r\n  border-color: #d9534f;\r\n  background-color: #fdf7f7;\r\n}\r\n\r\n.has-danger .form-control-danger {\r\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23d9534f' viewBox='-2 -2 7 7'%3E%3Cpath stroke='%23d9534f' d='M0 0l3 3m0-3L0 3'/%3E%3Ccircle r='.5'/%3E%3Ccircle cx='3' r='.5'/%3E%3Ccircle cy='3' r='.5'/%3E%3Ccircle cx='3' cy='3' r='.5'/%3E%3C/svg%3E\");\r\n}\r\n\r\n.form-inline {\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-flex-flow: row wrap;\r\n      -ms-flex-flow: row wrap;\r\n          flex-flow: row wrap;\r\n  -webkit-box-align: center;\r\n  -webkit-align-items: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.form-inline .form-check {\r\n  width: 100%;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .form-inline label {\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n    -webkit-align-items: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n    -webkit-justify-content: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    margin-bottom: 0;\r\n  }\r\n  .form-inline .form-group {\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-flex: 0;\r\n    -webkit-flex: 0 0 auto;\r\n        -ms-flex: 0 0 auto;\r\n            flex: 0 0 auto;\r\n    -webkit-flex-flow: row wrap;\r\n        -ms-flex-flow: row wrap;\r\n            flex-flow: row wrap;\r\n    -webkit-box-align: center;\r\n    -webkit-align-items: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    margin-bottom: 0;\r\n  }\r\n  .form-inline .form-control {\r\n    display: inline-block;\r\n    width: auto;\r\n    vertical-align: middle;\r\n  }\r\n  .form-inline .form-control-static {\r\n    display: inline-block;\r\n  }\r\n  .form-inline .input-group {\r\n    width: auto;\r\n  }\r\n  .form-inline .form-control-label {\r\n    margin-bottom: 0;\r\n    vertical-align: middle;\r\n  }\r\n  .form-inline .form-check {\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n    -webkit-align-items: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n    -webkit-justify-content: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    width: auto;\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n  }\r\n  .form-inline .form-check-label {\r\n    padding-left: 0;\r\n  }\r\n  .form-inline .form-check-input {\r\n    position: relative;\r\n    margin-top: 0;\r\n    margin-right: 0.25rem;\r\n    margin-left: 0;\r\n  }\r\n  .form-inline .custom-control {\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n    -webkit-align-items: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n    -webkit-justify-content: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    padding-left: 0;\r\n  }\r\n  .form-inline .custom-control-indicator {\r\n    position: static;\r\n    display: inline-block;\r\n    margin-right: 0.25rem;\r\n    vertical-align: text-bottom;\r\n  }\r\n  .form-inline .has-feedback .form-control-feedback {\r\n    top: 0;\r\n  }\r\n}\r\n\r\n.btn {\r\n  display: inline-block;\r\n  font-weight: normal;\r\n  line-height: 1.25;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  vertical-align: middle;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  border: 1px solid transparent;\r\n  padding: 0.5rem 1rem;\r\n  font-size: 1rem;\r\n  border-radius: 0.25rem;\r\n  -webkit-transition: all 0.2s ease-in-out;\r\n  -o-transition: all 0.2s ease-in-out;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n\r\n.btn:focus, .btn:hover {\r\n  text-decoration: none;\r\n}\r\n\r\n.btn:focus, .btn.focus {\r\n  outline: 0;\r\n  -webkit-box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.25);\r\n          box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.25);\r\n}\r\n\r\n.btn.disabled, .btn:disabled {\r\n  cursor: not-allowed;\r\n  opacity: .65;\r\n}\r\n\r\n.btn:active, .btn.active {\r\n  background-image: none;\r\n}\r\n\r\na.btn.disabled,\r\nfieldset[disabled] a.btn {\r\n  pointer-events: none;\r\n}\r\n\r\n.btn-primary {\r\n  color: #fff;\r\n  background-color: #0275d8;\r\n  border-color: #0275d8;\r\n}\r\n\r\n.btn-primary:hover {\r\n  color: #fff;\r\n  background-color: #025aa5;\r\n  border-color: #01549b;\r\n}\r\n\r\n.btn-primary:focus, .btn-primary.focus {\r\n  -webkit-box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.5);\r\n          box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.5);\r\n}\r\n\r\n.btn-primary.disabled, .btn-primary:disabled {\r\n  background-color: #0275d8;\r\n  border-color: #0275d8;\r\n}\r\n\r\n.btn-primary:active, .btn-primary.active,\r\n.show > .btn-primary.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #025aa5;\r\n  background-image: none;\r\n  border-color: #01549b;\r\n}\r\n\r\n.btn-secondary {\r\n  color: #292b2c;\r\n  background-color: #fff;\r\n  border-color: #ccc;\r\n}\r\n\r\n.btn-secondary:hover {\r\n  color: #292b2c;\r\n  background-color: #e6e6e6;\r\n  border-color: #adadad;\r\n}\r\n\r\n.btn-secondary:focus, .btn-secondary.focus {\r\n  -webkit-box-shadow: 0 0 0 2px rgba(204, 204, 204, 0.5);\r\n          box-shadow: 0 0 0 2px rgba(204, 204, 204, 0.5);\r\n}\r\n\r\n.btn-secondary.disabled, .btn-secondary:disabled {\r\n  background-color: #fff;\r\n  border-color: #ccc;\r\n}\r\n\r\n.btn-secondary:active, .btn-secondary.active,\r\n.show > .btn-secondary.dropdown-toggle {\r\n  color: #292b2c;\r\n  background-color: #e6e6e6;\r\n  background-image: none;\r\n  border-color: #adadad;\r\n}\r\n\r\n.btn-info {\r\n  color: #fff;\r\n  background-color: #5bc0de;\r\n  border-color: #5bc0de;\r\n}\r\n\r\n.btn-info:hover {\r\n  color: #fff;\r\n  background-color: #31b0d5;\r\n  border-color: #2aabd2;\r\n}\r\n\r\n.btn-info:focus, .btn-info.focus {\r\n  -webkit-box-shadow: 0 0 0 2px rgba(91, 192, 222, 0.5);\r\n          box-shadow: 0 0 0 2px rgba(91, 192, 222, 0.5);\r\n}\r\n\r\n.btn-info.disabled, .btn-info:disabled {\r\n  background-color: #5bc0de;\r\n  border-color: #5bc0de;\r\n}\r\n\r\n.btn-info:active, .btn-info.active,\r\n.show > .btn-info.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #31b0d5;\r\n  background-image: none;\r\n  border-color: #2aabd2;\r\n}\r\n\r\n.btn-success {\r\n  color: #fff;\r\n  background-color: #5cb85c;\r\n  border-color: #5cb85c;\r\n}\r\n\r\n.btn-success:hover {\r\n  color: #fff;\r\n  background-color: #449d44;\r\n  border-color: #419641;\r\n}\r\n\r\n.btn-success:focus, .btn-success.focus {\r\n  -webkit-box-shadow: 0 0 0 2px rgba(92, 184, 92, 0.5);\r\n          box-shadow: 0 0 0 2px rgba(92, 184, 92, 0.5);\r\n}\r\n\r\n.btn-success.disabled, .btn-success:disabled {\r\n  background-color: #5cb85c;\r\n  border-color: #5cb85c;\r\n}\r\n\r\n.btn-success:active, .btn-success.active,\r\n.show > .btn-success.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #449d44;\r\n  background-image: none;\r\n  border-color: #419641;\r\n}\r\n\r\n.btn-warning {\r\n  color: #fff;\r\n  background-color: #f0ad4e;\r\n  border-color: #f0ad4e;\r\n}\r\n\r\n.btn-warning:hover {\r\n  color: #fff;\r\n  background-color: #ec971f;\r\n  border-color: #eb9316;\r\n}\r\n\r\n.btn-warning:focus, .btn-warning.focus {\r\n  -webkit-box-shadow: 0 0 0 2px rgba(240, 173, 78, 0.5);\r\n          box-shadow: 0 0 0 2px rgba(240, 173, 78, 0.5);\r\n}\r\n\r\n.btn-warning.disabled, .btn-warning:disabled {\r\n  background-color: #f0ad4e;\r\n  border-color: #f0ad4e;\r\n}\r\n\r\n.btn-warning:active, .btn-warning.active,\r\n.show > .btn-warning.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #ec971f;\r\n  background-image: none;\r\n  border-color: #eb9316;\r\n}\r\n\r\n.btn-danger {\r\n  color: #fff;\r\n  background-color: #d9534f;\r\n  border-color: #d9534f;\r\n}\r\n\r\n.btn-danger:hover {\r\n  color: #fff;\r\n  background-color: #c9302c;\r\n  border-color: #c12e2a;\r\n}\r\n\r\n.btn-danger:focus, .btn-danger.focus {\r\n  -webkit-box-shadow: 0 0 0 2px rgba(217, 83, 79, 0.5);\r\n          box-shadow: 0 0 0 2px rgba(217, 83, 79, 0.5);\r\n}\r\n\r\n.btn-danger.disabled, .btn-danger:disabled {\r\n  background-color: #d9534f;\r\n  border-color: #d9534f;\r\n}\r\n\r\n.btn-danger:active, .btn-danger.active,\r\n.show > .btn-danger.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #c9302c;\r\n  background-image: none;\r\n  border-color: #c12e2a;\r\n}\r\n\r\n.btn-outline-primary {\r\n  color: #0275d8;\r\n  background-image: none;\r\n  background-color: transparent;\r\n  border-color: #0275d8;\r\n}\r\n\r\n.btn-outline-primary:hover {\r\n  color: #fff;\r\n  background-color: #0275d8;\r\n  border-color: #0275d8;\r\n}\r\n\r\n.btn-outline-primary:focus, .btn-outline-primary.focus {\r\n  -webkit-box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.5);\r\n          box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.5);\r\n}\r\n\r\n.btn-outline-primary.disabled, .btn-outline-primary:disabled {\r\n  color: #0275d8;\r\n  background-color: transparent;\r\n}\r\n\r\n.btn-outline-primary:active, .btn-outline-primary.active,\r\n.show > .btn-outline-primary.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #0275d8;\r\n  border-color: #0275d8;\r\n}\r\n\r\n.btn-outline-secondary {\r\n  color: #ccc;\r\n  background-image: none;\r\n  background-color: transparent;\r\n  border-color: #ccc;\r\n}\r\n\r\n.btn-outline-secondary:hover {\r\n  color: #fff;\r\n  background-color: #ccc;\r\n  border-color: #ccc;\r\n}\r\n\r\n.btn-outline-secondary:focus, .btn-outline-secondary.focus {\r\n  -webkit-box-shadow: 0 0 0 2px rgba(204, 204, 204, 0.5);\r\n          box-shadow: 0 0 0 2px rgba(204, 204, 204, 0.5);\r\n}\r\n\r\n.btn-outline-secondary.disabled, .btn-outline-secondary:disabled {\r\n  color: #ccc;\r\n  background-color: transparent;\r\n}\r\n\r\n.btn-outline-secondary:active, .btn-outline-secondary.active,\r\n.show > .btn-outline-secondary.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #ccc;\r\n  border-color: #ccc;\r\n}\r\n\r\n.btn-outline-info {\r\n  color: #5bc0de;\r\n  background-image: none;\r\n  background-color: transparent;\r\n  border-color: #5bc0de;\r\n}\r\n\r\n.btn-outline-info:hover {\r\n  color: #fff;\r\n  background-color: #5bc0de;\r\n  border-color: #5bc0de;\r\n}\r\n\r\n.btn-outline-info:focus, .btn-outline-info.focus {\r\n  -webkit-box-shadow: 0 0 0 2px rgba(91, 192, 222, 0.5);\r\n          box-shadow: 0 0 0 2px rgba(91, 192, 222, 0.5);\r\n}\r\n\r\n.btn-outline-info.disabled, .btn-outline-info:disabled {\r\n  color: #5bc0de;\r\n  background-color: transparent;\r\n}\r\n\r\n.btn-outline-info:active, .btn-outline-info.active,\r\n.show > .btn-outline-info.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #5bc0de;\r\n  border-color: #5bc0de;\r\n}\r\n\r\n.btn-outline-success {\r\n  color: #5cb85c;\r\n  background-image: none;\r\n  background-color: transparent;\r\n  border-color: #5cb85c;\r\n}\r\n\r\n.btn-outline-success:hover {\r\n  color: #fff;\r\n  background-color: #5cb85c;\r\n  border-color: #5cb85c;\r\n}\r\n\r\n.btn-outline-success:focus, .btn-outline-success.focus {\r\n  -webkit-box-shadow: 0 0 0 2px rgba(92, 184, 92, 0.5);\r\n          box-shadow: 0 0 0 2px rgba(92, 184, 92, 0.5);\r\n}\r\n\r\n.btn-outline-success.disabled, .btn-outline-success:disabled {\r\n  color: #5cb85c;\r\n  background-color: transparent;\r\n}\r\n\r\n.btn-outline-success:active, .btn-outline-success.active,\r\n.show > .btn-outline-success.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #5cb85c;\r\n  border-color: #5cb85c;\r\n}\r\n\r\n.btn-outline-warning {\r\n  color: #f0ad4e;\r\n  background-image: none;\r\n  background-color: transparent;\r\n  border-color: #f0ad4e;\r\n}\r\n\r\n.btn-outline-warning:hover {\r\n  color: #fff;\r\n  background-color: #f0ad4e;\r\n  border-color: #f0ad4e;\r\n}\r\n\r\n.btn-outline-warning:focus, .btn-outline-warning.focus {\r\n  -webkit-box-shadow: 0 0 0 2px rgba(240, 173, 78, 0.5);\r\n          box-shadow: 0 0 0 2px rgba(240, 173, 78, 0.5);\r\n}\r\n\r\n.btn-outline-warning.disabled, .btn-outline-warning:disabled {\r\n  color: #f0ad4e;\r\n  background-color: transparent;\r\n}\r\n\r\n.btn-outline-warning:active, .btn-outline-warning.active,\r\n.show > .btn-outline-warning.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #f0ad4e;\r\n  border-color: #f0ad4e;\r\n}\r\n\r\n.btn-outline-danger {\r\n  color: #d9534f;\r\n  background-image: none;\r\n  background-color: transparent;\r\n  border-color: #d9534f;\r\n}\r\n\r\n.btn-outline-danger:hover {\r\n  color: #fff;\r\n  background-color: #d9534f;\r\n  border-color: #d9534f;\r\n}\r\n\r\n.btn-outline-danger:focus, .btn-outline-danger.focus {\r\n  -webkit-box-shadow: 0 0 0 2px rgba(217, 83, 79, 0.5);\r\n          box-shadow: 0 0 0 2px rgba(217, 83, 79, 0.5);\r\n}\r\n\r\n.btn-outline-danger.disabled, .btn-outline-danger:disabled {\r\n  color: #d9534f;\r\n  background-color: transparent;\r\n}\r\n\r\n.btn-outline-danger:active, .btn-outline-danger.active,\r\n.show > .btn-outline-danger.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #d9534f;\r\n  border-color: #d9534f;\r\n}\r\n\r\n.btn-link {\r\n  font-weight: normal;\r\n  color: #0275d8;\r\n  border-radius: 0;\r\n}\r\n\r\n.btn-link, .btn-link:active, .btn-link.active, .btn-link:disabled {\r\n  background-color: transparent;\r\n}\r\n\r\n.btn-link, .btn-link:focus, .btn-link:active {\r\n  border-color: transparent;\r\n}\r\n\r\n.btn-link:hover {\r\n  border-color: transparent;\r\n}\r\n\r\n.btn-link:focus, .btn-link:hover {\r\n  color: #014c8c;\r\n  text-decoration: underline;\r\n  background-color: transparent;\r\n}\r\n\r\n.btn-link:disabled {\r\n  color: #636c72;\r\n}\r\n\r\n.btn-link:disabled:focus, .btn-link:disabled:hover {\r\n  text-decoration: none;\r\n}\r\n\r\n.btn-lg, .btn-group-lg > .btn {\r\n  padding: 0.75rem 1.5rem;\r\n  font-size: 1.25rem;\r\n  border-radius: 0.3rem;\r\n}\r\n\r\n.btn-sm, .btn-group-sm > .btn {\r\n  padding: 0.25rem 0.5rem;\r\n  font-size: 0.875rem;\r\n  border-radius: 0.2rem;\r\n}\r\n\r\n.btn-block {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.btn-block + .btn-block {\r\n  margin-top: 0.5rem;\r\n}\r\n\r\ninput[type=\"submit\"].btn-block,\r\ninput[type=\"reset\"].btn-block,\r\ninput[type=\"button\"].btn-block {\r\n  width: 100%;\r\n}\r\n\r\n.fade {\r\n  opacity: 0;\r\n  -webkit-transition: opacity 0.15s linear;\r\n  -o-transition: opacity 0.15s linear;\r\n  transition: opacity 0.15s linear;\r\n}\r\n\r\n.fade.show {\r\n  opacity: 1;\r\n}\r\n\r\n.collapse {\r\n  display: none;\r\n}\r\n\r\n.collapse.show {\r\n  display: block;\r\n}\r\n\r\ntr.collapse.show {\r\n  display: table-row;\r\n}\r\n\r\ntbody.collapse.show {\r\n  display: table-row-group;\r\n}\r\n\r\n.collapsing {\r\n  position: relative;\r\n  height: 0;\r\n  overflow: hidden;\r\n  -webkit-transition: height 0.35s ease;\r\n  -o-transition: height 0.35s ease;\r\n  transition: height 0.35s ease;\r\n}\r\n\r\n.dropup,\r\n.dropdown {\r\n  position: relative;\r\n}\r\n\r\n.dropdown-toggle::after {\r\n  display: inline-block;\r\n  width: 0;\r\n  height: 0;\r\n  margin-left: 0.3em;\r\n  vertical-align: middle;\r\n  content: \"\";\r\n  border-top: 0.3em solid;\r\n  border-right: 0.3em solid transparent;\r\n  border-left: 0.3em solid transparent;\r\n}\r\n\r\n.dropdown-toggle:focus {\r\n  outline: 0;\r\n}\r\n\r\n.dropup .dropdown-toggle::after {\r\n  border-top: 0;\r\n  border-bottom: 0.3em solid;\r\n}\r\n\r\n.dropdown-menu {\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 0;\r\n  z-index: 1000;\r\n  display: none;\r\n  float: left;\r\n  min-width: 10rem;\r\n  padding: 0.5rem 0;\r\n  margin: 0.125rem 0 0;\r\n  font-size: 1rem;\r\n  color: #292b2c;\r\n  text-align: left;\r\n  list-style: none;\r\n  background-color: #fff;\r\n  -webkit-background-clip: padding-box;\r\n          background-clip: padding-box;\r\n  border: 1px solid rgba(0, 0, 0, 0.15);\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.dropdown-divider {\r\n  height: 1px;\r\n  margin: 0.5rem 0;\r\n  overflow: hidden;\r\n  background-color: #eceeef;\r\n}\r\n\r\n.dropdown-item {\r\n  display: block;\r\n  width: 100%;\r\n  padding: 3px 1.5rem;\r\n  clear: both;\r\n  font-weight: normal;\r\n  color: #292b2c;\r\n  text-align: inherit;\r\n  white-space: nowrap;\r\n  background: none;\r\n  border: 0;\r\n}\r\n\r\n.dropdown-item:focus, .dropdown-item:hover {\r\n  color: #1d1e1f;\r\n  text-decoration: none;\r\n  background-color: #f7f7f9;\r\n}\r\n\r\n.dropdown-item.active, .dropdown-item:active {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  background-color: #0275d8;\r\n}\r\n\r\n.dropdown-item.disabled, .dropdown-item:disabled {\r\n  color: #636c72;\r\n  cursor: not-allowed;\r\n  background-color: transparent;\r\n}\r\n\r\n.show > .dropdown-menu {\r\n  display: block;\r\n}\r\n\r\n.show > a {\r\n  outline: 0;\r\n}\r\n\r\n.dropdown-menu-right {\r\n  right: 0;\r\n  left: auto;\r\n}\r\n\r\n.dropdown-menu-left {\r\n  right: auto;\r\n  left: 0;\r\n}\r\n\r\n.dropdown-header {\r\n  display: block;\r\n  padding: 0.5rem 1.5rem;\r\n  margin-bottom: 0;\r\n  font-size: 0.875rem;\r\n  color: #636c72;\r\n  white-space: nowrap;\r\n}\r\n\r\n.dropdown-backdrop {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 990;\r\n}\r\n\r\n.dropup .dropdown-menu {\r\n  top: auto;\r\n  bottom: 100%;\r\n  margin-bottom: 0.125rem;\r\n}\r\n\r\n.btn-group,\r\n.btn-group-vertical {\r\n  position: relative;\r\n  display: -webkit-inline-box;\r\n  display: -webkit-inline-flex;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  vertical-align: middle;\r\n}\r\n\r\n.btn-group > .btn,\r\n.btn-group-vertical > .btn {\r\n  position: relative;\r\n  -webkit-box-flex: 0;\r\n  -webkit-flex: 0 1 auto;\r\n      -ms-flex: 0 1 auto;\r\n          flex: 0 1 auto;\r\n}\r\n\r\n.btn-group > .btn:hover,\r\n.btn-group-vertical > .btn:hover {\r\n  z-index: 2;\r\n}\r\n\r\n.btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\r\n.btn-group-vertical > .btn:focus,\r\n.btn-group-vertical > .btn:active,\r\n.btn-group-vertical > .btn.active {\r\n  z-index: 2;\r\n}\r\n\r\n.btn-group .btn + .btn,\r\n.btn-group .btn + .btn-group,\r\n.btn-group .btn-group + .btn,\r\n.btn-group .btn-group + .btn-group,\r\n.btn-group-vertical .btn + .btn,\r\n.btn-group-vertical .btn + .btn-group,\r\n.btn-group-vertical .btn-group + .btn,\r\n.btn-group-vertical .btn-group + .btn-group {\r\n  margin-left: -1px;\r\n}\r\n\r\n.btn-toolbar {\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: start;\r\n  -webkit-justify-content: flex-start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n}\r\n\r\n.btn-toolbar .input-group {\r\n  width: auto;\r\n}\r\n\r\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\r\n  border-radius: 0;\r\n}\r\n\r\n.btn-group > .btn:first-child {\r\n  margin-left: 0;\r\n}\r\n\r\n.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\r\n  border-bottom-right-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\n.btn-group > .btn:last-child:not(:first-child),\r\n.btn-group > .dropdown-toggle:not(:first-child) {\r\n  border-bottom-left-radius: 0;\r\n  border-top-left-radius: 0;\r\n}\r\n\r\n.btn-group > .btn-group {\r\n  float: left;\r\n}\r\n\r\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\r\n  border-radius: 0;\r\n}\r\n\r\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\r\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\r\n  border-bottom-right-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\r\n  border-bottom-left-radius: 0;\r\n  border-top-left-radius: 0;\r\n}\r\n\r\n.btn-group .dropdown-toggle:active,\r\n.btn-group.open .dropdown-toggle {\r\n  outline: 0;\r\n}\r\n\r\n.btn + .dropdown-toggle-split {\r\n  padding-right: 0.75rem;\r\n  padding-left: 0.75rem;\r\n}\r\n\r\n.btn + .dropdown-toggle-split::after {\r\n  margin-left: 0;\r\n}\r\n\r\n.btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split {\r\n  padding-right: 0.375rem;\r\n  padding-left: 0.375rem;\r\n}\r\n\r\n.btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split {\r\n  padding-right: 1.125rem;\r\n  padding-left: 1.125rem;\r\n}\r\n\r\n.btn-group-vertical {\r\n  display: -webkit-inline-box;\r\n  display: -webkit-inline-flex;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n  -webkit-flex-direction: column;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-align: start;\r\n  -webkit-align-items: flex-start;\r\n      -ms-flex-align: start;\r\n          align-items: flex-start;\r\n  -webkit-box-pack: center;\r\n  -webkit-justify-content: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n.btn-group-vertical .btn,\r\n.btn-group-vertical .btn-group {\r\n  width: 100%;\r\n}\r\n\r\n.btn-group-vertical > .btn + .btn,\r\n.btn-group-vertical > .btn + .btn-group,\r\n.btn-group-vertical > .btn-group + .btn,\r\n.btn-group-vertical > .btn-group + .btn-group {\r\n  margin-top: -1px;\r\n  margin-left: 0;\r\n}\r\n\r\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\r\n  border-radius: 0;\r\n}\r\n\r\n.btn-group-vertical > .btn:first-child:not(:last-child) {\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.btn-group-vertical > .btn:last-child:not(:first-child) {\r\n  border-top-right-radius: 0;\r\n  border-top-left-radius: 0;\r\n}\r\n\r\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\r\n  border-radius: 0;\r\n}\r\n\r\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\r\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\r\n  border-bottom-right-radius: 0;\r\n  border-bottom-left-radius: 0;\r\n}\r\n\r\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\r\n  border-top-right-radius: 0;\r\n  border-top-left-radius: 0;\r\n}\r\n\r\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\r\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\r\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\r\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\r\n  position: absolute;\r\n  clip: rect(0, 0, 0, 0);\r\n  pointer-events: none;\r\n}\r\n\r\n.input-group {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  width: 100%;\r\n}\r\n\r\n.input-group .form-control {\r\n  position: relative;\r\n  z-index: 2;\r\n  -webkit-box-flex: 1;\r\n  -webkit-flex: 1 1 auto;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n  width: 1%;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.input-group .form-control:focus, .input-group .form-control:active, .input-group .form-control:hover {\r\n  z-index: 3;\r\n}\r\n\r\n.input-group-addon,\r\n.input-group-btn,\r\n.input-group .form-control {\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n  -webkit-flex-direction: column;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n  -webkit-justify-content: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n.input-group-addon:not(:first-child):not(:last-child),\r\n.input-group-btn:not(:first-child):not(:last-child),\r\n.input-group .form-control:not(:first-child):not(:last-child) {\r\n  border-radius: 0;\r\n}\r\n\r\n.input-group-addon,\r\n.input-group-btn {\r\n  white-space: nowrap;\r\n  vertical-align: middle;\r\n}\r\n\r\n.input-group-addon {\r\n  padding: 0.5rem 0.75rem;\r\n  margin-bottom: 0;\r\n  font-size: 1rem;\r\n  font-weight: normal;\r\n  line-height: 1.25;\r\n  color: #464a4c;\r\n  text-align: center;\r\n  background-color: #eceeef;\r\n  border: 1px solid rgba(0, 0, 0, 0.15);\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.input-group-addon.form-control-sm,\r\n.input-group-sm > .input-group-addon,\r\n.input-group-sm > .input-group-btn > .input-group-addon.btn {\r\n  padding: 0.25rem 0.5rem;\r\n  font-size: 0.875rem;\r\n  border-radius: 0.2rem;\r\n}\r\n\r\n.input-group-addon.form-control-lg,\r\n.input-group-lg > .input-group-addon,\r\n.input-group-lg > .input-group-btn > .input-group-addon.btn {\r\n  padding: 0.75rem 1.5rem;\r\n  font-size: 1.25rem;\r\n  border-radius: 0.3rem;\r\n}\r\n\r\n.input-group-addon input[type=\"radio\"],\r\n.input-group-addon input[type=\"checkbox\"] {\r\n  margin-top: 0;\r\n}\r\n\r\n.input-group .form-control:not(:last-child),\r\n.input-group-addon:not(:last-child),\r\n.input-group-btn:not(:last-child) > .btn,\r\n.input-group-btn:not(:last-child) > .btn-group > .btn,\r\n.input-group-btn:not(:last-child) > .dropdown-toggle,\r\n.input-group-btn:not(:first-child) > .btn:not(:last-child):not(.dropdown-toggle),\r\n.input-group-btn:not(:first-child) > .btn-group:not(:last-child) > .btn {\r\n  border-bottom-right-radius: 0;\r\n  border-top-right-radius: 0;\r\n}\r\n\r\n.input-group-addon:not(:last-child) {\r\n  border-right: 0;\r\n}\r\n\r\n.input-group .form-control:not(:first-child),\r\n.input-group-addon:not(:first-child),\r\n.input-group-btn:not(:first-child) > .btn,\r\n.input-group-btn:not(:first-child) > .btn-group > .btn,\r\n.input-group-btn:not(:first-child) > .dropdown-toggle,\r\n.input-group-btn:not(:last-child) > .btn:not(:first-child),\r\n.input-group-btn:not(:last-child) > .btn-group:not(:first-child) > .btn {\r\n  border-bottom-left-radius: 0;\r\n  border-top-left-radius: 0;\r\n}\r\n\r\n.form-control + .input-group-addon:not(:first-child) {\r\n  border-left: 0;\r\n}\r\n\r\n.input-group-btn {\r\n  position: relative;\r\n  font-size: 0;\r\n  white-space: nowrap;\r\n}\r\n\r\n.input-group-btn > .btn {\r\n  position: relative;\r\n  -webkit-box-flex: 1;\r\n  -webkit-flex: 1 1 0%;\r\n      -ms-flex: 1 1 0%;\r\n          flex: 1 1 0%;\r\n}\r\n\r\n.input-group-btn > .btn + .btn {\r\n  margin-left: -1px;\r\n}\r\n\r\n.input-group-btn > .btn:focus, .input-group-btn > .btn:active, .input-group-btn > .btn:hover {\r\n  z-index: 3;\r\n}\r\n\r\n.input-group-btn:not(:last-child) > .btn,\r\n.input-group-btn:not(:last-child) > .btn-group {\r\n  margin-right: -1px;\r\n}\r\n\r\n.input-group-btn:not(:first-child) > .btn,\r\n.input-group-btn:not(:first-child) > .btn-group {\r\n  z-index: 2;\r\n  margin-left: -1px;\r\n}\r\n\r\n.input-group-btn:not(:first-child) > .btn:focus, .input-group-btn:not(:first-child) > .btn:active, .input-group-btn:not(:first-child) > .btn:hover,\r\n.input-group-btn:not(:first-child) > .btn-group:focus,\r\n.input-group-btn:not(:first-child) > .btn-group:active,\r\n.input-group-btn:not(:first-child) > .btn-group:hover {\r\n  z-index: 3;\r\n}\r\n\r\n.custom-control {\r\n  position: relative;\r\n  display: -webkit-inline-box;\r\n  display: -webkit-inline-flex;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  min-height: 1.5rem;\r\n  padding-left: 1.5rem;\r\n  margin-right: 1rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.custom-control-input {\r\n  position: absolute;\r\n  z-index: -1;\r\n  opacity: 0;\r\n}\r\n\r\n.custom-control-input:checked ~ .custom-control-indicator {\r\n  color: #fff;\r\n  background-color: #0275d8;\r\n}\r\n\r\n.custom-control-input:focus ~ .custom-control-indicator {\r\n  -webkit-box-shadow: 0 0 0 1px #fff, 0 0 0 3px #0275d8;\r\n          box-shadow: 0 0 0 1px #fff, 0 0 0 3px #0275d8;\r\n}\r\n\r\n.custom-control-input:active ~ .custom-control-indicator {\r\n  color: #fff;\r\n  background-color: #8fcafe;\r\n}\r\n\r\n.custom-control-input:disabled ~ .custom-control-indicator {\r\n  cursor: not-allowed;\r\n  background-color: #eceeef;\r\n}\r\n\r\n.custom-control-input:disabled ~ .custom-control-description {\r\n  color: #636c72;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.custom-control-indicator {\r\n  position: absolute;\r\n  top: 0.25rem;\r\n  left: 0;\r\n  display: block;\r\n  width: 1rem;\r\n  height: 1rem;\r\n  pointer-events: none;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  background-color: #ddd;\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  -webkit-background-size: 50% 50%;\r\n          background-size: 50% 50%;\r\n}\r\n\r\n.custom-checkbox .custom-control-indicator {\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.custom-checkbox .custom-control-input:checked ~ .custom-control-indicator {\r\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E\");\r\n}\r\n\r\n.custom-checkbox .custom-control-input:indeterminate ~ .custom-control-indicator {\r\n  background-color: #0275d8;\r\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E\");\r\n}\r\n\r\n.custom-radio .custom-control-indicator {\r\n  border-radius: 50%;\r\n}\r\n\r\n.custom-radio .custom-control-input:checked ~ .custom-control-indicator {\r\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E\");\r\n}\r\n\r\n.custom-controls-stacked {\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n  -webkit-flex-direction: column;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\n.custom-controls-stacked .custom-control {\r\n  margin-bottom: 0.25rem;\r\n}\r\n\r\n.custom-controls-stacked .custom-control + .custom-control {\r\n  margin-left: 0;\r\n}\r\n\r\n.custom-select {\r\n  display: inline-block;\r\n  max-width: 100%;\r\n  height: calc(2.25rem + 2px);\r\n  padding: 0.375rem 1.75rem 0.375rem 0.75rem;\r\n  line-height: 1.25;\r\n  color: #464a4c;\r\n  vertical-align: middle;\r\n  background: #fff url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23333' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E\") no-repeat right 0.75rem center;\r\n  -webkit-background-size: 8px 10px;\r\n          background-size: 8px 10px;\r\n  border: 1px solid rgba(0, 0, 0, 0.15);\r\n  border-radius: 0.25rem;\r\n  -moz-appearance: none;\r\n  -webkit-appearance: none;\r\n}\r\n\r\n.custom-select:focus {\r\n  border-color: #5cb3fd;\r\n  outline: none;\r\n}\r\n\r\n.custom-select:focus::-ms-value {\r\n  color: #464a4c;\r\n  background-color: #fff;\r\n}\r\n\r\n.custom-select:disabled {\r\n  color: #636c72;\r\n  cursor: not-allowed;\r\n  background-color: #eceeef;\r\n}\r\n\r\n.custom-select::-ms-expand {\r\n  opacity: 0;\r\n}\r\n\r\n.custom-select-sm {\r\n  padding-top: 0.375rem;\r\n  padding-bottom: 0.375rem;\r\n  font-size: 75%;\r\n}\r\n\r\n.custom-file {\r\n  position: relative;\r\n  display: inline-block;\r\n  max-width: 100%;\r\n  height: 2.5rem;\r\n  margin-bottom: 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.custom-file-input {\r\n  min-width: 14rem;\r\n  max-width: 100%;\r\n  height: 2.5rem;\r\n  margin: 0;\r\n  filter: alpha(opacity=0);\r\n  opacity: 0;\r\n}\r\n\r\n.custom-file-control {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  z-index: 5;\r\n  height: 2.5rem;\r\n  padding: 0.5rem 1rem;\r\n  line-height: 1.5;\r\n  color: #464a4c;\r\n  pointer-events: none;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  background-color: #fff;\r\n  border: 1px solid rgba(0, 0, 0, 0.15);\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.custom-file-control:lang(en)::after {\r\n  content: \"Choose file...\";\r\n}\r\n\r\n.custom-file-control::before {\r\n  position: absolute;\r\n  top: -1px;\r\n  right: -1px;\r\n  bottom: -1px;\r\n  z-index: 6;\r\n  display: block;\r\n  height: 2.5rem;\r\n  padding: 0.5rem 1rem;\r\n  line-height: 1.5;\r\n  color: #464a4c;\r\n  background-color: #eceeef;\r\n  border: 1px solid rgba(0, 0, 0, 0.15);\r\n  border-radius: 0 0.25rem 0.25rem 0;\r\n}\r\n\r\n.custom-file-control:lang(en)::before {\r\n  content: \"Browse\";\r\n}\r\n\r\n.nav {\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  padding-left: 0;\r\n  margin-bottom: 0;\r\n  list-style: none;\r\n}\r\n\r\n.nav-link {\r\n  display: block;\r\n  padding: 0.5em 1em;\r\n}\r\n\r\n.nav-link:focus, .nav-link:hover {\r\n  text-decoration: none;\r\n}\r\n\r\n.nav-link.disabled {\r\n  color: #636c72;\r\n  cursor: not-allowed;\r\n}\r\n\r\n.nav-tabs {\r\n  border-bottom: 1px solid #ddd;\r\n}\r\n\r\n.nav-tabs .nav-item {\r\n  margin-bottom: -1px;\r\n}\r\n\r\n.nav-tabs .nav-link {\r\n  border: 1px solid transparent;\r\n  border-top-right-radius: 0.25rem;\r\n  border-top-left-radius: 0.25rem;\r\n}\r\n\r\n.nav-tabs .nav-link:focus, .nav-tabs .nav-link:hover {\r\n  border-color: #eceeef #eceeef #ddd;\r\n}\r\n\r\n.nav-tabs .nav-link.disabled {\r\n  color: #636c72;\r\n  background-color: transparent;\r\n  border-color: transparent;\r\n}\r\n\r\n.nav-tabs .nav-link.active,\r\n.nav-tabs .nav-item.show .nav-link {\r\n  color: #464a4c;\r\n  background-color: #fff;\r\n  border-color: #ddd #ddd #fff;\r\n}\r\n\r\n.nav-tabs .dropdown-menu {\r\n  margin-top: -1px;\r\n  border-top-right-radius: 0;\r\n  border-top-left-radius: 0;\r\n}\r\n\r\n.nav-pills .nav-link {\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.nav-pills .nav-link.active,\r\n.nav-pills .nav-item.show .nav-link {\r\n  color: #fff;\r\n  cursor: default;\r\n  background-color: #0275d8;\r\n}\r\n\r\n.nav-fill .nav-item {\r\n  -webkit-box-flex: 1;\r\n  -webkit-flex: 1 1 auto;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n  text-align: center;\r\n}\r\n\r\n.nav-justified .nav-item {\r\n  -webkit-box-flex: 1;\r\n  -webkit-flex: 1 1 100%;\r\n      -ms-flex: 1 1 100%;\r\n          flex: 1 1 100%;\r\n  text-align: center;\r\n}\r\n\r\n.tab-content > .tab-pane {\r\n  display: none;\r\n}\r\n\r\n.tab-content > .active {\r\n  display: block;\r\n}\r\n\r\n.navbar {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n  -webkit-flex-direction: column;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  padding: 0.5rem 1rem;\r\n}\r\n\r\n.navbar-brand {\r\n  display: inline-block;\r\n  padding-top: .25rem;\r\n  padding-bottom: .25rem;\r\n  margin-right: 1rem;\r\n  font-size: 1.25rem;\r\n  line-height: inherit;\r\n  white-space: nowrap;\r\n}\r\n\r\n.navbar-brand:focus, .navbar-brand:hover {\r\n  text-decoration: none;\r\n}\r\n\r\n.navbar-nav {\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n  -webkit-flex-direction: column;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  padding-left: 0;\r\n  margin-bottom: 0;\r\n  list-style: none;\r\n}\r\n\r\n.navbar-nav .nav-link {\r\n  padding-right: 0;\r\n  padding-left: 0;\r\n}\r\n\r\n.navbar-text {\r\n  display: inline-block;\r\n  padding-top: .425rem;\r\n  padding-bottom: .425rem;\r\n}\r\n\r\n.navbar-toggler {\r\n  -webkit-align-self: flex-start;\r\n      -ms-flex-item-align: start;\r\n          align-self: flex-start;\r\n  padding: 0.25rem 0.75rem;\r\n  font-size: 1.25rem;\r\n  line-height: 1;\r\n  background: transparent;\r\n  border: 1px solid transparent;\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.navbar-toggler:focus, .navbar-toggler:hover {\r\n  text-decoration: none;\r\n}\r\n\r\n.navbar-toggler-icon {\r\n  display: inline-block;\r\n  width: 1.5em;\r\n  height: 1.5em;\r\n  vertical-align: middle;\r\n  content: \"\";\r\n  background: no-repeat center center;\r\n  -webkit-background-size: 100% 100%;\r\n          background-size: 100% 100%;\r\n}\r\n\r\n.navbar-toggler-left {\r\n  position: absolute;\r\n  left: 1rem;\r\n}\r\n\r\n.navbar-toggler-right {\r\n  position: absolute;\r\n  right: 1rem;\r\n}\r\n\r\n@media (max-width: 575px) {\r\n  .navbar-toggleable .navbar-nav .dropdown-menu {\r\n    position: static;\r\n    float: none;\r\n  }\r\n  .navbar-toggleable > .container {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n  }\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .navbar-toggleable {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -webkit-flex-direction: row;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-flex-wrap: nowrap;\r\n        -ms-flex-wrap: nowrap;\r\n            flex-wrap: nowrap;\r\n    -webkit-box-align: center;\r\n    -webkit-align-items: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n  }\r\n  .navbar-toggleable .navbar-nav {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -webkit-flex-direction: row;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n  }\r\n  .navbar-toggleable .navbar-nav .nav-link {\r\n    padding-right: .5rem;\r\n    padding-left: .5rem;\r\n  }\r\n  .navbar-toggleable > .container {\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-flex-wrap: nowrap;\r\n        -ms-flex-wrap: nowrap;\r\n            flex-wrap: nowrap;\r\n    -webkit-box-align: center;\r\n    -webkit-align-items: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n  }\r\n  .navbar-toggleable .navbar-collapse {\r\n    display: -webkit-box !important;\r\n    display: -webkit-flex !important;\r\n    display: -ms-flexbox !important;\r\n    display: flex !important;\r\n    width: 100%;\r\n  }\r\n  .navbar-toggleable .navbar-toggler {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .navbar-toggleable-sm .navbar-nav .dropdown-menu {\r\n    position: static;\r\n    float: none;\r\n  }\r\n  .navbar-toggleable-sm > .container {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .navbar-toggleable-sm {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -webkit-flex-direction: row;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-flex-wrap: nowrap;\r\n        -ms-flex-wrap: nowrap;\r\n            flex-wrap: nowrap;\r\n    -webkit-box-align: center;\r\n    -webkit-align-items: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n  }\r\n  .navbar-toggleable-sm .navbar-nav {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -webkit-flex-direction: row;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n  }\r\n  .navbar-toggleable-sm .navbar-nav .nav-link {\r\n    padding-right: .5rem;\r\n    padding-left: .5rem;\r\n  }\r\n  .navbar-toggleable-sm > .container {\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-flex-wrap: nowrap;\r\n        -ms-flex-wrap: nowrap;\r\n            flex-wrap: nowrap;\r\n    -webkit-box-align: center;\r\n    -webkit-align-items: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n  }\r\n  .navbar-toggleable-sm .navbar-collapse {\r\n    display: -webkit-box !important;\r\n    display: -webkit-flex !important;\r\n    display: -ms-flexbox !important;\r\n    display: flex !important;\r\n    width: 100%;\r\n  }\r\n  .navbar-toggleable-sm .navbar-toggler {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media (max-width: 991px) {\r\n  .navbar-toggleable-md .navbar-nav .dropdown-menu {\r\n    position: static;\r\n    float: none;\r\n  }\r\n  .navbar-toggleable-md > .container {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .navbar-toggleable-md {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -webkit-flex-direction: row;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-flex-wrap: nowrap;\r\n        -ms-flex-wrap: nowrap;\r\n            flex-wrap: nowrap;\r\n    -webkit-box-align: center;\r\n    -webkit-align-items: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n  }\r\n  .navbar-toggleable-md .navbar-nav {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -webkit-flex-direction: row;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n  }\r\n  .navbar-toggleable-md .navbar-nav .nav-link {\r\n    padding-right: .5rem;\r\n    padding-left: .5rem;\r\n  }\r\n  .navbar-toggleable-md > .container {\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-flex-wrap: nowrap;\r\n        -ms-flex-wrap: nowrap;\r\n            flex-wrap: nowrap;\r\n    -webkit-box-align: center;\r\n    -webkit-align-items: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n  }\r\n  .navbar-toggleable-md .navbar-collapse {\r\n    display: -webkit-box !important;\r\n    display: -webkit-flex !important;\r\n    display: -ms-flexbox !important;\r\n    display: flex !important;\r\n    width: 100%;\r\n  }\r\n  .navbar-toggleable-md .navbar-toggler {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media (max-width: 1199px) {\r\n  .navbar-toggleable-lg .navbar-nav .dropdown-menu {\r\n    position: static;\r\n    float: none;\r\n  }\r\n  .navbar-toggleable-lg > .container {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .navbar-toggleable-lg {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -webkit-flex-direction: row;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-flex-wrap: nowrap;\r\n        -ms-flex-wrap: nowrap;\r\n            flex-wrap: nowrap;\r\n    -webkit-box-align: center;\r\n    -webkit-align-items: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n  }\r\n  .navbar-toggleable-lg .navbar-nav {\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n    -webkit-flex-direction: row;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n  }\r\n  .navbar-toggleable-lg .navbar-nav .nav-link {\r\n    padding-right: .5rem;\r\n    padding-left: .5rem;\r\n  }\r\n  .navbar-toggleable-lg > .container {\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-flex-wrap: nowrap;\r\n        -ms-flex-wrap: nowrap;\r\n            flex-wrap: nowrap;\r\n    -webkit-box-align: center;\r\n    -webkit-align-items: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n  }\r\n  .navbar-toggleable-lg .navbar-collapse {\r\n    display: -webkit-box !important;\r\n    display: -webkit-flex !important;\r\n    display: -ms-flexbox !important;\r\n    display: flex !important;\r\n    width: 100%;\r\n  }\r\n  .navbar-toggleable-lg .navbar-toggler {\r\n    display: none;\r\n  }\r\n}\r\n\r\n.navbar-toggleable-xl {\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n  -webkit-flex-direction: row;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-flex-wrap: nowrap;\r\n      -ms-flex-wrap: nowrap;\r\n          flex-wrap: nowrap;\r\n  -webkit-box-align: center;\r\n  -webkit-align-items: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.navbar-toggleable-xl .navbar-nav .dropdown-menu {\r\n  position: static;\r\n  float: none;\r\n}\r\n\r\n.navbar-toggleable-xl > .container {\r\n  padding-right: 0;\r\n  padding-left: 0;\r\n}\r\n\r\n.navbar-toggleable-xl .navbar-nav {\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n  -webkit-flex-direction: row;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n}\r\n\r\n.navbar-toggleable-xl .navbar-nav .nav-link {\r\n  padding-right: .5rem;\r\n  padding-left: .5rem;\r\n}\r\n\r\n.navbar-toggleable-xl > .container {\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-flex-wrap: nowrap;\r\n      -ms-flex-wrap: nowrap;\r\n          flex-wrap: nowrap;\r\n  -webkit-box-align: center;\r\n  -webkit-align-items: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.navbar-toggleable-xl .navbar-collapse {\r\n  display: -webkit-box !important;\r\n  display: -webkit-flex !important;\r\n  display: -ms-flexbox !important;\r\n  display: flex !important;\r\n  width: 100%;\r\n}\r\n\r\n.navbar-toggleable-xl .navbar-toggler {\r\n  display: none;\r\n}\r\n\r\n.navbar-light .navbar-brand,\r\n.navbar-light .navbar-toggler {\r\n  color: rgba(0, 0, 0, 0.9);\r\n}\r\n\r\n.navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover,\r\n.navbar-light .navbar-toggler:focus,\r\n.navbar-light .navbar-toggler:hover {\r\n  color: rgba(0, 0, 0, 0.9);\r\n}\r\n\r\n.navbar-light .navbar-nav .nav-link {\r\n  color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {\r\n  color: rgba(0, 0, 0, 0.7);\r\n}\r\n\r\n.navbar-light .navbar-nav .nav-link.disabled {\r\n  color: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.navbar-light .navbar-nav .open > .nav-link,\r\n.navbar-light .navbar-nav .active > .nav-link,\r\n.navbar-light .navbar-nav .nav-link.open,\r\n.navbar-light .navbar-nav .nav-link.active {\r\n  color: rgba(0, 0, 0, 0.9);\r\n}\r\n\r\n.navbar-light .navbar-toggler {\r\n  border-color: rgba(0, 0, 0, 0.1);\r\n}\r\n\r\n.navbar-light .navbar-toggler-icon {\r\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\");\r\n}\r\n\r\n.navbar-light .navbar-text {\r\n  color: rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.navbar-inverse .navbar-brand,\r\n.navbar-inverse .navbar-toggler {\r\n  color: white;\r\n}\r\n\r\n.navbar-inverse .navbar-brand:focus, .navbar-inverse .navbar-brand:hover,\r\n.navbar-inverse .navbar-toggler:focus,\r\n.navbar-inverse .navbar-toggler:hover {\r\n  color: white;\r\n}\r\n\r\n.navbar-inverse .navbar-nav .nav-link {\r\n  color: rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n.navbar-inverse .navbar-nav .nav-link:focus, .navbar-inverse .navbar-nav .nav-link:hover {\r\n  color: rgba(255, 255, 255, 0.75);\r\n}\r\n\r\n.navbar-inverse .navbar-nav .nav-link.disabled {\r\n  color: rgba(255, 255, 255, 0.25);\r\n}\r\n\r\n.navbar-inverse .navbar-nav .open > .nav-link,\r\n.navbar-inverse .navbar-nav .active > .nav-link,\r\n.navbar-inverse .navbar-nav .nav-link.open,\r\n.navbar-inverse .navbar-nav .nav-link.active {\r\n  color: white;\r\n}\r\n\r\n.navbar-inverse .navbar-toggler {\r\n  border-color: rgba(255, 255, 255, 0.1);\r\n}\r\n\r\n.navbar-inverse .navbar-toggler-icon {\r\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\");\r\n}\r\n\r\n.navbar-inverse .navbar-text {\r\n  color: rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n.card {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n  -webkit-flex-direction: column;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  background-color: #fff;\r\n  border: 1px solid rgba(0, 0, 0, 0.125);\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.card-block {\r\n  -webkit-box-flex: 1;\r\n  -webkit-flex: 1 1 auto;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n  padding: 1.25rem;\r\n}\r\n\r\n.card-title {\r\n  margin-bottom: 0.75rem;\r\n}\r\n\r\n.card-subtitle {\r\n  margin-top: -0.375rem;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.card-text:last-child {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.card-link:hover {\r\n  text-decoration: none;\r\n}\r\n\r\n.card-link + .card-link {\r\n  margin-left: 1.25rem;\r\n}\r\n\r\n.card > .list-group:first-child .list-group-item:first-child {\r\n  border-top-right-radius: 0.25rem;\r\n  border-top-left-radius: 0.25rem;\r\n}\r\n\r\n.card > .list-group:last-child .list-group-item:last-child {\r\n  border-bottom-right-radius: 0.25rem;\r\n  border-bottom-left-radius: 0.25rem;\r\n}\r\n\r\n.card-header {\r\n  padding: 0.75rem 1.25rem;\r\n  margin-bottom: 0;\r\n  background-color: #f7f7f9;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\r\n}\r\n\r\n.card-header:first-child {\r\n  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;\r\n}\r\n\r\n.card-footer {\r\n  padding: 0.75rem 1.25rem;\r\n  background-color: #f7f7f9;\r\n  border-top: 1px solid rgba(0, 0, 0, 0.125);\r\n}\r\n\r\n.card-footer:last-child {\r\n  border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);\r\n}\r\n\r\n.card-header-tabs {\r\n  margin-right: -0.625rem;\r\n  margin-bottom: -0.75rem;\r\n  margin-left: -0.625rem;\r\n  border-bottom: 0;\r\n}\r\n\r\n.card-header-pills {\r\n  margin-right: -0.625rem;\r\n  margin-left: -0.625rem;\r\n}\r\n\r\n.card-primary {\r\n  background-color: #0275d8;\r\n  border-color: #0275d8;\r\n}\r\n\r\n.card-primary .card-header,\r\n.card-primary .card-footer {\r\n  background-color: transparent;\r\n}\r\n\r\n.card-success {\r\n  background-color: #5cb85c;\r\n  border-color: #5cb85c;\r\n}\r\n\r\n.card-success .card-header,\r\n.card-success .card-footer {\r\n  background-color: transparent;\r\n}\r\n\r\n.card-info {\r\n  background-color: #5bc0de;\r\n  border-color: #5bc0de;\r\n}\r\n\r\n.card-info .card-header,\r\n.card-info .card-footer {\r\n  background-color: transparent;\r\n}\r\n\r\n.card-warning {\r\n  background-color: #f0ad4e;\r\n  border-color: #f0ad4e;\r\n}\r\n\r\n.card-warning .card-header,\r\n.card-warning .card-footer {\r\n  background-color: transparent;\r\n}\r\n\r\n.card-danger {\r\n  background-color: #d9534f;\r\n  border-color: #d9534f;\r\n}\r\n\r\n.card-danger .card-header,\r\n.card-danger .card-footer {\r\n  background-color: transparent;\r\n}\r\n\r\n.card-outline-primary {\r\n  background-color: transparent;\r\n  border-color: #0275d8;\r\n}\r\n\r\n.card-outline-secondary {\r\n  background-color: transparent;\r\n  border-color: #ccc;\r\n}\r\n\r\n.card-outline-info {\r\n  background-color: transparent;\r\n  border-color: #5bc0de;\r\n}\r\n\r\n.card-outline-success {\r\n  background-color: transparent;\r\n  border-color: #5cb85c;\r\n}\r\n\r\n.card-outline-warning {\r\n  background-color: transparent;\r\n  border-color: #f0ad4e;\r\n}\r\n\r\n.card-outline-danger {\r\n  background-color: transparent;\r\n  border-color: #d9534f;\r\n}\r\n\r\n.card-inverse {\r\n  color: rgba(255, 255, 255, 0.65);\r\n}\r\n\r\n.card-inverse .card-header,\r\n.card-inverse .card-footer {\r\n  background-color: transparent;\r\n  border-color: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n.card-inverse .card-header,\r\n.card-inverse .card-footer,\r\n.card-inverse .card-title,\r\n.card-inverse .card-blockquote {\r\n  color: #fff;\r\n}\r\n\r\n.card-inverse .card-link,\r\n.card-inverse .card-text,\r\n.card-inverse .card-subtitle,\r\n.card-inverse .card-blockquote .blockquote-footer {\r\n  color: rgba(255, 255, 255, 0.65);\r\n}\r\n\r\n.card-inverse .card-link:focus, .card-inverse .card-link:hover {\r\n  color: #fff;\r\n}\r\n\r\n.card-blockquote {\r\n  padding: 0;\r\n  margin-bottom: 0;\r\n  border-left: 0;\r\n}\r\n\r\n.card-img {\r\n  border-radius: calc(0.25rem - 1px);\r\n}\r\n\r\n.card-img-overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  padding: 1.25rem;\r\n}\r\n\r\n.card-img-top {\r\n  border-top-right-radius: calc(0.25rem - 1px);\r\n  border-top-left-radius: calc(0.25rem - 1px);\r\n}\r\n\r\n.card-img-bottom {\r\n  border-bottom-right-radius: calc(0.25rem - 1px);\r\n  border-bottom-left-radius: calc(0.25rem - 1px);\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .card-deck {\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-flex-flow: row wrap;\r\n        -ms-flex-flow: row wrap;\r\n            flex-flow: row wrap;\r\n  }\r\n  .card-deck .card {\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-flex: 1;\r\n    -webkit-flex: 1 0 0%;\r\n        -ms-flex: 1 0 0%;\r\n            flex: 1 0 0%;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    -webkit-flex-direction: column;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n  }\r\n  .card-deck .card:not(:first-child) {\r\n    margin-left: 15px;\r\n  }\r\n  .card-deck .card:not(:last-child) {\r\n    margin-right: 15px;\r\n  }\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .card-group {\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-flex-flow: row wrap;\r\n        -ms-flex-flow: row wrap;\r\n            flex-flow: row wrap;\r\n  }\r\n  .card-group .card {\r\n    -webkit-box-flex: 1;\r\n    -webkit-flex: 1 0 0%;\r\n        -ms-flex: 1 0 0%;\r\n            flex: 1 0 0%;\r\n  }\r\n  .card-group .card + .card {\r\n    margin-left: 0;\r\n    border-left: 0;\r\n  }\r\n  .card-group .card:first-child {\r\n    border-bottom-right-radius: 0;\r\n    border-top-right-radius: 0;\r\n  }\r\n  .card-group .card:first-child .card-img-top {\r\n    border-top-right-radius: 0;\r\n  }\r\n  .card-group .card:first-child .card-img-bottom {\r\n    border-bottom-right-radius: 0;\r\n  }\r\n  .card-group .card:last-child {\r\n    border-bottom-left-radius: 0;\r\n    border-top-left-radius: 0;\r\n  }\r\n  .card-group .card:last-child .card-img-top {\r\n    border-top-left-radius: 0;\r\n  }\r\n  .card-group .card:last-child .card-img-bottom {\r\n    border-bottom-left-radius: 0;\r\n  }\r\n  .card-group .card:not(:first-child):not(:last-child) {\r\n    border-radius: 0;\r\n  }\r\n  .card-group .card:not(:first-child):not(:last-child) .card-img-top,\r\n  .card-group .card:not(:first-child):not(:last-child) .card-img-bottom {\r\n    border-radius: 0;\r\n  }\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .card-columns {\r\n    -webkit-column-count: 3;\r\n       -moz-column-count: 3;\r\n            column-count: 3;\r\n    -webkit-column-gap: 1.25rem;\r\n       -moz-column-gap: 1.25rem;\r\n            column-gap: 1.25rem;\r\n  }\r\n  .card-columns .card {\r\n    display: inline-block;\r\n    width: 100%;\r\n    margin-bottom: 0.75rem;\r\n  }\r\n}\r\n\r\n.breadcrumb {\r\n  padding: 0.75rem 1rem;\r\n  margin-bottom: 1rem;\r\n  list-style: none;\r\n  background-color: #eceeef;\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.breadcrumb::after {\r\n  display: block;\r\n  content: \"\";\r\n  clear: both;\r\n}\r\n\r\n.breadcrumb-item {\r\n  float: left;\r\n}\r\n\r\n.breadcrumb-item + .breadcrumb-item::before {\r\n  display: inline-block;\r\n  padding-right: 0.5rem;\r\n  padding-left: 0.5rem;\r\n  color: #636c72;\r\n  content: \"/\";\r\n}\r\n\r\n.breadcrumb-item + .breadcrumb-item:hover::before {\r\n  text-decoration: underline;\r\n}\r\n\r\n.breadcrumb-item + .breadcrumb-item:hover::before {\r\n  text-decoration: none;\r\n}\r\n\r\n.breadcrumb-item.active {\r\n  color: #636c72;\r\n}\r\n\r\n.pagination {\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  padding-left: 0;\r\n  list-style: none;\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.page-item:first-child .page-link {\r\n  margin-left: 0;\r\n  border-bottom-left-radius: 0.25rem;\r\n  border-top-left-radius: 0.25rem;\r\n}\r\n\r\n.page-item:last-child .page-link {\r\n  border-bottom-right-radius: 0.25rem;\r\n  border-top-right-radius: 0.25rem;\r\n}\r\n\r\n.page-item.active .page-link {\r\n  z-index: 2;\r\n  color: #fff;\r\n  background-color: #0275d8;\r\n  border-color: #0275d8;\r\n}\r\n\r\n.page-item.disabled .page-link {\r\n  color: #636c72;\r\n  pointer-events: none;\r\n  cursor: not-allowed;\r\n  background-color: #fff;\r\n  border-color: #ddd;\r\n}\r\n\r\n.page-link {\r\n  position: relative;\r\n  display: block;\r\n  padding: 0.5rem 0.75rem;\r\n  margin-left: -1px;\r\n  line-height: 1.25;\r\n  color: #0275d8;\r\n  background-color: #fff;\r\n  border: 1px solid #ddd;\r\n}\r\n\r\n.page-link:focus, .page-link:hover {\r\n  color: #014c8c;\r\n  text-decoration: none;\r\n  background-color: #eceeef;\r\n  border-color: #ddd;\r\n}\r\n\r\n.pagination-lg .page-link {\r\n  padding: 0.75rem 1.5rem;\r\n  font-size: 1.25rem;\r\n}\r\n\r\n.pagination-lg .page-item:first-child .page-link {\r\n  border-bottom-left-radius: 0.3rem;\r\n  border-top-left-radius: 0.3rem;\r\n}\r\n\r\n.pagination-lg .page-item:last-child .page-link {\r\n  border-bottom-right-radius: 0.3rem;\r\n  border-top-right-radius: 0.3rem;\r\n}\r\n\r\n.pagination-sm .page-link {\r\n  padding: 0.25rem 0.5rem;\r\n  font-size: 0.875rem;\r\n}\r\n\r\n.pagination-sm .page-item:first-child .page-link {\r\n  border-bottom-left-radius: 0.2rem;\r\n  border-top-left-radius: 0.2rem;\r\n}\r\n\r\n.pagination-sm .page-item:last-child .page-link {\r\n  border-bottom-right-radius: 0.2rem;\r\n  border-top-right-radius: 0.2rem;\r\n}\r\n\r\n.badge {\r\n  display: inline-block;\r\n  padding: 0.25em 0.4em;\r\n  font-size: 75%;\r\n  font-weight: bold;\r\n  line-height: 1;\r\n  color: #fff;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  vertical-align: baseline;\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.badge:empty {\r\n  display: none;\r\n}\r\n\r\n.btn .badge {\r\n  position: relative;\r\n  top: -1px;\r\n}\r\n\r\na.badge:focus, a.badge:hover {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.badge-pill {\r\n  padding-right: 0.6em;\r\n  padding-left: 0.6em;\r\n  border-radius: 10rem;\r\n}\r\n\r\n.badge-default {\r\n  background-color: #636c72;\r\n}\r\n\r\n.badge-default[href]:focus, .badge-default[href]:hover {\r\n  background-color: #4b5257;\r\n}\r\n\r\n.badge-primary {\r\n  background-color: #0275d8;\r\n}\r\n\r\n.badge-primary[href]:focus, .badge-primary[href]:hover {\r\n  background-color: #025aa5;\r\n}\r\n\r\n.badge-success {\r\n  background-color: #5cb85c;\r\n}\r\n\r\n.badge-success[href]:focus, .badge-success[href]:hover {\r\n  background-color: #449d44;\r\n}\r\n\r\n.badge-info {\r\n  background-color: #5bc0de;\r\n}\r\n\r\n.badge-info[href]:focus, .badge-info[href]:hover {\r\n  background-color: #31b0d5;\r\n}\r\n\r\n.badge-warning {\r\n  background-color: #f0ad4e;\r\n}\r\n\r\n.badge-warning[href]:focus, .badge-warning[href]:hover {\r\n  background-color: #ec971f;\r\n}\r\n\r\n.badge-danger {\r\n  background-color: #d9534f;\r\n}\r\n\r\n.badge-danger[href]:focus, .badge-danger[href]:hover {\r\n  background-color: #c9302c;\r\n}\r\n\r\n.jumbotron {\r\n  padding: 2rem 1rem;\r\n  margin-bottom: 2rem;\r\n  background-color: #eceeef;\r\n  border-radius: 0.3rem;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .jumbotron {\r\n    padding: 4rem 2rem;\r\n  }\r\n}\r\n\r\n.jumbotron-hr {\r\n  border-top-color: #d0d5d8;\r\n}\r\n\r\n.jumbotron-fluid {\r\n  padding-right: 0;\r\n  padding-left: 0;\r\n  border-radius: 0;\r\n}\r\n\r\n.alert {\r\n  padding: 0.75rem 1.25rem;\r\n  margin-bottom: 1rem;\r\n  border: 1px solid transparent;\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.alert-heading {\r\n  color: inherit;\r\n}\r\n\r\n.alert-link {\r\n  font-weight: bold;\r\n}\r\n\r\n.alert-dismissible .close {\r\n  position: relative;\r\n  top: -0.75rem;\r\n  right: -1.25rem;\r\n  padding: 0.75rem 1.25rem;\r\n  color: inherit;\r\n}\r\n\r\n.alert-success {\r\n  background-color: #dff0d8;\r\n  border-color: #d0e9c6;\r\n  color: #3c763d;\r\n}\r\n\r\n.alert-success hr {\r\n  border-top-color: #c1e2b3;\r\n}\r\n\r\n.alert-success .alert-link {\r\n  color: #2b542c;\r\n}\r\n\r\n.alert-info {\r\n  background-color: #d9edf7;\r\n  border-color: #bcdff1;\r\n  color: #31708f;\r\n}\r\n\r\n.alert-info hr {\r\n  border-top-color: #a6d5ec;\r\n}\r\n\r\n.alert-info .alert-link {\r\n  color: #245269;\r\n}\r\n\r\n.alert-warning {\r\n  background-color: #fcf8e3;\r\n  border-color: #faf2cc;\r\n  color: #8a6d3b;\r\n}\r\n\r\n.alert-warning hr {\r\n  border-top-color: #f7ecb5;\r\n}\r\n\r\n.alert-warning .alert-link {\r\n  color: #66512c;\r\n}\r\n\r\n.alert-danger {\r\n  background-color: #f2dede;\r\n  border-color: #ebcccc;\r\n  color: #a94442;\r\n}\r\n\r\n.alert-danger hr {\r\n  border-top-color: #e4b9b9;\r\n}\r\n\r\n.alert-danger .alert-link {\r\n  color: #843534;\r\n}\r\n\r\n@-webkit-keyframes progress-bar-stripes {\r\n  from {\r\n    background-position: 1rem 0;\r\n  }\r\n  to {\r\n    background-position: 0 0;\r\n  }\r\n}\r\n\r\n@-o-keyframes progress-bar-stripes {\r\n  from {\r\n    background-position: 1rem 0;\r\n  }\r\n  to {\r\n    background-position: 0 0;\r\n  }\r\n}\r\n\r\n@keyframes progress-bar-stripes {\r\n  from {\r\n    background-position: 1rem 0;\r\n  }\r\n  to {\r\n    background-position: 0 0;\r\n  }\r\n}\r\n\r\n.progress {\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  overflow: hidden;\r\n  font-size: 0.75rem;\r\n  line-height: 1rem;\r\n  text-align: center;\r\n  background-color: #eceeef;\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.progress-bar {\r\n  height: 1rem;\r\n  color: #fff;\r\n  background-color: #0275d8;\r\n}\r\n\r\n.progress-bar-striped {\r\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\r\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\r\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\r\n  -webkit-background-size: 1rem 1rem;\r\n          background-size: 1rem 1rem;\r\n}\r\n\r\n.progress-bar-animated {\r\n  -webkit-animation: progress-bar-stripes 1s linear infinite;\r\n       -o-animation: progress-bar-stripes 1s linear infinite;\r\n          animation: progress-bar-stripes 1s linear infinite;\r\n}\r\n\r\n.media {\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: start;\r\n  -webkit-align-items: flex-start;\r\n      -ms-flex-align: start;\r\n          align-items: flex-start;\r\n}\r\n\r\n.media-body {\r\n  -webkit-box-flex: 1;\r\n  -webkit-flex: 1 1 0%;\r\n      -ms-flex: 1 1 0%;\r\n          flex: 1 1 0%;\r\n}\r\n\r\n.list-group {\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n  -webkit-flex-direction: column;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  padding-left: 0;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.list-group-item-action {\r\n  width: 100%;\r\n  color: #464a4c;\r\n  text-align: inherit;\r\n}\r\n\r\n.list-group-item-action .list-group-item-heading {\r\n  color: #292b2c;\r\n}\r\n\r\n.list-group-item-action:focus, .list-group-item-action:hover {\r\n  color: #464a4c;\r\n  text-decoration: none;\r\n  background-color: #f7f7f9;\r\n}\r\n\r\n.list-group-item-action:active {\r\n  color: #292b2c;\r\n  background-color: #eceeef;\r\n}\r\n\r\n.list-group-item {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-flex-flow: row wrap;\r\n      -ms-flex-flow: row wrap;\r\n          flex-flow: row wrap;\r\n  -webkit-box-align: center;\r\n  -webkit-align-items: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  padding: 0.75rem 1.25rem;\r\n  margin-bottom: -1px;\r\n  background-color: #fff;\r\n  border: 1px solid rgba(0, 0, 0, 0.125);\r\n}\r\n\r\n.list-group-item:first-child {\r\n  border-top-right-radius: 0.25rem;\r\n  border-top-left-radius: 0.25rem;\r\n}\r\n\r\n.list-group-item:last-child {\r\n  margin-bottom: 0;\r\n  border-bottom-right-radius: 0.25rem;\r\n  border-bottom-left-radius: 0.25rem;\r\n}\r\n\r\n.list-group-item:focus, .list-group-item:hover {\r\n  text-decoration: none;\r\n}\r\n\r\n.list-group-item.disabled, .list-group-item:disabled {\r\n  color: #636c72;\r\n  cursor: not-allowed;\r\n  background-color: #fff;\r\n}\r\n\r\n.list-group-item.disabled .list-group-item-heading, .list-group-item:disabled .list-group-item-heading {\r\n  color: inherit;\r\n}\r\n\r\n.list-group-item.disabled .list-group-item-text, .list-group-item:disabled .list-group-item-text {\r\n  color: #636c72;\r\n}\r\n\r\n.list-group-item.active {\r\n  z-index: 2;\r\n  color: #fff;\r\n  background-color: #0275d8;\r\n  border-color: #0275d8;\r\n}\r\n\r\n.list-group-item.active .list-group-item-heading,\r\n.list-group-item.active .list-group-item-heading > small,\r\n.list-group-item.active .list-group-item-heading > .small {\r\n  color: inherit;\r\n}\r\n\r\n.list-group-item.active .list-group-item-text {\r\n  color: #daeeff;\r\n}\r\n\r\n.list-group-flush .list-group-item {\r\n  border-right: 0;\r\n  border-left: 0;\r\n  border-radius: 0;\r\n}\r\n\r\n.list-group-flush:first-child .list-group-item:first-child {\r\n  border-top: 0;\r\n}\r\n\r\n.list-group-flush:last-child .list-group-item:last-child {\r\n  border-bottom: 0;\r\n}\r\n\r\n.list-group-item-success {\r\n  color: #3c763d;\r\n  background-color: #dff0d8;\r\n}\r\n\r\na.list-group-item-success,\r\nbutton.list-group-item-success {\r\n  color: #3c763d;\r\n}\r\n\r\na.list-group-item-success .list-group-item-heading,\r\nbutton.list-group-item-success .list-group-item-heading {\r\n  color: inherit;\r\n}\r\n\r\na.list-group-item-success:focus, a.list-group-item-success:hover,\r\nbutton.list-group-item-success:focus,\r\nbutton.list-group-item-success:hover {\r\n  color: #3c763d;\r\n  background-color: #d0e9c6;\r\n}\r\n\r\na.list-group-item-success.active,\r\nbutton.list-group-item-success.active {\r\n  color: #fff;\r\n  background-color: #3c763d;\r\n  border-color: #3c763d;\r\n}\r\n\r\n.list-group-item-info {\r\n  color: #31708f;\r\n  background-color: #d9edf7;\r\n}\r\n\r\na.list-group-item-info,\r\nbutton.list-group-item-info {\r\n  color: #31708f;\r\n}\r\n\r\na.list-group-item-info .list-group-item-heading,\r\nbutton.list-group-item-info .list-group-item-heading {\r\n  color: inherit;\r\n}\r\n\r\na.list-group-item-info:focus, a.list-group-item-info:hover,\r\nbutton.list-group-item-info:focus,\r\nbutton.list-group-item-info:hover {\r\n  color: #31708f;\r\n  background-color: #c4e3f3;\r\n}\r\n\r\na.list-group-item-info.active,\r\nbutton.list-group-item-info.active {\r\n  color: #fff;\r\n  background-color: #31708f;\r\n  border-color: #31708f;\r\n}\r\n\r\n.list-group-item-warning {\r\n  color: #8a6d3b;\r\n  background-color: #fcf8e3;\r\n}\r\n\r\na.list-group-item-warning,\r\nbutton.list-group-item-warning {\r\n  color: #8a6d3b;\r\n}\r\n\r\na.list-group-item-warning .list-group-item-heading,\r\nbutton.list-group-item-warning .list-group-item-heading {\r\n  color: inherit;\r\n}\r\n\r\na.list-group-item-warning:focus, a.list-group-item-warning:hover,\r\nbutton.list-group-item-warning:focus,\r\nbutton.list-group-item-warning:hover {\r\n  color: #8a6d3b;\r\n  background-color: #faf2cc;\r\n}\r\n\r\na.list-group-item-warning.active,\r\nbutton.list-group-item-warning.active {\r\n  color: #fff;\r\n  background-color: #8a6d3b;\r\n  border-color: #8a6d3b;\r\n}\r\n\r\n.list-group-item-danger {\r\n  color: #a94442;\r\n  background-color: #f2dede;\r\n}\r\n\r\na.list-group-item-danger,\r\nbutton.list-group-item-danger {\r\n  color: #a94442;\r\n}\r\n\r\na.list-group-item-danger .list-group-item-heading,\r\nbutton.list-group-item-danger .list-group-item-heading {\r\n  color: inherit;\r\n}\r\n\r\na.list-group-item-danger:focus, a.list-group-item-danger:hover,\r\nbutton.list-group-item-danger:focus,\r\nbutton.list-group-item-danger:hover {\r\n  color: #a94442;\r\n  background-color: #ebcccc;\r\n}\r\n\r\na.list-group-item-danger.active,\r\nbutton.list-group-item-danger.active {\r\n  color: #fff;\r\n  background-color: #a94442;\r\n  border-color: #a94442;\r\n}\r\n\r\n.embed-responsive {\r\n  position: relative;\r\n  display: block;\r\n  width: 100%;\r\n  padding: 0;\r\n  overflow: hidden;\r\n}\r\n\r\n.embed-responsive::before {\r\n  display: block;\r\n  content: \"\";\r\n}\r\n\r\n.embed-responsive .embed-responsive-item,\r\n.embed-responsive iframe,\r\n.embed-responsive embed,\r\n.embed-responsive object,\r\n.embed-responsive video {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  border: 0;\r\n}\r\n\r\n.embed-responsive-21by9::before {\r\n  padding-top: 42.857143%;\r\n}\r\n\r\n.embed-responsive-16by9::before {\r\n  padding-top: 56.25%;\r\n}\r\n\r\n.embed-responsive-4by3::before {\r\n  padding-top: 75%;\r\n}\r\n\r\n.embed-responsive-1by1::before {\r\n  padding-top: 100%;\r\n}\r\n\r\n.close {\r\n  float: right;\r\n  font-size: 1.5rem;\r\n  font-weight: bold;\r\n  line-height: 1;\r\n  color: #000;\r\n  text-shadow: 0 1px 0 #fff;\r\n  opacity: .5;\r\n}\r\n\r\n.close:focus, .close:hover {\r\n  color: #000;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  opacity: .75;\r\n}\r\n\r\nbutton.close {\r\n  padding: 0;\r\n  cursor: pointer;\r\n  background: transparent;\r\n  border: 0;\r\n  -webkit-appearance: none;\r\n}\r\n\r\n.modal-open {\r\n  overflow: hidden;\r\n}\r\n\r\n.modal {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 1050;\r\n  display: none;\r\n  overflow: hidden;\r\n  outline: 0;\r\n}\r\n\r\n.modal.fade .modal-dialog {\r\n  -webkit-transition: -webkit-transform 0.3s ease-out;\r\n  transition: -webkit-transform 0.3s ease-out;\r\n  -o-transition: -o-transform 0.3s ease-out;\r\n  transition: transform 0.3s ease-out;\r\n  transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out, -o-transform 0.3s ease-out;\r\n  -webkit-transform: translate(0, -25%);\r\n       -o-transform: translate(0, -25%);\r\n          transform: translate(0, -25%);\r\n}\r\n\r\n.modal.show .modal-dialog {\r\n  -webkit-transform: translate(0, 0);\r\n       -o-transform: translate(0, 0);\r\n          transform: translate(0, 0);\r\n}\r\n\r\n.modal-open .modal {\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n}\r\n\r\n.modal-dialog {\r\n  position: relative;\r\n  width: auto;\r\n  margin: 10px;\r\n}\r\n\r\n.modal-content {\r\n  position: relative;\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n  -webkit-flex-direction: column;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  background-color: #fff;\r\n  -webkit-background-clip: padding-box;\r\n          background-clip: padding-box;\r\n  border: 1px solid rgba(0, 0, 0, 0.2);\r\n  border-radius: 0.3rem;\r\n  outline: 0;\r\n}\r\n\r\n.modal-backdrop {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 1040;\r\n  background-color: #000;\r\n}\r\n\r\n.modal-backdrop.fade {\r\n  opacity: 0;\r\n}\r\n\r\n.modal-backdrop.show {\r\n  opacity: 0.5;\r\n}\r\n\r\n.modal-header {\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n  -webkit-align-items: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: justify;\r\n  -webkit-justify-content: space-between;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  padding: 15px;\r\n  border-bottom: 1px solid #eceeef;\r\n}\r\n\r\n.modal-title {\r\n  margin-bottom: 0;\r\n  line-height: 1.5;\r\n}\r\n\r\n.modal-body {\r\n  position: relative;\r\n  -webkit-box-flex: 1;\r\n  -webkit-flex: 1 1 auto;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n  padding: 15px;\r\n}\r\n\r\n.modal-footer {\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n  -webkit-align-items: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: end;\r\n  -webkit-justify-content: flex-end;\r\n      -ms-flex-pack: end;\r\n          justify-content: flex-end;\r\n  padding: 15px;\r\n  border-top: 1px solid #eceeef;\r\n}\r\n\r\n.modal-footer > :not(:first-child) {\r\n  margin-left: .25rem;\r\n}\r\n\r\n.modal-footer > :not(:last-child) {\r\n  margin-right: .25rem;\r\n}\r\n\r\n.modal-scrollbar-measure {\r\n  position: absolute;\r\n  top: -9999px;\r\n  width: 50px;\r\n  height: 50px;\r\n  overflow: scroll;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .modal-dialog {\r\n    max-width: 500px;\r\n    margin: 30px auto;\r\n  }\r\n  .modal-sm {\r\n    max-width: 300px;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .modal-lg {\r\n    max-width: 800px;\r\n  }\r\n}\r\n\r\n.tooltip {\r\n  position: absolute;\r\n  z-index: 1070;\r\n  display: block;\r\n  font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  letter-spacing: normal;\r\n  line-break: auto;\r\n  line-height: 1.5;\r\n  text-align: left;\r\n  text-align: start;\r\n  text-decoration: none;\r\n  text-shadow: none;\r\n  text-transform: none;\r\n  white-space: normal;\r\n  word-break: normal;\r\n  word-spacing: normal;\r\n  font-size: 0.875rem;\r\n  word-wrap: break-word;\r\n  opacity: 0;\r\n}\r\n\r\n.tooltip.show {\r\n  opacity: 0.9;\r\n}\r\n\r\n.tooltip.tooltip-top, .tooltip.bs-tether-element-attached-bottom {\r\n  padding: 5px 0;\r\n  margin-top: -3px;\r\n}\r\n\r\n.tooltip.tooltip-top .tooltip-inner::before, .tooltip.bs-tether-element-attached-bottom .tooltip-inner::before {\r\n  bottom: 0;\r\n  left: 50%;\r\n  margin-left: -5px;\r\n  content: \"\";\r\n  border-width: 5px 5px 0;\r\n  border-top-color: #000;\r\n}\r\n\r\n.tooltip.tooltip-right, .tooltip.bs-tether-element-attached-left {\r\n  padding: 0 5px;\r\n  margin-left: 3px;\r\n}\r\n\r\n.tooltip.tooltip-right .tooltip-inner::before, .tooltip.bs-tether-element-attached-left .tooltip-inner::before {\r\n  top: 50%;\r\n  left: 0;\r\n  margin-top: -5px;\r\n  content: \"\";\r\n  border-width: 5px 5px 5px 0;\r\n  border-right-color: #000;\r\n}\r\n\r\n.tooltip.tooltip-bottom, .tooltip.bs-tether-element-attached-top {\r\n  padding: 5px 0;\r\n  margin-top: 3px;\r\n}\r\n\r\n.tooltip.tooltip-bottom .tooltip-inner::before, .tooltip.bs-tether-element-attached-top .tooltip-inner::before {\r\n  top: 0;\r\n  left: 50%;\r\n  margin-left: -5px;\r\n  content: \"\";\r\n  border-width: 0 5px 5px;\r\n  border-bottom-color: #000;\r\n}\r\n\r\n.tooltip.tooltip-left, .tooltip.bs-tether-element-attached-right {\r\n  padding: 0 5px;\r\n  margin-left: -3px;\r\n}\r\n\r\n.tooltip.tooltip-left .tooltip-inner::before, .tooltip.bs-tether-element-attached-right .tooltip-inner::before {\r\n  top: 50%;\r\n  right: 0;\r\n  margin-top: -5px;\r\n  content: \"\";\r\n  border-width: 5px 0 5px 5px;\r\n  border-left-color: #000;\r\n}\r\n\r\n.tooltip-inner {\r\n  max-width: 200px;\r\n  padding: 3px 8px;\r\n  color: #fff;\r\n  text-align: center;\r\n  background-color: #000;\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.tooltip-inner::before {\r\n  position: absolute;\r\n  width: 0;\r\n  height: 0;\r\n  border-color: transparent;\r\n  border-style: solid;\r\n}\r\n\r\n.popover {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1060;\r\n  display: block;\r\n  max-width: 276px;\r\n  padding: 1px;\r\n  font-family: -apple-system, system-ui, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  letter-spacing: normal;\r\n  line-break: auto;\r\n  line-height: 1.5;\r\n  text-align: left;\r\n  text-align: start;\r\n  text-decoration: none;\r\n  text-shadow: none;\r\n  text-transform: none;\r\n  white-space: normal;\r\n  word-break: normal;\r\n  word-spacing: normal;\r\n  font-size: 0.875rem;\r\n  word-wrap: break-word;\r\n  background-color: #fff;\r\n  -webkit-background-clip: padding-box;\r\n          background-clip: padding-box;\r\n  border: 1px solid rgba(0, 0, 0, 0.2);\r\n  border-radius: 0.3rem;\r\n}\r\n\r\n.popover.popover-top, .popover.bs-tether-element-attached-bottom {\r\n  margin-top: -10px;\r\n}\r\n\r\n.popover.popover-top::before, .popover.popover-top::after, .popover.bs-tether-element-attached-bottom::before, .popover.bs-tether-element-attached-bottom::after {\r\n  left: 50%;\r\n  border-bottom-width: 0;\r\n}\r\n\r\n.popover.popover-top::before, .popover.bs-tether-element-attached-bottom::before {\r\n  bottom: -11px;\r\n  margin-left: -11px;\r\n  border-top-color: rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n.popover.popover-top::after, .popover.bs-tether-element-attached-bottom::after {\r\n  bottom: -10px;\r\n  margin-left: -10px;\r\n  border-top-color: #fff;\r\n}\r\n\r\n.popover.popover-right, .popover.bs-tether-element-attached-left {\r\n  margin-left: 10px;\r\n}\r\n\r\n.popover.popover-right::before, .popover.popover-right::after, .popover.bs-tether-element-attached-left::before, .popover.bs-tether-element-attached-left::after {\r\n  top: 50%;\r\n  border-left-width: 0;\r\n}\r\n\r\n.popover.popover-right::before, .popover.bs-tether-element-attached-left::before {\r\n  left: -11px;\r\n  margin-top: -11px;\r\n  border-right-color: rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n.popover.popover-right::after, .popover.bs-tether-element-attached-left::after {\r\n  left: -10px;\r\n  margin-top: -10px;\r\n  border-right-color: #fff;\r\n}\r\n\r\n.popover.popover-bottom, .popover.bs-tether-element-attached-top {\r\n  margin-top: 10px;\r\n}\r\n\r\n.popover.popover-bottom::before, .popover.popover-bottom::after, .popover.bs-tether-element-attached-top::before, .popover.bs-tether-element-attached-top::after {\r\n  left: 50%;\r\n  border-top-width: 0;\r\n}\r\n\r\n.popover.popover-bottom::before, .popover.bs-tether-element-attached-top::before {\r\n  top: -11px;\r\n  margin-left: -11px;\r\n  border-bottom-color: rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n.popover.popover-bottom::after, .popover.bs-tether-element-attached-top::after {\r\n  top: -10px;\r\n  margin-left: -10px;\r\n  border-bottom-color: #f7f7f7;\r\n}\r\n\r\n.popover.popover-bottom .popover-title::before, .popover.bs-tether-element-attached-top .popover-title::before {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 50%;\r\n  display: block;\r\n  width: 20px;\r\n  margin-left: -10px;\r\n  content: \"\";\r\n  border-bottom: 1px solid #f7f7f7;\r\n}\r\n\r\n.popover.popover-left, .popover.bs-tether-element-attached-right {\r\n  margin-left: -10px;\r\n}\r\n\r\n.popover.popover-left::before, .popover.popover-left::after, .popover.bs-tether-element-attached-right::before, .popover.bs-tether-element-attached-right::after {\r\n  top: 50%;\r\n  border-right-width: 0;\r\n}\r\n\r\n.popover.popover-left::before, .popover.bs-tether-element-attached-right::before {\r\n  right: -11px;\r\n  margin-top: -11px;\r\n  border-left-color: rgba(0, 0, 0, 0.25);\r\n}\r\n\r\n.popover.popover-left::after, .popover.bs-tether-element-attached-right::after {\r\n  right: -10px;\r\n  margin-top: -10px;\r\n  border-left-color: #fff;\r\n}\r\n\r\n.popover-title {\r\n  padding: 8px 14px;\r\n  margin-bottom: 0;\r\n  font-size: 1rem;\r\n  background-color: #f7f7f7;\r\n  border-bottom: 1px solid #ebebeb;\r\n  border-top-right-radius: calc(0.3rem - 1px);\r\n  border-top-left-radius: calc(0.3rem - 1px);\r\n}\r\n\r\n.popover-title:empty {\r\n  display: none;\r\n}\r\n\r\n.popover-content {\r\n  padding: 9px 14px;\r\n}\r\n\r\n.popover::before,\r\n.popover::after {\r\n  position: absolute;\r\n  display: block;\r\n  width: 0;\r\n  height: 0;\r\n  border-color: transparent;\r\n  border-style: solid;\r\n}\r\n\r\n.popover::before {\r\n  content: \"\";\r\n  border-width: 11px;\r\n}\r\n\r\n.popover::after {\r\n  content: \"\";\r\n  border-width: 10px;\r\n}\r\n\r\n.carousel {\r\n  position: relative;\r\n}\r\n\r\n.carousel-inner {\r\n  position: relative;\r\n  width: 100%;\r\n  overflow: hidden;\r\n}\r\n\r\n.carousel-item {\r\n  position: relative;\r\n  display: none;\r\n  width: 100%;\r\n}\r\n\r\n@media (-webkit-transform-3d) {\r\n  .carousel-item {\r\n    -webkit-transition: -webkit-transform 0.6s ease-in-out;\r\n    transition: -webkit-transform 0.6s ease-in-out;\r\n    -o-transition: -o-transform 0.6s ease-in-out;\r\n    transition: transform 0.6s ease-in-out;\r\n    transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out, -o-transform 0.6s ease-in-out;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n    -webkit-perspective: 1000px;\r\n            perspective: 1000px;\r\n  }\r\n}\r\n\r\n@supports ((-webkit-transform: translate3d(0, 0, 0)) or (transform: translate3d(0, 0, 0))) {\r\n  .carousel-item {\r\n    -webkit-transition: -webkit-transform 0.6s ease-in-out;\r\n    transition: -webkit-transform 0.6s ease-in-out;\r\n    -o-transition: -o-transform 0.6s ease-in-out;\r\n    transition: transform 0.6s ease-in-out;\r\n    transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out, -o-transform 0.6s ease-in-out;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n    -webkit-perspective: 1000px;\r\n            perspective: 1000px;\r\n  }\r\n}\r\n\r\n.carousel-item.active,\r\n.carousel-item-next,\r\n.carousel-item-prev {\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n\r\n.carousel-item-next,\r\n.carousel-item-prev {\r\n  position: absolute;\r\n  top: 0;\r\n}\r\n\r\n@media (-webkit-transform-3d) {\r\n  .carousel-item-next.carousel-item-left,\r\n  .carousel-item-prev.carousel-item-right {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\r\n  }\r\n  .carousel-item-next,\r\n  .active.carousel-item-right {\r\n    -webkit-transform: translate3d(100%, 0, 0);\r\n            transform: translate3d(100%, 0, 0);\r\n  }\r\n  .carousel-item-prev,\r\n  .active.carousel-item-left {\r\n    -webkit-transform: translate3d(-100%, 0, 0);\r\n            transform: translate3d(-100%, 0, 0);\r\n  }\r\n}\r\n\r\n@supports ((-webkit-transform: translate3d(0, 0, 0)) or (transform: translate3d(0, 0, 0))) {\r\n  .carousel-item-next.carousel-item-left,\r\n  .carousel-item-prev.carousel-item-right {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n            transform: translate3d(0, 0, 0);\r\n  }\r\n  .carousel-item-next,\r\n  .active.carousel-item-right {\r\n    -webkit-transform: translate3d(100%, 0, 0);\r\n            transform: translate3d(100%, 0, 0);\r\n  }\r\n  .carousel-item-prev,\r\n  .active.carousel-item-left {\r\n    -webkit-transform: translate3d(-100%, 0, 0);\r\n            transform: translate3d(-100%, 0, 0);\r\n  }\r\n}\r\n\r\n.carousel-control-prev,\r\n.carousel-control-next {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n  -webkit-align-items: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -webkit-box-pack: center;\r\n  -webkit-justify-content: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  width: 15%;\r\n  color: #fff;\r\n  text-align: center;\r\n  opacity: 0.5;\r\n}\r\n\r\n.carousel-control-prev:focus, .carousel-control-prev:hover,\r\n.carousel-control-next:focus,\r\n.carousel-control-next:hover {\r\n  color: #fff;\r\n  text-decoration: none;\r\n  outline: 0;\r\n  opacity: .9;\r\n}\r\n\r\n.carousel-control-prev {\r\n  left: 0;\r\n}\r\n\r\n.carousel-control-next {\r\n  right: 0;\r\n}\r\n\r\n.carousel-control-prev-icon,\r\n.carousel-control-next-icon {\r\n  display: inline-block;\r\n  width: 20px;\r\n  height: 20px;\r\n  background: transparent no-repeat center center;\r\n  -webkit-background-size: 100% 100%;\r\n          background-size: 100% 100%;\r\n}\r\n\r\n.carousel-control-prev-icon {\r\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M4 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\");\r\n}\r\n\r\n.carousel-control-next-icon {\r\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M1.5 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\");\r\n}\r\n\r\n.carousel-indicators {\r\n  position: absolute;\r\n  right: 0;\r\n  bottom: 10px;\r\n  left: 0;\r\n  z-index: 15;\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n  -webkit-justify-content: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  padding-left: 0;\r\n  margin-right: 15%;\r\n  margin-left: 15%;\r\n  list-style: none;\r\n}\r\n\r\n.carousel-indicators li {\r\n  position: relative;\r\n  -webkit-box-flex: 1;\r\n  -webkit-flex: 1 0 auto;\r\n      -ms-flex: 1 0 auto;\r\n          flex: 1 0 auto;\r\n  max-width: 30px;\r\n  height: 3px;\r\n  margin-right: 3px;\r\n  margin-left: 3px;\r\n  text-indent: -999px;\r\n  cursor: pointer;\r\n  background-color: rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n.carousel-indicators li::before {\r\n  position: absolute;\r\n  top: -10px;\r\n  left: 0;\r\n  display: inline-block;\r\n  width: 100%;\r\n  height: 10px;\r\n  content: \"\";\r\n}\r\n\r\n.carousel-indicators li::after {\r\n  position: absolute;\r\n  bottom: -10px;\r\n  left: 0;\r\n  display: inline-block;\r\n  width: 100%;\r\n  height: 10px;\r\n  content: \"\";\r\n}\r\n\r\n.carousel-indicators .active {\r\n  background-color: #fff;\r\n}\r\n\r\n.carousel-caption {\r\n  position: absolute;\r\n  right: 15%;\r\n  bottom: 20px;\r\n  left: 15%;\r\n  z-index: 10;\r\n  padding-top: 20px;\r\n  padding-bottom: 20px;\r\n  color: #fff;\r\n  text-align: center;\r\n}\r\n\r\n.align-baseline {\r\n  vertical-align: baseline !important;\r\n}\r\n\r\n.align-top {\r\n  vertical-align: top !important;\r\n}\r\n\r\n.align-middle {\r\n  vertical-align: middle !important;\r\n}\r\n\r\n.align-bottom {\r\n  vertical-align: bottom !important;\r\n}\r\n\r\n.align-text-bottom {\r\n  vertical-align: text-bottom !important;\r\n}\r\n\r\n.align-text-top {\r\n  vertical-align: text-top !important;\r\n}\r\n\r\n.bg-faded {\r\n  background-color: #f7f7f7;\r\n}\r\n\r\n.bg-primary {\r\n  background-color: #0275d8 !important;\r\n}\r\n\r\na.bg-primary:focus, a.bg-primary:hover {\r\n  background-color: #025aa5 !important;\r\n}\r\n\r\n.bg-success {\r\n  background-color: #5cb85c !important;\r\n}\r\n\r\na.bg-success:focus, a.bg-success:hover {\r\n  background-color: #449d44 !important;\r\n}\r\n\r\n.bg-info {\r\n  background-color: #5bc0de !important;\r\n}\r\n\r\na.bg-info:focus, a.bg-info:hover {\r\n  background-color: #31b0d5 !important;\r\n}\r\n\r\n.bg-warning {\r\n  background-color: #f0ad4e !important;\r\n}\r\n\r\na.bg-warning:focus, a.bg-warning:hover {\r\n  background-color: #ec971f !important;\r\n}\r\n\r\n.bg-danger {\r\n  background-color: #d9534f !important;\r\n}\r\n\r\na.bg-danger:focus, a.bg-danger:hover {\r\n  background-color: #c9302c !important;\r\n}\r\n\r\n.bg-inverse {\r\n  background-color: #292b2c !important;\r\n}\r\n\r\na.bg-inverse:focus, a.bg-inverse:hover {\r\n  background-color: #101112 !important;\r\n}\r\n\r\n.border-0 {\r\n  border: 0 !important;\r\n}\r\n\r\n.border-top-0 {\r\n  border-top: 0 !important;\r\n}\r\n\r\n.border-right-0 {\r\n  border-right: 0 !important;\r\n}\r\n\r\n.border-bottom-0 {\r\n  border-bottom: 0 !important;\r\n}\r\n\r\n.border-left-0 {\r\n  border-left: 0 !important;\r\n}\r\n\r\n.rounded {\r\n  border-radius: 0.25rem;\r\n}\r\n\r\n.rounded-top {\r\n  border-top-right-radius: 0.25rem;\r\n  border-top-left-radius: 0.25rem;\r\n}\r\n\r\n.rounded-right {\r\n  border-bottom-right-radius: 0.25rem;\r\n  border-top-right-radius: 0.25rem;\r\n}\r\n\r\n.rounded-bottom {\r\n  border-bottom-right-radius: 0.25rem;\r\n  border-bottom-left-radius: 0.25rem;\r\n}\r\n\r\n.rounded-left {\r\n  border-bottom-left-radius: 0.25rem;\r\n  border-top-left-radius: 0.25rem;\r\n}\r\n\r\n.rounded-circle {\r\n  border-radius: 50%;\r\n}\r\n\r\n.rounded-0 {\r\n  border-radius: 0;\r\n}\r\n\r\n.clearfix::after {\r\n  display: block;\r\n  content: \"\";\r\n  clear: both;\r\n}\r\n\r\n.d-none {\r\n  display: none !important;\r\n}\r\n\r\n.d-inline {\r\n  display: inline !important;\r\n}\r\n\r\n.d-inline-block {\r\n  display: inline-block !important;\r\n}\r\n\r\n.d-block {\r\n  display: block !important;\r\n}\r\n\r\n.d-table {\r\n  display: table !important;\r\n}\r\n\r\n.d-table-cell {\r\n  display: table-cell !important;\r\n}\r\n\r\n.d-flex {\r\n  display: -webkit-box !important;\r\n  display: -webkit-flex !important;\r\n  display: -ms-flexbox !important;\r\n  display: flex !important;\r\n}\r\n\r\n.d-inline-flex {\r\n  display: -webkit-inline-box !important;\r\n  display: -webkit-inline-flex !important;\r\n  display: -ms-inline-flexbox !important;\r\n  display: inline-flex !important;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .d-sm-none {\r\n    display: none !important;\r\n  }\r\n  .d-sm-inline {\r\n    display: inline !important;\r\n  }\r\n  .d-sm-inline-block {\r\n    display: inline-block !important;\r\n  }\r\n  .d-sm-block {\r\n    display: block !important;\r\n  }\r\n  .d-sm-table {\r\n    display: table !important;\r\n  }\r\n  .d-sm-table-cell {\r\n    display: table-cell !important;\r\n  }\r\n  .d-sm-flex {\r\n    display: -webkit-box !important;\r\n    display: -webkit-flex !important;\r\n    display: -ms-flexbox !important;\r\n    display: flex !important;\r\n  }\r\n  .d-sm-inline-flex {\r\n    display: -webkit-inline-box !important;\r\n    display: -webkit-inline-flex !important;\r\n    display: -ms-inline-flexbox !important;\r\n    display: inline-flex !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .d-md-none {\r\n    display: none !important;\r\n  }\r\n  .d-md-inline {\r\n    display: inline !important;\r\n  }\r\n  .d-md-inline-block {\r\n    display: inline-block !important;\r\n  }\r\n  .d-md-block {\r\n    display: block !important;\r\n  }\r\n  .d-md-table {\r\n    display: table !important;\r\n  }\r\n  .d-md-table-cell {\r\n    display: table-cell !important;\r\n  }\r\n  .d-md-flex {\r\n    display: -webkit-box !important;\r\n    display: -webkit-flex !important;\r\n    display: -ms-flexbox !important;\r\n    display: flex !important;\r\n  }\r\n  .d-md-inline-flex {\r\n    display: -webkit-inline-box !important;\r\n    display: -webkit-inline-flex !important;\r\n    display: -ms-inline-flexbox !important;\r\n    display: inline-flex !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .d-lg-none {\r\n    display: none !important;\r\n  }\r\n  .d-lg-inline {\r\n    display: inline !important;\r\n  }\r\n  .d-lg-inline-block {\r\n    display: inline-block !important;\r\n  }\r\n  .d-lg-block {\r\n    display: block !important;\r\n  }\r\n  .d-lg-table {\r\n    display: table !important;\r\n  }\r\n  .d-lg-table-cell {\r\n    display: table-cell !important;\r\n  }\r\n  .d-lg-flex {\r\n    display: -webkit-box !important;\r\n    display: -webkit-flex !important;\r\n    display: -ms-flexbox !important;\r\n    display: flex !important;\r\n  }\r\n  .d-lg-inline-flex {\r\n    display: -webkit-inline-box !important;\r\n    display: -webkit-inline-flex !important;\r\n    display: -ms-inline-flexbox !important;\r\n    display: inline-flex !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .d-xl-none {\r\n    display: none !important;\r\n  }\r\n  .d-xl-inline {\r\n    display: inline !important;\r\n  }\r\n  .d-xl-inline-block {\r\n    display: inline-block !important;\r\n  }\r\n  .d-xl-block {\r\n    display: block !important;\r\n  }\r\n  .d-xl-table {\r\n    display: table !important;\r\n  }\r\n  .d-xl-table-cell {\r\n    display: table-cell !important;\r\n  }\r\n  .d-xl-flex {\r\n    display: -webkit-box !important;\r\n    display: -webkit-flex !important;\r\n    display: -ms-flexbox !important;\r\n    display: flex !important;\r\n  }\r\n  .d-xl-inline-flex {\r\n    display: -webkit-inline-box !important;\r\n    display: -webkit-inline-flex !important;\r\n    display: -ms-inline-flexbox !important;\r\n    display: inline-flex !important;\r\n  }\r\n}\r\n\r\n.flex-first {\r\n  -webkit-box-ordinal-group: 0;\r\n  -webkit-order: -1;\r\n      -ms-flex-order: -1;\r\n          order: -1;\r\n}\r\n\r\n.flex-last {\r\n  -webkit-box-ordinal-group: 2;\r\n  -webkit-order: 1;\r\n      -ms-flex-order: 1;\r\n          order: 1;\r\n}\r\n\r\n.flex-unordered {\r\n  -webkit-box-ordinal-group: 1;\r\n  -webkit-order: 0;\r\n      -ms-flex-order: 0;\r\n          order: 0;\r\n}\r\n\r\n.flex-row {\r\n  -webkit-box-orient: horizontal !important;\r\n  -webkit-box-direction: normal !important;\r\n  -webkit-flex-direction: row !important;\r\n      -ms-flex-direction: row !important;\r\n          flex-direction: row !important;\r\n}\r\n\r\n.flex-column {\r\n  -webkit-box-orient: vertical !important;\r\n  -webkit-box-direction: normal !important;\r\n  -webkit-flex-direction: column !important;\r\n      -ms-flex-direction: column !important;\r\n          flex-direction: column !important;\r\n}\r\n\r\n.flex-row-reverse {\r\n  -webkit-box-orient: horizontal !important;\r\n  -webkit-box-direction: reverse !important;\r\n  -webkit-flex-direction: row-reverse !important;\r\n      -ms-flex-direction: row-reverse !important;\r\n          flex-direction: row-reverse !important;\r\n}\r\n\r\n.flex-column-reverse {\r\n  -webkit-box-orient: vertical !important;\r\n  -webkit-box-direction: reverse !important;\r\n  -webkit-flex-direction: column-reverse !important;\r\n      -ms-flex-direction: column-reverse !important;\r\n          flex-direction: column-reverse !important;\r\n}\r\n\r\n.flex-wrap {\r\n  -webkit-flex-wrap: wrap !important;\r\n      -ms-flex-wrap: wrap !important;\r\n          flex-wrap: wrap !important;\r\n}\r\n\r\n.flex-nowrap {\r\n  -webkit-flex-wrap: nowrap !important;\r\n      -ms-flex-wrap: nowrap !important;\r\n          flex-wrap: nowrap !important;\r\n}\r\n\r\n.flex-wrap-reverse {\r\n  -webkit-flex-wrap: wrap-reverse !important;\r\n      -ms-flex-wrap: wrap-reverse !important;\r\n          flex-wrap: wrap-reverse !important;\r\n}\r\n\r\n.justify-content-start {\r\n  -webkit-box-pack: start !important;\r\n  -webkit-justify-content: flex-start !important;\r\n      -ms-flex-pack: start !important;\r\n          justify-content: flex-start !important;\r\n}\r\n\r\n.justify-content-end {\r\n  -webkit-box-pack: end !important;\r\n  -webkit-justify-content: flex-end !important;\r\n      -ms-flex-pack: end !important;\r\n          justify-content: flex-end !important;\r\n}\r\n\r\n.justify-content-center {\r\n  -webkit-box-pack: center !important;\r\n  -webkit-justify-content: center !important;\r\n      -ms-flex-pack: center !important;\r\n          justify-content: center !important;\r\n}\r\n\r\n.justify-content-between {\r\n  -webkit-box-pack: justify !important;\r\n  -webkit-justify-content: space-between !important;\r\n      -ms-flex-pack: justify !important;\r\n          justify-content: space-between !important;\r\n}\r\n\r\n.justify-content-around {\r\n  -webkit-justify-content: space-around !important;\r\n      -ms-flex-pack: distribute !important;\r\n          justify-content: space-around !important;\r\n}\r\n\r\n.align-items-start {\r\n  -webkit-box-align: start !important;\r\n  -webkit-align-items: flex-start !important;\r\n      -ms-flex-align: start !important;\r\n          align-items: flex-start !important;\r\n}\r\n\r\n.align-items-end {\r\n  -webkit-box-align: end !important;\r\n  -webkit-align-items: flex-end !important;\r\n      -ms-flex-align: end !important;\r\n          align-items: flex-end !important;\r\n}\r\n\r\n.align-items-center {\r\n  -webkit-box-align: center !important;\r\n  -webkit-align-items: center !important;\r\n      -ms-flex-align: center !important;\r\n          align-items: center !important;\r\n}\r\n\r\n.align-items-baseline {\r\n  -webkit-box-align: baseline !important;\r\n  -webkit-align-items: baseline !important;\r\n      -ms-flex-align: baseline !important;\r\n          align-items: baseline !important;\r\n}\r\n\r\n.align-items-stretch {\r\n  -webkit-box-align: stretch !important;\r\n  -webkit-align-items: stretch !important;\r\n      -ms-flex-align: stretch !important;\r\n          align-items: stretch !important;\r\n}\r\n\r\n.align-content-start {\r\n  -webkit-align-content: flex-start !important;\r\n      -ms-flex-line-pack: start !important;\r\n          align-content: flex-start !important;\r\n}\r\n\r\n.align-content-end {\r\n  -webkit-align-content: flex-end !important;\r\n      -ms-flex-line-pack: end !important;\r\n          align-content: flex-end !important;\r\n}\r\n\r\n.align-content-center {\r\n  -webkit-align-content: center !important;\r\n      -ms-flex-line-pack: center !important;\r\n          align-content: center !important;\r\n}\r\n\r\n.align-content-between {\r\n  -webkit-align-content: space-between !important;\r\n      -ms-flex-line-pack: justify !important;\r\n          align-content: space-between !important;\r\n}\r\n\r\n.align-content-around {\r\n  -webkit-align-content: space-around !important;\r\n      -ms-flex-line-pack: distribute !important;\r\n          align-content: space-around !important;\r\n}\r\n\r\n.align-content-stretch {\r\n  -webkit-align-content: stretch !important;\r\n      -ms-flex-line-pack: stretch !important;\r\n          align-content: stretch !important;\r\n}\r\n\r\n.align-self-auto {\r\n  -webkit-align-self: auto !important;\r\n      -ms-flex-item-align: auto !important;\r\n              -ms-grid-row-align: auto !important;\r\n          align-self: auto !important;\r\n}\r\n\r\n.align-self-start {\r\n  -webkit-align-self: flex-start !important;\r\n      -ms-flex-item-align: start !important;\r\n          align-self: flex-start !important;\r\n}\r\n\r\n.align-self-end {\r\n  -webkit-align-self: flex-end !important;\r\n      -ms-flex-item-align: end !important;\r\n          align-self: flex-end !important;\r\n}\r\n\r\n.align-self-center {\r\n  -webkit-align-self: center !important;\r\n      -ms-flex-item-align: center !important;\r\n              -ms-grid-row-align: center !important;\r\n          align-self: center !important;\r\n}\r\n\r\n.align-self-baseline {\r\n  -webkit-align-self: baseline !important;\r\n      -ms-flex-item-align: baseline !important;\r\n          align-self: baseline !important;\r\n}\r\n\r\n.align-self-stretch {\r\n  -webkit-align-self: stretch !important;\r\n      -ms-flex-item-align: stretch !important;\r\n              -ms-grid-row-align: stretch !important;\r\n          align-self: stretch !important;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .flex-sm-first {\r\n    -webkit-box-ordinal-group: 0;\r\n    -webkit-order: -1;\r\n        -ms-flex-order: -1;\r\n            order: -1;\r\n  }\r\n  .flex-sm-last {\r\n    -webkit-box-ordinal-group: 2;\r\n    -webkit-order: 1;\r\n        -ms-flex-order: 1;\r\n            order: 1;\r\n  }\r\n  .flex-sm-unordered {\r\n    -webkit-box-ordinal-group: 1;\r\n    -webkit-order: 0;\r\n        -ms-flex-order: 0;\r\n            order: 0;\r\n  }\r\n  .flex-sm-row {\r\n    -webkit-box-orient: horizontal !important;\r\n    -webkit-box-direction: normal !important;\r\n    -webkit-flex-direction: row !important;\r\n        -ms-flex-direction: row !important;\r\n            flex-direction: row !important;\r\n  }\r\n  .flex-sm-column {\r\n    -webkit-box-orient: vertical !important;\r\n    -webkit-box-direction: normal !important;\r\n    -webkit-flex-direction: column !important;\r\n        -ms-flex-direction: column !important;\r\n            flex-direction: column !important;\r\n  }\r\n  .flex-sm-row-reverse {\r\n    -webkit-box-orient: horizontal !important;\r\n    -webkit-box-direction: reverse !important;\r\n    -webkit-flex-direction: row-reverse !important;\r\n        -ms-flex-direction: row-reverse !important;\r\n            flex-direction: row-reverse !important;\r\n  }\r\n  .flex-sm-column-reverse {\r\n    -webkit-box-orient: vertical !important;\r\n    -webkit-box-direction: reverse !important;\r\n    -webkit-flex-direction: column-reverse !important;\r\n        -ms-flex-direction: column-reverse !important;\r\n            flex-direction: column-reverse !important;\r\n  }\r\n  .flex-sm-wrap {\r\n    -webkit-flex-wrap: wrap !important;\r\n        -ms-flex-wrap: wrap !important;\r\n            flex-wrap: wrap !important;\r\n  }\r\n  .flex-sm-nowrap {\r\n    -webkit-flex-wrap: nowrap !important;\r\n        -ms-flex-wrap: nowrap !important;\r\n            flex-wrap: nowrap !important;\r\n  }\r\n  .flex-sm-wrap-reverse {\r\n    -webkit-flex-wrap: wrap-reverse !important;\r\n        -ms-flex-wrap: wrap-reverse !important;\r\n            flex-wrap: wrap-reverse !important;\r\n  }\r\n  .justify-content-sm-start {\r\n    -webkit-box-pack: start !important;\r\n    -webkit-justify-content: flex-start !important;\r\n        -ms-flex-pack: start !important;\r\n            justify-content: flex-start !important;\r\n  }\r\n  .justify-content-sm-end {\r\n    -webkit-box-pack: end !important;\r\n    -webkit-justify-content: flex-end !important;\r\n        -ms-flex-pack: end !important;\r\n            justify-content: flex-end !important;\r\n  }\r\n  .justify-content-sm-center {\r\n    -webkit-box-pack: center !important;\r\n    -webkit-justify-content: center !important;\r\n        -ms-flex-pack: center !important;\r\n            justify-content: center !important;\r\n  }\r\n  .justify-content-sm-between {\r\n    -webkit-box-pack: justify !important;\r\n    -webkit-justify-content: space-between !important;\r\n        -ms-flex-pack: justify !important;\r\n            justify-content: space-between !important;\r\n  }\r\n  .justify-content-sm-around {\r\n    -webkit-justify-content: space-around !important;\r\n        -ms-flex-pack: distribute !important;\r\n            justify-content: space-around !important;\r\n  }\r\n  .align-items-sm-start {\r\n    -webkit-box-align: start !important;\r\n    -webkit-align-items: flex-start !important;\r\n        -ms-flex-align: start !important;\r\n            align-items: flex-start !important;\r\n  }\r\n  .align-items-sm-end {\r\n    -webkit-box-align: end !important;\r\n    -webkit-align-items: flex-end !important;\r\n        -ms-flex-align: end !important;\r\n            align-items: flex-end !important;\r\n  }\r\n  .align-items-sm-center {\r\n    -webkit-box-align: center !important;\r\n    -webkit-align-items: center !important;\r\n        -ms-flex-align: center !important;\r\n            align-items: center !important;\r\n  }\r\n  .align-items-sm-baseline {\r\n    -webkit-box-align: baseline !important;\r\n    -webkit-align-items: baseline !important;\r\n        -ms-flex-align: baseline !important;\r\n            align-items: baseline !important;\r\n  }\r\n  .align-items-sm-stretch {\r\n    -webkit-box-align: stretch !important;\r\n    -webkit-align-items: stretch !important;\r\n        -ms-flex-align: stretch !important;\r\n            align-items: stretch !important;\r\n  }\r\n  .align-content-sm-start {\r\n    -webkit-align-content: flex-start !important;\r\n        -ms-flex-line-pack: start !important;\r\n            align-content: flex-start !important;\r\n  }\r\n  .align-content-sm-end {\r\n    -webkit-align-content: flex-end !important;\r\n        -ms-flex-line-pack: end !important;\r\n            align-content: flex-end !important;\r\n  }\r\n  .align-content-sm-center {\r\n    -webkit-align-content: center !important;\r\n        -ms-flex-line-pack: center !important;\r\n            align-content: center !important;\r\n  }\r\n  .align-content-sm-between {\r\n    -webkit-align-content: space-between !important;\r\n        -ms-flex-line-pack: justify !important;\r\n            align-content: space-between !important;\r\n  }\r\n  .align-content-sm-around {\r\n    -webkit-align-content: space-around !important;\r\n        -ms-flex-line-pack: distribute !important;\r\n            align-content: space-around !important;\r\n  }\r\n  .align-content-sm-stretch {\r\n    -webkit-align-content: stretch !important;\r\n        -ms-flex-line-pack: stretch !important;\r\n            align-content: stretch !important;\r\n  }\r\n  .align-self-sm-auto {\r\n    -webkit-align-self: auto !important;\r\n        -ms-flex-item-align: auto !important;\r\n                -ms-grid-row-align: auto !important;\r\n            align-self: auto !important;\r\n  }\r\n  .align-self-sm-start {\r\n    -webkit-align-self: flex-start !important;\r\n        -ms-flex-item-align: start !important;\r\n            align-self: flex-start !important;\r\n  }\r\n  .align-self-sm-end {\r\n    -webkit-align-self: flex-end !important;\r\n        -ms-flex-item-align: end !important;\r\n            align-self: flex-end !important;\r\n  }\r\n  .align-self-sm-center {\r\n    -webkit-align-self: center !important;\r\n        -ms-flex-item-align: center !important;\r\n                -ms-grid-row-align: center !important;\r\n            align-self: center !important;\r\n  }\r\n  .align-self-sm-baseline {\r\n    -webkit-align-self: baseline !important;\r\n        -ms-flex-item-align: baseline !important;\r\n            align-self: baseline !important;\r\n  }\r\n  .align-self-sm-stretch {\r\n    -webkit-align-self: stretch !important;\r\n        -ms-flex-item-align: stretch !important;\r\n                -ms-grid-row-align: stretch !important;\r\n            align-self: stretch !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .flex-md-first {\r\n    -webkit-box-ordinal-group: 0;\r\n    -webkit-order: -1;\r\n        -ms-flex-order: -1;\r\n            order: -1;\r\n  }\r\n  .flex-md-last {\r\n    -webkit-box-ordinal-group: 2;\r\n    -webkit-order: 1;\r\n        -ms-flex-order: 1;\r\n            order: 1;\r\n  }\r\n  .flex-md-unordered {\r\n    -webkit-box-ordinal-group: 1;\r\n    -webkit-order: 0;\r\n        -ms-flex-order: 0;\r\n            order: 0;\r\n  }\r\n  .flex-md-row {\r\n    -webkit-box-orient: horizontal !important;\r\n    -webkit-box-direction: normal !important;\r\n    -webkit-flex-direction: row !important;\r\n        -ms-flex-direction: row !important;\r\n            flex-direction: row !important;\r\n  }\r\n  .flex-md-column {\r\n    -webkit-box-orient: vertical !important;\r\n    -webkit-box-direction: normal !important;\r\n    -webkit-flex-direction: column !important;\r\n        -ms-flex-direction: column !important;\r\n            flex-direction: column !important;\r\n  }\r\n  .flex-md-row-reverse {\r\n    -webkit-box-orient: horizontal !important;\r\n    -webkit-box-direction: reverse !important;\r\n    -webkit-flex-direction: row-reverse !important;\r\n        -ms-flex-direction: row-reverse !important;\r\n            flex-direction: row-reverse !important;\r\n  }\r\n  .flex-md-column-reverse {\r\n    -webkit-box-orient: vertical !important;\r\n    -webkit-box-direction: reverse !important;\r\n    -webkit-flex-direction: column-reverse !important;\r\n        -ms-flex-direction: column-reverse !important;\r\n            flex-direction: column-reverse !important;\r\n  }\r\n  .flex-md-wrap {\r\n    -webkit-flex-wrap: wrap !important;\r\n        -ms-flex-wrap: wrap !important;\r\n            flex-wrap: wrap !important;\r\n  }\r\n  .flex-md-nowrap {\r\n    -webkit-flex-wrap: nowrap !important;\r\n        -ms-flex-wrap: nowrap !important;\r\n            flex-wrap: nowrap !important;\r\n  }\r\n  .flex-md-wrap-reverse {\r\n    -webkit-flex-wrap: wrap-reverse !important;\r\n        -ms-flex-wrap: wrap-reverse !important;\r\n            flex-wrap: wrap-reverse !important;\r\n  }\r\n  .justify-content-md-start {\r\n    -webkit-box-pack: start !important;\r\n    -webkit-justify-content: flex-start !important;\r\n        -ms-flex-pack: start !important;\r\n            justify-content: flex-start !important;\r\n  }\r\n  .justify-content-md-end {\r\n    -webkit-box-pack: end !important;\r\n    -webkit-justify-content: flex-end !important;\r\n        -ms-flex-pack: end !important;\r\n            justify-content: flex-end !important;\r\n  }\r\n  .justify-content-md-center {\r\n    -webkit-box-pack: center !important;\r\n    -webkit-justify-content: center !important;\r\n        -ms-flex-pack: center !important;\r\n            justify-content: center !important;\r\n  }\r\n  .justify-content-md-between {\r\n    -webkit-box-pack: justify !important;\r\n    -webkit-justify-content: space-between !important;\r\n        -ms-flex-pack: justify !important;\r\n            justify-content: space-between !important;\r\n  }\r\n  .justify-content-md-around {\r\n    -webkit-justify-content: space-around !important;\r\n        -ms-flex-pack: distribute !important;\r\n            justify-content: space-around !important;\r\n  }\r\n  .align-items-md-start {\r\n    -webkit-box-align: start !important;\r\n    -webkit-align-items: flex-start !important;\r\n        -ms-flex-align: start !important;\r\n            align-items: flex-start !important;\r\n  }\r\n  .align-items-md-end {\r\n    -webkit-box-align: end !important;\r\n    -webkit-align-items: flex-end !important;\r\n        -ms-flex-align: end !important;\r\n            align-items: flex-end !important;\r\n  }\r\n  .align-items-md-center {\r\n    -webkit-box-align: center !important;\r\n    -webkit-align-items: center !important;\r\n        -ms-flex-align: center !important;\r\n            align-items: center !important;\r\n  }\r\n  .align-items-md-baseline {\r\n    -webkit-box-align: baseline !important;\r\n    -webkit-align-items: baseline !important;\r\n        -ms-flex-align: baseline !important;\r\n            align-items: baseline !important;\r\n  }\r\n  .align-items-md-stretch {\r\n    -webkit-box-align: stretch !important;\r\n    -webkit-align-items: stretch !important;\r\n        -ms-flex-align: stretch !important;\r\n            align-items: stretch !important;\r\n  }\r\n  .align-content-md-start {\r\n    -webkit-align-content: flex-start !important;\r\n        -ms-flex-line-pack: start !important;\r\n            align-content: flex-start !important;\r\n  }\r\n  .align-content-md-end {\r\n    -webkit-align-content: flex-end !important;\r\n        -ms-flex-line-pack: end !important;\r\n            align-content: flex-end !important;\r\n  }\r\n  .align-content-md-center {\r\n    -webkit-align-content: center !important;\r\n        -ms-flex-line-pack: center !important;\r\n            align-content: center !important;\r\n  }\r\n  .align-content-md-between {\r\n    -webkit-align-content: space-between !important;\r\n        -ms-flex-line-pack: justify !important;\r\n            align-content: space-between !important;\r\n  }\r\n  .align-content-md-around {\r\n    -webkit-align-content: space-around !important;\r\n        -ms-flex-line-pack: distribute !important;\r\n            align-content: space-around !important;\r\n  }\r\n  .align-content-md-stretch {\r\n    -webkit-align-content: stretch !important;\r\n        -ms-flex-line-pack: stretch !important;\r\n            align-content: stretch !important;\r\n  }\r\n  .align-self-md-auto {\r\n    -webkit-align-self: auto !important;\r\n        -ms-flex-item-align: auto !important;\r\n                -ms-grid-row-align: auto !important;\r\n            align-self: auto !important;\r\n  }\r\n  .align-self-md-start {\r\n    -webkit-align-self: flex-start !important;\r\n        -ms-flex-item-align: start !important;\r\n            align-self: flex-start !important;\r\n  }\r\n  .align-self-md-end {\r\n    -webkit-align-self: flex-end !important;\r\n        -ms-flex-item-align: end !important;\r\n            align-self: flex-end !important;\r\n  }\r\n  .align-self-md-center {\r\n    -webkit-align-self: center !important;\r\n        -ms-flex-item-align: center !important;\r\n                -ms-grid-row-align: center !important;\r\n            align-self: center !important;\r\n  }\r\n  .align-self-md-baseline {\r\n    -webkit-align-self: baseline !important;\r\n        -ms-flex-item-align: baseline !important;\r\n            align-self: baseline !important;\r\n  }\r\n  .align-self-md-stretch {\r\n    -webkit-align-self: stretch !important;\r\n        -ms-flex-item-align: stretch !important;\r\n                -ms-grid-row-align: stretch !important;\r\n            align-self: stretch !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .flex-lg-first {\r\n    -webkit-box-ordinal-group: 0;\r\n    -webkit-order: -1;\r\n        -ms-flex-order: -1;\r\n            order: -1;\r\n  }\r\n  .flex-lg-last {\r\n    -webkit-box-ordinal-group: 2;\r\n    -webkit-order: 1;\r\n        -ms-flex-order: 1;\r\n            order: 1;\r\n  }\r\n  .flex-lg-unordered {\r\n    -webkit-box-ordinal-group: 1;\r\n    -webkit-order: 0;\r\n        -ms-flex-order: 0;\r\n            order: 0;\r\n  }\r\n  .flex-lg-row {\r\n    -webkit-box-orient: horizontal !important;\r\n    -webkit-box-direction: normal !important;\r\n    -webkit-flex-direction: row !important;\r\n        -ms-flex-direction: row !important;\r\n            flex-direction: row !important;\r\n  }\r\n  .flex-lg-column {\r\n    -webkit-box-orient: vertical !important;\r\n    -webkit-box-direction: normal !important;\r\n    -webkit-flex-direction: column !important;\r\n        -ms-flex-direction: column !important;\r\n            flex-direction: column !important;\r\n  }\r\n  .flex-lg-row-reverse {\r\n    -webkit-box-orient: horizontal !important;\r\n    -webkit-box-direction: reverse !important;\r\n    -webkit-flex-direction: row-reverse !important;\r\n        -ms-flex-direction: row-reverse !important;\r\n            flex-direction: row-reverse !important;\r\n  }\r\n  .flex-lg-column-reverse {\r\n    -webkit-box-orient: vertical !important;\r\n    -webkit-box-direction: reverse !important;\r\n    -webkit-flex-direction: column-reverse !important;\r\n        -ms-flex-direction: column-reverse !important;\r\n            flex-direction: column-reverse !important;\r\n  }\r\n  .flex-lg-wrap {\r\n    -webkit-flex-wrap: wrap !important;\r\n        -ms-flex-wrap: wrap !important;\r\n            flex-wrap: wrap !important;\r\n  }\r\n  .flex-lg-nowrap {\r\n    -webkit-flex-wrap: nowrap !important;\r\n        -ms-flex-wrap: nowrap !important;\r\n            flex-wrap: nowrap !important;\r\n  }\r\n  .flex-lg-wrap-reverse {\r\n    -webkit-flex-wrap: wrap-reverse !important;\r\n        -ms-flex-wrap: wrap-reverse !important;\r\n            flex-wrap: wrap-reverse !important;\r\n  }\r\n  .justify-content-lg-start {\r\n    -webkit-box-pack: start !important;\r\n    -webkit-justify-content: flex-start !important;\r\n        -ms-flex-pack: start !important;\r\n            justify-content: flex-start !important;\r\n  }\r\n  .justify-content-lg-end {\r\n    -webkit-box-pack: end !important;\r\n    -webkit-justify-content: flex-end !important;\r\n        -ms-flex-pack: end !important;\r\n            justify-content: flex-end !important;\r\n  }\r\n  .justify-content-lg-center {\r\n    -webkit-box-pack: center !important;\r\n    -webkit-justify-content: center !important;\r\n        -ms-flex-pack: center !important;\r\n            justify-content: center !important;\r\n  }\r\n  .justify-content-lg-between {\r\n    -webkit-box-pack: justify !important;\r\n    -webkit-justify-content: space-between !important;\r\n        -ms-flex-pack: justify !important;\r\n            justify-content: space-between !important;\r\n  }\r\n  .justify-content-lg-around {\r\n    -webkit-justify-content: space-around !important;\r\n        -ms-flex-pack: distribute !important;\r\n            justify-content: space-around !important;\r\n  }\r\n  .align-items-lg-start {\r\n    -webkit-box-align: start !important;\r\n    -webkit-align-items: flex-start !important;\r\n        -ms-flex-align: start !important;\r\n            align-items: flex-start !important;\r\n  }\r\n  .align-items-lg-end {\r\n    -webkit-box-align: end !important;\r\n    -webkit-align-items: flex-end !important;\r\n        -ms-flex-align: end !important;\r\n            align-items: flex-end !important;\r\n  }\r\n  .align-items-lg-center {\r\n    -webkit-box-align: center !important;\r\n    -webkit-align-items: center !important;\r\n        -ms-flex-align: center !important;\r\n            align-items: center !important;\r\n  }\r\n  .align-items-lg-baseline {\r\n    -webkit-box-align: baseline !important;\r\n    -webkit-align-items: baseline !important;\r\n        -ms-flex-align: baseline !important;\r\n            align-items: baseline !important;\r\n  }\r\n  .align-items-lg-stretch {\r\n    -webkit-box-align: stretch !important;\r\n    -webkit-align-items: stretch !important;\r\n        -ms-flex-align: stretch !important;\r\n            align-items: stretch !important;\r\n  }\r\n  .align-content-lg-start {\r\n    -webkit-align-content: flex-start !important;\r\n        -ms-flex-line-pack: start !important;\r\n            align-content: flex-start !important;\r\n  }\r\n  .align-content-lg-end {\r\n    -webkit-align-content: flex-end !important;\r\n        -ms-flex-line-pack: end !important;\r\n            align-content: flex-end !important;\r\n  }\r\n  .align-content-lg-center {\r\n    -webkit-align-content: center !important;\r\n        -ms-flex-line-pack: center !important;\r\n            align-content: center !important;\r\n  }\r\n  .align-content-lg-between {\r\n    -webkit-align-content: space-between !important;\r\n        -ms-flex-line-pack: justify !important;\r\n            align-content: space-between !important;\r\n  }\r\n  .align-content-lg-around {\r\n    -webkit-align-content: space-around !important;\r\n        -ms-flex-line-pack: distribute !important;\r\n            align-content: space-around !important;\r\n  }\r\n  .align-content-lg-stretch {\r\n    -webkit-align-content: stretch !important;\r\n        -ms-flex-line-pack: stretch !important;\r\n            align-content: stretch !important;\r\n  }\r\n  .align-self-lg-auto {\r\n    -webkit-align-self: auto !important;\r\n        -ms-flex-item-align: auto !important;\r\n                -ms-grid-row-align: auto !important;\r\n            align-self: auto !important;\r\n  }\r\n  .align-self-lg-start {\r\n    -webkit-align-self: flex-start !important;\r\n        -ms-flex-item-align: start !important;\r\n            align-self: flex-start !important;\r\n  }\r\n  .align-self-lg-end {\r\n    -webkit-align-self: flex-end !important;\r\n        -ms-flex-item-align: end !important;\r\n            align-self: flex-end !important;\r\n  }\r\n  .align-self-lg-center {\r\n    -webkit-align-self: center !important;\r\n        -ms-flex-item-align: center !important;\r\n                -ms-grid-row-align: center !important;\r\n            align-self: center !important;\r\n  }\r\n  .align-self-lg-baseline {\r\n    -webkit-align-self: baseline !important;\r\n        -ms-flex-item-align: baseline !important;\r\n            align-self: baseline !important;\r\n  }\r\n  .align-self-lg-stretch {\r\n    -webkit-align-self: stretch !important;\r\n        -ms-flex-item-align: stretch !important;\r\n                -ms-grid-row-align: stretch !important;\r\n            align-self: stretch !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .flex-xl-first {\r\n    -webkit-box-ordinal-group: 0;\r\n    -webkit-order: -1;\r\n        -ms-flex-order: -1;\r\n            order: -1;\r\n  }\r\n  .flex-xl-last {\r\n    -webkit-box-ordinal-group: 2;\r\n    -webkit-order: 1;\r\n        -ms-flex-order: 1;\r\n            order: 1;\r\n  }\r\n  .flex-xl-unordered {\r\n    -webkit-box-ordinal-group: 1;\r\n    -webkit-order: 0;\r\n        -ms-flex-order: 0;\r\n            order: 0;\r\n  }\r\n  .flex-xl-row {\r\n    -webkit-box-orient: horizontal !important;\r\n    -webkit-box-direction: normal !important;\r\n    -webkit-flex-direction: row !important;\r\n        -ms-flex-direction: row !important;\r\n            flex-direction: row !important;\r\n  }\r\n  .flex-xl-column {\r\n    -webkit-box-orient: vertical !important;\r\n    -webkit-box-direction: normal !important;\r\n    -webkit-flex-direction: column !important;\r\n        -ms-flex-direction: column !important;\r\n            flex-direction: column !important;\r\n  }\r\n  .flex-xl-row-reverse {\r\n    -webkit-box-orient: horizontal !important;\r\n    -webkit-box-direction: reverse !important;\r\n    -webkit-flex-direction: row-reverse !important;\r\n        -ms-flex-direction: row-reverse !important;\r\n            flex-direction: row-reverse !important;\r\n  }\r\n  .flex-xl-column-reverse {\r\n    -webkit-box-orient: vertical !important;\r\n    -webkit-box-direction: reverse !important;\r\n    -webkit-flex-direction: column-reverse !important;\r\n        -ms-flex-direction: column-reverse !important;\r\n            flex-direction: column-reverse !important;\r\n  }\r\n  .flex-xl-wrap {\r\n    -webkit-flex-wrap: wrap !important;\r\n        -ms-flex-wrap: wrap !important;\r\n            flex-wrap: wrap !important;\r\n  }\r\n  .flex-xl-nowrap {\r\n    -webkit-flex-wrap: nowrap !important;\r\n        -ms-flex-wrap: nowrap !important;\r\n            flex-wrap: nowrap !important;\r\n  }\r\n  .flex-xl-wrap-reverse {\r\n    -webkit-flex-wrap: wrap-reverse !important;\r\n        -ms-flex-wrap: wrap-reverse !important;\r\n            flex-wrap: wrap-reverse !important;\r\n  }\r\n  .justify-content-xl-start {\r\n    -webkit-box-pack: start !important;\r\n    -webkit-justify-content: flex-start !important;\r\n        -ms-flex-pack: start !important;\r\n            justify-content: flex-start !important;\r\n  }\r\n  .justify-content-xl-end {\r\n    -webkit-box-pack: end !important;\r\n    -webkit-justify-content: flex-end !important;\r\n        -ms-flex-pack: end !important;\r\n            justify-content: flex-end !important;\r\n  }\r\n  .justify-content-xl-center {\r\n    -webkit-box-pack: center !important;\r\n    -webkit-justify-content: center !important;\r\n        -ms-flex-pack: center !important;\r\n            justify-content: center !important;\r\n  }\r\n  .justify-content-xl-between {\r\n    -webkit-box-pack: justify !important;\r\n    -webkit-justify-content: space-between !important;\r\n        -ms-flex-pack: justify !important;\r\n            justify-content: space-between !important;\r\n  }\r\n  .justify-content-xl-around {\r\n    -webkit-justify-content: space-around !important;\r\n        -ms-flex-pack: distribute !important;\r\n            justify-content: space-around !important;\r\n  }\r\n  .align-items-xl-start {\r\n    -webkit-box-align: start !important;\r\n    -webkit-align-items: flex-start !important;\r\n        -ms-flex-align: start !important;\r\n            align-items: flex-start !important;\r\n  }\r\n  .align-items-xl-end {\r\n    -webkit-box-align: end !important;\r\n    -webkit-align-items: flex-end !important;\r\n        -ms-flex-align: end !important;\r\n            align-items: flex-end !important;\r\n  }\r\n  .align-items-xl-center {\r\n    -webkit-box-align: center !important;\r\n    -webkit-align-items: center !important;\r\n        -ms-flex-align: center !important;\r\n            align-items: center !important;\r\n  }\r\n  .align-items-xl-baseline {\r\n    -webkit-box-align: baseline !important;\r\n    -webkit-align-items: baseline !important;\r\n        -ms-flex-align: baseline !important;\r\n            align-items: baseline !important;\r\n  }\r\n  .align-items-xl-stretch {\r\n    -webkit-box-align: stretch !important;\r\n    -webkit-align-items: stretch !important;\r\n        -ms-flex-align: stretch !important;\r\n            align-items: stretch !important;\r\n  }\r\n  .align-content-xl-start {\r\n    -webkit-align-content: flex-start !important;\r\n        -ms-flex-line-pack: start !important;\r\n            align-content: flex-start !important;\r\n  }\r\n  .align-content-xl-end {\r\n    -webkit-align-content: flex-end !important;\r\n        -ms-flex-line-pack: end !important;\r\n            align-content: flex-end !important;\r\n  }\r\n  .align-content-xl-center {\r\n    -webkit-align-content: center !important;\r\n        -ms-flex-line-pack: center !important;\r\n            align-content: center !important;\r\n  }\r\n  .align-content-xl-between {\r\n    -webkit-align-content: space-between !important;\r\n        -ms-flex-line-pack: justify !important;\r\n            align-content: space-between !important;\r\n  }\r\n  .align-content-xl-around {\r\n    -webkit-align-content: space-around !important;\r\n        -ms-flex-line-pack: distribute !important;\r\n            align-content: space-around !important;\r\n  }\r\n  .align-content-xl-stretch {\r\n    -webkit-align-content: stretch !important;\r\n        -ms-flex-line-pack: stretch !important;\r\n            align-content: stretch !important;\r\n  }\r\n  .align-self-xl-auto {\r\n    -webkit-align-self: auto !important;\r\n        -ms-flex-item-align: auto !important;\r\n                -ms-grid-row-align: auto !important;\r\n            align-self: auto !important;\r\n  }\r\n  .align-self-xl-start {\r\n    -webkit-align-self: flex-start !important;\r\n        -ms-flex-item-align: start !important;\r\n            align-self: flex-start !important;\r\n  }\r\n  .align-self-xl-end {\r\n    -webkit-align-self: flex-end !important;\r\n        -ms-flex-item-align: end !important;\r\n            align-self: flex-end !important;\r\n  }\r\n  .align-self-xl-center {\r\n    -webkit-align-self: center !important;\r\n        -ms-flex-item-align: center !important;\r\n                -ms-grid-row-align: center !important;\r\n            align-self: center !important;\r\n  }\r\n  .align-self-xl-baseline {\r\n    -webkit-align-self: baseline !important;\r\n        -ms-flex-item-align: baseline !important;\r\n            align-self: baseline !important;\r\n  }\r\n  .align-self-xl-stretch {\r\n    -webkit-align-self: stretch !important;\r\n        -ms-flex-item-align: stretch !important;\r\n                -ms-grid-row-align: stretch !important;\r\n            align-self: stretch !important;\r\n  }\r\n}\r\n\r\n.float-left {\r\n  float: left !important;\r\n}\r\n\r\n.float-right {\r\n  float: right !important;\r\n}\r\n\r\n.float-none {\r\n  float: none !important;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .float-sm-left {\r\n    float: left !important;\r\n  }\r\n  .float-sm-right {\r\n    float: right !important;\r\n  }\r\n  .float-sm-none {\r\n    float: none !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .float-md-left {\r\n    float: left !important;\r\n  }\r\n  .float-md-right {\r\n    float: right !important;\r\n  }\r\n  .float-md-none {\r\n    float: none !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .float-lg-left {\r\n    float: left !important;\r\n  }\r\n  .float-lg-right {\r\n    float: right !important;\r\n  }\r\n  .float-lg-none {\r\n    float: none !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .float-xl-left {\r\n    float: left !important;\r\n  }\r\n  .float-xl-right {\r\n    float: right !important;\r\n  }\r\n  .float-xl-none {\r\n    float: none !important;\r\n  }\r\n}\r\n\r\n.fixed-top {\r\n  position: fixed;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  z-index: 1030;\r\n}\r\n\r\n.fixed-bottom {\r\n  position: fixed;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 1030;\r\n}\r\n\r\n.sticky-top {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 1030;\r\n}\r\n\r\n.sr-only {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  padding: 0;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  clip: rect(0, 0, 0, 0);\r\n  border: 0;\r\n}\r\n\r\n.sr-only-focusable:active, .sr-only-focusable:focus {\r\n  position: static;\r\n  width: auto;\r\n  height: auto;\r\n  margin: 0;\r\n  overflow: visible;\r\n  clip: auto;\r\n}\r\n\r\n.w-25 {\r\n  width: 25% !important;\r\n}\r\n\r\n.w-50 {\r\n  width: 50% !important;\r\n}\r\n\r\n.w-75 {\r\n  width: 75% !important;\r\n}\r\n\r\n.w-100 {\r\n  width: 100% !important;\r\n}\r\n\r\n.h-25 {\r\n  height: 25% !important;\r\n}\r\n\r\n.h-50 {\r\n  height: 50% !important;\r\n}\r\n\r\n.h-75 {\r\n  height: 75% !important;\r\n}\r\n\r\n.h-100 {\r\n  height: 100% !important;\r\n}\r\n\r\n.mw-100 {\r\n  max-width: 100% !important;\r\n}\r\n\r\n.mh-100 {\r\n  max-height: 100% !important;\r\n}\r\n\r\n.m-0 {\r\n  margin: 0 0 !important;\r\n}\r\n\r\n.mt-0 {\r\n  margin-top: 0 !important;\r\n}\r\n\r\n.mr-0 {\r\n  margin-right: 0 !important;\r\n}\r\n\r\n.mb-0 {\r\n  margin-bottom: 0 !important;\r\n}\r\n\r\n.ml-0 {\r\n  margin-left: 0 !important;\r\n}\r\n\r\n.mx-0 {\r\n  margin-right: 0 !important;\r\n  margin-left: 0 !important;\r\n}\r\n\r\n.my-0 {\r\n  margin-top: 0 !important;\r\n  margin-bottom: 0 !important;\r\n}\r\n\r\n.m-1 {\r\n  margin: 0.25rem 0.25rem !important;\r\n}\r\n\r\n.mt-1 {\r\n  margin-top: 0.25rem !important;\r\n}\r\n\r\n.mr-1 {\r\n  margin-right: 0.25rem !important;\r\n}\r\n\r\n.mb-1 {\r\n  margin-bottom: 0.25rem !important;\r\n}\r\n\r\n.ml-1 {\r\n  margin-left: 0.25rem !important;\r\n}\r\n\r\n.mx-1 {\r\n  margin-right: 0.25rem !important;\r\n  margin-left: 0.25rem !important;\r\n}\r\n\r\n.my-1 {\r\n  margin-top: 0.25rem !important;\r\n  margin-bottom: 0.25rem !important;\r\n}\r\n\r\n.m-2 {\r\n  margin: 0.5rem 0.5rem !important;\r\n}\r\n\r\n.mt-2 {\r\n  margin-top: 0.5rem !important;\r\n}\r\n\r\n.mr-2 {\r\n  margin-right: 0.5rem !important;\r\n}\r\n\r\n.mb-2 {\r\n  margin-bottom: 0.5rem !important;\r\n}\r\n\r\n.ml-2 {\r\n  margin-left: 0.5rem !important;\r\n}\r\n\r\n.mx-2 {\r\n  margin-right: 0.5rem !important;\r\n  margin-left: 0.5rem !important;\r\n}\r\n\r\n.my-2 {\r\n  margin-top: 0.5rem !important;\r\n  margin-bottom: 0.5rem !important;\r\n}\r\n\r\n.m-3 {\r\n  margin: 1rem 1rem !important;\r\n}\r\n\r\n.mt-3 {\r\n  margin-top: 1rem !important;\r\n}\r\n\r\n.mr-3 {\r\n  margin-right: 1rem !important;\r\n}\r\n\r\n.mb-3 {\r\n  margin-bottom: 1rem !important;\r\n}\r\n\r\n.ml-3 {\r\n  margin-left: 1rem !important;\r\n}\r\n\r\n.mx-3 {\r\n  margin-right: 1rem !important;\r\n  margin-left: 1rem !important;\r\n}\r\n\r\n.my-3 {\r\n  margin-top: 1rem !important;\r\n  margin-bottom: 1rem !important;\r\n}\r\n\r\n.m-4 {\r\n  margin: 1.5rem 1.5rem !important;\r\n}\r\n\r\n.mt-4 {\r\n  margin-top: 1.5rem !important;\r\n}\r\n\r\n.mr-4 {\r\n  margin-right: 1.5rem !important;\r\n}\r\n\r\n.mb-4 {\r\n  margin-bottom: 1.5rem !important;\r\n}\r\n\r\n.ml-4 {\r\n  margin-left: 1.5rem !important;\r\n}\r\n\r\n.mx-4 {\r\n  margin-right: 1.5rem !important;\r\n  margin-left: 1.5rem !important;\r\n}\r\n\r\n.my-4 {\r\n  margin-top: 1.5rem !important;\r\n  margin-bottom: 1.5rem !important;\r\n}\r\n\r\n.m-5 {\r\n  margin: 3rem 3rem !important;\r\n}\r\n\r\n.mt-5 {\r\n  margin-top: 3rem !important;\r\n}\r\n\r\n.mr-5 {\r\n  margin-right: 3rem !important;\r\n}\r\n\r\n.mb-5 {\r\n  margin-bottom: 3rem !important;\r\n}\r\n\r\n.ml-5 {\r\n  margin-left: 3rem !important;\r\n}\r\n\r\n.mx-5 {\r\n  margin-right: 3rem !important;\r\n  margin-left: 3rem !important;\r\n}\r\n\r\n.my-5 {\r\n  margin-top: 3rem !important;\r\n  margin-bottom: 3rem !important;\r\n}\r\n\r\n.p-0 {\r\n  padding: 0 0 !important;\r\n}\r\n\r\n.pt-0 {\r\n  padding-top: 0 !important;\r\n}\r\n\r\n.pr-0 {\r\n  padding-right: 0 !important;\r\n}\r\n\r\n.pb-0 {\r\n  padding-bottom: 0 !important;\r\n}\r\n\r\n.pl-0 {\r\n  padding-left: 0 !important;\r\n}\r\n\r\n.px-0 {\r\n  padding-right: 0 !important;\r\n  padding-left: 0 !important;\r\n}\r\n\r\n.py-0 {\r\n  padding-top: 0 !important;\r\n  padding-bottom: 0 !important;\r\n}\r\n\r\n.p-1 {\r\n  padding: 0.25rem 0.25rem !important;\r\n}\r\n\r\n.pt-1 {\r\n  padding-top: 0.25rem !important;\r\n}\r\n\r\n.pr-1 {\r\n  padding-right: 0.25rem !important;\r\n}\r\n\r\n.pb-1 {\r\n  padding-bottom: 0.25rem !important;\r\n}\r\n\r\n.pl-1 {\r\n  padding-left: 0.25rem !important;\r\n}\r\n\r\n.px-1 {\r\n  padding-right: 0.25rem !important;\r\n  padding-left: 0.25rem !important;\r\n}\r\n\r\n.py-1 {\r\n  padding-top: 0.25rem !important;\r\n  padding-bottom: 0.25rem !important;\r\n}\r\n\r\n.p-2 {\r\n  padding: 0.5rem 0.5rem !important;\r\n}\r\n\r\n.pt-2 {\r\n  padding-top: 0.5rem !important;\r\n}\r\n\r\n.pr-2 {\r\n  padding-right: 0.5rem !important;\r\n}\r\n\r\n.pb-2 {\r\n  padding-bottom: 0.5rem !important;\r\n}\r\n\r\n.pl-2 {\r\n  padding-left: 0.5rem !important;\r\n}\r\n\r\n.px-2 {\r\n  padding-right: 0.5rem !important;\r\n  padding-left: 0.5rem !important;\r\n}\r\n\r\n.py-2 {\r\n  padding-top: 0.5rem !important;\r\n  padding-bottom: 0.5rem !important;\r\n}\r\n\r\n.p-3 {\r\n  padding: 1rem 1rem !important;\r\n}\r\n\r\n.pt-3 {\r\n  padding-top: 1rem !important;\r\n}\r\n\r\n.pr-3 {\r\n  padding-right: 1rem !important;\r\n}\r\n\r\n.pb-3 {\r\n  padding-bottom: 1rem !important;\r\n}\r\n\r\n.pl-3 {\r\n  padding-left: 1rem !important;\r\n}\r\n\r\n.px-3 {\r\n  padding-right: 1rem !important;\r\n  padding-left: 1rem !important;\r\n}\r\n\r\n.py-3 {\r\n  padding-top: 1rem !important;\r\n  padding-bottom: 1rem !important;\r\n}\r\n\r\n.p-4 {\r\n  padding: 1.5rem 1.5rem !important;\r\n}\r\n\r\n.pt-4 {\r\n  padding-top: 1.5rem !important;\r\n}\r\n\r\n.pr-4 {\r\n  padding-right: 1.5rem !important;\r\n}\r\n\r\n.pb-4 {\r\n  padding-bottom: 1.5rem !important;\r\n}\r\n\r\n.pl-4 {\r\n  padding-left: 1.5rem !important;\r\n}\r\n\r\n.px-4 {\r\n  padding-right: 1.5rem !important;\r\n  padding-left: 1.5rem !important;\r\n}\r\n\r\n.py-4 {\r\n  padding-top: 1.5rem !important;\r\n  padding-bottom: 1.5rem !important;\r\n}\r\n\r\n.p-5 {\r\n  padding: 3rem 3rem !important;\r\n}\r\n\r\n.pt-5 {\r\n  padding-top: 3rem !important;\r\n}\r\n\r\n.pr-5 {\r\n  padding-right: 3rem !important;\r\n}\r\n\r\n.pb-5 {\r\n  padding-bottom: 3rem !important;\r\n}\r\n\r\n.pl-5 {\r\n  padding-left: 3rem !important;\r\n}\r\n\r\n.px-5 {\r\n  padding-right: 3rem !important;\r\n  padding-left: 3rem !important;\r\n}\r\n\r\n.py-5 {\r\n  padding-top: 3rem !important;\r\n  padding-bottom: 3rem !important;\r\n}\r\n\r\n.m-auto {\r\n  margin: auto !important;\r\n}\r\n\r\n.mt-auto {\r\n  margin-top: auto !important;\r\n}\r\n\r\n.mr-auto {\r\n  margin-right: auto !important;\r\n}\r\n\r\n.mb-auto {\r\n  margin-bottom: auto !important;\r\n}\r\n\r\n.ml-auto {\r\n  margin-left: auto !important;\r\n}\r\n\r\n.mx-auto {\r\n  margin-right: auto !important;\r\n  margin-left: auto !important;\r\n}\r\n\r\n.my-auto {\r\n  margin-top: auto !important;\r\n  margin-bottom: auto !important;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .m-sm-0 {\r\n    margin: 0 0 !important;\r\n  }\r\n  .mt-sm-0 {\r\n    margin-top: 0 !important;\r\n  }\r\n  .mr-sm-0 {\r\n    margin-right: 0 !important;\r\n  }\r\n  .mb-sm-0 {\r\n    margin-bottom: 0 !important;\r\n  }\r\n  .ml-sm-0 {\r\n    margin-left: 0 !important;\r\n  }\r\n  .mx-sm-0 {\r\n    margin-right: 0 !important;\r\n    margin-left: 0 !important;\r\n  }\r\n  .my-sm-0 {\r\n    margin-top: 0 !important;\r\n    margin-bottom: 0 !important;\r\n  }\r\n  .m-sm-1 {\r\n    margin: 0.25rem 0.25rem !important;\r\n  }\r\n  .mt-sm-1 {\r\n    margin-top: 0.25rem !important;\r\n  }\r\n  .mr-sm-1 {\r\n    margin-right: 0.25rem !important;\r\n  }\r\n  .mb-sm-1 {\r\n    margin-bottom: 0.25rem !important;\r\n  }\r\n  .ml-sm-1 {\r\n    margin-left: 0.25rem !important;\r\n  }\r\n  .mx-sm-1 {\r\n    margin-right: 0.25rem !important;\r\n    margin-left: 0.25rem !important;\r\n  }\r\n  .my-sm-1 {\r\n    margin-top: 0.25rem !important;\r\n    margin-bottom: 0.25rem !important;\r\n  }\r\n  .m-sm-2 {\r\n    margin: 0.5rem 0.5rem !important;\r\n  }\r\n  .mt-sm-2 {\r\n    margin-top: 0.5rem !important;\r\n  }\r\n  .mr-sm-2 {\r\n    margin-right: 0.5rem !important;\r\n  }\r\n  .mb-sm-2 {\r\n    margin-bottom: 0.5rem !important;\r\n  }\r\n  .ml-sm-2 {\r\n    margin-left: 0.5rem !important;\r\n  }\r\n  .mx-sm-2 {\r\n    margin-right: 0.5rem !important;\r\n    margin-left: 0.5rem !important;\r\n  }\r\n  .my-sm-2 {\r\n    margin-top: 0.5rem !important;\r\n    margin-bottom: 0.5rem !important;\r\n  }\r\n  .m-sm-3 {\r\n    margin: 1rem 1rem !important;\r\n  }\r\n  .mt-sm-3 {\r\n    margin-top: 1rem !important;\r\n  }\r\n  .mr-sm-3 {\r\n    margin-right: 1rem !important;\r\n  }\r\n  .mb-sm-3 {\r\n    margin-bottom: 1rem !important;\r\n  }\r\n  .ml-sm-3 {\r\n    margin-left: 1rem !important;\r\n  }\r\n  .mx-sm-3 {\r\n    margin-right: 1rem !important;\r\n    margin-left: 1rem !important;\r\n  }\r\n  .my-sm-3 {\r\n    margin-top: 1rem !important;\r\n    margin-bottom: 1rem !important;\r\n  }\r\n  .m-sm-4 {\r\n    margin: 1.5rem 1.5rem !important;\r\n  }\r\n  .mt-sm-4 {\r\n    margin-top: 1.5rem !important;\r\n  }\r\n  .mr-sm-4 {\r\n    margin-right: 1.5rem !important;\r\n  }\r\n  .mb-sm-4 {\r\n    margin-bottom: 1.5rem !important;\r\n  }\r\n  .ml-sm-4 {\r\n    margin-left: 1.5rem !important;\r\n  }\r\n  .mx-sm-4 {\r\n    margin-right: 1.5rem !important;\r\n    margin-left: 1.5rem !important;\r\n  }\r\n  .my-sm-4 {\r\n    margin-top: 1.5rem !important;\r\n    margin-bottom: 1.5rem !important;\r\n  }\r\n  .m-sm-5 {\r\n    margin: 3rem 3rem !important;\r\n  }\r\n  .mt-sm-5 {\r\n    margin-top: 3rem !important;\r\n  }\r\n  .mr-sm-5 {\r\n    margin-right: 3rem !important;\r\n  }\r\n  .mb-sm-5 {\r\n    margin-bottom: 3rem !important;\r\n  }\r\n  .ml-sm-5 {\r\n    margin-left: 3rem !important;\r\n  }\r\n  .mx-sm-5 {\r\n    margin-right: 3rem !important;\r\n    margin-left: 3rem !important;\r\n  }\r\n  .my-sm-5 {\r\n    margin-top: 3rem !important;\r\n    margin-bottom: 3rem !important;\r\n  }\r\n  .p-sm-0 {\r\n    padding: 0 0 !important;\r\n  }\r\n  .pt-sm-0 {\r\n    padding-top: 0 !important;\r\n  }\r\n  .pr-sm-0 {\r\n    padding-right: 0 !important;\r\n  }\r\n  .pb-sm-0 {\r\n    padding-bottom: 0 !important;\r\n  }\r\n  .pl-sm-0 {\r\n    padding-left: 0 !important;\r\n  }\r\n  .px-sm-0 {\r\n    padding-right: 0 !important;\r\n    padding-left: 0 !important;\r\n  }\r\n  .py-sm-0 {\r\n    padding-top: 0 !important;\r\n    padding-bottom: 0 !important;\r\n  }\r\n  .p-sm-1 {\r\n    padding: 0.25rem 0.25rem !important;\r\n  }\r\n  .pt-sm-1 {\r\n    padding-top: 0.25rem !important;\r\n  }\r\n  .pr-sm-1 {\r\n    padding-right: 0.25rem !important;\r\n  }\r\n  .pb-sm-1 {\r\n    padding-bottom: 0.25rem !important;\r\n  }\r\n  .pl-sm-1 {\r\n    padding-left: 0.25rem !important;\r\n  }\r\n  .px-sm-1 {\r\n    padding-right: 0.25rem !important;\r\n    padding-left: 0.25rem !important;\r\n  }\r\n  .py-sm-1 {\r\n    padding-top: 0.25rem !important;\r\n    padding-bottom: 0.25rem !important;\r\n  }\r\n  .p-sm-2 {\r\n    padding: 0.5rem 0.5rem !important;\r\n  }\r\n  .pt-sm-2 {\r\n    padding-top: 0.5rem !important;\r\n  }\r\n  .pr-sm-2 {\r\n    padding-right: 0.5rem !important;\r\n  }\r\n  .pb-sm-2 {\r\n    padding-bottom: 0.5rem !important;\r\n  }\r\n  .pl-sm-2 {\r\n    padding-left: 0.5rem !important;\r\n  }\r\n  .px-sm-2 {\r\n    padding-right: 0.5rem !important;\r\n    padding-left: 0.5rem !important;\r\n  }\r\n  .py-sm-2 {\r\n    padding-top: 0.5rem !important;\r\n    padding-bottom: 0.5rem !important;\r\n  }\r\n  .p-sm-3 {\r\n    padding: 1rem 1rem !important;\r\n  }\r\n  .pt-sm-3 {\r\n    padding-top: 1rem !important;\r\n  }\r\n  .pr-sm-3 {\r\n    padding-right: 1rem !important;\r\n  }\r\n  .pb-sm-3 {\r\n    padding-bottom: 1rem !important;\r\n  }\r\n  .pl-sm-3 {\r\n    padding-left: 1rem !important;\r\n  }\r\n  .px-sm-3 {\r\n    padding-right: 1rem !important;\r\n    padding-left: 1rem !important;\r\n  }\r\n  .py-sm-3 {\r\n    padding-top: 1rem !important;\r\n    padding-bottom: 1rem !important;\r\n  }\r\n  .p-sm-4 {\r\n    padding: 1.5rem 1.5rem !important;\r\n  }\r\n  .pt-sm-4 {\r\n    padding-top: 1.5rem !important;\r\n  }\r\n  .pr-sm-4 {\r\n    padding-right: 1.5rem !important;\r\n  }\r\n  .pb-sm-4 {\r\n    padding-bottom: 1.5rem !important;\r\n  }\r\n  .pl-sm-4 {\r\n    padding-left: 1.5rem !important;\r\n  }\r\n  .px-sm-4 {\r\n    padding-right: 1.5rem !important;\r\n    padding-left: 1.5rem !important;\r\n  }\r\n  .py-sm-4 {\r\n    padding-top: 1.5rem !important;\r\n    padding-bottom: 1.5rem !important;\r\n  }\r\n  .p-sm-5 {\r\n    padding: 3rem 3rem !important;\r\n  }\r\n  .pt-sm-5 {\r\n    padding-top: 3rem !important;\r\n  }\r\n  .pr-sm-5 {\r\n    padding-right: 3rem !important;\r\n  }\r\n  .pb-sm-5 {\r\n    padding-bottom: 3rem !important;\r\n  }\r\n  .pl-sm-5 {\r\n    padding-left: 3rem !important;\r\n  }\r\n  .px-sm-5 {\r\n    padding-right: 3rem !important;\r\n    padding-left: 3rem !important;\r\n  }\r\n  .py-sm-5 {\r\n    padding-top: 3rem !important;\r\n    padding-bottom: 3rem !important;\r\n  }\r\n  .m-sm-auto {\r\n    margin: auto !important;\r\n  }\r\n  .mt-sm-auto {\r\n    margin-top: auto !important;\r\n  }\r\n  .mr-sm-auto {\r\n    margin-right: auto !important;\r\n  }\r\n  .mb-sm-auto {\r\n    margin-bottom: auto !important;\r\n  }\r\n  .ml-sm-auto {\r\n    margin-left: auto !important;\r\n  }\r\n  .mx-sm-auto {\r\n    margin-right: auto !important;\r\n    margin-left: auto !important;\r\n  }\r\n  .my-sm-auto {\r\n    margin-top: auto !important;\r\n    margin-bottom: auto !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .m-md-0 {\r\n    margin: 0 0 !important;\r\n  }\r\n  .mt-md-0 {\r\n    margin-top: 0 !important;\r\n  }\r\n  .mr-md-0 {\r\n    margin-right: 0 !important;\r\n  }\r\n  .mb-md-0 {\r\n    margin-bottom: 0 !important;\r\n  }\r\n  .ml-md-0 {\r\n    margin-left: 0 !important;\r\n  }\r\n  .mx-md-0 {\r\n    margin-right: 0 !important;\r\n    margin-left: 0 !important;\r\n  }\r\n  .my-md-0 {\r\n    margin-top: 0 !important;\r\n    margin-bottom: 0 !important;\r\n  }\r\n  .m-md-1 {\r\n    margin: 0.25rem 0.25rem !important;\r\n  }\r\n  .mt-md-1 {\r\n    margin-top: 0.25rem !important;\r\n  }\r\n  .mr-md-1 {\r\n    margin-right: 0.25rem !important;\r\n  }\r\n  .mb-md-1 {\r\n    margin-bottom: 0.25rem !important;\r\n  }\r\n  .ml-md-1 {\r\n    margin-left: 0.25rem !important;\r\n  }\r\n  .mx-md-1 {\r\n    margin-right: 0.25rem !important;\r\n    margin-left: 0.25rem !important;\r\n  }\r\n  .my-md-1 {\r\n    margin-top: 0.25rem !important;\r\n    margin-bottom: 0.25rem !important;\r\n  }\r\n  .m-md-2 {\r\n    margin: 0.5rem 0.5rem !important;\r\n  }\r\n  .mt-md-2 {\r\n    margin-top: 0.5rem !important;\r\n  }\r\n  .mr-md-2 {\r\n    margin-right: 0.5rem !important;\r\n  }\r\n  .mb-md-2 {\r\n    margin-bottom: 0.5rem !important;\r\n  }\r\n  .ml-md-2 {\r\n    margin-left: 0.5rem !important;\r\n  }\r\n  .mx-md-2 {\r\n    margin-right: 0.5rem !important;\r\n    margin-left: 0.5rem !important;\r\n  }\r\n  .my-md-2 {\r\n    margin-top: 0.5rem !important;\r\n    margin-bottom: 0.5rem !important;\r\n  }\r\n  .m-md-3 {\r\n    margin: 1rem 1rem !important;\r\n  }\r\n  .mt-md-3 {\r\n    margin-top: 1rem !important;\r\n  }\r\n  .mr-md-3 {\r\n    margin-right: 1rem !important;\r\n  }\r\n  .mb-md-3 {\r\n    margin-bottom: 1rem !important;\r\n  }\r\n  .ml-md-3 {\r\n    margin-left: 1rem !important;\r\n  }\r\n  .mx-md-3 {\r\n    margin-right: 1rem !important;\r\n    margin-left: 1rem !important;\r\n  }\r\n  .my-md-3 {\r\n    margin-top: 1rem !important;\r\n    margin-bottom: 1rem !important;\r\n  }\r\n  .m-md-4 {\r\n    margin: 1.5rem 1.5rem !important;\r\n  }\r\n  .mt-md-4 {\r\n    margin-top: 1.5rem !important;\r\n  }\r\n  .mr-md-4 {\r\n    margin-right: 1.5rem !important;\r\n  }\r\n  .mb-md-4 {\r\n    margin-bottom: 1.5rem !important;\r\n  }\r\n  .ml-md-4 {\r\n    margin-left: 1.5rem !important;\r\n  }\r\n  .mx-md-4 {\r\n    margin-right: 1.5rem !important;\r\n    margin-left: 1.5rem !important;\r\n  }\r\n  .my-md-4 {\r\n    margin-top: 1.5rem !important;\r\n    margin-bottom: 1.5rem !important;\r\n  }\r\n  .m-md-5 {\r\n    margin: 3rem 3rem !important;\r\n  }\r\n  .mt-md-5 {\r\n    margin-top: 3rem !important;\r\n  }\r\n  .mr-md-5 {\r\n    margin-right: 3rem !important;\r\n  }\r\n  .mb-md-5 {\r\n    margin-bottom: 3rem !important;\r\n  }\r\n  .ml-md-5 {\r\n    margin-left: 3rem !important;\r\n  }\r\n  .mx-md-5 {\r\n    margin-right: 3rem !important;\r\n    margin-left: 3rem !important;\r\n  }\r\n  .my-md-5 {\r\n    margin-top: 3rem !important;\r\n    margin-bottom: 3rem !important;\r\n  }\r\n  .p-md-0 {\r\n    padding: 0 0 !important;\r\n  }\r\n  .pt-md-0 {\r\n    padding-top: 0 !important;\r\n  }\r\n  .pr-md-0 {\r\n    padding-right: 0 !important;\r\n  }\r\n  .pb-md-0 {\r\n    padding-bottom: 0 !important;\r\n  }\r\n  .pl-md-0 {\r\n    padding-left: 0 !important;\r\n  }\r\n  .px-md-0 {\r\n    padding-right: 0 !important;\r\n    padding-left: 0 !important;\r\n  }\r\n  .py-md-0 {\r\n    padding-top: 0 !important;\r\n    padding-bottom: 0 !important;\r\n  }\r\n  .p-md-1 {\r\n    padding: 0.25rem 0.25rem !important;\r\n  }\r\n  .pt-md-1 {\r\n    padding-top: 0.25rem !important;\r\n  }\r\n  .pr-md-1 {\r\n    padding-right: 0.25rem !important;\r\n  }\r\n  .pb-md-1 {\r\n    padding-bottom: 0.25rem !important;\r\n  }\r\n  .pl-md-1 {\r\n    padding-left: 0.25rem !important;\r\n  }\r\n  .px-md-1 {\r\n    padding-right: 0.25rem !important;\r\n    padding-left: 0.25rem !important;\r\n  }\r\n  .py-md-1 {\r\n    padding-top: 0.25rem !important;\r\n    padding-bottom: 0.25rem !important;\r\n  }\r\n  .p-md-2 {\r\n    padding: 0.5rem 0.5rem !important;\r\n  }\r\n  .pt-md-2 {\r\n    padding-top: 0.5rem !important;\r\n  }\r\n  .pr-md-2 {\r\n    padding-right: 0.5rem !important;\r\n  }\r\n  .pb-md-2 {\r\n    padding-bottom: 0.5rem !important;\r\n  }\r\n  .pl-md-2 {\r\n    padding-left: 0.5rem !important;\r\n  }\r\n  .px-md-2 {\r\n    padding-right: 0.5rem !important;\r\n    padding-left: 0.5rem !important;\r\n  }\r\n  .py-md-2 {\r\n    padding-top: 0.5rem !important;\r\n    padding-bottom: 0.5rem !important;\r\n  }\r\n  .p-md-3 {\r\n    padding: 1rem 1rem !important;\r\n  }\r\n  .pt-md-3 {\r\n    padding-top: 1rem !important;\r\n  }\r\n  .pr-md-3 {\r\n    padding-right: 1rem !important;\r\n  }\r\n  .pb-md-3 {\r\n    padding-bottom: 1rem !important;\r\n  }\r\n  .pl-md-3 {\r\n    padding-left: 1rem !important;\r\n  }\r\n  .px-md-3 {\r\n    padding-right: 1rem !important;\r\n    padding-left: 1rem !important;\r\n  }\r\n  .py-md-3 {\r\n    padding-top: 1rem !important;\r\n    padding-bottom: 1rem !important;\r\n  }\r\n  .p-md-4 {\r\n    padding: 1.5rem 1.5rem !important;\r\n  }\r\n  .pt-md-4 {\r\n    padding-top: 1.5rem !important;\r\n  }\r\n  .pr-md-4 {\r\n    padding-right: 1.5rem !important;\r\n  }\r\n  .pb-md-4 {\r\n    padding-bottom: 1.5rem !important;\r\n  }\r\n  .pl-md-4 {\r\n    padding-left: 1.5rem !important;\r\n  }\r\n  .px-md-4 {\r\n    padding-right: 1.5rem !important;\r\n    padding-left: 1.5rem !important;\r\n  }\r\n  .py-md-4 {\r\n    padding-top: 1.5rem !important;\r\n    padding-bottom: 1.5rem !important;\r\n  }\r\n  .p-md-5 {\r\n    padding: 3rem 3rem !important;\r\n  }\r\n  .pt-md-5 {\r\n    padding-top: 3rem !important;\r\n  }\r\n  .pr-md-5 {\r\n    padding-right: 3rem !important;\r\n  }\r\n  .pb-md-5 {\r\n    padding-bottom: 3rem !important;\r\n  }\r\n  .pl-md-5 {\r\n    padding-left: 3rem !important;\r\n  }\r\n  .px-md-5 {\r\n    padding-right: 3rem !important;\r\n    padding-left: 3rem !important;\r\n  }\r\n  .py-md-5 {\r\n    padding-top: 3rem !important;\r\n    padding-bottom: 3rem !important;\r\n  }\r\n  .m-md-auto {\r\n    margin: auto !important;\r\n  }\r\n  .mt-md-auto {\r\n    margin-top: auto !important;\r\n  }\r\n  .mr-md-auto {\r\n    margin-right: auto !important;\r\n  }\r\n  .mb-md-auto {\r\n    margin-bottom: auto !important;\r\n  }\r\n  .ml-md-auto {\r\n    margin-left: auto !important;\r\n  }\r\n  .mx-md-auto {\r\n    margin-right: auto !important;\r\n    margin-left: auto !important;\r\n  }\r\n  .my-md-auto {\r\n    margin-top: auto !important;\r\n    margin-bottom: auto !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .m-lg-0 {\r\n    margin: 0 0 !important;\r\n  }\r\n  .mt-lg-0 {\r\n    margin-top: 0 !important;\r\n  }\r\n  .mr-lg-0 {\r\n    margin-right: 0 !important;\r\n  }\r\n  .mb-lg-0 {\r\n    margin-bottom: 0 !important;\r\n  }\r\n  .ml-lg-0 {\r\n    margin-left: 0 !important;\r\n  }\r\n  .mx-lg-0 {\r\n    margin-right: 0 !important;\r\n    margin-left: 0 !important;\r\n  }\r\n  .my-lg-0 {\r\n    margin-top: 0 !important;\r\n    margin-bottom: 0 !important;\r\n  }\r\n  .m-lg-1 {\r\n    margin: 0.25rem 0.25rem !important;\r\n  }\r\n  .mt-lg-1 {\r\n    margin-top: 0.25rem !important;\r\n  }\r\n  .mr-lg-1 {\r\n    margin-right: 0.25rem !important;\r\n  }\r\n  .mb-lg-1 {\r\n    margin-bottom: 0.25rem !important;\r\n  }\r\n  .ml-lg-1 {\r\n    margin-left: 0.25rem !important;\r\n  }\r\n  .mx-lg-1 {\r\n    margin-right: 0.25rem !important;\r\n    margin-left: 0.25rem !important;\r\n  }\r\n  .my-lg-1 {\r\n    margin-top: 0.25rem !important;\r\n    margin-bottom: 0.25rem !important;\r\n  }\r\n  .m-lg-2 {\r\n    margin: 0.5rem 0.5rem !important;\r\n  }\r\n  .mt-lg-2 {\r\n    margin-top: 0.5rem !important;\r\n  }\r\n  .mr-lg-2 {\r\n    margin-right: 0.5rem !important;\r\n  }\r\n  .mb-lg-2 {\r\n    margin-bottom: 0.5rem !important;\r\n  }\r\n  .ml-lg-2 {\r\n    margin-left: 0.5rem !important;\r\n  }\r\n  .mx-lg-2 {\r\n    margin-right: 0.5rem !important;\r\n    margin-left: 0.5rem !important;\r\n  }\r\n  .my-lg-2 {\r\n    margin-top: 0.5rem !important;\r\n    margin-bottom: 0.5rem !important;\r\n  }\r\n  .m-lg-3 {\r\n    margin: 1rem 1rem !important;\r\n  }\r\n  .mt-lg-3 {\r\n    margin-top: 1rem !important;\r\n  }\r\n  .mr-lg-3 {\r\n    margin-right: 1rem !important;\r\n  }\r\n  .mb-lg-3 {\r\n    margin-bottom: 1rem !important;\r\n  }\r\n  .ml-lg-3 {\r\n    margin-left: 1rem !important;\r\n  }\r\n  .mx-lg-3 {\r\n    margin-right: 1rem !important;\r\n    margin-left: 1rem !important;\r\n  }\r\n  .my-lg-3 {\r\n    margin-top: 1rem !important;\r\n    margin-bottom: 1rem !important;\r\n  }\r\n  .m-lg-4 {\r\n    margin: 1.5rem 1.5rem !important;\r\n  }\r\n  .mt-lg-4 {\r\n    margin-top: 1.5rem !important;\r\n  }\r\n  .mr-lg-4 {\r\n    margin-right: 1.5rem !important;\r\n  }\r\n  .mb-lg-4 {\r\n    margin-bottom: 1.5rem !important;\r\n  }\r\n  .ml-lg-4 {\r\n    margin-left: 1.5rem !important;\r\n  }\r\n  .mx-lg-4 {\r\n    margin-right: 1.5rem !important;\r\n    margin-left: 1.5rem !important;\r\n  }\r\n  .my-lg-4 {\r\n    margin-top: 1.5rem !important;\r\n    margin-bottom: 1.5rem !important;\r\n  }\r\n  .m-lg-5 {\r\n    margin: 3rem 3rem !important;\r\n  }\r\n  .mt-lg-5 {\r\n    margin-top: 3rem !important;\r\n  }\r\n  .mr-lg-5 {\r\n    margin-right: 3rem !important;\r\n  }\r\n  .mb-lg-5 {\r\n    margin-bottom: 3rem !important;\r\n  }\r\n  .ml-lg-5 {\r\n    margin-left: 3rem !important;\r\n  }\r\n  .mx-lg-5 {\r\n    margin-right: 3rem !important;\r\n    margin-left: 3rem !important;\r\n  }\r\n  .my-lg-5 {\r\n    margin-top: 3rem !important;\r\n    margin-bottom: 3rem !important;\r\n  }\r\n  .p-lg-0 {\r\n    padding: 0 0 !important;\r\n  }\r\n  .pt-lg-0 {\r\n    padding-top: 0 !important;\r\n  }\r\n  .pr-lg-0 {\r\n    padding-right: 0 !important;\r\n  }\r\n  .pb-lg-0 {\r\n    padding-bottom: 0 !important;\r\n  }\r\n  .pl-lg-0 {\r\n    padding-left: 0 !important;\r\n  }\r\n  .px-lg-0 {\r\n    padding-right: 0 !important;\r\n    padding-left: 0 !important;\r\n  }\r\n  .py-lg-0 {\r\n    padding-top: 0 !important;\r\n    padding-bottom: 0 !important;\r\n  }\r\n  .p-lg-1 {\r\n    padding: 0.25rem 0.25rem !important;\r\n  }\r\n  .pt-lg-1 {\r\n    padding-top: 0.25rem !important;\r\n  }\r\n  .pr-lg-1 {\r\n    padding-right: 0.25rem !important;\r\n  }\r\n  .pb-lg-1 {\r\n    padding-bottom: 0.25rem !important;\r\n  }\r\n  .pl-lg-1 {\r\n    padding-left: 0.25rem !important;\r\n  }\r\n  .px-lg-1 {\r\n    padding-right: 0.25rem !important;\r\n    padding-left: 0.25rem !important;\r\n  }\r\n  .py-lg-1 {\r\n    padding-top: 0.25rem !important;\r\n    padding-bottom: 0.25rem !important;\r\n  }\r\n  .p-lg-2 {\r\n    padding: 0.5rem 0.5rem !important;\r\n  }\r\n  .pt-lg-2 {\r\n    padding-top: 0.5rem !important;\r\n  }\r\n  .pr-lg-2 {\r\n    padding-right: 0.5rem !important;\r\n  }\r\n  .pb-lg-2 {\r\n    padding-bottom: 0.5rem !important;\r\n  }\r\n  .pl-lg-2 {\r\n    padding-left: 0.5rem !important;\r\n  }\r\n  .px-lg-2 {\r\n    padding-right: 0.5rem !important;\r\n    padding-left: 0.5rem !important;\r\n  }\r\n  .py-lg-2 {\r\n    padding-top: 0.5rem !important;\r\n    padding-bottom: 0.5rem !important;\r\n  }\r\n  .p-lg-3 {\r\n    padding: 1rem 1rem !important;\r\n  }\r\n  .pt-lg-3 {\r\n    padding-top: 1rem !important;\r\n  }\r\n  .pr-lg-3 {\r\n    padding-right: 1rem !important;\r\n  }\r\n  .pb-lg-3 {\r\n    padding-bottom: 1rem !important;\r\n  }\r\n  .pl-lg-3 {\r\n    padding-left: 1rem !important;\r\n  }\r\n  .px-lg-3 {\r\n    padding-right: 1rem !important;\r\n    padding-left: 1rem !important;\r\n  }\r\n  .py-lg-3 {\r\n    padding-top: 1rem !important;\r\n    padding-bottom: 1rem !important;\r\n  }\r\n  .p-lg-4 {\r\n    padding: 1.5rem 1.5rem !important;\r\n  }\r\n  .pt-lg-4 {\r\n    padding-top: 1.5rem !important;\r\n  }\r\n  .pr-lg-4 {\r\n    padding-right: 1.5rem !important;\r\n  }\r\n  .pb-lg-4 {\r\n    padding-bottom: 1.5rem !important;\r\n  }\r\n  .pl-lg-4 {\r\n    padding-left: 1.5rem !important;\r\n  }\r\n  .px-lg-4 {\r\n    padding-right: 1.5rem !important;\r\n    padding-left: 1.5rem !important;\r\n  }\r\n  .py-lg-4 {\r\n    padding-top: 1.5rem !important;\r\n    padding-bottom: 1.5rem !important;\r\n  }\r\n  .p-lg-5 {\r\n    padding: 3rem 3rem !important;\r\n  }\r\n  .pt-lg-5 {\r\n    padding-top: 3rem !important;\r\n  }\r\n  .pr-lg-5 {\r\n    padding-right: 3rem !important;\r\n  }\r\n  .pb-lg-5 {\r\n    padding-bottom: 3rem !important;\r\n  }\r\n  .pl-lg-5 {\r\n    padding-left: 3rem !important;\r\n  }\r\n  .px-lg-5 {\r\n    padding-right: 3rem !important;\r\n    padding-left: 3rem !important;\r\n  }\r\n  .py-lg-5 {\r\n    padding-top: 3rem !important;\r\n    padding-bottom: 3rem !important;\r\n  }\r\n  .m-lg-auto {\r\n    margin: auto !important;\r\n  }\r\n  .mt-lg-auto {\r\n    margin-top: auto !important;\r\n  }\r\n  .mr-lg-auto {\r\n    margin-right: auto !important;\r\n  }\r\n  .mb-lg-auto {\r\n    margin-bottom: auto !important;\r\n  }\r\n  .ml-lg-auto {\r\n    margin-left: auto !important;\r\n  }\r\n  .mx-lg-auto {\r\n    margin-right: auto !important;\r\n    margin-left: auto !important;\r\n  }\r\n  .my-lg-auto {\r\n    margin-top: auto !important;\r\n    margin-bottom: auto !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .m-xl-0 {\r\n    margin: 0 0 !important;\r\n  }\r\n  .mt-xl-0 {\r\n    margin-top: 0 !important;\r\n  }\r\n  .mr-xl-0 {\r\n    margin-right: 0 !important;\r\n  }\r\n  .mb-xl-0 {\r\n    margin-bottom: 0 !important;\r\n  }\r\n  .ml-xl-0 {\r\n    margin-left: 0 !important;\r\n  }\r\n  .mx-xl-0 {\r\n    margin-right: 0 !important;\r\n    margin-left: 0 !important;\r\n  }\r\n  .my-xl-0 {\r\n    margin-top: 0 !important;\r\n    margin-bottom: 0 !important;\r\n  }\r\n  .m-xl-1 {\r\n    margin: 0.25rem 0.25rem !important;\r\n  }\r\n  .mt-xl-1 {\r\n    margin-top: 0.25rem !important;\r\n  }\r\n  .mr-xl-1 {\r\n    margin-right: 0.25rem !important;\r\n  }\r\n  .mb-xl-1 {\r\n    margin-bottom: 0.25rem !important;\r\n  }\r\n  .ml-xl-1 {\r\n    margin-left: 0.25rem !important;\r\n  }\r\n  .mx-xl-1 {\r\n    margin-right: 0.25rem !important;\r\n    margin-left: 0.25rem !important;\r\n  }\r\n  .my-xl-1 {\r\n    margin-top: 0.25rem !important;\r\n    margin-bottom: 0.25rem !important;\r\n  }\r\n  .m-xl-2 {\r\n    margin: 0.5rem 0.5rem !important;\r\n  }\r\n  .mt-xl-2 {\r\n    margin-top: 0.5rem !important;\r\n  }\r\n  .mr-xl-2 {\r\n    margin-right: 0.5rem !important;\r\n  }\r\n  .mb-xl-2 {\r\n    margin-bottom: 0.5rem !important;\r\n  }\r\n  .ml-xl-2 {\r\n    margin-left: 0.5rem !important;\r\n  }\r\n  .mx-xl-2 {\r\n    margin-right: 0.5rem !important;\r\n    margin-left: 0.5rem !important;\r\n  }\r\n  .my-xl-2 {\r\n    margin-top: 0.5rem !important;\r\n    margin-bottom: 0.5rem !important;\r\n  }\r\n  .m-xl-3 {\r\n    margin: 1rem 1rem !important;\r\n  }\r\n  .mt-xl-3 {\r\n    margin-top: 1rem !important;\r\n  }\r\n  .mr-xl-3 {\r\n    margin-right: 1rem !important;\r\n  }\r\n  .mb-xl-3 {\r\n    margin-bottom: 1rem !important;\r\n  }\r\n  .ml-xl-3 {\r\n    margin-left: 1rem !important;\r\n  }\r\n  .mx-xl-3 {\r\n    margin-right: 1rem !important;\r\n    margin-left: 1rem !important;\r\n  }\r\n  .my-xl-3 {\r\n    margin-top: 1rem !important;\r\n    margin-bottom: 1rem !important;\r\n  }\r\n  .m-xl-4 {\r\n    margin: 1.5rem 1.5rem !important;\r\n  }\r\n  .mt-xl-4 {\r\n    margin-top: 1.5rem !important;\r\n  }\r\n  .mr-xl-4 {\r\n    margin-right: 1.5rem !important;\r\n  }\r\n  .mb-xl-4 {\r\n    margin-bottom: 1.5rem !important;\r\n  }\r\n  .ml-xl-4 {\r\n    margin-left: 1.5rem !important;\r\n  }\r\n  .mx-xl-4 {\r\n    margin-right: 1.5rem !important;\r\n    margin-left: 1.5rem !important;\r\n  }\r\n  .my-xl-4 {\r\n    margin-top: 1.5rem !important;\r\n    margin-bottom: 1.5rem !important;\r\n  }\r\n  .m-xl-5 {\r\n    margin: 3rem 3rem !important;\r\n  }\r\n  .mt-xl-5 {\r\n    margin-top: 3rem !important;\r\n  }\r\n  .mr-xl-5 {\r\n    margin-right: 3rem !important;\r\n  }\r\n  .mb-xl-5 {\r\n    margin-bottom: 3rem !important;\r\n  }\r\n  .ml-xl-5 {\r\n    margin-left: 3rem !important;\r\n  }\r\n  .mx-xl-5 {\r\n    margin-right: 3rem !important;\r\n    margin-left: 3rem !important;\r\n  }\r\n  .my-xl-5 {\r\n    margin-top: 3rem !important;\r\n    margin-bottom: 3rem !important;\r\n  }\r\n  .p-xl-0 {\r\n    padding: 0 0 !important;\r\n  }\r\n  .pt-xl-0 {\r\n    padding-top: 0 !important;\r\n  }\r\n  .pr-xl-0 {\r\n    padding-right: 0 !important;\r\n  }\r\n  .pb-xl-0 {\r\n    padding-bottom: 0 !important;\r\n  }\r\n  .pl-xl-0 {\r\n    padding-left: 0 !important;\r\n  }\r\n  .px-xl-0 {\r\n    padding-right: 0 !important;\r\n    padding-left: 0 !important;\r\n  }\r\n  .py-xl-0 {\r\n    padding-top: 0 !important;\r\n    padding-bottom: 0 !important;\r\n  }\r\n  .p-xl-1 {\r\n    padding: 0.25rem 0.25rem !important;\r\n  }\r\n  .pt-xl-1 {\r\n    padding-top: 0.25rem !important;\r\n  }\r\n  .pr-xl-1 {\r\n    padding-right: 0.25rem !important;\r\n  }\r\n  .pb-xl-1 {\r\n    padding-bottom: 0.25rem !important;\r\n  }\r\n  .pl-xl-1 {\r\n    padding-left: 0.25rem !important;\r\n  }\r\n  .px-xl-1 {\r\n    padding-right: 0.25rem !important;\r\n    padding-left: 0.25rem !important;\r\n  }\r\n  .py-xl-1 {\r\n    padding-top: 0.25rem !important;\r\n    padding-bottom: 0.25rem !important;\r\n  }\r\n  .p-xl-2 {\r\n    padding: 0.5rem 0.5rem !important;\r\n  }\r\n  .pt-xl-2 {\r\n    padding-top: 0.5rem !important;\r\n  }\r\n  .pr-xl-2 {\r\n    padding-right: 0.5rem !important;\r\n  }\r\n  .pb-xl-2 {\r\n    padding-bottom: 0.5rem !important;\r\n  }\r\n  .pl-xl-2 {\r\n    padding-left: 0.5rem !important;\r\n  }\r\n  .px-xl-2 {\r\n    padding-right: 0.5rem !important;\r\n    padding-left: 0.5rem !important;\r\n  }\r\n  .py-xl-2 {\r\n    padding-top: 0.5rem !important;\r\n    padding-bottom: 0.5rem !important;\r\n  }\r\n  .p-xl-3 {\r\n    padding: 1rem 1rem !important;\r\n  }\r\n  .pt-xl-3 {\r\n    padding-top: 1rem !important;\r\n  }\r\n  .pr-xl-3 {\r\n    padding-right: 1rem !important;\r\n  }\r\n  .pb-xl-3 {\r\n    padding-bottom: 1rem !important;\r\n  }\r\n  .pl-xl-3 {\r\n    padding-left: 1rem !important;\r\n  }\r\n  .px-xl-3 {\r\n    padding-right: 1rem !important;\r\n    padding-left: 1rem !important;\r\n  }\r\n  .py-xl-3 {\r\n    padding-top: 1rem !important;\r\n    padding-bottom: 1rem !important;\r\n  }\r\n  .p-xl-4 {\r\n    padding: 1.5rem 1.5rem !important;\r\n  }\r\n  .pt-xl-4 {\r\n    padding-top: 1.5rem !important;\r\n  }\r\n  .pr-xl-4 {\r\n    padding-right: 1.5rem !important;\r\n  }\r\n  .pb-xl-4 {\r\n    padding-bottom: 1.5rem !important;\r\n  }\r\n  .pl-xl-4 {\r\n    padding-left: 1.5rem !important;\r\n  }\r\n  .px-xl-4 {\r\n    padding-right: 1.5rem !important;\r\n    padding-left: 1.5rem !important;\r\n  }\r\n  .py-xl-4 {\r\n    padding-top: 1.5rem !important;\r\n    padding-bottom: 1.5rem !important;\r\n  }\r\n  .p-xl-5 {\r\n    padding: 3rem 3rem !important;\r\n  }\r\n  .pt-xl-5 {\r\n    padding-top: 3rem !important;\r\n  }\r\n  .pr-xl-5 {\r\n    padding-right: 3rem !important;\r\n  }\r\n  .pb-xl-5 {\r\n    padding-bottom: 3rem !important;\r\n  }\r\n  .pl-xl-5 {\r\n    padding-left: 3rem !important;\r\n  }\r\n  .px-xl-5 {\r\n    padding-right: 3rem !important;\r\n    padding-left: 3rem !important;\r\n  }\r\n  .py-xl-5 {\r\n    padding-top: 3rem !important;\r\n    padding-bottom: 3rem !important;\r\n  }\r\n  .m-xl-auto {\r\n    margin: auto !important;\r\n  }\r\n  .mt-xl-auto {\r\n    margin-top: auto !important;\r\n  }\r\n  .mr-xl-auto {\r\n    margin-right: auto !important;\r\n  }\r\n  .mb-xl-auto {\r\n    margin-bottom: auto !important;\r\n  }\r\n  .ml-xl-auto {\r\n    margin-left: auto !important;\r\n  }\r\n  .mx-xl-auto {\r\n    margin-right: auto !important;\r\n    margin-left: auto !important;\r\n  }\r\n  .my-xl-auto {\r\n    margin-top: auto !important;\r\n    margin-bottom: auto !important;\r\n  }\r\n}\r\n\r\n.text-justify {\r\n  text-align: justify !important;\r\n}\r\n\r\n.text-nowrap {\r\n  white-space: nowrap !important;\r\n}\r\n\r\n.text-truncate {\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n}\r\n\r\n.text-left {\r\n  text-align: left !important;\r\n}\r\n\r\n.text-right {\r\n  text-align: right !important;\r\n}\r\n\r\n.text-center {\r\n  text-align: center !important;\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .text-sm-left {\r\n    text-align: left !important;\r\n  }\r\n  .text-sm-right {\r\n    text-align: right !important;\r\n  }\r\n  .text-sm-center {\r\n    text-align: center !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .text-md-left {\r\n    text-align: left !important;\r\n  }\r\n  .text-md-right {\r\n    text-align: right !important;\r\n  }\r\n  .text-md-center {\r\n    text-align: center !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .text-lg-left {\r\n    text-align: left !important;\r\n  }\r\n  .text-lg-right {\r\n    text-align: right !important;\r\n  }\r\n  .text-lg-center {\r\n    text-align: center !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .text-xl-left {\r\n    text-align: left !important;\r\n  }\r\n  .text-xl-right {\r\n    text-align: right !important;\r\n  }\r\n  .text-xl-center {\r\n    text-align: center !important;\r\n  }\r\n}\r\n\r\n.text-lowercase {\r\n  text-transform: lowercase !important;\r\n}\r\n\r\n.text-uppercase {\r\n  text-transform: uppercase !important;\r\n}\r\n\r\n.text-capitalize {\r\n  text-transform: capitalize !important;\r\n}\r\n\r\n.font-weight-normal {\r\n  font-weight: normal;\r\n}\r\n\r\n.font-weight-bold {\r\n  font-weight: bold;\r\n}\r\n\r\n.font-italic {\r\n  font-style: italic;\r\n}\r\n\r\n.text-white {\r\n  color: #fff !important;\r\n}\r\n\r\n.text-muted {\r\n  color: #636c72 !important;\r\n}\r\n\r\na.text-muted:focus, a.text-muted:hover {\r\n  color: #4b5257 !important;\r\n}\r\n\r\n.text-primary {\r\n  color: #0275d8 !important;\r\n}\r\n\r\na.text-primary:focus, a.text-primary:hover {\r\n  color: #025aa5 !important;\r\n}\r\n\r\n.text-success {\r\n  color: #5cb85c !important;\r\n}\r\n\r\na.text-success:focus, a.text-success:hover {\r\n  color: #449d44 !important;\r\n}\r\n\r\n.text-info {\r\n  color: #5bc0de !important;\r\n}\r\n\r\na.text-info:focus, a.text-info:hover {\r\n  color: #31b0d5 !important;\r\n}\r\n\r\n.text-warning {\r\n  color: #f0ad4e !important;\r\n}\r\n\r\na.text-warning:focus, a.text-warning:hover {\r\n  color: #ec971f !important;\r\n}\r\n\r\n.text-danger {\r\n  color: #d9534f !important;\r\n}\r\n\r\na.text-danger:focus, a.text-danger:hover {\r\n  color: #c9302c !important;\r\n}\r\n\r\n.text-gray-dark {\r\n  color: #292b2c !important;\r\n}\r\n\r\na.text-gray-dark:focus, a.text-gray-dark:hover {\r\n  color: #101112 !important;\r\n}\r\n\r\n.text-hide {\r\n  font: 0/0 a;\r\n  color: transparent;\r\n  text-shadow: none;\r\n  background-color: transparent;\r\n  border: 0;\r\n}\r\n\r\n.invisible {\r\n  visibility: hidden !important;\r\n}\r\n\r\n.hidden-xs-up {\r\n  display: none !important;\r\n}\r\n\r\n@media (max-width: 575px) {\r\n  .hidden-xs-down {\r\n    display: none !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 576px) {\r\n  .hidden-sm-up {\r\n    display: none !important;\r\n  }\r\n}\r\n\r\n@media (max-width: 767px) {\r\n  .hidden-sm-down {\r\n    display: none !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .hidden-md-up {\r\n    display: none !important;\r\n  }\r\n}\r\n\r\n@media (max-width: 991px) {\r\n  .hidden-md-down {\r\n    display: none !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n  .hidden-lg-up {\r\n    display: none !important;\r\n  }\r\n}\r\n\r\n@media (max-width: 1199px) {\r\n  .hidden-lg-down {\r\n    display: none !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 1200px) {\r\n  .hidden-xl-up {\r\n    display: none !important;\r\n  }\r\n}\r\n\r\n.hidden-xl-down {\r\n  display: none !important;\r\n}\r\n\r\n.visible-print-block {\r\n  display: none !important;\r\n}\r\n\r\n@media print {\r\n  .visible-print-block {\r\n    display: block !important;\r\n  }\r\n}\r\n\r\n.visible-print-inline {\r\n  display: none !important;\r\n}\r\n\r\n@media print {\r\n  .visible-print-inline {\r\n    display: inline !important;\r\n  }\r\n}\r\n\r\n.visible-print-inline-block {\r\n  display: none !important;\r\n}\r\n\r\n@media print {\r\n  .visible-print-inline-block {\r\n    display: inline-block !important;\r\n  }\r\n}\r\n\r\n@media print {\r\n  .hidden-print {\r\n    display: none !important;\r\n  }\r\n}", ""]);

// exports


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
	// get current location
	var location = typeof window !== "undefined" && window.location;

	if (!location) {
		throw new Error("fixUrls requires window.location");
	}

	// blank or null?
	if (!css || typeof css !== "string") {
		return css;
	}

	var baseUrl = location.protocol + "//" + location.host;
	var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
 This regular expression is just a way to recursively match brackets within
 a string.
 	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
    (  = Start a capturing group
      (?:  = Start a non-capturing group
          [^)(]  = Match anything that isn't a parentheses
          |  = OR
          \(  = Match a start parentheses
              (?:  = Start another non-capturing groups
                  [^)(]+  = Match anything that isn't a parentheses
                  |  = OR
                  \(  = Match a start parentheses
                      [^)(]*  = Match anything that isn't a parentheses
                  \)  = Match a end parentheses
              )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
  \)  = Match a close parens
 	 /gi  = Get all matches, not the first.  Be case insensitive.
  */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
			return $1;
		}).replace(/^'(.*)'$/, function (o, $1) {
			return $1;
		});

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
			return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
			//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(10);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(3)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./tether.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./tether.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, ".tether-element, .tether-element:after, .tether-element:before, .tether-element *, .tether-element *:after, .tether-element *:before {\r\n  box-sizing: border-box; }\r\n\r\n.tether-element {\r\n  position: absolute;\r\n  display: none; }\r\n  .tether-element.tether-open {\r\n    display: block; }\r\n", ""]);

// exports


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Base2 = __webpack_require__(1);

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

        console.log(_this.panelTitle());
        _this.panelBody = function () {
            return $(this.selector).find("panel-body").html();
        };

        return _this;
    }

    _createClass(Panel, [{
        key: "createBlock",
        value: function createBlock() {
            // main block and container
            this.main_block = document.createElement('div');
            $(this.main_block).attr("id", "panel" + this.index);
            $(this.main_block).addClass("panel panel-default");
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

            this.main_block.appendChild(panelTitle);
            this.main_block.appendChild(panelBody);
        }
    }]);

    return Panel;
}(_Base3.default);

exports.default = Panel;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Base2 = __webpack_require__(1);

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
            this.Header = function () {
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
            this.Body = function () {
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
            this.main_block = document.createElement('div');
            $(this.main_block).attr("id", "tab" + this.index);
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
                $(tab_content_block).append(tabItem.Body());
                // re-structure
                ul.appendChild(tabItem.Header());
            }
            this.main_block.append(ul);
            this.main_block.append(tab_content_block);
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Base2 = __webpack_require__(1);

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

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery, Tether) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * Bootstrap v4.0.0-alpha.6 (https://getbootstrap.com)
 * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");+function (t) {
  var e = t.fn.jquery.split(" ")[0].split(".");if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
}(jQuery), +function () {
  function t(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
  }function e(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
  }function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }var i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
    return typeof t === "undefined" ? "undefined" : _typeof(t);
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
  },
      o = function () {
    function t(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }return function (e, n, i) {
      return n && t(e.prototype, n), i && t(e, i), e;
    };
  }(),
      r = function (t) {
    function e(t) {
      return {}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
    }function n(t) {
      return (t[0] || t).nodeType;
    }function i() {
      return { bindType: a.end, delegateType: a.end, handle: function handle(e) {
          if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
        } };
    }function o() {
      if (window.QUnit) return !1;var t = document.createElement("bootstrap");for (var e in h) {
        if (void 0 !== t.style[e]) return { end: h[e] };
      }return !1;
    }function r(e) {
      var n = this,
          i = !1;return t(this).one(c.TRANSITION_END, function () {
        i = !0;
      }), setTimeout(function () {
        i || c.triggerTransitionEnd(n);
      }, e), this;
    }function s() {
      a = o(), t.fn.emulateTransitionEnd = r, c.supportsTransitionEnd() && (t.event.special[c.TRANSITION_END] = i());
    }var a = !1,
        l = 1e6,
        h = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" },
        c = { TRANSITION_END: "bsTransitionEnd", getUID: function getUID(t) {
        do {
          t += ~~(Math.random() * l);
        } while (document.getElementById(t));return t;
      }, getSelectorFromElement: function getSelectorFromElement(t) {
        var e = t.getAttribute("data-target");return e || (e = t.getAttribute("href") || "", e = /^#[a-z]/i.test(e) ? e : null), e;
      }, reflow: function reflow(t) {
        return t.offsetHeight;
      }, triggerTransitionEnd: function triggerTransitionEnd(e) {
        t(e).trigger(a.end);
      }, supportsTransitionEnd: function supportsTransitionEnd() {
        return Boolean(a);
      }, typeCheckConfig: function typeCheckConfig(t, i, o) {
        for (var r in o) {
          if (o.hasOwnProperty(r)) {
            var s = o[r],
                a = i[r],
                l = a && n(a) ? "element" : e(a);if (!new RegExp(s).test(l)) throw new Error(t.toUpperCase() + ": " + ('Option "' + r + '" provided type "' + l + '" ') + ('but expected type "' + s + '".'));
          }
        }
      } };return s(), c;
  }(jQuery),
      s = (function (t) {
    var e = "alert",
        i = "4.0.0-alpha.6",
        s = "bs.alert",
        a = "." + s,
        l = ".data-api",
        h = t.fn[e],
        c = 150,
        u = { DISMISS: '[data-dismiss="alert"]' },
        d = { CLOSE: "close" + a, CLOSED: "closed" + a, CLICK_DATA_API: "click" + a + l },
        f = { ALERT: "alert", FADE: "fade", SHOW: "show" },
        _ = function () {
      function e(t) {
        n(this, e), this._element = t;
      }return e.prototype.close = function (t) {
        t = t || this._element;var e = this._getRootElement(t),
            n = this._triggerCloseEvent(e);n.isDefaultPrevented() || this._removeElement(e);
      }, e.prototype.dispose = function () {
        t.removeData(this._element, s), this._element = null;
      }, e.prototype._getRootElement = function (e) {
        var n = r.getSelectorFromElement(e),
            i = !1;return n && (i = t(n)[0]), i || (i = t(e).closest("." + f.ALERT)[0]), i;
      }, e.prototype._triggerCloseEvent = function (e) {
        var n = t.Event(d.CLOSE);return t(e).trigger(n), n;
      }, e.prototype._removeElement = function (e) {
        var n = this;return t(e).removeClass(f.SHOW), r.supportsTransitionEnd() && t(e).hasClass(f.FADE) ? void t(e).one(r.TRANSITION_END, function (t) {
          return n._destroyElement(e, t);
        }).emulateTransitionEnd(c) : void this._destroyElement(e);
      }, e.prototype._destroyElement = function (e) {
        t(e).detach().trigger(d.CLOSED).remove();
      }, e._jQueryInterface = function (n) {
        return this.each(function () {
          var i = t(this),
              o = i.data(s);o || (o = new e(this), i.data(s, o)), "close" === n && o[n](this);
        });
      }, e._handleDismiss = function (t) {
        return function (e) {
          e && e.preventDefault(), t.close(this);
        };
      }, o(e, null, [{ key: "VERSION", get: function get() {
          return i;
        } }]), e;
    }();return t(document).on(d.CLICK_DATA_API, u.DISMISS, _._handleDismiss(new _())), t.fn[e] = _._jQueryInterface, t.fn[e].Constructor = _, t.fn[e].noConflict = function () {
      return t.fn[e] = h, _._jQueryInterface;
    }, _;
  }(jQuery), function (t) {
    var e = "button",
        i = "4.0.0-alpha.6",
        r = "bs.button",
        s = "." + r,
        a = ".data-api",
        l = t.fn[e],
        h = { ACTIVE: "active", BUTTON: "btn", FOCUS: "focus" },
        c = { DATA_TOGGLE_CARROT: '[data-toggle^="button"]', DATA_TOGGLE: '[data-toggle="buttons"]', INPUT: "input", ACTIVE: ".active", BUTTON: ".btn" },
        u = { CLICK_DATA_API: "click" + s + a, FOCUS_BLUR_DATA_API: "focus" + s + a + " " + ("blur" + s + a) },
        d = function () {
      function e(t) {
        n(this, e), this._element = t;
      }return e.prototype.toggle = function () {
        var e = !0,
            n = t(this._element).closest(c.DATA_TOGGLE)[0];if (n) {
          var i = t(this._element).find(c.INPUT)[0];if (i) {
            if ("radio" === i.type) if (i.checked && t(this._element).hasClass(h.ACTIVE)) e = !1;else {
              var o = t(n).find(c.ACTIVE)[0];o && t(o).removeClass(h.ACTIVE);
            }e && (i.checked = !t(this._element).hasClass(h.ACTIVE), t(i).trigger("change")), i.focus();
          }
        }this._element.setAttribute("aria-pressed", !t(this._element).hasClass(h.ACTIVE)), e && t(this._element).toggleClass(h.ACTIVE);
      }, e.prototype.dispose = function () {
        t.removeData(this._element, r), this._element = null;
      }, e._jQueryInterface = function (n) {
        return this.each(function () {
          var i = t(this).data(r);i || (i = new e(this), t(this).data(r, i)), "toggle" === n && i[n]();
        });
      }, o(e, null, [{ key: "VERSION", get: function get() {
          return i;
        } }]), e;
    }();return t(document).on(u.CLICK_DATA_API, c.DATA_TOGGLE_CARROT, function (e) {
      e.preventDefault();var n = e.target;t(n).hasClass(h.BUTTON) || (n = t(n).closest(c.BUTTON)), d._jQueryInterface.call(t(n), "toggle");
    }).on(u.FOCUS_BLUR_DATA_API, c.DATA_TOGGLE_CARROT, function (e) {
      var n = t(e.target).closest(c.BUTTON)[0];t(n).toggleClass(h.FOCUS, /^focus(in)?$/.test(e.type));
    }), t.fn[e] = d._jQueryInterface, t.fn[e].Constructor = d, t.fn[e].noConflict = function () {
      return t.fn[e] = l, d._jQueryInterface;
    }, d;
  }(jQuery), function (t) {
    var e = "carousel",
        s = "4.0.0-alpha.6",
        a = "bs.carousel",
        l = "." + a,
        h = ".data-api",
        c = t.fn[e],
        u = 600,
        d = 37,
        f = 39,
        _ = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 },
        g = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" },
        p = { NEXT: "next", PREV: "prev", LEFT: "left", RIGHT: "right" },
        m = { SLIDE: "slide" + l, SLID: "slid" + l, KEYDOWN: "keydown" + l, MOUSEENTER: "mouseenter" + l, MOUSELEAVE: "mouseleave" + l, LOAD_DATA_API: "load" + l + h, CLICK_DATA_API: "click" + l + h },
        E = { CAROUSEL: "carousel", ACTIVE: "active", SLIDE: "slide", RIGHT: "carousel-item-right", LEFT: "carousel-item-left", NEXT: "carousel-item-next", PREV: "carousel-item-prev", ITEM: "carousel-item" },
        v = { ACTIVE: ".active", ACTIVE_ITEM: ".active.carousel-item", ITEM: ".carousel-item", NEXT_PREV: ".carousel-item-next, .carousel-item-prev", INDICATORS: ".carousel-indicators", DATA_SLIDE: "[data-slide], [data-slide-to]", DATA_RIDE: '[data-ride="carousel"]' },
        T = function () {
      function h(e, i) {
        n(this, h), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this._config = this._getConfig(i), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(v.INDICATORS)[0], this._addEventListeners();
      }return h.prototype.next = function () {
        if (this._isSliding) throw new Error("Carousel is sliding");this._slide(p.NEXT);
      }, h.prototype.nextWhenVisible = function () {
        document.hidden || this.next();
      }, h.prototype.prev = function () {
        if (this._isSliding) throw new Error("Carousel is sliding");this._slide(p.PREVIOUS);
      }, h.prototype.pause = function (e) {
        e || (this._isPaused = !0), t(this._element).find(v.NEXT_PREV)[0] && r.supportsTransitionEnd() && (r.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
      }, h.prototype.cycle = function (t) {
        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
      }, h.prototype.to = function (e) {
        var n = this;this._activeElement = t(this._element).find(v.ACTIVE_ITEM)[0];var i = this._getItemIndex(this._activeElement);if (!(e > this._items.length - 1 || e < 0)) {
          if (this._isSliding) return void t(this._element).one(m.SLID, function () {
            return n.to(e);
          });if (i === e) return this.pause(), void this.cycle();var o = e > i ? p.NEXT : p.PREVIOUS;this._slide(o, this._items[e]);
        }
      }, h.prototype.dispose = function () {
        t(this._element).off(l), t.removeData(this._element, a), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
      }, h.prototype._getConfig = function (n) {
        return n = t.extend({}, _, n), r.typeCheckConfig(e, n, g), n;
      }, h.prototype._addEventListeners = function () {
        var e = this;this._config.keyboard && t(this._element).on(m.KEYDOWN, function (t) {
          return e._keydown(t);
        }), "hover" !== this._config.pause || "ontouchstart" in document.documentElement || t(this._element).on(m.MOUSEENTER, function (t) {
          return e.pause(t);
        }).on(m.MOUSELEAVE, function (t) {
          return e.cycle(t);
        });
      }, h.prototype._keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {case d:
            t.preventDefault(), this.prev();break;case f:
            t.preventDefault(), this.next();break;default:
            return;}
      }, h.prototype._getItemIndex = function (e) {
        return this._items = t.makeArray(t(e).parent().find(v.ITEM)), this._items.indexOf(e);
      }, h.prototype._getItemByDirection = function (t, e) {
        var n = t === p.NEXT,
            i = t === p.PREVIOUS,
            o = this._getItemIndex(e),
            r = this._items.length - 1,
            s = i && 0 === o || n && o === r;if (s && !this._config.wrap) return e;var a = t === p.PREVIOUS ? -1 : 1,
            l = (o + a) % this._items.length;return l === -1 ? this._items[this._items.length - 1] : this._items[l];
      }, h.prototype._triggerSlideEvent = function (e, n) {
        var i = t.Event(m.SLIDE, { relatedTarget: e, direction: n });return t(this._element).trigger(i), i;
      }, h.prototype._setActiveIndicatorElement = function (e) {
        if (this._indicatorsElement) {
          t(this._indicatorsElement).find(v.ACTIVE).removeClass(E.ACTIVE);var n = this._indicatorsElement.children[this._getItemIndex(e)];n && t(n).addClass(E.ACTIVE);
        }
      }, h.prototype._slide = function (e, n) {
        var i = this,
            o = t(this._element).find(v.ACTIVE_ITEM)[0],
            s = n || o && this._getItemByDirection(e, o),
            a = Boolean(this._interval),
            l = void 0,
            h = void 0,
            c = void 0;if (e === p.NEXT ? (l = E.LEFT, h = E.NEXT, c = p.LEFT) : (l = E.RIGHT, h = E.PREV, c = p.RIGHT), s && t(s).hasClass(E.ACTIVE)) return void (this._isSliding = !1);var d = this._triggerSlideEvent(s, c);if (!d.isDefaultPrevented() && o && s) {
          this._isSliding = !0, a && this.pause(), this._setActiveIndicatorElement(s);var f = t.Event(m.SLID, { relatedTarget: s, direction: c });r.supportsTransitionEnd() && t(this._element).hasClass(E.SLIDE) ? (t(s).addClass(h), r.reflow(s), t(o).addClass(l), t(s).addClass(l), t(o).one(r.TRANSITION_END, function () {
            t(s).removeClass(l + " " + h).addClass(E.ACTIVE), t(o).removeClass(E.ACTIVE + " " + h + " " + l), i._isSliding = !1, setTimeout(function () {
              return t(i._element).trigger(f);
            }, 0);
          }).emulateTransitionEnd(u)) : (t(o).removeClass(E.ACTIVE), t(s).addClass(E.ACTIVE), this._isSliding = !1, t(this._element).trigger(f)), a && this.cycle();
        }
      }, h._jQueryInterface = function (e) {
        return this.each(function () {
          var n = t(this).data(a),
              o = t.extend({}, _, t(this).data());"object" === ("undefined" == typeof e ? "undefined" : i(e)) && t.extend(o, e);var r = "string" == typeof e ? e : o.slide;if (n || (n = new h(this, o), t(this).data(a, n)), "number" == typeof e) n.to(e);else if ("string" == typeof r) {
            if (void 0 === n[r]) throw new Error('No method named "' + r + '"');n[r]();
          } else o.interval && (n.pause(), n.cycle());
        });
      }, h._dataApiClickHandler = function (e) {
        var n = r.getSelectorFromElement(this);if (n) {
          var i = t(n)[0];if (i && t(i).hasClass(E.CAROUSEL)) {
            var o = t.extend({}, t(i).data(), t(this).data()),
                s = this.getAttribute("data-slide-to");s && (o.interval = !1), h._jQueryInterface.call(t(i), o), s && t(i).data(a).to(s), e.preventDefault();
          }
        }
      }, o(h, null, [{ key: "VERSION", get: function get() {
          return s;
        } }, { key: "Default", get: function get() {
          return _;
        } }]), h;
    }();return t(document).on(m.CLICK_DATA_API, v.DATA_SLIDE, T._dataApiClickHandler), t(window).on(m.LOAD_DATA_API, function () {
      t(v.DATA_RIDE).each(function () {
        var e = t(this);T._jQueryInterface.call(e, e.data());
      });
    }), t.fn[e] = T._jQueryInterface, t.fn[e].Constructor = T, t.fn[e].noConflict = function () {
      return t.fn[e] = c, T._jQueryInterface;
    }, T;
  }(jQuery), function (t) {
    var e = "collapse",
        s = "4.0.0-alpha.6",
        a = "bs.collapse",
        l = "." + a,
        h = ".data-api",
        c = t.fn[e],
        u = 600,
        d = { toggle: !0, parent: "" },
        f = { toggle: "boolean", parent: "string" },
        _ = { SHOW: "show" + l, SHOWN: "shown" + l, HIDE: "hide" + l, HIDDEN: "hidden" + l, CLICK_DATA_API: "click" + l + h },
        g = { SHOW: "show", COLLAPSE: "collapse", COLLAPSING: "collapsing", COLLAPSED: "collapsed" },
        p = { WIDTH: "width", HEIGHT: "height" },
        m = { ACTIVES: ".card > .show, .card > .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]' },
        E = function () {
      function l(e, i) {
        n(this, l), this._isTransitioning = !1, this._element = e, this._config = this._getConfig(i), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],' + ('[data-toggle="collapse"][data-target="#' + e.id + '"]'))), this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
      }return l.prototype.toggle = function () {
        t(this._element).hasClass(g.SHOW) ? this.hide() : this.show();
      }, l.prototype.show = function () {
        var e = this;if (this._isTransitioning) throw new Error("Collapse is transitioning");if (!t(this._element).hasClass(g.SHOW)) {
          var n = void 0,
              i = void 0;if (this._parent && (n = t.makeArray(t(this._parent).find(m.ACTIVES)), n.length || (n = null)), !(n && (i = t(n).data(a), i && i._isTransitioning))) {
            var o = t.Event(_.SHOW);if (t(this._element).trigger(o), !o.isDefaultPrevented()) {
              n && (l._jQueryInterface.call(t(n), "hide"), i || t(n).data(a, null));var s = this._getDimension();t(this._element).removeClass(g.COLLAPSE).addClass(g.COLLAPSING), this._element.style[s] = 0, this._element.setAttribute("aria-expanded", !0), this._triggerArray.length && t(this._triggerArray).removeClass(g.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);var h = function h() {
                t(e._element).removeClass(g.COLLAPSING).addClass(g.COLLAPSE).addClass(g.SHOW), e._element.style[s] = "", e.setTransitioning(!1), t(e._element).trigger(_.SHOWN);
              };if (!r.supportsTransitionEnd()) return void h();var c = s[0].toUpperCase() + s.slice(1),
                  d = "scroll" + c;t(this._element).one(r.TRANSITION_END, h).emulateTransitionEnd(u), this._element.style[s] = this._element[d] + "px";
            }
          }
        }
      }, l.prototype.hide = function () {
        var e = this;if (this._isTransitioning) throw new Error("Collapse is transitioning");if (t(this._element).hasClass(g.SHOW)) {
          var n = t.Event(_.HIDE);if (t(this._element).trigger(n), !n.isDefaultPrevented()) {
            var i = this._getDimension(),
                o = i === p.WIDTH ? "offsetWidth" : "offsetHeight";this._element.style[i] = this._element[o] + "px", r.reflow(this._element), t(this._element).addClass(g.COLLAPSING).removeClass(g.COLLAPSE).removeClass(g.SHOW), this._element.setAttribute("aria-expanded", !1), this._triggerArray.length && t(this._triggerArray).addClass(g.COLLAPSED).attr("aria-expanded", !1), this.setTransitioning(!0);var s = function s() {
              e.setTransitioning(!1), t(e._element).removeClass(g.COLLAPSING).addClass(g.COLLAPSE).trigger(_.HIDDEN);
            };return this._element.style[i] = "", r.supportsTransitionEnd() ? void t(this._element).one(r.TRANSITION_END, s).emulateTransitionEnd(u) : void s();
          }
        }
      }, l.prototype.setTransitioning = function (t) {
        this._isTransitioning = t;
      }, l.prototype.dispose = function () {
        t.removeData(this._element, a), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
      }, l.prototype._getConfig = function (n) {
        return n = t.extend({}, d, n), n.toggle = Boolean(n.toggle), r.typeCheckConfig(e, n, f), n;
      }, l.prototype._getDimension = function () {
        var e = t(this._element).hasClass(p.WIDTH);return e ? p.WIDTH : p.HEIGHT;
      }, l.prototype._getParent = function () {
        var e = this,
            n = t(this._config.parent)[0],
            i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';return t(n).find(i).each(function (t, n) {
          e._addAriaAndCollapsedClass(l._getTargetFromElement(n), [n]);
        }), n;
      }, l.prototype._addAriaAndCollapsedClass = function (e, n) {
        if (e) {
          var i = t(e).hasClass(g.SHOW);e.setAttribute("aria-expanded", i), n.length && t(n).toggleClass(g.COLLAPSED, !i).attr("aria-expanded", i);
        }
      }, l._getTargetFromElement = function (e) {
        var n = r.getSelectorFromElement(e);return n ? t(n)[0] : null;
      }, l._jQueryInterface = function (e) {
        return this.each(function () {
          var n = t(this),
              o = n.data(a),
              r = t.extend({}, d, n.data(), "object" === ("undefined" == typeof e ? "undefined" : i(e)) && e);if (!o && r.toggle && /show|hide/.test(e) && (r.toggle = !1), o || (o = new l(this, r), n.data(a, o)), "string" == typeof e) {
            if (void 0 === o[e]) throw new Error('No method named "' + e + '"');o[e]();
          }
        });
      }, o(l, null, [{ key: "VERSION", get: function get() {
          return s;
        } }, { key: "Default", get: function get() {
          return d;
        } }]), l;
    }();return t(document).on(_.CLICK_DATA_API, m.DATA_TOGGLE, function (e) {
      e.preventDefault();var n = E._getTargetFromElement(this),
          i = t(n).data(a),
          o = i ? "toggle" : t(this).data();E._jQueryInterface.call(t(n), o);
    }), t.fn[e] = E._jQueryInterface, t.fn[e].Constructor = E, t.fn[e].noConflict = function () {
      return t.fn[e] = c, E._jQueryInterface;
    }, E;
  }(jQuery), function (t) {
    var e = "dropdown",
        i = "4.0.0-alpha.6",
        s = "bs.dropdown",
        a = "." + s,
        l = ".data-api",
        h = t.fn[e],
        c = 27,
        u = 38,
        d = 40,
        f = 3,
        _ = { HIDE: "hide" + a, HIDDEN: "hidden" + a, SHOW: "show" + a, SHOWN: "shown" + a, CLICK: "click" + a, CLICK_DATA_API: "click" + a + l, FOCUSIN_DATA_API: "focusin" + a + l, KEYDOWN_DATA_API: "keydown" + a + l },
        g = { BACKDROP: "dropdown-backdrop", DISABLED: "disabled", SHOW: "show" },
        p = { BACKDROP: ".dropdown-backdrop", DATA_TOGGLE: '[data-toggle="dropdown"]', FORM_CHILD: ".dropdown form", ROLE_MENU: '[role="menu"]', ROLE_LISTBOX: '[role="listbox"]', NAVBAR_NAV: ".navbar-nav", VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a' },
        m = function () {
      function e(t) {
        n(this, e), this._element = t, this._addEventListeners();
      }return e.prototype.toggle = function () {
        if (this.disabled || t(this).hasClass(g.DISABLED)) return !1;var n = e._getParentFromElement(this),
            i = t(n).hasClass(g.SHOW);if (e._clearMenus(), i) return !1;if ("ontouchstart" in document.documentElement && !t(n).closest(p.NAVBAR_NAV).length) {
          var o = document.createElement("div");o.className = g.BACKDROP, t(o).insertBefore(this), t(o).on("click", e._clearMenus);
        }var r = { relatedTarget: this },
            s = t.Event(_.SHOW, r);return t(n).trigger(s), !s.isDefaultPrevented() && (this.focus(), this.setAttribute("aria-expanded", !0), t(n).toggleClass(g.SHOW), t(n).trigger(t.Event(_.SHOWN, r)), !1);
      }, e.prototype.dispose = function () {
        t.removeData(this._element, s), t(this._element).off(a), this._element = null;
      }, e.prototype._addEventListeners = function () {
        t(this._element).on(_.CLICK, this.toggle);
      }, e._jQueryInterface = function (n) {
        return this.each(function () {
          var i = t(this).data(s);if (i || (i = new e(this), t(this).data(s, i)), "string" == typeof n) {
            if (void 0 === i[n]) throw new Error('No method named "' + n + '"');i[n].call(this);
          }
        });
      }, e._clearMenus = function (n) {
        if (!n || n.which !== f) {
          var i = t(p.BACKDROP)[0];i && i.parentNode.removeChild(i);for (var o = t.makeArray(t(p.DATA_TOGGLE)), r = 0; r < o.length; r++) {
            var s = e._getParentFromElement(o[r]),
                a = { relatedTarget: o[r] };if (t(s).hasClass(g.SHOW) && !(n && ("click" === n.type && /input|textarea/i.test(n.target.tagName) || "focusin" === n.type) && t.contains(s, n.target))) {
              var l = t.Event(_.HIDE, a);t(s).trigger(l), l.isDefaultPrevented() || (o[r].setAttribute("aria-expanded", "false"), t(s).removeClass(g.SHOW).trigger(t.Event(_.HIDDEN, a)));
            }
          }
        }
      }, e._getParentFromElement = function (e) {
        var n = void 0,
            i = r.getSelectorFromElement(e);return i && (n = t(i)[0]), n || e.parentNode;
      }, e._dataApiKeydownHandler = function (n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName) && (n.preventDefault(), n.stopPropagation(), !this.disabled && !t(this).hasClass(g.DISABLED))) {
          var i = e._getParentFromElement(this),
              o = t(i).hasClass(g.SHOW);if (!o && n.which !== c || o && n.which === c) {
            if (n.which === c) {
              var r = t(i).find(p.DATA_TOGGLE)[0];t(r).trigger("focus");
            }return void t(this).trigger("click");
          }var s = t(i).find(p.VISIBLE_ITEMS).get();if (s.length) {
            var a = s.indexOf(n.target);n.which === u && a > 0 && a--, n.which === d && a < s.length - 1 && a++, a < 0 && (a = 0), s[a].focus();
          }
        }
      }, o(e, null, [{ key: "VERSION", get: function get() {
          return i;
        } }]), e;
    }();return t(document).on(_.KEYDOWN_DATA_API, p.DATA_TOGGLE, m._dataApiKeydownHandler).on(_.KEYDOWN_DATA_API, p.ROLE_MENU, m._dataApiKeydownHandler).on(_.KEYDOWN_DATA_API, p.ROLE_LISTBOX, m._dataApiKeydownHandler).on(_.CLICK_DATA_API + " " + _.FOCUSIN_DATA_API, m._clearMenus).on(_.CLICK_DATA_API, p.DATA_TOGGLE, m.prototype.toggle).on(_.CLICK_DATA_API, p.FORM_CHILD, function (t) {
      t.stopPropagation();
    }), t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function () {
      return t.fn[e] = h, m._jQueryInterface;
    }, m;
  }(jQuery), function (t) {
    var e = "modal",
        s = "4.0.0-alpha.6",
        a = "bs.modal",
        l = "." + a,
        h = ".data-api",
        c = t.fn[e],
        u = 300,
        d = 150,
        f = 27,
        _ = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
        g = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
        p = { HIDE: "hide" + l, HIDDEN: "hidden" + l, SHOW: "show" + l, SHOWN: "shown" + l, FOCUSIN: "focusin" + l, RESIZE: "resize" + l, CLICK_DISMISS: "click.dismiss" + l, KEYDOWN_DISMISS: "keydown.dismiss" + l, MOUSEUP_DISMISS: "mouseup.dismiss" + l, MOUSEDOWN_DISMISS: "mousedown.dismiss" + l, CLICK_DATA_API: "click" + l + h },
        m = { SCROLLBAR_MEASURER: "modal-scrollbar-measure", BACKDROP: "modal-backdrop", OPEN: "modal-open", FADE: "fade", SHOW: "show" },
        E = { DIALOG: ".modal-dialog", DATA_TOGGLE: '[data-toggle="modal"]', DATA_DISMISS: '[data-dismiss="modal"]', FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top" },
        v = function () {
      function h(e, i) {
        n(this, h), this._config = this._getConfig(i), this._element = e, this._dialog = t(e).find(E.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0;
      }return h.prototype.toggle = function (t) {
        return this._isShown ? this.hide() : this.show(t);
      }, h.prototype.show = function (e) {
        var n = this;if (this._isTransitioning) throw new Error("Modal is transitioning");r.supportsTransitionEnd() && t(this._element).hasClass(m.FADE) && (this._isTransitioning = !0);var i = t.Event(p.SHOW, { relatedTarget: e });t(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), t(document.body).addClass(m.OPEN), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(p.CLICK_DISMISS, E.DATA_DISMISS, function (t) {
          return n.hide(t);
        }), t(this._dialog).on(p.MOUSEDOWN_DISMISS, function () {
          t(n._element).one(p.MOUSEUP_DISMISS, function (e) {
            t(e.target).is(n._element) && (n._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return n._showElement(e);
        }));
      }, h.prototype.hide = function (e) {
        var n = this;if (e && e.preventDefault(), this._isTransitioning) throw new Error("Modal is transitioning");var i = r.supportsTransitionEnd() && t(this._element).hasClass(m.FADE);i && (this._isTransitioning = !0);var o = t.Event(p.HIDE);t(this._element).trigger(o), this._isShown && !o.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), t(document).off(p.FOCUSIN), t(this._element).removeClass(m.SHOW), t(this._element).off(p.CLICK_DISMISS), t(this._dialog).off(p.MOUSEDOWN_DISMISS), i ? t(this._element).one(r.TRANSITION_END, function (t) {
          return n._hideModal(t);
        }).emulateTransitionEnd(u) : this._hideModal());
      }, h.prototype.dispose = function () {
        t.removeData(this._element, a), t(window, document, this._element, this._backdrop).off(l), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._originalBodyPadding = null, this._scrollbarWidth = null;
      }, h.prototype._getConfig = function (n) {
        return n = t.extend({}, _, n), r.typeCheckConfig(e, n, g), n;
      }, h.prototype._showElement = function (e) {
        var n = this,
            i = r.supportsTransitionEnd() && t(this._element).hasClass(m.FADE);this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, i && r.reflow(this._element), t(this._element).addClass(m.SHOW), this._config.focus && this._enforceFocus();var o = t.Event(p.SHOWN, { relatedTarget: e }),
            s = function s() {
          n._config.focus && n._element.focus(), n._isTransitioning = !1, t(n._element).trigger(o);
        };i ? t(this._dialog).one(r.TRANSITION_END, s).emulateTransitionEnd(u) : s();
      }, h.prototype._enforceFocus = function () {
        var e = this;t(document).off(p.FOCUSIN).on(p.FOCUSIN, function (n) {
          document === n.target || e._element === n.target || t(e._element).has(n.target).length || e._element.focus();
        });
      }, h.prototype._setEscapeEvent = function () {
        var e = this;this._isShown && this._config.keyboard ? t(this._element).on(p.KEYDOWN_DISMISS, function (t) {
          t.which === f && e.hide();
        }) : this._isShown || t(this._element).off(p.KEYDOWN_DISMISS);
      }, h.prototype._setResizeEvent = function () {
        var e = this;this._isShown ? t(window).on(p.RESIZE, function (t) {
          return e._handleUpdate(t);
        }) : t(window).off(p.RESIZE);
      }, h.prototype._hideModal = function () {
        var e = this;this._element.style.display = "none", this._element.setAttribute("aria-hidden", "true"), this._isTransitioning = !1, this._showBackdrop(function () {
          t(document.body).removeClass(m.OPEN), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(p.HIDDEN);
        });
      }, h.prototype._removeBackdrop = function () {
        this._backdrop && (t(this._backdrop).remove(), this._backdrop = null);
      }, h.prototype._showBackdrop = function (e) {
        var n = this,
            i = t(this._element).hasClass(m.FADE) ? m.FADE : "";if (this._isShown && this._config.backdrop) {
          var o = r.supportsTransitionEnd() && i;if (this._backdrop = document.createElement("div"), this._backdrop.className = m.BACKDROP, i && t(this._backdrop).addClass(i), t(this._backdrop).appendTo(document.body), t(this._element).on(p.CLICK_DISMISS, function (t) {
            return n._ignoreBackdropClick ? void (n._ignoreBackdropClick = !1) : void (t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide()));
          }), o && r.reflow(this._backdrop), t(this._backdrop).addClass(m.SHOW), !e) return;if (!o) return void e();t(this._backdrop).one(r.TRANSITION_END, e).emulateTransitionEnd(d);
        } else if (!this._isShown && this._backdrop) {
          t(this._backdrop).removeClass(m.SHOW);var s = function s() {
            n._removeBackdrop(), e && e();
          };r.supportsTransitionEnd() && t(this._element).hasClass(m.FADE) ? t(this._backdrop).one(r.TRANSITION_END, s).emulateTransitionEnd(d) : s();
        } else e && e();
      }, h.prototype._handleUpdate = function () {
        this._adjustDialog();
      }, h.prototype._adjustDialog = function () {
        var t = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
      }, h.prototype._resetAdjustments = function () {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }, h.prototype._checkScrollbar = function () {
        this._isBodyOverflowing = document.body.clientWidth < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
      }, h.prototype._setScrollbar = function () {
        var e = parseInt(t(E.FIXED_CONTENT).css("padding-right") || 0, 10);this._originalBodyPadding = document.body.style.paddingRight || "", this._isBodyOverflowing && (document.body.style.paddingRight = e + this._scrollbarWidth + "px");
      }, h.prototype._resetScrollbar = function () {
        document.body.style.paddingRight = this._originalBodyPadding;
      }, h.prototype._getScrollbarWidth = function () {
        var t = document.createElement("div");t.className = m.SCROLLBAR_MEASURER, document.body.appendChild(t);var e = t.offsetWidth - t.clientWidth;return document.body.removeChild(t), e;
      }, h._jQueryInterface = function (e, n) {
        return this.each(function () {
          var o = t(this).data(a),
              r = t.extend({}, h.Default, t(this).data(), "object" === ("undefined" == typeof e ? "undefined" : i(e)) && e);if (o || (o = new h(this, r), t(this).data(a, o)), "string" == typeof e) {
            if (void 0 === o[e]) throw new Error('No method named "' + e + '"');o[e](n);
          } else r.show && o.show(n);
        });
      }, o(h, null, [{ key: "VERSION", get: function get() {
          return s;
        } }, { key: "Default", get: function get() {
          return _;
        } }]), h;
    }();return t(document).on(p.CLICK_DATA_API, E.DATA_TOGGLE, function (e) {
      var n = this,
          i = void 0,
          o = r.getSelectorFromElement(this);o && (i = t(o)[0]);var s = t(i).data(a) ? "toggle" : t.extend({}, t(i).data(), t(this).data());"A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();var l = t(i).one(p.SHOW, function (e) {
        e.isDefaultPrevented() || l.one(p.HIDDEN, function () {
          t(n).is(":visible") && n.focus();
        });
      });v._jQueryInterface.call(t(i), s, this);
    }), t.fn[e] = v._jQueryInterface, t.fn[e].Constructor = v, t.fn[e].noConflict = function () {
      return t.fn[e] = c, v._jQueryInterface;
    }, v;
  }(jQuery), function (t) {
    var e = "scrollspy",
        s = "4.0.0-alpha.6",
        a = "bs.scrollspy",
        l = "." + a,
        h = ".data-api",
        c = t.fn[e],
        u = { offset: 10, method: "auto", target: "" },
        d = { offset: "number", method: "string", target: "(string|element)" },
        f = { ACTIVATE: "activate" + l, SCROLL: "scroll" + l, LOAD_DATA_API: "load" + l + h },
        _ = { DROPDOWN_ITEM: "dropdown-item", DROPDOWN_MENU: "dropdown-menu", NAV_LINK: "nav-link", NAV: "nav", ACTIVE: "active" },
        g = { DATA_SPY: '[data-spy="scroll"]', ACTIVE: ".active", LIST_ITEM: ".list-item", LI: "li", LI_DROPDOWN: "li.dropdown", NAV_LINKS: ".nav-link", DROPDOWN: ".dropdown", DROPDOWN_ITEMS: ".dropdown-item", DROPDOWN_TOGGLE: ".dropdown-toggle" },
        p = { OFFSET: "offset", POSITION: "position" },
        m = function () {
      function h(e, i) {
        var o = this;n(this, h), this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(i), this._selector = this._config.target + " " + g.NAV_LINKS + "," + (this._config.target + " " + g.DROPDOWN_ITEMS), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(f.SCROLL, function (t) {
          return o._process(t);
        }), this.refresh(), this._process();
      }return h.prototype.refresh = function () {
        var e = this,
            n = this._scrollElement !== this._scrollElement.window ? p.POSITION : p.OFFSET,
            i = "auto" === this._config.method ? n : this._config.method,
            o = i === p.POSITION ? this._getScrollTop() : 0;this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight();var s = t.makeArray(t(this._selector));s.map(function (e) {
          var n = void 0,
              s = r.getSelectorFromElement(e);return s && (n = t(s)[0]), n && (n.offsetWidth || n.offsetHeight) ? [t(n)[i]().top + o, s] : null;
        }).filter(function (t) {
          return t;
        }).sort(function (t, e) {
          return t[0] - e[0];
        }).forEach(function (t) {
          e._offsets.push(t[0]), e._targets.push(t[1]);
        });
      }, h.prototype.dispose = function () {
        t.removeData(this._element, a), t(this._scrollElement).off(l), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
      }, h.prototype._getConfig = function (n) {
        if (n = t.extend({}, u, n), "string" != typeof n.target) {
          var i = t(n.target).attr("id");i || (i = r.getUID(e), t(n.target).attr("id", i)), n.target = "#" + i;
        }return r.typeCheckConfig(e, n, d), n;
      }, h.prototype._getScrollTop = function () {
        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
      }, h.prototype._getScrollHeight = function () {
        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      }, h.prototype._getOffsetHeight = function () {
        return this._scrollElement === window ? window.innerHeight : this._scrollElement.offsetHeight;
      }, h.prototype._process = function () {
        var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            n = this._config.offset + e - this._getOffsetHeight();if (this._scrollHeight !== e && this.refresh(), t >= n) {
          var i = this._targets[this._targets.length - 1];return void (this._activeTarget !== i && this._activate(i));
        }if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();for (var o = this._offsets.length; o--;) {
          var r = this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]);r && this._activate(this._targets[o]);
        }
      }, h.prototype._activate = function (e) {
        this._activeTarget = e, this._clear();var n = this._selector.split(",");n = n.map(function (t) {
          return t + '[data-target="' + e + '"],' + (t + '[href="' + e + '"]');
        });var i = t(n.join(","));i.hasClass(_.DROPDOWN_ITEM) ? (i.closest(g.DROPDOWN).find(g.DROPDOWN_TOGGLE).addClass(_.ACTIVE), i.addClass(_.ACTIVE)) : i.parents(g.LI).find("> " + g.NAV_LINKS).addClass(_.ACTIVE), t(this._scrollElement).trigger(f.ACTIVATE, { relatedTarget: e });
      }, h.prototype._clear = function () {
        t(this._selector).filter(g.ACTIVE).removeClass(_.ACTIVE);
      }, h._jQueryInterface = function (e) {
        return this.each(function () {
          var n = t(this).data(a),
              o = "object" === ("undefined" == typeof e ? "undefined" : i(e)) && e;
          if (n || (n = new h(this, o), t(this).data(a, n)), "string" == typeof e) {
            if (void 0 === n[e]) throw new Error('No method named "' + e + '"');n[e]();
          }
        });
      }, o(h, null, [{ key: "VERSION", get: function get() {
          return s;
        } }, { key: "Default", get: function get() {
          return u;
        } }]), h;
    }();return t(window).on(f.LOAD_DATA_API, function () {
      for (var e = t.makeArray(t(g.DATA_SPY)), n = e.length; n--;) {
        var i = t(e[n]);m._jQueryInterface.call(i, i.data());
      }
    }), t.fn[e] = m._jQueryInterface, t.fn[e].Constructor = m, t.fn[e].noConflict = function () {
      return t.fn[e] = c, m._jQueryInterface;
    }, m;
  }(jQuery), function (t) {
    var e = "tab",
        i = "4.0.0-alpha.6",
        s = "bs.tab",
        a = "." + s,
        l = ".data-api",
        h = t.fn[e],
        c = 150,
        u = { HIDE: "hide" + a, HIDDEN: "hidden" + a, SHOW: "show" + a, SHOWN: "shown" + a, CLICK_DATA_API: "click" + a + l },
        d = { DROPDOWN_MENU: "dropdown-menu", ACTIVE: "active", DISABLED: "disabled", FADE: "fade", SHOW: "show" },
        f = { A: "a", LI: "li", DROPDOWN: ".dropdown", LIST: "ul:not(.dropdown-menu), ol:not(.dropdown-menu), nav:not(.dropdown-menu)", FADE_CHILD: "> .nav-item .fade, > .fade", ACTIVE: ".active", ACTIVE_CHILD: "> .nav-item > .active, > .active", DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]', DROPDOWN_TOGGLE: ".dropdown-toggle", DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active" },
        _ = function () {
      function e(t) {
        n(this, e), this._element = t;
      }return e.prototype.show = function () {
        var e = this;if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(d.ACTIVE) || t(this._element).hasClass(d.DISABLED))) {
          var n = void 0,
              i = void 0,
              o = t(this._element).closest(f.LIST)[0],
              s = r.getSelectorFromElement(this._element);o && (i = t.makeArray(t(o).find(f.ACTIVE)), i = i[i.length - 1]);var a = t.Event(u.HIDE, { relatedTarget: this._element }),
              l = t.Event(u.SHOW, { relatedTarget: i });if (i && t(i).trigger(a), t(this._element).trigger(l), !l.isDefaultPrevented() && !a.isDefaultPrevented()) {
            s && (n = t(s)[0]), this._activate(this._element, o);var h = function h() {
              var n = t.Event(u.HIDDEN, { relatedTarget: e._element }),
                  o = t.Event(u.SHOWN, { relatedTarget: i });t(i).trigger(n), t(e._element).trigger(o);
            };n ? this._activate(n, n.parentNode, h) : h();
          }
        }
      }, e.prototype.dispose = function () {
        t.removeClass(this._element, s), this._element = null;
      }, e.prototype._activate = function (e, n, i) {
        var o = this,
            s = t(n).find(f.ACTIVE_CHILD)[0],
            a = i && r.supportsTransitionEnd() && (s && t(s).hasClass(d.FADE) || Boolean(t(n).find(f.FADE_CHILD)[0])),
            l = function l() {
          return o._transitionComplete(e, s, a, i);
        };s && a ? t(s).one(r.TRANSITION_END, l).emulateTransitionEnd(c) : l(), s && t(s).removeClass(d.SHOW);
      }, e.prototype._transitionComplete = function (e, n, i, o) {
        if (n) {
          t(n).removeClass(d.ACTIVE);var s = t(n.parentNode).find(f.DROPDOWN_ACTIVE_CHILD)[0];s && t(s).removeClass(d.ACTIVE), n.setAttribute("aria-expanded", !1);
        }if (t(e).addClass(d.ACTIVE), e.setAttribute("aria-expanded", !0), i ? (r.reflow(e), t(e).addClass(d.SHOW)) : t(e).removeClass(d.FADE), e.parentNode && t(e.parentNode).hasClass(d.DROPDOWN_MENU)) {
          var a = t(e).closest(f.DROPDOWN)[0];a && t(a).find(f.DROPDOWN_TOGGLE).addClass(d.ACTIVE), e.setAttribute("aria-expanded", !0);
        }o && o();
      }, e._jQueryInterface = function (n) {
        return this.each(function () {
          var i = t(this),
              o = i.data(s);if (o || (o = new e(this), i.data(s, o)), "string" == typeof n) {
            if (void 0 === o[n]) throw new Error('No method named "' + n + '"');o[n]();
          }
        });
      }, o(e, null, [{ key: "VERSION", get: function get() {
          return i;
        } }]), e;
    }();return t(document).on(u.CLICK_DATA_API, f.DATA_TOGGLE, function (e) {
      e.preventDefault(), _._jQueryInterface.call(t(this), "show");
    }), t.fn[e] = _._jQueryInterface, t.fn[e].Constructor = _, t.fn[e].noConflict = function () {
      return t.fn[e] = h, _._jQueryInterface;
    }, _;
  }(jQuery), function (t) {
    if ("undefined" == typeof Tether) throw new Error("Bootstrap tooltips require Tether (http://tether.io/)");var e = "tooltip",
        s = "4.0.0-alpha.6",
        a = "bs.tooltip",
        l = "." + a,
        h = t.fn[e],
        c = 150,
        u = "bs-tether",
        d = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: "0 0", constraints: [], container: !1 },
        f = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "string", constraints: "array", container: "(string|element|boolean)" },
        _ = { TOP: "bottom center", RIGHT: "middle left", BOTTOM: "top center", LEFT: "middle right" },
        g = { SHOW: "show", OUT: "out" },
        p = { HIDE: "hide" + l, HIDDEN: "hidden" + l, SHOW: "show" + l, SHOWN: "shown" + l, INSERTED: "inserted" + l, CLICK: "click" + l, FOCUSIN: "focusin" + l, FOCUSOUT: "focusout" + l, MOUSEENTER: "mouseenter" + l, MOUSELEAVE: "mouseleave" + l },
        m = { FADE: "fade", SHOW: "show" },
        E = { TOOLTIP: ".tooltip", TOOLTIP_INNER: ".tooltip-inner" },
        v = { element: !1, enabled: !1 },
        T = { HOVER: "hover", FOCUS: "focus", CLICK: "click", MANUAL: "manual" },
        I = function () {
      function h(t, e) {
        n(this, h), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._isTransitioning = !1, this._tether = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
      }return h.prototype.enable = function () {
        this._isEnabled = !0;
      }, h.prototype.disable = function () {
        this._isEnabled = !1;
      }, h.prototype.toggleEnabled = function () {
        this._isEnabled = !this._isEnabled;
      }, h.prototype.toggle = function (e) {
        if (e) {
          var n = this.constructor.DATA_KEY,
              i = t(e.currentTarget).data(n);i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(n, i)), i._activeTrigger.click = !i._activeTrigger.click, i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i);
        } else {
          if (t(this.getTipElement()).hasClass(m.SHOW)) return void this._leave(null, this);this._enter(null, this);
        }
      }, h.prototype.dispose = function () {
        clearTimeout(this._timeout), this.cleanupTether(), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._tether = null, this.element = null, this.config = null, this.tip = null;
      }, h.prototype.show = function () {
        var e = this;if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");var n = t.Event(this.constructor.Event.SHOW);if (this.isWithContent() && this._isEnabled) {
          if (this._isTransitioning) throw new Error("Tooltip is transitioning");t(this.element).trigger(n);var i = t.contains(this.element.ownerDocument.documentElement, this.element);if (n.isDefaultPrevented() || !i) return;var o = this.getTipElement(),
              s = r.getUID(this.constructor.NAME);o.setAttribute("id", s), this.element.setAttribute("aria-describedby", s), this.setContent(), this.config.animation && t(o).addClass(m.FADE);var a = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
              l = this._getAttachment(a),
              c = this.config.container === !1 ? document.body : t(this.config.container);t(o).data(this.constructor.DATA_KEY, this).appendTo(c), t(this.element).trigger(this.constructor.Event.INSERTED), this._tether = new Tether({ attachment: l, element: o, target: this.element, classes: v, classPrefix: u, offset: this.config.offset, constraints: this.config.constraints, addTargetClasses: !1 }), r.reflow(o), this._tether.position(), t(o).addClass(m.SHOW);var d = function d() {
            var n = e._hoverState;e._hoverState = null, e._isTransitioning = !1, t(e.element).trigger(e.constructor.Event.SHOWN), n === g.OUT && e._leave(null, e);
          };if (r.supportsTransitionEnd() && t(this.tip).hasClass(m.FADE)) return this._isTransitioning = !0, void t(this.tip).one(r.TRANSITION_END, d).emulateTransitionEnd(h._TRANSITION_DURATION);d();
        }
      }, h.prototype.hide = function (e) {
        var n = this,
            i = this.getTipElement(),
            o = t.Event(this.constructor.Event.HIDE);if (this._isTransitioning) throw new Error("Tooltip is transitioning");var s = function s() {
          n._hoverState !== g.SHOW && i.parentNode && i.parentNode.removeChild(i), n.element.removeAttribute("aria-describedby"), t(n.element).trigger(n.constructor.Event.HIDDEN), n._isTransitioning = !1, n.cleanupTether(), e && e();
        };t(this.element).trigger(o), o.isDefaultPrevented() || (t(i).removeClass(m.SHOW), this._activeTrigger[T.CLICK] = !1, this._activeTrigger[T.FOCUS] = !1, this._activeTrigger[T.HOVER] = !1, r.supportsTransitionEnd() && t(this.tip).hasClass(m.FADE) ? (this._isTransitioning = !0, t(i).one(r.TRANSITION_END, s).emulateTransitionEnd(c)) : s(), this._hoverState = "");
      }, h.prototype.isWithContent = function () {
        return Boolean(this.getTitle());
      }, h.prototype.getTipElement = function () {
        return this.tip = this.tip || t(this.config.template)[0];
      }, h.prototype.setContent = function () {
        var e = t(this.getTipElement());this.setElementContent(e.find(E.TOOLTIP_INNER), this.getTitle()), e.removeClass(m.FADE + " " + m.SHOW), this.cleanupTether();
      }, h.prototype.setElementContent = function (e, n) {
        var o = this.config.html;"object" === ("undefined" == typeof n ? "undefined" : i(n)) && (n.nodeType || n.jquery) ? o ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) : e[o ? "html" : "text"](n);
      }, h.prototype.getTitle = function () {
        var t = this.element.getAttribute("data-original-title");return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
      }, h.prototype.cleanupTether = function () {
        this._tether && this._tether.destroy();
      }, h.prototype._getAttachment = function (t) {
        return _[t.toUpperCase()];
      }, h.prototype._setListeners = function () {
        var e = this,
            n = this.config.trigger.split(" ");n.forEach(function (n) {
          if ("click" === n) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
            return e.toggle(t);
          });else if (n !== T.MANUAL) {
            var i = n === T.HOVER ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                o = n === T.HOVER ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;t(e.element).on(i, e.config.selector, function (t) {
              return e._enter(t);
            }).on(o, e.config.selector, function (t) {
              return e._leave(t);
            });
          }t(e.element).closest(".modal").on("hide.bs.modal", function () {
            return e.hide();
          });
        }), this.config.selector ? this.config = t.extend({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle();
      }, h.prototype._fixTitle = function () {
        var t = i(this.element.getAttribute("data-original-title"));(this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
      }, h.prototype._enter = function (e, n) {
        var i = this.constructor.DATA_KEY;return n = n || t(e.currentTarget).data(i), n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusin" === e.type ? T.FOCUS : T.HOVER] = !0), t(n.getTipElement()).hasClass(m.SHOW) || n._hoverState === g.SHOW ? void (n._hoverState = g.SHOW) : (clearTimeout(n._timeout), n._hoverState = g.SHOW, n.config.delay && n.config.delay.show ? void (n._timeout = setTimeout(function () {
          n._hoverState === g.SHOW && n.show();
        }, n.config.delay.show)) : void n.show());
      }, h.prototype._leave = function (e, n) {
        var i = this.constructor.DATA_KEY;if (n = n || t(e.currentTarget).data(i), n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, n)), e && (n._activeTrigger["focusout" === e.type ? T.FOCUS : T.HOVER] = !1), !n._isWithActiveTrigger()) return clearTimeout(n._timeout), n._hoverState = g.OUT, n.config.delay && n.config.delay.hide ? void (n._timeout = setTimeout(function () {
          n._hoverState === g.OUT && n.hide();
        }, n.config.delay.hide)) : void n.hide();
      }, h.prototype._isWithActiveTrigger = function () {
        for (var t in this._activeTrigger) {
          if (this._activeTrigger[t]) return !0;
        }return !1;
      }, h.prototype._getConfig = function (n) {
        return n = t.extend({}, this.constructor.Default, t(this.element).data(), n), n.delay && "number" == typeof n.delay && (n.delay = { show: n.delay, hide: n.delay }), r.typeCheckConfig(e, n, this.constructor.DefaultType), n;
      }, h.prototype._getDelegateConfig = function () {
        var t = {};if (this.config) for (var e in this.config) {
          this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
        }return t;
      }, h._jQueryInterface = function (e) {
        return this.each(function () {
          var n = t(this).data(a),
              o = "object" === ("undefined" == typeof e ? "undefined" : i(e)) && e;if ((n || !/dispose|hide/.test(e)) && (n || (n = new h(this, o), t(this).data(a, n)), "string" == typeof e)) {
            if (void 0 === n[e]) throw new Error('No method named "' + e + '"');n[e]();
          }
        });
      }, o(h, null, [{ key: "VERSION", get: function get() {
          return s;
        } }, { key: "Default", get: function get() {
          return d;
        } }, { key: "NAME", get: function get() {
          return e;
        } }, { key: "DATA_KEY", get: function get() {
          return a;
        } }, { key: "Event", get: function get() {
          return p;
        } }, { key: "EVENT_KEY", get: function get() {
          return l;
        } }, { key: "DefaultType", get: function get() {
          return f;
        } }]), h;
    }();return t.fn[e] = I._jQueryInterface, t.fn[e].Constructor = I, t.fn[e].noConflict = function () {
      return t.fn[e] = h, I._jQueryInterface;
    }, I;
  }(jQuery));(function (r) {
    var a = "popover",
        l = "4.0.0-alpha.6",
        h = "bs.popover",
        c = "." + h,
        u = r.fn[a],
        d = r.extend({}, s.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }),
        f = r.extend({}, s.DefaultType, { content: "(string|element|function)" }),
        _ = { FADE: "fade", SHOW: "show" },
        g = { TITLE: ".popover-title", CONTENT: ".popover-content" },
        p = { HIDE: "hide" + c, HIDDEN: "hidden" + c, SHOW: "show" + c, SHOWN: "shown" + c, INSERTED: "inserted" + c, CLICK: "click" + c, FOCUSIN: "focusin" + c, FOCUSOUT: "focusout" + c, MOUSEENTER: "mouseenter" + c, MOUSELEAVE: "mouseleave" + c },
        m = function (s) {
      function u() {
        return n(this, u), t(this, s.apply(this, arguments));
      }return e(u, s), u.prototype.isWithContent = function () {
        return this.getTitle() || this._getContent();
      }, u.prototype.getTipElement = function () {
        return this.tip = this.tip || r(this.config.template)[0];
      }, u.prototype.setContent = function () {
        var t = r(this.getTipElement());this.setElementContent(t.find(g.TITLE), this.getTitle()), this.setElementContent(t.find(g.CONTENT), this._getContent()), t.removeClass(_.FADE + " " + _.SHOW), this.cleanupTether();
      }, u.prototype._getContent = function () {
        return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content);
      }, u._jQueryInterface = function (t) {
        return this.each(function () {
          var e = r(this).data(h),
              n = "object" === ("undefined" == typeof t ? "undefined" : i(t)) ? t : null;if ((e || !/destroy|hide/.test(t)) && (e || (e = new u(this, n), r(this).data(h, e)), "string" == typeof t)) {
            if (void 0 === e[t]) throw new Error('No method named "' + t + '"');e[t]();
          }
        });
      }, o(u, null, [{ key: "VERSION", get: function get() {
          return l;
        } }, { key: "Default", get: function get() {
          return d;
        } }, { key: "NAME", get: function get() {
          return a;
        } }, { key: "DATA_KEY", get: function get() {
          return h;
        } }, { key: "Event", get: function get() {
          return p;
        } }, { key: "EVENT_KEY", get: function get() {
          return c;
        } }, { key: "DefaultType", get: function get() {
          return f;
        } }]), u;
    }(s);return r.fn[a] = m._jQueryInterface, r.fn[a].Constructor = m, r.fn[a].noConflict = function () {
      return r.fn[a] = u, m._jQueryInterface;
    }, m;
  })(jQuery);
}();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(15)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! tether 1.4.0 */

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
    module.exports = factory(require, exports, module);
  } else {
    root.Tether = factory();
  }
})(undefined, function (require, exports, module) {

  'use strict';

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  var TetherBase = undefined;
  if (typeof TetherBase === 'undefined') {
    TetherBase = { modules: [] };
  }

  var zeroElement = null;

  // Same as native getBoundingClientRect, except it takes into account parent <frame> offsets
  // if the element lies within a nested document (<frame> or <iframe>-like).
  function getActualBoundingClientRect(node) {
    var boundingRect = node.getBoundingClientRect();

    // The original object returned by getBoundingClientRect is immutable, so we clone it
    // We can't use extend because the properties are not considered part of the object by hasOwnProperty in IE9
    var rect = {};
    for (var k in boundingRect) {
      rect[k] = boundingRect[k];
    }

    if (node.ownerDocument !== document) {
      var _frameElement = node.ownerDocument.defaultView.frameElement;
      if (_frameElement) {
        var frameRect = getActualBoundingClientRect(_frameElement);
        rect.top += frameRect.top;
        rect.bottom += frameRect.top;
        rect.left += frameRect.left;
        rect.right += frameRect.left;
      }
    }

    return rect;
  }

  function getScrollParents(el) {
    // In firefox if the el is inside an iframe with display: none; window.getComputedStyle() will return null;
    // https://bugzilla.mozilla.org/show_bug.cgi?id=548397
    var computedStyle = getComputedStyle(el) || {};
    var position = computedStyle.position;
    var parents = [];

    if (position === 'fixed') {
      return [el];
    }

    var parent = el;
    while ((parent = parent.parentNode) && parent && parent.nodeType === 1) {
      var style = undefined;
      try {
        style = getComputedStyle(parent);
      } catch (err) {}

      if (typeof style === 'undefined' || style === null) {
        parents.push(parent);
        return parents;
      }

      var _style = style;
      var overflow = _style.overflow;
      var overflowX = _style.overflowX;
      var overflowY = _style.overflowY;

      if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
        if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
          parents.push(parent);
        }
      }
    }

    parents.push(el.ownerDocument.body);

    // If the node is within a frame, account for the parent window scroll
    if (el.ownerDocument !== document) {
      parents.push(el.ownerDocument.defaultView);
    }

    return parents;
  }

  var uniqueId = function () {
    var id = 0;
    return function () {
      return ++id;
    };
  }();

  var zeroPosCache = {};
  var getOrigin = function getOrigin() {
    // getBoundingClientRect is unfortunately too accurate.  It introduces a pixel or two of
    // jitter as the user scrolls that messes with our ability to detect if two positions
    // are equivilant or not.  We place an element at the top left of the page that will
    // get the same jitter, so we can cancel the two out.
    var node = zeroElement;
    if (!node || !document.body.contains(node)) {
      node = document.createElement('div');
      node.setAttribute('data-tether-id', uniqueId());
      extend(node.style, {
        top: 0,
        left: 0,
        position: 'absolute'
      });

      document.body.appendChild(node);

      zeroElement = node;
    }

    var id = node.getAttribute('data-tether-id');
    if (typeof zeroPosCache[id] === 'undefined') {
      zeroPosCache[id] = getActualBoundingClientRect(node);

      // Clear the cache when this position call is done
      defer(function () {
        delete zeroPosCache[id];
      });
    }

    return zeroPosCache[id];
  };

  function removeUtilElements() {
    if (zeroElement) {
      document.body.removeChild(zeroElement);
    }
    zeroElement = null;
  };

  function getBounds(el) {
    var doc = undefined;
    if (el === document) {
      doc = document;
      el = document.documentElement;
    } else {
      doc = el.ownerDocument;
    }

    var docEl = doc.documentElement;

    var box = getActualBoundingClientRect(el);

    var origin = getOrigin();

    box.top -= origin.top;
    box.left -= origin.left;

    if (typeof box.width === 'undefined') {
      box.width = document.body.scrollWidth - box.left - box.right;
    }
    if (typeof box.height === 'undefined') {
      box.height = document.body.scrollHeight - box.top - box.bottom;
    }

    box.top = box.top - docEl.clientTop;
    box.left = box.left - docEl.clientLeft;
    box.right = doc.body.clientWidth - box.width - box.left;
    box.bottom = doc.body.clientHeight - box.height - box.top;

    return box;
  }

  function getOffsetParent(el) {
    return el.offsetParent || document.documentElement;
  }

  var _scrollBarSize = null;
  function getScrollBarSize() {
    if (_scrollBarSize) {
      return _scrollBarSize;
    }
    var inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';

    var outer = document.createElement('div');
    extend(outer.style, {
      position: 'absolute',
      top: 0,
      left: 0,
      pointerEvents: 'none',
      visibility: 'hidden',
      width: '200px',
      height: '150px',
      overflow: 'hidden'
    });

    outer.appendChild(inner);

    document.body.appendChild(outer);

    var widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var widthScroll = inner.offsetWidth;

    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }

    document.body.removeChild(outer);

    var width = widthContained - widthScroll;

    _scrollBarSize = { width: width, height: width };
    return _scrollBarSize;
  }

  function extend() {
    var out = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var args = [];

    Array.prototype.push.apply(args, arguments);

    args.slice(1).forEach(function (obj) {
      if (obj) {
        for (var key in obj) {
          if ({}.hasOwnProperty.call(obj, key)) {
            out[key] = obj[key];
          }
        }
      }
    });

    return out;
  }

  function removeClass(el, name) {
    if (typeof el.classList !== 'undefined') {
      name.split(' ').forEach(function (cls) {
        if (cls.trim()) {
          el.classList.remove(cls);
        }
      });
    } else {
      var regex = new RegExp('(^| )' + name.split(' ').join('|') + '( |$)', 'gi');
      var className = getClassName(el).replace(regex, ' ');
      setClassName(el, className);
    }
  }

  function addClass(el, name) {
    if (typeof el.classList !== 'undefined') {
      name.split(' ').forEach(function (cls) {
        if (cls.trim()) {
          el.classList.add(cls);
        }
      });
    } else {
      removeClass(el, name);
      var cls = getClassName(el) + (' ' + name);
      setClassName(el, cls);
    }
  }

  function hasClass(el, name) {
    if (typeof el.classList !== 'undefined') {
      return el.classList.contains(name);
    }
    var className = getClassName(el);
    return new RegExp('(^| )' + name + '( |$)', 'gi').test(className);
  }

  function getClassName(el) {
    // Can't use just SVGAnimatedString here since nodes within a Frame in IE have
    // completely separately SVGAnimatedString base classes
    if (el.className instanceof el.ownerDocument.defaultView.SVGAnimatedString) {
      return el.className.baseVal;
    }
    return el.className;
  }

  function setClassName(el, className) {
    el.setAttribute('class', className);
  }

  function updateClasses(el, add, all) {
    // Of the set of 'all' classes, we need the 'add' classes, and only the
    // 'add' classes to be set.
    all.forEach(function (cls) {
      if (add.indexOf(cls) === -1 && hasClass(el, cls)) {
        removeClass(el, cls);
      }
    });

    add.forEach(function (cls) {
      if (!hasClass(el, cls)) {
        addClass(el, cls);
      }
    });
  }

  var deferred = [];

  var defer = function defer(fn) {
    deferred.push(fn);
  };

  var flush = function flush() {
    var fn = undefined;
    while (fn = deferred.pop()) {
      fn();
    }
  };

  var Evented = function () {
    function Evented() {
      _classCallCheck(this, Evented);
    }

    _createClass(Evented, [{
      key: 'on',
      value: function on(event, handler, ctx) {
        var once = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

        if (typeof this.bindings === 'undefined') {
          this.bindings = {};
        }
        if (typeof this.bindings[event] === 'undefined') {
          this.bindings[event] = [];
        }
        this.bindings[event].push({ handler: handler, ctx: ctx, once: once });
      }
    }, {
      key: 'once',
      value: function once(event, handler, ctx) {
        this.on(event, handler, ctx, true);
      }
    }, {
      key: 'off',
      value: function off(event, handler) {
        if (typeof this.bindings === 'undefined' || typeof this.bindings[event] === 'undefined') {
          return;
        }

        if (typeof handler === 'undefined') {
          delete this.bindings[event];
        } else {
          var i = 0;
          while (i < this.bindings[event].length) {
            if (this.bindings[event][i].handler === handler) {
              this.bindings[event].splice(i, 1);
            } else {
              ++i;
            }
          }
        }
      }
    }, {
      key: 'trigger',
      value: function trigger(event) {
        if (typeof this.bindings !== 'undefined' && this.bindings[event]) {
          var i = 0;

          for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          while (i < this.bindings[event].length) {
            var _bindings$event$i = this.bindings[event][i];
            var handler = _bindings$event$i.handler;
            var ctx = _bindings$event$i.ctx;
            var once = _bindings$event$i.once;

            var context = ctx;
            if (typeof context === 'undefined') {
              context = this;
            }

            handler.apply(context, args);

            if (once) {
              this.bindings[event].splice(i, 1);
            } else {
              ++i;
            }
          }
        }
      }
    }]);

    return Evented;
  }();

  TetherBase.Utils = {
    getActualBoundingClientRect: getActualBoundingClientRect,
    getScrollParents: getScrollParents,
    getBounds: getBounds,
    getOffsetParent: getOffsetParent,
    extend: extend,
    addClass: addClass,
    removeClass: removeClass,
    hasClass: hasClass,
    updateClasses: updateClasses,
    defer: defer,
    flush: flush,
    uniqueId: uniqueId,
    Evented: Evented,
    getScrollBarSize: getScrollBarSize,
    removeUtilElements: removeUtilElements
  };
  /* globals TetherBase, performance */

  'use strict';

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;_e = err;
      } finally {
        try {
          if (!_n && _i['return']) _i['return']();
        } finally {
          if (_d) throw _e;
        }
      }return _arr;
    }return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError('Invalid attempt to destructure non-iterable instance');
      }
    };
  }();

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ('value' in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  var _get = function get(_x6, _x7, _x8) {
    var _again = true;_function: while (_again) {
      var object = _x6,
          property = _x7,
          receiver = _x8;_again = false;if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);if (parent === null) {
          return undefined;
        } else {
          _x6 = parent;_x7 = property;_x8 = receiver;_again = true;desc = parent = undefined;continue _function;
        }
      } else if ('value' in desc) {
        return desc.value;
      } else {
        var getter = desc.get;if (getter === undefined) {
          return undefined;
        }return getter.call(receiver);
      }
    }
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError('Super expression must either be null or a function, not ' + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  if (typeof TetherBase === 'undefined') {
    throw new Error('You must include the utils.js file before tether.js');
  }

  var _TetherBase$Utils = TetherBase.Utils;
  var getScrollParents = _TetherBase$Utils.getScrollParents;
  var getBounds = _TetherBase$Utils.getBounds;
  var getOffsetParent = _TetherBase$Utils.getOffsetParent;
  var extend = _TetherBase$Utils.extend;
  var addClass = _TetherBase$Utils.addClass;
  var removeClass = _TetherBase$Utils.removeClass;
  var updateClasses = _TetherBase$Utils.updateClasses;
  var defer = _TetherBase$Utils.defer;
  var flush = _TetherBase$Utils.flush;
  var getScrollBarSize = _TetherBase$Utils.getScrollBarSize;
  var removeUtilElements = _TetherBase$Utils.removeUtilElements;

  function within(a, b) {
    var diff = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

    return a + diff >= b && b >= a - diff;
  }

  var transformKey = function () {
    if (typeof document === 'undefined') {
      return '';
    }
    var el = document.createElement('div');

    var transforms = ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform'];
    for (var i = 0; i < transforms.length; ++i) {
      var key = transforms[i];
      if (el.style[key] !== undefined) {
        return key;
      }
    }
  }();

  var tethers = [];

  var position = function position() {
    tethers.forEach(function (tether) {
      tether.position(false);
    });
    flush();
  };

  function now() {
    if (typeof performance !== 'undefined' && typeof performance.now !== 'undefined') {
      return performance.now();
    }
    return +new Date();
  }

  (function () {
    var lastCall = null;
    var lastDuration = null;
    var pendingTimeout = null;

    var tick = function tick() {
      if (typeof lastDuration !== 'undefined' && lastDuration > 16) {
        // We voluntarily throttle ourselves if we can't manage 60fps
        lastDuration = Math.min(lastDuration - 16, 250);

        // Just in case this is the last event, remember to position just once more
        pendingTimeout = setTimeout(tick, 250);
        return;
      }

      if (typeof lastCall !== 'undefined' && now() - lastCall < 10) {
        // Some browsers call events a little too frequently, refuse to run more than is reasonable
        return;
      }

      if (pendingTimeout != null) {
        clearTimeout(pendingTimeout);
        pendingTimeout = null;
      }

      lastCall = now();
      position();
      lastDuration = now() - lastCall;
    };

    if (typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined') {
      ['resize', 'scroll', 'touchmove'].forEach(function (event) {
        window.addEventListener(event, tick);
      });
    }
  })();

  var MIRROR_LR = {
    center: 'center',
    left: 'right',
    right: 'left'
  };

  var MIRROR_TB = {
    middle: 'middle',
    top: 'bottom',
    bottom: 'top'
  };

  var OFFSET_MAP = {
    top: 0,
    left: 0,
    middle: '50%',
    center: '50%',
    bottom: '100%',
    right: '100%'
  };

  var autoToFixedAttachment = function autoToFixedAttachment(attachment, relativeToAttachment) {
    var left = attachment.left;
    var top = attachment.top;

    if (left === 'auto') {
      left = MIRROR_LR[relativeToAttachment.left];
    }

    if (top === 'auto') {
      top = MIRROR_TB[relativeToAttachment.top];
    }

    return { left: left, top: top };
  };

  var attachmentToOffset = function attachmentToOffset(attachment) {
    var left = attachment.left;
    var top = attachment.top;

    if (typeof OFFSET_MAP[attachment.left] !== 'undefined') {
      left = OFFSET_MAP[attachment.left];
    }

    if (typeof OFFSET_MAP[attachment.top] !== 'undefined') {
      top = OFFSET_MAP[attachment.top];
    }

    return { left: left, top: top };
  };

  function addOffset() {
    var out = { top: 0, left: 0 };

    for (var _len = arguments.length, offsets = Array(_len), _key = 0; _key < _len; _key++) {
      offsets[_key] = arguments[_key];
    }

    offsets.forEach(function (_ref) {
      var top = _ref.top;
      var left = _ref.left;

      if (typeof top === 'string') {
        top = parseFloat(top, 10);
      }
      if (typeof left === 'string') {
        left = parseFloat(left, 10);
      }

      out.top += top;
      out.left += left;
    });

    return out;
  }

  function offsetToPx(offset, size) {
    if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
      offset.left = parseFloat(offset.left, 10) / 100 * size.width;
    }
    if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
      offset.top = parseFloat(offset.top, 10) / 100 * size.height;
    }

    return offset;
  }

  var parseOffset = function parseOffset(value) {
    var _value$split = value.split(' ');

    var _value$split2 = _slicedToArray(_value$split, 2);

    var top = _value$split2[0];
    var left = _value$split2[1];

    return { top: top, left: left };
  };
  var parseAttachment = parseOffset;

  var TetherClass = function (_Evented) {
    _inherits(TetherClass, _Evented);

    function TetherClass(options) {
      var _this = this;

      _classCallCheck(this, TetherClass);

      _get(Object.getPrototypeOf(TetherClass.prototype), 'constructor', this).call(this);
      this.position = this.position.bind(this);

      tethers.push(this);

      this.history = [];

      this.setOptions(options, false);

      TetherBase.modules.forEach(function (module) {
        if (typeof module.initialize !== 'undefined') {
          module.initialize.call(_this);
        }
      });

      this.position();
    }

    _createClass(TetherClass, [{
      key: 'getClass',
      value: function getClass() {
        var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
        var classes = this.options.classes;

        if (typeof classes !== 'undefined' && classes[key]) {
          return this.options.classes[key];
        } else if (this.options.classPrefix) {
          return this.options.classPrefix + '-' + key;
        } else {
          return key;
        }
      }
    }, {
      key: 'setOptions',
      value: function setOptions(options) {
        var _this2 = this;

        var pos = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

        var defaults = {
          offset: '0 0',
          targetOffset: '0 0',
          targetAttachment: 'auto auto',
          classPrefix: 'tether'
        };

        this.options = extend(defaults, options);

        var _options = this.options;
        var element = _options.element;
        var target = _options.target;
        var targetModifier = _options.targetModifier;

        this.element = element;
        this.target = target;
        this.targetModifier = targetModifier;

        if (this.target === 'viewport') {
          this.target = document.body;
          this.targetModifier = 'visible';
        } else if (this.target === 'scroll-handle') {
          this.target = document.body;
          this.targetModifier = 'scroll-handle';
        }

        ['element', 'target'].forEach(function (key) {
          if (typeof _this2[key] === 'undefined') {
            throw new Error('Tether Error: Both element and target must be defined');
          }

          if (typeof _this2[key].jquery !== 'undefined') {
            _this2[key] = _this2[key][0];
          } else if (typeof _this2[key] === 'string') {
            _this2[key] = document.querySelector(_this2[key]);
          }
        });

        addClass(this.element, this.getClass('element'));
        if (!(this.options.addTargetClasses === false)) {
          addClass(this.target, this.getClass('target'));
        }

        if (!this.options.attachment) {
          throw new Error('Tether Error: You must provide an attachment');
        }

        this.targetAttachment = parseAttachment(this.options.targetAttachment);
        this.attachment = parseAttachment(this.options.attachment);
        this.offset = parseOffset(this.options.offset);
        this.targetOffset = parseOffset(this.options.targetOffset);

        if (typeof this.scrollParents !== 'undefined') {
          this.disable();
        }

        if (this.targetModifier === 'scroll-handle') {
          this.scrollParents = [this.target];
        } else {
          this.scrollParents = getScrollParents(this.target);
        }

        if (!(this.options.enabled === false)) {
          this.enable(pos);
        }
      }
    }, {
      key: 'getTargetBounds',
      value: function getTargetBounds() {
        if (typeof this.targetModifier !== 'undefined') {
          if (this.targetModifier === 'visible') {
            if (this.target === document.body) {
              return { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth };
            } else {
              var bounds = getBounds(this.target);

              var out = {
                height: bounds.height,
                width: bounds.width,
                top: bounds.top,
                left: bounds.left
              };

              out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
              out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)));
              out.height = Math.min(innerHeight, out.height);
              out.height -= 2;

              out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
              out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)));
              out.width = Math.min(innerWidth, out.width);
              out.width -= 2;

              if (out.top < pageYOffset) {
                out.top = pageYOffset;
              }
              if (out.left < pageXOffset) {
                out.left = pageXOffset;
              }

              return out;
            }
          } else if (this.targetModifier === 'scroll-handle') {
            var bounds = undefined;
            var target = this.target;
            if (target === document.body) {
              target = document.documentElement;

              bounds = {
                left: pageXOffset,
                top: pageYOffset,
                height: innerHeight,
                width: innerWidth
              };
            } else {
              bounds = getBounds(target);
            }

            var style = getComputedStyle(target);

            var hasBottomScroll = target.scrollWidth > target.clientWidth || [style.overflow, style.overflowX].indexOf('scroll') >= 0 || this.target !== document.body;

            var scrollBottom = 0;
            if (hasBottomScroll) {
              scrollBottom = 15;
            }

            var height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;

            var out = {
              width: 15,
              height: height * 0.975 * (height / target.scrollHeight),
              left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
            };

            var fitAdj = 0;
            if (height < 408 && this.target === document.body) {
              fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58;
            }

            if (this.target !== document.body) {
              out.height = Math.max(out.height, 24);
            }

            var scrollPercentage = this.target.scrollTop / (target.scrollHeight - height);
            out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);

            if (this.target === document.body) {
              out.height = Math.max(out.height, 24);
            }

            return out;
          }
        } else {
          return getBounds(this.target);
        }
      }
    }, {
      key: 'clearCache',
      value: function clearCache() {
        this._cache = {};
      }
    }, {
      key: 'cache',
      value: function cache(k, getter) {
        // More than one module will often need the same DOM info, so
        // we keep a cache which is cleared on each position call
        if (typeof this._cache === 'undefined') {
          this._cache = {};
        }

        if (typeof this._cache[k] === 'undefined') {
          this._cache[k] = getter.call(this);
        }

        return this._cache[k];
      }
    }, {
      key: 'enable',
      value: function enable() {
        var _this3 = this;

        var pos = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

        if (!(this.options.addTargetClasses === false)) {
          addClass(this.target, this.getClass('enabled'));
        }
        addClass(this.element, this.getClass('enabled'));
        this.enabled = true;

        this.scrollParents.forEach(function (parent) {
          if (parent !== _this3.target.ownerDocument) {
            parent.addEventListener('scroll', _this3.position);
          }
        });

        if (pos) {
          this.position();
        }
      }
    }, {
      key: 'disable',
      value: function disable() {
        var _this4 = this;

        removeClass(this.target, this.getClass('enabled'));
        removeClass(this.element, this.getClass('enabled'));
        this.enabled = false;

        if (typeof this.scrollParents !== 'undefined') {
          this.scrollParents.forEach(function (parent) {
            parent.removeEventListener('scroll', _this4.position);
          });
        }
      }
    }, {
      key: 'destroy',
      value: function destroy() {
        var _this5 = this;

        this.disable();

        tethers.forEach(function (tether, i) {
          if (tether === _this5) {
            tethers.splice(i, 1);
          }
        });

        // Remove any elements we were using for convenience from the DOM
        if (tethers.length === 0) {
          removeUtilElements();
        }
      }
    }, {
      key: 'updateAttachClasses',
      value: function updateAttachClasses(elementAttach, targetAttach) {
        var _this6 = this;

        elementAttach = elementAttach || this.attachment;
        targetAttach = targetAttach || this.targetAttachment;
        var sides = ['left', 'top', 'bottom', 'right', 'middle', 'center'];

        if (typeof this._addAttachClasses !== 'undefined' && this._addAttachClasses.length) {
          // updateAttachClasses can be called more than once in a position call, so
          // we need to clean up after ourselves such that when the last defer gets
          // ran it doesn't add any extra classes from previous calls.
          this._addAttachClasses.splice(0, this._addAttachClasses.length);
        }

        if (typeof this._addAttachClasses === 'undefined') {
          this._addAttachClasses = [];
        }
        var add = this._addAttachClasses;

        if (elementAttach.top) {
          add.push(this.getClass('element-attached') + '-' + elementAttach.top);
        }
        if (elementAttach.left) {
          add.push(this.getClass('element-attached') + '-' + elementAttach.left);
        }
        if (targetAttach.top) {
          add.push(this.getClass('target-attached') + '-' + targetAttach.top);
        }
        if (targetAttach.left) {
          add.push(this.getClass('target-attached') + '-' + targetAttach.left);
        }

        var all = [];
        sides.forEach(function (side) {
          all.push(_this6.getClass('element-attached') + '-' + side);
          all.push(_this6.getClass('target-attached') + '-' + side);
        });

        defer(function () {
          if (!(typeof _this6._addAttachClasses !== 'undefined')) {
            return;
          }

          updateClasses(_this6.element, _this6._addAttachClasses, all);
          if (!(_this6.options.addTargetClasses === false)) {
            updateClasses(_this6.target, _this6._addAttachClasses, all);
          }

          delete _this6._addAttachClasses;
        });
      }
    }, {
      key: 'position',
      value: function position() {
        var _this7 = this;

        var flushChanges = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

        // flushChanges commits the changes immediately, leave true unless you are positioning multiple
        // tethers (in which case call Tether.Utils.flush yourself when you're done)

        if (!this.enabled) {
          return;
        }

        this.clearCache();

        // Turn 'auto' attachments into the appropriate corner or edge
        var targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);

        this.updateAttachClasses(this.attachment, targetAttachment);

        var elementPos = this.cache('element-bounds', function () {
          return getBounds(_this7.element);
        });

        var width = elementPos.width;
        var height = elementPos.height;

        if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
          var _lastSize = this.lastSize;

          // We cache the height and width to make it possible to position elements that are
          // getting hidden.
          width = _lastSize.width;
          height = _lastSize.height;
        } else {
          this.lastSize = { width: width, height: height };
        }

        var targetPos = this.cache('target-bounds', function () {
          return _this7.getTargetBounds();
        });
        var targetSize = targetPos;

        // Get an actual px offset from the attachment
        var offset = offsetToPx(attachmentToOffset(this.attachment), { width: width, height: height });
        var targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);

        var manualOffset = offsetToPx(this.offset, { width: width, height: height });
        var manualTargetOffset = offsetToPx(this.targetOffset, targetSize);

        // Add the manually provided offset
        offset = addOffset(offset, manualOffset);
        targetOffset = addOffset(targetOffset, manualTargetOffset);

        // It's now our goal to make (element position + offset) == (target position + target offset)
        var left = targetPos.left + targetOffset.left - offset.left;
        var top = targetPos.top + targetOffset.top - offset.top;

        for (var i = 0; i < TetherBase.modules.length; ++i) {
          var _module2 = TetherBase.modules[i];
          var ret = _module2.position.call(this, {
            left: left,
            top: top,
            targetAttachment: targetAttachment,
            targetPos: targetPos,
            elementPos: elementPos,
            offset: offset,
            targetOffset: targetOffset,
            manualOffset: manualOffset,
            manualTargetOffset: manualTargetOffset,
            scrollbarSize: scrollbarSize,
            attachment: this.attachment
          });

          if (ret === false) {
            return false;
          } else if (typeof ret === 'undefined' || (typeof ret === 'undefined' ? 'undefined' : _typeof(ret)) !== 'object') {
            continue;
          } else {
            top = ret.top;
            left = ret.left;
          }
        }

        // We describe the position three different ways to give the optimizer
        // a chance to decide the best possible way to position the element
        // with the fewest repaints.
        var next = {
          // It's position relative to the page (absolute positioning when
          // the element is a child of the body)
          page: {
            top: top,
            left: left
          },

          // It's position relative to the viewport (fixed positioning)
          viewport: {
            top: top - pageYOffset,
            bottom: pageYOffset - top - height + innerHeight,
            left: left - pageXOffset,
            right: pageXOffset - left - width + innerWidth
          }
        };

        var doc = this.target.ownerDocument;
        var win = doc.defaultView;

        var scrollbarSize = undefined;
        if (win.innerHeight > doc.documentElement.clientHeight) {
          scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
          next.viewport.bottom -= scrollbarSize.height;
        }

        if (win.innerWidth > doc.documentElement.clientWidth) {
          scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
          next.viewport.right -= scrollbarSize.width;
        }

        if (['', 'static'].indexOf(doc.body.style.position) === -1 || ['', 'static'].indexOf(doc.body.parentElement.style.position) === -1) {
          // Absolute positioning in the body will be relative to the page, not the 'initial containing block'
          next.page.bottom = doc.body.scrollHeight - top - height;
          next.page.right = doc.body.scrollWidth - left - width;
        }

        if (typeof this.options.optimizations !== 'undefined' && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== 'undefined')) {
          (function () {
            var offsetParent = _this7.cache('target-offsetparent', function () {
              return getOffsetParent(_this7.target);
            });
            var offsetPosition = _this7.cache('target-offsetparent-bounds', function () {
              return getBounds(offsetParent);
            });
            var offsetParentStyle = getComputedStyle(offsetParent);
            var offsetParentSize = offsetPosition;

            var offsetBorder = {};
            ['Top', 'Left', 'Bottom', 'Right'].forEach(function (side) {
              offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle['border' + side + 'Width']);
            });

            offsetPosition.right = doc.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
            offsetPosition.bottom = doc.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;

            if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
              if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
                // We're within the visible part of the target's scroll parent
                var scrollTop = offsetParent.scrollTop;
                var scrollLeft = offsetParent.scrollLeft;

                // It's position relative to the target's offset parent (absolute positioning when
                // the element is moved to be a child of the target's offset parent).
                next.offset = {
                  top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
                  left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
                };
              }
            }
          })();
        }

        // We could also travel up the DOM and try each containing context, rather than only
        // looking at the body, but we're gonna get diminishing returns.

        this.move(next);

        this.history.unshift(next);

        if (this.history.length > 3) {
          this.history.pop();
        }

        if (flushChanges) {
          flush();
        }

        return true;
      }

      // THE ISSUE
    }, {
      key: 'move',
      value: function move(pos) {
        var _this8 = this;

        if (!(typeof this.element.parentNode !== 'undefined')) {
          return;
        }

        var same = {};

        for (var type in pos) {
          same[type] = {};

          for (var key in pos[type]) {
            var found = false;

            for (var i = 0; i < this.history.length; ++i) {
              var point = this.history[i];
              if (typeof point[type] !== 'undefined' && !within(point[type][key], pos[type][key])) {
                found = true;
                break;
              }
            }

            if (!found) {
              same[type][key] = true;
            }
          }
        }

        var css = { top: '', left: '', right: '', bottom: '' };

        var transcribe = function transcribe(_same, _pos) {
          var hasOptimizations = typeof _this8.options.optimizations !== 'undefined';
          var gpu = hasOptimizations ? _this8.options.optimizations.gpu : null;
          if (gpu !== false) {
            var yPos = undefined,
                xPos = undefined;
            if (_same.top) {
              css.top = 0;
              yPos = _pos.top;
            } else {
              css.bottom = 0;
              yPos = -_pos.bottom;
            }

            if (_same.left) {
              css.left = 0;
              xPos = _pos.left;
            } else {
              css.right = 0;
              xPos = -_pos.right;
            }

            if (window.matchMedia) {
              // HubSpot/tether#207
              var retina = window.matchMedia('only screen and (min-resolution: 1.3dppx)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3)').matches;
              if (!retina) {
                xPos = Math.round(xPos);
                yPos = Math.round(yPos);
              }
            }

            css[transformKey] = 'translateX(' + xPos + 'px) translateY(' + yPos + 'px)';

            if (transformKey !== 'msTransform') {
              // The Z transform will keep this in the GPU (faster, and prevents artifacts),
              // but IE9 doesn't support 3d transforms and will choke.
              css[transformKey] += " translateZ(0)";
            }
          } else {
            if (_same.top) {
              css.top = _pos.top + 'px';
            } else {
              css.bottom = _pos.bottom + 'px';
            }

            if (_same.left) {
              css.left = _pos.left + 'px';
            } else {
              css.right = _pos.right + 'px';
            }
          }
        };

        var moved = false;
        if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
          css.position = 'absolute';
          transcribe(same.page, pos.page);
        } else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
          css.position = 'fixed';
          transcribe(same.viewport, pos.viewport);
        } else if (typeof same.offset !== 'undefined' && same.offset.top && same.offset.left) {
          (function () {
            css.position = 'absolute';
            var offsetParent = _this8.cache('target-offsetparent', function () {
              return getOffsetParent(_this8.target);
            });

            if (getOffsetParent(_this8.element) !== offsetParent) {
              defer(function () {
                _this8.element.parentNode.removeChild(_this8.element);
                offsetParent.appendChild(_this8.element);
              });
            }

            transcribe(same.offset, pos.offset);
            moved = true;
          })();
        } else {
          css.position = 'absolute';
          transcribe({ top: true, left: true }, pos.page);
        }

        if (!moved) {
          if (this.options.bodyElement) {
            this.options.bodyElement.appendChild(this.element);
          } else {
            var offsetParentIsBody = true;
            var currentNode = this.element.parentNode;
            while (currentNode && currentNode.nodeType === 1 && currentNode.tagName !== 'BODY') {
              if (getComputedStyle(currentNode).position !== 'static') {
                offsetParentIsBody = false;
                break;
              }

              currentNode = currentNode.parentNode;
            }

            if (!offsetParentIsBody) {
              this.element.parentNode.removeChild(this.element);
              this.element.ownerDocument.body.appendChild(this.element);
            }
          }
        }

        // Any css change will trigger a repaint, so let's avoid one if nothing changed
        var writeCSS = {};
        var write = false;
        for (var key in css) {
          var val = css[key];
          var elVal = this.element.style[key];

          if (elVal !== val) {
            write = true;
            writeCSS[key] = val;
          }
        }

        if (write) {
          defer(function () {
            extend(_this8.element.style, writeCSS);
            _this8.trigger('repositioned');
          });
        }
      }
    }]);

    return TetherClass;
  }(Evented);

  TetherClass.modules = [];

  TetherBase.position = position;

  var Tether = extend(TetherClass, TetherBase);
  /* globals TetherBase */

  'use strict';

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;_e = err;
      } finally {
        try {
          if (!_n && _i['return']) _i['return']();
        } finally {
          if (_d) throw _e;
        }
      }return _arr;
    }return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError('Invalid attempt to destructure non-iterable instance');
      }
    };
  }();

  var _TetherBase$Utils = TetherBase.Utils;
  var getBounds = _TetherBase$Utils.getBounds;
  var extend = _TetherBase$Utils.extend;
  var updateClasses = _TetherBase$Utils.updateClasses;
  var defer = _TetherBase$Utils.defer;

  var BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];

  function getBoundingRect(tether, to) {
    if (to === 'scrollParent') {
      to = tether.scrollParents[0];
    } else if (to === 'window') {
      to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset];
    }

    if (to === document) {
      to = to.documentElement;
    }

    if (typeof to.nodeType !== 'undefined') {
      (function () {
        var node = to;
        var size = getBounds(to);
        var pos = size;
        var style = getComputedStyle(to);

        to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top];

        // Account any parent Frames scroll offset
        if (node.ownerDocument !== document) {
          var win = node.ownerDocument.defaultView;
          to[0] += win.pageXOffset;
          to[1] += win.pageYOffset;
          to[2] += win.pageXOffset;
          to[3] += win.pageYOffset;
        }

        BOUNDS_FORMAT.forEach(function (side, i) {
          side = side[0].toUpperCase() + side.substr(1);
          if (side === 'Top' || side === 'Left') {
            to[i] += parseFloat(style['border' + side + 'Width']);
          } else {
            to[i] -= parseFloat(style['border' + side + 'Width']);
          }
        });
      })();
    }

    return to;
  }

  TetherBase.modules.push({
    position: function position(_ref) {
      var _this = this;

      var top = _ref.top;
      var left = _ref.left;
      var targetAttachment = _ref.targetAttachment;

      if (!this.options.constraints) {
        return true;
      }

      var _cache = this.cache('element-bounds', function () {
        return getBounds(_this.element);
      });

      var height = _cache.height;
      var width = _cache.width;

      if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
        var _lastSize = this.lastSize;

        // Handle the item getting hidden as a result of our positioning without glitching
        // the classes in and out
        width = _lastSize.width;
        height = _lastSize.height;
      }

      var targetSize = this.cache('target-bounds', function () {
        return _this.getTargetBounds();
      });

      var targetHeight = targetSize.height;
      var targetWidth = targetSize.width;

      var allClasses = [this.getClass('pinned'), this.getClass('out-of-bounds')];

      this.options.constraints.forEach(function (constraint) {
        var outOfBoundsClass = constraint.outOfBoundsClass;
        var pinnedClass = constraint.pinnedClass;

        if (outOfBoundsClass) {
          allClasses.push(outOfBoundsClass);
        }
        if (pinnedClass) {
          allClasses.push(pinnedClass);
        }
      });

      allClasses.forEach(function (cls) {
        ['left', 'top', 'right', 'bottom'].forEach(function (side) {
          allClasses.push(cls + '-' + side);
        });
      });

      var addClasses = [];

      var tAttachment = extend({}, targetAttachment);
      var eAttachment = extend({}, this.attachment);

      this.options.constraints.forEach(function (constraint) {
        var to = constraint.to;
        var attachment = constraint.attachment;
        var pin = constraint.pin;

        if (typeof attachment === 'undefined') {
          attachment = '';
        }

        var changeAttachX = undefined,
            changeAttachY = undefined;
        if (attachment.indexOf(' ') >= 0) {
          var _attachment$split = attachment.split(' ');

          var _attachment$split2 = _slicedToArray(_attachment$split, 2);

          changeAttachY = _attachment$split2[0];
          changeAttachX = _attachment$split2[1];
        } else {
          changeAttachX = changeAttachY = attachment;
        }

        var bounds = getBoundingRect(_this, to);

        if (changeAttachY === 'target' || changeAttachY === 'both') {
          if (top < bounds[1] && tAttachment.top === 'top') {
            top += targetHeight;
            tAttachment.top = 'bottom';
          }

          if (top + height > bounds[3] && tAttachment.top === 'bottom') {
            top -= targetHeight;
            tAttachment.top = 'top';
          }
        }

        if (changeAttachY === 'together') {
          if (tAttachment.top === 'top') {
            if (eAttachment.top === 'bottom' && top < bounds[1]) {
              top += targetHeight;
              tAttachment.top = 'bottom';

              top += height;
              eAttachment.top = 'top';
            } else if (eAttachment.top === 'top' && top + height > bounds[3] && top - (height - targetHeight) >= bounds[1]) {
              top -= height - targetHeight;
              tAttachment.top = 'bottom';

              eAttachment.top = 'bottom';
            }
          }

          if (tAttachment.top === 'bottom') {
            if (eAttachment.top === 'top' && top + height > bounds[3]) {
              top -= targetHeight;
              tAttachment.top = 'top';

              top -= height;
              eAttachment.top = 'bottom';
            } else if (eAttachment.top === 'bottom' && top < bounds[1] && top + (height * 2 - targetHeight) <= bounds[3]) {
              top += height - targetHeight;
              tAttachment.top = 'top';

              eAttachment.top = 'top';
            }
          }

          if (tAttachment.top === 'middle') {
            if (top + height > bounds[3] && eAttachment.top === 'top') {
              top -= height;
              eAttachment.top = 'bottom';
            } else if (top < bounds[1] && eAttachment.top === 'bottom') {
              top += height;
              eAttachment.top = 'top';
            }
          }
        }

        if (changeAttachX === 'target' || changeAttachX === 'both') {
          if (left < bounds[0] && tAttachment.left === 'left') {
            left += targetWidth;
            tAttachment.left = 'right';
          }

          if (left + width > bounds[2] && tAttachment.left === 'right') {
            left -= targetWidth;
            tAttachment.left = 'left';
          }
        }

        if (changeAttachX === 'together') {
          if (left < bounds[0] && tAttachment.left === 'left') {
            if (eAttachment.left === 'right') {
              left += targetWidth;
              tAttachment.left = 'right';

              left += width;
              eAttachment.left = 'left';
            } else if (eAttachment.left === 'left') {
              left += targetWidth;
              tAttachment.left = 'right';

              left -= width;
              eAttachment.left = 'right';
            }
          } else if (left + width > bounds[2] && tAttachment.left === 'right') {
            if (eAttachment.left === 'left') {
              left -= targetWidth;
              tAttachment.left = 'left';

              left -= width;
              eAttachment.left = 'right';
            } else if (eAttachment.left === 'right') {
              left -= targetWidth;
              tAttachment.left = 'left';

              left += width;
              eAttachment.left = 'left';
            }
          } else if (tAttachment.left === 'center') {
            if (left + width > bounds[2] && eAttachment.left === 'left') {
              left -= width;
              eAttachment.left = 'right';
            } else if (left < bounds[0] && eAttachment.left === 'right') {
              left += width;
              eAttachment.left = 'left';
            }
          }
        }

        if (changeAttachY === 'element' || changeAttachY === 'both') {
          if (top < bounds[1] && eAttachment.top === 'bottom') {
            top += height;
            eAttachment.top = 'top';
          }

          if (top + height > bounds[3] && eAttachment.top === 'top') {
            top -= height;
            eAttachment.top = 'bottom';
          }
        }

        if (changeAttachX === 'element' || changeAttachX === 'both') {
          if (left < bounds[0]) {
            if (eAttachment.left === 'right') {
              left += width;
              eAttachment.left = 'left';
            } else if (eAttachment.left === 'center') {
              left += width / 2;
              eAttachment.left = 'left';
            }
          }

          if (left + width > bounds[2]) {
            if (eAttachment.left === 'left') {
              left -= width;
              eAttachment.left = 'right';
            } else if (eAttachment.left === 'center') {
              left -= width / 2;
              eAttachment.left = 'right';
            }
          }
        }

        if (typeof pin === 'string') {
          pin = pin.split(',').map(function (p) {
            return p.trim();
          });
        } else if (pin === true) {
          pin = ['top', 'left', 'right', 'bottom'];
        }

        pin = pin || [];

        var pinned = [];
        var oob = [];

        if (top < bounds[1]) {
          if (pin.indexOf('top') >= 0) {
            top = bounds[1];
            pinned.push('top');
          } else {
            oob.push('top');
          }
        }

        if (top + height > bounds[3]) {
          if (pin.indexOf('bottom') >= 0) {
            top = bounds[3] - height;
            pinned.push('bottom');
          } else {
            oob.push('bottom');
          }
        }

        if (left < bounds[0]) {
          if (pin.indexOf('left') >= 0) {
            left = bounds[0];
            pinned.push('left');
          } else {
            oob.push('left');
          }
        }

        if (left + width > bounds[2]) {
          if (pin.indexOf('right') >= 0) {
            left = bounds[2] - width;
            pinned.push('right');
          } else {
            oob.push('right');
          }
        }

        if (pinned.length) {
          (function () {
            var pinnedClass = undefined;
            if (typeof _this.options.pinnedClass !== 'undefined') {
              pinnedClass = _this.options.pinnedClass;
            } else {
              pinnedClass = _this.getClass('pinned');
            }

            addClasses.push(pinnedClass);
            pinned.forEach(function (side) {
              addClasses.push(pinnedClass + '-' + side);
            });
          })();
        }

        if (oob.length) {
          (function () {
            var oobClass = undefined;
            if (typeof _this.options.outOfBoundsClass !== 'undefined') {
              oobClass = _this.options.outOfBoundsClass;
            } else {
              oobClass = _this.getClass('out-of-bounds');
            }

            addClasses.push(oobClass);
            oob.forEach(function (side) {
              addClasses.push(oobClass + '-' + side);
            });
          })();
        }

        if (pinned.indexOf('left') >= 0 || pinned.indexOf('right') >= 0) {
          eAttachment.left = tAttachment.left = false;
        }
        if (pinned.indexOf('top') >= 0 || pinned.indexOf('bottom') >= 0) {
          eAttachment.top = tAttachment.top = false;
        }

        if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== _this.attachment.top || eAttachment.left !== _this.attachment.left) {
          _this.updateAttachClasses(eAttachment, tAttachment);
          _this.trigger('update', {
            attachment: eAttachment,
            targetAttachment: tAttachment
          });
        }
      });

      defer(function () {
        if (!(_this.options.addTargetClasses === false)) {
          updateClasses(_this.target, addClasses, allClasses);
        }
        updateClasses(_this.element, addClasses, allClasses);
      });

      return { top: top, left: left };
    }
  });
  /* globals TetherBase */

  'use strict';

  var _TetherBase$Utils = TetherBase.Utils;
  var getBounds = _TetherBase$Utils.getBounds;
  var updateClasses = _TetherBase$Utils.updateClasses;
  var defer = _TetherBase$Utils.defer;

  TetherBase.modules.push({
    position: function position(_ref) {
      var _this = this;

      var top = _ref.top;
      var left = _ref.left;

      var _cache = this.cache('element-bounds', function () {
        return getBounds(_this.element);
      });

      var height = _cache.height;
      var width = _cache.width;

      var targetPos = this.getTargetBounds();

      var bottom = top + height;
      var right = left + width;

      var abutted = [];
      if (top <= targetPos.bottom && bottom >= targetPos.top) {
        ['left', 'right'].forEach(function (side) {
          var targetPosSide = targetPos[side];
          if (targetPosSide === left || targetPosSide === right) {
            abutted.push(side);
          }
        });
      }

      if (left <= targetPos.right && right >= targetPos.left) {
        ['top', 'bottom'].forEach(function (side) {
          var targetPosSide = targetPos[side];
          if (targetPosSide === top || targetPosSide === bottom) {
            abutted.push(side);
          }
        });
      }

      var allClasses = [];
      var addClasses = [];

      var sides = ['left', 'top', 'right', 'bottom'];
      allClasses.push(this.getClass('abutted'));
      sides.forEach(function (side) {
        allClasses.push(_this.getClass('abutted') + '-' + side);
      });

      if (abutted.length) {
        addClasses.push(this.getClass('abutted'));
      }

      abutted.forEach(function (side) {
        addClasses.push(_this.getClass('abutted') + '-' + side);
      });

      defer(function () {
        if (!(_this.options.addTargetClasses === false)) {
          updateClasses(_this.target, addClasses, allClasses);
        }
        updateClasses(_this.element, addClasses, allClasses);
      });

      return true;
    }
  });
  /* globals TetherBase */

  'use strict';

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;_e = err;
      } finally {
        try {
          if (!_n && _i['return']) _i['return']();
        } finally {
          if (_d) throw _e;
        }
      }return _arr;
    }return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError('Invalid attempt to destructure non-iterable instance');
      }
    };
  }();

  TetherBase.modules.push({
    position: function position(_ref) {
      var top = _ref.top;
      var left = _ref.left;

      if (!this.options.shift) {
        return;
      }

      var shift = this.options.shift;
      if (typeof this.options.shift === 'function') {
        shift = this.options.shift.call(this, { top: top, left: left });
      }

      var shiftTop = undefined,
          shiftLeft = undefined;
      if (typeof shift === 'string') {
        shift = shift.split(' ');
        shift[1] = shift[1] || shift[0];

        var _shift = shift;

        var _shift2 = _slicedToArray(_shift, 2);

        shiftTop = _shift2[0];
        shiftLeft = _shift2[1];

        shiftTop = parseFloat(shiftTop, 10);
        shiftLeft = parseFloat(shiftLeft, 10);
      } else {
        shiftTop = shift.top;
        shiftLeft = shift.left;
      }

      top += shiftTop;
      left += shiftLeft;

      return { top: top, left: left };
    }
  });
  return Tether;
});

/***/ })
/******/ ]);