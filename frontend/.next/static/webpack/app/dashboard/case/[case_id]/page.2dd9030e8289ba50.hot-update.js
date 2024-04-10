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

/***/ "(app-pages-browser)/./connector/api.ts":
/*!**************************!*\
  !*** ./connector/api.ts ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCase: function() { return /* binding */ getCase; },\n/* harmony export */   postCase: function() { return /* binding */ postCase; }\n/* harmony export */ });\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/config */ \"(app-pages-browser)/./config.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants_caseStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/constants/caseStatus */ \"(app-pages-browser)/./constants/caseStatus.js\");\n\n\nasync function postCase() {\n    const apiUrl = (_config__WEBPACK_IMPORTED_MODULE_0___default().apiUrl) + \"/case\"; // Adjust this URL to your actual API endpoint\n    try {\n        const response = await fetch(apiUrl, {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({})\n        });\n        if (!response.ok) {\n            // If the response is not ok, throw an error to be caught in the catch block\n            const errorData = await response.json();\n            throw new Error(\"API Error: \".concat(errorData.message));\n        }\n        // Optionally handle the response data\n        const data = await response.json();\n        console.log(\"Success:\", data);\n    // Handle successful response\n    } catch (error) {\n        console.error(\"API call failed:\", error);\n    // Handle error scenario, possibly rethrow or manage error states\n    }\n}\n// Function to get a case by ID\nasync function getCase(caseId) {\n    let status = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : _constants_caseStatus__WEBPACK_IMPORTED_MODULE_1__[\"default\"].SUBMITTED;\n    const apiUrl = \"\".concat((_config__WEBPACK_IMPORTED_MODULE_0___default().apiUrl), \"/case/\").concat(caseId, \"?status=\").concat(status); // Adjust this URL to your actual API endpoint\n    try {\n        const response = await fetch(apiUrl, {\n            method: \"GET\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        if (!response.ok) {\n            // If the response is not ok, throw an error to be caught in the catch block\n            const errorData = await response.json();\n            throw new Error(\"API Error: \".concat(errorData.message));\n        }\n        // Handling the response data\n        const data = await response.json();\n        console.log(\"Retrieved Case:\", data);\n        return data;\n    // You can return this data or handle it as needed\n    } catch (error) {\n        console.error(\"Failed to retrieve case:\", error);\n    // Handle error scenario, possibly rethrow or manage error states\n    }\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2Nvbm5lY3Rvci9hcGkudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEI7QUFDa0I7QUFFekMsZUFBZUU7SUFDbEIsTUFBTUMsU0FBU0gsdURBQWEsR0FBRyxTQUFTLDhDQUE4QztJQUV0RixJQUFJO1FBQ0YsTUFBTUksV0FBVyxNQUFNQyxNQUFNRixRQUFRO1lBQ25DRyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBRWxCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hCO1FBRUEsSUFBSSxDQUFDTixTQUFTTyxFQUFFLEVBQUU7WUFDaEIsNEVBQTRFO1lBQzVFLE1BQU1DLFlBQVksTUFBTVIsU0FBU1MsSUFBSTtZQUNyQyxNQUFNLElBQUlDLE1BQU0sY0FBZ0MsT0FBbEJGLFVBQVVHLE9BQU87UUFDakQ7UUFFQSxzQ0FBc0M7UUFDdEMsTUFBTUMsT0FBTyxNQUFNWixTQUFTUyxJQUFJO1FBQ2hDSSxRQUFRQyxHQUFHLENBQUMsWUFBWUY7SUFDeEIsNkJBQTZCO0lBQy9CLEVBQUUsT0FBT0csT0FBTztRQUNkRixRQUFRRSxLQUFLLENBQUMsb0JBQW9CQTtJQUNsQyxpRUFBaUU7SUFDbkU7QUFDRjtBQUVGLCtCQUErQjtBQUN4QixlQUFlQyxRQUFRQyxNQUFjO1FBQUVDLFNBQUFBLGlFQUFpQnJCLDZEQUFVQSxDQUFDc0IsU0FBUztJQUMvRSxNQUFNcEIsU0FBUyxHQUF5QmtCLE9BQXRCckIsdURBQWEsRUFBQyxVQUF5QnNCLE9BQWpCRCxRQUFPLFlBQWlCLE9BQVBDLFNBQVUsOENBQThDO0lBRWpILElBQUk7UUFDRixNQUFNbEIsV0FBVyxNQUFNQyxNQUFNRixRQUFRO1lBQ25DRyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBRWxCO1FBQ0Y7UUFFQSxJQUFJLENBQUNILFNBQVNPLEVBQUUsRUFBRTtZQUNoQiw0RUFBNEU7WUFDNUUsTUFBTUMsWUFBWSxNQUFNUixTQUFTUyxJQUFJO1lBQ3JDLE1BQU0sSUFBSUMsTUFBTSxjQUFnQyxPQUFsQkYsVUFBVUcsT0FBTztRQUNqRDtRQUVBLDZCQUE2QjtRQUM3QixNQUFNQyxPQUFPLE1BQU1aLFNBQVNTLElBQUk7UUFDaENJLFFBQVFDLEdBQUcsQ0FBQyxtQkFBbUJGO1FBQy9CLE9BQU9BO0lBQ1Asa0RBQWtEO0lBQ3BELEVBQUUsT0FBT0csT0FBTztRQUNkRixRQUFRRSxLQUFLLENBQUMsNEJBQTRCQTtJQUMxQyxpRUFBaUU7SUFDbkU7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb25uZWN0b3IvYXBpLnRzPzk4MTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tICdAL2NvbmZpZyc7XG5pbXBvcnQgQ2FzZVN0YXR1cyBmcm9tICdAL2NvbnN0YW50cy9jYXNlU3RhdHVzJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBvc3RDYXNlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGFwaVVybCA9IGNvbmZpZy5hcGlVcmwgKyAnL2Nhc2UnOyAvLyBBZGp1c3QgdGhpcyBVUkwgdG8geW91ciBhY3R1YWwgQVBJIGVuZHBvaW50XG4gIFxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgLy8gSW5jbHVkZSBhbnkgYWRkaXRpb25hbCBoZWFkZXJzIHJlcXVpcmVkIGJ5IHlvdXIgQVBJXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHt9KSwgLy9UT0RPOiBhZGQgYm9keSBsYXRlclxuICAgICAgfSk7XG4gIFxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAvLyBJZiB0aGUgcmVzcG9uc2UgaXMgbm90IG9rLCB0aHJvdyBhbiBlcnJvciB0byBiZSBjYXVnaHQgaW4gdGhlIGNhdGNoIGJsb2NrXG4gICAgICAgIGNvbnN0IGVycm9yRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBUEkgRXJyb3I6ICR7ZXJyb3JEYXRhLm1lc3NhZ2V9YCk7XG4gICAgICB9XG4gIFxuICAgICAgLy8gT3B0aW9uYWxseSBoYW5kbGUgdGhlIHJlc3BvbnNlIGRhdGFcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zb2xlLmxvZygnU3VjY2VzczonLCBkYXRhKTtcbiAgICAgIC8vIEhhbmRsZSBzdWNjZXNzZnVsIHJlc3BvbnNlXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0FQSSBjYWxsIGZhaWxlZDonLCBlcnJvcik7XG4gICAgICAvLyBIYW5kbGUgZXJyb3Igc2NlbmFyaW8sIHBvc3NpYmx5IHJldGhyb3cgb3IgbWFuYWdlIGVycm9yIHN0YXRlc1xuICAgIH1cbiAgfVxuXG4vLyBGdW5jdGlvbiB0byBnZXQgYSBjYXNlIGJ5IElEXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FzZShjYXNlSWQ6IHN0cmluZywgc3RhdHVzOiBzdHJpbmcgPSBDYXNlU3RhdHVzLlNVQk1JVFRFRCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGFwaVVybCA9IGAke2NvbmZpZy5hcGlVcmx9L2Nhc2UvJHtjYXNlSWR9P3N0YXR1cz0ke3N0YXR1c31gOyAvLyBBZGp1c3QgdGhpcyBVUkwgdG8geW91ciBhY3R1YWwgQVBJIGVuZHBvaW50XG4gIFxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGFwaVVybCwge1xuICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAvLyBJbmNsdWRlIGFueSBuZWNlc3NhcnkgYXV0aG9yaXphdGlvbiBoZWFkZXJzIG9yIG90aGVycyBhcyBuZWVkZWRcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICBcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgLy8gSWYgdGhlIHJlc3BvbnNlIGlzIG5vdCBvaywgdGhyb3cgYW4gZXJyb3IgdG8gYmUgY2F1Z2h0IGluIHRoZSBjYXRjaCBibG9ja1xuICAgICAgICBjb25zdCBlcnJvckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQVBJIEVycm9yOiAke2Vycm9yRGF0YS5tZXNzYWdlfWApO1xuICAgICAgfVxuICBcbiAgICAgIC8vIEhhbmRsaW5nIHRoZSByZXNwb25zZSBkYXRhXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc29sZS5sb2coJ1JldHJpZXZlZCBDYXNlOicsIGRhdGEpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAvLyBZb3UgY2FuIHJldHVybiB0aGlzIGRhdGEgb3IgaGFuZGxlIGl0IGFzIG5lZWRlZFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gcmV0cmlldmUgY2FzZTonLCBlcnJvcik7XG4gICAgICAvLyBIYW5kbGUgZXJyb3Igc2NlbmFyaW8sIHBvc3NpYmx5IHJldGhyb3cgb3IgbWFuYWdlIGVycm9yIHN0YXRlc1xuICAgIH1cbiAgfSJdLCJuYW1lcyI6WyJjb25maWciLCJDYXNlU3RhdHVzIiwicG9zdENhc2UiLCJhcGlVcmwiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJlcnJvckRhdGEiLCJqc29uIiwiRXJyb3IiLCJtZXNzYWdlIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImdldENhc2UiLCJjYXNlSWQiLCJzdGF0dXMiLCJTVUJNSVRURUQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./connector/api.ts\n"));

/***/ })

});