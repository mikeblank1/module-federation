/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dynamic */ \"../node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);\n\nconst page = __webpack_require__.e(/*! import() */ \"realPages_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../realPages/index */ \"./realPages/index.js\"));\nconst Page = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(()=>__webpack_require__.e(/*! import() */ \"realPages_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../realPages/index */ \"./realPages/index.js\")), {\n    loadableGenerated: {\n        modules: [\n            \"index.js -> \" + \"../realPages/index\"\n        ]\n    },\n    suspense: true\n});\nPage.getInitialProps = async (ctx)=>{\n    const getInitialProps = (await page).default?.getInitialProps;\n    if (getInitialProps) {\n        return getInitialProps(ctx);\n    }\n    return {};\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBbUM7QUFDbkMsTUFBTUMsT0FBTyxpS0FBTztBQUVwQixNQUFNQyxPQUFPRixtREFBT0EsQ0FBQyxJQUFNLGlLQUFPOzs7Ozs7SUFBeUJHLFVBQVUsSUFBSTs7QUFDekVELEtBQUtFLGVBQWUsR0FBRyxPQUFNQyxNQUFPO0lBQ2xDLE1BQU1ELGtCQUFrQixDQUFDLE1BQU1ILElBQUcsRUFBR0ssT0FBTyxFQUFFRjtJQUM5QyxJQUFJQSxpQkFBaUI7UUFDbkIsT0FBT0EsZ0JBQWdCQztJQUN6QixDQUFDO0lBQ0QsT0FBTyxDQUFDO0FBQ1Y7QUFDQSxpRUFBZUgsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWUvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XG5jb25zdCBwYWdlID0gaW1wb3J0KCcuLi9yZWFsUGFnZXMvaW5kZXgnKTtcblxuY29uc3QgUGFnZSA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9yZWFsUGFnZXMvaW5kZXgnKSwgeyBzdXNwZW5zZTogdHJ1ZSB9KTtcblBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY3R4ID0+IHtcbiAgY29uc3QgZ2V0SW5pdGlhbFByb3BzID0gKGF3YWl0IHBhZ2UpLmRlZmF1bHQ/LmdldEluaXRpYWxQcm9wcztcbiAgaWYgKGdldEluaXRpYWxQcm9wcykge1xuICAgIHJldHVybiBnZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgfVxuICByZXR1cm4ge307XG59O1xuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiJdLCJuYW1lcyI6WyJkeW5hbWljIiwicGFnZSIsIlBhZ2UiLCJzdXNwZW5zZSIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "../node_modules/next/dist/shared/lib/dynamic.js":
/*!*******************************************************!*\
  !*** ../node_modules/next/dist/shared/lib/dynamic.js ***!
  \*******************************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nfunction _export(target, all) {\n    for(var name in all)Object.defineProperty(target, name, {\n        enumerable: true,\n        get: all[name]\n    });\n}\n_export(exports, {\n    noSSR: function() {\n        return noSSR;\n    },\n    default: function() {\n        return dynamic;\n    }\n});\nconst _extends = __webpack_require__(/*! @swc/helpers/_/_extends */ \"../node_modules/@swc/helpers/cjs/_extends.cjs\");\nconst _interop_require_default = __webpack_require__(/*! @swc/helpers/_/_interop_require_default */ \"../node_modules/@swc/helpers/cjs/_interop_require_default.cjs\");\nconst _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(/*! react */ \"react\"));\nconst _loadable = /*#__PURE__*/ _interop_require_default._(__webpack_require__(/*! ./loadable */ \"./loadable\"));\nconst isServerSide = \"undefined\" === \"undefined\";\n// Normalize loader to return the module as form { default: Component } for `React.lazy`.\n// Also for backward compatible since next/dynamic allows to resolve a component directly with loader\n// Client component reference proxy need to be converted to a module.\nfunction convertModule(mod) {\n    return {\n        default: (mod == null ? void 0 : mod.default) || mod\n    };\n}\nfunction noSSR(LoadableInitializer, loadableOptions) {\n    // Removing webpack and modules means react-loadable won't try preloading\n    delete loadableOptions.webpack;\n    delete loadableOptions.modules;\n    // This check is necessary to prevent react-loadable from initializing on the server\n    if (!isServerSide) {\n        return LoadableInitializer(loadableOptions);\n    }\n    const Loading = loadableOptions.loading;\n    // This will only be rendered on the server side\n    return ()=>/*#__PURE__*/ _react.default.createElement(Loading, {\n            error: null,\n            isLoading: true,\n            pastDelay: false,\n            timedOut: false\n        });\n}\nfunction dynamic(dynamicOptions, options) {\n    let loadableFn = _loadable.default;\n    let loadableOptions = {\n        // A loading component is not required, so we default it\n        loading: ({ error , isLoading , pastDelay  })=>{\n            if (!pastDelay) return null;\n            if (true) {\n                if (isLoading) {\n                    return null;\n                }\n                if (error) {\n                    return /*#__PURE__*/ _react.default.createElement(\"p\", null, error.message, /*#__PURE__*/ _react.default.createElement(\"br\", null), error.stack);\n                }\n            }\n            return null;\n        }\n    };\n    // Support for direct import(), eg: dynamic(import('../hello-world'))\n    // Note that this is only kept for the edge case where someone is passing in a promise as first argument\n    // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))\n    // To make sure we don't execute the import without rendering first\n    if (dynamicOptions instanceof Promise) {\n        loadableOptions.loader = ()=>dynamicOptions;\n    // Support for having import as a function, eg: dynamic(() => import('../hello-world'))\n    } else if (typeof dynamicOptions === \"function\") {\n        loadableOptions.loader = dynamicOptions;\n    // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})\n    } else if (typeof dynamicOptions === \"object\") {\n        loadableOptions = _extends._({}, loadableOptions, dynamicOptions);\n    }\n    // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})\n    loadableOptions = _extends._({}, loadableOptions, options);\n    const loaderFn = loadableOptions.loader;\n    const loader = ()=>loaderFn != null ? loaderFn().then(convertModule) : Promise.resolve(convertModule(()=>null));\n    // coming from build/babel/plugins/react-loadable-plugin.js\n    if (loadableOptions.loadableGenerated) {\n        loadableOptions = _extends._({}, loadableOptions, loadableOptions.loadableGenerated);\n        delete loadableOptions.loadableGenerated;\n    }\n    // support for disabling server side rendering, eg: dynamic(() => import('../hello-world'), {ssr: false}).\n    if (typeof loadableOptions.ssr === \"boolean\" && !loadableOptions.ssr) {\n        delete loadableOptions.webpack;\n        delete loadableOptions.modules;\n        return noSSR(loadableFn, loadableOptions);\n    }\n    return loadableFn(_extends._({}, loadableOptions, {\n        loader: loader\n    }));\n}\nif ((typeof exports.default === \"function\" || typeof exports.default === \"object\" && exports.default !== null) && typeof exports.default.__esModule === \"undefined\") {\n    Object.defineProperty(exports.default, \"__esModule\", {\n        value: true\n    });\n    Object.assign(exports.default, exports);\n    module.exports = exports.default;\n} //# sourceMappingURL=dynamic.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL2R5bmFtaWMuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYkEsOENBQTZDO0lBQ3pDRyxPQUFPLElBQUk7QUFDZixDQUFDLEVBQUM7QUFDRixTQUFTQyxRQUFRQyxNQUFNLEVBQUVDLEdBQUcsRUFBRTtJQUMxQixJQUFJLElBQUlDLFFBQVFELElBQUlOLE9BQU9DLGNBQWMsQ0FBQ0ksUUFBUUUsTUFBTTtRQUNwREMsWUFBWSxJQUFJO1FBQ2hCQyxLQUFLSCxHQUFHLENBQUNDLEtBQUs7SUFDbEI7QUFDSjtBQUNBSCxRQUFRRixTQUFTO0lBQ2JRLE9BQU8sV0FBVztRQUNkLE9BQU9BO0lBQ1g7SUFDQUMsU0FBUyxXQUFXO1FBQ2hCLE9BQU9DO0lBQ1g7QUFDSjtBQUNBLE1BQU1DLFdBQVdDLG1CQUFPQSxDQUFDLDhFQUF5QjtBQUNsRCxNQUFNQywyQkFBMkJELG1CQUFPQSxDQUFDLDhHQUF5QztBQUNsRixNQUFNRSxTQUFTLFdBQVcsR0FBR0QseUJBQXlCRSxDQUFDLENBQUNILG1CQUFPQSxDQUFDLG9CQUFPO0FBQ3ZFLE1BQU1JLFlBQVksV0FBVyxHQUFHSCx5QkFBeUJFLENBQUMsQ0FBQ0gsbUJBQU9BLENBQUMsOEJBQVk7QUFDL0UsTUFBTUssZUFBZSxnQkFBa0I7QUFDdkMseUZBQXlGO0FBQ3pGLHFHQUFxRztBQUNyRyxxRUFBcUU7QUFDckUsU0FBU0MsY0FBY0MsR0FBRyxFQUFFO0lBQ3hCLE9BQU87UUFDSFYsU0FBUyxDQUFDVSxPQUFPLElBQUksR0FBRyxLQUFLLElBQUlBLElBQUlWLE9BQU8sS0FBS1U7SUFDckQ7QUFDSjtBQUNBLFNBQVNYLE1BQU1ZLG1CQUFtQixFQUFFQyxlQUFlLEVBQUU7SUFDakQseUVBQXlFO0lBQ3pFLE9BQU9BLGdCQUFnQkMsT0FBTztJQUM5QixPQUFPRCxnQkFBZ0JFLE9BQU87SUFDOUIsb0ZBQW9GO0lBQ3BGLElBQUksQ0FBQ04sY0FBYztRQUNmLE9BQU9H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TyxFQUFFVDtJQUMvQjhDLE9BQU85QyxPQUFPLEdBQUdBLFFBQVFTLE9BQU87QUFDbEMsQ0FBQyxDQUVELG1DQUFtQyIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWUvLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL2R5bmFtaWMuanM/MWIwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmZ1bmN0aW9uIF9leHBvcnQodGFyZ2V0LCBhbGwpIHtcbiAgICBmb3IodmFyIG5hbWUgaW4gYWxsKU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIG5hbWUsIHtcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0OiBhbGxbbmFtZV1cbiAgICB9KTtcbn1cbl9leHBvcnQoZXhwb3J0cywge1xuICAgIG5vU1NSOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG5vU1NSO1xuICAgIH0sXG4gICAgZGVmYXVsdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBkeW5hbWljO1xuICAgIH1cbn0pO1xuY29uc3QgX2V4dGVuZHMgPSByZXF1aXJlKFwiQHN3Yy9oZWxwZXJzL18vX2V4dGVuZHNcIik7XG5jb25zdCBfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQgPSByZXF1aXJlKFwiQHN3Yy9oZWxwZXJzL18vX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0XCIpO1xuY29uc3QgX3JlYWN0ID0gLyojX19QVVJFX18qLyBfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuXyhyZXF1aXJlKFwicmVhY3RcIikpO1xuY29uc3QgX2xvYWRhYmxlID0gLyojX19QVVJFX18qLyBfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuXyhyZXF1aXJlKFwiLi9sb2FkYWJsZVwiKSk7XG5jb25zdCBpc1NlcnZlclNpZGUgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJztcbi8vIE5vcm1hbGl6ZSBsb2FkZXIgdG8gcmV0dXJuIHRoZSBtb2R1bGUgYXMgZm9ybSB7IGRlZmF1bHQ6IENvbXBvbmVudCB9IGZvciBgUmVhY3QubGF6eWAuXG4vLyBBbHNvIGZvciBiYWNrd2FyZCBjb21wYXRpYmxlIHNpbmNlIG5leHQvZHluYW1pYyBhbGxvd3MgdG8gcmVzb2x2ZSBhIGNvbXBvbmVudCBkaXJlY3RseSB3aXRoIGxvYWRlclxuLy8gQ2xpZW50IGNvbXBvbmVudCByZWZlcmVuY2UgcHJveHkgbmVlZCB0byBiZSBjb252ZXJ0ZWQgdG8gYSBtb2R1bGUuXG5mdW5jdGlvbiBjb252ZXJ0TW9kdWxlKG1vZCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGRlZmF1bHQ6IChtb2QgPT0gbnVsbCA/IHZvaWQgMCA6IG1vZC5kZWZhdWx0KSB8fCBtb2RcbiAgICB9O1xufVxuZnVuY3Rpb24gbm9TU1IoTG9hZGFibGVJbml0aWFsaXplciwgbG9hZGFibGVPcHRpb25zKSB7XG4gICAgLy8gUmVtb3Zpbmcgd2VicGFjayBhbmQgbW9kdWxlcyBtZWFucyByZWFjdC1sb2FkYWJsZSB3b24ndCB0cnkgcHJlbG9hZGluZ1xuICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMud2VicGFjaztcbiAgICBkZWxldGUgbG9hZGFibGVPcHRpb25zLm1vZHVsZXM7XG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gcHJldmVudCByZWFjdC1sb2FkYWJsZSBmcm9tIGluaXRpYWxpemluZyBvbiB0aGUgc2VydmVyXG4gICAgaWYgKCFpc1NlcnZlclNpZGUpIHtcbiAgICAgICAgcmV0dXJuIExvYWRhYmxlSW5pdGlhbGl6ZXIobG9hZGFibGVPcHRpb25zKTtcbiAgICB9XG4gICAgY29uc3QgTG9hZGluZyA9IGxvYWRhYmxlT3B0aW9ucy5sb2FkaW5nO1xuICAgIC8vIFRoaXMgd2lsbCBvbmx5IGJlIHJlbmRlcmVkIG9uIHRoZSBzZXJ2ZXIgc2lkZVxuICAgIHJldHVybiAoKT0+LyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KExvYWRpbmcsIHtcbiAgICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgcGFzdERlbGF5OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVkT3V0OiBmYWxzZVxuICAgICAgICB9KTtcbn1cbmZ1bmN0aW9uIGR5bmFtaWMoZHluYW1pY09wdGlvbnMsIG9wdGlvbnMpIHtcbiAgICBsZXQgbG9hZGFibGVGbiA9IF9sb2FkYWJsZS5kZWZhdWx0O1xuICAgIGxldCBsb2FkYWJsZU9wdGlvbnMgPSB7XG4gICAgICAgIC8vIEEgbG9hZGluZyBjb21wb25lbnQgaXMgbm90IHJlcXVpcmVkLCBzbyB3ZSBkZWZhdWx0IGl0XG4gICAgICAgIGxvYWRpbmc6ICh7IGVycm9yICwgaXNMb2FkaW5nICwgcGFzdERlbGF5ICB9KT0+e1xuICAgICAgICAgICAgaWYgKCFwYXN0RGVsYXkpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInBcIiwgbnVsbCwgZXJyb3IubWVzc2FnZSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYnJcIiwgbnVsbCksIGVycm9yLnN0YWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gU3VwcG9ydCBmb3IgZGlyZWN0IGltcG9ydCgpLCBlZzogZHluYW1pYyhpbXBvcnQoJy4uL2hlbGxvLXdvcmxkJykpXG4gICAgLy8gTm90ZSB0aGF0IHRoaXMgaXMgb25seSBrZXB0IGZvciB0aGUgZWRnZSBjYXNlIHdoZXJlIHNvbWVvbmUgaXMgcGFzc2luZyBpbiBhIHByb21pc2UgYXMgZmlyc3QgYXJndW1lbnRcbiAgICAvLyBUaGUgcmVhY3QtbG9hZGFibGUgYmFiZWwgcGx1Z2luIHdpbGwgdHVybiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSkgaW50byBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbiAgICAvLyBUbyBtYWtlIHN1cmUgd2UgZG9uJ3QgZXhlY3V0ZSB0aGUgaW1wb3J0IHdpdGhvdXQgcmVuZGVyaW5nIGZpcnN0XG4gICAgaWYgKGR5bmFtaWNPcHRpb25zIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICBsb2FkYWJsZU9wdGlvbnMubG9hZGVyID0gKCk9PmR5bmFtaWNPcHRpb25zO1xuICAgIC8vIFN1cHBvcnQgZm9yIGhhdmluZyBpbXBvcnQgYXMgYSBmdW5jdGlvbiwgZWc6IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGR5bmFtaWNPcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucy5sb2FkZXIgPSBkeW5hbWljT3B0aW9ucztcbiAgICAvLyBTdXBwb3J0IGZvciBoYXZpbmcgZmlyc3QgYXJndW1lbnQgYmVpbmcgb3B0aW9ucywgZWc6IGR5bmFtaWMoe2xvYWRlcjogaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpfSlcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkeW5hbWljT3B0aW9ucyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgbG9hZGFibGVPcHRpb25zID0gX2V4dGVuZHMuXyh7fSwgbG9hZGFibGVPcHRpb25zLCBkeW5hbWljT3B0aW9ucyk7XG4gICAgfVxuICAgIC8vIFN1cHBvcnQgZm9yIHBhc3Npbmcgb3B0aW9ucywgZWc6IGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpLCB7bG9hZGluZzogKCkgPT4gPHA+TG9hZGluZyBzb21ldGhpbmc8L3A+fSlcbiAgICBsb2FkYWJsZU9wdGlvbnMgPSBfZXh0ZW5kcy5fKHt9LCBsb2FkYWJsZU9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIGNvbnN0IGxvYWRlckZuID0gbG9hZGFibGVPcHRpb25zLmxvYWRlcjtcbiAgICBjb25zdCBsb2FkZXIgPSAoKT0+bG9hZGVyRm4gIT0gbnVsbCA/IGxvYWRlckZuKCkudGhlbihjb252ZXJ0TW9kdWxlKSA6IFByb21pc2UucmVzb2x2ZShjb252ZXJ0TW9kdWxlKCgpPT5udWxsKSk7XG4gICAgLy8gY29taW5nIGZyb20gYnVpbGQvYmFiZWwvcGx1Z2lucy9yZWFjdC1sb2FkYWJsZS1wbHVnaW4uanNcbiAgICBpZiAobG9hZGFibGVPcHRpb25zLmxvYWRhYmxlR2VuZXJhdGVkKSB7XG4gICAgICAgIGxvYWRhYmxlT3B0aW9ucyA9IF9leHRlbmRzLl8oe30sIGxvYWRhYmxlT3B0aW9ucywgbG9hZGFibGVPcHRpb25zLmxvYWRhYmxlR2VuZXJhdGVkKTtcbiAgICAgICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5sb2FkYWJsZUdlbmVyYXRlZDtcbiAgICB9XG4gICAgLy8gc3VwcG9ydCBmb3IgZGlzYWJsaW5nIHNlcnZlciBzaWRlIHJlbmRlcmluZywgZWc6IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpLCB7c3NyOiBmYWxzZX0pLlxuICAgIGlmICh0eXBlb2YgbG9hZGFibGVPcHRpb25zLnNzciA9PT0gJ2Jvb2xlYW4nICYmICFsb2FkYWJsZU9wdGlvbnMuc3NyKSB7XG4gICAgICAgIGRlbGV0ZSBsb2FkYWJsZU9wdGlvbnMud2VicGFjaztcbiAgICAgICAgZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy5tb2R1bGVzO1xuICAgICAgICByZXR1cm4gbm9TU1IobG9hZGFibGVGbiwgbG9hZGFibGVPcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIGxvYWRhYmxlRm4oX2V4dGVuZHMuXyh7fSwgbG9hZGFibGVPcHRpb25zLCB7XG4gICAgICAgIGxvYWRlcjogbG9hZGVyXG4gICAgfSkpO1xufVxuXG5pZiAoKHR5cGVvZiBleHBvcnRzLmRlZmF1bHQgPT09ICdmdW5jdGlvbicgfHwgKHR5cGVvZiBleHBvcnRzLmRlZmF1bHQgPT09ICdvYmplY3QnICYmIGV4cG9ydHMuZGVmYXVsdCAhPT0gbnVsbCkpICYmIHR5cGVvZiBleHBvcnRzLmRlZmF1bHQuX19lc01vZHVsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMuZGVmYXVsdCwgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuICBPYmplY3QuYXNzaWduKGV4cG9ydHMuZGVmYXVsdCwgZXhwb3J0cyk7XG4gIG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cy5kZWZhdWx0O1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1keW5hbWljLmpzLm1hcCJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIl9leHBvcnQiLCJ0YXJnZXQiLCJhbGwiLCJuYW1lIiwiZW51bWVyYWJsZSIsImdldCIsIm5vU1NSIiwiZGVmYXVsdCIsImR5bmFtaWMiLCJfZXh0ZW5kcyIsInJlcXVpcmUiLCJfaW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQiLCJfcmVhY3QiLCJfIiwiX2xvYWRhYmxlIiwiaXNTZXJ2ZXJTaWRlIiwiY29udmVydE1vZHVsZSIsIm1vZCIsIkxvYWRhYmxlSW5pdGlhbGl6ZXIiLCJsb2FkYWJsZU9wdGlvbnMiLCJ3ZWJwYWNrIiwibW9kdWxlcyIsIkxvYWRpbmciLCJsb2FkaW5nIiwiY3JlYXRlRWxlbWVudCIsImVycm9yIiwiaXNMb2FkaW5nIiwicGFzdERlbGF5IiwidGltZWRPdXQiLCJkeW5hbWljT3B0aW9ucyIsIm9wdGlvbnMiLCJsb2FkYWJsZUZuIiwicHJvY2VzcyIsIm1lc3NhZ2UiLCJzdGFjayIsIlByb21pc2UiLCJsb2FkZXIiLCJsb2FkZXJGbiIsInRoZW4iLCJyZXNvbHZlIiwibG9hZGFibGVHZW5lcmF0ZWQiLCJzc3IiLCJfX2VzTW9kdWxlIiwiYXNzaWduIiwibW9kdWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../node_modules/next/dist/shared/lib/dynamic.js\n");

/***/ }),

/***/ "../node_modules/next/dynamic.js":
/*!***************************************!*\
  !*** ../node_modules/next/dynamic.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__(/*! ./dist/shared/lib/dynamic */ \"../node_modules/next/dist/shared/lib/dynamic.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzL25leHQvZHluYW1pYy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQSx3SEFBcUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lLy4uL25vZGVfbW9kdWxlcy9uZXh0L2R5bmFtaWMuanM/ZjA1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9zaGFyZWQvbGliL2R5bmFtaWMnKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../node_modules/next/dynamic.js\n");

/***/ }),

/***/ "./loadable":
/*!***************************************************!*\
  !*** external "next/dist/shared/lib/loadable.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ }),

/***/ "../node_modules/@swc/helpers/cjs/_extends.cjs":
/*!*****************************************************!*\
  !*** ../node_modules/@swc/helpers/cjs/_extends.cjs ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nexports._ = exports._extends = _extends;\nfunction _extends() {\n    exports._ = exports._extends = _extends = Object.assign || function assign(target) {\n        for (var i = 1; i < arguments.length; i++) {\n            var source = arguments[i];\n            for (var key in source) if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];\n        }\n\n        return target;\n    };\n\n    return _extends.apply(this, arguments);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzL0Bzd2MvaGVscGVycy9janMvX2V4dGVuZHMuY2pzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLFNBQVMsR0FBRyxnQkFBZ0I7QUFDNUI7QUFDQSxJQUFJLFNBQVMsR0FBRyxnQkFBZ0I7QUFDaEMsd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZS8uLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2Nqcy9fZXh0ZW5kcy5janM/YTI3MiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fID0gZXhwb3J0cy5fZXh0ZW5kcyA9IF9leHRlbmRzO1xuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gICAgZXhwb3J0cy5fID0gZXhwb3J0cy5fZXh0ZW5kcyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0KSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG5cbiAgICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../node_modules/@swc/helpers/cjs/_extends.cjs\n");

/***/ }),

/***/ "../node_modules/@swc/helpers/cjs/_interop_require_default.cjs":
/*!*********************************************************************!*\
  !*** ../node_modules/@swc/helpers/cjs/_interop_require_default.cjs ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\n\nexports._ = exports._interop_require_default = _interop_require_default;\nfunction _interop_require_default(obj) {\n    return obj && obj.__esModule ? obj : { default: obj };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzL0Bzd2MvaGVscGVycy9janMvX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0LmNqcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixTQUFTLEdBQUcsZ0NBQWdDO0FBQzVDO0FBQ0EsMkNBQTJDO0FBQzNDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZS8uLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2Nqcy9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuY2pzP2UxNGQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuXyA9IGV4cG9ydHMuX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0ID0gX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0O1xuZnVuY3Rpb24gX2ludGVyb3BfcmVxdWlyZV9kZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../node_modules/@swc/helpers/cjs/_interop_require_default.cjs\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();