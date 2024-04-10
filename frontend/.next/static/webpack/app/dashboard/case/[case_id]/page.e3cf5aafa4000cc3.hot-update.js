"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/case/[case_id]/page",{

/***/ "(app-pages-browser)/./app/dashboard/case/[case_id]/page.tsx":
/*!***********************************************!*\
  !*** ./app/dashboard/case/[case_id]/page.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CaseResult; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _connector_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/connector/api */ \"(app-pages-browser)/./connector/api.ts\");\n/* harmony import */ var _constants_caseStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/constants/caseStatus */ \"(app-pages-browser)/./constants/caseStatus.js\");\n/* harmony import */ var _components_case_data_display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/case-data-display */ \"(app-pages-browser)/./components/case-data-display/index.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction CaseResult() {\n    _s();\n    // State to store the case data\n    const [caseStatus, setCaseStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_constants_caseStatus__WEBPACK_IMPORTED_MODULE_3__[\"default\"].SUBMITTED);\n    const [caseData, setCaseData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    // State to store any potential error message\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // Function to fetch the case data\n    const fetchCaseData = async ()=>{\n        try {\n            const data = await (0,_connector_api__WEBPACK_IMPORTED_MODULE_2__.getCase)(mockCaseId, caseStatus);\n            setCaseData(data);\n        } catch (error) {\n            setErrorMessage(error.message || \"Failed to fetch case data\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // A mock case ID for demonstration\n        const mockCaseId1 = \"mock-case-id\";\n        // Calling the fetch function\n        fetchCaseData();\n    }, []); // Empty dependency array means this effect runs once on component mount\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // A mock case ID for demonstration\n        const mockCaseId1 = \"mock-case-id\";\n        // Calling the fetch function\n        fetchCaseData();\n    }, [\n        caseStatus\n    ]); // Empty dependency array means this effect runs once on component mount\n    // Render the case data or an error message\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Case Result\"\n            }, void 0, false, {\n                fileName: \"/Users/homer/Sandbox/health-insurance-complience/frontend/app/dashboard/case/[case_id]/page.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_case_data_display__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                caseData: caseData\n            }, void 0, false, {\n                fileName: \"/Users/homer/Sandbox/health-insurance-complience/frontend/app/dashboard/case/[case_id]/page.tsx\",\n                lineNumber: 43,\n                columnNumber: 4\n            }, this),\n            errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Error: \",\n                    errorMessage\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/homer/Sandbox/health-insurance-complience/frontend/app/dashboard/case/[case_id]/page.tsx\",\n                lineNumber: 44,\n                columnNumber: 24\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/homer/Sandbox/health-insurance-complience/frontend/app/dashboard/case/[case_id]/page.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(CaseResult, \"5yckekscsI/KGOJjFQcFYO+Qv1M=\");\n_c = CaseResult;\nvar _c;\n$RefreshReg$(_c, \"CaseResult\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvY2FzZS9bY2FzZV9pZF0vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRW1EO0FBQ1Q7QUFDSztBQUNjO0FBRTlDLFNBQVNNOztJQUN0QiwrQkFBK0I7SUFDL0IsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdQLCtDQUFRQSxDQUFDRyw2REFBVUEsQ0FBQ0ssU0FBUztJQUNqRSxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1YsK0NBQVFBLENBQUMsQ0FBQztJQUMxQyw2Q0FBNkM7SUFDN0MsTUFBTSxDQUFDVyxjQUFjQyxnQkFBZ0IsR0FBR1osK0NBQVFBLENBQUM7SUFFakQsa0NBQWtDO0lBQ2xDLE1BQU1hLGdCQUFnQjtRQUN2QixJQUFJO1lBQ0YsTUFBTUMsT0FBTyxNQUFNWix1REFBT0EsQ0FBQ2EsWUFBWVQ7WUFDdkNJLFlBQVlJO1FBQ2QsRUFBRSxPQUFPRSxPQUFPO1lBQ2RKLGdCQUFnQkksTUFBTUMsT0FBTyxJQUFJO1FBQ25DO0lBQ0M7SUFFQWhCLGdEQUFTQSxDQUFDO1FBQ1IsbUNBQW1DO1FBQ25DLE1BQU1jLGNBQWE7UUFDbkIsNkJBQTZCO1FBQzdCRjtJQUNGLEdBQUcsRUFBRSxHQUFHLHdFQUF3RTtJQUVoRlosZ0RBQVNBLENBQUM7UUFDUixtQ0FBbUM7UUFDbkMsTUFBTWMsY0FBYTtRQUNuQiw2QkFBNkI7UUFDN0JGO0lBQ0YsR0FBRztRQUFDUDtLQUFXLEdBQUcsd0VBQXdFO0lBRTFGLDJDQUEyQztJQUMzQyxxQkFDRSw4REFBQ1k7OzBCQUNDLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNQLDhEQUFDZixxRUFBZUE7Z0JBQUNLLFVBQVVBOzs7Ozs7WUFDdkJFLDhCQUFnQiw4REFBQ1M7O29CQUFFO29CQUFRVDs7Ozs7Ozs7Ozs7OztBQUdsQztHQXZDd0JOO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9kYXNoYm9hcmQvY2FzZS9bY2FzZV9pZF0vcGFnZS50c3g/MDMzYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRDYXNlIH0gZnJvbSAnQC9jb25uZWN0b3IvYXBpJztcbmltcG9ydCBDYXNlU3RhdHVzIGZyb20gJ0AvY29uc3RhbnRzL2Nhc2VTdGF0dXMnXG5pbXBvcnQgQ2FzZURhdGFEaXNwbGF5IGZyb20gJ0AvY29tcG9uZW50cy9jYXNlLWRhdGEtZGlzcGxheSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhc2VSZXN1bHQoKSB7XG4gIC8vIFN0YXRlIHRvIHN0b3JlIHRoZSBjYXNlIGRhdGFcbiAgY29uc3QgW2Nhc2VTdGF0dXMsIHNldENhc2VTdGF0dXNdID0gdXNlU3RhdGUoQ2FzZVN0YXR1cy5TVUJNSVRURUQpO1xuICBjb25zdCBbY2FzZURhdGEsIHNldENhc2VEYXRhXSA9IHVzZVN0YXRlKHt9KTtcbiAgLy8gU3RhdGUgdG8gc3RvcmUgYW55IHBvdGVudGlhbCBlcnJvciBtZXNzYWdlXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgLy8gRnVuY3Rpb24gdG8gZmV0Y2ggdGhlIGNhc2UgZGF0YVxuICBjb25zdCBmZXRjaENhc2VEYXRhID0gYXN5bmMgKCkgPT4ge1xuXHR0cnkge1xuXHQgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRDYXNlKG1vY2tDYXNlSWQsIGNhc2VTdGF0dXMpO1xuXHQgIHNldENhc2VEYXRhKGRhdGEpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHQgIHNldEVycm9yTWVzc2FnZShlcnJvci5tZXNzYWdlIHx8ICdGYWlsZWQgdG8gZmV0Y2ggY2FzZSBkYXRhJyk7XG5cdH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIEEgbW9jayBjYXNlIElEIGZvciBkZW1vbnN0cmF0aW9uXG4gICAgY29uc3QgbW9ja0Nhc2VJZCA9ICdtb2NrLWNhc2UtaWQnO1xuICAgIC8vIENhbGxpbmcgdGhlIGZldGNoIGZ1bmN0aW9uXG4gICAgZmV0Y2hDYXNlRGF0YSgpO1xuICB9LCBbXSk7IC8vIEVtcHR5IGRlcGVuZGVuY3kgYXJyYXkgbWVhbnMgdGhpcyBlZmZlY3QgcnVucyBvbmNlIG9uIGNvbXBvbmVudCBtb3VudFxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQSBtb2NrIGNhc2UgSUQgZm9yIGRlbW9uc3RyYXRpb25cbiAgICBjb25zdCBtb2NrQ2FzZUlkID0gJ21vY2stY2FzZS1pZCc7XG4gICAgLy8gQ2FsbGluZyB0aGUgZmV0Y2ggZnVuY3Rpb25cbiAgICBmZXRjaENhc2VEYXRhKCk7XG4gIH0sIFtjYXNlU3RhdHVzXSk7IC8vIEVtcHR5IGRlcGVuZGVuY3kgYXJyYXkgbWVhbnMgdGhpcyBlZmZlY3QgcnVucyBvbmNlIG9uIGNvbXBvbmVudCBtb3VudFxuXG4gIC8vIFJlbmRlciB0aGUgY2FzZSBkYXRhIG9yIGFuIGVycm9yIG1lc3NhZ2VcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkNhc2UgUmVzdWx0PC9oMT5cblx0ICA8Q2FzZURhdGFEaXNwbGF5IGNhc2VEYXRhPXtjYXNlRGF0YX0gLz5cbiAgICAgIHtlcnJvck1lc3NhZ2UgJiYgPHA+RXJyb3I6IHtlcnJvck1lc3NhZ2V9PC9wPn1cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImdldENhc2UiLCJDYXNlU3RhdHVzIiwiQ2FzZURhdGFEaXNwbGF5IiwiQ2FzZVJlc3VsdCIsImNhc2VTdGF0dXMiLCJzZXRDYXNlU3RhdHVzIiwiU1VCTUlUVEVEIiwiY2FzZURhdGEiLCJzZXRDYXNlRGF0YSIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImZldGNoQ2FzZURhdGEiLCJkYXRhIiwibW9ja0Nhc2VJZCIsImVycm9yIiwibWVzc2FnZSIsImRpdiIsImgxIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/case/[case_id]/page.tsx\n"));

/***/ })

});