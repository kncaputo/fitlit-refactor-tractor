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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/_base.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/_base.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".button-styling {\n  background-position: center;\n  display: inline;\n  background-size: 3.4vw;\n  border: none;\n  height: 3.4vw;\n  margin-left: 1vw;\n  width: 3.4vw; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/styles.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/styles.scss ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../images/profile.png */ "./src/images/profile.png"));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../images/steps-goback.png */ "./src/images/steps-goback.png"));
var ___CSS_LOADER_URL___2___ = urlEscape(__webpack_require__(/*! ../images/steps-info.png */ "./src/images/steps-info.png"));
var ___CSS_LOADER_URL___3___ = urlEscape(__webpack_require__(/*! ../images/steps-friends.png */ "./src/images/steps-friends.png"));
var ___CSS_LOADER_URL___4___ = urlEscape(__webpack_require__(/*! ../images/steps-calendar.png */ "./src/images/steps-calendar.png"));
var ___CSS_LOADER_URL___5___ = urlEscape(__webpack_require__(/*! ../images/hydration-goback.png */ "./src/images/hydration-goback.png"));
var ___CSS_LOADER_URL___6___ = urlEscape(__webpack_require__(/*! ../images/hydration-info.png */ "./src/images/hydration-info.png"));
var ___CSS_LOADER_URL___7___ = urlEscape(__webpack_require__(/*! ../images/hydration-friends.png */ "./src/images/hydration-friends.png"));
var ___CSS_LOADER_URL___8___ = urlEscape(__webpack_require__(/*! ../images/hydration-calendar.png */ "./src/images/hydration-calendar.png"));
var ___CSS_LOADER_URL___9___ = urlEscape(__webpack_require__(/*! ../images/stairs-goback.png */ "./src/images/stairs-goback.png"));
var ___CSS_LOADER_URL___10___ = urlEscape(__webpack_require__(/*! ../images/stairs-info.png */ "./src/images/stairs-info.png"));
var ___CSS_LOADER_URL___11___ = urlEscape(__webpack_require__(/*! ../images/stairs-friends.png */ "./src/images/stairs-friends.png"));
var ___CSS_LOADER_URL___12___ = urlEscape(__webpack_require__(/*! ../images/stairs-calendar.png */ "./src/images/stairs-calendar.png"));
var ___CSS_LOADER_URL___13___ = urlEscape(__webpack_require__(/*! ../images/sleep-goback.png */ "./src/images/sleep-goback.png"));
var ___CSS_LOADER_URL___14___ = urlEscape(__webpack_require__(/*! ../images/sleep-info.png */ "./src/images/sleep-info.png"));
var ___CSS_LOADER_URL___15___ = urlEscape(__webpack_require__(/*! ../images/sleep-friends.png */ "./src/images/sleep-friends.png"));
var ___CSS_LOADER_URL___16___ = urlEscape(__webpack_require__(/*! ../images/sleep-calendar.png */ "./src/images/sleep-calendar.png"));
var ___CSS_LOADER_URL___17___ = urlEscape(__webpack_require__(/*! ../images/steps-trending.png */ "./src/images/steps-trending.png"));
var ___CSS_LOADER_URL___18___ = urlEscape(__webpack_require__(/*! ../images/stairs-trending.png */ "./src/images/stairs-trending.png"));

// Module
exports.push([module.i, ".button-styling, .info-button, .friends-button, .calendar-button, .trending-button, .go-back-button {\n  background-position: center;\n  display: inline;\n  background-size: 3.4vw;\n  border: none;\n  height: 3.4vw;\n  margin-left: 1vw;\n  width: 3.4vw; }\n\n*,\n*:after,\n*:before {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0; }\n\nbody {\n  background-color: #1F1F1F;\n  font-family: \"Oswald\", sans-serif; }\n\n/* HEADER */\nheader {\n  text-align: center;\n  height: 9vw; }\n\nbutton:active {\n  border: none;\n  outline: none; }\n\n#profile-button {\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n  background-position: center;\n  background-size: 5.6vw;\n  border: none;\n  display: inline;\n  float: right;\n  height: 5.6vw;\n  margin-right: .5vw;\n  margin-top: 1.6vw;\n  width: 5.6vw; }\n\n#user-info-dropdown {\n  background-color: #1F1F1F;\n  color: white;\n  margin-left: 60%;\n  margin-top: -1.2%;\n  position: relative;\n  text-align: center;\n  z-index: 100; }\n\n.dropdown-p {\n  font-size: 1.2vw;\n  font-weight: 300;\n  padding-bottom: 1vw;\n  padding-top: 0;\n  text-align: center;\n  width: 100%; }\n\n.add-button {\n  background-color: #1F1F1F;\n  font-family: \"Oswald\", sans-serif;\n  font-size: 14px;\n  color: white;\n  width: 250px;\n  outline: none; }\n\n.add-buttons {\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 15px; }\n\nlabel {\n  color: white; }\n\n.submit-button {\n  background-color: #1F1F1F;\n  font-family: \"Oswald\", sans-serif;\n  font-size: 14px;\n  color: white;\n  width: 250px; }\n\nform {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\ninput {\n  width: 140px; }\n\n/* TEXT ELEMENTS */\nh1 {\n  color: white;\n  display: inline;\n  font-size: 5.4vw;\n  letter-spacing: .2em; }\n\nh2 {\n  font-size: 7vw;\n  letter-spacing: .1em; }\n\nh3 {\n  display: inline;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 3vw;\n  font-weight: 700;\n  letter-spacing: .2em; }\n\nh4 {\n  font-size: 6vw; }\n\nh5 {\n  font-size: 1.8vw;\n  padding-bottom: 1vw;\n  text-align: center; }\n\np {\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.2vw;\n  font-weight: 600;\n  letter-spacing: .2vw;\n  margin-right: 1vw;\n  padding-top: 2vw;\n  text-align: right;\n  width: 9vw;\n  word-break: keep-all; }\n\n/* MAIN */\nmain {\n  display: grid;\n  grid-template-areas: 'steps hydration' 'stairs sleep';\n  height: 100%; }\n\n.main-card {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: 20vw;\n  justify-content: center; }\n\n.main-card-top-row {\n  align-items: center;\n  display: flex;\n  justify-content: space-between;\n  width: 100%; }\n\n.main-card-bottom-row {\n  text-align: center;\n  width: 100%; }\n\n#steps-card-container {\n  background-color: #F5634B;\n  grid-area: steps;\n  margin: .5vw; }\n\n#hydration-card-container {\n  background-color: #54C6BE;\n  grid-area: hydration;\n  margin: .5vw; }\n\n#stairs-card-container {\n  background-color: #8975B2;\n  grid-area: stairs;\n  margin: .5vw; }\n\n#sleep-card-container {\n  background-color: #FBD089;\n  grid-area: sleep;\n  margin: .5vw; }\n\n.card-data-line {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 2vw; }\n\n.hydration-weekly-label {\n  font-size: 1vw;\n  padding-top: 1vw; }\n\n.hydration-weekly-amount {\n  font-size: 2vw; }\n\n.hydration-calendar-card {\n  margin-top: 15px; }\n\n.weekly-ounces {\n  padding: 0px;\n  margin-bottom: 20px;\n  margin-left: 20px;\n  width: 80%;\n  display: flex;\n  justify-content: center;\n  font-size: 17px; }\n\n.hydration-data-line {\n  display: flex;\n  justify-content: center;\n  margin-bottom: .2vw; }\n\n.trend-line {\n  font-size: 2vw;\n  text-align: center;\n  width: 20vw; }\n\n/* BUTTONS */\n.calendar-button {\n  float: right; }\n\n.steps-go-back-button {\n  background-image: url(" + ___CSS_LOADER_URL___1___ + "); }\n\n.steps-info-button {\n  background-image: url(" + ___CSS_LOADER_URL___2___ + "); }\n\n.steps-friends-button {\n  background-image: url(" + ___CSS_LOADER_URL___3___ + "); }\n\n.steps-calendar-button {\n  background-image: url(" + ___CSS_LOADER_URL___4___ + "); }\n\n.hydration-go-back-button {\n  background-image: url(" + ___CSS_LOADER_URL___5___ + "); }\n\n.hydration-info-button {\n  background-image: url(" + ___CSS_LOADER_URL___6___ + "); }\n\n.hydration-friends-button {\n  background-image: url(" + ___CSS_LOADER_URL___7___ + "); }\n\n.hydration-calendar-button {\n  background-image: url(" + ___CSS_LOADER_URL___8___ + "); }\n\n.stairs-go-back-button {\n  background-image: url(" + ___CSS_LOADER_URL___9___ + "); }\n\n.stairs-info-button {\n  background-image: url(" + ___CSS_LOADER_URL___10___ + "); }\n\n.stairs-friends-button {\n  background-image: url(" + ___CSS_LOADER_URL___11___ + "); }\n\n.stairs-calendar-button {\n  background-image: url(" + ___CSS_LOADER_URL___12___ + "); }\n\n.sleep-go-back-button {\n  background-image: url(" + ___CSS_LOADER_URL___13___ + "); }\n\n.sleep-info-button {\n  background-image: url(" + ___CSS_LOADER_URL___14___ + "); }\n\n.sleep-friends-button {\n  background-image: url(" + ___CSS_LOADER_URL___15___ + "); }\n\n.sleep-calendar-button {\n  background-image: url(" + ___CSS_LOADER_URL___16___ + "); }\n\n.steps-trending-button {\n  background-image: url(" + ___CSS_LOADER_URL___17___ + "); }\n\n.stairs-trending-button {\n  background-image: url(" + ___CSS_LOADER_URL___18___ + "); }\n\n/* CHANGING CLASSES */\n.hide {\n  display: none; }\n\n.green-text {\n  color: green; }\n\n.red-text {\n  color: red; }\n\n.yellow-text {\n  color: #F8BA00; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
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
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
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

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

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
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
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

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
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

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

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

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


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
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
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

/***/ "./src/DOMelements.js":
/*!****************************!*\
  !*** ./src/DOMelements.js ***!
  \****************************/
/*! exports provided: activityForm, activityMinutesInput, activityStepsInput, addActivityButton, addHydrationButton, addSleepButton, calendarInput, dropdownCalories, dropdownEmail, dropdownFriendsStepsContainer, dropdownGoal, dropdownName, flightStairsInput, headerName, hoursSleptInput, hydrationCalendarCard, hydrationCalendarCardBox, hydrationForm, hydrationFriendOuncesToday, hydrationFriendsCard, hydrationInfoCard, hydrationInfoGlassesToday, hydrationMainCard, hydrationUserOuncesToday, mainPage, ouncesDrankInput, profileButton, sleepCalendarCard, sleepCalendarHoursAverageWeekly, sleepCalendarQualityAverageWeekly, sleepForm, sleepFriendLongestSleeper, sleepFriendsCard, sleepFriendWorstSleeper, sleepInfoCard, sleepInfoHoursAverageAlltime, sleepInfoQualityAverageAlltime, sleepInfoQualityToday, sleepMainCard, sleepQualityInput, sleepUserHoursToday, stairsCalendarCard, stairsCalendarFlightsAverageWeekly, stairsCalendarStairsAverageWeekly, stairsFriendFlightsAverageToday, stairsFriendsCard, stairsInfoCard, stairsInfoFlightsToday, stairsMainCard, stairsTrendingButton, stairsTrendingCard, stairsUserStairsToday, stepsCalendarCard, stepsCalendarTotalActiveMinutesWeekly, stepsCalendarTotalStepsWeekly, stepsFriendActiveMinutesAverageToday, stepsFriendAverageStepGoal, stepsFriendsCard, stepsFriendStepsAverageToday, stepsInfoActiveMinutesToday, stepsInfoCard, stepsInfoMilesWalkedToday, stepsMainCard, stepsTrendingButton, stepsTrendingCard, stepsUserStepsToday, submitActivityButton, submitHydrationButton, submitSleepButton, trendingStairsPhraseContainer, trendingStepsPhraseContainer, userInfoDropdown, inputDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityForm", function() { return activityForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityMinutesInput", function() { return activityMinutesInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activityStepsInput", function() { return activityStepsInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addActivityButton", function() { return addActivityButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addHydrationButton", function() { return addHydrationButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSleepButton", function() { return addSleepButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendarInput", function() { return calendarInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropdownCalories", function() { return dropdownCalories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropdownEmail", function() { return dropdownEmail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropdownFriendsStepsContainer", function() { return dropdownFriendsStepsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropdownGoal", function() { return dropdownGoal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dropdownName", function() { return dropdownName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flightStairsInput", function() { return flightStairsInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerName", function() { return headerName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hoursSleptInput", function() { return hoursSleptInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrationCalendarCard", function() { return hydrationCalendarCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrationCalendarCardBox", function() { return hydrationCalendarCardBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrationForm", function() { return hydrationForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrationFriendOuncesToday", function() { return hydrationFriendOuncesToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrationFriendsCard", function() { return hydrationFriendsCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrationInfoCard", function() { return hydrationInfoCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrationInfoGlassesToday", function() { return hydrationInfoGlassesToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrationMainCard", function() { return hydrationMainCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrationUserOuncesToday", function() { return hydrationUserOuncesToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainPage", function() { return mainPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ouncesDrankInput", function() { return ouncesDrankInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileButton", function() { return profileButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleepCalendarCard", function() { return sleepCalendarCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleepCalendarHoursAverageWeekly", function() { return sleepCalendarHoursAverageWeekly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleepCalendarQualityAverageWeekly", function() { return sleepCalendarQualityAverageWeekly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleepForm", function() { return sleepForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleepFriendLongestSleeper", function() { return sleepFriendLongestSleeper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleepFriendsCard", function() { return sleepFriendsCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleepFriendWorstSleeper", function() { return sleepFriendWorstSleeper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleepInfoCard", function() { return sleepInfoCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleepInfoHoursAverageAlltime", function() { return sleepInfoHoursAverageAlltime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleepInfoQualityAverageAlltime", function() { return sleepInfoQualityAverageAlltime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleepInfoQualityToday", function() { return sleepInfoQualityToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleepMainCard", function() { return sleepMainCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleepQualityInput", function() { return sleepQualityInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sleepUserHoursToday", function() { return sleepUserHoursToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stairsCalendarCard", function() { return stairsCalendarCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stairsCalendarFlightsAverageWeekly", function() { return stairsCalendarFlightsAverageWeekly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stairsCalendarStairsAverageWeekly", function() { return stairsCalendarStairsAverageWeekly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stairsFriendFlightsAverageToday", function() { return stairsFriendFlightsAverageToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stairsFriendsCard", function() { return stairsFriendsCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stairsInfoCard", function() { return stairsInfoCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stairsInfoFlightsToday", function() { return stairsInfoFlightsToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stairsMainCard", function() { return stairsMainCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stairsTrendingButton", function() { return stairsTrendingButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stairsTrendingCard", function() { return stairsTrendingCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stairsUserStairsToday", function() { return stairsUserStairsToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsCalendarCard", function() { return stepsCalendarCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsCalendarTotalActiveMinutesWeekly", function() { return stepsCalendarTotalActiveMinutesWeekly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsCalendarTotalStepsWeekly", function() { return stepsCalendarTotalStepsWeekly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsFriendActiveMinutesAverageToday", function() { return stepsFriendActiveMinutesAverageToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsFriendAverageStepGoal", function() { return stepsFriendAverageStepGoal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsFriendsCard", function() { return stepsFriendsCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsFriendStepsAverageToday", function() { return stepsFriendStepsAverageToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsInfoActiveMinutesToday", function() { return stepsInfoActiveMinutesToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsInfoCard", function() { return stepsInfoCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsInfoMilesWalkedToday", function() { return stepsInfoMilesWalkedToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsMainCard", function() { return stepsMainCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsTrendingButton", function() { return stepsTrendingButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsTrendingCard", function() { return stepsTrendingCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stepsUserStepsToday", function() { return stepsUserStepsToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitActivityButton", function() { return submitActivityButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitHydrationButton", function() { return submitHydrationButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitSleepButton", function() { return submitSleepButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trendingStairsPhraseContainer", function() { return trendingStairsPhraseContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trendingStepsPhraseContainer", function() { return trendingStepsPhraseContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userInfoDropdown", function() { return userInfoDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputDate", function() { return inputDate; });
let activityForm = document.querySelector('.activity-form');
let activityMinutesInput = document.querySelector('#activity-minutes-input');
let activityStepsInput = document.querySelector('#activity-steps-input');
let addActivityButton = document.querySelector('.add-activity-button');
let addHydrationButton = document.querySelector('.add-hydration-button');
let addSleepButton = document.querySelector('.add-sleep-button');
let calendarInput = document.querySelector('.date');
let dropdownCalories = document.querySelector('#dropdown-calories');
let dropdownEmail = document.querySelector('#dropdown-email');
let dropdownFriendsStepsContainer = document.querySelector('#dropdown-friends-steps-container');
let dropdownGoal = document.querySelector('#dropdown-goal');
let dropdownName = document.querySelector('#dropdown-name');
let flightStairsInput = document.querySelector('#flight-stairs-input');
let headerName = document.querySelector('#header-name');
let hoursSleptInput = document.querySelector('#hours-slept-input');
let hydrationCalendarCard = document.querySelector('.hydration-calendar-card');
let hydrationCalendarCardBox = document.querySelector('#hydration-calendar-card-box');
let hydrationForm = document.querySelector('.hydration-form');
let hydrationFriendOuncesToday = document.querySelector('#hydration-friend-ounces-today');
let hydrationFriendsCard = document.querySelector('#hydration-friends-card');
let hydrationInfoCard = document.querySelector('#hydration-info-card');
let hydrationInfoGlassesToday = document.querySelector('#hydration-info-glasses-today');
let hydrationMainCard = document.querySelector('#hydration-main-card');
let hydrationUserOuncesToday = document.querySelector('#hydration-user-ounces-today');
let mainPage = document.querySelector('main');
let ouncesDrankInput = document.querySelector('#hydration-ounces');
let profileButton = document.querySelector('#profile-button');
let sleepCalendarCard = document.querySelector('#sleep-calendar-card');
let sleepCalendarHoursAverageWeekly = document.querySelector('#sleep-calendar-hours-average-weekly');
let sleepCalendarQualityAverageWeekly = document.querySelector('#sleep-calendar-quality-average-weekly');
let sleepForm = document.querySelector('.sleep-form');
let sleepFriendLongestSleeper = document.querySelector('#sleep-friend-longest-sleeper');
let sleepFriendsCard = document.querySelector('#sleep-friends-card');
let sleepFriendWorstSleeper = document.querySelector('#sleep-friend-worst-sleeper');
let sleepInfoCard = document.querySelector('#sleep-info-card');
let sleepInfoHoursAverageAlltime = document.querySelector('#sleep-info-hours-average-alltime');
let sleepInfoQualityAverageAlltime = document.querySelector('#sleep-info-quality-average-alltime');
let sleepInfoQualityToday = document.querySelector('#sleep-info-quality-today');
let sleepMainCard = document.querySelector('#sleep-main-card');
let sleepQualityInput = document.querySelector('#sleep-quality-input');
let sleepUserHoursToday = document.querySelector('#sleep-user-hours-today');
let stairsCalendarCard = document.querySelector('#stairs-calendar-card');
let stairsCalendarFlightsAverageWeekly = document.querySelector('#stairs-calendar-flights-average-weekly');
let stairsCalendarStairsAverageWeekly = document.querySelector('#stairs-calendar-stairs-average-weekly');
let stairsFriendFlightsAverageToday = document.querySelector('#stairs-friend-flights-average-today');
let stairsFriendsCard = document.querySelector('#stairs-friends-card');
let stairsInfoCard = document.querySelector('#stairs-info-card');
let stairsInfoFlightsToday = document.querySelector('#stairs-info-flights-today');
let stairsMainCard = document.querySelector('#stairs-main-card');
let stairsTrendingButton = document.querySelector('.stairs-trending-button');
let stairsTrendingCard = document.querySelector('#stairs-trending-card');
let stairsUserStairsToday = document.querySelector('#stairs-user-stairs-today');
let stepsCalendarCard = document.querySelector('#steps-calendar-card');
let stepsCalendarTotalActiveMinutesWeekly = document.querySelector('#steps-calendar-total-active-minutes-weekly');
let stepsCalendarTotalStepsWeekly = document.querySelector('#steps-calendar-total-steps-weekly');
let stepsFriendActiveMinutesAverageToday = document.querySelector('#steps-friend-active-minutes-average-today');
let stepsFriendAverageStepGoal = document.querySelector('#steps-friend-average-step-goal');
let stepsFriendsCard = document.querySelector('#steps-friends-card');
let stepsFriendStepsAverageToday = document.querySelector('#steps-friend-steps-average-today');
let stepsInfoActiveMinutesToday = document.querySelector('#steps-info-active-minutes-today');
let stepsInfoCard = document.querySelector('#steps-info-card');
let stepsInfoMilesWalkedToday = document.querySelector('#steps-info-miles-walked-today');
let stepsMainCard = document.querySelector('#steps-main-card');
let stepsTrendingButton = document.querySelector('.steps-trending-button');
let stepsTrendingCard = document.querySelector('#steps-trending-card');
let stepsUserStepsToday = document.querySelector('#steps-user-steps-today');
let submitActivityButton = document.querySelector('#submit-activity');
let submitHydrationButton = document.querySelector('#submit-hydration');
let submitSleepButton = document.querySelector('#submit-sleep');
let trendingStairsPhraseContainer = document.querySelector('.trending-stairs-phrase-container');
let trendingStepsPhraseContainer = document.querySelector('.trending-steps-phrase-container');
let userInfoDropdown = document.querySelector('#user-info-dropdown');
let inputDate = document.querySelector('#input-date');


/***/ }),

/***/ "./src/css/_base.scss":
/*!****************************!*\
  !*** ./src/css/_base.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./_base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/_base.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/css/styles.scss":
/*!*****************************!*\
  !*** ./src/css/styles.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/images/hydration-calendar.png":
/*!*******************************************!*\
  !*** ./src/images/hydration-calendar.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/hydration-calendar.png";

/***/ }),

/***/ "./src/images/hydration-friends.png":
/*!******************************************!*\
  !*** ./src/images/hydration-friends.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/hydration-friends.png";

/***/ }),

/***/ "./src/images/hydration-goback.png":
/*!*****************************************!*\
  !*** ./src/images/hydration-goback.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/hydration-goback.png";

/***/ }),

/***/ "./src/images/hydration-info.png":
/*!***************************************!*\
  !*** ./src/images/hydration-info.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/hydration-info.png";

/***/ }),

/***/ "./src/images/profile.png":
/*!********************************!*\
  !*** ./src/images/profile.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/profile.png";

/***/ }),

/***/ "./src/images/sleep-calendar.png":
/*!***************************************!*\
  !*** ./src/images/sleep-calendar.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/sleep-calendar.png";

/***/ }),

/***/ "./src/images/sleep-friends.png":
/*!**************************************!*\
  !*** ./src/images/sleep-friends.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/sleep-friends.png";

/***/ }),

/***/ "./src/images/sleep-goback.png":
/*!*************************************!*\
  !*** ./src/images/sleep-goback.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/sleep-goback.png";

/***/ }),

/***/ "./src/images/sleep-info.png":
/*!***********************************!*\
  !*** ./src/images/sleep-info.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/sleep-info.png";

/***/ }),

/***/ "./src/images/stairs-calendar.png":
/*!****************************************!*\
  !*** ./src/images/stairs-calendar.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/stairs-calendar.png";

/***/ }),

/***/ "./src/images/stairs-friends.png":
/*!***************************************!*\
  !*** ./src/images/stairs-friends.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/stairs-friends.png";

/***/ }),

/***/ "./src/images/stairs-goback.png":
/*!**************************************!*\
  !*** ./src/images/stairs-goback.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/stairs-goback.png";

/***/ }),

/***/ "./src/images/stairs-info.png":
/*!************************************!*\
  !*** ./src/images/stairs-info.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/stairs-info.png";

/***/ }),

/***/ "./src/images/stairs-trending.png":
/*!****************************************!*\
  !*** ./src/images/stairs-trending.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/stairs-trending.png";

/***/ }),

/***/ "./src/images/steps-calendar.png":
/*!***************************************!*\
  !*** ./src/images/steps-calendar.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/steps-calendar.png";

/***/ }),

/***/ "./src/images/steps-friends.png":
/*!**************************************!*\
  !*** ./src/images/steps-friends.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/steps-friends.png";

/***/ }),

/***/ "./src/images/steps-goback.png":
/*!*************************************!*\
  !*** ./src/images/steps-goback.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/steps-goback.png";

/***/ }),

/***/ "./src/images/steps-info.png":
/*!***********************************!*\
  !*** ./src/images/steps-info.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/steps-info.png";

/***/ }),

/***/ "./src/images/steps-trending.png":
/*!***************************************!*\
  !*** ./src/images/steps-trending.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/steps-trending.png";

/***/ }),

/***/ "./src/model/Activity.js":
/*!*******************************!*\
  !*** ./src/model/Activity.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Activity; });
class Activity {
  constructor(data, userRepository) {
    this.userId = data.userID;
    this.date = data.date;
    this.steps = data.numSteps;
    this.minutesActive = data.minutesActive;
    this.flightsOfStairs = data.flightsOfStairs;
    this.milesWalked = 0;
  }
}


/***/ }),

/***/ "./src/model/ActivityRepository.js":
/*!*****************************************!*\
  !*** ./src/model/ActivityRepository.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActivityRepository; });
/* harmony import */ var _Activity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Activity */ "./src/model/Activity.js");


class ActivityRepository {
  constructor(activityData, userStrideLength, userStepGoal) {
    this.rawActivityData = activityData
    this.activityHistory = [];
    this.userStepGoal = userStepGoal;
    this.userStrideLength = userStrideLength;
    this.totalStepsThisWeek = 0;
    this.accomplishedDays = [];
    this.trendingStepDays = [];
    this.trendingStairsDays = [];
  }

  start() {
    this.rawActivityData.forEach(rawActivity => {
      this.createNewActivity(rawActivity);
    });
  }

  createNewActivity(rawActivity) {
    let activity = new _Activity__WEBPACK_IMPORTED_MODULE_0__["default"](rawActivity);
    this.activityHistory.push(activity);
    this.updateStats();
  }

  updateStats() {
    this.findAccomplishedStepDays();
    this.findStairClimbingRecord();
    this.findTrendingStairsDays();
    this.findTrendingStepDays();
  }

  findSteps(date) {
    let stepDate = this.activityHistory.find(activity => {
      return activity.date === date;
    })

    if (stepDate !== undefined) {
      return stepDate.steps;
    } else {
      return 'N/A';
    }
  }

  findStairs(date) {
    let stairsDate = this.activityHistory.find(activity => {
      return activity.date === date;
    })

    if (stairsDate !== undefined) {
      return stairsDate.flightsOfStairs * 12
    } else {
      return 'N/A'
    }
  }

  findFlightsOfStairs(date) {
    let flightsDate = this.activityHistory.find(activity => {
      return activity.date === date;
    })

    if (flightsDate !== undefined) {
      return ((flightsDate.flightsOfStairs)).toFixed(1);
    } else {
      return 'N/A'
    }
  }

  calculateMilesWalked(todayDate) {
    let todayActivity = this.activityHistory.find(activity => {
      return activity.date === todayDate
    })
    if (todayActivity !== undefined) {
      return ((todayActivity.steps * this.userStrideLength) / 5280).toFixed(1);
    } else {
      return 'N/A';
    }
  }

  calculateActiveMinutes(todayDate) {
    let todayActivity = this.activityHistory.find(activity => {
      return activity.date === todayDate;
    })

    if (todayActivity !== undefined) {
      return todayActivity.minutesActive;
    } else {
      return 'N/A';
    }
  }

  averageWeeklyMinutesActive(todayDate) {
    return (this.activityHistory.reduce((sum, activity) => {
      let index = this.activityHistory.indexOf(this.activityHistory.find(activity => activity.date === todayDate));
      if (index <= this.activityHistory.indexOf(activity) && this.activityHistory.indexOf(activity) <= (index + 6)) {
        sum += activity.minutesActive;
      }
      return sum;
    }, 0) / 7).toFixed(1);
  }

  reachStepGoal(todayDate) {
    let todayActivity = this.activityHistory.find(activity => {
      return activity.date === todayDate;
    })

    return (todayActivity.steps >= this.userStepGoal) ? true : false;
  }

  findAccomplishedStepDays() {
    let goodStepDays = this.activityHistory.filter(activity => {
      return activity.steps >= this.userStepGoal;
    })
    this.accomplishedDays = goodStepDays.map(activity => {
      return activity = {
        date: activity.date
      }
    })
  }

  findStairClimbingRecord() {
    let record = 0;
    this.activityHistory.forEach(activity => {
      if (activity.flightsOfStairs > record) {
        record = activity.flightsOfStairs;
      }
    })
    return record;
  }

  findTrendingStairsDays() {
   let positiveDays = [];
   this.activityHistory.forEach(activity => {
     if (positiveDays.length === 0) {
       positiveDays.push(activity)
     } else if (positiveDays[0].flightsOfStairs < activity.flightsOfStairs) {
       positiveDays.unshift(activity);
     } else if (positiveDays[0].flightsOfStairs > activity.flightsOfStairs) {
       positiveDays = [activity]
     }
     if (positiveDays.length > 2) {
       this.trendingStairsDays = positiveDays;
     }
   })
   if (this.trendingStairsDays.length > 2) {
     return `Your most recent positive climbing streak was ${this.trendingStairsDays[this.trendingStairsDays.length - 1].date} - ${this.trendingStairsDays[0].date}!`
   } else {
     return 'N/A';
   }
 }

  findTrendingStepDays() {
    let positiveDays = [];
    this.activityHistory.forEach(activity => {
      if (positiveDays.length === 0) {
        positiveDays.push(activity)
      } else if (positiveDays[0].steps < activity.steps) {
        positiveDays.unshift(activity);
      } else if (positiveDays[0].steps > activity.steps) {
        positiveDays = [activity]
      }
      if (positiveDays.length > 2) {
        this.trendingStepDays = positiveDays;
      }
    })
    if (this.trendingStepDays.length > 2) {
      return `Your most recent positive step streak was ${this.trendingStepDays[this.trendingStepDays.length - 1].date} - ${this.trendingStepDays[0].date}!`
    } else {
      return 'N/A'
    }
  }

  calculateAverageStepsThisWeek(todayDate) {
    return (this.activityHistory.reduce((sum, activity) => {
      let index = this.activityHistory.indexOf(this.activityHistory.find(activity => activity.date === todayDate));
      if (index >= this.activityHistory.indexOf(activity) && this.activityHistory.indexOf(activity) <= (index + 6)) {
        sum += activity.steps;
      }
      return sum;
    }, 0) / 7).toFixed(0);
  }

  calculateAverageStairsThisWeek(todayDate) {
    let stairs = (this.activityHistory.reduce((sum, activity) => {
      let index = this.activityHistory.indexOf(this.activityHistory.find(activity => activity.date === todayDate));
      if (index >= this.activityHistory.indexOf(activity) && this.activityHistory.indexOf(activity) <= (index + 6)) {
        sum += activity.flightsOfStairs;
      }
      return sum;
    }, 0) / 7).toFixed(0);

    return parseInt(stairs);
  }

  calculateDailyCalories(date) {
    let totalMinutes = this.activityHistory.filter(activity => {
      return activity.date === date
    }).reduce((sumMinutes, activity) => {
      return sumMinutes += activity.minutesActive
    }, 0);
    return Math.round(totalMinutes * 7.6);
  }

  calculateTotalStepsThisWeek(todayDate) {
    this.totalStepsThisWeek = (this.activityHistory.reduce((sum, activity) => {
      let index = this.activityHistory.indexOf(this.activityHistory.find(activity => activity.date === todayDate));
      if (index >= this.activityHistory.indexOf(activity) && this.activityHistory.indexOf(activity) <= (index + 6)) {
        sum += activity.steps;
      }
      return sum;
    }, 0));
  }
}


/***/ }),

/***/ "./src/model/Hydration.js":
/*!********************************!*\
  !*** ./src/model/Hydration.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hydration; });
class Hydration {
  constructor(data) {
    this.userId = data.userID;
    this.date = data.date;
    this.ounces = data.numOunces;
  }

  createJSONObj() {
    return {
      userId: this.userID,
      date: this.date,
      numOunces: this.ounces
    }
  }
}


/***/ }),

/***/ "./src/model/HydrationRepository.js":
/*!******************************************!*\
  !*** ./src/model/HydrationRepository.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HydrationRepository; });
/* harmony import */ var _Hydration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hydration */ "./src/model/Hydration.js");


class HydrationRepository {
  constructor(hydrationData) {
    this.rawHydrationData = hydrationData
    this.hydrationHistory = [];
    this.ouncesAverage = 0;
    this.ouncesRecord = [];
  }

  start() {
    this.rawHydrationData.forEach(rawHydration => {
      this.createNewHydration(rawHydration);
    });
  }

  createNewHydration(rawHydration) {
    let hydration = new _Hydration__WEBPACK_IMPORTED_MODULE_0__["default"](rawHydration);
    this.hydrationHistory.push(hydration);
    this.updateStats();
  }

  updateStats() {
    this.createOuncesRecord();
    this.averageDailyOunces();
  }

  createOuncesRecord() {
    this.ouncesRecord = this.hydrationHistory.map(hydration => {
      return hydration = {[hydration.date]: hydration.ounces};
    })
  }

  averageDailyOunces() {
    let totalDailyOunces = this.hydrationHistory.reduce((totalOunces, hydration) => {
      totalOunces += hydration.ounces;
      return totalOunces;
    }, 0)
    this.ouncesAverage = (totalDailyOunces / this.hydrationHistory.length).toFixed(1);
  }

  findOunces(todayDate) {
    let todayHydration = this.ouncesRecord.find(hydration => {
      let dateKey = Object.keys(hydration)
      return dateKey[0] === todayDate
    })
    if (todayHydration !== undefined) {
      return todayHydration[todayDate];
    } else {
      return 'N/A'
    }
  }

  findGlasses(todayDate) {
    let todayHydration = this.ouncesRecord.find(hydration => {
      let dateKey = Object.keys(hydration)
      return dateKey[0] === todayDate
    })
    if (todayHydration !== undefined) {
      return (todayHydration[todayDate]) / 8;
    } else {
      return 'N/A'
    }
  }

  findWeeklyOunces(todayDate) {
    return this.hydrationHistory.reduce((acc, hydration) => {
      let index = this.hydrationHistory.indexOf(this.hydrationHistory.find(hydration => hydration.date === todayDate));
      if (index <= this.hydrationHistory.indexOf(hydration) && this.hydrationHistory.indexOf(hydration) <= (index + 6)) {
        acc.unshift(hydration);
      }

      return acc
    }, [])
  }
}


/***/ }),

/***/ "./src/model/Sleep.js":
/*!****************************!*\
  !*** ./src/model/Sleep.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sleep; });
class Sleep {
  constructor(userSleepData) {
    this.userID = userSleepData.userID;
    this.date = userSleepData.date;
    this.hoursSlept = userSleepData.hoursSlept;
    this.sleepQuality = userSleepData.sleepQuality;
  }
}


/***/ }),

/***/ "./src/model/SleepRepository.js":
/*!**************************************!*\
  !*** ./src/model/SleepRepository.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SleepRepository; });
/* harmony import */ var _Sleep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sleep */ "./src/model/Sleep.js");


class SleepRepository {
  constructor(sleepData) {
    this.rawSleepData = sleepData;
    this.sleepHistory = [];
    this.hoursSleptAverage = 0;
    this.sleepQualityAverage = 0;
    this.sleepHoursRecord = [];
    this.sleepQualityRecord = [];
  }

  start() {
    this.rawSleepData.forEach(rawSleep => {
      this.createNewSleep(rawSleep);
    });
  }

  createNewSleep(rawSleep) {
    let sleep = new _Sleep__WEBPACK_IMPORTED_MODULE_0__["default"](rawSleep);
    this.sleepHistory.push(sleep);
    this.updateStats();
  }

  updateStats() {
    this.createSleepHoursRecord();
    this.createSleepQualityRecord();
    this.updateHoursSleptAverage();
    this.updateSleepQualityAverage();
  }

  createSleepHoursRecord() {
    this.sleepHoursRecord = this.sleepHistory.map(sleep => {
      return sleep = {date: sleep.date, hours: sleep.hoursSlept};
    })
  }

  createSleepQualityRecord() {
    this.sleepQualityRecord = this.sleepHistory.map(sleep => {
      return sleep = {date: sleep.date, sleepQuality: sleep.sleepQuality};
    })
  }

  findHoursSlept(date) {
    let sleepDate = this.sleepHistory.find(sleep => {
      return sleep.date === date;
    })
    if (sleepDate !== undefined) {
      return sleepDate.hoursSlept;
    } else {
      return 'N/A'
    }
  }

  findSleepQuality(date) {
    let sleepDate = this.sleepHistory.find(sleep => {
      return sleep.date === date;
    })
    if (sleepDate !== undefined) {
      return sleepDate.sleepQuality;
    } else {
      return 'N/A'
    }
  }

  updateHoursSleptAverage() {
    let totalSleepHours = this.sleepHistory.reduce((totalHours, sleep) => {
      totalHours += sleep.hoursSlept;
      return totalHours;
    }, 0)
    this.hoursSleptAverage = (totalSleepHours / this.sleepHistory.length).toFixed(1);
  }

  updateSleepQualityAverage() {
    let totalSleepQuality = this.sleepHistory.reduce((totalQuality, sleep) => {
      totalQuality += sleep.sleepQuality;
      return totalQuality;
    }, 0)
    this.sleepQualityAverage = (totalSleepQuality / this.sleepHistory.length).toFixed(1);
  }

  averageWeeklySleepHours(todayDate) {
    return (this.sleepHoursRecord.reduce((sum, sleepAct) => {
      let index = this.sleepHoursRecord.indexOf(this.sleepHoursRecord.find(sleep => sleep.date === todayDate));
      if (index >= this.sleepHoursRecord.indexOf(sleepAct) && this.sleepHoursRecord.indexOf(sleepAct) <= (index + 6)) {
        sum += sleepAct.hours;
      }
      return sum;
    }, 0) / 7).toFixed(1);
  }

  averageWeeklySleepQuality(todayDate) {
    return (this.sleepQualityRecord.reduce((sum, sleepAct) => {
      let index = this.sleepQualityRecord.indexOf(this.sleepQualityRecord.find(sleep => sleep.date === todayDate));
      if (index >= this.sleepQualityRecord.indexOf(sleepAct) && this.sleepQualityRecord.indexOf(sleepAct) <= (index + 6)) {
        sum += sleepAct.sleepQuality;
      }
      return sum;
    }, 0) / 7).toFixed(1);
  }
}


/***/ }),

/***/ "./src/model/User.js":
/*!***************************!*\
  !*** ./src/model/User.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return User; });
/* harmony import */ var _SleepRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SleepRepository */ "./src/model/SleepRepository.js");
/* harmony import */ var _ActivityRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActivityRepository */ "./src/model/ActivityRepository.js");
/* harmony import */ var _HydrationRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HydrationRepository */ "./src/model/HydrationRepository.js");




 class User {
  constructor(userData, sleepData, activityData, hydrationData) {
    this.id = userData.id;
    this.name = userData.name;
    this.address = userData.address;
    this.email = userData.email;
    this.strideLength = userData.strideLength;
    this.dailyStepGoal = userData.dailyStepGoal;
    this.friends = userData.friends;
    this.sleepRepository = new _SleepRepository__WEBPACK_IMPORTED_MODULE_0__["default"](sleepData);
    this.activityRepository = new _ActivityRepository__WEBPACK_IMPORTED_MODULE_1__["default"](activityData, userData.strideLength, userData.dailyStepGoal)
    this.hydrationRepository = new _HydrationRepository__WEBPACK_IMPORTED_MODULE_2__["default"](hydrationData)
    this.friendsNames = [];
  }

  getFirstName() {
    var names = this.name.split(' ');
    return names[0].toUpperCase();
  }

  findFriendsNames(users) {
    this.friends.forEach(friend => {
      this.friendsNames.push(users.find(user => user.id === friend).getFirstName());
    })
  }

}


/***/ }),

/***/ "./src/model/UserRepository.js":
/*!*************************************!*\
  !*** ./src/model/UserRepository.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserRepository; });
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ "./src/model/User.js");


class UserRepository {
  constructor(userData, sleepData, activityData, hydrationData) {
    this.users = [];
    this.rawUserData = userData;
    this.rawSleepData = sleepData;
    this.rawActivityData = activityData;
    this.rawHydrationData = hydrationData;
  }

  start() {
    this.createUsers();
    this.users.forEach(user => {
      user.sleepRepository.start()
      user.activityRepository.start()
      user.hydrationRepository.start()
    })
  }

  createUsers() {
    this.rawUserData.forEach(rawUser => {
      let userSleepData = this.filterUserSleepData(rawUser.id);
      let userActivityData = this.filterUserActivityData(rawUser.id);
      let userHydrationData = this.filterUserHydrationData(rawUser.id);
      let user = new _User__WEBPACK_IMPORTED_MODULE_0__["default"](rawUser, userSleepData, userActivityData, userHydrationData);
      this.users.push(user);
    })
  }

  filterUserSleepData(id) {
    return this.rawSleepData.filter(sleep => {
      return sleep.userID === id;
    })
  }

  filterUserActivityData(id) {
    return this.rawActivityData.filter(activity => {
      return activity.userID === id;
    })
  }

  filterUserHydrationData(id) {
    return this.rawHydrationData.filter(hydration => {
      return hydration.userID === id;
    })
  }

  getUser(id) {
    return this.users.find(user => {
      return user.id === id;
    })
  }

  calculateAverageStepGoal() {
    let goals = this.users.map(user => {
      return user.dailyStepGoal;
    });
    let total = goals.reduce((sum, goal) => {
      sum += goal;
      return sum;
    }, 0);
    return total / this.users.length;
  }

  calculateAverageSleepQuality() {
    let totalSleepQuality = this.users.reduce((sum, user) => {
      sum += user.sleepRepository.sleepQualityAverage;
      return sum;
    }, 0);
    return totalSleepQuality / this.users.length;
  }

  calculateAverageSteps(date) {
    let allUsersStepsCount = this.users.map(user => {
      return user.activityRepository.activityHistory.filter(activity => {
        return activity.date === date;
      });
    })
    let sumOfSteps = allUsersStepsCount.reduce((stepsSum, activityCollection) => {
      activityCollection.forEach(activity => {
        stepsSum += activity.steps
      })
      return stepsSum;
    }, 0);
    return Math.round(sumOfSteps / allUsersStepsCount.length);
  }

  calculateAverageStairs(date) {
    let allUsersStairsCount = this.users.map(user => {
      return user.activityRepository.activityHistory.filter(activity => {
        return activity.date === date;
      });
    })
    let sumOfStairs = allUsersStairsCount.reduce((stairsSum, activityCollection) => {
      activityCollection.forEach(activity => {
        stairsSum += activity.flightsOfStairs
      })
      return stairsSum;
    }, 0);
    return Math.round(sumOfStairs / allUsersStairsCount.length);
  }

  calculateAverageMinutesActive(date) {
    let allUsersMinutesActiveCount = this.users.map(user => {
      return user.activityRepository.activityHistory.filter(activity => {
        return activity.date === date;
      });
    })
    let sumOfMinutesActive = allUsersMinutesActiveCount.reduce((minutesActiveSum, activityCollection) => {
      activityCollection.forEach(activity => {
        minutesActiveSum += activity.minutesActive
      })
      return minutesActiveSum;
    }, 0);
    return Math.round(sumOfMinutesActive / allUsersMinutesActiveCount.length);
  }

  calculateAverageDailyWater(date) {
    let todaysDrinkers = this.users.filter(user => {
      return user.hydrationRepository.findOunces(date) > 0;
    });

    let ouncesConsumed = todaysDrinkers.reduce((sum, user) => {
      return sum += user.hydrationRepository.findOunces(date);
    }, 0);

    return Math.floor(parseInt(ouncesConsumed) / todaysDrinkers.length);
  }

  calculateAllOunces(date) {
    let todaysDrinkers = this.users.filter(user => {
      return user.hydrationRepository.findOunces(date) > 0;
    });

    return todaysDrinkers.reduce((sum, user) => {
      return sum += user.hydrationRepository.findOunces(date);
    }, 0);
  }

  findBestSleepers(date) {
    let bestSleepers = this.users.filter(user => {
      return user.sleepRepository.averageWeeklySleepQuality(date) > 3;
    });

    return bestSleepers.map(user => {
      let avgSleepQuality = user.sleepRepository.averageWeeklySleepQuality(date);
      return user = {name: user.name, averageWeekSleepQuality: avgSleepQuality};
    });
  }

  getLongestSleeper(date) {
    let sleepsOnDate = this.users.map(user => {
      return user.sleepRepository.sleepHistory.find(sleep => {
        return sleep.date === date;
      })
    });

    let longestSleepers = sleepsOnDate.sort((a, b) => {
      return b.hoursSlept - a.hoursSlept;
    });

    if (longestSleepers[0] !== undefined) {
      let longestSleeper = this.getUser(longestSleepers[0].userID);
      return longestSleeper
    } else {
      return 'N/A'
    }
  }

  getWorstSleeper(date) {
    let sleepsOnDate = this.users.map(user => {
      return user.sleepRepository.sleepHistory.find(sleep => {
        return sleep.date === date;
      })
    });

    let shortestSleepers = sleepsOnDate.sort((a, b) => {
      return a.hoursSlept - b.hoursSlept;
    });

    if (shortestSleepers[0] !== undefined) {
      let shortestSleeper = this.getUser(shortestSleepers[0].userID);
      return shortestSleeper
    } else {
      return 'N/A'
    }
  }

  getFriendsSteps(userID, todayDate) {
    let userInfo = this.users.find(user => {
      return user.id === userID;
    })
    let userFriends = userInfo.friends;
    let friends = [];
    let friendInfo = this.users.forEach(user => {
      userFriends.forEach(friendID => {
        if (user.id === friendID) {
          friends.push(user)
        }
      })
    })

    let friendsSteps = friends.map(friend => {
      return friend = {
        id: friend.id, name: friend.getFirstName(), steps: friend.activityRepository.findSteps(todayDate)
      }
  })
    console.log(friendsSteps);
    return friendsSteps;
  }
}


/***/ }),

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/_base.scss */ "./src/css/_base.scss");
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_base_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/styles.scss */ "./src/css/styles.scss");
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_styles_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DOMelements.js */ "./src/DOMelements.js");
/* harmony import */ var _model_UserRepository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/UserRepository */ "./src/model/UserRepository.js");
/* harmony import */ var _service_UserService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/UserService */ "./src/service/UserService.js");
/* harmony import */ var _service_SleepService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/SleepService */ "./src/service/SleepService.js");
/* harmony import */ var _service_ActivityService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/ActivityService */ "./src/service/ActivityService.js");
/* harmony import */ var _service_HydrationService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/HydrationService */ "./src/service/HydrationService.js");











let userRepository;
let user;
let todayDate = "2019/06/15";
let userDateInput;
let userService;
let sleepService;
let activityService;
let hydrationService;

window.onload = instantiateServices();

_DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["addActivityButton"].addEventListener('click', showActivityForm);
_DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["addHydrationButton"].addEventListener('click', showHydrationForm);
_DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["addSleepButton"].addEventListener('click', showSleepData);
_DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["mainPage"].addEventListener('click', showInfo);
_DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["profileButton"].addEventListener('click', showDropdown);
_DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["stairsTrendingButton"].addEventListener('click', updateTrendingStairsDays);
_DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["stepsTrendingButton"].addEventListener('click', updateTrendingStepDays);
_DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["submitActivityButton"].addEventListener('click', postActivityData);
_DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["submitHydrationButton"].addEventListener('click', postHydrationData);
_DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["submitSleepButton"].addEventListener('click', postSleepData);
_DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["calendarInput"].addEventListener('change', (event) => {
  let formatDate = `${event.target.value}`.split('-');
  todayDate = formatDate.join('/');
  updateAllDisplays();
});
_DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["inputDate"].addEventListener('change', (event) => {
  let formatDate = `${event.target.value}`.split('-');
  userDateInput = formatDate.join('/');
});

function instantiateServices() {
  userService = new _service_UserService__WEBPACK_IMPORTED_MODULE_4__["default"]('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/users/userData', 'userData');
  sleepService = new _service_SleepService__WEBPACK_IMPORTED_MODULE_5__["default"]('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/sleep/sleepData', 'sleepData');
  activityService = new _service_ActivityService__WEBPACK_IMPORTED_MODULE_6__["default"]('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/activity/activityData', 'activityData');
  hydrationService = new _service_HydrationService__WEBPACK_IMPORTED_MODULE_7__["default"]('https://fe-apps.herokuapp.com/api/v1/fitlit/1908/hydration/hydrationData', 'hydrationData');
  fetchAllData();
}

function fetchAllData() {
  let userPromise = userService.fetchData();
  let sleepPromise = sleepService.fetchData();
  let activityPromise = activityService.fetchData();
  let hydrationPromise = hydrationService.fetchData();

  Promise.all([userPromise, sleepPromise, activityPromise, hydrationPromise])
    .then(data => userRepository = new _model_UserRepository__WEBPACK_IMPORTED_MODULE_3__["default"](data[0], data[1], data[2], data[3]))
    .then(() => loadPage())
    .catch(err => alert(`Sorry! Data cannot be loaded at this time ${err}`))
}

function loadPage() {
  userRepository.start();
  launchApp();
}

function launchApp() {
  getRandomUser();
  user.findFriendsNames(userRepository.users);
  updateAllDisplays();
}

function getRandomUser() {
  let randomIndex = Math.floor(Math.random() * 50);
  user = userRepository.users[randomIndex];
}

function flipCard(cardToHide, cardToShow) {
  cardToHide.classList.add('hide');
  cardToShow.classList.remove('hide');
}

function showDropdown() {
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["userInfoDropdown"].classList.toggle('hide');
}

function showInfo() {
  displaySleepInfo();
  displayActivityInfo();
  displayHydrationInfo();
}

function displaySleepInfo() {
  if (event.target.classList.contains('sleep-info-button')) {
    flipCard(_DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["sleepMainCard"], _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["sleepInfoCard"]);
  }
  if (event.target.classList.contains('sleep-friends-button')) {
    flipCard(_DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["sleepMainCard"], _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["sleepFriendsCard"]);
  }
  if (event.target.classList.contains('sleep-calendar-button')) {
    flipCard(_DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["sleepMainCard"], _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["sleepCalendarCard"]);
  }
  if (event.target.classList.contains('sleep-go-back-button')) {
    flipCard(event.target.parentNode, _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["sleepMainCard"]);
  }
}

function displayActivityInfo() {
  if (event.target.classList.contains('steps-info-button')) {
    flipCard(_DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["stepsMainCard"], _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["stepsInfoCard"]);
  }
  if (event.target.classList.contains('steps-friends-button')) {
    flipCard(_DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["stepsMainCard"], _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["stepsFriendsCard"]);
  }
  if (event.target.classList.contains('steps-trending-button')) {
    flipCard(_DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["stepsMainCard"], _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["stepsTrendingCard"]);
  }
  if (event.target.classList.contains('steps-calendar-button')) {
    flipCard(_DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["stepsMainCard"], _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["stepsCalendarCard"]);
  }
  if (event.target.classList.contains('stairs-info-button')) {
    flipCard(_DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["stairsMainCard"], _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["stairsInfoCard"]);
  }
  if (event.target.classList.contains('stairs-friends-button')) {
    flipCard(_DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["stairsMainCard"], _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["stairsFriendsCard"]);
  }
  if (event.target.classList.contains('stairs-trending-button')) {
    flipCard(_DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["stairsMainCard"], _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["stairsTrendingCard"]);
  }
  if (event.target.classList.contains('stairs-calendar-button')) {
    flipCard(_DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["stairsMainCard"], _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["stairsCalendarCard"]);
  }
  if (event.target.classList.contains('steps-go-back-button')) {
    flipCard(event.target.parentNode, _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["stepsMainCard"]);
  }
  if (event.target.classList.contains('stairs-go-back-button')) {
    flipCard(event.target.parentNode, _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["stairsMainCard"]);
  }
}

function displayHydrationInfo() {
  if (event.target.classList.contains('hydration-info-button')) {
    flipCard(_DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["hydrationMainCard"], _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["hydrationInfoCard"]);
  }
  if (event.target.classList.contains('hydration-friends-button')) {
    flipCard(_DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["hydrationMainCard"], _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["hydrationFriendsCard"]);
  }
  if (event.target.classList.contains('hydration-calendar-button')) {
    flipCard(_DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["hydrationMainCard"], _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["hydrationCalendarCard"]);
  }
  if (event.target.classList.contains('hydration-go-back-button')) {
    flipCard(event.target.parentNode, _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["hydrationMainCard"]);
  }
}

function updateAllDisplays() {
  updateUserDisplay();
  updateUserSleepDisplay();
  updateUserStepDisplay();
  updateUserStairDisplay();
  updateUserHydrationDisplay();
  updateUserFriendsDisplay();
}

function updateUserDisplay() {
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["dropdownGoal"].innerText = `DAILY STEP GOAL | ${user.dailyStepGoal}`;
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["dropdownCalories"].innerText = `DAILY CALORIES BURNED | ${user.activityRepository.calculateDailyCalories(todayDate)}`
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["dropdownEmail"].innerText = `EMAIL | ${user.email}`;
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["dropdownName"].innerText = user.name.toUpperCase();
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["headerName"].innerText = `${user.getFirstName()}'S `;
}

function updateUserSleepDisplay() {
  let longestSleeper = userRepository.getLongestSleeper(todayDate);
  let worstSleeper = userRepository.getWorstSleeper(todayDate);
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["sleepInfoHoursAverageAlltime"].innerText = user.sleepRepository.hoursSleptAverage;
  if (typeof longestSleeper === 'string') {
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["sleepFriendLongestSleeper"].innerText = longestSleeper;
  } else {
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["sleepFriendLongestSleeper"].innerText = longestSleeper.getFirstName();
  }
  if (typeof worstSleeper === 'string') {
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["sleepFriendWorstSleeper"].innerText = worstSleeper;
  } else {
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["sleepFriendWorstSleeper"].innerText = worstSleeper.getFirstName();
  }
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["sleepInfoQualityAverageAlltime"].innerText = user.sleepRepository.sleepQualityAverage;
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["sleepCalendarHoursAverageWeekly"].innerText = user.sleepRepository.averageWeeklySleepHours(todayDate);
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["sleepCalendarQualityAverageWeekly"].innerText = user.sleepRepository.averageWeeklySleepQuality(todayDate);
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["sleepUserHoursToday"].innerText = user.sleepRepository.findHoursSlept(todayDate);
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["sleepInfoQualityToday"].innerText = user.sleepRepository.findSleepQuality(todayDate);
}

function updateUserStepDisplay() {
  updateUserStepInfoCard();
  updateUserStepFriendsCard();
  updateTrendingStepDays();
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["stepsCalendarTotalActiveMinutesWeekly"].innerText = user.activityRepository.averageWeeklyMinutesActive(todayDate);
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["stepsCalendarTotalStepsWeekly"].innerText = user.activityRepository.calculateAverageStepsThisWeek(todayDate);
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["stepsInfoActiveMinutesToday"].innerText = user.activityRepository.calculateActiveMinutes(todayDate);
}

function updateUserStepInfoCard() {
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["stepsUserStepsToday"].innerText = user.activityRepository.findSteps(todayDate);

  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["stepsInfoMilesWalkedToday"].innerText = user.activityRepository.calculateMilesWalked(todayDate);
}

function updateUserStepFriendsCard() {
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["stepsFriendActiveMinutesAverageToday"].innerText = userRepository.calculateAverageMinutesActive(todayDate);
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["stepsFriendStepsAverageToday"].innerText = userRepository.calculateAverageSteps(todayDate);
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["stepsFriendAverageStepGoal"].innerText = userRepository.calculateAverageStepGoal();
}

function updateUserStairDisplay() {
  updateUserStairInfoCard();
  updateUserStairFriendsCard();
  updateTrendingStairsDays();
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["stairsCalendarFlightsAverageWeekly"].innerText = user.activityRepository.calculateAverageStairsThisWeek(todayDate);
}

function updateUserStairInfoCard() {
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["stairsUserStairsToday"].innerText = user.activityRepository.findStairs(todayDate);
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["stairsInfoFlightsToday"].innerText = user.activityRepository.findFlightsOfStairs(todayDate);
}

function updateUserStairFriendsCard() {
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["stairsCalendarStairsAverageWeekly"].innerText = (userRepository.calculateAverageStairs(todayDate) * 12).toFixed(0);
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["stairsFriendFlightsAverageToday"].innerText = userRepository.calculateAverageStairs(todayDate).toFixed(0);
}

function updateUserHydrationDisplay() {
  updateWeeklyOuncesByDay();
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["hydrationInfoGlassesToday"].innerText = user.hydrationRepository.findOunces(todayDate);
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["hydrationUserOuncesToday"].innerText = user.hydrationRepository.findOunces(todayDate);
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["hydrationFriendOuncesToday"].innerText = userRepository.calculateAllOunces(todayDate);
}

function updateWeeklyOuncesByDay() {
  let hydrationDataByDate = user.hydrationRepository.findWeeklyOunces(todayDate);
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["hydrationCalendarCard"].innerHTML = `<button type='button' name='button' class='go-back-button hydration-go-back-button'></button>`
  let html;
  if (hydrationDataByDate.length < 7) {
    html = `<p class="weekly-ounces">Sorry, you only have ${hydrationDataByDate.length} day(s) of data. <br> Here is the info we have for the selected time period.</p><br>
    <p class="weekly-ounces">${hydrationDataByDate.map(data => {return `${data.date} ${data.ounces}OZ` + "<br>"}).join('')}</p>`
  } else {
    html = `<p class="weekly-ounces">WEEK OF: ${hydrationDataByDate[6].date}</p><br>
      <p class="weekly-ounces">YESTERDAY: ${hydrationDataByDate[0].ounces} OZ</p>
      <p class="weekly-ounces">2 DAYS: ${hydrationDataByDate[1].ounces} OZ</p>
      <p class="weekly-ounces">3 DAYS: ${hydrationDataByDate[2].ounces} OZ</p>
      <p class="weekly-ounces">4 DAYS: ${hydrationDataByDate[3].ounces} OZ</p>
      <p class="weekly-ounces">5 DAYS: ${hydrationDataByDate[4].ounces} OZ</p>
      <p class="weekly-ounces">6 DAYS: ${hydrationDataByDate[5].ounces} OZ</p>
      <p class="weekly-ounces">7 DAYS: ${hydrationDataByDate[6].ounces} OZ</p>`
  }
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["hydrationCalendarCard"].insertAdjacentHTML('beforeend', html)
}

function updateUserFriendsDisplay() {
  let friends = userRepository.getFriendsSteps(user.id, todayDate);

  let html = `<p class="dropdown-p">${friends.map(friend => {return `${friend.name} | ${friend.steps}` + "<br>"}).join('')}</p>`

  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["dropdownFriendsStepsContainer"].innerHTML = html;
}

function updateTrendingStairsDays() {
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["trendingStairsPhraseContainer"].innerText = user.activityRepository.findTrendingStairsDays();
}

function updateTrendingStepDays() {
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["trendingStepsPhraseContainer"].innerHTML = user.activityRepository.findTrendingStepDays();
}

function showHomePage() {
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["mainPage"].classList.remove('hide');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["addActivityButton"].classList.remove('hide');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["addHydrationButton"].classList.remove('hide');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["addSleepButton"].classList.remove('hide');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["calendarInput"].classList.remove('hide');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["inputDate"].classList.add('hide');
}

function hideHomePage() {
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["mainPage"].classList.add('hide');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["addActivityButton"].classList.add('hide');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["addHydrationButton"].classList.add('hide');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["addSleepButton"].classList.add('hide');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["calendarInput"].classList.add('hide');
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["inputDate"].classList.remove('hide');
}

function showActivityForm() {
  hideHomePage();
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["activityForm"].classList.remove('hide');
}

function showSleepData() {
  hideHomePage();
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["sleepForm"].classList.remove('hide');
}

function showHydrationForm() {
  hideHomePage();
  _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["hydrationForm"].classList.remove('hide');
}

function postActivityData() {
  let onSuccess = () => {
    showHomePage();
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["activityForm"].classList.add('hide');
  }
  let rawActivity = {userID: user.id, date: userDateInput, numSteps: _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["activityStepsInput"].value, minutesActive: _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["activityMinutesInput"].value, flightsOfStairs: _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["flightStairsInput"].value};
  user.activityRepository.createNewActivity(rawActivity);
  activityService.postData(rawActivity, onSuccess);
}

function postHydrationData() {
  let onSuccess = () => {
    showHomePage();
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["hydrationForm"].classList.add('hide');
  }
  let rawHydration = {userID: user.id, date: userDateInput, numOunces: _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["ouncesDrankInput"].value}
  user.hydrationRepository.createNewHydration(rawHydration);
  hydrationService.postData(rawHydration, onSuccess);
}

function postSleepData() {
  let onSuccess = () => {
    showHomePage();
    _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["sleepForm"].classList.add('hide');
  }
  let rawSleep = {userID: user.id, date: userDateInput, hoursSlept: _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["hoursSleptInput"].value, sleepQuality: _DOMelements_js__WEBPACK_IMPORTED_MODULE_2__["sleepQualityInput"].value}
  user.sleepRepository.createNewSleep(rawSleep);
  sleepService.postData(rawSleep, onSuccess);
}


/***/ }),

/***/ "./src/service/ActivityService.js":
/*!****************************************!*\
  !*** ./src/service/ActivityService.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActivityService; });
/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Service */ "./src/service/Service.js");


class ActivityService extends _Service__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(url, dataKey) {
    super(url, dataKey)
  }
}


/***/ }),

/***/ "./src/service/HydrationService.js":
/*!*****************************************!*\
  !*** ./src/service/HydrationService.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HydrationService; });
/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Service */ "./src/service/Service.js");


class HydrationService extends _Service__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(url, dataKey) {
    super(url, dataKey)
  }
}


/***/ }),

/***/ "./src/service/Service.js":
/*!********************************!*\
  !*** ./src/service/Service.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Service; });
class Service {
  constructor(url, dataKey) {
    this.url = url;
    this.dataKey = dataKey;
  }

  fetchData() {
    return fetch(this.url)
      .then(response => response.json())
      .then(data => data[this.dataKey])
      .catch(err => console.log(err))
  }

  postData(newPost, onSuccess) {
    return fetch(this.url, {
      method: 'POST',
      headers: {
  	    'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost)
    })
    .then(response => response.json())
    .then(json => {
      console.log(json);
      onSuccess();
    })
    .catch(err => console.log(err))
  }
}


/***/ }),

/***/ "./src/service/SleepService.js":
/*!*************************************!*\
  !*** ./src/service/SleepService.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SleepService; });
/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Service */ "./src/service/Service.js");


class SleepService extends _Service__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(url, dataKey) {
    super(url, dataKey)
  }
}


/***/ }),

/***/ "./src/service/UserService.js":
/*!************************************!*\
  !*** ./src/service/UserService.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserService; });
/* harmony import */ var _Service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Service */ "./src/service/Service.js");


class UserService extends _Service__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(url, dataKey) {
    super(url, dataKey)
  }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9fYmFzZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jc3Mvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvdXJsLWVzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvRE9NZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9fYmFzZS5zY3NzPzQwMDgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZXMuc2Nzcz8xM2IxIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvaHlkcmF0aW9uLWNhbGVuZGFyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2h5ZHJhdGlvbi1mcmllbmRzLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2h5ZHJhdGlvbi1nb2JhY2sucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvaHlkcmF0aW9uLWluZm8ucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcHJvZmlsZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9zbGVlcC1jYWxlbmRhci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9zbGVlcC1mcmllbmRzLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3NsZWVwLWdvYmFjay5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9zbGVlcC1pbmZvLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3N0YWlycy1jYWxlbmRhci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9zdGFpcnMtZnJpZW5kcy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9zdGFpcnMtZ29iYWNrLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3N0YWlycy1pbmZvLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3N0YWlycy10cmVuZGluZy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9zdGVwcy1jYWxlbmRhci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9zdGVwcy1mcmllbmRzLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3N0ZXBzLWdvYmFjay5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9zdGVwcy1pbmZvLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3N0ZXBzLXRyZW5kaW5nLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvQWN0aXZpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsL0FjdGl2aXR5UmVwb3NpdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvSHlkcmF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9IeWRyYXRpb25SZXBvc2l0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9TbGVlcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWwvU2xlZXBSZXBvc2l0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9Vc2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9Vc2VyUmVwb3NpdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZS9BY3Rpdml0eVNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2UvSHlkcmF0aW9uU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZS9TZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlL1NsZWVwU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZS9Vc2VyU2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsMkJBQTJCLG1CQUFPLENBQUMsd0dBQW1EO0FBQ3RGO0FBQ0EsY0FBYyxRQUFTLG9CQUFvQixnQ0FBZ0Msb0JBQW9CLDJCQUEyQixpQkFBaUIsa0JBQWtCLHFCQUFxQixpQkFBaUIsRUFBRTs7Ozs7Ozs7Ozs7OztBQ0ZyTSwyQkFBMkIsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDdEY7QUFDQSxnQkFBZ0IsbUJBQU8sQ0FBQyxzSEFBMEQ7QUFDbEYseUNBQXlDLG1CQUFPLENBQUMsdURBQXVCO0FBQ3hFLHlDQUF5QyxtQkFBTyxDQUFDLGlFQUE0QjtBQUM3RSx5Q0FBeUMsbUJBQU8sQ0FBQyw2REFBMEI7QUFDM0UseUNBQXlDLG1CQUFP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O0FBRUEsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7QUNuQmYsaUQ7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQUE7QUFBQTtBQUFrQzs7QUFFbkI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSx1QkFBdUIsaURBQVE7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLDZEQUE2RCxpRUFBaUUsS0FBSyxnQ0FBZ0M7QUFDbkssSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSwwREFBMEQsNkRBQTZELEtBQUssOEJBQThCO0FBQzFKLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3JOQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBb0M7O0FBRXJCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLHdCQUF3QixrREFBUztBQUNqQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7Ozs7OztBQzNFQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUE0Qjs7QUFFYjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0Esb0JBQW9CLDhDQUFLO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7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QUFTO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLEVBQUUsNkRBQWE7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFZO0FBQ2hCO0FBQ0EscUJBQXFCLGdEQUFnRCxrRUFBa0IsdUJBQXVCLG9FQUFvQix5QkFBeUIsaUVBQWlCO0FBQzVLO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZEQUFhO0FBQ2pCO0FBQ0Esc0JBQXNCLGlEQUFpRCxnRUFBZ0I7QUFDdkY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUkseURBQVM7QUFDYjtBQUNBLGtCQUFrQixrREFBa0QsK0RBQWUsc0JBQXNCLGlFQUFpQjtBQUMxSDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoVkE7QUFBQTtBQUFBO0FBQWdDOztBQUVqQiw4QkFBOEIsZ0RBQU87QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFBZ0M7O0FBRWpCLCtCQUErQixnREFBTztBQUNyRDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUFBO0FBQUE7QUFBZ0M7O0FBRWpCLDJCQUEyQixnREFBTztBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUFnQzs7QUFFakIsMEJBQTBCLGdEQUFPO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2NyaXB0cy5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmJ1dHRvbi1zdHlsaW5nIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMy40dnc7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDMuNHZ3O1xcbiAgbWFyZ2luLWxlZnQ6IDF2dztcXG4gIHdpZHRoOiAzLjR2dzsgfVxcblwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIEltcG9ydHNcbnZhciB1cmxFc2NhcGUgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3VybC1lc2NhcGUuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18wX19fID0gdXJsRXNjYXBlKHJlcXVpcmUoXCIuLi9pbWFnZXMvcHJvZmlsZS5wbmdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMV9fXyA9IHVybEVzY2FwZShyZXF1aXJlKFwiLi4vaW1hZ2VzL3N0ZXBzLWdvYmFjay5wbmdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMl9fXyA9IHVybEVzY2FwZShyZXF1aXJlKFwiLi4vaW1hZ2VzL3N0ZXBzLWluZm8ucG5nXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzNfX18gPSB1cmxFc2NhcGUocmVxdWlyZShcIi4uL2ltYWdlcy9zdGVwcy1mcmllbmRzLnBuZ1wiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX180X19fID0gdXJsRXNjYXBlKHJlcXVpcmUoXCIuLi9pbWFnZXMvc3RlcHMtY2FsZW5kYXIucG5nXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzVfX18gPSB1cmxFc2NhcGUocmVxdWlyZShcIi4uL2ltYWdlcy9oeWRyYXRpb24tZ29iYWNrLnBuZ1wiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX182X19fID0gdXJsRXNjYXBlKHJlcXVpcmUoXCIuLi9pbWFnZXMvaHlkcmF0aW9uLWluZm8ucG5nXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzdfX18gPSB1cmxFc2NhcGUocmVxdWlyZShcIi4uL2ltYWdlcy9oeWRyYXRpb24tZnJpZW5kcy5wbmdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fOF9fXyA9IHVybEVzY2FwZShyZXF1aXJlKFwiLi4vaW1hZ2VzL2h5ZHJhdGlvbi1jYWxlbmRhci5wbmdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fOV9fXyA9IHVybEVzY2FwZShyZXF1aXJlKFwiLi4vaW1hZ2VzL3N0YWlycy1nb2JhY2sucG5nXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzEwX19fID0gdXJsRXNjYXBlKHJlcXVpcmUoXCIuLi9pbWFnZXMvc3RhaXJzLWluZm8ucG5nXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzExX19fID0gdXJsRXNjYXBlKHJlcXVpcmUoXCIuLi9pbWFnZXMvc3RhaXJzLWZyaWVuZHMucG5nXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzEyX19fID0gdXJsRXNjYXBlKHJlcXVpcmUoXCIuLi9pbWFnZXMvc3RhaXJzLWNhbGVuZGFyLnBuZ1wiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18xM19fXyA9IHVybEVzY2FwZShyZXF1aXJlKFwiLi4vaW1hZ2VzL3NsZWVwLWdvYmFjay5wbmdcIikpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMTRfX18gPSB1cmxFc2NhcGUocmVxdWlyZShcIi4uL2ltYWdlcy9zbGVlcC1pbmZvLnBuZ1wiKSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18xNV9fXyA9IHVybEVzY2FwZShyZXF1aXJlKFwiLi4vaW1hZ2VzL3NsZWVwLWZyaWVuZHMucG5nXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzE2X19fID0gdXJsRXNjYXBlKHJlcXVpcmUoXCIuLi9pbWFnZXMvc2xlZXAtY2FsZW5kYXIucG5nXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzE3X19fID0gdXJsRXNjYXBlKHJlcXVpcmUoXCIuLi9pbWFnZXMvc3RlcHMtdHJlbmRpbmcucG5nXCIpKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9fXzE4X19fID0gdXJsRXNjYXBlKHJlcXVpcmUoXCIuLi9pbWFnZXMvc3RhaXJzLXRyZW5kaW5nLnBuZ1wiKSk7XG5cbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmJ1dHRvbi1zdHlsaW5nLCAuaW5mby1idXR0b24sIC5mcmllbmRzLWJ1dHRvbiwgLmNhbGVuZGFyLWJ1dHRvbiwgLnRyZW5kaW5nLWJ1dHRvbiwgLmdvLWJhY2stYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMy40dnc7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDMuNHZ3O1xcbiAgbWFyZ2luLWxlZnQ6IDF2dztcXG4gIHdpZHRoOiAzLjR2dzsgfVxcblxcbiosXFxuKjphZnRlcixcXG4qOmJlZm9yZSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDsgfVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFGMUYxRjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3N3YWxkXFxcIiwgc2Fucy1zZXJpZjsgfVxcblxcbi8qIEhFQURFUiAqL1xcbmhlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDl2dzsgfVxcblxcbmJ1dHRvbjphY3RpdmUge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTsgfVxcblxcbiNwcm9maWxlLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDUuNnZ3O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgaGVpZ2h0OiA1LjZ2dztcXG4gIG1hcmdpbi1yaWdodDogLjV2dztcXG4gIG1hcmdpbi10b3A6IDEuNnZ3O1xcbiAgd2lkdGg6IDUuNnZ3OyB9XFxuXFxuI3VzZXItaW5mby1kcm9wZG93biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUYxRjFGO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgbWFyZ2luLWxlZnQ6IDYwJTtcXG4gIG1hcmdpbi10b3A6IC0xLjIlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgei1pbmRleDogMTAwOyB9XFxuXFxuLmRyb3Bkb3duLXAge1xcbiAgZm9udC1zaXplOiAxLjJ2dztcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBwYWRkaW5nLWJvdHRvbTogMXZ3O1xcbiAgcGFkZGluZy10b3A6IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbi5hZGQtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxRjFGMUY7XFxuICBmb250LWZhbWlseTogXFxcIk9zd2FsZFxcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICB3aWR0aDogMjUwcHg7XFxuICBvdXRsaW5lOiBub25lOyB9XFxuXFxuLmFkZC1idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7IH1cXG5cXG5sYWJlbCB7XFxuICBjb2xvcjogd2hpdGU7IH1cXG5cXG4uc3VibWl0LWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUYxRjFGO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPc3dhbGRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgd2lkdGg6IDI1MHB4OyB9XFxuXFxuZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG5pbnB1dCB7XFxuICB3aWR0aDogMTQwcHg7IH1cXG5cXG4vKiBURVhUIEVMRU1FTlRTICovXFxuaDEge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZGlzcGxheTogaW5saW5lO1xcbiAgZm9udC1zaXplOiA1LjR2dztcXG4gIGxldHRlci1zcGFjaW5nOiAuMmVtOyB9XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiA3dnc7XFxuICBsZXR0ZXItc3BhY2luZzogLjFlbTsgfVxcblxcbmgzIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiV29yayBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogM3Z3O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAuMmVtOyB9XFxuXFxuaDQge1xcbiAgZm9udC1zaXplOiA2dnc7IH1cXG5cXG5oNSB7XFxuICBmb250LXNpemU6IDEuOHZ3O1xcbiAgcGFkZGluZy1ib3R0b206IDF2dztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbnAge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJXb3JrIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxLjJ2dztcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBsZXR0ZXItc3BhY2luZzogLjJ2dztcXG4gIG1hcmdpbi1yaWdodDogMXZ3O1xcbiAgcGFkZGluZy10b3A6IDJ2dztcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgd2lkdGg6IDl2dztcXG4gIHdvcmQtYnJlYWs6IGtlZXAtYWxsOyB9XFxuXFxuLyogTUFJTiAqL1xcbm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdzdGVwcyBoeWRyYXRpb24nICdzdGFpcnMgc2xlZXAnO1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuXFxuLm1haW4tY2FyZCB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDIwdnc7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcblxcbi5tYWluLWNhcmQtdG9wLXJvdyB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLm1haW4tY2FyZC1ib3R0b20tcm93IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuI3N0ZXBzLWNhcmQtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNTYzNEI7XFxuICBncmlkLWFyZWE6IHN0ZXBzO1xcbiAgbWFyZ2luOiAuNXZ3OyB9XFxuXFxuI2h5ZHJhdGlvbi1jYXJkLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTRDNkJFO1xcbiAgZ3JpZC1hcmVhOiBoeWRyYXRpb247XFxuICBtYXJnaW46IC41dnc7IH1cXG5cXG4jc3RhaXJzLWNhcmQtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4OTc1QjI7XFxuICBncmlkLWFyZWE6IHN0YWlycztcXG4gIG1hcmdpbjogLjV2dzsgfVxcblxcbiNzbGVlcC1jYXJkLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkJEMDg5O1xcbiAgZ3JpZC1hcmVhOiBzbGVlcDtcXG4gIG1hcmdpbjogLjV2dzsgfVxcblxcbi5jYXJkLWRhdGEtbGluZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAydnc7IH1cXG5cXG4uaHlkcmF0aW9uLXdlZWtseS1sYWJlbCB7XFxuICBmb250LXNpemU6IDF2dztcXG4gIHBhZGRpbmctdG9wOiAxdnc7IH1cXG5cXG4uaHlkcmF0aW9uLXdlZWtseS1hbW91bnQge1xcbiAgZm9udC1zaXplOiAydnc7IH1cXG5cXG4uaHlkcmF0aW9uLWNhbGVuZGFyLWNhcmQge1xcbiAgbWFyZ2luLXRvcDogMTVweDsgfVxcblxcbi53ZWVrbHktb3VuY2VzIHtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG4gIHdpZHRoOiA4MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE3cHg7IH1cXG5cXG4uaHlkcmF0aW9uLWRhdGEtbGluZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAuMnZ3OyB9XFxuXFxuLnRyZW5kLWxpbmUge1xcbiAgZm9udC1zaXplOiAydnc7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMjB2dzsgfVxcblxcbi8qIEJVVFRPTlMgKi9cXG4uY2FsZW5kYXItYnV0dG9uIHtcXG4gIGZsb2F0OiByaWdodDsgfVxcblxcbi5zdGVwcy1nby1iYWNrLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzFfX18gKyBcIik7IH1cXG5cXG4uc3RlcHMtaW5mby1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18yX19fICsgXCIpOyB9XFxuXFxuLnN0ZXBzLWZyaWVuZHMtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fM19fXyArIFwiKTsgfVxcblxcbi5zdGVwcy1jYWxlbmRhci1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX180X19fICsgXCIpOyB9XFxuXFxuLmh5ZHJhdGlvbi1nby1iYWNrLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzVfX18gKyBcIik7IH1cXG5cXG4uaHlkcmF0aW9uLWluZm8tYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fNl9fXyArIFwiKTsgfVxcblxcbi5oeWRyYXRpb24tZnJpZW5kcy1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX183X19fICsgXCIpOyB9XFxuXFxuLmh5ZHJhdGlvbi1jYWxlbmRhci1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX184X19fICsgXCIpOyB9XFxuXFxuLnN0YWlycy1nby1iYWNrLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzlfX18gKyBcIik7IH1cXG5cXG4uc3RhaXJzLWluZm8tYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMTBfX18gKyBcIik7IH1cXG5cXG4uc3RhaXJzLWZyaWVuZHMtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMTFfX18gKyBcIik7IH1cXG5cXG4uc3RhaXJzLWNhbGVuZGFyLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzEyX19fICsgXCIpOyB9XFxuXFxuLnNsZWVwLWdvLWJhY2stYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMTNfX18gKyBcIik7IH1cXG5cXG4uc2xlZXAtaW5mby1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18xNF9fXyArIFwiKTsgfVxcblxcbi5zbGVlcC1mcmllbmRzLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzE1X19fICsgXCIpOyB9XFxuXFxuLnNsZWVwLWNhbGVuZGFyLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzE2X19fICsgXCIpOyB9XFxuXFxuLnN0ZXBzLXRyZW5kaW5nLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9fXzE3X19fICsgXCIpOyB9XFxuXFxuLnN0YWlycy10cmVuZGluZy1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18xOF9fXyArIFwiKTsgfVxcblxcbi8qIENIQU5HSU5HIENMQVNTRVMgKi9cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmdyZWVuLXRleHQge1xcbiAgY29sb3I6IGdyZWVuOyB9XFxuXFxuLnJlZC10ZXh0IHtcXG4gIGNvbG9yOiByZWQ7IH1cXG5cXG4ueWVsbG93LXRleHQge1xcbiAgY29sb3I6ICNGOEJBMDA7IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gJ0BtZWRpYSAnICsgaXRlbVsyXSArICd7JyArIGNvbnRlbnQgKyAnfSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tpXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gJygnICsgaXRlbVsyXSArICcpIGFuZCAoJyArIG1lZGlhUXVlcnkgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG4gIHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXNjYXBlKHVybCwgbmVlZFF1b3Rlcykge1xuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgbmVlZFF1b3Rlcykge1xuICAgIHJldHVybiAnXCInICsgdXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJykgKyAnXCInO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiZXhwb3J0IGxldCBhY3Rpdml0eUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZpdHktZm9ybScpO1xuZXhwb3J0IGxldCBhY3Rpdml0eU1pbnV0ZXNJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhY3Rpdml0eS1taW51dGVzLWlucHV0Jyk7XG5leHBvcnQgbGV0IGFjdGl2aXR5U3RlcHNJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhY3Rpdml0eS1zdGVwcy1pbnB1dCcpO1xuZXhwb3J0IGxldCBhZGRBY3Rpdml0eUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtYWN0aXZpdHktYnV0dG9uJyk7XG5leHBvcnQgbGV0IGFkZEh5ZHJhdGlvbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtaHlkcmF0aW9uLWJ1dHRvbicpO1xuZXhwb3J0IGxldCBhZGRTbGVlcEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtc2xlZXAtYnV0dG9uJyk7XG5leHBvcnQgbGV0IGNhbGVuZGFySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZScpO1xuZXhwb3J0IGxldCBkcm9wZG93bkNhbG9yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Ryb3Bkb3duLWNhbG9yaWVzJyk7XG5leHBvcnQgbGV0IGRyb3Bkb3duRW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHJvcGRvd24tZW1haWwnKTtcbmV4cG9ydCBsZXQgZHJvcGRvd25GcmllbmRzU3RlcHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHJvcGRvd24tZnJpZW5kcy1zdGVwcy1jb250YWluZXInKTtcbmV4cG9ydCBsZXQgZHJvcGRvd25Hb2FsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Ryb3Bkb3duLWdvYWwnKTtcbmV4cG9ydCBsZXQgZHJvcGRvd25OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Ryb3Bkb3duLW5hbWUnKTtcbmV4cG9ydCBsZXQgZmxpZ2h0U3RhaXJzSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmxpZ2h0LXN0YWlycy1pbnB1dCcpO1xuZXhwb3J0IGxldCBoZWFkZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWRlci1uYW1lJyk7XG5leHBvcnQgbGV0IGhvdXJzU2xlcHRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob3Vycy1zbGVwdC1pbnB1dCcpO1xuZXhwb3J0IGxldCBoeWRyYXRpb25DYWxlbmRhckNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaHlkcmF0aW9uLWNhbGVuZGFyLWNhcmQnKTtcbmV4cG9ydCBsZXQgaHlkcmF0aW9uQ2FsZW5kYXJDYXJkQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2h5ZHJhdGlvbi1jYWxlbmRhci1jYXJkLWJveCcpO1xuZXhwb3J0IGxldCBoeWRyYXRpb25Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh5ZHJhdGlvbi1mb3JtJyk7XG5leHBvcnQgbGV0IGh5ZHJhdGlvbkZyaWVuZE91bmNlc1RvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2h5ZHJhdGlvbi1mcmllbmQtb3VuY2VzLXRvZGF5Jyk7XG5leHBvcnQgbGV0IGh5ZHJhdGlvbkZyaWVuZHNDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2h5ZHJhdGlvbi1mcmllbmRzLWNhcmQnKTtcbmV4cG9ydCBsZXQgaHlkcmF0aW9uSW5mb0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHlkcmF0aW9uLWluZm8tY2FyZCcpO1xuZXhwb3J0IGxldCBoeWRyYXRpb25JbmZvR2xhc3Nlc1RvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2h5ZHJhdGlvbi1pbmZvLWdsYXNzZXMtdG9kYXknKTtcbmV4cG9ydCBsZXQgaHlkcmF0aW9uTWFpbkNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHlkcmF0aW9uLW1haW4tY2FyZCcpO1xuZXhwb3J0IGxldCBoeWRyYXRpb25Vc2VyT3VuY2VzVG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHlkcmF0aW9uLXVzZXItb3VuY2VzLXRvZGF5Jyk7XG5leHBvcnQgbGV0IG1haW5QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuZXhwb3J0IGxldCBvdW5jZXNEcmFua0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2h5ZHJhdGlvbi1vdW5jZXMnKTtcbmV4cG9ydCBsZXQgcHJvZmlsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9maWxlLWJ1dHRvbicpO1xuZXhwb3J0IGxldCBzbGVlcENhbGVuZGFyQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbGVlcC1jYWxlbmRhci1jYXJkJyk7XG5leHBvcnQgbGV0IHNsZWVwQ2FsZW5kYXJIb3Vyc0F2ZXJhZ2VXZWVrbHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2xlZXAtY2FsZW5kYXItaG91cnMtYXZlcmFnZS13ZWVrbHknKTtcbmV4cG9ydCBsZXQgc2xlZXBDYWxlbmRhclF1YWxpdHlBdmVyYWdlV2Vla2x5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NsZWVwLWNhbGVuZGFyLXF1YWxpdHktYXZlcmFnZS13ZWVrbHknKTtcbmV4cG9ydCBsZXQgc2xlZXBGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsZWVwLWZvcm0nKTtcbmV4cG9ydCBsZXQgc2xlZXBGcmllbmRMb25nZXN0U2xlZXBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbGVlcC1mcmllbmQtbG9uZ2VzdC1zbGVlcGVyJyk7XG5leHBvcnQgbGV0IHNsZWVwRnJpZW5kc0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2xlZXAtZnJpZW5kcy1jYXJkJyk7XG5leHBvcnQgbGV0IHNsZWVwRnJpZW5kV29yc3RTbGVlcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NsZWVwLWZyaWVuZC13b3JzdC1zbGVlcGVyJyk7XG5leHBvcnQgbGV0IHNsZWVwSW5mb0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2xlZXAtaW5mby1jYXJkJyk7XG5leHBvcnQgbGV0IHNsZWVwSW5mb0hvdXJzQXZlcmFnZUFsbHRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2xlZXAtaW5mby1ob3Vycy1hdmVyYWdlLWFsbHRpbWUnKTtcbmV4cG9ydCBsZXQgc2xlZXBJbmZvUXVhbGl0eUF2ZXJhZ2VBbGx0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NsZWVwLWluZm8tcXVhbGl0eS1hdmVyYWdlLWFsbHRpbWUnKTtcbmV4cG9ydCBsZXQgc2xlZXBJbmZvUXVhbGl0eVRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NsZWVwLWluZm8tcXVhbGl0eS10b2RheScpO1xuZXhwb3J0IGxldCBzbGVlcE1haW5DYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NsZWVwLW1haW4tY2FyZCcpO1xuZXhwb3J0IGxldCBzbGVlcFF1YWxpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzbGVlcC1xdWFsaXR5LWlucHV0Jyk7XG5leHBvcnQgbGV0IHNsZWVwVXNlckhvdXJzVG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2xlZXAtdXNlci1ob3Vycy10b2RheScpO1xuZXhwb3J0IGxldCBzdGFpcnNDYWxlbmRhckNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhaXJzLWNhbGVuZGFyLWNhcmQnKTtcbmV4cG9ydCBsZXQgc3RhaXJzQ2FsZW5kYXJGbGlnaHRzQXZlcmFnZVdlZWtseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFpcnMtY2FsZW5kYXItZmxpZ2h0cy1hdmVyYWdlLXdlZWtseScpO1xuZXhwb3J0IGxldCBzdGFpcnNDYWxlbmRhclN0YWlyc0F2ZXJhZ2VXZWVrbHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhaXJzLWNhbGVuZGFyLXN0YWlycy1hdmVyYWdlLXdlZWtseScpO1xuZXhwb3J0IGxldCBzdGFpcnNGcmllbmRGbGlnaHRzQXZlcmFnZVRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YWlycy1mcmllbmQtZmxpZ2h0cy1hdmVyYWdlLXRvZGF5Jyk7XG5leHBvcnQgbGV0IHN0YWlyc0ZyaWVuZHNDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YWlycy1mcmllbmRzLWNhcmQnKTtcbmV4cG9ydCBsZXQgc3RhaXJzSW5mb0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhaXJzLWluZm8tY2FyZCcpO1xuZXhwb3J0IGxldCBzdGFpcnNJbmZvRmxpZ2h0c1RvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YWlycy1pbmZvLWZsaWdodHMtdG9kYXknKTtcbmV4cG9ydCBsZXQgc3RhaXJzTWFpbkNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhaXJzLW1haW4tY2FyZCcpO1xuZXhwb3J0IGxldCBzdGFpcnNUcmVuZGluZ0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFpcnMtdHJlbmRpbmctYnV0dG9uJyk7XG5leHBvcnQgbGV0IHN0YWlyc1RyZW5kaW5nQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGFpcnMtdHJlbmRpbmctY2FyZCcpO1xuZXhwb3J0IGxldCBzdGFpcnNVc2VyU3RhaXJzVG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RhaXJzLXVzZXItc3RhaXJzLXRvZGF5Jyk7XG5leHBvcnQgbGV0IHN0ZXBzQ2FsZW5kYXJDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0ZXBzLWNhbGVuZGFyLWNhcmQnKTtcbmV4cG9ydCBsZXQgc3RlcHNDYWxlbmRhclRvdGFsQWN0aXZlTWludXRlc1dlZWtseSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGVwcy1jYWxlbmRhci10b3RhbC1hY3RpdmUtbWludXRlcy13ZWVrbHknKTtcbmV4cG9ydCBsZXQgc3RlcHNDYWxlbmRhclRvdGFsU3RlcHNXZWVrbHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RlcHMtY2FsZW5kYXItdG90YWwtc3RlcHMtd2Vla2x5Jyk7XG5leHBvcnQgbGV0IHN0ZXBzRnJpZW5kQWN0aXZlTWludXRlc0F2ZXJhZ2VUb2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGVwcy1mcmllbmQtYWN0aXZlLW1pbnV0ZXMtYXZlcmFnZS10b2RheScpO1xuZXhwb3J0IGxldCBzdGVwc0ZyaWVuZEF2ZXJhZ2VTdGVwR29hbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGVwcy1mcmllbmQtYXZlcmFnZS1zdGVwLWdvYWwnKTtcbmV4cG9ydCBsZXQgc3RlcHNGcmllbmRzQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGVwcy1mcmllbmRzLWNhcmQnKTtcbmV4cG9ydCBsZXQgc3RlcHNGcmllbmRTdGVwc0F2ZXJhZ2VUb2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGVwcy1mcmllbmQtc3RlcHMtYXZlcmFnZS10b2RheScpO1xuZXhwb3J0IGxldCBzdGVwc0luZm9BY3RpdmVNaW51dGVzVG9kYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RlcHMtaW5mby1hY3RpdmUtbWludXRlcy10b2RheScpO1xuZXhwb3J0IGxldCBzdGVwc0luZm9DYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0ZXBzLWluZm8tY2FyZCcpO1xuZXhwb3J0IGxldCBzdGVwc0luZm9NaWxlc1dhbGtlZFRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0ZXBzLWluZm8tbWlsZXMtd2Fsa2VkLXRvZGF5Jyk7XG5leHBvcnQgbGV0IHN0ZXBzTWFpbkNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RlcHMtbWFpbi1jYXJkJyk7XG5leHBvcnQgbGV0IHN0ZXBzVHJlbmRpbmdCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RlcHMtdHJlbmRpbmctYnV0dG9uJyk7XG5leHBvcnQgbGV0IHN0ZXBzVHJlbmRpbmdDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0ZXBzLXRyZW5kaW5nLWNhcmQnKTtcbmV4cG9ydCBsZXQgc3RlcHNVc2VyU3RlcHNUb2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdGVwcy11c2VyLXN0ZXBzLXRvZGF5Jyk7XG5leHBvcnQgbGV0IHN1Ym1pdEFjdGl2aXR5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdC1hY3Rpdml0eScpO1xuZXhwb3J0IGxldCBzdWJtaXRIeWRyYXRpb25CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LWh5ZHJhdGlvbicpO1xuZXhwb3J0IGxldCBzdWJtaXRTbGVlcEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtc2xlZXAnKTtcbmV4cG9ydCBsZXQgdHJlbmRpbmdTdGFpcnNQaHJhc2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJlbmRpbmctc3RhaXJzLXBocmFzZS1jb250YWluZXInKTtcbmV4cG9ydCBsZXQgdHJlbmRpbmdTdGVwc1BocmFzZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50cmVuZGluZy1zdGVwcy1waHJhc2UtY29udGFpbmVyJyk7XG5leHBvcnQgbGV0IHVzZXJJbmZvRHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlci1pbmZvLWRyb3Bkb3duJyk7XG5leHBvcnQgbGV0IGlucHV0RGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnB1dC1kYXRlJyk7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9fYmFzZS5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL19iYXNlLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL19iYXNlLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9zdHlsZXMuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL2h5ZHJhdGlvbi1jYWxlbmRhci5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL2h5ZHJhdGlvbi1mcmllbmRzLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWFnZXMvaHlkcmF0aW9uLWdvYmFjay5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL2h5ZHJhdGlvbi1pbmZvLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWFnZXMvcHJvZmlsZS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL3NsZWVwLWNhbGVuZGFyLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWFnZXMvc2xlZXAtZnJpZW5kcy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL3NsZWVwLWdvYmFjay5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL3NsZWVwLWluZm8ucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImltYWdlcy9zdGFpcnMtY2FsZW5kYXIucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImltYWdlcy9zdGFpcnMtZnJpZW5kcy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL3N0YWlycy1nb2JhY2sucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImltYWdlcy9zdGFpcnMtaW5mby5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL3N0YWlycy10cmVuZGluZy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL3N0ZXBzLWNhbGVuZGFyLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWFnZXMvc3RlcHMtZnJpZW5kcy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL3N0ZXBzLWdvYmFjay5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL3N0ZXBzLWluZm8ucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImltYWdlcy9zdGVwcy10cmVuZGluZy5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBBY3Rpdml0eSB7XG4gIGNvbnN0cnVjdG9yKGRhdGEsIHVzZXJSZXBvc2l0b3J5KSB7XG4gICAgdGhpcy51c2VySWQgPSBkYXRhLnVzZXJJRDtcbiAgICB0aGlzLmRhdGUgPSBkYXRhLmRhdGU7XG4gICAgdGhpcy5zdGVwcyA9IGRhdGEubnVtU3RlcHM7XG4gICAgdGhpcy5taW51dGVzQWN0aXZlID0gZGF0YS5taW51dGVzQWN0aXZlO1xuICAgIHRoaXMuZmxpZ2h0c09mU3RhaXJzID0gZGF0YS5mbGlnaHRzT2ZTdGFpcnM7XG4gICAgdGhpcy5taWxlc1dhbGtlZCA9IDA7XG4gIH1cbn1cbiIsImltcG9ydCBBY3Rpdml0eSBmcm9tICcuL0FjdGl2aXR5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aXZpdHlSZXBvc2l0b3J5IHtcbiAgY29uc3RydWN0b3IoYWN0aXZpdHlEYXRhLCB1c2VyU3RyaWRlTGVuZ3RoLCB1c2VyU3RlcEdvYWwpIHtcbiAgICB0aGlzLnJhd0FjdGl2aXR5RGF0YSA9IGFjdGl2aXR5RGF0YVxuICAgIHRoaXMuYWN0aXZpdHlIaXN0b3J5ID0gW107XG4gICAgdGhpcy51c2VyU3RlcEdvYWwgPSB1c2VyU3RlcEdvYWw7XG4gICAgdGhpcy51c2VyU3RyaWRlTGVuZ3RoID0gdXNlclN0cmlkZUxlbmd0aDtcbiAgICB0aGlzLnRvdGFsU3RlcHNUaGlzV2VlayA9IDA7XG4gICAgdGhpcy5hY2NvbXBsaXNoZWREYXlzID0gW107XG4gICAgdGhpcy50cmVuZGluZ1N0ZXBEYXlzID0gW107XG4gICAgdGhpcy50cmVuZGluZ1N0YWlyc0RheXMgPSBbXTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMucmF3QWN0aXZpdHlEYXRhLmZvckVhY2gocmF3QWN0aXZpdHkgPT4ge1xuICAgICAgdGhpcy5jcmVhdGVOZXdBY3Rpdml0eShyYXdBY3Rpdml0eSk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVOZXdBY3Rpdml0eShyYXdBY3Rpdml0eSkge1xuICAgIGxldCBhY3Rpdml0eSA9IG5ldyBBY3Rpdml0eShyYXdBY3Rpdml0eSk7XG4gICAgdGhpcy5hY3Rpdml0eUhpc3RvcnkucHVzaChhY3Rpdml0eSk7XG4gICAgdGhpcy51cGRhdGVTdGF0cygpO1xuICB9XG5cbiAgdXBkYXRlU3RhdHMoKSB7XG4gICAgdGhpcy5maW5kQWNjb21wbGlzaGVkU3RlcERheXMoKTtcbiAgICB0aGlzLmZpbmRTdGFpckNsaW1iaW5nUmVjb3JkKCk7XG4gICAgdGhpcy5maW5kVHJlbmRpbmdTdGFpcnNEYXlzKCk7XG4gICAgdGhpcy5maW5kVHJlbmRpbmdTdGVwRGF5cygpO1xuICB9XG5cbiAgZmluZFN0ZXBzKGRhdGUpIHtcbiAgICBsZXQgc3RlcERhdGUgPSB0aGlzLmFjdGl2aXR5SGlzdG9yeS5maW5kKGFjdGl2aXR5ID0+IHtcbiAgICAgIHJldHVybiBhY3Rpdml0eS5kYXRlID09PSBkYXRlO1xuICAgIH0pXG5cbiAgICBpZiAoc3RlcERhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHN0ZXBEYXRlLnN0ZXBzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ04vQSc7XG4gICAgfVxuICB9XG5cbiAgZmluZFN0YWlycyhkYXRlKSB7XG4gICAgbGV0IHN0YWlyc0RhdGUgPSB0aGlzLmFjdGl2aXR5SGlzdG9yeS5maW5kKGFjdGl2aXR5ID0+IHtcbiAgICAgIHJldHVybiBhY3Rpdml0eS5kYXRlID09PSBkYXRlO1xuICAgIH0pXG5cbiAgICBpZiAoc3RhaXJzRGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gc3RhaXJzRGF0ZS5mbGlnaHRzT2ZTdGFpcnMgKiAxMlxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ04vQSdcbiAgICB9XG4gIH1cblxuICBmaW5kRmxpZ2h0c09mU3RhaXJzKGRhdGUpIHtcbiAgICBsZXQgZmxpZ2h0c0RhdGUgPSB0aGlzLmFjdGl2aXR5SGlzdG9yeS5maW5kKGFjdGl2aXR5ID0+IHtcbiAgICAgIHJldHVybiBhY3Rpdml0eS5kYXRlID09PSBkYXRlO1xuICAgIH0pXG5cbiAgICBpZiAoZmxpZ2h0c0RhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuICgoZmxpZ2h0c0RhdGUuZmxpZ2h0c09mU3RhaXJzKSkudG9GaXhlZCgxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdOL0EnXG4gICAgfVxuICB9XG5cbiAgY2FsY3VsYXRlTWlsZXNXYWxrZWQodG9kYXlEYXRlKSB7XG4gICAgbGV0IHRvZGF5QWN0aXZpdHkgPSB0aGlzLmFjdGl2aXR5SGlzdG9yeS5maW5kKGFjdGl2aXR5ID0+IHtcbiAgICAgIHJldHVybiBhY3Rpdml0eS5kYXRlID09PSB0b2RheURhdGVcbiAgICB9KVxuICAgIGlmICh0b2RheUFjdGl2aXR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAoKHRvZGF5QWN0aXZpdHkuc3RlcHMgKiB0aGlzLnVzZXJTdHJpZGVMZW5ndGgpIC8gNTI4MCkudG9GaXhlZCgxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdOL0EnO1xuICAgIH1cbiAgfVxuXG4gIGNhbGN1bGF0ZUFjdGl2ZU1pbnV0ZXModG9kYXlEYXRlKSB7XG4gICAgbGV0IHRvZGF5QWN0aXZpdHkgPSB0aGlzLmFjdGl2aXR5SGlzdG9yeS5maW5kKGFjdGl2aXR5ID0+IHtcbiAgICAgIHJldHVybiBhY3Rpdml0eS5kYXRlID09PSB0b2RheURhdGU7XG4gICAgfSlcblxuICAgIGlmICh0b2RheUFjdGl2aXR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0b2RheUFjdGl2aXR5Lm1pbnV0ZXNBY3RpdmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnTi9BJztcbiAgICB9XG4gIH1cblxuICBhdmVyYWdlV2Vla2x5TWludXRlc0FjdGl2ZSh0b2RheURhdGUpIHtcbiAgICByZXR1cm4gKHRoaXMuYWN0aXZpdHlIaXN0b3J5LnJlZHVjZSgoc3VtLCBhY3Rpdml0eSkgPT4ge1xuICAgICAgbGV0IGluZGV4ID0gdGhpcy5hY3Rpdml0eUhpc3RvcnkuaW5kZXhPZih0aGlzLmFjdGl2aXR5SGlzdG9yeS5maW5kKGFjdGl2aXR5ID0+IGFjdGl2aXR5LmRhdGUgPT09IHRvZGF5RGF0ZSkpO1xuICAgICAgaWYgKGluZGV4IDw9IHRoaXMuYWN0aXZpdHlIaXN0b3J5LmluZGV4T2YoYWN0aXZpdHkpICYmIHRoaXMuYWN0aXZpdHlIaXN0b3J5LmluZGV4T2YoYWN0aXZpdHkpIDw9IChpbmRleCArIDYpKSB7XG4gICAgICAgIHN1bSArPSBhY3Rpdml0eS5taW51dGVzQWN0aXZlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHN1bTtcbiAgICB9LCAwKSAvIDcpLnRvRml4ZWQoMSk7XG4gIH1cblxuICByZWFjaFN0ZXBHb2FsKHRvZGF5RGF0ZSkge1xuICAgIGxldCB0b2RheUFjdGl2aXR5ID0gdGhpcy5hY3Rpdml0eUhpc3RvcnkuZmluZChhY3Rpdml0eSA9PiB7XG4gICAgICByZXR1cm4gYWN0aXZpdHkuZGF0ZSA9PT0gdG9kYXlEYXRlO1xuICAgIH0pXG5cbiAgICByZXR1cm4gKHRvZGF5QWN0aXZpdHkuc3RlcHMgPj0gdGhpcy51c2VyU3RlcEdvYWwpID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgZmluZEFjY29tcGxpc2hlZFN0ZXBEYXlzKCkge1xuICAgIGxldCBnb29kU3RlcERheXMgPSB0aGlzLmFjdGl2aXR5SGlzdG9yeS5maWx0ZXIoYWN0aXZpdHkgPT4ge1xuICAgICAgcmV0dXJuIGFjdGl2aXR5LnN0ZXBzID49IHRoaXMudXNlclN0ZXBHb2FsO1xuICAgIH0pXG4gICAgdGhpcy5hY2NvbXBsaXNoZWREYXlzID0gZ29vZFN0ZXBEYXlzLm1hcChhY3Rpdml0eSA9PiB7XG4gICAgICByZXR1cm4gYWN0aXZpdHkgPSB7XG4gICAgICAgIGRhdGU6IGFjdGl2aXR5LmRhdGVcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZmluZFN0YWlyQ2xpbWJpbmdSZWNvcmQoKSB7XG4gICAgbGV0IHJlY29yZCA9IDA7XG4gICAgdGhpcy5hY3Rpdml0eUhpc3RvcnkuZm9yRWFjaChhY3Rpdml0eSA9PiB7XG4gICAgICBpZiAoYWN0aXZpdHkuZmxpZ2h0c09mU3RhaXJzID4gcmVjb3JkKSB7XG4gICAgICAgIHJlY29yZCA9IGFjdGl2aXR5LmZsaWdodHNPZlN0YWlycztcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiByZWNvcmQ7XG4gIH1cblxuICBmaW5kVHJlbmRpbmdTdGFpcnNEYXlzKCkge1xuICAgbGV0IHBvc2l0aXZlRGF5cyA9IFtdO1xuICAgdGhpcy5hY3Rpdml0eUhpc3RvcnkuZm9yRWFjaChhY3Rpdml0eSA9PiB7XG4gICAgIGlmIChwb3NpdGl2ZURheXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgcG9zaXRpdmVEYXlzLnB1c2goYWN0aXZpdHkpXG4gICAgIH0gZWxzZSBpZiAocG9zaXRpdmVEYXlzWzBdLmZsaWdodHNPZlN0YWlycyA8IGFjdGl2aXR5LmZsaWdodHNPZlN0YWlycykge1xuICAgICAgIHBvc2l0aXZlRGF5cy51bnNoaWZ0KGFjdGl2aXR5KTtcbiAgICAgfSBlbHNlIGlmIChwb3NpdGl2ZURheXNbMF0uZmxpZ2h0c09mU3RhaXJzID4gYWN0aXZpdHkuZmxpZ2h0c09mU3RhaXJzKSB7XG4gICAgICAgcG9zaXRpdmVEYXlzID0gW2FjdGl2aXR5XVxuICAgICB9XG4gICAgIGlmIChwb3NpdGl2ZURheXMubGVuZ3RoID4gMikge1xuICAgICAgIHRoaXMudHJlbmRpbmdTdGFpcnNEYXlzID0gcG9zaXRpdmVEYXlzO1xuICAgICB9XG4gICB9KVxuICAgaWYgKHRoaXMudHJlbmRpbmdTdGFpcnNEYXlzLmxlbmd0aCA+IDIpIHtcbiAgICAgcmV0dXJuIGBZb3VyIG1vc3QgcmVjZW50IHBvc2l0aXZlIGNsaW1iaW5nIHN0cmVhayB3YXMgJHt0aGlzLnRyZW5kaW5nU3RhaXJzRGF5c1t0aGlzLnRyZW5kaW5nU3RhaXJzRGF5cy5sZW5ndGggLSAxXS5kYXRlfSAtICR7dGhpcy50cmVuZGluZ1N0YWlyc0RheXNbMF0uZGF0ZX0hYFxuICAgfSBlbHNlIHtcbiAgICAgcmV0dXJuICdOL0EnO1xuICAgfVxuIH1cblxuICBmaW5kVHJlbmRpbmdTdGVwRGF5cygpIHtcbiAgICBsZXQgcG9zaXRpdmVEYXlzID0gW107XG4gICAgdGhpcy5hY3Rpdml0eUhpc3RvcnkuZm9yRWFjaChhY3Rpdml0eSA9PiB7XG4gICAgICBpZiAocG9zaXRpdmVEYXlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBwb3NpdGl2ZURheXMucHVzaChhY3Rpdml0eSlcbiAgICAgIH0gZWxzZSBpZiAocG9zaXRpdmVEYXlzWzBdLnN0ZXBzIDwgYWN0aXZpdHkuc3RlcHMpIHtcbiAgICAgICAgcG9zaXRpdmVEYXlzLnVuc2hpZnQoYWN0aXZpdHkpO1xuICAgICAgfSBlbHNlIGlmIChwb3NpdGl2ZURheXNbMF0uc3RlcHMgPiBhY3Rpdml0eS5zdGVwcykge1xuICAgICAgICBwb3NpdGl2ZURheXMgPSBbYWN0aXZpdHldXG4gICAgICB9XG4gICAgICBpZiAocG9zaXRpdmVEYXlzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgdGhpcy50cmVuZGluZ1N0ZXBEYXlzID0gcG9zaXRpdmVEYXlzO1xuICAgICAgfVxuICAgIH0pXG4gICAgaWYgKHRoaXMudHJlbmRpbmdTdGVwRGF5cy5sZW5ndGggPiAyKSB7XG4gICAgICByZXR1cm4gYFlvdXIgbW9zdCByZWNlbnQgcG9zaXRpdmUgc3RlcCBzdHJlYWsgd2FzICR7dGhpcy50cmVuZGluZ1N0ZXBEYXlzW3RoaXMudHJlbmRpbmdTdGVwRGF5cy5sZW5ndGggLSAxXS5kYXRlfSAtICR7dGhpcy50cmVuZGluZ1N0ZXBEYXlzWzBdLmRhdGV9IWBcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdOL0EnXG4gICAgfVxuICB9XG5cbiAgY2FsY3VsYXRlQXZlcmFnZVN0ZXBzVGhpc1dlZWsodG9kYXlEYXRlKSB7XG4gICAgcmV0dXJuICh0aGlzLmFjdGl2aXR5SGlzdG9yeS5yZWR1Y2UoKHN1bSwgYWN0aXZpdHkpID0+IHtcbiAgICAgIGxldCBpbmRleCA9IHRoaXMuYWN0aXZpdHlIaXN0b3J5LmluZGV4T2YodGhpcy5hY3Rpdml0eUhpc3RvcnkuZmluZChhY3Rpdml0eSA9PiBhY3Rpdml0eS5kYXRlID09PSB0b2RheURhdGUpKTtcbiAgICAgIGlmIChpbmRleCA+PSB0aGlzLmFjdGl2aXR5SGlzdG9yeS5pbmRleE9mKGFjdGl2aXR5KSAmJiB0aGlzLmFjdGl2aXR5SGlzdG9yeS5pbmRleE9mKGFjdGl2aXR5KSA8PSAoaW5kZXggKyA2KSkge1xuICAgICAgICBzdW0gKz0gYWN0aXZpdHkuc3RlcHM7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3VtO1xuICAgIH0sIDApIC8gNykudG9GaXhlZCgwKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZUF2ZXJhZ2VTdGFpcnNUaGlzV2Vlayh0b2RheURhdGUpIHtcbiAgICBsZXQgc3RhaXJzID0gKHRoaXMuYWN0aXZpdHlIaXN0b3J5LnJlZHVjZSgoc3VtLCBhY3Rpdml0eSkgPT4ge1xuICAgICAgbGV0IGluZGV4ID0gdGhpcy5hY3Rpdml0eUhpc3RvcnkuaW5kZXhPZih0aGlzLmFjdGl2aXR5SGlzdG9yeS5maW5kKGFjdGl2aXR5ID0+IGFjdGl2aXR5LmRhdGUgPT09IHRvZGF5RGF0ZSkpO1xuICAgICAgaWYgKGluZGV4ID49IHRoaXMuYWN0aXZpdHlIaXN0b3J5LmluZGV4T2YoYWN0aXZpdHkpICYmIHRoaXMuYWN0aXZpdHlIaXN0b3J5LmluZGV4T2YoYWN0aXZpdHkpIDw9IChpbmRleCArIDYpKSB7XG4gICAgICAgIHN1bSArPSBhY3Rpdml0eS5mbGlnaHRzT2ZTdGFpcnM7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3VtO1xuICAgIH0sIDApIC8gNykudG9GaXhlZCgwKTtcblxuICAgIHJldHVybiBwYXJzZUludChzdGFpcnMpO1xuICB9XG5cbiAgY2FsY3VsYXRlRGFpbHlDYWxvcmllcyhkYXRlKSB7XG4gICAgbGV0IHRvdGFsTWludXRlcyA9IHRoaXMuYWN0aXZpdHlIaXN0b3J5LmZpbHRlcihhY3Rpdml0eSA9PiB7XG4gICAgICByZXR1cm4gYWN0aXZpdHkuZGF0ZSA9PT0gZGF0ZVxuICAgIH0pLnJlZHVjZSgoc3VtTWludXRlcywgYWN0aXZpdHkpID0+IHtcbiAgICAgIHJldHVybiBzdW1NaW51dGVzICs9IGFjdGl2aXR5Lm1pbnV0ZXNBY3RpdmVcbiAgICB9LCAwKTtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCh0b3RhbE1pbnV0ZXMgKiA3LjYpO1xuICB9XG5cbiAgY2FsY3VsYXRlVG90YWxTdGVwc1RoaXNXZWVrKHRvZGF5RGF0ZSkge1xuICAgIHRoaXMudG90YWxTdGVwc1RoaXNXZWVrID0gKHRoaXMuYWN0aXZpdHlIaXN0b3J5LnJlZHVjZSgoc3VtLCBhY3Rpdml0eSkgPT4ge1xuICAgICAgbGV0IGluZGV4ID0gdGhpcy5hY3Rpdml0eUhpc3RvcnkuaW5kZXhPZih0aGlzLmFjdGl2aXR5SGlzdG9yeS5maW5kKGFjdGl2aXR5ID0+IGFjdGl2aXR5LmRhdGUgPT09IHRvZGF5RGF0ZSkpO1xuICAgICAgaWYgKGluZGV4ID49IHRoaXMuYWN0aXZpdHlIaXN0b3J5LmluZGV4T2YoYWN0aXZpdHkpICYmIHRoaXMuYWN0aXZpdHlIaXN0b3J5LmluZGV4T2YoYWN0aXZpdHkpIDw9IChpbmRleCArIDYpKSB7XG4gICAgICAgIHN1bSArPSBhY3Rpdml0eS5zdGVwcztcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdW07XG4gICAgfSwgMCkpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIeWRyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy51c2VySWQgPSBkYXRhLnVzZXJJRDtcbiAgICB0aGlzLmRhdGUgPSBkYXRhLmRhdGU7XG4gICAgdGhpcy5vdW5jZXMgPSBkYXRhLm51bU91bmNlcztcbiAgfVxuXG4gIGNyZWF0ZUpTT05PYmooKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXJJZDogdGhpcy51c2VySUQsXG4gICAgICBkYXRlOiB0aGlzLmRhdGUsXG4gICAgICBudW1PdW5jZXM6IHRoaXMub3VuY2VzXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgSHlkcmF0aW9uIGZyb20gJy4vSHlkcmF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHlkcmF0aW9uUmVwb3NpdG9yeSB7XG4gIGNvbnN0cnVjdG9yKGh5ZHJhdGlvbkRhdGEpIHtcbiAgICB0aGlzLnJhd0h5ZHJhdGlvbkRhdGEgPSBoeWRyYXRpb25EYXRhXG4gICAgdGhpcy5oeWRyYXRpb25IaXN0b3J5ID0gW107XG4gICAgdGhpcy5vdW5jZXNBdmVyYWdlID0gMDtcbiAgICB0aGlzLm91bmNlc1JlY29yZCA9IFtdO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5yYXdIeWRyYXRpb25EYXRhLmZvckVhY2gocmF3SHlkcmF0aW9uID0+IHtcbiAgICAgIHRoaXMuY3JlYXRlTmV3SHlkcmF0aW9uKHJhd0h5ZHJhdGlvbik7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVOZXdIeWRyYXRpb24ocmF3SHlkcmF0aW9uKSB7XG4gICAgbGV0IGh5ZHJhdGlvbiA9IG5ldyBIeWRyYXRpb24ocmF3SHlkcmF0aW9uKTtcbiAgICB0aGlzLmh5ZHJhdGlvbkhpc3RvcnkucHVzaChoeWRyYXRpb24pO1xuICAgIHRoaXMudXBkYXRlU3RhdHMoKTtcbiAgfVxuXG4gIHVwZGF0ZVN0YXRzKCkge1xuICAgIHRoaXMuY3JlYXRlT3VuY2VzUmVjb3JkKCk7XG4gICAgdGhpcy5hdmVyYWdlRGFpbHlPdW5jZXMoKTtcbiAgfVxuXG4gIGNyZWF0ZU91bmNlc1JlY29yZCgpIHtcbiAgICB0aGlzLm91bmNlc1JlY29yZCA9IHRoaXMuaHlkcmF0aW9uSGlzdG9yeS5tYXAoaHlkcmF0aW9uID0+IHtcbiAgICAgIHJldHVybiBoeWRyYXRpb24gPSB7W2h5ZHJhdGlvbi5kYXRlXTogaHlkcmF0aW9uLm91bmNlc307XG4gICAgfSlcbiAgfVxuXG4gIGF2ZXJhZ2VEYWlseU91bmNlcygpIHtcbiAgICBsZXQgdG90YWxEYWlseU91bmNlcyA9IHRoaXMuaHlkcmF0aW9uSGlzdG9yeS5yZWR1Y2UoKHRvdGFsT3VuY2VzLCBoeWRyYXRpb24pID0+IHtcbiAgICAgIHRvdGFsT3VuY2VzICs9IGh5ZHJhdGlvbi5vdW5jZXM7XG4gICAgICByZXR1cm4gdG90YWxPdW5jZXM7XG4gICAgfSwgMClcbiAgICB0aGlzLm91bmNlc0F2ZXJhZ2UgPSAodG90YWxEYWlseU91bmNlcyAvIHRoaXMuaHlkcmF0aW9uSGlzdG9yeS5sZW5ndGgpLnRvRml4ZWQoMSk7XG4gIH1cblxuICBmaW5kT3VuY2VzKHRvZGF5RGF0ZSkge1xuICAgIGxldCB0b2RheUh5ZHJhdGlvbiA9IHRoaXMub3VuY2VzUmVjb3JkLmZpbmQoaHlkcmF0aW9uID0+IHtcbiAgICAgIGxldCBkYXRlS2V5ID0gT2JqZWN0LmtleXMoaHlkcmF0aW9uKVxuICAgICAgcmV0dXJuIGRhdGVLZXlbMF0gPT09IHRvZGF5RGF0ZVxuICAgIH0pXG4gICAgaWYgKHRvZGF5SHlkcmF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0b2RheUh5ZHJhdGlvblt0b2RheURhdGVdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ04vQSdcbiAgICB9XG4gIH1cblxuICBmaW5kR2xhc3Nlcyh0b2RheURhdGUpIHtcbiAgICBsZXQgdG9kYXlIeWRyYXRpb24gPSB0aGlzLm91bmNlc1JlY29yZC5maW5kKGh5ZHJhdGlvbiA9PiB7XG4gICAgICBsZXQgZGF0ZUtleSA9IE9iamVjdC5rZXlzKGh5ZHJhdGlvbilcbiAgICAgIHJldHVybiBkYXRlS2V5WzBdID09PSB0b2RheURhdGVcbiAgICB9KVxuICAgIGlmICh0b2RheUh5ZHJhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gKHRvZGF5SHlkcmF0aW9uW3RvZGF5RGF0ZV0pIC8gODtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdOL0EnXG4gICAgfVxuICB9XG5cbiAgZmluZFdlZWtseU91bmNlcyh0b2RheURhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5oeWRyYXRpb25IaXN0b3J5LnJlZHVjZSgoYWNjLCBoeWRyYXRpb24pID0+IHtcbiAgICAgIGxldCBpbmRleCA9IHRoaXMuaHlkcmF0aW9uSGlzdG9yeS5pbmRleE9mKHRoaXMuaHlkcmF0aW9uSGlzdG9yeS5maW5kKGh5ZHJhdGlvbiA9PiBoeWRyYXRpb24uZGF0ZSA9PT0gdG9kYXlEYXRlKSk7XG4gICAgICBpZiAoaW5kZXggPD0gdGhpcy5oeWRyYXRpb25IaXN0b3J5LmluZGV4T2YoaHlkcmF0aW9uKSAmJiB0aGlzLmh5ZHJhdGlvbkhpc3RvcnkuaW5kZXhPZihoeWRyYXRpb24pIDw9IChpbmRleCArIDYpKSB7XG4gICAgICAgIGFjYy51bnNoaWZ0KGh5ZHJhdGlvbik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2NcbiAgICB9LCBbXSlcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xlZXAge1xuICBjb25zdHJ1Y3Rvcih1c2VyU2xlZXBEYXRhKSB7XG4gICAgdGhpcy51c2VySUQgPSB1c2VyU2xlZXBEYXRhLnVzZXJJRDtcbiAgICB0aGlzLmRhdGUgPSB1c2VyU2xlZXBEYXRhLmRhdGU7XG4gICAgdGhpcy5ob3Vyc1NsZXB0ID0gdXNlclNsZWVwRGF0YS5ob3Vyc1NsZXB0O1xuICAgIHRoaXMuc2xlZXBRdWFsaXR5ID0gdXNlclNsZWVwRGF0YS5zbGVlcFF1YWxpdHk7XG4gIH1cbn1cbiIsImltcG9ydCBTbGVlcCBmcm9tICcuL1NsZWVwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2xlZXBSZXBvc2l0b3J5IHtcbiAgY29uc3RydWN0b3Ioc2xlZXBEYXRhKSB7XG4gICAgdGhpcy5yYXdTbGVlcERhdGEgPSBzbGVlcERhdGE7XG4gICAgdGhpcy5zbGVlcEhpc3RvcnkgPSBbXTtcbiAgICB0aGlzLmhvdXJzU2xlcHRBdmVyYWdlID0gMDtcbiAgICB0aGlzLnNsZWVwUXVhbGl0eUF2ZXJhZ2UgPSAwO1xuICAgIHRoaXMuc2xlZXBIb3Vyc1JlY29yZCA9IFtdO1xuICAgIHRoaXMuc2xlZXBRdWFsaXR5UmVjb3JkID0gW107XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLnJhd1NsZWVwRGF0YS5mb3JFYWNoKHJhd1NsZWVwID0+IHtcbiAgICAgIHRoaXMuY3JlYXRlTmV3U2xlZXAocmF3U2xlZXApO1xuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlTmV3U2xlZXAocmF3U2xlZXApIHtcbiAgICBsZXQgc2xlZXAgPSBuZXcgU2xlZXAocmF3U2xlZXApO1xuICAgIHRoaXMuc2xlZXBIaXN0b3J5LnB1c2goc2xlZXApO1xuICAgIHRoaXMudXBkYXRlU3RhdHMoKTtcbiAgfVxuXG4gIHVwZGF0ZVN0YXRzKCkge1xuICAgIHRoaXMuY3JlYXRlU2xlZXBIb3Vyc1JlY29yZCgpO1xuICAgIHRoaXMuY3JlYXRlU2xlZXBRdWFsaXR5UmVjb3JkKCk7XG4gICAgdGhpcy51cGRhdGVIb3Vyc1NsZXB0QXZlcmFnZSgpO1xuICAgIHRoaXMudXBkYXRlU2xlZXBRdWFsaXR5QXZlcmFnZSgpO1xuICB9XG5cbiAgY3JlYXRlU2xlZXBIb3Vyc1JlY29yZCgpIHtcbiAgICB0aGlzLnNsZWVwSG91cnNSZWNvcmQgPSB0aGlzLnNsZWVwSGlzdG9yeS5tYXAoc2xlZXAgPT4ge1xuICAgICAgcmV0dXJuIHNsZWVwID0ge2RhdGU6IHNsZWVwLmRhdGUsIGhvdXJzOiBzbGVlcC5ob3Vyc1NsZXB0fTtcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlU2xlZXBRdWFsaXR5UmVjb3JkKCkge1xuICAgIHRoaXMuc2xlZXBRdWFsaXR5UmVjb3JkID0gdGhpcy5zbGVlcEhpc3RvcnkubWFwKHNsZWVwID0+IHtcbiAgICAgIHJldHVybiBzbGVlcCA9IHtkYXRlOiBzbGVlcC5kYXRlLCBzbGVlcFF1YWxpdHk6IHNsZWVwLnNsZWVwUXVhbGl0eX07XG4gICAgfSlcbiAgfVxuXG4gIGZpbmRIb3Vyc1NsZXB0KGRhdGUpIHtcbiAgICBsZXQgc2xlZXBEYXRlID0gdGhpcy5zbGVlcEhpc3RvcnkuZmluZChzbGVlcCA9PiB7XG4gICAgICByZXR1cm4gc2xlZXAuZGF0ZSA9PT0gZGF0ZTtcbiAgICB9KVxuICAgIGlmIChzbGVlcERhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHNsZWVwRGF0ZS5ob3Vyc1NsZXB0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ04vQSdcbiAgICB9XG4gIH1cblxuICBmaW5kU2xlZXBRdWFsaXR5KGRhdGUpIHtcbiAgICBsZXQgc2xlZXBEYXRlID0gdGhpcy5zbGVlcEhpc3RvcnkuZmluZChzbGVlcCA9PiB7XG4gICAgICByZXR1cm4gc2xlZXAuZGF0ZSA9PT0gZGF0ZTtcbiAgICB9KVxuICAgIGlmIChzbGVlcERhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHNsZWVwRGF0ZS5zbGVlcFF1YWxpdHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnTi9BJ1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUhvdXJzU2xlcHRBdmVyYWdlKCkge1xuICAgIGxldCB0b3RhbFNsZWVwSG91cnMgPSB0aGlzLnNsZWVwSGlzdG9yeS5yZWR1Y2UoKHRvdGFsSG91cnMsIHNsZWVwKSA9PiB7XG4gICAgICB0b3RhbEhvdXJzICs9IHNsZWVwLmhvdXJzU2xlcHQ7XG4gICAgICByZXR1cm4gdG90YWxIb3VycztcbiAgICB9LCAwKVxuICAgIHRoaXMuaG91cnNTbGVwdEF2ZXJhZ2UgPSAodG90YWxTbGVlcEhvdXJzIC8gdGhpcy5zbGVlcEhpc3RvcnkubGVuZ3RoKS50b0ZpeGVkKDEpO1xuICB9XG5cbiAgdXBkYXRlU2xlZXBRdWFsaXR5QXZlcmFnZSgpIHtcbiAgICBsZXQgdG90YWxTbGVlcFF1YWxpdHkgPSB0aGlzLnNsZWVwSGlzdG9yeS5yZWR1Y2UoKHRvdGFsUXVhbGl0eSwgc2xlZXApID0+IHtcbiAgICAgIHRvdGFsUXVhbGl0eSArPSBzbGVlcC5zbGVlcFF1YWxpdHk7XG4gICAgICByZXR1cm4gdG90YWxRdWFsaXR5O1xuICAgIH0sIDApXG4gICAgdGhpcy5zbGVlcFF1YWxpdHlBdmVyYWdlID0gKHRvdGFsU2xlZXBRdWFsaXR5IC8gdGhpcy5zbGVlcEhpc3RvcnkubGVuZ3RoKS50b0ZpeGVkKDEpO1xuICB9XG5cbiAgYXZlcmFnZVdlZWtseVNsZWVwSG91cnModG9kYXlEYXRlKSB7XG4gICAgcmV0dXJuICh0aGlzLnNsZWVwSG91cnNSZWNvcmQucmVkdWNlKChzdW0sIHNsZWVwQWN0KSA9PiB7XG4gICAgICBsZXQgaW5kZXggPSB0aGlzLnNsZWVwSG91cnNSZWNvcmQuaW5kZXhPZih0aGlzLnNsZWVwSG91cnNSZWNvcmQuZmluZChzbGVlcCA9PiBzbGVlcC5kYXRlID09PSB0b2RheURhdGUpKTtcbiAgICAgIGlmIChpbmRleCA+PSB0aGlzLnNsZWVwSG91cnNSZWNvcmQuaW5kZXhPZihzbGVlcEFjdCkgJiYgdGhpcy5zbGVlcEhvdXJzUmVjb3JkLmluZGV4T2Yoc2xlZXBBY3QpIDw9IChpbmRleCArIDYpKSB7XG4gICAgICAgIHN1bSArPSBzbGVlcEFjdC5ob3VycztcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdW07XG4gICAgfSwgMCkgLyA3KS50b0ZpeGVkKDEpO1xuICB9XG5cbiAgYXZlcmFnZVdlZWtseVNsZWVwUXVhbGl0eSh0b2RheURhdGUpIHtcbiAgICByZXR1cm4gKHRoaXMuc2xlZXBRdWFsaXR5UmVjb3JkLnJlZHVjZSgoc3VtLCBzbGVlcEFjdCkgPT4ge1xuICAgICAgbGV0IGluZGV4ID0gdGhpcy5zbGVlcFF1YWxpdHlSZWNvcmQuaW5kZXhPZih0aGlzLnNsZWVwUXVhbGl0eVJlY29yZC5maW5kKHNsZWVwID0+IHNsZWVwLmRhdGUgPT09IHRvZGF5RGF0ZSkpO1xuICAgICAgaWYgKGluZGV4ID49IHRoaXMuc2xlZXBRdWFsaXR5UmVjb3JkLmluZGV4T2Yoc2xlZXBBY3QpICYmIHRoaXMuc2xlZXBRdWFsaXR5UmVjb3JkLmluZGV4T2Yoc2xlZXBBY3QpIDw9IChpbmRleCArIDYpKSB7XG4gICAgICAgIHN1bSArPSBzbGVlcEFjdC5zbGVlcFF1YWxpdHk7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3VtO1xuICAgIH0sIDApIC8gNykudG9GaXhlZCgxKTtcbiAgfVxufVxuIiwiaW1wb3J0IFNsZWVwUmVwb3NpdG9yeSBmcm9tICcuL1NsZWVwUmVwb3NpdG9yeSc7XG5pbXBvcnQgQWN0aXZpdHlSZXBvc2l0b3J5IGZyb20gJy4vQWN0aXZpdHlSZXBvc2l0b3J5JztcbmltcG9ydCBIeWRyYXRpb25SZXBvc2l0b3J5IGZyb20gJy4vSHlkcmF0aW9uUmVwb3NpdG9yeSc7XG5cbiBleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcbiAgY29uc3RydWN0b3IodXNlckRhdGEsIHNsZWVwRGF0YSwgYWN0aXZpdHlEYXRhLCBoeWRyYXRpb25EYXRhKSB7XG4gICAgdGhpcy5pZCA9IHVzZXJEYXRhLmlkO1xuICAgIHRoaXMubmFtZSA9IHVzZXJEYXRhLm5hbWU7XG4gICAgdGhpcy5hZGRyZXNzID0gdXNlckRhdGEuYWRkcmVzcztcbiAgICB0aGlzLmVtYWlsID0gdXNlckRhdGEuZW1haWw7XG4gICAgdGhpcy5zdHJpZGVMZW5ndGggPSB1c2VyRGF0YS5zdHJpZGVMZW5ndGg7XG4gICAgdGhpcy5kYWlseVN0ZXBHb2FsID0gdXNlckRhdGEuZGFpbHlTdGVwR29hbDtcbiAgICB0aGlzLmZyaWVuZHMgPSB1c2VyRGF0YS5mcmllbmRzO1xuICAgIHRoaXMuc2xlZXBSZXBvc2l0b3J5ID0gbmV3IFNsZWVwUmVwb3NpdG9yeShzbGVlcERhdGEpO1xuICAgIHRoaXMuYWN0aXZpdHlSZXBvc2l0b3J5ID0gbmV3IEFjdGl2aXR5UmVwb3NpdG9yeShhY3Rpdml0eURhdGEsIHVzZXJEYXRhLnN0cmlkZUxlbmd0aCwgdXNlckRhdGEuZGFpbHlTdGVwR29hbClcbiAgICB0aGlzLmh5ZHJhdGlvblJlcG9zaXRvcnkgPSBuZXcgSHlkcmF0aW9uUmVwb3NpdG9yeShoeWRyYXRpb25EYXRhKVxuICAgIHRoaXMuZnJpZW5kc05hbWVzID0gW107XG4gIH1cblxuICBnZXRGaXJzdE5hbWUoKSB7XG4gICAgdmFyIG5hbWVzID0gdGhpcy5uYW1lLnNwbGl0KCcgJyk7XG4gICAgcmV0dXJuIG5hbWVzWzBdLnRvVXBwZXJDYXNlKCk7XG4gIH1cblxuICBmaW5kRnJpZW5kc05hbWVzKHVzZXJzKSB7XG4gICAgdGhpcy5mcmllbmRzLmZvckVhY2goZnJpZW5kID0+IHtcbiAgICAgIHRoaXMuZnJpZW5kc05hbWVzLnB1c2godXNlcnMuZmluZCh1c2VyID0+IHVzZXIuaWQgPT09IGZyaWVuZCkuZ2V0Rmlyc3ROYW1lKCkpO1xuICAgIH0pXG4gIH1cblxufVxuIiwiaW1wb3J0IFVzZXIgZnJvbSAnLi9Vc2VyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlclJlcG9zaXRvcnkge1xuICBjb25zdHJ1Y3Rvcih1c2VyRGF0YSwgc2xlZXBEYXRhLCBhY3Rpdml0eURhdGEsIGh5ZHJhdGlvbkRhdGEpIHtcbiAgICB0aGlzLnVzZXJzID0gW107XG4gICAgdGhpcy5yYXdVc2VyRGF0YSA9IHVzZXJEYXRhO1xuICAgIHRoaXMucmF3U2xlZXBEYXRhID0gc2xlZXBEYXRhO1xuICAgIHRoaXMucmF3QWN0aXZpdHlEYXRhID0gYWN0aXZpdHlEYXRhO1xuICAgIHRoaXMucmF3SHlkcmF0aW9uRGF0YSA9IGh5ZHJhdGlvbkRhdGE7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLmNyZWF0ZVVzZXJzKCk7XG4gICAgdGhpcy51c2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgdXNlci5zbGVlcFJlcG9zaXRvcnkuc3RhcnQoKVxuICAgICAgdXNlci5hY3Rpdml0eVJlcG9zaXRvcnkuc3RhcnQoKVxuICAgICAgdXNlci5oeWRyYXRpb25SZXBvc2l0b3J5LnN0YXJ0KClcbiAgICB9KVxuICB9XG5cbiAgY3JlYXRlVXNlcnMoKSB7XG4gICAgdGhpcy5yYXdVc2VyRGF0YS5mb3JFYWNoKHJhd1VzZXIgPT4ge1xuICAgICAgbGV0IHVzZXJTbGVlcERhdGEgPSB0aGlzLmZpbHRlclVzZXJTbGVlcERhdGEocmF3VXNlci5pZCk7XG4gICAgICBsZXQgdXNlckFjdGl2aXR5RGF0YSA9IHRoaXMuZmlsdGVyVXNlckFjdGl2aXR5RGF0YShyYXdVc2VyLmlkKTtcbiAgICAgIGxldCB1c2VySHlkcmF0aW9uRGF0YSA9IHRoaXMuZmlsdGVyVXNlckh5ZHJhdGlvbkRhdGEocmF3VXNlci5pZCk7XG4gICAgICBsZXQgdXNlciA9IG5ldyBVc2VyKHJhd1VzZXIsIHVzZXJTbGVlcERhdGEsIHVzZXJBY3Rpdml0eURhdGEsIHVzZXJIeWRyYXRpb25EYXRhKTtcbiAgICAgIHRoaXMudXNlcnMucHVzaCh1c2VyKTtcbiAgICB9KVxuICB9XG5cbiAgZmlsdGVyVXNlclNsZWVwRGF0YShpZCkge1xuICAgIHJldHVybiB0aGlzLnJhd1NsZWVwRGF0YS5maWx0ZXIoc2xlZXAgPT4ge1xuICAgICAgcmV0dXJuIHNsZWVwLnVzZXJJRCA9PT0gaWQ7XG4gICAgfSlcbiAgfVxuXG4gIGZpbHRlclVzZXJBY3Rpdml0eURhdGEoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5yYXdBY3Rpdml0eURhdGEuZmlsdGVyKGFjdGl2aXR5ID0+IHtcbiAgICAgIHJldHVybiBhY3Rpdml0eS51c2VySUQgPT09IGlkO1xuICAgIH0pXG4gIH1cblxuICBmaWx0ZXJVc2VySHlkcmF0aW9uRGF0YShpZCkge1xuICAgIHJldHVybiB0aGlzLnJhd0h5ZHJhdGlvbkRhdGEuZmlsdGVyKGh5ZHJhdGlvbiA9PiB7XG4gICAgICByZXR1cm4gaHlkcmF0aW9uLnVzZXJJRCA9PT0gaWQ7XG4gICAgfSlcbiAgfVxuXG4gIGdldFVzZXIoaWQpIHtcbiAgICByZXR1cm4gdGhpcy51c2Vycy5maW5kKHVzZXIgPT4ge1xuICAgICAgcmV0dXJuIHVzZXIuaWQgPT09IGlkO1xuICAgIH0pXG4gIH1cblxuICBjYWxjdWxhdGVBdmVyYWdlU3RlcEdvYWwoKSB7XG4gICAgbGV0IGdvYWxzID0gdGhpcy51c2Vycy5tYXAodXNlciA9PiB7XG4gICAgICByZXR1cm4gdXNlci5kYWlseVN0ZXBHb2FsO1xuICAgIH0pO1xuICAgIGxldCB0b3RhbCA9IGdvYWxzLnJlZHVjZSgoc3VtLCBnb2FsKSA9PiB7XG4gICAgICBzdW0gKz0gZ29hbDtcbiAgICAgIHJldHVybiBzdW07XG4gICAgfSwgMCk7XG4gICAgcmV0dXJuIHRvdGFsIC8gdGhpcy51c2Vycy5sZW5ndGg7XG4gIH1cblxuICBjYWxjdWxhdGVBdmVyYWdlU2xlZXBRdWFsaXR5KCkge1xuICAgIGxldCB0b3RhbFNsZWVwUXVhbGl0eSA9IHRoaXMudXNlcnMucmVkdWNlKChzdW0sIHVzZXIpID0+IHtcbiAgICAgIHN1bSArPSB1c2VyLnNsZWVwUmVwb3NpdG9yeS5zbGVlcFF1YWxpdHlBdmVyYWdlO1xuICAgICAgcmV0dXJuIHN1bTtcbiAgICB9LCAwKTtcbiAgICByZXR1cm4gdG90YWxTbGVlcFF1YWxpdHkgLyB0aGlzLnVzZXJzLmxlbmd0aDtcbiAgfVxuXG4gIGNhbGN1bGF0ZUF2ZXJhZ2VTdGVwcyhkYXRlKSB7XG4gICAgbGV0IGFsbFVzZXJzU3RlcHNDb3VudCA9IHRoaXMudXNlcnMubWFwKHVzZXIgPT4ge1xuICAgICAgcmV0dXJuIHVzZXIuYWN0aXZpdHlSZXBvc2l0b3J5LmFjdGl2aXR5SGlzdG9yeS5maWx0ZXIoYWN0aXZpdHkgPT4ge1xuICAgICAgICByZXR1cm4gYWN0aXZpdHkuZGF0ZSA9PT0gZGF0ZTtcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgbGV0IHN1bU9mU3RlcHMgPSBhbGxVc2Vyc1N0ZXBzQ291bnQucmVkdWNlKChzdGVwc1N1bSwgYWN0aXZpdHlDb2xsZWN0aW9uKSA9PiB7XG4gICAgICBhY3Rpdml0eUNvbGxlY3Rpb24uZm9yRWFjaChhY3Rpdml0eSA9PiB7XG4gICAgICAgIHN0ZXBzU3VtICs9IGFjdGl2aXR5LnN0ZXBzXG4gICAgICB9KVxuICAgICAgcmV0dXJuIHN0ZXBzU3VtO1xuICAgIH0sIDApO1xuICAgIHJldHVybiBNYXRoLnJvdW5kKHN1bU9mU3RlcHMgLyBhbGxVc2Vyc1N0ZXBzQ291bnQubGVuZ3RoKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZUF2ZXJhZ2VTdGFpcnMoZGF0ZSkge1xuICAgIGxldCBhbGxVc2Vyc1N0YWlyc0NvdW50ID0gdGhpcy51c2Vycy5tYXAodXNlciA9PiB7XG4gICAgICByZXR1cm4gdXNlci5hY3Rpdml0eVJlcG9zaXRvcnkuYWN0aXZpdHlIaXN0b3J5LmZpbHRlcihhY3Rpdml0eSA9PiB7XG4gICAgICAgIHJldHVybiBhY3Rpdml0eS5kYXRlID09PSBkYXRlO1xuICAgICAgfSk7XG4gICAgfSlcbiAgICBsZXQgc3VtT2ZTdGFpcnMgPSBhbGxVc2Vyc1N0YWlyc0NvdW50LnJlZHVjZSgoc3RhaXJzU3VtLCBhY3Rpdml0eUNvbGxlY3Rpb24pID0+IHtcbiAgICAgIGFjdGl2aXR5Q29sbGVjdGlvbi5mb3JFYWNoKGFjdGl2aXR5ID0+IHtcbiAgICAgICAgc3RhaXJzU3VtICs9IGFjdGl2aXR5LmZsaWdodHNPZlN0YWlyc1xuICAgICAgfSlcbiAgICAgIHJldHVybiBzdGFpcnNTdW07XG4gICAgfSwgMCk7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoc3VtT2ZTdGFpcnMgLyBhbGxVc2Vyc1N0YWlyc0NvdW50Lmxlbmd0aCk7XG4gIH1cblxuICBjYWxjdWxhdGVBdmVyYWdlTWludXRlc0FjdGl2ZShkYXRlKSB7XG4gICAgbGV0IGFsbFVzZXJzTWludXRlc0FjdGl2ZUNvdW50ID0gdGhpcy51c2Vycy5tYXAodXNlciA9PiB7XG4gICAgICByZXR1cm4gdXNlci5hY3Rpdml0eVJlcG9zaXRvcnkuYWN0aXZpdHlIaXN0b3J5LmZpbHRlcihhY3Rpdml0eSA9PiB7XG4gICAgICAgIHJldHVybiBhY3Rpdml0eS5kYXRlID09PSBkYXRlO1xuICAgICAgfSk7XG4gICAgfSlcbiAgICBsZXQgc3VtT2ZNaW51dGVzQWN0aXZlID0gYWxsVXNlcnNNaW51dGVzQWN0aXZlQ291bnQucmVkdWNlKChtaW51dGVzQWN0aXZlU3VtLCBhY3Rpdml0eUNvbGxlY3Rpb24pID0+IHtcbiAgICAgIGFjdGl2aXR5Q29sbGVjdGlvbi5mb3JFYWNoKGFjdGl2aXR5ID0+IHtcbiAgICAgICAgbWludXRlc0FjdGl2ZVN1bSArPSBhY3Rpdml0eS5taW51dGVzQWN0aXZlXG4gICAgICB9KVxuICAgICAgcmV0dXJuIG1pbnV0ZXNBY3RpdmVTdW07XG4gICAgfSwgMCk7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoc3VtT2ZNaW51dGVzQWN0aXZlIC8gYWxsVXNlcnNNaW51dGVzQWN0aXZlQ291bnQubGVuZ3RoKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZUF2ZXJhZ2VEYWlseVdhdGVyKGRhdGUpIHtcbiAgICBsZXQgdG9kYXlzRHJpbmtlcnMgPSB0aGlzLnVzZXJzLmZpbHRlcih1c2VyID0+IHtcbiAgICAgIHJldHVybiB1c2VyLmh5ZHJhdGlvblJlcG9zaXRvcnkuZmluZE91bmNlcyhkYXRlKSA+IDA7XG4gICAgfSk7XG5cbiAgICBsZXQgb3VuY2VzQ29uc3VtZWQgPSB0b2RheXNEcmlua2Vycy5yZWR1Y2UoKHN1bSwgdXNlcikgPT4ge1xuICAgICAgcmV0dXJuIHN1bSArPSB1c2VyLmh5ZHJhdGlvblJlcG9zaXRvcnkuZmluZE91bmNlcyhkYXRlKTtcbiAgICB9LCAwKTtcblxuICAgIHJldHVybiBNYXRoLmZsb29yKHBhcnNlSW50KG91bmNlc0NvbnN1bWVkKSAvIHRvZGF5c0RyaW5rZXJzLmxlbmd0aCk7XG4gIH1cblxuICBjYWxjdWxhdGVBbGxPdW5jZXMoZGF0ZSkge1xuICAgIGxldCB0b2RheXNEcmlua2VycyA9IHRoaXMudXNlcnMuZmlsdGVyKHVzZXIgPT4ge1xuICAgICAgcmV0dXJuIHVzZXIuaHlkcmF0aW9uUmVwb3NpdG9yeS5maW5kT3VuY2VzKGRhdGUpID4gMDtcbiAgICB9KTtcblxuICAgIHJldHVybiB0b2RheXNEcmlua2Vycy5yZWR1Y2UoKHN1bSwgdXNlcikgPT4ge1xuICAgICAgcmV0dXJuIHN1bSArPSB1c2VyLmh5ZHJhdGlvblJlcG9zaXRvcnkuZmluZE91bmNlcyhkYXRlKTtcbiAgICB9LCAwKTtcbiAgfVxuXG4gIGZpbmRCZXN0U2xlZXBlcnMoZGF0ZSkge1xuICAgIGxldCBiZXN0U2xlZXBlcnMgPSB0aGlzLnVzZXJzLmZpbHRlcih1c2VyID0+IHtcbiAgICAgIHJldHVybiB1c2VyLnNsZWVwUmVwb3NpdG9yeS5hdmVyYWdlV2Vla2x5U2xlZXBRdWFsaXR5KGRhdGUpID4gMztcbiAgICB9KTtcblxuICAgIHJldHVybiBiZXN0U2xlZXBlcnMubWFwKHVzZXIgPT4ge1xuICAgICAgbGV0IGF2Z1NsZWVwUXVhbGl0eSA9IHVzZXIuc2xlZXBSZXBvc2l0b3J5LmF2ZXJhZ2VXZWVrbHlTbGVlcFF1YWxpdHkoZGF0ZSk7XG4gICAgICByZXR1cm4gdXNlciA9IHtuYW1lOiB1c2VyLm5hbWUsIGF2ZXJhZ2VXZWVrU2xlZXBRdWFsaXR5OiBhdmdTbGVlcFF1YWxpdHl9O1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0TG9uZ2VzdFNsZWVwZXIoZGF0ZSkge1xuICAgIGxldCBzbGVlcHNPbkRhdGUgPSB0aGlzLnVzZXJzLm1hcCh1c2VyID0+IHtcbiAgICAgIHJldHVybiB1c2VyLnNsZWVwUmVwb3NpdG9yeS5zbGVlcEhpc3RvcnkuZmluZChzbGVlcCA9PiB7XG4gICAgICAgIHJldHVybiBzbGVlcC5kYXRlID09PSBkYXRlO1xuICAgICAgfSlcbiAgICB9KTtcblxuICAgIGxldCBsb25nZXN0U2xlZXBlcnMgPSBzbGVlcHNPbkRhdGUuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGIuaG91cnNTbGVwdCAtIGEuaG91cnNTbGVwdDtcbiAgICB9KTtcblxuICAgIGlmIChsb25nZXN0U2xlZXBlcnNbMF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgbGV0IGxvbmdlc3RTbGVlcGVyID0gdGhpcy5nZXRVc2VyKGxvbmdlc3RTbGVlcGVyc1swXS51c2VySUQpO1xuICAgICAgcmV0dXJuIGxvbmdlc3RTbGVlcGVyXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnTi9BJ1xuICAgIH1cbiAgfVxuXG4gIGdldFdvcnN0U2xlZXBlcihkYXRlKSB7XG4gICAgbGV0IHNsZWVwc09uRGF0ZSA9IHRoaXMudXNlcnMubWFwKHVzZXIgPT4ge1xuICAgICAgcmV0dXJuIHVzZXIuc2xlZXBSZXBvc2l0b3J5LnNsZWVwSGlzdG9yeS5maW5kKHNsZWVwID0+IHtcbiAgICAgICAgcmV0dXJuIHNsZWVwLmRhdGUgPT09IGRhdGU7XG4gICAgICB9KVxuICAgIH0pO1xuXG4gICAgbGV0IHNob3J0ZXN0U2xlZXBlcnMgPSBzbGVlcHNPbkRhdGUuc29ydCgoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuIGEuaG91cnNTbGVwdCAtIGIuaG91cnNTbGVwdDtcbiAgICB9KTtcblxuICAgIGlmIChzaG9ydGVzdFNsZWVwZXJzWzBdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGxldCBzaG9ydGVzdFNsZWVwZXIgPSB0aGlzLmdldFVzZXIoc2hvcnRlc3RTbGVlcGVyc1swXS51c2VySUQpO1xuICAgICAgcmV0dXJuIHNob3J0ZXN0U2xlZXBlclxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ04vQSdcbiAgICB9XG4gIH1cblxuICBnZXRGcmllbmRzU3RlcHModXNlcklELCB0b2RheURhdGUpIHtcbiAgICBsZXQgdXNlckluZm8gPSB0aGlzLnVzZXJzLmZpbmQodXNlciA9PiB7XG4gICAgICByZXR1cm4gdXNlci5pZCA9PT0gdXNlcklEO1xuICAgIH0pXG4gICAgbGV0IHVzZXJGcmllbmRzID0gdXNlckluZm8uZnJpZW5kcztcbiAgICBsZXQgZnJpZW5kcyA9IFtdO1xuICAgIGxldCBmcmllbmRJbmZvID0gdGhpcy51c2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgdXNlckZyaWVuZHMuZm9yRWFjaChmcmllbmRJRCA9PiB7XG4gICAgICAgIGlmICh1c2VyLmlkID09PSBmcmllbmRJRCkge1xuICAgICAgICAgIGZyaWVuZHMucHVzaCh1c2VyKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBsZXQgZnJpZW5kc1N0ZXBzID0gZnJpZW5kcy5tYXAoZnJpZW5kID0+IHtcbiAgICAgIHJldHVybiBmcmllbmQgPSB7XG4gICAgICAgIGlkOiBmcmllbmQuaWQsIG5hbWU6IGZyaWVuZC5nZXRGaXJzdE5hbWUoKSwgc3RlcHM6IGZyaWVuZC5hY3Rpdml0eVJlcG9zaXRvcnkuZmluZFN0ZXBzKHRvZGF5RGF0ZSlcbiAgICAgIH1cbiAgfSlcbiAgICBjb25zb2xlLmxvZyhmcmllbmRzU3RlcHMpO1xuICAgIHJldHVybiBmcmllbmRzU3RlcHM7XG4gIH1cbn1cbiIsImltcG9ydCAnLi9jc3MvX2Jhc2Uuc2Nzcyc7XG5pbXBvcnQgJy4vY3NzL3N0eWxlcy5zY3NzJztcblxuaW1wb3J0IHtkcm9wZG93bkVtYWlsLCBkcm9wZG93bkZyaWVuZHNTdGVwc0NvbnRhaW5lciwgZHJvcGRvd25Hb2FsLCBkcm9wZG93bk5hbWUsIGhlYWRlck5hbWUsIGh5ZHJhdGlvbkNhbGVuZGFyQ2FyZCwgaHlkcmF0aW9uRnJpZW5kT3VuY2VzVG9kYXksIGh5ZHJhdGlvbkZyaWVuZHNDYXJkLCBoeWRyYXRpb25JbmZvQ2FyZCwgaHlkcmF0aW9uSW5mb0dsYXNzZXNUb2RheSwgaHlkcmF0aW9uTWFpbkNhcmQsIGh5ZHJhdGlvblVzZXJPdW5jZXNUb2RheSwgbWFpblBhZ2UsIHByb2ZpbGVCdXR0b24sIHNsZWVwQ2FsZW5kYXJDYXJkLCBzbGVlcENhbGVuZGFySG91cnNBdmVyYWdlV2Vla2x5LCBzbGVlcENhbGVuZGFyUXVhbGl0eUF2ZXJhZ2VXZWVrbHksIHNsZWVwRnJpZW5kTG9uZ2VzdFNsZWVwZXIsIHNsZWVwRnJpZW5kc0NhcmQsIHNsZWVwRnJpZW5kV29yc3RTbGVlcGVyLCBzbGVlcEluZm9DYXJkLCBzbGVlcEluZm9Ib3Vyc0F2ZXJhZ2VBbGx0aW1lLCBzbGVlcEluZm9RdWFsaXR5QXZlcmFnZUFsbHRpbWUsIHNsZWVwSW5mb1F1YWxpdHlUb2RheSwgc2xlZXBNYWluQ2FyZCwgc2xlZXBVc2VySG91cnNUb2RheSwgc3RhaXJzQ2FsZW5kYXJDYXJkLCBzdGFpcnNDYWxlbmRhckZsaWdodHNBdmVyYWdlV2Vla2x5LCBzdGFpcnNDYWxlbmRhclN0YWlyc0F2ZXJhZ2VXZWVrbHksIHN0ZXBzTWFpbkNhcmQsIHN0ZXBzSW5mb0NhcmQsIHN0ZXBzRnJpZW5kc0NhcmQsIHN0ZXBzVHJlbmRpbmdDYXJkLCBzdGVwc0NhbGVuZGFyQ2FyZCwgc3RhaXJzRnJpZW5kRmxpZ2h0c0F2ZXJhZ2VUb2RheSwgc3RhaXJzRnJpZW5kc0NhcmQsIHN0YWlyc0luZm9DYXJkLCBzdGFpcnNJbmZvRmxpZ2h0c1RvZGF5LCBzdGFpcnNNYWluQ2FyZCwgc3RhaXJzVHJlbmRpbmdCdXR0b24sIHN0YWlyc1RyZW5kaW5nQ2FyZCwgc3RhaXJzVXNlclN0YWlyc1RvZGF5LCBzdGVwc0NhbGVuZGFyVG90YWxBY3RpdmVNaW51dGVzV2Vla2x5LCBzdGVwc0NhbGVuZGFyVG90YWxTdGVwc1dlZWtseSwgc3RlcHNGcmllbmRBdmVyYWdlU3RlcEdvYWwsIHN0ZXBzSW5mb0FjdGl2ZU1pbnV0ZXNUb2RheSwgc3RlcHNJbmZvTWlsZXNXYWxrZWRUb2RheSwgc3RlcHNGcmllbmRBY3RpdmVNaW51dGVzQXZlcmFnZVRvZGF5LCBzdGVwc0ZyaWVuZFN0ZXBzQXZlcmFnZVRvZGF5LCBzdGVwc1RyZW5kaW5nQnV0dG9uLCBzdGVwc1VzZXJTdGVwc1RvZGF5LCB0cmVuZGluZ1N0ZXBzUGhyYXNlQ29udGFpbmVyLCB0cmVuZGluZ1N0YWlyc1BocmFzZUNvbnRhaW5lciwgdXNlckluZm9Ecm9wZG93biwgYWRkQWN0aXZpdHlCdXR0b24sIGFkZEh5ZHJhdGlvbkJ1dHRvbiwgYWRkU2xlZXBCdXR0b24sIHN1Ym1pdEFjdGl2aXR5QnV0dG9uLCBzdWJtaXRTbGVlcEJ1dHRvbiwgc3VibWl0SHlkcmF0aW9uQnV0dG9uLCBhY3Rpdml0eVN0ZXBzSW5wdXQsIGFjdGl2aXR5TWludXRlc0lucHV0LCBmbGlnaHRTdGFpcnNJbnB1dCwgb3VuY2VzRHJhbmtJbnB1dCwgaG91cnNTbGVwdElucHV0LCBzbGVlcFF1YWxpdHlJbnB1dCwgY2FsZW5kYXJJbnB1dCwgYWN0aXZpdHlGb3JtLCBzbGVlcEZvcm0sIGh5ZHJhdGlvbkZvcm0sIGRyb3Bkb3duQ2Fsb3JpZXMsIGlucHV0RGF0ZX0gZnJvbSAnLi9ET01lbGVtZW50cy5qcydcblxuaW1wb3J0IFVzZXJSZXBvc2l0b3J5IGZyb20gJy4vbW9kZWwvVXNlclJlcG9zaXRvcnknO1xuaW1wb3J0IFVzZXJTZXJ2aWNlIGZyb20gJy4vc2VydmljZS9Vc2VyU2VydmljZSc7XG5pbXBvcnQgU2xlZXBTZXJ2aWNlIGZyb20gJy4vc2VydmljZS9TbGVlcFNlcnZpY2UnO1xuaW1wb3J0IEFjdGl2aXR5U2VydmljZSBmcm9tICcuL3NlcnZpY2UvQWN0aXZpdHlTZXJ2aWNlJztcbmltcG9ydCBIeWRyYXRpb25TZXJ2aWNlIGZyb20gJy4vc2VydmljZS9IeWRyYXRpb25TZXJ2aWNlJztcblxubGV0IHVzZXJSZXBvc2l0b3J5O1xubGV0IHVzZXI7XG5sZXQgdG9kYXlEYXRlID0gXCIyMDE5LzA2LzE1XCI7XG5sZXQgdXNlckRhdGVJbnB1dDtcbmxldCB1c2VyU2VydmljZTtcbmxldCBzbGVlcFNlcnZpY2U7XG5sZXQgYWN0aXZpdHlTZXJ2aWNlO1xubGV0IGh5ZHJhdGlvblNlcnZpY2U7XG5cbndpbmRvdy5vbmxvYWQgPSBpbnN0YW50aWF0ZVNlcnZpY2VzKCk7XG5cbmFkZEFjdGl2aXR5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0FjdGl2aXR5Rm9ybSk7XG5hZGRIeWRyYXRpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93SHlkcmF0aW9uRm9ybSk7XG5hZGRTbGVlcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dTbGVlcERhdGEpO1xubWFpblBhZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93SW5mbyk7XG5wcm9maWxlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0Ryb3Bkb3duKTtcbnN0YWlyc1RyZW5kaW5nQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdXBkYXRlVHJlbmRpbmdTdGFpcnNEYXlzKTtcbnN0ZXBzVHJlbmRpbmdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB1cGRhdGVUcmVuZGluZ1N0ZXBEYXlzKTtcbnN1Ym1pdEFjdGl2aXR5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcG9zdEFjdGl2aXR5RGF0YSk7XG5zdWJtaXRIeWRyYXRpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwb3N0SHlkcmF0aW9uRGF0YSk7XG5zdWJtaXRTbGVlcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBvc3RTbGVlcERhdGEpO1xuY2FsZW5kYXJJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbiAgbGV0IGZvcm1hdERhdGUgPSBgJHtldmVudC50YXJnZXQudmFsdWV9YC5zcGxpdCgnLScpO1xuICB0b2RheURhdGUgPSBmb3JtYXREYXRlLmpvaW4oJy8nKTtcbiAgdXBkYXRlQWxsRGlzcGxheXMoKTtcbn0pO1xuaW5wdXREYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICBsZXQgZm9ybWF0RGF0ZSA9IGAke2V2ZW50LnRhcmdldC52YWx1ZX1gLnNwbGl0KCctJyk7XG4gIHVzZXJEYXRlSW5wdXQgPSBmb3JtYXREYXRlLmpvaW4oJy8nKTtcbn0pO1xuXG5mdW5jdGlvbiBpbnN0YW50aWF0ZVNlcnZpY2VzKCkge1xuICB1c2VyU2VydmljZSA9IG5ldyBVc2VyU2VydmljZSgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL2ZpdGxpdC8xOTA4L3VzZXJzL3VzZXJEYXRhJywgJ3VzZXJEYXRhJyk7XG4gIHNsZWVwU2VydmljZSA9IG5ldyBTbGVlcFNlcnZpY2UoJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS9maXRsaXQvMTkwOC9zbGVlcC9zbGVlcERhdGEnLCAnc2xlZXBEYXRhJyk7XG4gIGFjdGl2aXR5U2VydmljZSA9IG5ldyBBY3Rpdml0eVNlcnZpY2UoJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS9maXRsaXQvMTkwOC9hY3Rpdml0eS9hY3Rpdml0eURhdGEnLCAnYWN0aXZpdHlEYXRhJyk7XG4gIGh5ZHJhdGlvblNlcnZpY2UgPSBuZXcgSHlkcmF0aW9uU2VydmljZSgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL2ZpdGxpdC8xOTA4L2h5ZHJhdGlvbi9oeWRyYXRpb25EYXRhJywgJ2h5ZHJhdGlvbkRhdGEnKTtcbiAgZmV0Y2hBbGxEYXRhKCk7XG59XG5cbmZ1bmN0aW9uIGZldGNoQWxsRGF0YSgpIHtcbiAgbGV0IHVzZXJQcm9taXNlID0gdXNlclNlcnZpY2UuZmV0Y2hEYXRhKCk7XG4gIGxldCBzbGVlcFByb21pc2UgPSBzbGVlcFNlcnZpY2UuZmV0Y2hEYXRhKCk7XG4gIGxldCBhY3Rpdml0eVByb21pc2UgPSBhY3Rpdml0eVNlcnZpY2UuZmV0Y2hEYXRhKCk7XG4gIGxldCBoeWRyYXRpb25Qcm9taXNlID0gaHlkcmF0aW9uU2VydmljZS5mZXRjaERhdGEoKTtcblxuICBQcm9taXNlLmFsbChbdXNlclByb21pc2UsIHNsZWVwUHJvbWlzZSwgYWN0aXZpdHlQcm9taXNlLCBoeWRyYXRpb25Qcm9taXNlXSlcbiAgICAudGhlbihkYXRhID0+IHVzZXJSZXBvc2l0b3J5ID0gbmV3IFVzZXJSZXBvc2l0b3J5KGRhdGFbMF0sIGRhdGFbMV0sIGRhdGFbMl0sIGRhdGFbM10pKVxuICAgIC50aGVuKCgpID0+IGxvYWRQYWdlKCkpXG4gICAgLmNhdGNoKGVyciA9PiBhbGVydChgU29ycnkhIERhdGEgY2Fubm90IGJlIGxvYWRlZCBhdCB0aGlzIHRpbWUgJHtlcnJ9YCkpXG59XG5cbmZ1bmN0aW9uIGxvYWRQYWdlKCkge1xuICB1c2VyUmVwb3NpdG9yeS5zdGFydCgpO1xuICBsYXVuY2hBcHAoKTtcbn1cblxuZnVuY3Rpb24gbGF1bmNoQXBwKCkge1xuICBnZXRSYW5kb21Vc2VyKCk7XG4gIHVzZXIuZmluZEZyaWVuZHNOYW1lcyh1c2VyUmVwb3NpdG9yeS51c2Vycyk7XG4gIHVwZGF0ZUFsbERpc3BsYXlzKCk7XG59XG5cbmZ1bmN0aW9uIGdldFJhbmRvbVVzZXIoKSB7XG4gIGxldCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUwKTtcbiAgdXNlciA9IHVzZXJSZXBvc2l0b3J5LnVzZXJzW3JhbmRvbUluZGV4XTtcbn1cblxuZnVuY3Rpb24gZmxpcENhcmQoY2FyZFRvSGlkZSwgY2FyZFRvU2hvdykge1xuICBjYXJkVG9IaWRlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgY2FyZFRvU2hvdy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG59XG5cbmZ1bmN0aW9uIHNob3dEcm9wZG93bigpIHtcbiAgdXNlckluZm9Ecm9wZG93bi5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG59XG5cbmZ1bmN0aW9uIHNob3dJbmZvKCkge1xuICBkaXNwbGF5U2xlZXBJbmZvKCk7XG4gIGRpc3BsYXlBY3Rpdml0eUluZm8oKTtcbiAgZGlzcGxheUh5ZHJhdGlvbkluZm8oKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVNsZWVwSW5mbygpIHtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3NsZWVwLWluZm8tYnV0dG9uJykpIHtcbiAgICBmbGlwQ2FyZChzbGVlcE1haW5DYXJkLCBzbGVlcEluZm9DYXJkKTtcbiAgfVxuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2xlZXAtZnJpZW5kcy1idXR0b24nKSkge1xuICAgIGZsaXBDYXJkKHNsZWVwTWFpbkNhcmQsIHNsZWVwRnJpZW5kc0NhcmQpO1xuICB9XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGVlcC1jYWxlbmRhci1idXR0b24nKSkge1xuICAgIGZsaXBDYXJkKHNsZWVwTWFpbkNhcmQsIHNsZWVwQ2FsZW5kYXJDYXJkKTtcbiAgfVxuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2xlZXAtZ28tYmFjay1idXR0b24nKSkge1xuICAgIGZsaXBDYXJkKGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLCBzbGVlcE1haW5DYXJkKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5QWN0aXZpdHlJbmZvKCkge1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc3RlcHMtaW5mby1idXR0b24nKSkge1xuICAgIGZsaXBDYXJkKHN0ZXBzTWFpbkNhcmQsIHN0ZXBzSW5mb0NhcmQpO1xuICB9XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdGVwcy1mcmllbmRzLWJ1dHRvbicpKSB7XG4gICAgZmxpcENhcmQoc3RlcHNNYWluQ2FyZCwgc3RlcHNGcmllbmRzQ2FyZCk7XG4gIH1cbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3N0ZXBzLXRyZW5kaW5nLWJ1dHRvbicpKSB7XG4gICAgZmxpcENhcmQoc3RlcHNNYWluQ2FyZCwgc3RlcHNUcmVuZGluZ0NhcmQpO1xuICB9XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdGVwcy1jYWxlbmRhci1idXR0b24nKSkge1xuICAgIGZsaXBDYXJkKHN0ZXBzTWFpbkNhcmQsIHN0ZXBzQ2FsZW5kYXJDYXJkKTtcbiAgfVxuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc3RhaXJzLWluZm8tYnV0dG9uJykpIHtcbiAgICBmbGlwQ2FyZChzdGFpcnNNYWluQ2FyZCwgc3RhaXJzSW5mb0NhcmQpO1xuICB9XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdGFpcnMtZnJpZW5kcy1idXR0b24nKSkge1xuICAgIGZsaXBDYXJkKHN0YWlyc01haW5DYXJkLCBzdGFpcnNGcmllbmRzQ2FyZCk7XG4gIH1cbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3N0YWlycy10cmVuZGluZy1idXR0b24nKSkge1xuICAgIGZsaXBDYXJkKHN0YWlyc01haW5DYXJkLCBzdGFpcnNUcmVuZGluZ0NhcmQpO1xuICB9XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdGFpcnMtY2FsZW5kYXItYnV0dG9uJykpIHtcbiAgICBmbGlwQ2FyZChzdGFpcnNNYWluQ2FyZCwgc3RhaXJzQ2FsZW5kYXJDYXJkKTtcbiAgfVxuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc3RlcHMtZ28tYmFjay1idXR0b24nKSkge1xuICAgIGZsaXBDYXJkKGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLCBzdGVwc01haW5DYXJkKTtcbiAgfVxuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc3RhaXJzLWdvLWJhY2stYnV0dG9uJykpIHtcbiAgICBmbGlwQ2FyZChldmVudC50YXJnZXQucGFyZW50Tm9kZSwgc3RhaXJzTWFpbkNhcmQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlIeWRyYXRpb25JbmZvKCkge1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaHlkcmF0aW9uLWluZm8tYnV0dG9uJykpIHtcbiAgICBmbGlwQ2FyZChoeWRyYXRpb25NYWluQ2FyZCwgaHlkcmF0aW9uSW5mb0NhcmQpO1xuICB9XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoeWRyYXRpb24tZnJpZW5kcy1idXR0b24nKSkge1xuICAgIGZsaXBDYXJkKGh5ZHJhdGlvbk1haW5DYXJkLCBoeWRyYXRpb25GcmllbmRzQ2FyZCk7XG4gIH1cbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2h5ZHJhdGlvbi1jYWxlbmRhci1idXR0b24nKSkge1xuICAgIGZsaXBDYXJkKGh5ZHJhdGlvbk1haW5DYXJkLCBoeWRyYXRpb25DYWxlbmRhckNhcmQpO1xuICB9XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoeWRyYXRpb24tZ28tYmFjay1idXR0b24nKSkge1xuICAgIGZsaXBDYXJkKGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLCBoeWRyYXRpb25NYWluQ2FyZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlQWxsRGlzcGxheXMoKSB7XG4gIHVwZGF0ZVVzZXJEaXNwbGF5KCk7XG4gIHVwZGF0ZVVzZXJTbGVlcERpc3BsYXkoKTtcbiAgdXBkYXRlVXNlclN0ZXBEaXNwbGF5KCk7XG4gIHVwZGF0ZVVzZXJTdGFpckRpc3BsYXkoKTtcbiAgdXBkYXRlVXNlckh5ZHJhdGlvbkRpc3BsYXkoKTtcbiAgdXBkYXRlVXNlckZyaWVuZHNEaXNwbGF5KCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVVzZXJEaXNwbGF5KCkge1xuICBkcm9wZG93bkdvYWwuaW5uZXJUZXh0ID0gYERBSUxZIFNURVAgR09BTCB8ICR7dXNlci5kYWlseVN0ZXBHb2FsfWA7XG4gIGRyb3Bkb3duQ2Fsb3JpZXMuaW5uZXJUZXh0ID0gYERBSUxZIENBTE9SSUVTIEJVUk5FRCB8ICR7dXNlci5hY3Rpdml0eVJlcG9zaXRvcnkuY2FsY3VsYXRlRGFpbHlDYWxvcmllcyh0b2RheURhdGUpfWBcbiAgZHJvcGRvd25FbWFpbC5pbm5lclRleHQgPSBgRU1BSUwgfCAke3VzZXIuZW1haWx9YDtcbiAgZHJvcGRvd25OYW1lLmlubmVyVGV4dCA9IHVzZXIubmFtZS50b1VwcGVyQ2FzZSgpO1xuICBoZWFkZXJOYW1lLmlubmVyVGV4dCA9IGAke3VzZXIuZ2V0Rmlyc3ROYW1lKCl9J1MgYDtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVXNlclNsZWVwRGlzcGxheSgpIHtcbiAgbGV0IGxvbmdlc3RTbGVlcGVyID0gdXNlclJlcG9zaXRvcnkuZ2V0TG9uZ2VzdFNsZWVwZXIodG9kYXlEYXRlKTtcbiAgbGV0IHdvcnN0U2xlZXBlciA9IHVzZXJSZXBvc2l0b3J5LmdldFdvcnN0U2xlZXBlcih0b2RheURhdGUpO1xuICBzbGVlcEluZm9Ib3Vyc0F2ZXJhZ2VBbGx0aW1lLmlubmVyVGV4dCA9IHVzZXIuc2xlZXBSZXBvc2l0b3J5LmhvdXJzU2xlcHRBdmVyYWdlO1xuICBpZiAodHlwZW9mIGxvbmdlc3RTbGVlcGVyID09PSAnc3RyaW5nJykge1xuICAgIHNsZWVwRnJpZW5kTG9uZ2VzdFNsZWVwZXIuaW5uZXJUZXh0ID0gbG9uZ2VzdFNsZWVwZXI7XG4gIH0gZWxzZSB7XG4gICAgc2xlZXBGcmllbmRMb25nZXN0U2xlZXBlci5pbm5lclRleHQgPSBsb25nZXN0U2xlZXBlci5nZXRGaXJzdE5hbWUoKTtcbiAgfVxuICBpZiAodHlwZW9mIHdvcnN0U2xlZXBlciA9PT0gJ3N0cmluZycpIHtcbiAgICBzbGVlcEZyaWVuZFdvcnN0U2xlZXBlci5pbm5lclRleHQgPSB3b3JzdFNsZWVwZXI7XG4gIH0gZWxzZSB7XG4gICAgc2xlZXBGcmllbmRXb3JzdFNsZWVwZXIuaW5uZXJUZXh0ID0gd29yc3RTbGVlcGVyLmdldEZpcnN0TmFtZSgpO1xuICB9XG4gIHNsZWVwSW5mb1F1YWxpdHlBdmVyYWdlQWxsdGltZS5pbm5lclRleHQgPSB1c2VyLnNsZWVwUmVwb3NpdG9yeS5zbGVlcFF1YWxpdHlBdmVyYWdlO1xuICBzbGVlcENhbGVuZGFySG91cnNBdmVyYWdlV2Vla2x5LmlubmVyVGV4dCA9IHVzZXIuc2xlZXBSZXBvc2l0b3J5LmF2ZXJhZ2VXZWVrbHlTbGVlcEhvdXJzKHRvZGF5RGF0ZSk7XG4gIHNsZWVwQ2FsZW5kYXJRdWFsaXR5QXZlcmFnZVdlZWtseS5pbm5lclRleHQgPSB1c2VyLnNsZWVwUmVwb3NpdG9yeS5hdmVyYWdlV2Vla2x5U2xlZXBRdWFsaXR5KHRvZGF5RGF0ZSk7XG4gIHNsZWVwVXNlckhvdXJzVG9kYXkuaW5uZXJUZXh0ID0gdXNlci5zbGVlcFJlcG9zaXRvcnkuZmluZEhvdXJzU2xlcHQodG9kYXlEYXRlKTtcbiAgc2xlZXBJbmZvUXVhbGl0eVRvZGF5LmlubmVyVGV4dCA9IHVzZXIuc2xlZXBSZXBvc2l0b3J5LmZpbmRTbGVlcFF1YWxpdHkodG9kYXlEYXRlKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVXNlclN0ZXBEaXNwbGF5KCkge1xuICB1cGRhdGVVc2VyU3RlcEluZm9DYXJkKCk7XG4gIHVwZGF0ZVVzZXJTdGVwRnJpZW5kc0NhcmQoKTtcbiAgdXBkYXRlVHJlbmRpbmdTdGVwRGF5cygpO1xuICBzdGVwc0NhbGVuZGFyVG90YWxBY3RpdmVNaW51dGVzV2Vla2x5LmlubmVyVGV4dCA9IHVzZXIuYWN0aXZpdHlSZXBvc2l0b3J5LmF2ZXJhZ2VXZWVrbHlNaW51dGVzQWN0aXZlKHRvZGF5RGF0ZSk7XG4gIHN0ZXBzQ2FsZW5kYXJUb3RhbFN0ZXBzV2Vla2x5LmlubmVyVGV4dCA9IHVzZXIuYWN0aXZpdHlSZXBvc2l0b3J5LmNhbGN1bGF0ZUF2ZXJhZ2VTdGVwc1RoaXNXZWVrKHRvZGF5RGF0ZSk7XG4gIHN0ZXBzSW5mb0FjdGl2ZU1pbnV0ZXNUb2RheS5pbm5lclRleHQgPSB1c2VyLmFjdGl2aXR5UmVwb3NpdG9yeS5jYWxjdWxhdGVBY3RpdmVNaW51dGVzKHRvZGF5RGF0ZSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVVzZXJTdGVwSW5mb0NhcmQoKSB7XG4gIHN0ZXBzVXNlclN0ZXBzVG9kYXkuaW5uZXJUZXh0ID0gdXNlci5hY3Rpdml0eVJlcG9zaXRvcnkuZmluZFN0ZXBzKHRvZGF5RGF0ZSk7XG5cbiAgc3RlcHNJbmZvTWlsZXNXYWxrZWRUb2RheS5pbm5lclRleHQgPSB1c2VyLmFjdGl2aXR5UmVwb3NpdG9yeS5jYWxjdWxhdGVNaWxlc1dhbGtlZCh0b2RheURhdGUpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVVc2VyU3RlcEZyaWVuZHNDYXJkKCkge1xuICBzdGVwc0ZyaWVuZEFjdGl2ZU1pbnV0ZXNBdmVyYWdlVG9kYXkuaW5uZXJUZXh0ID0gdXNlclJlcG9zaXRvcnkuY2FsY3VsYXRlQXZlcmFnZU1pbnV0ZXNBY3RpdmUodG9kYXlEYXRlKTtcbiAgc3RlcHNGcmllbmRTdGVwc0F2ZXJhZ2VUb2RheS5pbm5lclRleHQgPSB1c2VyUmVwb3NpdG9yeS5jYWxjdWxhdGVBdmVyYWdlU3RlcHModG9kYXlEYXRlKTtcbiAgc3RlcHNGcmllbmRBdmVyYWdlU3RlcEdvYWwuaW5uZXJUZXh0ID0gdXNlclJlcG9zaXRvcnkuY2FsY3VsYXRlQXZlcmFnZVN0ZXBHb2FsKCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVVzZXJTdGFpckRpc3BsYXkoKSB7XG4gIHVwZGF0ZVVzZXJTdGFpckluZm9DYXJkKCk7XG4gIHVwZGF0ZVVzZXJTdGFpckZyaWVuZHNDYXJkKCk7XG4gIHVwZGF0ZVRyZW5kaW5nU3RhaXJzRGF5cygpO1xuICBzdGFpcnNDYWxlbmRhckZsaWdodHNBdmVyYWdlV2Vla2x5LmlubmVyVGV4dCA9IHVzZXIuYWN0aXZpdHlSZXBvc2l0b3J5LmNhbGN1bGF0ZUF2ZXJhZ2VTdGFpcnNUaGlzV2Vlayh0b2RheURhdGUpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVVc2VyU3RhaXJJbmZvQ2FyZCgpIHtcbiAgc3RhaXJzVXNlclN0YWlyc1RvZGF5LmlubmVyVGV4dCA9IHVzZXIuYWN0aXZpdHlSZXBvc2l0b3J5LmZpbmRTdGFpcnModG9kYXlEYXRlKTtcbiAgc3RhaXJzSW5mb0ZsaWdodHNUb2RheS5pbm5lclRleHQgPSB1c2VyLmFjdGl2aXR5UmVwb3NpdG9yeS5maW5kRmxpZ2h0c09mU3RhaXJzKHRvZGF5RGF0ZSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVVzZXJTdGFpckZyaWVuZHNDYXJkKCkge1xuICBzdGFpcnNDYWxlbmRhclN0YWlyc0F2ZXJhZ2VXZWVrbHkuaW5uZXJUZXh0ID0gKHVzZXJSZXBvc2l0b3J5LmNhbGN1bGF0ZUF2ZXJhZ2VTdGFpcnModG9kYXlEYXRlKSAqIDEyKS50b0ZpeGVkKDApO1xuICBzdGFpcnNGcmllbmRGbGlnaHRzQXZlcmFnZVRvZGF5LmlubmVyVGV4dCA9IHVzZXJSZXBvc2l0b3J5LmNhbGN1bGF0ZUF2ZXJhZ2VTdGFpcnModG9kYXlEYXRlKS50b0ZpeGVkKDApO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVVc2VySHlkcmF0aW9uRGlzcGxheSgpIHtcbiAgdXBkYXRlV2Vla2x5T3VuY2VzQnlEYXkoKTtcbiAgaHlkcmF0aW9uSW5mb0dsYXNzZXNUb2RheS5pbm5lclRleHQgPSB1c2VyLmh5ZHJhdGlvblJlcG9zaXRvcnkuZmluZE91bmNlcyh0b2RheURhdGUpO1xuICBoeWRyYXRpb25Vc2VyT3VuY2VzVG9kYXkuaW5uZXJUZXh0ID0gdXNlci5oeWRyYXRpb25SZXBvc2l0b3J5LmZpbmRPdW5jZXModG9kYXlEYXRlKTtcbiAgaHlkcmF0aW9uRnJpZW5kT3VuY2VzVG9kYXkuaW5uZXJUZXh0ID0gdXNlclJlcG9zaXRvcnkuY2FsY3VsYXRlQWxsT3VuY2VzKHRvZGF5RGF0ZSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVdlZWtseU91bmNlc0J5RGF5KCkge1xuICBsZXQgaHlkcmF0aW9uRGF0YUJ5RGF0ZSA9IHVzZXIuaHlkcmF0aW9uUmVwb3NpdG9yeS5maW5kV2Vla2x5T3VuY2VzKHRvZGF5RGF0ZSk7XG4gIGh5ZHJhdGlvbkNhbGVuZGFyQ2FyZC5pbm5lckhUTUwgPSBgPGJ1dHRvbiB0eXBlPSdidXR0b24nIG5hbWU9J2J1dHRvbicgY2xhc3M9J2dvLWJhY2stYnV0dG9uIGh5ZHJhdGlvbi1nby1iYWNrLWJ1dHRvbic+PC9idXR0b24+YFxuICBsZXQgaHRtbDtcbiAgaWYgKGh5ZHJhdGlvbkRhdGFCeURhdGUubGVuZ3RoIDwgNykge1xuICAgIGh0bWwgPSBgPHAgY2xhc3M9XCJ3ZWVrbHktb3VuY2VzXCI+U29ycnksIHlvdSBvbmx5IGhhdmUgJHtoeWRyYXRpb25EYXRhQnlEYXRlLmxlbmd0aH0gZGF5KHMpIG9mIGRhdGEuIDxicj4gSGVyZSBpcyB0aGUgaW5mbyB3ZSBoYXZlIGZvciB0aGUgc2VsZWN0ZWQgdGltZSBwZXJpb2QuPC9wPjxicj5cbiAgICA8cCBjbGFzcz1cIndlZWtseS1vdW5jZXNcIj4ke2h5ZHJhdGlvbkRhdGFCeURhdGUubWFwKGRhdGEgPT4ge3JldHVybiBgJHtkYXRhLmRhdGV9ICR7ZGF0YS5vdW5jZXN9T1pgICsgXCI8YnI+XCJ9KS5qb2luKCcnKX08L3A+YFxuICB9IGVsc2Uge1xuICAgIGh0bWwgPSBgPHAgY2xhc3M9XCJ3ZWVrbHktb3VuY2VzXCI+V0VFSyBPRjogJHtoeWRyYXRpb25EYXRhQnlEYXRlWzZdLmRhdGV9PC9wPjxicj5cbiAgICAgIDxwIGNsYXNzPVwid2Vla2x5LW91bmNlc1wiPllFU1RFUkRBWTogJHtoeWRyYXRpb25EYXRhQnlEYXRlWzBdLm91bmNlc30gT1o8L3A+XG4gICAgICA8cCBjbGFzcz1cIndlZWtseS1vdW5jZXNcIj4yIERBWVM6ICR7aHlkcmF0aW9uRGF0YUJ5RGF0ZVsxXS5vdW5jZXN9IE9aPC9wPlxuICAgICAgPHAgY2xhc3M9XCJ3ZWVrbHktb3VuY2VzXCI+MyBEQVlTOiAke2h5ZHJhdGlvbkRhdGFCeURhdGVbMl0ub3VuY2VzfSBPWjwvcD5cbiAgICAgIDxwIGNsYXNzPVwid2Vla2x5LW91bmNlc1wiPjQgREFZUzogJHtoeWRyYXRpb25EYXRhQnlEYXRlWzNdLm91bmNlc30gT1o8L3A+XG4gICAgICA8cCBjbGFzcz1cIndlZWtseS1vdW5jZXNcIj41IERBWVM6ICR7aHlkcmF0aW9uRGF0YUJ5RGF0ZVs0XS5vdW5jZXN9IE9aPC9wPlxuICAgICAgPHAgY2xhc3M9XCJ3ZWVrbHktb3VuY2VzXCI+NiBEQVlTOiAke2h5ZHJhdGlvbkRhdGFCeURhdGVbNV0ub3VuY2VzfSBPWjwvcD5cbiAgICAgIDxwIGNsYXNzPVwid2Vla2x5LW91bmNlc1wiPjcgREFZUzogJHtoeWRyYXRpb25EYXRhQnlEYXRlWzZdLm91bmNlc30gT1o8L3A+YFxuICB9XG4gIGh5ZHJhdGlvbkNhbGVuZGFyQ2FyZC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGh0bWwpXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVVzZXJGcmllbmRzRGlzcGxheSgpIHtcbiAgbGV0IGZyaWVuZHMgPSB1c2VyUmVwb3NpdG9yeS5nZXRGcmllbmRzU3RlcHModXNlci5pZCwgdG9kYXlEYXRlKTtcblxuICBsZXQgaHRtbCA9IGA8cCBjbGFzcz1cImRyb3Bkb3duLXBcIj4ke2ZyaWVuZHMubWFwKGZyaWVuZCA9PiB7cmV0dXJuIGAke2ZyaWVuZC5uYW1lfSB8ICR7ZnJpZW5kLnN0ZXBzfWAgKyBcIjxicj5cIn0pLmpvaW4oJycpfTwvcD5gXG5cbiAgZHJvcGRvd25GcmllbmRzU3RlcHNDb250YWluZXIuaW5uZXJIVE1MID0gaHRtbDtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVHJlbmRpbmdTdGFpcnNEYXlzKCkge1xuICB0cmVuZGluZ1N0YWlyc1BocmFzZUNvbnRhaW5lci5pbm5lclRleHQgPSB1c2VyLmFjdGl2aXR5UmVwb3NpdG9yeS5maW5kVHJlbmRpbmdTdGFpcnNEYXlzKCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRyZW5kaW5nU3RlcERheXMoKSB7XG4gIHRyZW5kaW5nU3RlcHNQaHJhc2VDb250YWluZXIuaW5uZXJIVE1MID0gdXNlci5hY3Rpdml0eVJlcG9zaXRvcnkuZmluZFRyZW5kaW5nU3RlcERheXMoKTtcbn1cblxuZnVuY3Rpb24gc2hvd0hvbWVQYWdlKCkge1xuICBtYWluUGFnZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gIGFkZEFjdGl2aXR5QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgYWRkSHlkcmF0aW9uQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgYWRkU2xlZXBCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICBjYWxlbmRhcklucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgaW5wdXREYXRlLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbn1cblxuZnVuY3Rpb24gaGlkZUhvbWVQYWdlKCkge1xuICBtYWluUGFnZS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gIGFkZEFjdGl2aXR5QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgYWRkSHlkcmF0aW9uQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgYWRkU2xlZXBCdXR0b24uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICBjYWxlbmRhcklucHV0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgaW5wdXREYXRlLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbn1cblxuZnVuY3Rpb24gc2hvd0FjdGl2aXR5Rm9ybSgpIHtcbiAgaGlkZUhvbWVQYWdlKCk7XG4gIGFjdGl2aXR5Rm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG59XG5cbmZ1bmN0aW9uIHNob3dTbGVlcERhdGEoKSB7XG4gIGhpZGVIb21lUGFnZSgpO1xuICBzbGVlcEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xufVxuXG5mdW5jdGlvbiBzaG93SHlkcmF0aW9uRm9ybSgpIHtcbiAgaGlkZUhvbWVQYWdlKCk7XG4gIGh5ZHJhdGlvbkZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xufVxuXG5mdW5jdGlvbiBwb3N0QWN0aXZpdHlEYXRhKCkge1xuICBsZXQgb25TdWNjZXNzID0gKCkgPT4ge1xuICAgIHNob3dIb21lUGFnZSgpO1xuICAgIGFjdGl2aXR5Rm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gIH1cbiAgbGV0IHJhd0FjdGl2aXR5ID0ge3VzZXJJRDogdXNlci5pZCwgZGF0ZTogdXNlckRhdGVJbnB1dCwgbnVtU3RlcHM6IGFjdGl2aXR5U3RlcHNJbnB1dC52YWx1ZSwgbWludXRlc0FjdGl2ZTogYWN0aXZpdHlNaW51dGVzSW5wdXQudmFsdWUsIGZsaWdodHNPZlN0YWlyczogZmxpZ2h0U3RhaXJzSW5wdXQudmFsdWV9O1xuICB1c2VyLmFjdGl2aXR5UmVwb3NpdG9yeS5jcmVhdGVOZXdBY3Rpdml0eShyYXdBY3Rpdml0eSk7XG4gIGFjdGl2aXR5U2VydmljZS5wb3N0RGF0YShyYXdBY3Rpdml0eSwgb25TdWNjZXNzKTtcbn1cblxuZnVuY3Rpb24gcG9zdEh5ZHJhdGlvbkRhdGEoKSB7XG4gIGxldCBvblN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgc2hvd0hvbWVQYWdlKCk7XG4gICAgaHlkcmF0aW9uRm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gIH1cbiAgbGV0IHJhd0h5ZHJhdGlvbiA9IHt1c2VySUQ6IHVzZXIuaWQsIGRhdGU6IHVzZXJEYXRlSW5wdXQsIG51bU91bmNlczogb3VuY2VzRHJhbmtJbnB1dC52YWx1ZX1cbiAgdXNlci5oeWRyYXRpb25SZXBvc2l0b3J5LmNyZWF0ZU5ld0h5ZHJhdGlvbihyYXdIeWRyYXRpb24pO1xuICBoeWRyYXRpb25TZXJ2aWNlLnBvc3REYXRhKHJhd0h5ZHJhdGlvbiwgb25TdWNjZXNzKTtcbn1cblxuZnVuY3Rpb24gcG9zdFNsZWVwRGF0YSgpIHtcbiAgbGV0IG9uU3VjY2VzcyA9ICgpID0+IHtcbiAgICBzaG93SG9tZVBhZ2UoKTtcbiAgICBzbGVlcEZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICB9XG4gIGxldCByYXdTbGVlcCA9IHt1c2VySUQ6IHVzZXIuaWQsIGRhdGU6IHVzZXJEYXRlSW5wdXQsIGhvdXJzU2xlcHQ6IGhvdXJzU2xlcHRJbnB1dC52YWx1ZSwgc2xlZXBRdWFsaXR5OiBzbGVlcFF1YWxpdHlJbnB1dC52YWx1ZX1cbiAgdXNlci5zbGVlcFJlcG9zaXRvcnkuY3JlYXRlTmV3U2xlZXAocmF3U2xlZXApO1xuICBzbGVlcFNlcnZpY2UucG9zdERhdGEocmF3U2xlZXAsIG9uU3VjY2Vzcyk7XG59XG4iLCJpbXBvcnQgU2VydmljZSBmcm9tICcuL1NlcnZpY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3Rpdml0eVNlcnZpY2UgZXh0ZW5kcyBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IodXJsLCBkYXRhS2V5KSB7XG4gICAgc3VwZXIodXJsLCBkYXRhS2V5KVxuICB9XG59XG4iLCJpbXBvcnQgU2VydmljZSBmcm9tICcuL1NlcnZpY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIeWRyYXRpb25TZXJ2aWNlIGV4dGVuZHMgU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHVybCwgZGF0YUtleSkge1xuICAgIHN1cGVyKHVybCwgZGF0YUtleSlcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHVybCwgZGF0YUtleSkge1xuICAgIHRoaXMudXJsID0gdXJsO1xuICAgIHRoaXMuZGF0YUtleSA9IGRhdGFLZXk7XG4gIH1cblxuICBmZXRjaERhdGEoKSB7XG4gICAgcmV0dXJuIGZldGNoKHRoaXMudXJsKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiBkYXRhW3RoaXMuZGF0YUtleV0pXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXG4gIH1cblxuICBwb3N0RGF0YShuZXdQb3N0LCBvblN1Y2Nlc3MpIHtcbiAgICByZXR1cm4gZmV0Y2godGhpcy51cmwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICBcdCAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3UG9zdClcbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihqc29uID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGpzb24pO1xuICAgICAgb25TdWNjZXNzKCk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXG4gIH1cbn1cbiIsImltcG9ydCBTZXJ2aWNlIGZyb20gJy4vU2VydmljZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNsZWVwU2VydmljZSBleHRlbmRzIFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcih1cmwsIGRhdGFLZXkpIHtcbiAgICBzdXBlcih1cmwsIGRhdGFLZXkpXG4gIH1cbn1cbiIsImltcG9ydCBTZXJ2aWNlIGZyb20gJy4vU2VydmljZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJTZXJ2aWNlIGV4dGVuZHMgU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHVybCwgZGF0YUtleSkge1xuICAgIHN1cGVyKHVybCwgZGF0YUtleSlcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==