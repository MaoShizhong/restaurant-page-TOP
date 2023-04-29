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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJnQzs7QUFFekI7QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFEQUFHO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzlIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0F5QztBQUNNO0FBQ047QUFDcEI7QUFDRTs7QUFFdkI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHNEQUFZO0FBQ3hCO0FBQ0E7QUFDQSxZQUFZLHNEQUFZO0FBQ3hCO0FBQ0E7QUFDQSxZQUFZLDREQUFlO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNEQUFZLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3AvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3AvLi9zcmMvbWV0aG9kcy5zdmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3AvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3Avd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3Avd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS10b3Avd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLXRvcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UtdG9wLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2JnaW1hZ2UuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db3Jtb3JhbnQ6d2dodEAzMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgICAtLXNjcm9sbGFibGU6IGNhbGMoMTAwdmggLSAxMHJlbSAtIDZweCk7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBicmlnaHRuZXNzKDUwJSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdDb3Jtb3JhbnQnLCBzZXJpZjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxuXFxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgICAgIHdpZHRoOiAwO1xcbiAgICB9XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XFxuICAgIGJvcmRlci1ib3R0b206IDZweCBzb2xpZCByZ2IoMTMzLCAxMTYsIDcwKTtcXG4gICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTByZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG51bCB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIuNXJlbTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jY29udGVudD5kaXYge1xcbiAgICBtaW4taGVpZ2h0OiB2YXIoLS1zY3JvbGxhYmxlKTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMXMgZWFzZS1pbiAxO1xcblxcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgICAgICB3aWR0aDogMDtcXG4gICAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAgIDAlIHsgb3BhY2l0eTogMDsgfVxcbiAgICAxMDAlIHtvcGFjaXR5OiAxOyB9XFxufVxcblxcbiNob21lIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMnJlbTtcXG5cXG4gICAgJj4qIHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIH1cXG5cXG4gICAgJj5oMSB7XFxuICAgICAgICBmb250LXNpemU6IDVyZW07XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgIH1cXG5cXG4gICAgJj5oMyB7XFxuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAmPnAge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIH1cXG59XFxuXFxuI21lbnUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzg0KTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1zY3JvbGxhYmxlKTtcXG5cXG4gICAgJiBoMSB7XFxuICAgICAgICBmb250LXNpemU6IDIuNnJlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICBtYXJnaW46IDJyZW0gMDtcXG4gICAgfVxcblxcbiAgICAmPioge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgICY+I3BpY2stYmVhbiB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgICB9XFxuXFxuICAgICY+I3BpY2stYmVhbixcXG4gICAgI2VzcHJlc3NvIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgd2lkdGg6IDkwJTtcXG4gICAgfVxcblxcbiAgICAmPiNtZXRob2Q+ZGl2IHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAxMTRweDtcXG4gICAgfVxcblxcbiAgICAmPiNlc3ByZXNzbyB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xcbiAgICAgICAgJj5oMiB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDJyZW07XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmPi5ncmlkPmRpdjpsYXN0LWNoaWxkIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICB9XFxuICAgIH1cXG5cXG4gICAgJiAuZ3JpZCB7XFxuICAgICAgICB3aWR0aDogY2xhbXAoNDAwcHgsIDEwMCUsIDEzMDBweCk7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgZ3JpZC1hdXRvLXJvd3M6IDEwcmVtO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCAyMHJlbSk7XFxuICAgICAgICBnYXA6IDNyZW07XFxuXFxuICAgICAgICAmIGgzLFxcbiAgICAgICAgcCB7XFxuICAgICAgICAgICAgbWFyZ2luOiAwLjJyZW07XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuI2NvbnRhY3Qge1xcbiAgICAmPiNhZGRyZXNzIHsgICAgXFxuICAgICAgICBtYXJnaW46IDRyZW0gYXV0byAzcmVtO1xcblxcbiAgICAgICAgJj5wIHtcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJj5wOmZpcnN0LWNoaWxkLFxcbiAgICAgICAgJj5wOmxhc3QtY2hpbGQge1xcbiAgICAgICAgICAgIG1hcmdpbjogMC42cmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICY+Zm9ybSB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogMXJlbTtcXG5cXG4gICAgICAgICY+KiB7XFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XFxuXFxuICAgICAgICAgICAgJjpmb2N1cyB7XFxuICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgJj50ZXh0YXJlYSB7XFxuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtO1xcbiAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICY+YnV0dG9uIHtcXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgd2lkdGg6IDhyZW07XFxuXFxuICAgICY6aG92ZXIge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgfVxcbn1cXG5cXG46OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6ICM0YjRiNGI7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5pbnZpc2libGUge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLHlEQUFzQztJQUN0QyxzQkFBc0I7SUFDdEIsZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0IsU0FBUztJQUNULHFCQUFxQjs7SUFFckI7UUFDSSxRQUFRO0lBQ1o7QUFDSjs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQywwQ0FBMEM7SUFDMUMsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsOEJBQThCOztJQUU5QjtRQUNJLFFBQVE7SUFDWjtBQUNKOztBQUVBO0lBQ0ksS0FBSyxVQUFVLEVBQUU7SUFDakIsTUFBTSxVQUFVLEVBQUU7QUFDdEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsU0FBUzs7SUFFVDtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7UUFDZixTQUFTO0lBQ2I7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLHlCQUF5Qjs7SUFFekI7UUFDSSxpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTs7UUFFSSxpQkFBaUI7UUFDakIsVUFBVTtJQUNkOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsVUFBVTtJQUNkOztJQUVBO1FBQ0ksbUJBQW1CO1FBQ25CO1lBQ0ksa0JBQWtCO1lBQ2xCLGdCQUFnQjtRQUNwQjs7UUFFQTtZQUNJLGFBQWE7WUFDYixzQkFBc0I7WUFDdEIsdUJBQXVCO1FBQzNCO0lBQ0o7O0lBRUE7UUFDSSxpQ0FBaUM7UUFDakMsbUJBQW1CO1FBQ25CLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIscUJBQXFCO1FBQ3JCLCtDQUErQztRQUMvQyxTQUFTOztRQUVUOztZQUVJLGNBQWM7UUFDbEI7SUFDSjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7O1FBRXRCO1lBQ0ksU0FBUztZQUNULGlCQUFpQjtZQUNqQixrQkFBa0I7UUFDdEI7O1FBRUE7O1lBRUksY0FBYztRQUNsQjtJQUNKOztJQUVBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixTQUFTOztRQUVUO1lBQ0ksb0JBQW9CO1lBQ3BCLGlCQUFpQjtZQUNqQixvQkFBb0I7O1lBRXBCO2dCQUNJLGFBQWE7WUFDakI7UUFDSjs7UUFFQTtZQUNJLGVBQWU7WUFDZixZQUFZO1FBQ2hCOztRQUVBO1lBQ0ksb0JBQW9CO1lBQ3BCLGVBQWU7WUFDZixpQkFBaUI7WUFDakIsZ0JBQWdCO1FBQ3BCO0lBQ0o7QUFDSjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osY0FBYztJQUNkLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsV0FBVzs7SUFFWDtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7QUFDSjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29ybW9yYW50OndnaHRAMzAwOzQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgICAtLXNjcm9sbGFibGU6IGNhbGMoMTAwdmggLSAxMHJlbSAtIDZweCk7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2JnaW1hZ2UuanBnJyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYnJpZ2h0bmVzcyg1MCUpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ29ybW9yYW50Jywgc2VyaWY7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcblxcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgICAgICB3aWR0aDogMDtcXG4gICAgfVxcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xcbiAgICBib3JkZXItYm90dG9tOiA2cHggc29saWQgcmdiKDEzMywgMTE2LCA3MCk7XFxuICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxudWwge1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyLjVyZW07XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuI2NvbnRlbnQ+ZGl2IHtcXG4gICAgbWluLWhlaWdodDogdmFyKC0tc2Nyb2xsYWJsZSk7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFuaW1hdGlvbjogZmFkZUluIDFzIGVhc2UtaW4gMTtcXG5cXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICAgICAgd2lkdGg6IDA7XFxuICAgIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgICAwJSB7IG9wYWNpdHk6IDA7IH1cXG4gICAgMTAwJSB7b3BhY2l0eTogMTsgfVxcbn1cXG5cXG4jaG9tZSB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxuXFxuICAgICY+KiB7XFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICB9XFxuXFxuICAgICY+aDEge1xcbiAgICAgICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxuXFxuICAgICY+aDMge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjhyZW07XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgJj5wIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICB9XFxufVxcblxcbiNtZW51IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4NCk7XFxuICAgIGhlaWdodDogdmFyKC0tc2Nyb2xsYWJsZSk7XFxuXFxuICAgICYgaDEge1xcbiAgICAgICAgZm9udC1zaXplOiAyLjZyZW07XFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgbWFyZ2luOiAycmVtIDA7XFxuICAgIH1cXG5cXG4gICAgJj4qIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAmPiNwaWNrLWJlYW4ge1xcbiAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcXG4gICAgfVxcblxcbiAgICAmPiNwaWNrLWJlYW4sXFxuICAgICNlc3ByZXNzbyB7XFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgIHdpZHRoOiA5MCU7XFxuICAgIH1cXG5cXG4gICAgJj4jbWV0aG9kPmRpdiB7XFxuICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMTE0cHg7XFxuICAgIH1cXG5cXG4gICAgJj4jZXNwcmVzc28ge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcXG4gICAgICAgICY+aDIge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgICAgICAgICBtYXJnaW46IDAgMCAycmVtO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgJj4uZ3JpZD5kaXY6bGFzdC1jaGlsZCB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgICYgLmdyaWQge1xcbiAgICAgICAgd2lkdGg6IGNsYW1wKDQwMHB4LCAxMDAlLCAxMzAwcHgpO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGdyaWQtYXV0by1yb3dzOiAxMHJlbTtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgMjByZW0pO1xcbiAgICAgICAgZ2FwOiAzcmVtO1xcblxcbiAgICAgICAgJiBoMyxcXG4gICAgICAgIHAge1xcbiAgICAgICAgICAgIG1hcmdpbjogMC4ycmVtO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbiNjb250YWN0IHtcXG4gICAgJj4jYWRkcmVzcyB7ICAgIFxcbiAgICAgICAgbWFyZ2luOiA0cmVtIGF1dG8gM3JlbTtcXG5cXG4gICAgICAgICY+cCB7XFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICY+cDpmaXJzdC1jaGlsZCxcXG4gICAgICAgICY+cDpsYXN0LWNoaWxkIHtcXG4gICAgICAgICAgICBtYXJnaW46IDAuNnJlbTtcXG4gICAgICAgIH1cXG4gICAgfVxcblxcbiAgICAmPmZvcm0ge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBnYXA6IDFyZW07XFxuXFxuICAgICAgICAmPioge1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMC41cmVtO1xcblxcbiAgICAgICAgICAgICY6Zm9jdXMge1xcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICY+dGV4dGFyZWEge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgICAgICAgICByZXNpemU6IG5vbmU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAmPmJ1dHRvbiB7XFxuICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIHdpZHRoOiA4cmVtO1xcblxcbiAgICAmOmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIH1cXG59XFxuXFxuOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiAjNGI0YjRiO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uaW52aXNpYmxlIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDEwMTMuMDAwMDAwIDI4OS4wMDAwMDBcXFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XFxcInhNaWRZTWlkIG1lZXRcXFwiPjxnIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKDAuMDAwMDAwLDI4OS4wMDAwMDApIHNjYWxlKDAuMTAwMDAwLC0wLjEwMDAwMClcXFwiIGZpbGw9XFxcIiNGRkZGRkZcXFwiIHN0cm9rZT1cXFwibm9uZVxcXCI+PHBhdGggZD1cXFwiTTU3MyAyODcwIGMtNjEgLTM3IC04MSAtMTE2IC00MyAtMTc3IDIyIC0zNiA2NiAtNjMgMTA1IC02MyAyMiAwIDI1IC00IDI1IC0zMyAwIC0zMSAtMyAtMzMgLTUwIC00NCAtNjIgLTE1IC0xMDEgLTQyIC0xMzIgLTkxIC0yMyAtMzcgLTIzIC00MSAtMjYgLTM3OSBsLTMgLTM0MSAtMTcyIC00IGMtMTkyIC0zIC0yMTkgLTExIC0yNTYgLTcxIC01OCAtOTQgMCAtMjAzIDExNiAtMjIyIGw0MyAtNyAwIC02MTYgYzAgLTQwNCA0IC02MzAgMTEgLTY1NSAxMyAtNDkgNzMgLTExNSAxMjQgLTEzOCAzNyAtMTcgNzkgLTE5IDU3NSAtMTkgNjAzIDAgNTgwIC0yIDY1MiA3OCA0NiA1MSA1OCA5MyA1OCAyMDQgbDAgODYgMTQ4IDQgYzEyNCAzIDE1NCA3IDE5NCAyNSA2NiAzMCAxMjkgOTIgMTY0IDE2MCBsMjkgNTggMyAyMjAgYzMgMjA1IDIgMjI1IC0xOCAyNzcgLTI2IDcxIC05MSAxNDUgLTE2MiAxODMgLTUwIDI4IC02MCAzMCAtMjAzIDM1IGwtMTUwIDUgLTMgNDcgLTMgNDYgNDMgNyBjNjAgMTAgOTMgMjkgMTE3IDY4IDQ2IDc0IDE3IDE3MiAtNjIgMjA3IC0zNiAxNyAtNjYgMjAgLTIwNCAyMCBsLTE2MiAwIC0zIDM0MyBjLTMgMzM4IC0zIDM0MiAtMjYgMzc5IC0zMSA0OSAtNzAgNzYgLTEzMiA5MSAtNDcgMTEgLTUwIDEzIC01MCA0NCAwIDI5IDMgMzMgMjggMzMgMzcgMCA4OCAzMyAxMDcgNjkgMzEgNjEgMTEgMTM2IC00OCAxNzEgLTMwIDE5IC01MiAyMCAtMzE3IDIwIC0yNjUgMCAtMjg3IC0xIC0zMTcgLTIweiBtNTk3IC04MCBjMjQgLTI0IDI1IC0zOCAzIC02MiAtMTUgLTE3IC0zNyAtMTggLTI4NCAtMTggLTI2NSAwIC0yNjggMCAtMjgzIDIyIC0yMCAyOSAtMjAgMzQgNCA1OCAxOSAxOSAzMyAyMCAyODAgMjAgMjQ3IDAgMjYxIC0xIDI4MCAtMjB6IG0tMTQwIC0xOTUgbDAgLTM1IC0xNDAgMCAtMTQwIDAgMCAzNSAwIDM1IDE0MCAwIDE0MCAwIDAgLTM1eiBtMTgxIC0xNTQgbDI5IC0yOSAwIC0zMzYgMCAtMzM2IC0zNTAgMCAtMzUwIDAgMCAzMzYgMCAzMzYgMjkgMjkgMjkgMjkgMjkyIDAgMjkyIDAgMjkgLTI5eiBtNDY5IC04MTEgYzExIC0xMSAyMCAtMjkgMjAgLTQwIDAgLTExIC05IC0yOSAtMjAgLTQwIC0yMCAtMjAgLTMzIC0yMCAtNzkwIC0yMCAtNzU3IDAgLTc3MCAwIC03OTAgMjAgLTExIDExIC0yMCAyOSAtMjAgNDAgMCAxMSA5IDI5IDIwIDQwIDIwIDIwIDMzIDIwIDc5MCAyMCA3NTcgMCA3NzAgMCA3OTAgLTIweiBtLTEyMzAgLTIzMiBjMCAtMjQgMTEgLTY2IDI0IC05NCAyNSAtNTMgNTggLTgzIDExNSAtMTAyIDQ4IC0xNyA1NTAgLTE2IDYwNSAwIDc5IDI0IDEzNiAxMDggMTM2IDIwMiBsMCAzNiA5NSAwIDk1IDAgLTIgLTM0MiAtMyAtMzQzIC0xMDIgLTMgYy05MCAtMiAtMTA0IC01IC0xMTMgLTIyIC04IC0xNCAtOCAtMjYgMCAtNDAgOSAtMTcgMjMgLTIwIDExMyAtMjIgbDEwMiAtMyAwIC0yMzcgYzAgLTIyMyAtMSAtMjM4IC0yMSAtMjY0IC0xMSAtMTUgLTMzIC0zNyAtNDggLTQ4IC0yNyAtMjEgLTM4IC0yMSAtNTU2IC0yMSAtNTE4IDAgLTUyOSAwIC01NTYgMjEgLTE1IDExIC0zNyAzMyAtNDggNDggLTIwIDI2IC0yMSA0MSAtMjEgMjY0IGwwIDIzNyA0NjkgNSBjNDMyIDUgNDcwIDYgNDgwIDIzIDggMTIgOCAyMiAwIDM1IC0xMCAxNiAtNDggMTcgLTQ4MCAyMiBsLTQ2OSA1IC0zIDM0MyAtMiAzNDIgOTUgMCA5NSAwIDAgLTQyeiBtNzkwIC05IGMwIC00MyAtNSAtNTUgLTI5IC04MCBsLTI5IC0yOSAtMjkyIDAgLTI5MiAwIC0yOSAzMSBjLTI0IDI2IC0yOSA0MCAtMjkgODAgbDAgNDkgMzUwIDAgMzUwIDAgMCAtNTF6IG02NjAgLTE1MCBjNTUgLTI1IDEwNSAtNzEgMTMzIC0xMjQgMTkgLTM2IDIyIC01OSAyNSAtMjI3IDUgLTIzMiAtNSAtMjc2IC03NyAtMzQ4IC02NCAtNjQgLTExOCAtODAgLTI2OCAtODAgbC0xMTMgMCAwIDQ0IDAgNDQgMTIzIDQgYzExNCAzIDEyNyA1IDE2NCAzMCA3MiA0NyA4MyA4NiA4MyAyODQgbDAgMTcwIC0yOSA0NyBjLTQ2IDcxIC05MSA5MCAtMjI4IDk1IGwtMTEzIDQgMCAzOSAwIDM5IDEyOCAwIGMxMDYgMCAxMzQgLTQgMTcyIC0yMXogbS03MCAtMTY0IGM1MSAtMjYgNjAgLTU4IDYwIC0yMTUgMCAtMjEwIC0xNiAtMjMwIC0xOTAgLTIzMCBsLTEwMCAwIDAgMjMwIDAgMjMwIDEwMCAwIGM3MSAwIDExMCAtNSAxMzAgLTE1elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk04MTIgMjM3OCBjLTE2IC0xNiAtMTUgLTQzIDIgLTU3IDIzIC0xOSAxNDYgLTEwIDE2MCAxMiA4IDEyIDggMjIgMCAzNSAtMTQgMjIgLTE0MiAzMCAtMTYyIDEwelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk04MTYgMjIxNCBjLTQwIC0zOSAtNSAtNzQgNzQgLTc0IDYyIDAgOTAgMTUgOTAgNTAgMCAyNyAtMzAgNDAgLTk0IDQwIC0zNiAwIC02MCAtNSAtNzAgLTE2elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk04MTYgMjA1NCBjLTM5IC0zOSAtNSAtNzQgNzAgLTc0IDY0IDAgOTQgMTMgOTQgNDAgMCAzNSAtMjggNTAgLTkwIDUwIC00MCAwIC02NCAtNSAtNzQgLTE2elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk04MTIgMTg4OCBjLTE2IC0xNiAtMTUgLTQzIDIgLTU3IDIzIC0xOSAxNDYgLTEwIDE2MCAxMiA4IDEyIDggMjIgMCAzNSAtMTQgMjIgLTE0MiAzMCAtMTYyIDEwelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk04NDUgMTEyNSBjLTQzIC0yMSAtOTggLTExNyAtOTggLTE2OSAwIC04NSA1OSAtMTQ2IDE0MyAtMTQ2IDYyIDAgMTA2IDI5IDEzMSA4NiAyNSA1NSAyMCA4OCAtMjcgMTY2IC00NSA3NCAtODkgOTIgLTE0OSA2M3ogbTgzIC0xMTUgYzI2IC00NiAyOCAtNzcgNSAtMTAyIC0zMiAtMzYgLTEwMyAtMTAgLTEwMyAzOCAwIDMzIDQxIDEwNCA2MCAxMDQgOCAwIDI1IC0xOCAzOCAtNDB6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTg3MDUgMjg1NyBjLTc5IC0zNiAtMTI1IC0xMzMgLTEwNCAtMjIwIDEzIC01NSA3MCAtMTIyIDExNCAtMTMzIDI0IC02IDI1IC05IDI1IC04MCBsMCAtNzQgLTE3OSAwIGMtMjAyIDAgLTI2MCAtOCAtMzQ4IC01MCAtMTQyIC02NiAtMjQzIC0yMzEgLTI0MyAtMzk2IGwwIC0zNCAtODIgMCBjLTExMSAwIC0xNDAgLTE1IC0yMDIgLTEwNyAtMzcgLTU0IC00NyAtNzcgLTQyIC05NSAzIC0xMyA4NCAtOTEgMTkxIC0xODMgbDE4NCAtMTYwIDEgLTU2MCBjMSAtNDQxIDQgLTU2OCAxNCAtNTk4IDIyIC02MCA2MiAtMTA0IDEyMCAtMTMxIGw1NSAtMjYgNTc2IDAgNTc2IDAgNTQgMjUgYzEwMCA0OCAxMzUgMTI0IDEzNSAyOTcgbDAgMTA4IDE1MCAwIGMxMjkgMCAxNTcgMyAyMDcgMjIgODAgMjkgMTYyIDExMiAxOTIgMTkyIDIxIDU4IDIyIDY4IDE5IDQ0NSBsLTMgMzg2IC0zNiA2NSBjLTIzIDQzIC01MiA3OCAtODUgMTAyIC03OCA2MCAtMTE5IDcwIC0yOTEgNzYgbC0xNTMgNCAwIDI1IGMwIDE0IDkgMzYgMjAgNTAgMjggMzUgMzQgODMgMjIgMTY1IC0yOCAxODYgLTE2OCAzMzMgLTM1MSAzNjggLTMwIDUgLTEzNCAxMCAtMjMyIDEwIGwtMTc5IDAgMCA3MyAwIDcyIDQyIDIwIGMxMjEgNTkgMTM1IDIzMiAyNSAzMTkgLTMxIDI1IC00OCAzMSAtMTAwIDMzIC0zOCAyIC03NCAtMiAtOTIgLTEweiBtMTE0IC04OCBjMzUgLTEyIDYxIC01MyA2MSAtOTQgMCAtNDIgLTUwIC04NSAtOTggLTg1IC05NSAwIC0xMjUgMTMwIC00MSAxNzYgMzAgMTYgMzggMTcgNzggM3ogbTQ5MiAtNTUyIGMxMDkgLTUzIDE3OCAtMTU2IDE4NyAtMjc5IGw1IC02OCAtNzE3IDAgLTcxNiAwIDAgNDggYzAgMTM5IDkyIDI2OCAyMjIgMzEzIDQ5IDE3IDg4IDE5IDUwOCAxNiBsNDU1IC0yIDU2IC0yOHogbS0xMjkxIC02MDIgYzAgLTg1IC0zIC0xNTUgLTYgLTE1NSAtNSAwIC0xNzEgMTQyIC0yNTIgMjE1IC0xMiAxMCAtOSAyMCAxMyA1NCBsMjggNDEgMTA4IDAgMTA5IDAgMCAtMTU1eiBtNzIwIC00NCBsMCAtMTk5IC01MiAtMTMgYy03MCAtMTcgLTI2NiAtMTQgLTM1OSA1IC00MSA5IC0xMDMgMzAgLTEzOSA0OCBsLTY1IDMzIC0zIDE2MyAtMiAxNjIgMzEwIDAgMzEwIDAgMCAtMTk5eiBtNzEwIDM4IGMwIC0xNDggLTEgLTE2MCAtMTcgLTE1NSAtODEgMjIgLTI1NSAzNSAtMzQ5IDI2IC02OCAtNyAtMTU2IC0zMSAtMjM2IC02NSAtMTcgLTcgLTE4IDUgLTE4IDE3NCBsMCAxODEgMzEwIDAgMzEwIDAgMCAtMTYxeiBtNDEyIDkgYzUzIC0xNiAxMjEgLTc4IDE0NCAtMTMwIDE3IC0zOSAxOSAtNzggMjIgLTM3NiAyIC0yMjIgLTEgLTM1MSAtOCAtMzg4IC0xNSAtNzAgLTYxIC0xMzAgLTEyNSAtMTYzIC00NSAtMjQgLTYyIC0yNiAtMTk3IC0yOSBsLTE0OCAtNCAwIDUwIDAgNTEgMTQ5IDMgYzE0MyAzIDE1MSA0IDE3NiAyOCA1NSA1MSA1NSA1MiA1NSA0MjIgMCAzMTYgLTEgMzQ2IC0xOSAzNzggLTMzIDYyIC02OCA3NSAtMjIzIDc4IGwtMTM4IDQgMCA0NCAwIDQ0IDEzNiAwIGM3NiAwIDE1NCAtNSAxNzYgLTEyeiBtLTM1IC0yMDggYzEwIC0xOSAxMyAtMTAwIDExIC0zNDMgLTMgLTMwMiAtNCAtMzE5IC0yMiAtMzMzIC0xNSAtMTAgLTUyIC0xNCAtMTQzIC0xNCBsLTEyMyAwIDAgMzYwIDAgMzYxIDEzMiAtMyBjMTMwIC0zIDEzMyAtMyAxNDUgLTI4eiBtLTQ0OSAtNDAgbDcyIC0xMyAwIC0zMzkgMCAtMzM5IC00MiAyOSBjLTgxIDU2IC0xMTcgNjIgLTM1OCA2MiBsLTIyMCAwIDAgMjY1IDAgMjY1IDM4IDE4IGMzOSAyMCAxNDkgNTcgMTkyIDY2IDQxIDggMjQwIC0xIDMxOCAtMTR6IG0tMTE1MyAtNzUgYzM5IC0xMyAxMTAgLTI5IDE1OSAtMzYgODcgLTExIDI3MCAtOCAzMjkgNyBsMjcgNiAwIC0yNTEgMCAtMjUxIC0yMjAgMCBjLTI0MSAwIC0yNzcgLTYgLTM1NyAtNjIgbC00MyAtMjkgMCAzMjcgYzAgMzA3IDEgMzI2IDE4IDMxOSA5IC0zIDQ5IC0xNyA4NyAtMzB6IG0xMDkwIC02NDIgYzIyIC0xMiA1NCAtMzYgNzIgLTU1IDM0IC0zNSA2NyAtMTAxIDU2IC0xMTIgLTggLTggLTEzMDggLTggLTEzMTYgMCAtMTEgMTEgMjIgNzcgNTYgMTEyIDM3IDM5IDc4IDYzIDEyNyA3MyAxOSA0IDI0NCA3IDUwMCA2IDQ1NiAtMiA0NjYgLTIgNTA1IC0yNHogbTEzNSAtMzU1IGMwIC0xMDMgLTE1IC0xNDEgLTY3IC0xNzUgLTI1IC0xNyAtNjcgLTE4IC01NzggLTIxIC0zNTkgLTIgLTU2MiAwIC01ODUgNyAtMjAgNiAtNDkgMjQgLTY1IDQxIC0yOSAzMCAtMzAgMzYgLTMzIDEzNiBsLTQgMTA0IDY2NiAwIDY2NiAwIDAgLTkyelxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk04MzQzIDIxNTAgYy04MiAtMTkgLTE0NiAtOTQgLTEyNyAtMTQ5IDcgLTIwIDE3IC0yNyA0MiAtMjkgMjkgLTMgMzQgMSA0NyAzMiAxNyA0MCA0MSA1NiA4NCA1NiA1NiAwIDgxIDU1IDM5IDg0IC0yNCAxNyAtMzYgMTggLTg1IDZ6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTgyNzIgMjc4IGMtMjggLTI4IC03IC03OCAzMyAtNzggMjcgMCA0NSAxOCA0NSA0NSAwIDI3IC0xOCA0NSAtNDUgNDUgLTEyIDAgLTI2IC01IC0zMyAtMTJ6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTg1MTIgMjc4IGMtMjggLTI4IC03IC03OCAzMyAtNzggMjcgMCA0NSAxOCA0NSA0NSAwIDI3IC0xOCA0NSAtNDUgNDUgLTEyIDAgLTI2IC01IC0zMyAtMTJ6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTg3NTIgMjc4IGMtMjggLTI4IC03IC03OCAzMyAtNzggMjcgMCA0NSAxOCA0NSA0NSAwIDI3IC0xOCA0NSAtNDUgNDUgLTEyIDAgLTI2IC01IC0zMyAtMTJ6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTg5OTIgMjc4IGMtMjggLTI4IC03IC03OCAzMyAtNzggMjcgMCA0NSAxOCA0NSA0NSAwIDI3IC0xOCA0NSAtNDUgNDUgLTEyIDAgLTI2IC01IC0zMyAtMTJ6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTkyMzQgMjgzIGMtMzQgLTI1IC0xMiAtODMgMzIgLTgzIDMwIDAgNTQgNDIgMzcgNjggLTExIDE4IC01MSAyNyAtNjkgMTV6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTQxMzQgMjg1MSBjLTExIC01IC0zMyAtMjMgLTQ3IC00MSAtNDggLTU2IC00MCAtOTQgNjMgLTMwMCBsOTAgLTE4MCAtNzYgMCBjLTg2IDAgLTExNCAtMTEgLTExNCAtNDQgMCAtMTMgNTQgLTEwMSAxMzAgLTIwOSA3MiAtMTAyIDEzMCAtMTg4IDEzMCAtMTkxIDAgLTMgLTM0IC02IC03NSAtNiAtNDMgMCAtOTAgLTYgLTExMCAtMTQgLTY1IC0yNyAtOTUgLTExOSAtNjEgLTE4NSAxOSAtMzUgMzcgLTUwIDgxIC02NSBsMzUgLTEyIC02NiAtNTMgYy01NSAtNDQgLTY1IC01NyAtNjIgLTc5IDIgLTIyIDE2IC0zNCA4MCAtNjcgNDIgLTIyIDc5IC00MyA4MiAtNDYgNSAtNSAtMjIgLTE4OCAtMTIwIC04MjQgLTIyIC0xNDAgLTM0IC0yNDggLTMxIC0yNzUgOCAtNjIgMzkgLTEzMSA4MiAtMTc4IDY4IC03NiAzMSAtNzIgNzEzIC03MiBsNjA5IDAgMzggMjYgYzQ4IDMyIDY5IDU3IDEwMiAxMTkgMzcgNzIgNDAgMTQxIDEwIDMzMCAtMTQgODggLTQyIDI2NCAtNjEgMzkwIC0yMCAxMjcgLTM4IDI0MiAtNDEgMjU4IGwtNCAyNyA2OCAwIGM0MyAwIDcyIC01IDc4IC0xMiA2IC03IDIyIC0xMDEgMzcgLTIwOCAxNSAtMTA3IDM0IC0yMTUgNDMgLTIzOSAzMyAtOTMgMTM3IC0xNjYgMjI2IC0xNTkgNDAgMyA0MiA0IDQ1IDM5IDIgMjAgLTEzIDE4MiAtMzMgMzYwIC0zOSAzNTQgLTQ3IDM4NSAtMTExIDQzOCAtNTIgNDIgLTk2IDUxIC0yNTIgNTEgLTE1OCAwIC0xNDUgLTcgLTE1NyA4NSAtMyAyOCAtOSA2MCAtMTIgNzMgLTUgMjEgLTIgMjIgNTMgMjIgOTggMCAxNTcgNTEgMTU3IDEzNSAwIDg5IC01MCAxMjggLTE3NSAxMzUgbC04OCA1IDEzNSAxOTQgYzc0IDEwNiAxMzUgMTk3IDEzNSAyMDIgMCA1IC05IDE4IC0yMCAyOSAtMTYgMTYgLTMzIDIwIC04MCAyMCBsLTYwIDAgNTUgMTAzIGMzMCA1NyA1NSAxMTEgNTUgMTE5IDAgMjMgLTExMiAxNTUgLTE3MyAyMDUgLTE0NCAxMTggLTM1MiAxMzYgLTUzMiA0NiAtNjYgLTMzIC04NSAtNTEgLTg1IC03OSAwIC00NyAzMSAtNDcgMTI3IC0xIDg2IDQxIDkwIDQyIDE5MyA0MiA5NiAwIDExMCAtMyAxNjUgLTI5IDYyIC0zMCAxODkgLTE0OSAxODIgLTE2OSAtMiAtNiAtMjggLTIwIC01OCAtMzEgLTQ0IC0xNyAtNzggLTIwIC0xODkgLTIwIC0xNjQgMCAtMTU2IC0zIC01MzAgMTY5IC0xNTEgNzAgLTMwMCAxMzYgLTMzMCAxNDcgLTYxIDIyIC0yMTIgMzQgLTI0NiAxOXogbTE5NCAtOTYgYzI4IC05IDE3OSAtNzQgMzM0IC0xNDYgMzY0IC0xNjggNDAwIC0xODAgNTUzIC0xODYgODkgLTQgMTM1IC0xIDE4MCAxMSAzMiA4IDYwIDE0IDYyIDEyIDIgLTEgLTExIC0yOCAtMjggLTU5IGwtMzEgLTU3IC01MjkgMCAtNTI5IDAgLTk1IDE5MCBjLTUyIDEwNCAtOTUgMTk4IC05NSAyMDggMCAxMCA1IDIzIDEyIDMwIDE3IDE3IDEwNCAxNSAxNjYgLTN6IG0xMTkyIC01MjEgYzAgLTQgLTU1IC04NSAtMTIyIC0xODAgbC0xMjIgLTE3NCAtNDI1IDAgLTQyNiAwIC0xMDUgMTUxIGMtNTggODQgLTExMyAxNjUgLTEyMyAxODAgbC0xOSAyOSA2NzEgMCBjMzY5IDAgNjcxIC0zIDY3MSAtNnogbTM0IC00NjAgYzkgLTggMTYgLTIyIDE2IC0yOSAwIC03IC03IC0yMSAtMTYgLTI5IC0xNCAtMTQgLTkxIC0xNiAtNzAzIC0xNiAtNTIxIDAgLTY5MCAzIC02OTkgMTIgLTcgNyAtMTIgMjEgLTEyIDMzIDAgMTIgNSAyNiAxMiAzMyA5IDkgMTc4IDEyIDY5OSAxMiA2MTIgMCA2ODkgLTIgNzAzIC0xNnogbS05MDkgLTI1NCBsNDUgLTkwIC0yMDUgMCBjLTIwMSAwIC0yMDcgMSAtMjU2IDI2IC00OCAyNCAtNTAgMjYgLTM0IDQ0IDI0IDI3IDEyNSA3OCAxODYgOTQgMzAgOCA5MSAxNSAxMzYgMTUgbDgzIDEgNDUgLTkweiBtMzY1IDg0IGMwIC00IC0yMCAtNDUgLTQ2IC05MCBsLTQ1IC04NCAtNjQgMCAtNjUgMCAtNDUgOTAgLTQ1IDkwIDE1NSAwIGM4NSAwIDE1NSAtMyAxNTUgLTZ6IG0zNDkgLTYxIGM3IC0zOCAxNCAtNzggMTcgLTkwIGw0IC0yMyAtMTc5IDAgLTE3OSAwIDQ2IDkwIDQ3IDkwIDExNiAwIDExNyAwIDExIC02N3ogbTM1IC0yMTkgYzMgLTkgNiAtMjkgNiAtNDUgbDAgLTI5IC01NTAgMCAtNTUwIDAgMCAyOSBjMCA2NiAtNDIgNjEgNTUwIDYxIDQ4MSAwIDUzOCAtMiA1NDQgLTE2eiBtNDE1IC0xOCBjMTcgLTE2IDMzIC0zNyAzNiAtNDcgOSAtMjcgNzQgLTYxMyA2OSAtNjE4IC0yIC0zIC0xNiA0IC0zMSAxNSAtNTkgNDQgLTY1IDYyIC05OSAyOTQgLTQzIDI4NyAtNDYgMjkxIC0xOTkgMzAwIGwtOTAgNSAtNiA0MyAtNiA0MyAxNDggLTMgMTQ4IC0zIDMwIC0yOXogbS0zODQgLTE4MyBjNCAtMjEgMTAgLTU4IDE1IC04MyA1IC0yNCA2IC00OCA0IC01MiAtMyAtNCAtMjcwIC04IC01OTUgLTggbC01ODkgMCAwIDI3IGMwIDE0IDUgNTUgMTEgOTAgbDExIDYzIDU2OSAwIDU2OCAwIDYgLTM3eiBtMzUgLTI0NSBjMTMgLTMxIDkwIC01MzggOTAgLTU5MiAwIC01NyAtNDUgLTE0MyAtODkgLTE3MyBsLTM0IC0yMyAtNTY5IDAgYy02NDMgMCAtNjE0IC0zIC02NjcgNzcgLTQ4IDcxIC00OCAxMDEgLTEgNDA5IDI0IDE1NCA0NyAyODkgNTEgMzAyIGw5IDIyIDYwMCAwIDYwMCAwIDEwIC0yMnpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNNDcyNyA3OTQgYy0xMiAtMTIgLTggLTUxIDcgLTYzIDkgLTggNTIgLTExIDEyNyAtOSBsMTE0IDMgMCAzNSAwIDM1IC0xMjEgMyBjLTY2IDEgLTEyMyAtMSAtMTI3IC00elxcXCI+PC9wYXRoPjxwYXRoIGQ9XFxcIk00NzM4IDUyOSBjLTIxIC0xMiAtMjQgLTUyIC00IC02OCA5IC04IDUyIC0xMSAxMjcgLTkgbDExNCAzIDMgMzAgYzYgNDUgLTE3IDU1IC0xMjcgNTUgLTUzIDAgLTEwNCAtNSAtMTEzIC0xMXpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNNDczMiAyNTggYy03IC03IC0xMiAtMjEgLTEyIC0zMyAwIC0zOSAxOSAtNDUgMTMwIC00NSAxMTEgMCAxMzAgNiAxMzAgNDUgMCAxMiAtNSAyNiAtMTIgMzMgLTE2IDE2IC0yMjAgMTYgLTIzNiAwelxcXCI+PC9wYXRoPjwvZz48L3N2Zz5cIiIsImV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUNvbnRhY3QoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29udGVudC5yZXBsYWNlQ2hpbGRyZW4oKTtcblxuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdCcpO1xuXG4gICAgY29uc3QgYWRkcmVzcyA9IGNyZWF0ZUFkZHJlc3NEaXYoKTtcbiAgICBjb25zdCBmb3JtID0gY3JlYXRlRm9ybSgpO1xuXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChhZGRyZXNzKTtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWN0KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQWRkcmVzc0RpdigpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsICdhZGRyZXNzJyk7XG5cbiAgICBjb25zdCBhZGRyZXNzTGluZXMgPSBbXG4gICAgICAgICc8Yj5GaW5kIHVzIGF0OjwvYj4nLFxuICAgICAgICAnNjQgWm9vIExhbmUnLFxuICAgICAgICAnWm9vY2VzdGVyJyxcbiAgICAgICAgJ0FuaW1hbHNoaXJlJyxcbiAgICAgICAgJ0NIMzMgN0FIJyxcbiAgICAgICAgJ1RlbDogMDI4NjQgNjQ2NDY0JyxcbiAgICAgICAgJzxiPk9wZW46PC9iPjxicj5Nb24tU3VuIC8gMDc6MDAtMTk6MzAnLFxuICAgIF07XG5cbiAgICBhZGRyZXNzTGluZXMuZm9yRWFjaChsaW5lID0+IHtcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcC5pbm5lckhUTUwgPSBsaW5lO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocCk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGl2O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb3JtKCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgc2V0QXR0cmlidXRlcyhmb3JtLCB7J2FjdGlvbic6ICcjJywgJ21ldGhvZCc6ICdwb3N0J30pO1xuXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgc2V0QXR0cmlidXRlcyhuYW1lLCB7XG4gICAgICAgICdpZCc6ICduYW1lJyxcbiAgICAgICAgJ25hbWUnOiAnbmFtZScsXG4gICAgICAgICd0eXBlJzogJ3RleHQnLFxuICAgICAgICAnYXV0b2NvbXBsZXRlJzogJ29mZicsXG4gICAgICAgICdwbGFjZWhvbGRlcic6ICdOYW1lIChyZXF1aXJlZCknLFxuICAgICAgICAnYXV0b2ZvY3VzJzogdHJ1ZSxcbiAgICAgICAgJ3JlcXVpcmVkJzogdHJ1ZSxcbiAgICB9KTtcbiAgICBzZXRBdHRyaWJ1dGVzKGVtYWlsLCB7XG4gICAgICAgICdpZCc6ICdlbWFpbCcsXG4gICAgICAgICduYW1lJzogJ2VtYWlsJyxcbiAgICAgICAgJ3R5cGUnOiAnZW1haWwnLFxuICAgICAgICAnYXV0b2NvbXBsZXRlJzogJ29mZicsXG4gICAgICAgICdwbGFjZWhvbGRlcic6ICdFbWFpbCAocmVxdWlyZWQpJyxcbiAgICAgICAgJ3JlcXVpcmVkJzogdHJ1ZSxcbiAgICB9KTtcbiAgICBzZXRBdHRyaWJ1dGVzKG1lc3NhZ2UsIHtcbiAgICAgICAgJ2lkJzogJ21lc3NhZ2UnLFxuICAgICAgICAnbmFtZSc6ICdtZXNzYWdlJyxcbiAgICAgICAgJ3Jvd3MnOiAnMTAnLFxuICAgICAgICAnY29scyc6ICc2MCcsXG4gICAgICAgICdwbGFjZWhvbGRlcic6ICdFbnRlciBtZXNzYWdlIGhlcmUgKHJlcXVpcmVkKScsXG4gICAgICAgICdyZXF1aXJlZCc6IHRydWUsXG4gICAgfSk7XG4gICAgYnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICBidG4udGV4dENvbnRlbnQgPSAnRmFrZSBzZW5kJztcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IGUucHJldmVudERlZmF1bHQoKSk7XG5cbiAgICBjb25zdCBmb3JtRWxzID0gW25hbWUsIGVtYWlsLCBtZXNzYWdlLCBidG5dO1xuICAgIGZvcm1FbHMuZm9yRWFjaChlbCA9PiBmb3JtLmFwcGVuZENoaWxkKGVsKSk7XG5cbiAgICByZXR1cm4gZm9ybTtcbn1cblxuZnVuY3Rpb24gc2V0QXR0cmlidXRlcyhlbCwgYXR0cmlidXRlcykge1xuICAgIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4gZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpKTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVIb21lKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnRlbnQucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3Qgc2xvZ2FuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBjYXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgaG9tZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUnKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ0NTMTcwbWcnO1xuICAgIHNsb2dhbi5pbm5lckhUTUwgPSAnVGhlIGNvZmZlZSB5b3Uga25vdyBhbmQgbG92ZTxicj53aXRoIGp1c3QgdGhhdCBsaXR0bGUgYml0IG1vcmUnO1xuICAgIGNhcHRpb24udGV4dENvbnRlbnQgPSAnSXQgYWxsIGJlZ2lucyB3aXRoIGEgYmVhbiwgYSBsb3ZlLCBhIHBhc3Npb24uJztcblxuICAgIGhvbWUuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgaG9tZS5hcHBlbmRDaGlsZChzbG9nYW4pO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQoY2FwdGlvbik7XG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoaG9tZSk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbn0iLCJpbXBvcnQgc3ZnIGZyb20gJy4vbWV0aG9kcy5zdmcnO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVNZW51KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnRlbnQucmVwbGFjZUNoaWxkcmVuKCk7XG5cbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUnKTtcblxuICAgIGNvbnN0IGJlYW5zID0gY3JlYXRlQmVhbnNEaXYoKTtcbiAgICBjb25zdCBtZXRob2QgPSBjcmVhdGVNZXRob2REaXYoKTtcbiAgICBjb25zdCBlc3ByZXNzbyA9IGNyZWF0ZUVzcHJlc3NvRGl2KCk7XG5cbiAgICBtZW51LmFwcGVuZENoaWxkKGJlYW5zKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKG1ldGhvZCk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChlc3ByZXNzbyk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnUpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCZWFuc0RpdigpIHtcbiAgICBjb25zdCBncmlkQ29udGVudHMgPSB7XG4gICAgICAgICdHdWF0ZW1hbGFuIE1vbnRlIFJvc2EnOiAnQSBzbG93LWdyb3dpbmcsIGhpZ2gtYWx0aXR1ZGUgYmVhbiB0aGF0IHByb3ZpZGVzIGEgZnVsbCBib2R5IHdpdGggcmljaCwgc21vb3RoIGNob2NvbGF0ZXksIG51dHR5IG5vdGVzLicsXG4gICAgICAgICdFdGhpb3BpYW4gUm9ja28gTW91bnRhaW4nOiAnQSBsaWdodC1tZWRpdW0gcm9hc3QgdGhhdCBzaG93cyBvZmYgYW4gZW5vcm1vdXMgY29tcGxleGl0eSBvZiBmcnVpdHkgYW5kIGZsb3JhbCBub3Rlcywgd2l0aCBhIHN1YnRsZSBoaW50IG9mIHdpbmUuJyxcbiAgICAgICAgJ01vbnNvb24gTWFsYWJhcic6ICdEYXJrIGFuZCBoZWF2eSAtIHRoZXNlIGJlYW5zIGJvYXN0IGEgZGVlcCwgc21va2V5LCBzcGljeSBmbGF2b3VyIHByb2ZpbGUuJyxcbiAgICAgICAgJ0JyYXppbGlhbiBNb250ZSBDcmlzdG8nOiAnVGhpcyBmdWxsLWJvZGllZCBibGVuZCBnaXZlcyBhIHN1YnRsZSBzd2VldG5lc3MgYW5kIGRlbGljYXRlIGFjaWRpdHkgd2l0aCBhIHVuaXF1ZSBhZnRlcnRhc3RlIG9mIGNvY29hIGFuZCB2YW5pbGxhLicsXG4gICAgICAgICdPbGQgQnJvd24gSmF2YSc6ICdGb3IgdGhlIGJvbGQhIFN0cm9uZyBhbmQgaGVhdnkgd2l0aCBsaXR0bGUgY29tcGxleGl0eSwgdGhpcyBpcyBhbGwgYWJvdXQgdGhlIHJpY2ggaW50ZW5zaXR5IGFuZCBkZXB0aCBvZiBmbGF2b3VyLicsXG4gICAgICAgICdDb2xvbWJpYW4gU3VwcmVtbyc6ICdBIGNsYXNzaWMgbWVkaXVtLXJvYXN0ZWQgYWxsLXJvdW5kZXIuIFdlbGwtYmFsYW5jZWQsIHNtb290aCBhbmQgd2l0aCBub3RlcyBvZiBjaG9jb2xhdGUgYW5kIGNhcmFtZWwuJyxcbiAgICB9O1xuXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAncGljay1iZWFuJyk7XG5cbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoZWFkaW5nLnRleHRDb250ZW50ID0gJ0Nob29zZSB5b3VyIGJlYW5zJztcbiAgICBjb25zdCBncmlkID0gY3JlYXRlR3JpZChncmlkQ29udGVudHMpO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChncmlkKTtcblxuICAgIHJldHVybiBkaXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1ldGhvZERpdigpIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsICdtZXRob2QnKTtcblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IG1ldGhvZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBtZXRob2RzQXJyID0gWydBZXJvcHJlc3MnLCAnUG91ci1vdmVyJywgJ0ZyZW5jaCBwcmVzcyddO1xuICAgIGNvbnN0IHByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcblxuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnQ2hvb3NlIGEgY2xhc3NpYyBicmV3aW5nIG1ldGhvZCc7XG4gICAgbWV0aG9kc0Fyci5mb3JFYWNoKG1ldGhvZCA9PiB7XG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHAudGV4dENvbnRlbnQgPSBtZXRob2Q7XG4gICAgICAgIG1ldGhvZHMuYXBwZW5kQ2hpbGQocCk7XG4gICAgfSk7XG4gICAgcHJpY2UudGV4dENvbnRlbnQgPSAnTXVnICgyMDBtbCkgLSDCozIuOTknO1xuICAgIFxuICAgIGRpdi5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICBkaXYuaW5uZXJIVE1MICs9IHN2ZztcbiAgICBkaXYuYXBwZW5kQ2hpbGQobWV0aG9kcyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHByaWNlKTtcblxuICAgIHJldHVybiBkaXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUVzcHJlc3NvRGl2KCkge1xuICAgIGNvbnN0IGdyaWRDb250ZW50cyA9IHtcbiAgICAgICAgJ0FtZXJpY2Fubyc6ICdIb3Qgd2F0ZXIgcG91cmVkIG92ZXIgYSBzaG90IG9mIGVzcHJlc3NvLicsXG4gICAgICAgICdGbGF0IFdoaXRlJzogJ0VzcHJlc3NvLCBzdGVhbWVkIG1pbGsgd2l0aCBhIGRlbGljYXRlIGxheWVyIG9mIGZyb3RoeSBtaWxrIHRvIHRvcC4nLFxuICAgICAgICAnQ2FmZsOoIExhdHRlJzogJ0Egc2hvdCBvZiBlc3ByZXNzbywgc3RlYW1lZCBtaWxrIGFuZCBhIGZpbmUgbGF5ZXIgb2YgZm9hbWVkIG1pbGsgb24gdG9wLCB0aG91Z2ggbW9yZSB0aGFuIGEgZmxhdCB3aGl0ZS4nLFxuICAgICAgICAnQ2FwcHVjaW5vJzogJ1JlbGF0ZWQgdG8gdGhlIExhdHRlIGJ1dCB3aXRoIGVxdWFsIHBhcnRzIHN0ZWFtZWQgbWlsayBhbmQgZm9hbWVkIG1pbGsgLSBzaG93IG9mZiB5b3VyIGZvYW1zdGFjaGUhJyxcbiAgICAgICAgJ01vY2hhJzogJ0Egc2hvdCBvZiBlc3ByZXNzbyBtaXhlZCB3aXRoIGNob2NvbGF0ZSBzeXJ1cCwgc3RlYW1lZCBtaWxrIHRoZW4gdG9wcGVkIHdpdGggZm9hbWVkIG1pbGsgYW5kIGNvY29hIHBvd2Rlci4nLFxuICAgIH07XG5cbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsICdlc3ByZXNzbycpO1xuXG4gICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnT3IgY2hvb3NlIGFuIGVzcHJlc3NvLWJhc2VkIGRyaW5rJztcbiAgICBwcmljZS50ZXh0Q29udGVudCA9ICdSZWd1bGFyICgzNDBtbCkgLSDCozMuOTkgLyBMYXJnZSAoNDU1bWwpIC0gwqM0Ljc5JztcbiAgICBjb25zdCBncmlkID0gY3JlYXRlR3JpZChncmlkQ29udGVudHMsIHRydWUpO1xuXG4gICAgZGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChncmlkKTtcblxuICAgIHJldHVybiBkaXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdyaWQoY29udGVudHMsIGVzcHJlc3NvID0gZmFsc2UpIHtcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3JpZC5jbGFzc0xpc3QuYWRkKCdncmlkJyk7XG5cbiAgICBmb3IgKGNvbnN0IGhlYWRpbmcgaW4gY29udGVudHMpIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgICBoMy50ZXh0Q29udGVudCA9IGhlYWRpbmc7XG4gICAgICAgIHAudGV4dENvbnRlbnQgPSBjb250ZW50c1toZWFkaW5nXTtcblxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaDMpO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQocCk7XG4gICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9XG5cbiAgICBpZiAoZXNwcmVzc28pIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICAgICAgcDEuaW5uZXJIVE1MID0gJzxiPkVzcHJlc3NvPC9iPiAtIMKjMi4yOSc7XG4gICAgICAgIHAyLmlubmVySFRNTCA9ICc8Yj5SaXN0cmV0dG88L2I+IC0gwqMyLjI5JztcbiAgICAgICAgcDMuaW5uZXJIVE1MID0gJzxiPk1hY2NoaWF0bzwvYj4gLSDCozIuNDknO1xuXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChwMSk7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChwMik7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChwMyk7XG4gICAgICAgIGdyaWQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZ3JpZDtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGdlbmVyYXRlSG9tZSB9IGZyb20gXCIuL2hvbWUuanNcIjtcbmltcG9ydCB7IGdlbmVyYXRlQ29udGFjdCB9IGZyb20gXCIuL2NvbnRhY3QuanNcIjtcbmltcG9ydCB7IGdlbmVyYXRlTWVudSB9IGZyb20gXCIuL21lbnUuanNcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL2JnaW1hZ2UuanBnJztcblxuY29uc29sZS5sb2coXCJUaGlzIGlzIHdvcmtpbmchXCIpO1xuXG5jb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbmF2IGJ1dHRvbicpO1xudGFicy5mb3JFYWNoKHRhYiA9PiB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZW5lcmF0ZUNvbnRlbnQpKTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVDb250ZW50KGUpIHtcbiAgICBzd2l0Y2ggKGUudGFyZ2V0LnZhbHVlKSB7XG4gICAgICAgIGNhc2UgJ2hvbWUnOlxuICAgICAgICAgICAgZ2VuZXJhdGVIb21lKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWVudSc6XG4gICAgICAgICAgICBnZW5lcmF0ZU1lbnUoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjb250YWN0JzpcbiAgICAgICAgICAgIGdlbmVyYXRlQ29udGFjdCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG4vLyBpbml0aWFsaXNlXG5nZW5lcmF0ZUhvbWUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=