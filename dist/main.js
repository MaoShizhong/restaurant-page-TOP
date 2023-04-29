/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./bgimage.jpg */ "./src/bgimage.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Cormorant:wght@300;400;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --scrollable: calc(100vh - 10rem - 6px);\n}\n\nbody {\n    background-attachment: fixed;\n    background-color: transparent;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    backdrop-filter: brightness(50%);\n    color: white;\n    font-family: 'Cormorant', serif;\n    margin: 0;\n    scrollbar-width: none;\n\n    &::-webkit-scrollbar {\n        width: 0;\n    }\n}\n\nheader {\n    background-color: rgba(0, 0, 0, 0.87);\n    border-bottom: 6px solid rgb(133, 116, 70);\n    position: sticky;\n    top: 0;\n    width: 100vw;\n    height: 10rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\nul {\n    font-size: 1.4rem;\n    display: flex;\n    gap: 2.5rem;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\n#content>div {\n    min-height: var(--scrollable);\n    overflow: auto;\n    scrollbar-width: none;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    animation: fadeIn 1s ease-in 1;\n\n    &::-webkit-scrollbar {\n        width: 0;\n    }\n}\n\n@keyframes fadeIn {\n    0% { opacity: 0; }\n    100% {opacity: 1; }\n}\n\n#home {\n    justify-content: center;\n    gap: 2rem;\n\n    &>* {\n        font-weight: 400;\n    }\n\n    &>h1 {\n        font-size: 5rem;\n        margin: 0;\n    }\n\n    &>h3 {\n        font-size: 1.8rem;\n        text-align: center;\n    }\n\n    &>p {\n        font-size: 1.2rem;\n        font-style: italic;\n    }\n}\n\n#menu {\n    background-color: rgba(0, 0, 0, 0.384);\n    height: var(--scrollable);\n\n    & h1 {\n        font-size: 2.6rem;\n        font-weight: 400;\n        margin: 2rem 0;\n    }\n\n    &>* {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n\n    &>#pick-bean {\n        margin-top: 3rem;\n    }\n\n    &>#pick-bean,\n    #espresso {\n        font-size: 1.5rem;\n        width: 90%;\n    }\n\n    &>#method>div {\n        font-size: 1.4rem;\n        display: flex;\n        justify-content: center;\n        gap: 114px;\n    }\n\n    &>#espresso {\n        margin-bottom: 4rem;\n        &>h2 {\n            font-size: inherit;\n            margin: 0 0 2rem;\n        }\n\n        &>.grid>div:last-child {\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n        }\n    }\n\n    & .grid {\n        width: clamp(400px, 100%, 1300px);\n        margin-bottom: 3rem;\n        display: grid;\n        justify-content: center;\n        grid-auto-rows: 10rem;\n        grid-template-columns: repeat(auto-fill, 20rem);\n        gap: 3rem;\n\n        & h3,\n        p {\n            margin: 0.2rem;\n        }\n    }\n}\n\n#contact {\n    &>#address {    \n        margin: 4rem auto 3rem;\n\n        &>p {\n            margin: 0;\n            font-size: 1.4rem;\n            text-align: center;\n        }\n\n        &>p:first-child,\n        &>p:last-child {\n            margin: 0.6rem;\n        }\n    }\n\n    &>form {\n        display: flex;\n        flex-direction: column;\n        gap: 1rem;\n\n        &>* {\n            font-family: inherit;\n            font-size: 1.3rem;\n            padding-left: 0.5rem;\n\n            &:focus {\n                outline: none;\n            }\n        }\n\n        &>textarea {\n            padding: 0.5rem;\n            resize: none;\n        }\n\n        &>button {\n            align-self: flex-end;\n            text-align: end;\n            font-size: 1.7rem;\n            font-weight: 700;\n        }\n    }\n}\n\nbutton {\n    background-color: transparent;\n    border: none;\n    color: inherit;\n    font-family: inherit;\n    font-size: inherit;\n    width: 8rem;\n\n    &:hover {\n        cursor: pointer;\n        font-weight: 700;\n    }\n}\n\n::placeholder {\n    color: #4b4b4b;\n    opacity: 1;\n}\n\n.invisible {\n    visibility: hidden;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,4BAA4B;IAC5B,6BAA6B;IAC7B,yDAAsC;IACtC,sBAAsB;IACtB,gCAAgC;IAChC,YAAY;IACZ,+BAA+B;IAC/B,SAAS;IACT,qBAAqB;;IAErB;QACI,QAAQ;IACZ;AACJ;;AAEA;IACI,qCAAqC;IACrC,0CAA0C;IAC1C,gBAAgB;IAChB,MAAM;IACN,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,WAAW;IACX,gBAAgB;IAChB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,6BAA6B;IAC7B,cAAc;IACd,qBAAqB;IACrB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,8BAA8B;;IAE9B;QACI,QAAQ;IACZ;AACJ;;AAEA;IACI,KAAK,UAAU,EAAE;IACjB,MAAM,UAAU,EAAE;AACtB;;AAEA;IACI,uBAAuB;IACvB,SAAS;;IAET;QACI,gBAAgB;IACpB;;IAEA;QACI,eAAe;QACf,SAAS;IACb;;IAEA;QACI,iBAAiB;QACjB,kBAAkB;IACtB;;IAEA;QACI,iBAAiB;QACjB,kBAAkB;IACtB;AACJ;;AAEA;IACI,sCAAsC;IACtC,yBAAyB;;IAEzB;QACI,iBAAiB;QACjB,gBAAgB;QAChB,cAAc;IAClB;;IAEA;QACI,aAAa;QACb,sBAAsB;QACtB,mBAAmB;IACvB;;IAEA;QACI,gBAAgB;IACpB;;IAEA;;QAEI,iBAAiB;QACjB,UAAU;IACd;;IAEA;QACI,iBAAiB;QACjB,aAAa;QACb,uBAAuB;QACvB,UAAU;IACd;;IAEA;QACI,mBAAmB;QACnB;YACI,kBAAkB;YAClB,gBAAgB;QACpB;;QAEA;YACI,aAAa;YACb,sBAAsB;YACtB,uBAAuB;QAC3B;IACJ;;IAEA;QACI,iCAAiC;QACjC,mBAAmB;QACnB,aAAa;QACb,uBAAuB;QACvB,qBAAqB;QACrB,+CAA+C;QAC/C,SAAS;;QAET;;YAEI,cAAc;QAClB;IACJ;AACJ;;AAEA;IACI;QACI,sBAAsB;;QAEtB;YACI,SAAS;YACT,iBAAiB;YACjB,kBAAkB;QACtB;;QAEA;;YAEI,cAAc;QAClB;IACJ;;IAEA;QACI,aAAa;QACb,sBAAsB;QACtB,SAAS;;QAET;YACI,oBAAoB;YACpB,iBAAiB;YACjB,oBAAoB;;YAEpB;gBACI,aAAa;YACjB;QACJ;;QAEA;YACI,eAAe;YACf,YAAY;QAChB;;QAEA;YACI,oBAAoB;YACpB,eAAe;YACf,iBAAiB;YACjB,gBAAgB;QACpB;IACJ;AACJ;;AAEA;IACI,6BAA6B;IAC7B,YAAY;IACZ,cAAc;IACd,oBAAoB;IACpB,kBAAkB;IAClB,WAAW;;IAEX;QACI,eAAe;QACf,gBAAgB;IACpB;AACJ;;AAEA;IACI,cAAc;IACd,UAAU;AACd;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Cormorant:wght@300;400;700&display=swap');\n\n:root {\n    --scrollable: calc(100vh - 10rem - 6px);\n}\n\nbody {\n    background-attachment: fixed;\n    background-color: transparent;\n    background-image: url('./bgimage.jpg');\n    background-size: cover;\n    backdrop-filter: brightness(50%);\n    color: white;\n    font-family: 'Cormorant', serif;\n    margin: 0;\n    scrollbar-width: none;\n\n    &::-webkit-scrollbar {\n        width: 0;\n    }\n}\n\nheader {\n    background-color: rgba(0, 0, 0, 0.87);\n    border-bottom: 6px solid rgb(133, 116, 70);\n    position: sticky;\n    top: 0;\n    width: 100vw;\n    height: 10rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\nul {\n    font-size: 1.4rem;\n    display: flex;\n    gap: 2.5rem;\n    list-style: none;\n    margin: 0;\n    padding: 0;\n}\n\n#content>div {\n    min-height: var(--scrollable);\n    overflow: auto;\n    scrollbar-width: none;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    animation: fadeIn 1s ease-in 1;\n\n    &::-webkit-scrollbar {\n        width: 0;\n    }\n}\n\n@keyframes fadeIn {\n    0% { opacity: 0; }\n    100% {opacity: 1; }\n}\n\n#home {\n    justify-content: center;\n    gap: 2rem;\n\n    &>* {\n        font-weight: 400;\n    }\n\n    &>h1 {\n        font-size: 5rem;\n        margin: 0;\n    }\n\n    &>h3 {\n        font-size: 1.8rem;\n        text-align: center;\n    }\n\n    &>p {\n        font-size: 1.2rem;\n        font-style: italic;\n    }\n}\n\n#menu {\n    background-color: rgba(0, 0, 0, 0.384);\n    height: var(--scrollable);\n\n    & h1 {\n        font-size: 2.6rem;\n        font-weight: 400;\n        margin: 2rem 0;\n    }\n\n    &>* {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n\n    &>#pick-bean {\n        margin-top: 3rem;\n    }\n\n    &>#pick-bean,\n    #espresso {\n        font-size: 1.5rem;\n        width: 90%;\n    }\n\n    &>#method>div {\n        font-size: 1.4rem;\n        display: flex;\n        justify-content: center;\n        gap: 114px;\n    }\n\n    &>#espresso {\n        margin-bottom: 4rem;\n        &>h2 {\n            font-size: inherit;\n            margin: 0 0 2rem;\n        }\n\n        &>.grid>div:last-child {\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n        }\n    }\n\n    & .grid {\n        width: clamp(400px, 100%, 1300px);\n        margin-bottom: 3rem;\n        display: grid;\n        justify-content: center;\n        grid-auto-rows: 10rem;\n        grid-template-columns: repeat(auto-fill, 20rem);\n        gap: 3rem;\n\n        & h3,\n        p {\n            margin: 0.2rem;\n        }\n    }\n}\n\n#contact {\n    &>#address {    \n        margin: 4rem auto 3rem;\n\n        &>p {\n            margin: 0;\n            font-size: 1.4rem;\n            text-align: center;\n        }\n\n        &>p:first-child,\n        &>p:last-child {\n            margin: 0.6rem;\n        }\n    }\n\n    &>form {\n        display: flex;\n        flex-direction: column;\n        gap: 1rem;\n\n        &>* {\n            font-family: inherit;\n            font-size: 1.3rem;\n            padding-left: 0.5rem;\n\n            &:focus {\n                outline: none;\n            }\n        }\n\n        &>textarea {\n            padding: 0.5rem;\n            resize: none;\n        }\n\n        &>button {\n            align-self: flex-end;\n            text-align: end;\n            font-size: 1.7rem;\n            font-weight: 700;\n        }\n    }\n}\n\nbutton {\n    background-color: transparent;\n    border: none;\n    color: inherit;\n    font-family: inherit;\n    font-size: inherit;\n    width: 8rem;\n\n    &:hover {\n        cursor: pointer;\n        font-weight: 700;\n    }\n}\n\n::placeholder {\n    color: #4b4b4b;\n    opacity: 1;\n}\n\n.invisible {\n    visibility: hidden;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/methods.svg":
/*!*************************!*\
  !*** ./src/methods.svg ***!
  \*************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1013.000000 289.000000\" preserveAspectRatio=\"xMidYMid meet\"><g transform=\"translate(0.000000,289.000000) scale(0.100000,-0.100000)\" fill=\"#FFFFFF\" stroke=\"none\"><path d=\"M573 2870 c-61 -37 -81 -116 -43 -177 22 -36 66 -63 105 -63 22 0 25 -4 25 -33 0 -31 -3 -33 -50 -44 -62 -15 -101 -42 -132 -91 -23 -37 -23 -41 -26 -379 l-3 -341 -172 -4 c-192 -3 -219 -11 -256 -71 -58 -94 0 -203 116 -222 l43 -7 0 -616 c0 -404 4 -630 11 -655 13 -49 73 -115 124 -138 37 -17 79 -19 575 -19 603 0 580 -2 652 78 46 51 58 93 58 204 l0 86 148 4 c124 3 154 7 194 25 66 30 129 92 164 160 l29 58 3 220 c3 205 2 225 -18 277 -26 71 -91 145 -162 183 -50 28 -60 30 -203 35 l-150 5 -3 47 -3 46 43 7 c60 10 93 29 117 68 46 74 17 172 -62 207 -36 17 -66 20 -204 20 l-162 0 -3 343 c-3 338 -3 342 -26 379 -31 49 -70 76 -132 91 -47 11 -50 13 -50 44 0 29 3 33 28 33 37 0 88 33 107 69 31 61 11 136 -48 171 -30 19 -52 20 -317 20 -265 0 -287 -1 -317 -20z m597 -80 c24 -24 25 -38 3 -62 -15 -17 -37 -18 -284 -18 -265 0 -268 0 -283 22 -20 29 -20 34 4 58 19 19 33 20 280 20 247 0 261 -1 280 -20z m-140 -195 l0 -35 -140 0 -140 0 0 35 0 35 140 0 140 0 0 -35z m181 -154 l29 -29 0 -336 0 -336 -350 0 -350 0 0 336 0 336 29 29 29 29 292 0 292 0 29 -29z m469 -811 c11 -11 20 -29 20 -40 0 -11 -9 -29 -20 -40 -20 -20 -33 -20 -790 -20 -757 0 -770 0 -790 20 -11 11 -20 29 -20 40 0 11 9 29 20 40 20 20 33 20 790 20 757 0 770 0 790 -20z m-1230 -232 c0 -24 11 -66 24 -94 25 -53 58 -83 115 -102 48 -17 550 -16 605 0 79 24 136 108 136 202 l0 36 95 0 95 0 -2 -342 -3 -343 -102 -3 c-90 -2 -104 -5 -113 -22 -8 -14 -8 -26 0 -40 9 -17 23 -20 113 -22 l102 -3 0 -237 c0 -223 -1 -238 -21 -264 -11 -15 -33 -37 -48 -48 -27 -21 -38 -21 -556 -21 -518 0 -529 0 -556 21 -15 11 -37 33 -48 48 -20 26 -21 41 -21 264 l0 237 469 5 c432 5 470 6 480 23 8 12 8 22 0 35 -10 16 -48 17 -480 22 l-469 5 -3 343 -2 342 95 0 95 0 0 -42z m790 -9 c0 -43 -5 -55 -29 -80 l-29 -29 -292 0 -292 0 -29 31 c-24 26 -29 40 -29 80 l0 49 350 0 350 0 0 -51z m660 -150 c55 -25 105 -71 133 -124 19 -36 22 -59 25 -227 5 -232 -5 -276 -77 -348 -64 -64 -118 -80 -268 -80 l-113 0 0 44 0 44 123 4 c114 3 127 5 164 30 72 47 83 86 83 284 l0 170 -29 47 c-46 71 -91 90 -228 95 l-113 4 0 39 0 39 128 0 c106 0 134 -4 172 -21z m-70 -164 c51 -26 60 -58 60 -215 0 -210 -16 -230 -190 -230 l-100 0 0 230 0 230 100 0 c71 0 110 -5 130 -15z\"></path><path d=\"M812 2378 c-16 -16 -15 -43 2 -57 23 -19 146 -10 160 12 8 12 8 22 0 35 -14 22 -142 30 -162 10z\"></path><path d=\"M816 2214 c-40 -39 -5 -74 74 -74 62 0 90 15 90 50 0 27 -30 40 -94 40 -36 0 -60 -5 -70 -16z\"></path><path d=\"M816 2054 c-39 -39 -5 -74 70 -74 64 0 94 13 94 40 0 35 -28 50 -90 50 -40 0 -64 -5 -74 -16z\"></path><path d=\"M812 1888 c-16 -16 -15 -43 2 -57 23 -19 146 -10 160 12 8 12 8 22 0 35 -14 22 -142 30 -162 10z\"></path><path d=\"M845 1125 c-43 -21 -98 -117 -98 -169 0 -85 59 -146 143 -146 62 0 106 29 131 86 25 55 20 88 -27 166 -45 74 -89 92 -149 63z m83 -115 c26 -46 28 -77 5 -102 -32 -36 -103 -10 -103 38 0 33 41 104 60 104 8 0 25 -18 38 -40z\"></path><path d=\"M8705 2857 c-79 -36 -125 -133 -104 -220 13 -55 70 -122 114 -133 24 -6 25 -9 25 -80 l0 -74 -179 0 c-202 0 -260 -8 -348 -50 -142 -66 -243 -231 -243 -396 l0 -34 -82 0 c-111 0 -140 -15 -202 -107 -37 -54 -47 -77 -42 -95 3 -13 84 -91 191 -183 l184 -160 1 -560 c1 -441 4 -568 14 -598 22 -60 62 -104 120 -131 l55 -26 576 0 576 0 54 25 c100 48 135 124 135 297 l0 108 150 0 c129 0 157 3 207 22 80 29 162 112 192 192 21 58 22 68 19 445 l-3 386 -36 65 c-23 43 -52 78 -85 102 -78 60 -119 70 -291 76 l-153 4 0 25 c0 14 9 36 20 50 28 35 34 83 22 165 -28 186 -168 333 -351 368 -30 5 -134 10 -232 10 l-179 0 0 73 0 72 42 20 c121 59 135 232 25 319 -31 25 -48 31 -100 33 -38 2 -74 -2 -92 -10z m114 -88 c35 -12 61 -53 61 -94 0 -42 -50 -85 -98 -85 -95 0 -125 130 -41 176 30 16 38 17 78 3z m492 -552 c109 -53 178 -156 187 -279 l5 -68 -717 0 -716 0 0 48 c0 139 92 268 222 313 49 17 88 19 508 16 l455 -2 56 -28z m-1291 -602 c0 -85 -3 -155 -6 -155 -5 0 -171 142 -252 215 -12 10 -9 20 13 54 l28 41 108 0 109 0 0 -155z m720 -44 l0 -199 -52 -13 c-70 -17 -266 -14 -359 5 -41 9 -103 30 -139 48 l-65 33 -3 163 -2 162 310 0 310 0 0 -199z m710 38 c0 -148 -1 -160 -17 -155 -81 22 -255 35 -349 26 -68 -7 -156 -31 -236 -65 -17 -7 -18 5 -18 174 l0 181 310 0 310 0 0 -161z m412 9 c53 -16 121 -78 144 -130 17 -39 19 -78 22 -376 2 -222 -1 -351 -8 -388 -15 -70 -61 -130 -125 -163 -45 -24 -62 -26 -197 -29 l-148 -4 0 50 0 51 149 3 c143 3 151 4 176 28 55 51 55 52 55 422 0 316 -1 346 -19 378 -33 62 -68 75 -223 78 l-138 4 0 44 0 44 136 0 c76 0 154 -5 176 -12z m-35 -208 c10 -19 13 -100 11 -343 -3 -302 -4 -319 -22 -333 -15 -10 -52 -14 -143 -14 l-123 0 0 360 0 361 132 -3 c130 -3 133 -3 145 -28z m-449 -40 l72 -13 0 -339 0 -339 -42 29 c-81 56 -117 62 -358 62 l-220 0 0 265 0 265 38 18 c39 20 149 57 192 66 41 8 240 -1 318 -14z m-1153 -75 c39 -13 110 -29 159 -36 87 -11 270 -8 329 7 l27 6 0 -251 0 -251 -220 0 c-241 0 -277 -6 -357 -62 l-43 -29 0 327 c0 307 1 326 18 319 9 -3 49 -17 87 -30z m1090 -642 c22 -12 54 -36 72 -55 34 -35 67 -101 56 -112 -8 -8 -1308 -8 -1316 0 -11 11 22 77 56 112 37 39 78 63 127 73 19 4 244 7 500 6 456 -2 466 -2 505 -24z m135 -355 c0 -103 -15 -141 -67 -175 -25 -17 -67 -18 -578 -21 -359 -2 -562 0 -585 7 -20 6 -49 24 -65 41 -29 30 -30 36 -33 136 l-4 104 666 0 666 0 0 -92z\"></path><path d=\"M8343 2150 c-82 -19 -146 -94 -127 -149 7 -20 17 -27 42 -29 29 -3 34 1 47 32 17 40 41 56 84 56 56 0 81 55 39 84 -24 17 -36 18 -85 6z\"></path><path d=\"M8272 278 c-28 -28 -7 -78 33 -78 27 0 45 18 45 45 0 27 -18 45 -45 45 -12 0 -26 -5 -33 -12z\"></path><path d=\"M8512 278 c-28 -28 -7 -78 33 -78 27 0 45 18 45 45 0 27 -18 45 -45 45 -12 0 -26 -5 -33 -12z\"></path><path d=\"M8752 278 c-28 -28 -7 -78 33 -78 27 0 45 18 45 45 0 27 -18 45 -45 45 -12 0 -26 -5 -33 -12z\"></path><path d=\"M8992 278 c-28 -28 -7 -78 33 -78 27 0 45 18 45 45 0 27 -18 45 -45 45 -12 0 -26 -5 -33 -12z\"></path><path d=\"M9234 283 c-34 -25 -12 -83 32 -83 30 0 54 42 37 68 -11 18 -51 27 -69 15z\"></path><path d=\"M4134 2851 c-11 -5 -33 -23 -47 -41 -48 -56 -40 -94 63 -300 l90 -180 -76 0 c-86 0 -114 -11 -114 -44 0 -13 54 -101 130 -209 72 -102 130 -188 130 -191 0 -3 -34 -6 -75 -6 -43 0 -90 -6 -110 -14 -65 -27 -95 -119 -61 -185 19 -35 37 -50 81 -65 l35 -12 -66 -53 c-55 -44 -65 -57 -62 -79 2 -22 16 -34 80 -67 42 -22 79 -43 82 -46 5 -5 -22 -188 -120 -824 -22 -140 -34 -248 -31 -275 8 -62 39 -131 82 -178 68 -76 31 -72 713 -72 l609 0 38 26 c48 32 69 57 102 119 37 72 40 141 10 330 -14 88 -42 264 -61 390 -20 127 -38 242 -41 258 l-4 27 68 0 c43 0 72 -5 78 -12 6 -7 22 -101 37 -208 15 -107 34 -215 43 -239 33 -93 137 -166 226 -159 40 3 42 4 45 39 2 20 -13 182 -33 360 -39 354 -47 385 -111 438 -52 42 -96 51 -252 51 -158 0 -145 -7 -157 85 -3 28 -9 60 -12 73 -5 21 -2 22 53 22 98 0 157 51 157 135 0 89 -50 128 -175 135 l-88 5 135 194 c74 106 135 197 135 202 0 5 -9 18 -20 29 -16 16 -33 20 -80 20 l-60 0 55 103 c30 57 55 111 55 119 0 23 -112 155 -173 205 -144 118 -352 136 -532 46 -66 -33 -85 -51 -85 -79 0 -47 31 -47 127 -1 86 41 90 42 193 42 96 0 110 -3 165 -29 62 -30 189 -149 182 -169 -2 -6 -28 -20 -58 -31 -44 -17 -78 -20 -189 -20 -164 0 -156 -3 -530 169 -151 70 -300 136 -330 147 -61 22 -212 34 -246 19z m194 -96 c28 -9 179 -74 334 -146 364 -168 400 -180 553 -186 89 -4 135 -1 180 11 32 8 60 14 62 12 2 -1 -11 -28 -28 -59 l-31 -57 -529 0 -529 0 -95 190 c-52 104 -95 198 -95 208 0 10 5 23 12 30 17 17 104 15 166 -3z m1192 -521 c0 -4 -55 -85 -122 -180 l-122 -174 -425 0 -426 0 -105 151 c-58 84 -113 165 -123 180 l-19 29 671 0 c369 0 671 -3 671 -6z m34 -460 c9 -8 16 -22 16 -29 0 -7 -7 -21 -16 -29 -14 -14 -91 -16 -703 -16 -521 0 -690 3 -699 12 -7 7 -12 21 -12 33 0 12 5 26 12 33 9 9 178 12 699 12 612 0 689 -2 703 -16z m-909 -254 l45 -90 -205 0 c-201 0 -207 1 -256 26 -48 24 -50 26 -34 44 24 27 125 78 186 94 30 8 91 15 136 15 l83 1 45 -90z m365 84 c0 -4 -20 -45 -46 -90 l-45 -84 -64 0 -65 0 -45 90 -45 90 155 0 c85 0 155 -3 155 -6z m349 -61 c7 -38 14 -78 17 -90 l4 -23 -179 0 -179 0 46 90 47 90 116 0 117 0 11 -67z m35 -219 c3 -9 6 -29 6 -45 l0 -29 -550 0 -550 0 0 29 c0 66 -42 61 550 61 481 0 538 -2 544 -16z m415 -18 c17 -16 33 -37 36 -47 9 -27 74 -613 69 -618 -2 -3 -16 4 -31 15 -59 44 -65 62 -99 294 -43 287 -46 291 -199 300 l-90 5 -6 43 -6 43 148 -3 148 -3 30 -29z m-384 -183 c4 -21 10 -58 15 -83 5 -24 6 -48 4 -52 -3 -4 -270 -8 -595 -8 l-589 0 0 27 c0 14 5 55 11 90 l11 63 569 0 568 0 6 -37z m35 -245 c13 -31 90 -538 90 -592 0 -57 -45 -143 -89 -173 l-34 -23 -569 0 c-643 0 -614 -3 -667 77 -48 71 -48 101 -1 409 24 154 47 289 51 302 l9 22 600 0 600 0 10 -22z\"></path><path d=\"M4727 794 c-12 -12 -8 -51 7 -63 9 -8 52 -11 127 -9 l114 3 0 35 0 35 -121 3 c-66 1 -123 -1 -127 -4z\"></path><path d=\"M4738 529 c-21 -12 -24 -52 -4 -68 9 -8 52 -11 127 -9 l114 3 3 30 c6 45 -17 55 -127 55 -53 0 -104 -5 -113 -11z\"></path><path d=\"M4732 258 c-7 -7 -12 -21 -12 -33 0 -39 19 -45 130 -45 111 0 130 6 130 45 0 12 -5 26 -12 33 -16 16 -220 16 -236 0z\"></path></g></svg>"

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateContact": () => (/* binding */ generateContact)
/* harmony export */ });
function generateContact() {
    const content = document.querySelector('#content');
    content.replaceChildren();

    const contact = document.createElement('div');
    contact.setAttribute('id', 'contact');

    const address = createAddressDiv();
    const form = createForm();

    contact.appendChild(address);
    contact.appendChild(form);

    content.appendChild(contact);
}

function createAddressDiv() {
    const div = document.createElement('div');
    div.setAttribute('id', 'address');

    const addressLines = [
        '<b>Find us at:</b>',
        '64 Zoo Lane',
        'Zoocester',
        'Animalshire',
        'CH33 7AH',
        'Tel: 02864 646464',
        '<b>Open:</b><br>Mon-Sun / 07:00-19:30',
    ];

    addressLines.forEach(line => {
        const p = document.createElement('p');
        p.innerHTML = line;
        div.appendChild(p);
    });

    return div;
}

function createForm() {
    const form = document.createElement('form');
    setAttributes(form, {'action': '#', 'method': 'post'});

    const name = document.createElement('input');
    const email = document.createElement('input');
    const message = document.createElement('textarea');
    const btn = document.createElement('button');

    setAttributes(name, {
        'id': 'name',
        'name': 'name',
        'type': 'text',
        'autocomplete': 'off',
        'placeholder': 'Name (required)',
        'autofocus': true,
        'required': true,
    });
    setAttributes(email, {
        'id': 'email',
        'name': 'email',
        'type': 'email',
        'autocomplete': 'off',
        'placeholder': 'Email (required)',
        'required': true,
    });
    setAttributes(message, {
        'id': 'message',
        'name': 'message',
        'rows': '10',
        'cols': '60',
        'placeholder': 'Enter message here (required)',
        'required': true,
    });
    btn.setAttribute('type', 'submit');
    btn.textContent = 'Send';

    const formEls = [name, email, message, btn];
    formEls.forEach(el => form.appendChild(el));

    return form;
}

function setAttributes(el, attributes) {
    Object.entries(attributes).forEach(([key, value]) => el.setAttribute(key, value));
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateHome": () => (/* binding */ generateHome)
/* harmony export */ });
function generateHome() {
    const content = document.querySelector('#content');
    content.replaceChildren();

    const fragment = document.createDocumentFragment();
    const home = document.createElement('div');
    const heading = document.createElement('h1');
    const slogan = document.createElement('h3');
    const caption = document.createElement('p');

    home.setAttribute('id', 'home');
    heading.textContent = 'CS170mg';
    slogan.innerHTML = 'The coffee you know and love<br>with just that little bit more';
    caption.textContent = 'It all begins with a bean, a love, a passion.';

    home.appendChild(heading);
    home.appendChild(slogan);
    home.appendChild(caption);
    fragment.appendChild(home);

    content.appendChild(fragment);
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateMenu": () => (/* binding */ generateMenu)
/* harmony export */ });
/* harmony import */ var _methods_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methods.svg */ "./src/methods.svg");
/* harmony import */ var _methods_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_methods_svg__WEBPACK_IMPORTED_MODULE_0__);


function generateMenu() {
    const content = document.querySelector('#content');
    content.replaceChildren();

    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');

    const beans = createBeansDiv();
    const method = createMethodDiv();
    const espresso = createEspressoDiv();

    menu.appendChild(beans);
    menu.appendChild(method);
    menu.appendChild(espresso);

    content.appendChild(menu);
}

function createBeansDiv() {
    const gridContents = {
        'Guatemalan Monte Rosa': 'A slow-growing, high-altitude bean that provides a full body with rich, smooth chocolatey, nutty notes.',
        'Ethiopian Rocko Mountain': 'A light-medium roast that shows off an enormous complexity of fruity and floral notes, with a subtle hint of wine.',
        'Monsoon Malabar': 'Dark and heavy - these beans boast a deep, smokey, spicy flavour profile.',
        'Brazilian Monte Cristo': 'This full-bodied blend gives a subtle sweetness and delicate acidity with a unique aftertaste of cocoa and vanilla.',
        'Old Brown Java': 'For the bold! Strong and heavy with little complexity, this is all about the rich intensity and depth of flavour.',
        'Colombian Supremo': 'A classic medium-roasted all-rounder. Well-balanced, smooth and with notes of chocolate and caramel.',
    };

    const div = document.createElement('div');
    div.setAttribute('id', 'pick-bean');

    const heading = document.createElement('h1');
    heading.textContent = 'Choose your beans';
    const grid = createGrid(gridContents);

    div.appendChild(heading);
    div.appendChild(grid);

    return div;
}

function createMethodDiv() {
    const div = document.createElement('div');
    div.setAttribute('id', 'method');

    const heading = document.createElement('h1');
    const methods = document.createElement('div');
    const methodsArr = ['Aeropress', 'Pour-over', 'French press'];
    const price = document.createElement('h2');

    heading.textContent = 'Choose a classic brewing method';
    methodsArr.forEach(method => {
        const p = document.createElement('p');
        p.textContent = method;
        methods.appendChild(p);
    });
    price.textContent = 'Mug (200ml) - £2.99';
    
    div.appendChild(heading);
    div.innerHTML += (_methods_svg__WEBPACK_IMPORTED_MODULE_0___default());
    div.appendChild(methods);
    div.appendChild(price);

    return div;
}

function createEspressoDiv() {
    const gridContents = {
        'Americano': 'Hot water poured over a shot of espresso.',
        'Flat White': 'Espresso, steamed milk with a delicate layer of frothy milk to top.',
        'Caffè Latte': 'A shot of espresso, steamed milk and a fine layer of foamed milk on top, though more than a flat white.',
        'Cappucino': 'Related to the Latte but with equal parts steamed milk and foamed milk - show off your foamstache!',
        'Mocha': 'A shot of espresso mixed with chocolate syrup, steamed milk then topped with foamed milk and cocoa powder.',
    };

    const div = document.createElement('div');
    div.setAttribute('id', 'espresso');

    const heading = document.createElement('h1');
    const price = document.createElement('h2');
    heading.textContent = 'Or choose an espresso-based drink';
    price.textContent = 'Regular (340ml) - £3.99 / Large (455ml) - £4.79';
    const grid = createGrid(gridContents, true);

    div.appendChild(heading);
    div.appendChild(grid);

    return div;
}

function createGrid(contents, espresso = false) {
    const grid = document.createElement('div');
    grid.classList.add('grid');

    for (const heading in contents) {
        const div = document.createElement('div');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');

        h3.textContent = heading;
        p.textContent = contents[heading];

        div.appendChild(h3);
        div.appendChild(p);
        grid.appendChild(div);
    }

    if (espresso) {
        const div = document.createElement('div');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');

        p1.innerHTML = '<b>Espresso</b> - £2.29';
        p2.innerHTML = '<b>Ristretto</b> - £2.29';
        p3.innerHTML = '<b>Macchiato</b> - £2.49';

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        grid.appendChild(div);
    }

    return grid;
}

/***/ }),

/***/ "./src/bgimage.jpg":
/*!*************************!*\
  !*** ./src/bgimage.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "98a136cb3064c73347c4.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _bgimage_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bgimage.jpg */ "./src/bgimage.jpg");






console.log("This is working!");

const tabs = document.querySelectorAll('nav button');
tabs.forEach(tab => tab.addEventListener('click', generateContent));

function generateContent(e) {
    switch (e.target.value) {
        case 'home':
            (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.generateHome)();
            break;
        case 'menu':
            (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.generateMenu)();
            break;
        case 'contact':
            (0,_contact_js__WEBPACK_IMPORTED_MODULE_1__.generateContact)();
            break;
    }
}

// initialise
(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.generateHome)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeUM7QUFDTTtBQUNOO0FBQ3BCO0FBQ0U7O0FBRXZCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzREFBWTtBQUN4QjtBQUNBO0FBQ0EsWUFBWSxzREFBWTtBQUN4QjtBQUNBO0FBQ0EsWUFBWSw0REFBZTtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzREFBWSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3AvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wLy4vc3JjL21ldGhvZHMuc3ZnIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3AvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3Avd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3Avd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3Avd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9iZ2ltYWdlLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29ybW9yYW50OndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1zY3JvbGxhYmxlOiBjYWxjKDEwMHZoIC0gMTByZW0gLSA2cHgpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYnJpZ2h0bmVzcyg1MCUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ29ybW9yYW50Jywgc2VyaWY7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcblxcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgICAgICB3aWR0aDogMDtcXG4gICAgfVxcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xcbiAgICBib3JkZXItYm90dG9tOiA2cHggc29saWQgcmdiKDEzMywgMTE2LCA3MCk7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxudWwge1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyLjVyZW07XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuI2NvbnRlbnQ+ZGl2IHtcXG4gICAgbWluLWhlaWdodDogdmFyKC0tc2Nyb2xsYWJsZSk7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFuaW1hdGlvbjogZmFkZUluIDFzIGVhc2UtaW4gMTtcXG5cXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICAgICAgd2lkdGg6IDA7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICAwJSB7IG9wYWNpdHk6IDA7IH1cXG4gICAgMTAwJSB7b3BhY2l0eTogMTsgfVxcbn1cXG5cXG4jaG9tZSB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuXFxuICAgICY+KiB7XFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICB9XFxuXFxuICAgICY+aDEge1xcbiAgICAgICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxuXFxuICAgICY+aDMge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgJj5wIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICB9XFxufVxcblxcbiNtZW51IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4NCk7XFxuICAgIGhlaWdodDogdmFyKC0tc2Nyb2xsYWJsZSk7XFxuXFxuICAgICYgaDEge1xcbiAgICAgICAgZm9udC1zaXplOiAyLjZyZW07XFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgbWFyZ2luOiAycmVtIDA7XFxuICAgIH1cXG5cXG4gICAgJj4qIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAmPiNwaWNrLWJlYW4ge1xcbiAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcXG4gICAgfVxcblxcbiAgICAmPiNwaWNrLWJlYW4sXFxuICAgICNlc3ByZXNzbyB7XFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgIH1cXG5cXG4gICAgJj4jbWV0aG9kPmRpdiB7XFxuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMTE0cHg7XFxuICAgIH1cXG5cXG4gICAgJj4jZXNwcmVzc28ge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcXG4gICAgICAgICY+aDIge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgICAgICAgICBtYXJnaW46IDAgMCAycmVtO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJj4uZ3JpZD5kaXY6bGFzdC1jaGlsZCB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICYgLmdyaWQge1xcbiAgICAgICAgd2lkdGg6IGNsYW1wKDQwMHB4LCAxMDAlLCAxMzAwcHgpO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGdyaWQtYXV0by1yb3dzOiAxMHJlbTtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgMjByZW0pO1xcbiAgICAgICAgZ2FwOiAzcmVtO1xcblxcbiAgICAgICAgJiBoMyxcXG4gICAgICAgIHAge1xcbiAgICAgICAgICAgIG1hcmdpbjogMC4ycmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbiNjb250YWN0IHtcXG4gICAgJj4jYWRkcmVzcyB7ICAgIFxcbiAgICAgICAgbWFyZ2luOiA0cmVtIGF1dG8gM3JlbTtcXG5cXG4gICAgICAgICY+cCB7XFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICY+cDpmaXJzdC1jaGlsZCxcXG4gICAgICAgICY+cDpsYXN0LWNoaWxkIHtcXG4gICAgICAgICAgICBtYXJnaW46IDAuNnJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmPmZvcm0ge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBnYXA6IDFyZW07XFxuXFxuICAgICAgICAmPioge1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcblxcbiAgICAgICAgICAgICY6Zm9jdXMge1xcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICY+dGV4dGFyZWEge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgICAgICAgICByZXNpemU6IG5vbmU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmPmJ1dHRvbiB7XFxuICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIHdpZHRoOiA4cmVtO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIH1cXG59XFxuXFxuOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiAjNGI0YjRiO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uaW52aXNpYmxlIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3Qix5REFBc0M7SUFDdEMsc0JBQXNCO0lBQ3RCLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osK0JBQStCO0lBQy9CLFNBQVM7SUFDVCxxQkFBcUI7O0lBRXJCO1FBQ0ksUUFBUTtJQUNaO0FBQ0o7O0FBRUE7SUFDSSxxQ0FBcUM7SUFDckMsMENBQTBDO0lBQzFDLGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDhCQUE4Qjs7SUFFOUI7UUFDSSxRQUFRO0lBQ1o7QUFDSjs7QUFFQTtJQUNJLEtBQUssVUFBVSxFQUFFO0lBQ2pCLE1BQU0sVUFBVSxFQUFFO0FBQ3RCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFNBQVM7O0lBRVQ7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsU0FBUztJQUNiOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixrQkFBa0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJLHNDQUFzQztJQUN0Qyx5QkFBeUI7O0lBRXpCO1FBQ0ksaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7O1FBRUksaUJBQWlCO1FBQ2pCLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLFVBQVU7SUFDZDs7SUFFQTtRQUNJLG1CQUFtQjtRQUNuQjtZQUNJLGtCQUFrQjtZQUNsQixnQkFBZ0I7UUFDcEI7O1FBRUE7WUFDSSxhQUFhO1lBQ2Isc0JBQXNCO1lBQ3RCLHVCQUF1QjtRQUMzQjtJQUNKOztJQUVBO1FBQ0ksaUNBQWlDO1FBQ2pDLG1CQUFtQjtRQUNuQixhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLHFCQUFxQjtRQUNyQiwrQ0FBK0M7UUFDL0MsU0FBUzs7UUFFVDs7WUFFSSxjQUFjO1FBQ2xCO0lBQ0o7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksc0JBQXNCOztRQUV0QjtZQUNJLFNBQVM7WUFDVCxpQkFBaUI7WUFDakIsa0JBQWtCO1FBQ3RCOztRQUVBOztZQUVJLGNBQWM7UUFDbEI7SUFDSjs7SUFFQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsU0FBUzs7UUFFVDtZQUNJLG9CQUFvQjtZQUNwQixpQkFBaUI7WUFDakIsb0JBQW9COztZQUVwQjtnQkFDSSxhQUFhO1lBQ2pCO1FBQ0o7O1FBRUE7WUFDSSxlQUFlO1lBQ2YsWUFBWTtRQUNoQjs7UUFFQTtZQUNJLG9CQUFvQjtZQUNwQixlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLGdCQUFnQjtRQUNwQjtJQUNKO0FBQ0o7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFdBQVc7O0lBRVg7UUFDSSxlQUFlO1FBQ2YsZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvcm1vcmFudDp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gICAgLS1zY3JvbGxhYmxlOiBjYWxjKDEwMHZoIC0gMTByZW0gLSA2cHgpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9iZ2ltYWdlLmpwZycpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJyaWdodG5lc3MoNTAlKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ0Nvcm1vcmFudCcsIHNlcmlmO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcXG5cXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICAgICAgd2lkdGg6IDA7XFxuICAgIH1cXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcXG4gICAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIHJnYigxMzMsIDExNiwgNzApO1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMHJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbnVsIHtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMi41cmVtO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbiNjb250ZW50PmRpdiB7XFxuICAgIG1pbi1oZWlnaHQ6IHZhcigtLXNjcm9sbGFibGUpO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAxcyBlYXNlLWluIDE7XFxuXFxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgICAgIHdpZHRoOiAwO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gICAgMCUgeyBvcGFjaXR5OiAwOyB9XFxuICAgIDEwMCUge29wYWNpdHk6IDE7IH1cXG59XFxuXFxuI2hvbWUge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtO1xcblxcbiAgICAmPioge1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgfVxcblxcbiAgICAmPmgxIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcblxcbiAgICAmPmgzIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICY+cCB7XFxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgfVxcbn1cXG5cXG4jbWVudSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zODQpO1xcbiAgICBoZWlnaHQ6IHZhcigtLXNjcm9sbGFibGUpO1xcblxcbiAgICAmIGgxIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMi42cmVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgIG1hcmdpbjogMnJlbSAwO1xcbiAgICB9XFxuXFxuICAgICY+KiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgJj4jcGljay1iZWFuIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDNyZW07XFxuICAgIH1cXG5cXG4gICAgJj4jcGljay1iZWFuLFxcbiAgICAjZXNwcmVzc28ge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICB9XFxuXFxuICAgICY+I21ldGhvZD5kaXYge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDExNHB4O1xcbiAgICB9XFxuXFxuICAgICY+I2VzcHJlc3NvIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRyZW07XFxuICAgICAgICAmPmgyIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMnJlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICY+LmdyaWQ+ZGl2Omxhc3QtY2hpbGQge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmIC5ncmlkIHtcXG4gICAgICAgIHdpZHRoOiBjbGFtcCg0MDBweCwgMTAwJSwgMTMwMHB4KTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBncmlkLWF1dG8tcm93czogMTByZW07XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIDIwcmVtKTtcXG4gICAgICAgIGdhcDogM3JlbTtcXG5cXG4gICAgICAgICYgaDMsXFxuICAgICAgICBwIHtcXG4gICAgICAgICAgICBtYXJnaW46IDAuMnJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4jY29udGFjdCB7XFxuICAgICY+I2FkZHJlc3MgeyAgICBcXG4gICAgICAgIG1hcmdpbjogNHJlbSBhdXRvIDNyZW07XFxuXFxuICAgICAgICAmPnAge1xcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmPnA6Zmlyc3QtY2hpbGQsXFxuICAgICAgICAmPnA6bGFzdC1jaGlsZCB7XFxuICAgICAgICAgICAgbWFyZ2luOiAwLjZyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJj5mb3JtIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiAxcmVtO1xcblxcbiAgICAgICAgJj4qIHtcXG4gICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG5cXG4gICAgICAgICAgICAmOmZvY3VzIHtcXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmPnRleHRhcmVhIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgICAgICAgICAgcmVzaXplOiBub25lO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJj5idXR0b24ge1xcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICB3aWR0aDogOHJlbTtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICB9XFxufVxcblxcbjo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogIzRiNGI0YjtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmludmlzaWJsZSB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDEzLjAwMDAwMCAyODkuMDAwMDAwXFxcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVxcXCJ4TWlkWU1pZCBtZWV0XFxcIj48ZyB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgwLjAwMDAwMCwyODkuMDAwMDAwKSBzY2FsZSgwLjEwMDAwMCwtMC4xMDAwMDApXFxcIiBmaWxsPVxcXCIjRkZGRkZGXFxcIiBzdHJva2U9XFxcIm5vbmVcXFwiPjxwYXRoIGQ9XFxcIk01NzMgMjg3MCBjLTYxIC0zNyAtODEgLTExNiAtNDMgLTE3NyAyMiAtMzYgNjYgLTYzIDEwNSAtNjMgMjIgMCAyNSAtNCAyNSAtMzMgMCAtMzEgLTMgLTMzIC01MCAtNDQgLTYyIC0xNSAtMTAxIC00MiAtMTMyIC05MSAtMjMgLTM3IC0yMyAtNDEgLTI2IC0zNzkgbC0zIC0zNDEgLTE3MiAtNCBjLTE5MiAtMyAtMjE5IC0xMSAtMjU2IC03MSAtNTggLTk0IDAgLTIwMyAxMTYgLTIyMiBsNDMgLTcgMCAtNjE2IGMwIC00MDQgNCAtNjMwIDExIC02NTUgMTMgLTQ5IDczIC0xMTUgMTI0IC0xMzggMzcgLTE3IDc5IC0xOSA1NzUgLTE5IDYwMyAwIDU4MCAtMiA2NTIgNzggNDYgNTEgNTggOTMgNTggMjA0IGwwIDg2IDE0OCA0IGMxMjQgMyAxNTQgNyAxOTQgMjUgNjYgMzAgMTI5IDkyIDE2NCAxNjAgbDI5IDU4IDMgMjIwIGMzIDIwNSAyIDIyNSAtMTggMjc3IC0yNiA3MSAtOTEgMTQ1IC0xNjIgMTgzIC01MCAyOCAtNjAgMzAgLTIwMyAzNSBsLTE1MCA1IC0zIDQ3IC0zIDQ2IDQzIDcgYzYwIDEwIDkzIDI5IDExNyA2OCA0NiA3NCAxNyAxNzIgLTYyIDIwNyAtMzYgMTcgLTY2IDIwIC0yMDQgMjAgbC0xNjIgMCAtMyAzNDMgYy0zIDMzOCAtMyAzNDIgLTI2IDM3OSAtMzEgNDkgLTcwIDc2IC0xMzIgOTEgLTQ3IDExIC01MCAxMyAtNTAgNDQgMCAyOSAzIDMzIDI4IDMzIDM3IDAgODggMzMgMTA3IDY5IDMxIDYxIDExIDEzNiAtNDggMTcxIC0zMCAxOSAtNTIgMjAgLTMxNyAyMCAtMjY1IDAgLTI4NyAtMSAtMzE3IC0yMHogbTU5NyAtODAgYzI0IC0yNCAyNSAtMzggMyAtNjIgLTE1IC0xNyAtMzcgLTE4IC0yODQgLTE4IC0yNjUgMCAtMjY4IDAgLTI4MyAyMiAtMjAgMjkgLTIwIDM0IDQgNTggMTkgMTkgMzMgMjAgMjgwIDIwIDI0NyAwIDI2MSAtMSAyODAgLTIweiBtLTE0MCAtMTk1IGwwIC0zNSAtMTQwIDAgLTE0MCAwIDAgMzUgMCAzNSAxNDAgMCAxNDAgMCAwIC0zNXogbTE4MSAtMTU0IGwyOSAtMjkgMCAtMzM2IDAgLTMzNiAtMzUwIDAgLTM1MCAwIDAgMzM2IDAgMzM2IDI5IDI5IDI5IDI5IDI5MiAwIDI5MiAwIDI5IC0yOXogbTQ2OSAtODExIGMxMSAtMTEgMjAgLTI5IDIwIC00MCAwIC0xMSAtOSAtMjkgLTIwIC00MCAtMjAgLTIwIC0zMyAtMjAgLTc5MCAtMjAgLTc1NyAwIC03NzAgMCAtNzkwIDIwIC0xMSAxMSAtMjAgMjkgLTIwIDQwIDAgMTEgOSAyOSAyMCA0MCAyMCAyMCAzMyAyMCA3OTAgMjAgNzU3IDAgNzcwIDAgNzkwIC0yMHogbS0xMjMwIC0yMzIgYzAgLTI0IDExIC02NiAyNCAtOTQgMjUgLTUzIDU4IC04MyAxMTUgLTEwMiA0OCAtMTcgNTUwIC0xNiA2MDUgMCA3OSAyNCAxMzYgMTA4IDEzNiAyMDIgbDAgMzYgOTUgMCA5NSAwIC0yIC0zNDIgLTMgLTM0MyAtMTAyIC0zIGMtOTAgLTIgLTEwNCAtNSAtMTEzIC0yMiAtOCAtMTQgLTggLTI2IDAgLTQwIDkgLTE3IDIzIC0yMCAxMTMgLTIyIGwxMDIgLTMgMCAtMjM3IGMwIC0yMjMgLTEgLTIzOCAtMjEgLTI2NCAtMTEgLTE1IC0zMyAtMzcgLTQ4IC00OCAtMjcgLTIxIC0zOCAtMjEgLTU1NiAtMjEgLTUxOCAwIC01MjkgMCAtNTU2IDIxIC0xNSAxMSAtMzcgMzMgLTQ4IDQ4IC0yMCAyNiAtMjEgNDEgLTIxIDI2NCBsMCAyMzcgNDY5IDUgYzQzMiA1IDQ3MCA2IDQ4MCAyMyA4IDEyIDggMjIgMCAzNSAtMTAgMTYgLTQ4IDE3IC00ODAgMjIgbC00NjkgNSAtMyAzNDMgLTIgMzQyIDk1IDAgOTUgMCAwIC00MnogbTc5MCAtOSBjMCAtNDMgLTUgLTU1IC0yOSAtODAgbC0yOSAtMjkgLTI5MiAwIC0yOTIgMCAtMjkgMzEgYy0yNCAyNiAtMjkgNDAgLTI5IDgwIGwwIDQ5IDM1MCAwIDM1MCAwIDAgLTUxeiBtNjYwIC0xNTAgYzU1IC0yNSAxMDUgLTcxIDEzMyAtMTI0IDE5IC0zNiAyMiAtNTkgMjUgLTIyNyA1IC0yMzIgLTUgLTI3NiAtNzcgLTM0OCAtNjQgLTY0IC0xMTggLTgwIC0yNjggLTgwIGwtMTEzIDAgMCA0NCAwIDQ0IDEyMyA0IGMxMTQgMyAxMjcgNSAxNjQgMzAgNzIgNDcgODMgODYgODMgMjg0IGwwIDE3MCAtMjkgNDcgYy00NiA3MSAtOTEgOTAgLTIyOCA5NSBsLTExMyA0IDAgMzkgMCAzOSAxMjggMCBjMTA2IDAgMTM0IC00IDE3MiAtMjF6IG0tNzAgLTE2NCBjNTEgLTI2IDYwIC01OCA2MCAtMjE1IDAgLTIxMCAtMTYgLTIzMCAtMTkwIC0yMzAgbC0xMDAgMCAwIDIzMCAwIDIzMCAxMDAgMCBjNzEgMCAxMTAgLTUgMTMwIC0xNXpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNODEyIDIzNzggYy0xNiAtMTYgLTE1IC00MyAyIC01NyAyMyAtMTkgMTQ2IC0xMCAxNjAgMTIgOCAxMiA4IDIyIDAgMzUgLTE0IDIyIC0xNDIgMzAgLTE2MiAxMHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNODE2IDIyMTQgYy00MCAtMzkgLTUgLTc0IDc0IC03NCA2MiAwIDkwIDE1IDkwIDUwIDAgMjcgLTMwIDQwIC05NCA0MCAtMzYgMCAtNjAgLTUgLTcwIC0xNnpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNODE2IDIwNTQgYy0zOSAtMzkgLTUgLTc0IDcwIC03NCA2NCAwIDk0IDEzIDk0IDQwIDAgMzUgLTI4IDUwIC05MCA1MCAtNDAgMCAtNjQgLTUgLTc0IC0xNnpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNODEyIDE4ODggYy0xNiAtMTYgLTE1IC00MyAyIC01NyAyMyAtMTkgMTQ2IC0xMCAxNjAgMTIgOCAxMiA4IDIyIDAgMzUgLTE0IDIyIC0xNDIgMzAgLTE2MiAxMHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNODQ1IDExMjUgYy00MyAtMjEgLTk4IC0xMTcgLTk4IC0xNjkgMCAtODUgNTkgLTE0NiAxNDMgLTE0NiA2MiAwIDEwNiAyOSAxMzEgODYgMjUgNTUgMjAgODggLTI3IDE2NiAtNDUgNzQgLTg5IDkyIC0xNDkgNjN6IG04MyAtMTE1IGMyNiAtNDYgMjggLTc3IDUgLTEwMiAtMzIgLTM2IC0xMDMgLTEwIC0xMDMgMzggMCAzMyA0MSAxMDQgNjAgMTA0IDggMCAyNSAtMTggMzggLTQwelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk04NzA1IDI4NTcgYy03OSAtMzYgLTEyNSAtMTMzIC0xMDQgLTIyMCAxMyAtNTUgNzAgLTEyMiAxMTQgLTEzMyAyNCAtNiAyNSAtOSAyNSAtODAgbDAgLTc0IC0xNzkgMCBjLTIwMiAwIC0yNjAgLTggLTM0OCAtNTAgLTE0MiAtNjYgLTI0MyAtMjMxIC0yNDMgLTM5NiBsMCAtMzQgLTgyIDAgYy0xMTEgMCAtMTQwIC0xNSAtMjAyIC0xMDcgLTM3IC01NCAtNDcgLTc3IC00MiAtOTUgMyAtMTMgODQgLTkxIDE5MSAtMTgzIGwxODQgLTE2MCAxIC01NjAgYzEgLTQ0MSA0IC01NjggMTQgLTU5OCAyMiAtNjAgNjIgLTEwNCAxMjAgLTEzMSBsNTUgLTI2IDU3NiAwIDU3NiAwIDU0IDI1IGMxMDAgNDggMTM1IDEyNCAxMzUgMjk3IGwwIDEwOCAxNTAgMCBjMTI5IDAgMTU3IDMgMjA3IDIyIDgwIDI5IDE2MiAxMTIgMTkyIDE5MiAyMSA1OCAyMiA2OCAxOSA0NDUgbC0zIDM4NiAtMzYgNjUgYy0yMyA0MyAtNTIgNzggLTg1IDEwMiAtNzggNjAgLTExOSA3MCAtMjkxIDc2IGwtMTUzIDQgMCAyNSBjMCAxNCA5IDM2IDIwIDUwIDI4IDM1IDM0IDgzIDIyIDE2NSAtMjggMTg2IC0xNjggMzMzIC0zNTEgMzY4IC0zMCA1IC0xMzQgMTAgLTIzMiAxMCBsLTE3OSAwIDAgNzMgMCA3MiA0MiAyMCBjMTIxIDU5IDEzNSAyMzIgMjUgMzE5IC0zMSAyNSAtNDggMzEgLTEwMCAzMyAtMzggMiAtNzQgLTIgLTkyIC0xMHogbTExNCAtODggYzM1IC0xMiA2MSAtNTMgNjEgLTk0IDAgLTQyIC01MCAtODUgLTk4IC04NSAtOTUgMCAtMTI1IDEzMCAtNDEgMTc2IDMwIDE2IDM4IDE3IDc4IDN6IG00OTIgLTU1MiBjMTA5IC01MyAxNzggLTE1NiAxODcgLTI3OSBsNSAtNjggLTcxNyAwIC03MTYgMCAwIDQ4IGMwIDEzOSA5MiAyNjggMjIyIDMxMyA0OSAxNyA4OCAxOSA1MDggMTYgbDQ1NSAtMiA1NiAtMjh6IG0tMTI5MSAtNjAyIGMwIC04NSAtMyAtMTU1IC02IC0xNTUgLTUgMCAtMTcxIDE0MiAtMjUyIDIxNSAtMTIgMTAgLTkgMjAgMTMgNTQgbDI4IDQxIDEwOCAwIDEwOSAwIDAgLTE1NXogbTcyMCAtNDQgbDAgLTE5OSAtNTIgLTEzIGMtNzAgLTE3IC0yNjYgLTE0IC0zNTkgNSAtNDEgOSAtMTAzIDMwIC0xMzkgNDggbC02NSAzMyAtMyAxNjMgLTIgMTYyIDMxMCAwIDMxMCAwIDAgLTE5OXogbTcxMCAzOCBjMCAtMTQ4IC0xIC0xNjAgLTE3IC0xNTUgLTgxIDIyIC0yNTUgMzUgLTM0OSAyNiAtNjggLTcgLTE1NiAtMzEgLTIzNiAtNjUgLTE3IC03IC0xOCA1IC0xOCAxNzQgbDAgMTgxIDMxMCAwIDMxMCAwIDAgLTE2MXogbTQxMiA5IGM1MyAtMTYgMTIxIC03OCAxNDQgLTEzMCAxNyAtMzkgMTkgLTc4IDIyIC0zNzYgMiAtMjIyIC0xIC0zNTEgLTggLTM4OCAtMTUgLTcwIC02MSAtMTMwIC0xMjUgLTE2MyAtNDUgLTI0IC02MiAtMjYgLTE5NyAtMjkgbC0xNDggLTQgMCA1MCAwIDUxIDE0OSAzIGMxNDMgMyAxNTEgNCAxNzYgMjggNTUgNTEgNTUgNTIgNTUgNDIyIDAgMzE2IC0xIDM0NiAtMTkgMzc4IC0zMyA2MiAtNjggNzUgLTIyMyA3OCBsLTEzOCA0IDAgNDQgMCA0NCAxMzYgMCBjNzYgMCAxNTQgLTUgMTc2IC0xMnogbS0zNSAtMjA4IGMxMCAtMTkgMTMgLTEwMCAxMSAtMzQzIC0zIC0zMDIgLTQgLTMxOSAtMjIgLTMzMyAtMTUgLTEwIC01MiAtMTQgLTE0MyAtMTQgbC0xMjMgMCAwIDM2MCAwIDM2MSAxMzIgLTMgYzEzMCAtMyAxMzMgLTMgMTQ1IC0yOHogbS00NDkgLTQwIGw3MiAtMTMgMCAtMzM5IDAgLTMzOSAtNDIgMjkgYy04MSA1NiAtMTE3IDYyIC0zNTggNjIgbC0yMjAgMCAwIDI2NSAwIDI2NSAzOCAxOCBjMzkgMjAgMTQ5IDU3IDE5MiA2NiA0MSA4IDI0MCAtMSAzMTggLTE0eiBtLTExNTMgLTc1IGMzOSAtMTMgMTEwIC0yOSAxNTkgLTM2IDg3IC0xMSAyNzAgLTggMzI5IDcgbDI3IDYgMCAtMjUxIDAgLTI1MSAtMjIwIDAgYy0yNDEgMCAtMjc3IC02IC0zNTcgLTYyIGwtNDMgLTI5IDAgMzI3IGMwIDMwNyAxIDMyNiAxOCAzMTkgOSAtMyA0OSAtMTcgODcgLTMweiBtMTA5MCAtNjQyIGMyMiAtMTIgNTQgLTM2IDcyIC01NSAzNCAtMzUgNjcgLTEwMSA1NiAtMTEyIC04IC04IC0xMzA4IC04IC0xMzE2IDAgLTExIDExIDIyIDc3IDU2IDExMiAzNyAzOSA3OCA2MyAxMjcgNzMgMTkgNCAyNDQgNyA1MDAgNiA0NTYgLTIgNDY2IC0yIDUwNSAtMjR6IG0xMzUgLTM1NSBjMCAtMTAzIC0xNSAtMTQxIC02NyAtMTc1IC0yNSAtMTcgLTY3IC0xOCAtNTc4IC0yMSAtMzU5IC0yIC01NjIgMCAtNTg1IDcgLTIwIDYgLTQ5IDI0IC02NSA0MSAtMjkgMzAgLTMwIDM2IC0zMyAxMzYgbC00IDEwNCA2NjYgMCA2NjYgMCAwIC05MnpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNODM0MyAyMTUwIGMtODIgLTE5IC0xNDYgLTk0IC0xMjcgLTE0OSA3IC0yMCAxNyAtMjcgNDIgLTI5IDI5IC0zIDM0IDEgNDcgMzIgMTcgNDAgNDEgNTYgODQgNTYgNTYgMCA4MSA1NSAzOSA4NCAtMjQgMTcgLTM2IDE4IC04NSA2elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk04MjcyIDI3OCBjLTI4IC0yOCAtNyAtNzggMzMgLTc4IDI3IDAgNDUgMTggNDUgNDUgMCAyNyAtMTggNDUgLTQ1IDQ1IC0xMiAwIC0yNiAtNSAtMzMgLTEyelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk04NTEyIDI3OCBjLTI4IC0yOCAtNyAtNzggMzMgLTc4IDI3IDAgNDUgMTggNDUgNDUgMCAyNyAtMTggNDUgLTQ1IDQ1IC0xMiAwIC0yNiAtNSAtMzMgLTEyelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk04NzUyIDI3OCBjLTI4IC0yOCAtNyAtNzggMzMgLTc4IDI3IDAgNDUgMTggNDUgNDUgMCAyNyAtMTggNDUgLTQ1IDQ1IC0xMiAwIC0yNiAtNSAtMzMgLTEyelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk04OTkyIDI3OCBjLTI4IC0yOCAtNyAtNzggMzMgLTc4IDI3IDAgNDUgMTggNDUgNDUgMCAyNyAtMTggNDUgLTQ1IDQ1IC0xMiAwIC0yNiAtNSAtMzMgLTEyelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk05MjM0IDI4MyBjLTM0IC0yNSAtMTIgLTgzIDMyIC04MyAzMCAwIDU0IDQyIDM3IDY4IC0xMSAxOCAtNTEgMjcgLTY5IDE1elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk00MTM0IDI4NTEgYy0xMSAtNSAtMzMgLTIzIC00NyAtNDEgLTQ4IC01NiAtNDAgLTk0IDYzIC0zMDAgbDkwIC0xODAgLTc2IDAgYy04NiAwIC0xMTQgLTExIC0xMTQgLTQ0IDAgLTEzIDU0IC0xMDEgMTMwIC0yMDkgNzIgLTEwMiAxMzAgLTE4OCAxMzAgLTE5MSAwIC0zIC0zNCAtNiAtNzUgLTYgLTQzIDAgLTkwIC02IC0xMTAgLTE0IC02NSAtMjcgLTk1IC0xMTkgLTYxIC0xODUgMTkgLTM1IDM3IC01MCA4MSAtNjUgbDM1IC0xMiAtNjYgLTUzIGMtNTUgLTQ0IC02NSAtNTcgLTYyIC03OSAyIC0yMiAxNiAtMzQgODAgLTY3IDQyIC0yMiA3OSAtNDMgODIgLTQ2IDUgLTUgLTIyIC0xODggLTEyMCAtODI0IC0yMiAtMTQwIC0zNCAtMjQ4IC0zMSAtMjc1IDggLTYyIDM5IC0xMzEgODIgLTE3OCA2OCAtNzYgMzEgLTcyIDcxMyAtNzIgbDYwOSAwIDM4IDI2IGM0OCAzMiA2OSA1NyAxMDIgMTE5IDM3IDcyIDQwIDE0MSAxMCAzMzAgLTE0IDg4IC00MiAyNjQgLTYxIDM5MCAtMjAgMTI3IC0zOCAyNDIgLTQxIDI1OCBsLTQgMjcgNjggMCBjNDMgMCA3MiAtNSA3OCAtMTIgNiAtNyAyMiAtMTAxIDM3IC0yMDggMTUgLTEwNyAzNCAtMjE1IDQzIC0yMzkgMzMgLTkzIDEzNyAtMTY2IDIyNiAtMTU5IDQwIDMgNDIgNCA0NSAzOSAyIDIwIC0xMyAxODIgLTMzIDM2MCAtMzkgMzU0IC00NyAzODUgLTExMSA0MzggLTUyIDQyIC05NiA1MSAtMjUyIDUxIC0xNTggMCAtMTQ1IC03IC0xNTcgODUgLTMgMjggLTkgNjAgLTEyIDczIC01IDIxIC0yIDIyIDUzIDIyIDk4IDAgMTU3IDUxIDE1NyAxMzUgMCA4OSAtNTAgMTI4IC0xNzUgMTM1IGwtODggNSAxMzUgMTk0IGM3NCAxMDYgMTM1IDE5NyAxMzUgMjAyIDAgNSAtOSAxOCAtMjAgMjkgLTE2IDE2IC0zMyAyMCAtODAgMjAgbC02MCAwIDU1IDEwMyBjMzAgNTcgNTUgMTExIDU1IDExOSAwIDIzIC0xMTIgMTU1IC0xNzMgMjA1IC0xNDQgMTE4IC0zNTIgMTM2IC01MzIgNDYgLTY2IC0zMyAtODUgLTUxIC04NSAtNzkgMCAtNDcgMzEgLTQ3IDEyNyAtMSA4NiA0MSA5MCA0MiAxOTMgNDIgOTYgMCAxMTAgLTMgMTY1IC0yOSA2MiAtMzAgMTg5IC0xNDkgMTgyIC0xNjkgLTIgLTYgLTI4IC0yMCAtNTggLTMxIC00NCAtMTcgLTc4IC0yMCAtMTg5IC0yMCAtMTY0IDAgLTE1NiAtMyAtNTMwIDE2OSAtMTUxIDcwIC0zMDAgMTM2IC0zMzAgMTQ3IC02MSAyMiAtMjEyIDM0IC0yNDYgMTl6IG0xOTQgLTk2IGMyOCAtOSAxNzkgLTc0IDMzNCAtMTQ2IDM2NCAtMTY4IDQwMCAtMTgwIDU1MyAtMTg2IDg5IC00IDEzNSAtMSAxODAgMTEgMzIgOCA2MCAxNCA2MiAxMiAyIC0xIC0xMSAtMjggLTI4IC01OSBsLTMxIC01NyAtNTI5IDAgLTUyOSAwIC05NSAxOTAgYy01MiAxMDQgLTk1IDE5OCAtOTUgMjA4IDAgMTAgNSAyMyAxMiAzMCAxNyAxNyAxMDQgMTUgMTY2IC0zeiBtMTE5MiAtNTIxIGMwIC00IC01NSAtODUgLTEyMiAtMTgwIGwtMTIyIC0xNzQgLTQyNSAwIC00MjYgMCAtMTA1IDE1MSBjLTU4IDg0IC0xMTMgMTY1IC0xMjMgMTgwIGwtMTkgMjkgNjcxIDAgYzM2OSAwIDY3MSAtMyA2NzEgLTZ6IG0zNCAtNDYwIGM5IC04IDE2IC0yMiAxNiAtMjkgMCAtNyAtNyAtMjEgLTE2IC0yOSAtMTQgLTE0IC05MSAtMTYgLTcwMyAtMTYgLTUyMSAwIC02OTAgMyAtNjk5IDEyIC03IDcgLTEyIDIxIC0xMiAzMyAwIDEyIDUgMjYgMTIgMzMgOSA5IDE3OCAxMiA2OTkgMTIgNjEyIDAgNjg5IC0yIDcwMyAtMTZ6IG0tOTA5IC0yNTQgbDQ1IC05MCAtMjA1IDAgYy0yMDEgMCAtMjA3IDEgLTI1NiAyNiAtNDggMjQgLTUwIDI2IC0zNCA0NCAyNCAyNyAxMjUgNzggMTg2IDk0IDMwIDggOTEgMTUgMTM2IDE1IGw4MyAxIDQ1IC05MHogbTM2NSA4NCBjMCAtNCAtMjAgLTQ1IC00NiAtOTAgbC00NSAtODQgLTY0IDAgLTY1IDAgLTQ1IDkwIC00NSA5MCAxNTUgMCBjODUgMCAxNTUgLTMgMTU1IC02eiBtMzQ5IC02MSBjNyAtMzggMTQgLTc4IDE3IC05MCBsNCAtMjMgLTE3OSAwIC0xNzkgMCA0NiA5MCA0NyA5MCAxMTYgMCAxMTcgMCAxMSAtNjd6IG0zNSAtMjE5IGMzIC05IDYgLTI5IDYgLTQ1IGwwIC0yOSAtNTUwIDAgLTU1MCAwIDAgMjkgYzAgNjYgLTQyIDYxIDU1MCA2MSA0ODEgMCA1MzggLTIgNTQ0IC0xNnogbTQxNSAtMTggYzE3IC0xNiAzMyAtMzcgMzYgLTQ3IDkgLTI3IDc0IC02MTMgNjkgLTYxOCAtMiAtMyAtMTYgNCAtMzEgMTUgLTU5IDQ0IC02NSA2MiAtOTkgMjk0IC00MyAyODcgLTQ2IDI5MSAtMTk5IDMwMCBsLTkwIDUgLTYgNDMgLTYgNDMgMTQ4IC0zIDE0OCAtMyAzMCAtMjl6IG0tMzg0IC0xODMgYzQgLTIxIDEwIC01OCAxNSAtODMgNSAtMjQgNiAtNDggNCAtNTIgLTMgLTQgLTI3MCAtOCAtNTk1IC04IGwtNTg5IDAgMCAyNyBjMCAxNCA1IDU1IDExIDkwIGwxMSA2MyA1NjkgMCA1NjggMCA2IC0zN3ogbTM1IC0yNDUgYzEzIC0zMSA5MCAtNTM4IDkwIC01OTIgMCAtNTcgLTQ1IC0xNDMgLTg5IC0xNzMgbC0zNCAtMjMgLTU2OSAwIGMtNjQzIDAgLTYxNCAtMyAtNjY3IDc3IC00OCA3MSAtNDggMTAxIC0xIDQwOSAyNCAxNTQgNDcgMjg5IDUxIDMwMiBsOSAyMiA2MDAgMCA2MDAgMCAxMCAtMjJ6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTQ3MjcgNzk0IGMtMTIgLTEyIC04IC01MSA3IC02MyA5IC04IDUyIC0xMSAxMjcgLTkgbDExNCAzIDAgMzUgMCAzNSAtMTIxIDMgYy02NiAxIC0xMjMgLTEgLTEyNyAtNHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNNDczOCA1MjkgYy0yMSAtMTIgLTI0IC01MiAtNCAtNjggOSAtOCA1MiAtMTEgMTI3IC05IGwxMTQgMyAzIDMwIGM2IDQ1IC0xNyA1NSAtMTI3IDU1IC01MyAwIC0xMDQgLTUgLTExMyAtMTF6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTQ3MzIgMjU4IGMtNyAtNyAtMTIgLTIxIC0xMiAtMzMgMCAtMzkgMTkgLTQ1IDEzMCAtNDUgMTExIDAgMTMwIDYgMTMwIDQ1IDAgMTIgLTUgMjYgLTEyIDMzIC0xNiAxNiAtMjIwIDE2IC0yMzYgMHpcXFwiPjwvcGF0aD48L2c+PC9zdmc+XCIiLCJleHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVDb250YWN0KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnRlbnQucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QnKTtcblxuICAgIGNvbnN0IGFkZHJlc3MgPSBjcmVhdGVBZGRyZXNzRGl2KCk7XG4gICAgY29uc3QgZm9ybSA9IGNyZWF0ZUZvcm0oKTtcblxuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFkZHJlc3NEaXYoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkcmVzcycpO1xuXG4gICAgY29uc3QgYWRkcmVzc0xpbmVzID0gW1xuICAgICAgICAnPGI+RmluZCB1cyBhdDo8L2I+JyxcbiAgICAgICAgJzY0IFpvbyBMYW5lJyxcbiAgICAgICAgJ1pvb2Nlc3RlcicsXG4gICAgICAgICdBbmltYWxzaGlyZScsXG4gICAgICAgICdDSDMzIDdBSCcsXG4gICAgICAgICdUZWw6IDAyODY0IDY0NjQ2NCcsXG4gICAgICAgICc8Yj5PcGVuOjwvYj48YnI+TW9uLVN1biAvIDA3OjAwLTE5OjMwJyxcbiAgICBdO1xuXG4gICAgYWRkcmVzc0xpbmVzLmZvckVhY2gobGluZSA9PiB7XG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHAuaW5uZXJIVE1MID0gbGluZTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHApO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGRpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9ybSgpIHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIHNldEF0dHJpYnV0ZXMoZm9ybSwgeydhY3Rpb24nOiAnIycsICdtZXRob2QnOiAncG9zdCd9KTtcblxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIHNldEF0dHJpYnV0ZXMobmFtZSwge1xuICAgICAgICAnaWQnOiAnbmFtZScsXG4gICAgICAgICduYW1lJzogJ25hbWUnLFxuICAgICAgICAndHlwZSc6ICd0ZXh0JyxcbiAgICAgICAgJ2F1dG9jb21wbGV0ZSc6ICdvZmYnLFxuICAgICAgICAncGxhY2Vob2xkZXInOiAnTmFtZSAocmVxdWlyZWQpJyxcbiAgICAgICAgJ2F1dG9mb2N1cyc6IHRydWUsXG4gICAgICAgICdyZXF1aXJlZCc6IHRydWUsXG4gICAgfSk7XG4gICAgc2V0QXR0cmlidXRlcyhlbWFpbCwge1xuICAgICAgICAnaWQnOiAnZW1haWwnLFxuICAgICAgICAnbmFtZSc6ICdlbWFpbCcsXG4gICAgICAgICd0eXBlJzogJ2VtYWlsJyxcbiAgICAgICAgJ2F1dG9jb21wbGV0ZSc6ICdvZmYnLFxuICAgICAgICAncGxhY2Vob2xkZXInOiAnRW1haWwgKHJlcXVpcmVkKScsXG4gICAgICAgICdyZXF1aXJlZCc6IHRydWUsXG4gICAgfSk7XG4gICAgc2V0QXR0cmlidXRlcyhtZXNzYWdlLCB7XG4gICAgICAgICdpZCc6ICdtZXNzYWdlJyxcbiAgICAgICAgJ25hbWUnOiAnbWVzc2FnZScsXG4gICAgICAgICdyb3dzJzogJzEwJyxcbiAgICAgICAgJ2NvbHMnOiAnNjAnLFxuICAgICAgICAncGxhY2Vob2xkZXInOiAnRW50ZXIgbWVzc2FnZSBoZXJlIChyZXF1aXJlZCknLFxuICAgICAgICAncmVxdWlyZWQnOiB0cnVlLFxuICAgIH0pO1xuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgYnRuLnRleHRDb250ZW50ID0gJ1NlbmQnO1xuXG4gICAgY29uc3QgZm9ybUVscyA9IFtuYW1lLCBlbWFpbCwgbWVzc2FnZSwgYnRuXTtcbiAgICBmb3JtRWxzLmZvckVhY2goZWwgPT4gZm9ybS5hcHBlbmRDaGlsZChlbCkpO1xuXG4gICAgcmV0dXJuIGZvcm07XG59XG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMoZWwsIGF0dHJpYnV0ZXMpIHtcbiAgICBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IGVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKSk7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlSG9tZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb250ZW50LnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IHNsb2dhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgY2FwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGhvbWUuc2V0QXR0cmlidXRlKCdpZCcsICdob21lJyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdDUzE3MG1nJztcbiAgICBzbG9nYW4uaW5uZXJIVE1MID0gJ1RoZSBjb2ZmZWUgeW91IGtub3cgYW5kIGxvdmU8YnI+d2l0aCBqdXN0IHRoYXQgbGl0dGxlIGJpdCBtb3JlJztcbiAgICBjYXB0aW9uLnRleHRDb250ZW50ID0gJ0l0IGFsbCBiZWdpbnMgd2l0aCBhIGJlYW4sIGEgbG92ZSwgYSBwYXNzaW9uLic7XG5cbiAgICBob21lLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQoc2xvZ2FuKTtcbiAgICBob21lLmFwcGVuZENoaWxkKGNhcHRpb24pO1xuICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGhvbWUpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmcmFnbWVudCk7XG59IiwiaW1wb3J0IHN2ZyBmcm9tICcuL21ldGhvZHMuc3ZnJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlTWVudSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb250ZW50LnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51Jyk7XG5cbiAgICBjb25zdCBiZWFucyA9IGNyZWF0ZUJlYW5zRGl2KCk7XG4gICAgY29uc3QgbWV0aG9kID0gY3JlYXRlTWV0aG9kRGl2KCk7XG4gICAgY29uc3QgZXNwcmVzc28gPSBjcmVhdGVFc3ByZXNzb0RpdigpO1xuXG4gICAgbWVudS5hcHBlbmRDaGlsZChiZWFucyk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChtZXRob2QpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoZXNwcmVzc28pO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQmVhbnNEaXYoKSB7XG4gICAgY29uc3QgZ3JpZENvbnRlbnRzID0ge1xuICAgICAgICAnR3VhdGVtYWxhbiBNb250ZSBSb3NhJzogJ0Egc2xvdy1ncm93aW5nLCBoaWdoLWFsdGl0dWRlIGJlYW4gdGhhdCBwcm92aWRlcyBhIGZ1bGwgYm9keSB3aXRoIHJpY2gsIHNtb290aCBjaG9jb2xhdGV5LCBudXR0eSBub3Rlcy4nLFxuICAgICAgICAnRXRoaW9waWFuIFJvY2tvIE1vdW50YWluJzogJ0EgbGlnaHQtbWVkaXVtIHJvYXN0IHRoYXQgc2hvd3Mgb2ZmIGFuIGVub3Jtb3VzIGNvbXBsZXhpdHkgb2YgZnJ1aXR5IGFuZCBmbG9yYWwgbm90ZXMsIHdpdGggYSBzdWJ0bGUgaGludCBvZiB3aW5lLicsXG4gICAgICAgICdNb25zb29uIE1hbGFiYXInOiAnRGFyayBhbmQgaGVhdnkgLSB0aGVzZSBiZWFucyBib2FzdCBhIGRlZXAsIHNtb2tleSwgc3BpY3kgZmxhdm91ciBwcm9maWxlLicsXG4gICAgICAgICdCcmF6aWxpYW4gTW9udGUgQ3Jpc3RvJzogJ1RoaXMgZnVsbC1ib2RpZWQgYmxlbmQgZ2l2ZXMgYSBzdWJ0bGUgc3dlZXRuZXNzIGFuZCBkZWxpY2F0ZSBhY2lkaXR5IHdpdGggYSB1bmlxdWUgYWZ0ZXJ0YXN0ZSBvZiBjb2NvYSBhbmQgdmFuaWxsYS4nLFxuICAgICAgICAnT2xkIEJyb3duIEphdmEnOiAnRm9yIHRoZSBib2xkISBTdHJvbmcgYW5kIGhlYXZ5IHdpdGggbGl0dGxlIGNvbXBsZXhpdHksIHRoaXMgaXMgYWxsIGFib3V0IHRoZSByaWNoIGludGVuc2l0eSBhbmQgZGVwdGggb2YgZmxhdm91ci4nLFxuICAgICAgICAnQ29sb21iaWFuIFN1cHJlbW8nOiAnQSBjbGFzc2ljIG1lZGl1bS1yb2FzdGVkIGFsbC1yb3VuZGVyLiBXZWxsLWJhbGFuY2VkLCBzbW9vdGggYW5kIHdpdGggbm90ZXMgb2YgY2hvY29sYXRlIGFuZCBjYXJhbWVsLicsXG4gICAgfTtcblxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BpY2stYmVhbicpO1xuXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdDaG9vc2UgeW91ciBiZWFucyc7XG4gICAgY29uc3QgZ3JpZCA9IGNyZWF0ZUdyaWQoZ3JpZENvbnRlbnRzKTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZ3JpZCk7XG5cbiAgICByZXR1cm4gZGl2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZXRob2REaXYoKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWV0aG9kJyk7XG5cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBtZXRob2RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWV0aG9kc0FyciA9IFsnQWVyb3ByZXNzJywgJ1BvdXItb3ZlcicsICdGcmVuY2ggcHJlc3MnXTtcbiAgICBjb25zdCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5cbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ0Nob29zZSBhIGNsYXNzaWMgYnJld2luZyBtZXRob2QnO1xuICAgIG1ldGhvZHNBcnIuZm9yRWFjaChtZXRob2QgPT4ge1xuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwLnRleHRDb250ZW50ID0gbWV0aG9kO1xuICAgICAgICBtZXRob2RzLmFwcGVuZENoaWxkKHApO1xuICAgIH0pO1xuICAgIHByaWNlLnRleHRDb250ZW50ID0gJ011ZyAoMjAwbWwpIC0gwqMyLjk5JztcbiAgICBcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgZGl2LmlubmVySFRNTCArPSBzdmc7XG4gICAgZGl2LmFwcGVuZENoaWxkKG1ldGhvZHMpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChwcmljZSk7XG5cbiAgICByZXR1cm4gZGl2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFc3ByZXNzb0RpdigpIHtcbiAgICBjb25zdCBncmlkQ29udGVudHMgPSB7XG4gICAgICAgICdBbWVyaWNhbm8nOiAnSG90IHdhdGVyIHBvdXJlZCBvdmVyIGEgc2hvdCBvZiBlc3ByZXNzby4nLFxuICAgICAgICAnRmxhdCBXaGl0ZSc6ICdFc3ByZXNzbywgc3RlYW1lZCBtaWxrIHdpdGggYSBkZWxpY2F0ZSBsYXllciBvZiBmcm90aHkgbWlsayB0byB0b3AuJyxcbiAgICAgICAgJ0NhZmbDqCBMYXR0ZSc6ICdBIHNob3Qgb2YgZXNwcmVzc28sIHN0ZWFtZWQgbWlsayBhbmQgYSBmaW5lIGxheWVyIG9mIGZvYW1lZCBtaWxrIG9uIHRvcCwgdGhvdWdoIG1vcmUgdGhhbiBhIGZsYXQgd2hpdGUuJyxcbiAgICAgICAgJ0NhcHB1Y2lubyc6ICdSZWxhdGVkIHRvIHRoZSBMYXR0ZSBidXQgd2l0aCBlcXVhbCBwYXJ0cyBzdGVhbWVkIG1pbGsgYW5kIGZvYW1lZCBtaWxrIC0gc2hvdyBvZmYgeW91ciBmb2Ftc3RhY2hlIScsXG4gICAgICAgICdNb2NoYSc6ICdBIHNob3Qgb2YgZXNwcmVzc28gbWl4ZWQgd2l0aCBjaG9jb2xhdGUgc3lydXAsIHN0ZWFtZWQgbWlsayB0aGVuIHRvcHBlZCB3aXRoIGZvYW1lZCBtaWxrIGFuZCBjb2NvYSBwb3dkZXIuJyxcbiAgICB9O1xuXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnZXNwcmVzc28nKTtcblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ09yIGNob29zZSBhbiBlc3ByZXNzby1iYXNlZCBkcmluayc7XG4gICAgcHJpY2UudGV4dENvbnRlbnQgPSAnUmVndWxhciAoMzQwbWwpIC0gwqMzLjk5IC8gTGFyZ2UgKDQ1NW1sKSAtIMKjNC43OSc7XG4gICAgY29uc3QgZ3JpZCA9IGNyZWF0ZUdyaWQoZ3JpZENvbnRlbnRzLCB0cnVlKTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZ3JpZCk7XG5cbiAgICByZXR1cm4gZGl2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVHcmlkKGNvbnRlbnRzLCBlc3ByZXNzbyA9IGZhbHNlKSB7XG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnZ3JpZCcpO1xuXG4gICAgZm9yIChjb25zdCBoZWFkaW5nIGluIGNvbnRlbnRzKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICAgICAgaDMudGV4dENvbnRlbnQgPSBoZWFkaW5nO1xuICAgICAgICBwLnRleHRDb250ZW50ID0gY29udGVudHNbaGVhZGluZ107XG5cbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGgzKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHApO1xuICAgICAgICBncmlkLmFwcGVuZENoaWxkKGRpdik7XG4gICAgfVxuXG4gICAgaWYgKGVzcHJlc3NvKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgICAgIHAxLmlubmVySFRNTCA9ICc8Yj5Fc3ByZXNzbzwvYj4gLSDCozIuMjknO1xuICAgICAgICBwMi5pbm5lckhUTUwgPSAnPGI+UmlzdHJldHRvPC9iPiAtIMKjMi4yOSc7XG4gICAgICAgIHAzLmlubmVySFRNTCA9ICc8Yj5NYWNjaGlhdG88L2I+IC0gwqMyLjQ5JztcblxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocDEpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocDIpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocDMpO1xuICAgICAgICBncmlkLmFwcGVuZENoaWxkKGRpdik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdyaWQ7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBnZW5lcmF0ZUhvbWUgfSBmcm9tIFwiLi9ob21lLmpzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZUNvbnRhY3QgfSBmcm9tIFwiLi9jb250YWN0LmpzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZU1lbnUgfSBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi9iZ2ltYWdlLmpwZyc7XG5cbmNvbnNvbGUubG9nKFwiVGhpcyBpcyB3b3JraW5nIVwiKTtcblxuY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ25hdiBidXR0b24nKTtcbnRhYnMuZm9yRWFjaCh0YWIgPT4gdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2VuZXJhdGVDb250ZW50KSk7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQ29udGVudChlKSB7XG4gICAgc3dpdGNoIChlLnRhcmdldC52YWx1ZSkge1xuICAgICAgICBjYXNlICdob21lJzpcbiAgICAgICAgICAgIGdlbmVyYXRlSG9tZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21lbnUnOlxuICAgICAgICAgICAgZ2VuZXJhdGVNZW51KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY29udGFjdCc6XG4gICAgICAgICAgICBnZW5lcmF0ZUNvbnRhY3QoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuLy8gaW5pdGlhbGlzZVxuZ2VuZXJhdGVIb21lKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9