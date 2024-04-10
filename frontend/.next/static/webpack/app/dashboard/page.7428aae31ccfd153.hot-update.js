"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./components/guidelines-upload/index.tsx":
/*!************************************************!*\
  !*** ./components/guidelines-upload/index.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GuidelinesUpload; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _context_dashboard_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/dashboard-context */ \"(app-pages-browser)/./context/dashboard-context.tsx\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_FaCheck_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=FaCheck!=!react-icons/fa */ \"(app-pages-browser)/./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"(app-pages-browser)/./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction GuidelinesUpload(param) {\n    let { onPDFProcessed } = param;\n    _s();\n    const { guidelinesFile, setGuidelinesFile } = (0,_context_dashboard_context__WEBPACK_IMPORTED_MODULE_1__.useDashboard)();\n    const handleClick = ()=>{\n        setGuidelinesFile({\n            url: \"/assets/guidelines.pdf\"\n        });\n        onPDFProcessed(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-1/2 h-64 border border-4 border-gray-200 border-dashed rounded flex flex-row items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(\"text-white font-medium py-2 px-4 rounded border border-2\", guidelinesFile === null ? \"bg-orange-500 border-orange-500\" : \"border-transparent text-green-600\"),\n            onClick: handleClick,\n            children: [\n                guidelinesFile === null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: \"Simulate Guidelines Upload\"\n                }, void 0, false, {\n                    fileName: \"/Users/homer/Sandbox/health-insurance-complience/frontend/components/guidelines-upload/index.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 46\n                }, this),\n                guidelinesFile !== null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"text-green-600 flex flex-row gap-1 items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaCheck_react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaCheck, {}, void 0, false, {\n                            fileName: \"/Users/homer/Sandbox/health-insurance-complience/frontend/components/guidelines-upload/index.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: \"Guidelines File Uploaded\"\n                        }, void 0, false, {\n                            fileName: \"/Users/homer/Sandbox/health-insurance-complience/frontend/components/guidelines-upload/index.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/homer/Sandbox/health-insurance-complience/frontend/components/guidelines-upload/index.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/homer/Sandbox/health-insurance-complience/frontend/components/guidelines-upload/index.tsx\",\n            lineNumber: 18,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/homer/Sandbox/health-insurance-complience/frontend/components/guidelines-upload/index.tsx\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this);\n}\n_s(GuidelinesUpload, \"uW5NyP13LHV3fkyL83hlGliDRt4=\", false, function() {\n    return [\n        _context_dashboard_context__WEBPACK_IMPORTED_MODULE_1__.useDashboard\n    ];\n});\n_c = GuidelinesUpload;\nGuidelinesUpload.propTypes = {\n    onPDFProcessed: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func).isRequired\n};\nvar _c;\n$RefreshReg$(_c, \"GuidelinesUpload\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZ3VpZGVsaW5lcy11cGxvYWQvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFMEQ7QUFDdEI7QUFDSztBQUNOO0FBRXBCLFNBQVNJLGlCQUFpQixLQUFrQjtRQUFsQixFQUFFQyxjQUFjLEVBQUUsR0FBbEI7O0lBQ3JDLE1BQU0sRUFBRUMsY0FBYyxFQUFFQyxpQkFBaUIsRUFBRSxHQUFHUCx3RUFBWUE7SUFFMUQsTUFBTVEsY0FBYztRQUNoQkQsa0JBQWtCO1lBQUVFLEtBQUs7UUFBeUI7UUFDbERKLGVBQWU7SUFDbkI7SUFFQSxxQkFDSSw4REFBQ0s7UUFBSUMsV0FBVTtrQkFDWCw0RUFBQ0M7WUFDR0QsV0FBV1YsaURBQVVBLENBQ2pCLDREQUNBSyxtQkFBbUIsT0FBTyxvQ0FBb0M7WUFFbEVPLFNBQVNMOztnQkFFUkYsbUJBQW1CLHNCQUFTLDhEQUFDUTs4QkFBSzs7Ozs7O2dCQUNsQ1IsbUJBQW1CLHNCQUNoQiw4REFBQ1E7b0JBQUtILFdBQVU7O3NDQUNaLDhEQUFDVCxrRkFBT0E7Ozs7O3NDQUNSLDhEQUFDWTtzQ0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNOUI7R0EzQndCVjs7UUFDMEJKLG9FQUFZQTs7O0tBRHRDSTtBQTZCeEJBLGlCQUFpQlcsU0FBUyxHQUFHO0lBQ3pCVixnQkFBZ0JGLHdEQUFjLENBQUNjLFVBQVU7QUFDN0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ndWlkZWxpbmVzLXVwbG9hZC9pbmRleC50c3g/MmI5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlRGFzaGJvYXJkfSBmcm9tIFwiQC9jb250ZXh0L2Rhc2hib2FyZC1jb250ZXh0XCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHsgRmFDaGVjayB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJzsgXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEd1aWRlbGluZXNVcGxvYWQoeyBvblBERlByb2Nlc3NlZCB9KSB7XG4gICAgY29uc3QgeyBndWlkZWxpbmVzRmlsZSwgc2V0R3VpZGVsaW5lc0ZpbGUgfSA9IHVzZURhc2hib2FyZCgpO1xuXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldEd1aWRlbGluZXNGaWxlKHsgdXJsOiBcIi9hc3NldHMvZ3VpZGVsaW5lcy5wZGZcIiB9KTtcbiAgICAgICAgb25QREZQcm9jZXNzZWQodHJ1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS8yIGgtNjQgYm9yZGVyIGJvcmRlci00IGJvcmRlci1ncmF5LTIwMCBib3JkZXItZGFzaGVkIHJvdW5kZWQgZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dC13aGl0ZSBmb250LW1lZGl1bSBweS0yIHB4LTQgcm91bmRlZCBib3JkZXIgYm9yZGVyLTJcIixcbiAgICAgICAgICAgICAgICAgICAgZ3VpZGVsaW5lc0ZpbGUgPT09IG51bGwgPyBcImJnLW9yYW5nZS01MDAgYm9yZGVyLW9yYW5nZS01MDBcIiA6IFwiYm9yZGVyLXRyYW5zcGFyZW50IHRleHQtZ3JlZW4tNjAwXCIgXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7Z3VpZGVsaW5lc0ZpbGUgPT09IG51bGwgJiYgKDxzcGFuPlNpbXVsYXRlIEd1aWRlbGluZXMgVXBsb2FkPC9zcGFuPil9XG4gICAgICAgICAgICAgICAge2d1aWRlbGluZXNGaWxlICE9PSBudWxsICYmIChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmVlbi02MDAgZmxleCBmbGV4LXJvdyBnYXAtMSBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGYUNoZWNrIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5HdWlkZWxpbmVzIEZpbGUgVXBsb2FkZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuR3VpZGVsaW5lc1VwbG9hZC5wcm9wVHlwZXMgPSB7XG4gICAgb25QREZQcm9jZXNzZWQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59OyJdLCJuYW1lcyI6WyJ1c2VEYXNoYm9hcmQiLCJjbGFzc05hbWVzIiwiRmFDaGVjayIsIlByb3BUeXBlcyIsIkd1aWRlbGluZXNVcGxvYWQiLCJvblBERlByb2Nlc3NlZCIsImd1aWRlbGluZXNGaWxlIiwic2V0R3VpZGVsaW5lc0ZpbGUiLCJoYW5kbGVDbGljayIsInVybCIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcGFuIiwicHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/guidelines-upload/index.tsx\n"));

/***/ })

});