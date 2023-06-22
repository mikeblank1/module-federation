"use strict";
(() => {
var exports = {};
exports.id = 330;
exports.ids = [330];
exports.modules = {

/***/ 9961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5218);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);

const page = Promise.all(/* import() */[__webpack_require__.e(967), __webpack_require__.e(666)]).then(__webpack_require__.bind(__webpack_require__, 6666));
const Page = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(()=>Promise.all(/* import() */[__webpack_require__.e(967), __webpack_require__.e(666)]).then(__webpack_require__.bind(__webpack_require__, 6666)), {
    loadableGenerated: {
        modules: [
            "[...slug].js -> " + "../realPages/[...slug]"
        ]
    }
});
Page.getInitialProps = async (ctx)=>{
    const getInitialProps = (await page).default?.getInitialProps;
    if (getInitialProps) {
        return getInitialProps(ctx);
    }
    return {};
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);


/***/ }),

/***/ 9392:
/***/ ((module) => {

module.exports = require("@module-federation/node/utils");

/***/ }),

/***/ 3260:
/***/ ((module) => {

module.exports = require("@module-federation/utilities");

/***/ }),

/***/ 7199:
/***/ ((module) => {

module.exports = require("feather-route-matcher");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [218], () => (__webpack_exec__(9961)));
module.exports = __webpack_exports__;

})();