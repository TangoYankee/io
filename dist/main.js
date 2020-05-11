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
/******/ 	__webpack_require__.p = "./dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/components/AboutMe/index.css":
/*!******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/components/AboutMe/index.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#resume{\n  border-color: #252f3e;\n  border-style: solid;\n  border-width: 0.1rem;\n  border-radius: 0.3rem;\n  height: 2.5rem;\n  width: 8.5rem;\n  margin-left: 1.0rem;\n  background-color: white;\n}\n\n#resume:hover {\n  border-color: #822133;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/components/Footer/index.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/components/Footer/index.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "footer {\n  bottom: 0;\n  position: absolute;\n  left: 0;\n  width: 100%;\n  margin: auto;\n  height: 2.5rem;\n  background-color: #252f3e;\n  \n  border-top-style: solid;\n  border-top-color:  #454540;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/components/Header/index.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/components/Header/index.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "header {\n  top: 0;\n  position: absolute;\n  left: 0;\n  width: 100%;\n  margin: auto;\n  height: 2.5rem;\n  background-color: #252f3e;\n  border-bottom-style: solid;\n  border-bottom-color:  #454540;\n}\n\nheader div.title-container {\n  max-width: 70rem;\n  margin: auto;\n}\n\nheader span.title{\n  color: white;\n  font-size: 1.5rem;\n  float: right;\n  margin-top: 0.2rem;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/components/Hero/HeroLink/index.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/components/Hero/HeroLink/index.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/components/Hero/index.css":
/*!***************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/components/Hero/index.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "img#portrait {\n  display: flex;\n  margin: auto;\n  border-radius: 0.5rem;\n  border-style: solid;\n  border-width: 0.18rem;\n  border-color: #454540;\n}\n\nimg.contact-icon {\n  height: 1.75rem;\n  width: 1.75rem;\n  margin: 0.5rem;\n}\n\ndiv.contact-container {\n  display: inline-flex;\n  justify-content: left;\n}\n\ndiv.hero-link-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  margin: auto;\n  width: 15rem;\n}\n\ndiv.hero-link-container a {\n  display: none;\n  margin: auto 0;\n}\n\ndiv.hero-link-container.active {\n  flex-direction: column;\n}\n\ndiv.hero-link-container.active a {\n  display: flex;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/components/Projects/index.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/components/Projects/index.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".project-link {\n  display: inline-flex;\n  border-style: solid;\n  border-width: 0.1rem;\n  border-radius: 0.3rem;\n  border-color: white;\n}\n\n.project-link:hover {\n  border-color: #252f3e;\n}\n\n.project img {\n  width: 50px;\n  height: 50px;\n  overflow: hidden;\n  float: left;\n  margin: 0.25rem;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./src/index.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./src/index.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html {\n  position: relative;\n  min-height: 100%;\n  width: 100%;\n  padding: 0;\n}\n\nhtml, body {\n  color: #454540;\n  font-family: Merriweather Web, Georgia, Cambria, Times New Roman, Times, serif;\n}\n\nbody {\n  max-width: 75rem;\n  margin: auto;\n  padding: 6.0rem 1.0rem 4.0rem;\n}\n\nh1 {\n  color: #252f3e;\n  border-bottom-style: solid;\n  border-bottom-color: #822133;\n  border-bottom-width: 0.15rem;\n}\n\nh2 {\n  margin: 0.5rem;\n  padding: 0.5rem;\n}\n\np {\n  padding: 0.5rem;\n  margin: 0.5rem;\n}\n\na:link {\n  color: #0050d8;\n}\n\na:visited{\n  color: #864381;\n}\n", ""]);
// Exports
module.exports = exports;


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
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/components/AboutMe/index.css":
/*!******************************************!*\
  !*** ./src/components/AboutMe/index.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./src/components/AboutMe/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/AboutMe/index.tsx":
/*!******************************************!*\
  !*** ./src/components/AboutMe/index.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
__webpack_require__(/*! components/AboutMe/index.css */ "./src/components/AboutMe/index.css");
function AboutMe() {
    return (React.createElement("div", { id: "about-me" },
        React.createElement("h1", null, "About Me"),
        React.createElement(AboutMeContent, null),
        React.createElement(Resume, null)));
}
exports.AboutMe = AboutMe;
function AboutMeContent() {
    return (React.createElement("div", null,
        React.createElement("p", null, "Hello! I'm Tim Miller. I'm a full stack web developer, bioengineer, and former air traffic controller (ATC) for The U.S Air Force. TangoYankee comes from the NATO phonetic letters of my ATC operating intials. Every controller has a set unique to their facility. Whenever they coordinate with another controller, each controller signs off with their initials. It's git blame for aviators!"),
        React.createElement("p", null,
            "Before serving in the Air Force, I graduated from ",
            React.createElement("a", { title: "Binghamton U", href: "https://binghamton.edu/", target: "_blank", rel: "noopener noreferrer" }, "SUNY Binghamton"),
            " with a degree in bioengineering. In the bioengineering program, I used mathematics to model the world as a series of complex systems. These systems grow and adapt to both instigate and react to change. For example, economies consist of people interacting through the exchange of goods and services. Over time, our economy has changed from agrarian, through industrial, and now to informational. Along the way, it experienced countless booms and busts. A bioengineer's goal is to model, predict, and influence that change to acheive a desirable outcome. You can learn more about complexity at the ",
            React.createElement("a", { title: "NECSI", href: "https://necsi.edu/", target: "_blank", rel: "noopener noreferrer" }, "New England Complex Systems Institute"),
            "."),
        React.createElement("p", null, "My complex systems perspective led me to become a web developer. The internet is the complex system used to influence other complex systems. Computers, users, and developers interact to build a network of information. This information is then used in decisions for businesses, governments, scientific studies, and countless other applications. It's a bioengineer's dream."),
        React.createElement("p", null, "Of course, bioengineering and air traffic control have only gone so far to prep me to be a web developer. Over the years, I've honed those skills through various team and individual projects. You can see these skills through the resume, projects, and GitHub portfolio included below. Thank you for visiting!")));
}
class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.openResume = this.openResume.bind(this);
    }
    openResume() {
        window.open('src/img/Tim Miller - Resume 10-Apr-2020.pdf', '_blank', 'renoopener noreferer');
    }
    render() {
        return (React.createElement("button", { id: "resume", onClick: this.openResume }, "View Resume"));
    }
}


/***/ }),

/***/ "./src/components/App/index.tsx":
/*!**************************************!*\
  !*** ./src/components/App/index.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const AboutMe_1 = __webpack_require__(/*! components/AboutMe */ "./src/components/AboutMe/index.tsx");
const Header_1 = __webpack_require__(/*! components/Header */ "./src/components/Header/index.tsx");
const Hero_1 = __webpack_require__(/*! components/Hero */ "./src/components/Hero/index.tsx");
const Projects_1 = __webpack_require__(/*! components/Projects */ "./src/components/Projects/index.tsx");
const Footer_1 = __webpack_require__(/*! components/Footer */ "./src/components/Footer/index.tsx");
class App extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement(Header_1.Header, null),
            React.createElement(Hero_1.Hero, null),
            React.createElement(AboutMe_1.AboutMe, null),
            React.createElement(Projects_1.Projects, null),
            React.createElement(Footer_1.Footer, null)));
    }
}
exports.App = App;


/***/ }),

/***/ "./src/components/Footer/index.css":
/*!*****************************************!*\
  !*** ./src/components/Footer/index.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./src/components/Footer/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/Footer/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Footer/index.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
__webpack_require__(/*! components/Footer/index.css */ "./src/components/Footer/index.css");
function Footer() {
    return (React.createElement("footer", null));
}
exports.Footer = Footer;


/***/ }),

/***/ "./src/components/Header/index.css":
/*!*****************************************!*\
  !*** ./src/components/Header/index.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./src/components/Header/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
__webpack_require__(/*! components/Header/index.css */ "./src/components/Header/index.css");
function Header() {
    return (React.createElement("header", null,
        React.createElement("div", { className: "title-container" },
            React.createElement("span", { className: "title" }, "__tangoyankee__"))));
}
exports.Header = Header;


/***/ }),

/***/ "./src/components/Hero/HeroLink/index.css":
/*!************************************************!*\
  !*** ./src/components/Hero/HeroLink/index.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./src/components/Hero/HeroLink/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/Hero/HeroLink/index.tsx":
/*!************************************************!*\
  !*** ./src/components/Hero/HeroLink/index.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
__webpack_require__(/*! components/Hero/HeroLink/index.css */ "./src/components/Hero/HeroLink/index.css");
const linkedInIcon = __webpack_require__(/*! img/linkedin-logo.png */ "./src/img/linkedin-logo.png");
const githubIcon = __webpack_require__(/*! img/GitHub-Mark-64px.png */ "./src/img/GitHub-Mark-64px.png");
const emailIcon = __webpack_require__(/*! img/baseline_email_black_18dp.png */ "./src/img/baseline_email_black_18dp.png");
exports.heroLinks = [
    {
        icon: linkedInIcon,
        title: 'linkedin.com/in/timothy-m-miller/',
        href: 'https://www.linkedin.com/in/timothy-m-miller/',
        display: '/timothy-m-miller'
    },
    {
        icon: githubIcon,
        title: 'github.com/tangoyankee',
        href: 'https://github.com/tangoyankee',
        display: '@tangoyankee'
    },
    {
        icon: emailIcon,
        title: 'mailto:miller.tim108@gmail.com',
        href: 'mailto:miller.tim108@gmail.com',
        display: 'miller.tim108@gmail.com'
    }
];
class HeroLink extends React.Component {
    render() {
        return (React.createElement("div", { className: "contact-container" },
            React.createElement("img", { className: "contact-icon", src: this.props.icon, alt: "icon" }),
            React.createElement("a", { href: this.props.href, title: this.props.title, target: "_blank", rel: "noopener noreferrer" }, this.props.display)));
    }
}
exports.HeroLink = HeroLink;


/***/ }),

/***/ "./src/components/Hero/index.css":
/*!***************************************!*\
  !*** ./src/components/Hero/index.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./src/components/Hero/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/Hero/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Hero/index.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
__webpack_require__(/*! components/Hero/index.css */ "./src/components/Hero/index.css");
const HeroLink_1 = __webpack_require__(/*! components/Hero/HeroLink */ "./src/components/Hero/HeroLink/index.tsx");
const portrait = __webpack_require__(/*! img/portrait.jpg */ "./src/img/portrait.jpg");
function Hero() {
    return (React.createElement("div", { className: "hero" },
        React.createElement(HeroImg, null),
        React.createElement(HeroContact, null)));
}
exports.Hero = Hero;
function HeroImg() {
    return (React.createElement("img", { id: "portrait", src: portrait, title: "Timothy Miller", alt: "Portrait of Timothy Miller" }));
}
class HeroContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showLinks: false
        };
        this.toggleLinks = this.toggleLinks.bind(this);
    }
    toggleLinks() {
        this.setState(state => ({ showLinks: !state.showLinks }));
    }
    render() {
        const heroItems = HeroLink_1.heroLinks.map((heroItem) => React.createElement(HeroLink_1.HeroLink, { key: heroItem.title, icon: heroItem.icon, title: heroItem.title, href: heroItem.href, display: heroItem.display }));
        return (React.createElement("div", { className: `hero-link-container ' ${this.state.showLinks ? 'active' : null}`, onClick: this.toggleLinks }, heroItems));
    }
}


/***/ }),

/***/ "./src/components/Projects/Project/index.tsx":
/*!***************************************************!*\
  !*** ./src/components/Projects/Project/index.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const ssslines = __webpack_require__(/*! img/Ssslines.ico */ "./src/img/Ssslines.ico");
const sparkLogo = __webpack_require__(/*! img/spark-logo.png */ "./src/img/spark-logo.png");
const logo36 = __webpack_require__(/*! img/logo36.ico */ "./src/img/logo36.ico");
exports.projectList = [
    {
        linkTitle: 'safe browse for slack',
        href: 'safebrowse',
        imgSrc: ssslines,
        imgTitle: 'SSSlines',
        imgAlt: 'S with multiple lines',
        header: 'safebrowse for slack',
        text: "This Slack application allows users to check urls for threats reported through Google's Safe Browse API. " +
            'Slack users activate the check through the /safebrowse slash command. Each user can copy in suspicious urls and ' +
            'safe-browse-slack will return a report of suspected threats. It is written in Node.js with Express and tested with Jest.'
    },
    {
        linkTitle: 'spark website',
        href: 'spark',
        imgSrc: sparkLogo,
        imgTitle: 'phoenix spark',
        imgAlt: 'orange phoenix silhouette',
        header: 'spark',
        text: 'The Spark website was the original website for the Travis AFB Innovation Cell. It is a Jekyll site forked ' +
            'from code.mil and styled using The U.S Web Design System. The site was intended as a collaborative tool where ' +
            'Active Duty Airmen could learn about web development and open source software by working on a live site.'
    },
    {
        linkTitle: 'fundamentals',
        href: 'fundamentals',
        imgSrc: logo36,
        imgTitle: 'tangled favicon',
        imgAlt: 'tangled black line',
        header: 'cs fundamentals',
        text: "Fundamentals is a blog of data structures and algorithms. It's a flask application that renders " +
            'markdown pages as html.'
    }
];
class Project extends React.Component {
    render() {
        return (React.createElement("div", { className: "project" },
            React.createElement("a", { title: this.props.linkTitle, href: 'https://tangoyankee.io/' + this.props.href, target: "_blank", rel: "noopener noreferrer" },
                React.createElement("div", { className: "project-link" },
                    React.createElement("img", { src: this.props.imgSrc, title: this.props.imgTitle, alt: this.props.imgAlt }),
                    React.createElement("h2", null, this.props.header))),
            React.createElement("p", null, this.props.text)));
    }
}
exports.Project = Project;


/***/ }),

/***/ "./src/components/Projects/index.css":
/*!*******************************************!*\
  !*** ./src/components/Projects/index.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./src/components/Projects/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/Projects/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/Projects/index.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
__webpack_require__(/*! components/Projects/index.css */ "./src/components/Projects/index.css");
const Project_1 = __webpack_require__(/*! components/Projects/Project */ "./src/components/Projects/Project/index.tsx");
function Projects() {
    const projectItems = Project_1.projectList.map(project => React.createElement(Project_1.Project, { key: project.header, linkTitle: project.linkTitle, href: project.href, imgSrc: project.imgSrc, imgTitle: project.imgTitle, imgAlt: project.imgAlt, header: project.header, text: project.text }));
    return (React.createElement("div", { id: "projects" },
        React.createElement("h1", null, "Projects"),
        React.createElement("p", null,
            "This site is written in React with Typescript and bundled together with Webpack. Its minimalist presentation means it can be mobile friendly, accessible, and cross-browser compatible with little effort. Accessibility is checked in part using the ",
            React.createElement("a", { title: "accessibility evaluation", href: "https://wave.webaim.org/", target: "_blank", rel: "noopener noreferrer" }, "WAVE"),
            "web accessibility evaluation tool."),
        projectItems));
}
exports.Projects = Projects;


/***/ }),

/***/ "./src/img/GitHub-Mark-64px.png":
/*!**************************************!*\
  !*** ./src/img/GitHub-Mark-64px.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b039b2d83982c8256af34260e546303b.png";

/***/ }),

/***/ "./src/img/Ssslines.ico":
/*!******************************!*\
  !*** ./src/img/Ssslines.ico ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d4ad07861894c79dfd8724e15141f867.ico";

/***/ }),

/***/ "./src/img/baseline_email_black_18dp.png":
/*!***********************************************!*\
  !*** ./src/img/baseline_email_black_18dp.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d2de5b08fe8ad47e60c8b80e5dd0807d.png";

/***/ }),

/***/ "./src/img/linkedin-logo.png":
/*!***********************************!*\
  !*** ./src/img/linkedin-logo.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2f8caa45f4013d4cbd96da230c311959.png";

/***/ }),

/***/ "./src/img/logo36.ico":
/*!****************************!*\
  !*** ./src/img/logo36.ico ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9c50cacc93d61df90e2b4a16550dc3d7.ico";

/***/ }),

/***/ "./src/img/portrait.jpg":
/*!******************************!*\
  !*** ./src/img/portrait.jpg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "49ee30fd6a0b731c38c0135e9b43a480.jpg";

/***/ }),

/***/ "./src/img/spark-logo.png":
/*!********************************!*\
  !*** ./src/img/spark-logo.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f4f04973d71eb25419437f6605a9f4ac.png";

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-1!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./src/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
__webpack_require__(/*! index.css */ "./src/index.css");
const App_1 = __webpack_require__(/*! components/App */ "./src/components/App/index.tsx");
ReactDOM.render(React.createElement(App_1.App, null), document.getElementById('root'));


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ })

/******/ });
//# sourceMappingURL=main.js.map