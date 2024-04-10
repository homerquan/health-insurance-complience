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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CaseResult; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _connector_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/connector/api */ \"(app-pages-browser)/./connector/api.ts\");\n/* harmony import */ var _constants_caseStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/constants/caseStatus */ \"(app-pages-browser)/./constants/caseStatus.js\");\n/* harmony import */ var _components_case_data_display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/case-data-display */ \"(app-pages-browser)/./components/case-data-display/index.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n// A mock case ID for demonstration\nconst mockCaseId = \"mock-case-id\";\nfunction CaseResult() {\n    _s();\n    // State to store the case data\n    const [caseStatus, setCaseStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_constants_caseStatus__WEBPACK_IMPORTED_MODULE_3__[\"default\"].SUBMITTED);\n    const [caseData, setCaseData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    // State to store any potential error message\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // Function to fetch the case data\n    const fetchCaseData = async (caseId)=>{\n        try {\n            const data = await (0,_connector_api__WEBPACK_IMPORTED_MODULE_2__.getCase)(caseId, caseStatus);\n            setCaseData(data);\n        } catch (error) {\n            setErrorMessage(error.message || \"Failed to fetch case data\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Calling the fetch function\n        fetchCaseData(mockCaseId);\n        // Simulation prgressive rendering in each steps\n        const updateStatus = ()=>{\n            setCaseStatus((currentStatus)=>{\n                switch(currentStatus){\n                    case _constants_caseStatus__WEBPACK_IMPORTED_MODULE_3__[\"default\"].SUBMITTED:\n                        return _constants_caseStatus__WEBPACK_IMPORTED_MODULE_3__[\"default\"].PROCESSING;\n                    case _constants_caseStatus__WEBPACK_IMPORTED_MODULE_3__[\"default\"].PROCESSING:\n                        return _constants_caseStatus__WEBPACK_IMPORTED_MODULE_3__[\"default\"].COMPLETE;\n                    case _constants_caseStatus__WEBPACK_IMPORTED_MODULE_3__[\"default\"].COMPLETE:\n                        // Here you might want to stop updating or reset to SUBMITTED\n                        // For this example, let's just return COMPLETE to stop the cycle.\n                        return _constants_caseStatus__WEBPACK_IMPORTED_MODULE_3__[\"default\"].COMPLETE;\n                    default:\n                        return currentStatus;\n                }\n            });\n        };\n        const intervalId = setInterval(updateStatus, 10000);\n        // Cleanup the interval on component unmount\n        return ()=>clearInterval(intervalId);\n    }, []); // Empty dependency array means this effect runs once on component mount\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Calling the fetch function after init loading\n        fetchCaseData(mockCaseId);\n    }, [\n        caseStatus\n    ]);\n    // Render the case data or an error message\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Case Result\"\n            }, void 0, false, {\n                fileName: \"/Users/homer/Sandbox/health-insurance-complience/frontend/app/dashboard/case/[case_id]/page.tsx\",\n                lineNumber: 63,\n                columnNumber: 4\n            }, this),\n            caseStatus != _constants_caseStatus__WEBPACK_IMPORTED_MODULE_3__[\"default\"].COMPLETE && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Progressive loading more ... \"\n            }, void 0, false, {\n                fileName: \"/Users/homer/Sandbox/health-insurance-complience/frontend/app/dashboard/case/[case_id]/page.tsx\",\n                lineNumber: 64,\n                columnNumber: 42\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_case_data_display__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                caseData: caseData\n            }, void 0, false, {\n                fileName: \"/Users/homer/Sandbox/health-insurance-complience/frontend/app/dashboard/case/[case_id]/page.tsx\",\n                lineNumber: 65,\n                columnNumber: 4\n            }, this),\n            errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Error: \",\n                    errorMessage\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/homer/Sandbox/health-insurance-complience/frontend/app/dashboard/case/[case_id]/page.tsx\",\n                lineNumber: 66,\n                columnNumber: 21\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/homer/Sandbox/health-insurance-complience/frontend/app/dashboard/case/[case_id]/page.tsx\",\n        lineNumber: 62,\n        columnNumber: 3\n    }, this);\n}\n_s(CaseResult, \"5yckekscsI/KGOJjFQcFYO+Qv1M=\");\n_c = CaseResult;\nvar _c;\n$RefreshReg$(_c, \"CaseResult\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvY2FzZS9bY2FzZV9pZF0vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRW1EO0FBQ1Q7QUFDSztBQUNjO0FBRTdELG1DQUFtQztBQUNuQyxNQUFNTSxhQUFhO0FBRUosU0FBU0M7O0lBQ3ZCLCtCQUErQjtJQUMvQixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR1IsK0NBQVFBLENBQUNHLDZEQUFVQSxDQUFDTSxTQUFTO0lBQ2pFLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHWCwrQ0FBUUEsQ0FBQyxDQUFDO0lBQzFDLDZDQUE2QztJQUM3QyxNQUFNLENBQUNZLGNBQWNDLGdCQUFnQixHQUFHYiwrQ0FBUUEsQ0FBQztJQUVqRCxrQ0FBa0M7SUFDbEMsTUFBTWMsZ0JBQWdCLE9BQU9DO1FBQzVCLElBQUk7WUFDSCxNQUFNQyxPQUFPLE1BQU1kLHVEQUFPQSxDQUFDYSxRQUFRUjtZQUNuQ0ksWUFBWUs7UUFDYixFQUFFLE9BQU9DLE9BQU87WUFDZkosZ0JBQWdCSSxNQUFNQyxPQUFPLElBQUk7UUFDbEM7SUFDRDtJQUVBakIsZ0RBQVNBLENBQUM7UUFDVCw2QkFBNkI7UUFDN0JhLGNBQWNUO1FBQ2QsZ0RBQWdEO1FBQ2hELE1BQU1jLGVBQWU7WUFDcEJYLGNBQWMsQ0FBQ1k7Z0JBQ2QsT0FBUUE7b0JBQ1AsS0FBS2pCLDZEQUFVQSxDQUFDTSxTQUFTO3dCQUN4QixPQUFPTiw2REFBVUEsQ0FBQ2tCLFVBQVU7b0JBQzdCLEtBQUtsQiw2REFBVUEsQ0FBQ2tCLFVBQVU7d0JBQ3pCLE9BQU9sQiw2REFBVUEsQ0FBQ21CLFFBQVE7b0JBQzNCLEtBQUtuQiw2REFBVUEsQ0FBQ21CLFFBQVE7d0JBQ3ZCLDZEQUE2RDt3QkFDN0Qsa0VBQWtFO3dCQUNsRSxPQUFPbkIsNkRBQVVBLENBQUNtQixRQUFRO29CQUMzQjt3QkFDQyxPQUFPRjtnQkFDVDtZQUNEO1FBQ0Q7UUFFQSxNQUFNRyxhQUFhQyxZQUFZTCxjQUFjO1FBRTdDLDRDQUE0QztRQUM1QyxPQUFPLElBQU1NLGNBQWNGO0lBQzVCLEdBQUcsRUFBRSxHQUFHLHdFQUF3RTtJQUVoRnRCLGdEQUFTQSxDQUFDO1FBQ1QsZ0RBQWdEO1FBQ2hEYSxjQUFjVDtJQUNmLEdBQUc7UUFBQ0U7S0FBVztJQUVmLDJDQUEyQztJQUMzQyxxQkFDQyw4REFBQ21COzswQkFDQSw4REFBQ0M7MEJBQUc7Ozs7OztZQUNIcEIsY0FBY0osNkRBQVVBLENBQUNtQixRQUFRLGtCQUFJLDhEQUFDTTswQkFBRTs7Ozs7OzBCQUN6Qyw4REFBQ3hCLHFFQUFlQTtnQkFBQ00sVUFBVUE7Ozs7OztZQUMxQkUsOEJBQWdCLDhEQUFDZ0I7O29CQUFFO29CQUFRaEI7Ozs7Ozs7Ozs7Ozs7QUFHL0I7R0ExRHdCTjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZGFzaGJvYXJkL2Nhc2UvW2Nhc2VfaWRdL3BhZ2UudHN4PzAzM2MiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0Q2FzZSB9IGZyb20gJ0AvY29ubmVjdG9yL2FwaSc7XG5pbXBvcnQgQ2FzZVN0YXR1cyBmcm9tICdAL2NvbnN0YW50cy9jYXNlU3RhdHVzJ1xuaW1wb3J0IENhc2VEYXRhRGlzcGxheSBmcm9tICdAL2NvbXBvbmVudHMvY2FzZS1kYXRhLWRpc3BsYXknO1xuXG4vLyBBIG1vY2sgY2FzZSBJRCBmb3IgZGVtb25zdHJhdGlvblxuY29uc3QgbW9ja0Nhc2VJZCA9ICdtb2NrLWNhc2UtaWQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXNlUmVzdWx0KCkge1xuXHQvLyBTdGF0ZSB0byBzdG9yZSB0aGUgY2FzZSBkYXRhXG5cdGNvbnN0IFtjYXNlU3RhdHVzLCBzZXRDYXNlU3RhdHVzXSA9IHVzZVN0YXRlKENhc2VTdGF0dXMuU1VCTUlUVEVEKTtcblx0Y29uc3QgW2Nhc2VEYXRhLCBzZXRDYXNlRGF0YV0gPSB1c2VTdGF0ZSh7fSk7XG5cdC8vIFN0YXRlIHRvIHN0b3JlIGFueSBwb3RlbnRpYWwgZXJyb3IgbWVzc2FnZVxuXHRjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xuXG5cdC8vIEZ1bmN0aW9uIHRvIGZldGNoIHRoZSBjYXNlIGRhdGFcblx0Y29uc3QgZmV0Y2hDYXNlRGF0YSA9IGFzeW5jIChjYXNlSWQpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgZGF0YSA9IGF3YWl0IGdldENhc2UoY2FzZUlkLCBjYXNlU3RhdHVzKTtcblx0XHRcdHNldENhc2VEYXRhKGRhdGEpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRzZXRFcnJvck1lc3NhZ2UoZXJyb3IubWVzc2FnZSB8fCAnRmFpbGVkIHRvIGZldGNoIGNhc2UgZGF0YScpO1xuXHRcdH1cblx0fTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdC8vIENhbGxpbmcgdGhlIGZldGNoIGZ1bmN0aW9uXG5cdFx0ZmV0Y2hDYXNlRGF0YShtb2NrQ2FzZUlkKTtcblx0XHQvLyBTaW11bGF0aW9uIHByZ3Jlc3NpdmUgcmVuZGVyaW5nIGluIGVhY2ggc3RlcHNcblx0XHRjb25zdCB1cGRhdGVTdGF0dXMgPSAoKSA9PiB7XG5cdFx0XHRzZXRDYXNlU3RhdHVzKChjdXJyZW50U3RhdHVzKSA9PiB7XG5cdFx0XHRcdHN3aXRjaCAoY3VycmVudFN0YXR1cykge1xuXHRcdFx0XHRcdGNhc2UgQ2FzZVN0YXR1cy5TVUJNSVRURUQ6XG5cdFx0XHRcdFx0XHRyZXR1cm4gQ2FzZVN0YXR1cy5QUk9DRVNTSU5HO1xuXHRcdFx0XHRcdGNhc2UgQ2FzZVN0YXR1cy5QUk9DRVNTSU5HOlxuXHRcdFx0XHRcdFx0cmV0dXJuIENhc2VTdGF0dXMuQ09NUExFVEU7XG5cdFx0XHRcdFx0Y2FzZSBDYXNlU3RhdHVzLkNPTVBMRVRFOlxuXHRcdFx0XHRcdFx0Ly8gSGVyZSB5b3UgbWlnaHQgd2FudCB0byBzdG9wIHVwZGF0aW5nIG9yIHJlc2V0IHRvIFNVQk1JVFRFRFxuXHRcdFx0XHRcdFx0Ly8gRm9yIHRoaXMgZXhhbXBsZSwgbGV0J3MganVzdCByZXR1cm4gQ09NUExFVEUgdG8gc3RvcCB0aGUgY3ljbGUuXG5cdFx0XHRcdFx0XHRyZXR1cm4gQ2FzZVN0YXR1cy5DT01QTEVURTtcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0cmV0dXJuIGN1cnJlbnRTdGF0dXM7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHRjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwodXBkYXRlU3RhdHVzLCAxMDAwMCk7XG5cblx0XHQvLyBDbGVhbnVwIHRoZSBpbnRlcnZhbCBvbiBjb21wb25lbnQgdW5tb3VudFxuXHRcdHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuXHR9LCBbXSk7IC8vIEVtcHR5IGRlcGVuZGVuY3kgYXJyYXkgbWVhbnMgdGhpcyBlZmZlY3QgcnVucyBvbmNlIG9uIGNvbXBvbmVudCBtb3VudFxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Ly8gQ2FsbGluZyB0aGUgZmV0Y2ggZnVuY3Rpb24gYWZ0ZXIgaW5pdCBsb2FkaW5nXG5cdFx0ZmV0Y2hDYXNlRGF0YShtb2NrQ2FzZUlkKTtcblx0fSwgW2Nhc2VTdGF0dXNdKTtcblxuXHQvLyBSZW5kZXIgdGhlIGNhc2UgZGF0YSBvciBhbiBlcnJvciBtZXNzYWdlXG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxoMT5DYXNlIFJlc3VsdDwvaDE+XG5cdFx0XHR7Y2FzZVN0YXR1cyAhPSBDYXNlU3RhdHVzLkNPTVBMRVRFICYmIDxwPlByb2dyZXNzaXZlIGxvYWRpbmcgbW9yZSAuLi4gPC9wPn1cblx0XHRcdDxDYXNlRGF0YURpc3BsYXkgY2FzZURhdGE9e2Nhc2VEYXRhfSAvPlxuXHRcdFx0e2Vycm9yTWVzc2FnZSAmJiA8cD5FcnJvcjoge2Vycm9yTWVzc2FnZX08L3A+fVxuXHRcdDwvZGl2PlxuXHQpO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZ2V0Q2FzZSIsIkNhc2VTdGF0dXMiLCJDYXNlRGF0YURpc3BsYXkiLCJtb2NrQ2FzZUlkIiwiQ2FzZVJlc3VsdCIsImNhc2VTdGF0dXMiLCJzZXRDYXNlU3RhdHVzIiwiU1VCTUlUVEVEIiwiY2FzZURhdGEiLCJzZXRDYXNlRGF0YSIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsImZldGNoQ2FzZURhdGEiLCJjYXNlSWQiLCJkYXRhIiwiZXJyb3IiLCJtZXNzYWdlIiwidXBkYXRlU3RhdHVzIiwiY3VycmVudFN0YXR1cyIsIlBST0NFU1NJTkciLCJDT01QTEVURSIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJkaXYiLCJoMSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/case/[case_id]/page.tsx\n"));

/***/ })

});