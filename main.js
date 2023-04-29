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
    btn.textContent = 'Fake send';
    btn.addEventListener('click', e => e.preventDefault());

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
    div.appendChild(price);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXlDO0FBQ007QUFDTjtBQUNwQjtBQUNFOztBQUV2Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0RBQVk7QUFDeEI7QUFDQTtBQUNBLFlBQVksc0RBQVk7QUFDeEI7QUFDQTtBQUNBLFlBQVksNERBQWU7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0RBQVksRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3AvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3AvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC8uL3NyYy9tZXRob2RzLnN2ZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3AvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3Avd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3Avd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3Avd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3AvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYmdpbWFnZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvcm1vcmFudDp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tc2Nyb2xsYWJsZTogY2FsYygxMDB2aCAtIDEwcmVtIC0gNnB4KTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJyaWdodG5lc3MoNTAlKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LWZhbWlseTogJ0Nvcm1vcmFudCcsIHNlcmlmO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcXG5cXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICAgICAgd2lkdGg6IDA7XFxuICAgIH1cXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcXG4gICAgYm9yZGVyLWJvdHRvbTogNnB4IHNvbGlkIHJnYigxMzMsIDExNiwgNzApO1xcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMHJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbnVsIHtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMi41cmVtO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbiNjb250ZW50PmRpdiB7XFxuICAgIG1pbi1oZWlnaHQ6IHZhcigtLXNjcm9sbGFibGUpO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBhbmltYXRpb246IGZhZGVJbiAxcyBlYXNlLWluIDE7XFxuXFxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgICAgIHdpZHRoOiAwO1xcbiAgICB9XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gICAgMCUgeyBvcGFjaXR5OiAwOyB9XFxuICAgIDEwMCUge29wYWNpdHk6IDE7IH1cXG59XFxuXFxuI2hvbWUge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtO1xcblxcbiAgICAmPioge1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgfVxcblxcbiAgICAmPmgxIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcblxcbiAgICAmPmgzIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICY+cCB7XFxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgfVxcbn1cXG5cXG4jbWVudSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zODQpO1xcbiAgICBoZWlnaHQ6IHZhcigtLXNjcm9sbGFibGUpO1xcblxcbiAgICAmIGgxIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMi42cmVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgIG1hcmdpbjogMnJlbSAwO1xcbiAgICB9XFxuXFxuICAgICY+KiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgJj4jcGljay1iZWFuIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDNyZW07XFxuICAgIH1cXG5cXG4gICAgJj4jcGljay1iZWFuLFxcbiAgICAjZXNwcmVzc28ge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgICB3aWR0aDogOTAlO1xcbiAgICB9XFxuXFxuICAgICY+I21ldGhvZD5kaXYge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDExNHB4O1xcbiAgICB9XFxuXFxuICAgICY+I2VzcHJlc3NvIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRyZW07XFxuICAgICAgICAmPmgyIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMnJlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICY+LmdyaWQ+ZGl2Omxhc3QtY2hpbGQge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmIC5ncmlkIHtcXG4gICAgICAgIHdpZHRoOiBjbGFtcCg0MDBweCwgMTAwJSwgMTMwMHB4KTtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBncmlkLWF1dG8tcm93czogMTByZW07XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIDIwcmVtKTtcXG4gICAgICAgIGdhcDogM3JlbTtcXG5cXG4gICAgICAgICYgaDMsXFxuICAgICAgICBwIHtcXG4gICAgICAgICAgICBtYXJnaW46IDAuMnJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG4jY29udGFjdCB7XFxuICAgICY+I2FkZHJlc3MgeyAgICBcXG4gICAgICAgIG1hcmdpbjogNHJlbSBhdXRvIDNyZW07XFxuXFxuICAgICAgICAmPnAge1xcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmPnA6Zmlyc3QtY2hpbGQsXFxuICAgICAgICAmPnA6bGFzdC1jaGlsZCB7XFxuICAgICAgICAgICAgbWFyZ2luOiAwLjZyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJj5mb3JtIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiAxcmVtO1xcblxcbiAgICAgICAgJj4qIHtcXG4gICAgICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG5cXG4gICAgICAgICAgICAmOmZvY3VzIHtcXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmPnRleHRhcmVhIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgICAgICAgICAgcmVzaXplOiBub25lO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJj5idXR0b24ge1xcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICB3aWR0aDogOHJlbTtcXG5cXG4gICAgJjpob3ZlciB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICB9XFxufVxcblxcbjo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogIzRiNGI0YjtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmludmlzaWJsZSB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IseURBQXNDO0lBQ3RDLHNCQUFzQjtJQUN0QixnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLCtCQUErQjtJQUMvQixTQUFTO0lBQ1QscUJBQXFCOztJQUVyQjtRQUNJLFFBQVE7SUFDWjtBQUNKOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLDBDQUEwQztJQUMxQyxnQkFBZ0I7SUFDaEIsTUFBTTtJQUNOLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw4QkFBOEI7O0lBRTlCO1FBQ0ksUUFBUTtJQUNaO0FBQ0o7O0FBRUE7SUFDSSxLQUFLLFVBQVUsRUFBRTtJQUNqQixNQUFNLFVBQVUsRUFBRTtBQUN0Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixTQUFTOztJQUVUO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLFNBQVM7SUFDYjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMseUJBQXlCOztJQUV6QjtRQUNJLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsY0FBYztJQUNsQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBOztRQUVJLGlCQUFpQjtRQUNqQixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkI7WUFDSSxrQkFBa0I7WUFDbEIsZ0JBQWdCO1FBQ3BCOztRQUVBO1lBQ0ksYUFBYTtZQUNiLHNCQUFzQjtZQUN0Qix1QkFBdUI7UUFDM0I7SUFDSjs7SUFFQTtRQUNJLGlDQUFpQztRQUNqQyxtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixxQkFBcUI7UUFDckIsK0NBQStDO1FBQy9DLFNBQVM7O1FBRVQ7O1lBRUksY0FBYztRQUNsQjtJQUNKO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjs7UUFFdEI7WUFDSSxTQUFTO1lBQ1QsaUJBQWlCO1lBQ2pCLGtCQUFrQjtRQUN0Qjs7UUFFQTs7WUFFSSxjQUFjO1FBQ2xCO0lBQ0o7O0lBRUE7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLFNBQVM7O1FBRVQ7WUFDSSxvQkFBb0I7WUFDcEIsaUJBQWlCO1lBQ2pCLG9CQUFvQjs7WUFFcEI7Z0JBQ0ksYUFBYTtZQUNqQjtRQUNKOztRQUVBO1lBQ0ksZUFBZTtZQUNmLFlBQVk7UUFDaEI7O1FBRUE7WUFDSSxvQkFBb0I7WUFDcEIsZUFBZTtZQUNmLGlCQUFpQjtZQUNqQixnQkFBZ0I7UUFDcEI7SUFDSjtBQUNKOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixXQUFXOztJQUVYO1FBQ0ksZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjtBQUNKOztBQUVBO0lBQ0ksY0FBYztJQUNkLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db3Jtb3JhbnQ6d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAgIC0tc2Nyb2xsYWJsZTogY2FsYygxMDB2aCAtIDEwcmVtIC0gNnB4KTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYmdpbWFnZS5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBicmlnaHRuZXNzKDUwJSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3Jtb3JhbnQnLCBzZXJpZjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxuXFxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgICAgIHdpZHRoOiAwO1xcbiAgICB9XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XFxuICAgIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCByZ2IoMTMzLCAxMTYsIDcwKTtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTByZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG51bCB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIuNXJlbTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jY29udGVudD5kaXYge1xcbiAgICBtaW4taGVpZ2h0OiB2YXIoLS1zY3JvbGxhYmxlKTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMXMgZWFzZS1pbiAxO1xcblxcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgICAgICB3aWR0aDogMDtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAgIDAlIHsgb3BhY2l0eTogMDsgfVxcbiAgICAxMDAlIHtvcGFjaXR5OiAxOyB9XFxufVxcblxcbiNob21lIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMnJlbTtcXG5cXG4gICAgJj4qIHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIH1cXG5cXG4gICAgJj5oMSB7XFxuICAgICAgICBmb250LXNpemU6IDVyZW07XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgIH1cXG5cXG4gICAgJj5oMyB7XFxuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAmPnAge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIH1cXG59XFxuXFxuI21lbnUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzg0KTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1zY3JvbGxhYmxlKTtcXG5cXG4gICAgJiBoMSB7XFxuICAgICAgICBmb250LXNpemU6IDIuNnJlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICBtYXJnaW46IDJyZW0gMDtcXG4gICAgfVxcblxcbiAgICAmPioge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICY+I3BpY2stYmVhbiB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgICB9XFxuXFxuICAgICY+I3BpY2stYmVhbixcXG4gICAgI2VzcHJlc3NvIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgfVxcblxcbiAgICAmPiNtZXRob2Q+ZGl2IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAxMTRweDtcXG4gICAgfVxcblxcbiAgICAmPiNlc3ByZXNzbyB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xcbiAgICAgICAgJj5oMiB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDJyZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmPi5ncmlkPmRpdjpsYXN0LWNoaWxkIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJiAuZ3JpZCB7XFxuICAgICAgICB3aWR0aDogY2xhbXAoNDAwcHgsIDEwMCUsIDEzMDBweCk7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgZ3JpZC1hdXRvLXJvd3M6IDEwcmVtO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCAyMHJlbSk7XFxuICAgICAgICBnYXA6IDNyZW07XFxuXFxuICAgICAgICAmIGgzLFxcbiAgICAgICAgcCB7XFxuICAgICAgICAgICAgbWFyZ2luOiAwLjJyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuI2NvbnRhY3Qge1xcbiAgICAmPiNhZGRyZXNzIHsgICAgXFxuICAgICAgICBtYXJnaW46IDRyZW0gYXV0byAzcmVtO1xcblxcbiAgICAgICAgJj5wIHtcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJj5wOmZpcnN0LWNoaWxkLFxcbiAgICAgICAgJj5wOmxhc3QtY2hpbGQge1xcbiAgICAgICAgICAgIG1hcmdpbjogMC42cmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICY+Zm9ybSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogMXJlbTtcXG5cXG4gICAgICAgICY+KiB7XFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuXFxuICAgICAgICAgICAgJjpmb2N1cyB7XFxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgJj50ZXh0YXJlYSB7XFxuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtO1xcbiAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICY+YnV0dG9uIHtcXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgd2lkdGg6IDhyZW07XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgfVxcbn1cXG5cXG46OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6ICM0YjRiNGI7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5pbnZpc2libGUge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTAxMy4wMDAwMDAgMjg5LjAwMDAwMFxcXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cXFwieE1pZFlNaWQgbWVldFxcXCI+PGcgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoMC4wMDAwMDAsMjg5LjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKVxcXCIgZmlsbD1cXFwiI0ZGRkZGRlxcXCIgc3Ryb2tlPVxcXCJub25lXFxcIj48cGF0aCBkPVxcXCJNNTczIDI4NzAgYy02MSAtMzcgLTgxIC0xMTYgLTQzIC0xNzcgMjIgLTM2IDY2IC02MyAxMDUgLTYzIDIyIDAgMjUgLTQgMjUgLTMzIDAgLTMxIC0zIC0zMyAtNTAgLTQ0IC02MiAtMTUgLTEwMSAtNDIgLTEzMiAtOTEgLTIzIC0zNyAtMjMgLTQxIC0yNiAtMzc5IGwtMyAtMzQxIC0xNzIgLTQgYy0xOTIgLTMgLTIxOSAtMTEgLTI1NiAtNzEgLTU4IC05NCAwIC0yMDMgMTE2IC0yMjIgbDQzIC03IDAgLTYxNiBjMCAtNDA0IDQgLTYzMCAxMSAtNjU1IDEzIC00OSA3MyAtMTE1IDEyNCAtMTM4IDM3IC0xNyA3OSAtMTkgNTc1IC0xOSA2MDMgMCA1ODAgLTIgNjUyIDc4IDQ2IDUxIDU4IDkzIDU4IDIwNCBsMCA4NiAxNDggNCBjMTI0IDMgMTU0IDcgMTk0IDI1IDY2IDMwIDEyOSA5MiAxNjQgMTYwIGwyOSA1OCAzIDIyMCBjMyAyMDUgMiAyMjUgLTE4IDI3NyAtMjYgNzEgLTkxIDE0NSAtMTYyIDE4MyAtNTAgMjggLTYwIDMwIC0yMDMgMzUgbC0xNTAgNSAtMyA0NyAtMyA0NiA0MyA3IGM2MCAxMCA5MyAyOSAxMTcgNjggNDYgNzQgMTcgMTcyIC02MiAyMDcgLTM2IDE3IC02NiAyMCAtMjA0IDIwIGwtMTYyIDAgLTMgMzQzIGMtMyAzMzggLTMgMzQyIC0yNiAzNzkgLTMxIDQ5IC03MCA3NiAtMTMyIDkxIC00NyAxMSAtNTAgMTMgLTUwIDQ0IDAgMjkgMyAzMyAyOCAzMyAzNyAwIDg4IDMzIDEwNyA2OSAzMSA2MSAxMSAxMzYgLTQ4IDE3MSAtMzAgMTkgLTUyIDIwIC0zMTcgMjAgLTI2NSAwIC0yODcgLTEgLTMxNyAtMjB6IG01OTcgLTgwIGMyNCAtMjQgMjUgLTM4IDMgLTYyIC0xNSAtMTcgLTM3IC0xOCAtMjg0IC0xOCAtMjY1IDAgLTI2OCAwIC0yODMgMjIgLTIwIDI5IC0yMCAzNCA0IDU4IDE5IDE5IDMzIDIwIDI4MCAyMCAyNDcgMCAyNjEgLTEgMjgwIC0yMHogbS0xNDAgLTE5NSBsMCAtMzUgLTE0MCAwIC0xNDAgMCAwIDM1IDAgMzUgMTQwIDAgMTQwIDAgMCAtMzV6IG0xODEgLTE1NCBsMjkgLTI5IDAgLTMzNiAwIC0zMzYgLTM1MCAwIC0zNTAgMCAwIDMzNiAwIDMzNiAyOSAyOSAyOSAyOSAyOTIgMCAyOTIgMCAyOSAtMjl6IG00NjkgLTgxMSBjMTEgLTExIDIwIC0yOSAyMCAtNDAgMCAtMTEgLTkgLTI5IC0yMCAtNDAgLTIwIC0yMCAtMzMgLTIwIC03OTAgLTIwIC03NTcgMCAtNzcwIDAgLTc5MCAyMCAtMTEgMTEgLTIwIDI5IC0yMCA0MCAwIDExIDkgMjkgMjAgNDAgMjAgMjAgMzMgMjAgNzkwIDIwIDc1NyAwIDc3MCAwIDc5MCAtMjB6IG0tMTIzMCAtMjMyIGMwIC0yNCAxMSAtNjYgMjQgLTk0IDI1IC01MyA1OCAtODMgMTE1IC0xMDIgNDggLTE3IDU1MCAtMTYgNjA1IDAgNzkgMjQgMTM2IDEwOCAxMzYgMjAyIGwwIDM2IDk1IDAgOTUgMCAtMiAtMzQyIC0zIC0zNDMgLTEwMiAtMyBjLTkwIC0yIC0xMDQgLTUgLTExMyAtMjIgLTggLTE0IC04IC0yNiAwIC00MCA5IC0xNyAyMyAtMjAgMTEzIC0yMiBsMTAyIC0zIDAgLTIzNyBjMCAtMjIzIC0xIC0yMzggLTIxIC0yNjQgLTExIC0xNSAtMzMgLTM3IC00OCAtNDggLTI3IC0yMSAtMzggLTIxIC01NTYgLTIxIC01MTggMCAtNTI5IDAgLTU1NiAyMSAtMTUgMTEgLTM3IDMzIC00OCA0OCAtMjAgMjYgLTIxIDQxIC0yMSAyNjQgbDAgMjM3IDQ2OSA1IGM0MzIgNSA0NzAgNiA0ODAgMjMgOCAxMiA4IDIyIDAgMzUgLTEwIDE2IC00OCAxNyAtNDgwIDIyIGwtNDY5IDUgLTMgMzQzIC0yIDM0MiA5NSAwIDk1IDAgMCAtNDJ6IG03OTAgLTkgYzAgLTQzIC01IC01NSAtMjkgLTgwIGwtMjkgLTI5IC0yOTIgMCAtMjkyIDAgLTI5IDMxIGMtMjQgMjYgLTI5IDQwIC0yOSA4MCBsMCA0OSAzNTAgMCAzNTAgMCAwIC01MXogbTY2MCAtMTUwIGM1NSAtMjUgMTA1IC03MSAxMzMgLTEyNCAxOSAtMzYgMjIgLTU5IDI1IC0yMjcgNSAtMjMyIC01IC0yNzYgLTc3IC0zNDggLTY0IC02NCAtMTE4IC04MCAtMjY4IC04MCBsLTExMyAwIDAgNDQgMCA0NCAxMjMgNCBjMTE0IDMgMTI3IDUgMTY0IDMwIDcyIDQ3IDgzIDg2IDgzIDI4NCBsMCAxNzAgLTI5IDQ3IGMtNDYgNzEgLTkxIDkwIC0yMjggOTUgbC0xMTMgNCAwIDM5IDAgMzkgMTI4IDAgYzEwNiAwIDEzNCAtNCAxNzIgLTIxeiBtLTcwIC0xNjQgYzUxIC0yNiA2MCAtNTggNjAgLTIxNSAwIC0yMTAgLTE2IC0yMzAgLTE5MCAtMjMwIGwtMTAwIDAgMCAyMzAgMCAyMzAgMTAwIDAgYzcxIDAgMTEwIC01IDEzMCAtMTV6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTgxMiAyMzc4IGMtMTYgLTE2IC0xNSAtNDMgMiAtNTcgMjMgLTE5IDE0NiAtMTAgMTYwIDEyIDggMTIgOCAyMiAwIDM1IC0xNCAyMiAtMTQyIDMwIC0xNjIgMTB6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTgxNiAyMjE0IGMtNDAgLTM5IC01IC03NCA3NCAtNzQgNjIgMCA5MCAxNSA5MCA1MCAwIDI3IC0zMCA0MCAtOTQgNDAgLTM2IDAgLTYwIC01IC03MCAtMTZ6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTgxNiAyMDU0IGMtMzkgLTM5IC01IC03NCA3MCAtNzQgNjQgMCA5NCAxMyA5NCA0MCAwIDM1IC0yOCA1MCAtOTAgNTAgLTQwIDAgLTY0IC01IC03NCAtMTZ6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTgxMiAxODg4IGMtMTYgLTE2IC0xNSAtNDMgMiAtNTcgMjMgLTE5IDE0NiAtMTAgMTYwIDEyIDggMTIgOCAyMiAwIDM1IC0xNCAyMiAtMTQyIDMwIC0xNjIgMTB6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTg0NSAxMTI1IGMtNDMgLTIxIC05OCAtMTE3IC05OCAtMTY5IDAgLTg1IDU5IC0xNDYgMTQzIC0xNDYgNjIgMCAxMDYgMjkgMTMxIDg2IDI1IDU1IDIwIDg4IC0yNyAxNjYgLTQ1IDc0IC04OSA5MiAtMTQ5IDYzeiBtODMgLTExNSBjMjYgLTQ2IDI4IC03NyA1IC0xMDIgLTMyIC0zNiAtMTAzIC0xMCAtMTAzIDM4IDAgMzMgNDEgMTA0IDYwIDEwNCA4IDAgMjUgLTE4IDM4IC00MHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNODcwNSAyODU3IGMtNzkgLTM2IC0xMjUgLTEzMyAtMTA0IC0yMjAgMTMgLTU1IDcwIC0xMjIgMTE0IC0xMzMgMjQgLTYgMjUgLTkgMjUgLTgwIGwwIC03NCAtMTc5IDAgYy0yMDIgMCAtMjYwIC04IC0zNDggLTUwIC0xNDIgLTY2IC0yNDMgLTIzMSAtMjQzIC0zOTYgbDAgLTM0IC04MiAwIGMtMTExIDAgLTE0MCAtMTUgLTIwMiAtMTA3IC0zNyAtNTQgLTQ3IC03NyAtNDIgLTk1IDMgLTEzIDg0IC05MSAxOTEgLTE4MyBsMTg0IC0xNjAgMSAtNTYwIGMxIC00NDEgNCAtNTY4IDE0IC01OTggMjIgLTYwIDYyIC0xMDQgMTIwIC0xMzEgbDU1IC0yNiA1NzYgMCA1NzYgMCA1NCAyNSBjMTAwIDQ4IDEzNSAxMjQgMTM1IDI5NyBsMCAxMDggMTUwIDAgYzEyOSAwIDE1NyAzIDIwNyAyMiA4MCAyOSAxNjIgMTEyIDE5MiAxOTIgMjEgNTggMjIgNjggMTkgNDQ1IGwtMyAzODYgLTM2IDY1IGMtMjMgNDMgLTUyIDc4IC04NSAxMDIgLTc4IDYwIC0xMTkgNzAgLTI5MSA3NiBsLTE1MyA0IDAgMjUgYzAgMTQgOSAzNiAyMCA1MCAyOCAzNSAzNCA4MyAyMiAxNjUgLTI4IDE4NiAtMTY4IDMzMyAtMzUxIDM2OCAtMzAgNSAtMTM0IDEwIC0yMzIgMTAgbC0xNzkgMCAwIDczIDAgNzIgNDIgMjAgYzEyMSA1OSAxMzUgMjMyIDI1IDMxOSAtMzEgMjUgLTQ4IDMxIC0xMDAgMzMgLTM4IDIgLTc0IC0yIC05MiAtMTB6IG0xMTQgLTg4IGMzNSAtMTIgNjEgLTUzIDYxIC05NCAwIC00MiAtNTAgLTg1IC05OCAtODUgLTk1IDAgLTEyNSAxMzAgLTQxIDE3NiAzMCAxNiAzOCAxNyA3OCAzeiBtNDkyIC01NTIgYzEwOSAtNTMgMTc4IC0xNTYgMTg3IC0yNzkgbDUgLTY4IC03MTcgMCAtNzE2IDAgMCA0OCBjMCAxMzkgOTIgMjY4IDIyMiAzMTMgNDkgMTcgODggMTkgNTA4IDE2IGw0NTUgLTIgNTYgLTI4eiBtLTEyOTEgLTYwMiBjMCAtODUgLTMgLTE1NSAtNiAtMTU1IC01IDAgLTE3MSAxNDIgLTI1MiAyMTUgLTEyIDEwIC05IDIwIDEzIDU0IGwyOCA0MSAxMDggMCAxMDkgMCAwIC0xNTV6IG03MjAgLTQ0IGwwIC0xOTkgLTUyIC0xMyBjLTcwIC0xNyAtMjY2IC0xNCAtMzU5IDUgLTQxIDkgLTEwMyAzMCAtMTM5IDQ4IGwtNjUgMzMgLTMgMTYzIC0yIDE2MiAzMTAgMCAzMTAgMCAwIC0xOTl6IG03MTAgMzggYzAgLTE0OCAtMSAtMTYwIC0xNyAtMTU1IC04MSAyMiAtMjU1IDM1IC0zNDkgMjYgLTY4IC03IC0xNTYgLTMxIC0yMzYgLTY1IC0xNyAtNyAtMTggNSAtMTggMTc0IGwwIDE4MSAzMTAgMCAzMTAgMCAwIC0xNjF6IG00MTIgOSBjNTMgLTE2IDEyMSAtNzggMTQ0IC0xMzAgMTcgLTM5IDE5IC03OCAyMiAtMzc2IDIgLTIyMiAtMSAtMzUxIC04IC0zODggLTE1IC03MCAtNjEgLTEzMCAtMTI1IC0xNjMgLTQ1IC0yNCAtNjIgLTI2IC0xOTcgLTI5IGwtMTQ4IC00IDAgNTAgMCA1MSAxNDkgMyBjMTQzIDMgMTUxIDQgMTc2IDI4IDU1IDUxIDU1IDUyIDU1IDQyMiAwIDMxNiAtMSAzNDYgLTE5IDM3OCAtMzMgNjIgLTY4IDc1IC0yMjMgNzggbC0xMzggNCAwIDQ0IDAgNDQgMTM2IDAgYzc2IDAgMTU0IC01IDE3NiAtMTJ6IG0tMzUgLTIwOCBjMTAgLTE5IDEzIC0xMDAgMTEgLTM0MyAtMyAtMzAyIC00IC0zMTkgLTIyIC0zMzMgLTE1IC0xMCAtNTIgLTE0IC0xNDMgLTE0IGwtMTIzIDAgMCAzNjAgMCAzNjEgMTMyIC0zIGMxMzAgLTMgMTMzIC0zIDE0NSAtMjh6IG0tNDQ5IC00MCBsNzIgLTEzIDAgLTMzOSAwIC0zMzkgLTQyIDI5IGMtODEgNTYgLTExNyA2MiAtMzU4IDYyIGwtMjIwIDAgMCAyNjUgMCAyNjUgMzggMTggYzM5IDIwIDE0OSA1NyAxOTIgNjYgNDEgOCAyNDAgLTEgMzE4IC0xNHogbS0xMTUzIC03NSBjMzkgLTEzIDExMCAtMjkgMTU5IC0zNiA4NyAtMTEgMjcwIC04IDMyOSA3IGwyNyA2IDAgLTI1MSAwIC0yNTEgLTIyMCAwIGMtMjQxIDAgLTI3NyAtNiAtMzU3IC02MiBsLTQzIC0yOSAwIDMyNyBjMCAzMDcgMSAzMjYgMTggMzE5IDkgLTMgNDkgLTE3IDg3IC0zMHogbTEwOTAgLTY0MiBjMjIgLTEyIDU0IC0zNiA3MiAtNTUgMzQgLTM1IDY3IC0xMDEgNTYgLTExMiAtOCAtOCAtMTMwOCAtOCAtMTMxNiAwIC0xMSAxMSAyMiA3NyA1NiAxMTIgMzcgMzkgNzggNjMgMTI3IDczIDE5IDQgMjQ0IDcgNTAwIDYgNDU2IC0yIDQ2NiAtMiA1MDUgLTI0eiBtMTM1IC0zNTUgYzAgLTEwMyAtMTUgLTE0MSAtNjcgLTE3NSAtMjUgLTE3IC02NyAtMTggLTU3OCAtMjEgLTM1OSAtMiAtNTYyIDAgLTU4NSA3IC0yMCA2IC00OSAyNCAtNjUgNDEgLTI5IDMwIC0zMCAzNiAtMzMgMTM2IGwtNCAxMDQgNjY2IDAgNjY2IDAgMCAtOTJ6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTgzNDMgMjE1MCBjLTgyIC0xOSAtMTQ2IC05NCAtMTI3IC0xNDkgNyAtMjAgMTcgLTI3IDQyIC0yOSAyOSAtMyAzNCAxIDQ3IDMyIDE3IDQwIDQxIDU2IDg0IDU2IDU2IDAgODEgNTUgMzkgODQgLTI0IDE3IC0zNiAxOCAtODUgNnpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNODI3MiAyNzggYy0yOCAtMjggLTcgLTc4IDMzIC03OCAyNyAwIDQ1IDE4IDQ1IDQ1IDAgMjcgLTE4IDQ1IC00NSA0NSAtMTIgMCAtMjYgLTUgLTMzIC0xMnpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNODUxMiAyNzggYy0yOCAtMjggLTcgLTc4IDMzIC03OCAyNyAwIDQ1IDE4IDQ1IDQ1IDAgMjcgLTE4IDQ1IC00NSA0NSAtMTIgMCAtMjYgLTUgLTMzIC0xMnpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNODc1MiAyNzggYy0yOCAtMjggLTcgLTc4IDMzIC03OCAyNyAwIDQ1IDE4IDQ1IDQ1IDAgMjcgLTE4IDQ1IC00NSA0NSAtMTIgMCAtMjYgLTUgLTMzIC0xMnpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNODk5MiAyNzggYy0yOCAtMjggLTcgLTc4IDMzIC03OCAyNyAwIDQ1IDE4IDQ1IDQ1IDAgMjcgLTE4IDQ1IC00NSA0NSAtMTIgMCAtMjYgLTUgLTMzIC0xMnpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNOTIzNCAyODMgYy0zNCAtMjUgLTEyIC04MyAzMiAtODMgMzAgMCA1NCA0MiAzNyA2OCAtMTEgMTggLTUxIDI3IC02OSAxNXpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNNDEzNCAyODUxIGMtMTEgLTUgLTMzIC0yMyAtNDcgLTQxIC00OCAtNTYgLTQwIC05NCA2MyAtMzAwIGw5MCAtMTgwIC03NiAwIGMtODYgMCAtMTE0IC0xMSAtMTE0IC00NCAwIC0xMyA1NCAtMTAxIDEzMCAtMjA5IDcyIC0xMDIgMTMwIC0xODggMTMwIC0xOTEgMCAtMyAtMzQgLTYgLTc1IC02IC00MyAwIC05MCAtNiAtMTEwIC0xNCAtNjUgLTI3IC05NSAtMTE5IC02MSAtMTg1IDE5IC0zNSAzNyAtNTAgODEgLTY1IGwzNSAtMTIgLTY2IC01MyBjLTU1IC00NCAtNjUgLTU3IC02MiAtNzkgMiAtMjIgMTYgLTM0IDgwIC02NyA0MiAtMjIgNzkgLTQzIDgyIC00NiA1IC01IC0yMiAtMTg4IC0xMjAgLTgyNCAtMjIgLTE0MCAtMzQgLTI0OCAtMzEgLTI3NSA4IC02MiAzOSAtMTMxIDgyIC0xNzggNjggLTc2IDMxIC03MiA3MTMgLTcyIGw2MDkgMCAzOCAyNiBjNDggMzIgNjkgNTcgMTAyIDExOSAzNyA3MiA0MCAxNDEgMTAgMzMwIC0xNCA4OCAtNDIgMjY0IC02MSAzOTAgLTIwIDEyNyAtMzggMjQyIC00MSAyNTggbC00IDI3IDY4IDAgYzQzIDAgNzIgLTUgNzggLTEyIDYgLTcgMjIgLTEwMSAzNyAtMjA4IDE1IC0xMDcgMzQgLTIxNSA0MyAtMjM5IDMzIC05MyAxMzcgLTE2NiAyMjYgLTE1OSA0MCAzIDQyIDQgNDUgMzkgMiAyMCAtMTMgMTgyIC0zMyAzNjAgLTM5IDM1NCAtNDcgMzg1IC0xMTEgNDM4IC01MiA0MiAtOTYgNTEgLTI1MiA1MSAtMTU4IDAgLTE0NSAtNyAtMTU3IDg1IC0zIDI4IC05IDYwIC0xMiA3MyAtNSAyMSAtMiAyMiA1MyAyMiA5OCAwIDE1NyA1MSAxNTcgMTM1IDAgODkgLTUwIDEyOCAtMTc1IDEzNSBsLTg4IDUgMTM1IDE5NCBjNzQgMTA2IDEzNSAxOTcgMTM1IDIwMiAwIDUgLTkgMTggLTIwIDI5IC0xNiAxNiAtMzMgMjAgLTgwIDIwIGwtNjAgMCA1NSAxMDMgYzMwIDU3IDU1IDExMSA1NSAxMTkgMCAyMyAtMTEyIDE1NSAtMTczIDIwNSAtMTQ0IDExOCAtMzUyIDEzNiAtNTMyIDQ2IC02NiAtMzMgLTg1IC01MSAtODUgLTc5IDAgLTQ3IDMxIC00NyAxMjcgLTEgODYgNDEgOTAgNDIgMTkzIDQyIDk2IDAgMTEwIC0zIDE2NSAtMjkgNjIgLTMwIDE4OSAtMTQ5IDE4MiAtMTY5IC0yIC02IC0yOCAtMjAgLTU4IC0zMSAtNDQgLTE3IC03OCAtMjAgLTE4OSAtMjAgLTE2NCAwIC0xNTYgLTMgLTUzMCAxNjkgLTE1MSA3MCAtMzAwIDEzNiAtMzMwIDE0NyAtNjEgMjIgLTIxMiAzNCAtMjQ2IDE5eiBtMTk0IC05NiBjMjggLTkgMTc5IC03NCAzMzQgLTE0NiAzNjQgLTE2OCA0MDAgLTE4MCA1NTMgLTE4NiA4OSAtNCAxMzUgLTEgMTgwIDExIDMyIDggNjAgMTQgNjIgMTIgMiAtMSAtMTEgLTI4IC0yOCAtNTkgbC0zMSAtNTcgLTUyOSAwIC01MjkgMCAtOTUgMTkwIGMtNTIgMTA0IC05NSAxOTggLTk1IDIwOCAwIDEwIDUgMjMgMTIgMzAgMTcgMTcgMTA0IDE1IDE2NiAtM3ogbTExOTIgLTUyMSBjMCAtNCAtNTUgLTg1IC0xMjIgLTE4MCBsLTEyMiAtMTc0IC00MjUgMCAtNDI2IDAgLTEwNSAxNTEgYy01OCA4NCAtMTEzIDE2NSAtMTIzIDE4MCBsLTE5IDI5IDY3MSAwIGMzNjkgMCA2NzEgLTMgNjcxIC02eiBtMzQgLTQ2MCBjOSAtOCAxNiAtMjIgMTYgLTI5IDAgLTcgLTcgLTIxIC0xNiAtMjkgLTE0IC0xNCAtOTEgLTE2IC03MDMgLTE2IC01MjEgMCAtNjkwIDMgLTY5OSAxMiAtNyA3IC0xMiAyMSAtMTIgMzMgMCAxMiA1IDI2IDEyIDMzIDkgOSAxNzggMTIgNjk5IDEyIDYxMiAwIDY4OSAtMiA3MDMgLTE2eiBtLTkwOSAtMjU0IGw0NSAtOTAgLTIwNSAwIGMtMjAxIDAgLTIwNyAxIC0yNTYgMjYgLTQ4IDI0IC01MCAyNiAtMzQgNDQgMjQgMjcgMTI1IDc4IDE4NiA5NCAzMCA4IDkxIDE1IDEzNiAxNSBsODMgMSA0NSAtOTB6IG0zNjUgODQgYzAgLTQgLTIwIC00NSAtNDYgLTkwIGwtNDUgLTg0IC02NCAwIC02NSAwIC00NSA5MCAtNDUgOTAgMTU1IDAgYzg1IDAgMTU1IC0zIDE1NSAtNnogbTM0OSAtNjEgYzcgLTM4IDE0IC03OCAxNyAtOTAgbDQgLTIzIC0xNzkgMCAtMTc5IDAgNDYgOTAgNDcgOTAgMTE2IDAgMTE3IDAgMTEgLTY3eiBtMzUgLTIxOSBjMyAtOSA2IC0yOSA2IC00NSBsMCAtMjkgLTU1MCAwIC01NTAgMCAwIDI5IGMwIDY2IC00MiA2MSA1NTAgNjEgNDgxIDAgNTM4IC0yIDU0NCAtMTZ6IG00MTUgLTE4IGMxNyAtMTYgMzMgLTM3IDM2IC00NyA5IC0yNyA3NCAtNjEzIDY5IC02MTggLTIgLTMgLTE2IDQgLTMxIDE1IC01OSA0NCAtNjUgNjIgLTk5IDI5NCAtNDMgMjg3IC00NiAyOTEgLTE5OSAzMDAgbC05MCA1IC02IDQzIC02IDQzIDE0OCAtMyAxNDggLTMgMzAgLTI5eiBtLTM4NCAtMTgzIGM0IC0yMSAxMCAtNTggMTUgLTgzIDUgLTI0IDYgLTQ4IDQgLTUyIC0zIC00IC0yNzAgLTggLTU5NSAtOCBsLTU4OSAwIDAgMjcgYzAgMTQgNSA1NSAxMSA5MCBsMTEgNjMgNTY5IDAgNTY4IDAgNiAtMzd6IG0zNSAtMjQ1IGMxMyAtMzEgOTAgLTUzOCA5MCAtNTkyIDAgLTU3IC00NSAtMTQzIC04OSAtMTczIGwtMzQgLTIzIC01NjkgMCBjLTY0MyAwIC02MTQgLTMgLTY2NyA3NyAtNDggNzEgLTQ4IDEwMSAtMSA0MDkgMjQgMTU0IDQ3IDI4OSA1MSAzMDIgbDkgMjIgNjAwIDAgNjAwIDAgMTAgLTIyelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk00NzI3IDc5NCBjLTEyIC0xMiAtOCAtNTEgNyAtNjMgOSAtOCA1MiAtMTEgMTI3IC05IGwxMTQgMyAwIDM1IDAgMzUgLTEyMSAzIGMtNjYgMSAtMTIzIC0xIC0xMjcgLTR6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTQ3MzggNTI5IGMtMjEgLTEyIC0yNCAtNTIgLTQgLTY4IDkgLTggNTIgLTExIDEyNyAtOSBsMTE0IDMgMyAzMCBjNiA0NSAtMTcgNTUgLTEyNyA1NSAtNTMgMCAtMTA0IC01IC0xMTMgLTExelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk00NzMyIDI1OCBjLTcgLTcgLTEyIC0yMSAtMTIgLTMzIDAgLTM5IDE5IC00NSAxMzAgLTQ1IDExMSAwIDEzMCA2IDEzMCA0NSAwIDEyIC01IDI2IC0xMiAzMyAtMTYgMTYgLTIyMCAxNiAtMjM2IDB6XFxcIj48L3BhdGg+PC9nPjwvc3ZnPlwiIiwiZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlQ29udGFjdCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb250ZW50LnJlcGxhY2VDaGlsZHJlbigpO1xuXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3Quc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0Jyk7XG5cbiAgICBjb25zdCBhZGRyZXNzID0gY3JlYXRlQWRkcmVzc0RpdigpO1xuICAgIGNvbnN0IGZvcm0gPSBjcmVhdGVGb3JtKCk7XG5cbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhY3QpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVBZGRyZXNzRGl2KCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZHJlc3MnKTtcblxuICAgIGNvbnN0IGFkZHJlc3NMaW5lcyA9IFtcbiAgICAgICAgJzxiPkZpbmQgdXMgYXQ6PC9iPicsXG4gICAgICAgICc2NCBab28gTGFuZScsXG4gICAgICAgICdab29jZXN0ZXInLFxuICAgICAgICAnQW5pbWFsc2hpcmUnLFxuICAgICAgICAnQ0gzMyA3QUgnLFxuICAgICAgICAnVGVsOiAwMjg2NCA2NDY0NjQnLFxuICAgICAgICAnPGI+T3Blbjo8L2I+PGJyPk1vbi1TdW4gLyAwNzowMC0xOTozMCcsXG4gICAgXTtcblxuICAgIGFkZHJlc3NMaW5lcy5mb3JFYWNoKGxpbmUgPT4ge1xuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwLmlubmVySFRNTCA9IGxpbmU7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChwKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBkaXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvcm0oKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBzZXRBdHRyaWJ1dGVzKGZvcm0sIHsnYWN0aW9uJzogJyMnLCAnbWV0aG9kJzogJ3Bvc3QnfSk7XG5cbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBzZXRBdHRyaWJ1dGVzKG5hbWUsIHtcbiAgICAgICAgJ2lkJzogJ25hbWUnLFxuICAgICAgICAnbmFtZSc6ICduYW1lJyxcbiAgICAgICAgJ3R5cGUnOiAndGV4dCcsXG4gICAgICAgICdhdXRvY29tcGxldGUnOiAnb2ZmJyxcbiAgICAgICAgJ3BsYWNlaG9sZGVyJzogJ05hbWUgKHJlcXVpcmVkKScsXG4gICAgICAgICdhdXRvZm9jdXMnOiB0cnVlLFxuICAgICAgICAncmVxdWlyZWQnOiB0cnVlLFxuICAgIH0pO1xuICAgIHNldEF0dHJpYnV0ZXMoZW1haWwsIHtcbiAgICAgICAgJ2lkJzogJ2VtYWlsJyxcbiAgICAgICAgJ25hbWUnOiAnZW1haWwnLFxuICAgICAgICAndHlwZSc6ICdlbWFpbCcsXG4gICAgICAgICdhdXRvY29tcGxldGUnOiAnb2ZmJyxcbiAgICAgICAgJ3BsYWNlaG9sZGVyJzogJ0VtYWlsIChyZXF1aXJlZCknLFxuICAgICAgICAncmVxdWlyZWQnOiB0cnVlLFxuICAgIH0pO1xuICAgIHNldEF0dHJpYnV0ZXMobWVzc2FnZSwge1xuICAgICAgICAnaWQnOiAnbWVzc2FnZScsXG4gICAgICAgICduYW1lJzogJ21lc3NhZ2UnLFxuICAgICAgICAncm93cyc6ICcxMCcsXG4gICAgICAgICdjb2xzJzogJzYwJyxcbiAgICAgICAgJ3BsYWNlaG9sZGVyJzogJ0VudGVyIG1lc3NhZ2UgaGVyZSAocmVxdWlyZWQpJyxcbiAgICAgICAgJ3JlcXVpcmVkJzogdHJ1ZSxcbiAgICB9KTtcbiAgICBidG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9ICdGYWtlIHNlbmQnO1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKTtcblxuICAgIGNvbnN0IGZvcm1FbHMgPSBbbmFtZSwgZW1haWwsIG1lc3NhZ2UsIGJ0bl07XG4gICAgZm9ybUVscy5mb3JFYWNoKGVsID0+IGZvcm0uYXBwZW5kQ2hpbGQoZWwpKTtcblxuICAgIHJldHVybiBmb3JtO1xufVxuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsLCBhdHRyaWJ1dGVzKSB7XG4gICAgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiBlbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSkpO1xufSIsImV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUhvbWUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29udGVudC5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBzbG9nYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IGNhcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBob21lLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZScpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnQ1MxNzBtZyc7XG4gICAgc2xvZ2FuLmlubmVySFRNTCA9ICdUaGUgY29mZmVlIHlvdSBrbm93IGFuZCBsb3ZlPGJyPndpdGgganVzdCB0aGF0IGxpdHRsZSBiaXQgbW9yZSc7XG4gICAgY2FwdGlvbi50ZXh0Q29udGVudCA9ICdJdCBhbGwgYmVnaW5zIHdpdGggYSBiZWFuLCBhIGxvdmUsIGEgcGFzc2lvbi4nO1xuXG4gICAgaG9tZS5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICBob21lLmFwcGVuZENoaWxkKHNsb2dhbik7XG4gICAgaG9tZS5hcHBlbmRDaGlsZChjYXB0aW9uKTtcbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChob21lKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xufSIsImltcG9ydCBzdmcgZnJvbSAnLi9tZXRob2RzLnN2Zyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZU1lbnUoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29udGVudC5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudScpO1xuXG4gICAgY29uc3QgYmVhbnMgPSBjcmVhdGVCZWFuc0RpdigpO1xuICAgIGNvbnN0IG1ldGhvZCA9IGNyZWF0ZU1ldGhvZERpdigpO1xuICAgIGNvbnN0IGVzcHJlc3NvID0gY3JlYXRlRXNwcmVzc29EaXYoKTtcblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoYmVhbnMpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWV0aG9kKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKGVzcHJlc3NvKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUJlYW5zRGl2KCkge1xuICAgIGNvbnN0IGdyaWRDb250ZW50cyA9IHtcbiAgICAgICAgJ0d1YXRlbWFsYW4gTW9udGUgUm9zYSc6ICdBIHNsb3ctZ3Jvd2luZywgaGlnaC1hbHRpdHVkZSBiZWFuIHRoYXQgcHJvdmlkZXMgYSBmdWxsIGJvZHkgd2l0aCByaWNoLCBzbW9vdGggY2hvY29sYXRleSwgbnV0dHkgbm90ZXMuJyxcbiAgICAgICAgJ0V0aGlvcGlhbiBSb2NrbyBNb3VudGFpbic6ICdBIGxpZ2h0LW1lZGl1bSByb2FzdCB0aGF0IHNob3dzIG9mZiBhbiBlbm9ybW91cyBjb21wbGV4aXR5IG9mIGZydWl0eSBhbmQgZmxvcmFsIG5vdGVzLCB3aXRoIGEgc3VidGxlIGhpbnQgb2Ygd2luZS4nLFxuICAgICAgICAnTW9uc29vbiBNYWxhYmFyJzogJ0RhcmsgYW5kIGhlYXZ5IC0gdGhlc2UgYmVhbnMgYm9hc3QgYSBkZWVwLCBzbW9rZXksIHNwaWN5IGZsYXZvdXIgcHJvZmlsZS4nLFxuICAgICAgICAnQnJhemlsaWFuIE1vbnRlIENyaXN0byc6ICdUaGlzIGZ1bGwtYm9kaWVkIGJsZW5kIGdpdmVzIGEgc3VidGxlIHN3ZWV0bmVzcyBhbmQgZGVsaWNhdGUgYWNpZGl0eSB3aXRoIGEgdW5pcXVlIGFmdGVydGFzdGUgb2YgY29jb2EgYW5kIHZhbmlsbGEuJyxcbiAgICAgICAgJ09sZCBCcm93biBKYXZhJzogJ0ZvciB0aGUgYm9sZCEgU3Ryb25nIGFuZCBoZWF2eSB3aXRoIGxpdHRsZSBjb21wbGV4aXR5LCB0aGlzIGlzIGFsbCBhYm91dCB0aGUgcmljaCBpbnRlbnNpdHkgYW5kIGRlcHRoIG9mIGZsYXZvdXIuJyxcbiAgICAgICAgJ0NvbG9tYmlhbiBTdXByZW1vJzogJ0EgY2xhc3NpYyBtZWRpdW0tcm9hc3RlZCBhbGwtcm91bmRlci4gV2VsbC1iYWxhbmNlZCwgc21vb3RoIGFuZCB3aXRoIG5vdGVzIG9mIGNob2NvbGF0ZSBhbmQgY2FyYW1lbC4nLFxuICAgIH07XG5cbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsICdwaWNrLWJlYW4nKTtcblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnQ2hvb3NlIHlvdXIgYmVhbnMnO1xuICAgIGNvbnN0IGdyaWQgPSBjcmVhdGVHcmlkKGdyaWRDb250ZW50cyk7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKGdyaWQpO1xuXG4gICAgcmV0dXJuIGRpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWV0aG9kRGl2KCkge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21ldGhvZCcpO1xuXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgbWV0aG9kcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1ldGhvZHNBcnIgPSBbJ0Flcm9wcmVzcycsICdQb3VyLW92ZXInLCAnRnJlbmNoIHByZXNzJ107XG4gICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuXG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdDaG9vc2UgYSBjbGFzc2ljIGJyZXdpbmcgbWV0aG9kJztcbiAgICBtZXRob2RzQXJyLmZvckVhY2gobWV0aG9kID0+IHtcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcC50ZXh0Q29udGVudCA9IG1ldGhvZDtcbiAgICAgICAgbWV0aG9kcy5hcHBlbmRDaGlsZChwKTtcbiAgICB9KTtcbiAgICBwcmljZS50ZXh0Q29udGVudCA9ICdNdWcgKDIwMG1sKSAtIMKjMi45OSc7XG4gICAgXG4gICAgZGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIGRpdi5pbm5lckhUTUwgKz0gc3ZnO1xuICAgIGRpdi5hcHBlbmRDaGlsZChtZXRob2RzKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQocHJpY2UpO1xuXG4gICAgcmV0dXJuIGRpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRXNwcmVzc29EaXYoKSB7XG4gICAgY29uc3QgZ3JpZENvbnRlbnRzID0ge1xuICAgICAgICAnQW1lcmljYW5vJzogJ0hvdCB3YXRlciBwb3VyZWQgb3ZlciBhIHNob3Qgb2YgZXNwcmVzc28uJyxcbiAgICAgICAgJ0ZsYXQgV2hpdGUnOiAnRXNwcmVzc28sIHN0ZWFtZWQgbWlsayB3aXRoIGEgZGVsaWNhdGUgbGF5ZXIgb2YgZnJvdGh5IG1pbGsgdG8gdG9wLicsXG4gICAgICAgICdDYWZmw6ggTGF0dGUnOiAnQSBzaG90IG9mIGVzcHJlc3NvLCBzdGVhbWVkIG1pbGsgYW5kIGEgZmluZSBsYXllciBvZiBmb2FtZWQgbWlsayBvbiB0b3AsIHRob3VnaCBtb3JlIHRoYW4gYSBmbGF0IHdoaXRlLicsXG4gICAgICAgICdDYXBwdWNpbm8nOiAnUmVsYXRlZCB0byB0aGUgTGF0dGUgYnV0IHdpdGggZXF1YWwgcGFydHMgc3RlYW1lZCBtaWxrIGFuZCBmb2FtZWQgbWlsayAtIHNob3cgb2ZmIHlvdXIgZm9hbXN0YWNoZSEnLFxuICAgICAgICAnTW9jaGEnOiAnQSBzaG90IG9mIGVzcHJlc3NvIG1peGVkIHdpdGggY2hvY29sYXRlIHN5cnVwLCBzdGVhbWVkIG1pbGsgdGhlbiB0b3BwZWQgd2l0aCBmb2FtZWQgbWlsayBhbmQgY29jb2EgcG93ZGVyLicsXG4gICAgfTtcblxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VzcHJlc3NvJyk7XG5cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBwcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaGVhZGluZy50ZXh0Q29udGVudCA9ICdPciBjaG9vc2UgYW4gZXNwcmVzc28tYmFzZWQgZHJpbmsnO1xuICAgIHByaWNlLnRleHRDb250ZW50ID0gJ1JlZ3VsYXIgKDM0MG1sKSAtIMKjMy45OSAvIExhcmdlICg0NTVtbCkgLSDCozQuNzknO1xuICAgIGNvbnN0IGdyaWQgPSBjcmVhdGVHcmlkKGdyaWRDb250ZW50cywgdHJ1ZSk7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHByaWNlKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZ3JpZCk7XG5cbiAgICByZXR1cm4gZGl2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVHcmlkKGNvbnRlbnRzLCBlc3ByZXNzbyA9IGZhbHNlKSB7XG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdyaWQuY2xhc3NMaXN0LmFkZCgnZ3JpZCcpO1xuXG4gICAgZm9yIChjb25zdCBoZWFkaW5nIGluIGNvbnRlbnRzKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICAgICAgaDMudGV4dENvbnRlbnQgPSBoZWFkaW5nO1xuICAgICAgICBwLnRleHRDb250ZW50ID0gY29udGVudHNbaGVhZGluZ107XG5cbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGgzKTtcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHApO1xuICAgICAgICBncmlkLmFwcGVuZENoaWxkKGRpdik7XG4gICAgfVxuXG4gICAgaWYgKGVzcHJlc3NvKSB7XG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBwMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgcDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgICAgIHAxLmlubmVySFRNTCA9ICc8Yj5Fc3ByZXNzbzwvYj4gLSDCozIuMjknO1xuICAgICAgICBwMi5pbm5lckhUTUwgPSAnPGI+UmlzdHJldHRvPC9iPiAtIMKjMi4yOSc7XG4gICAgICAgIHAzLmlubmVySFRNTCA9ICc8Yj5NYWNjaGlhdG88L2I+IC0gwqMyLjQ5JztcblxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocDEpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocDIpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocDMpO1xuICAgICAgICBncmlkLmFwcGVuZENoaWxkKGRpdik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdyaWQ7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBnZW5lcmF0ZUhvbWUgfSBmcm9tIFwiLi9ob21lLmpzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZUNvbnRhY3QgfSBmcm9tIFwiLi9jb250YWN0LmpzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZU1lbnUgfSBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi9iZ2ltYWdlLmpwZyc7XG5cbmNvbnNvbGUubG9nKFwiVGhpcyBpcyB3b3JraW5nIVwiKTtcblxuY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ25hdiBidXR0b24nKTtcbnRhYnMuZm9yRWFjaCh0YWIgPT4gdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2VuZXJhdGVDb250ZW50KSk7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlQ29udGVudChlKSB7XG4gICAgc3dpdGNoIChlLnRhcmdldC52YWx1ZSkge1xuICAgICAgICBjYXNlICdob21lJzpcbiAgICAgICAgICAgIGdlbmVyYXRlSG9tZSgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21lbnUnOlxuICAgICAgICAgICAgZ2VuZXJhdGVNZW51KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY29udGFjdCc6XG4gICAgICAgICAgICBnZW5lcmF0ZUNvbnRhY3QoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuLy8gaW5pdGlhbGlzZVxuZ2VuZXJhdGVIb21lKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9