"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Home() {\n    _s();\n    const [tweetUrl, setTweetUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [analysis, setAnalysis] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const tweetId = extractTweetId(tweetUrl);\n        const tweetContent = await fetchTweetContent(tweetId);\n        const analysisResult = await analyzeTweet(tweetContent);\n        setAnalysis(analysisResult);\n    };\n    const extractTweetId = (url)=>{\n        const urlParts = url.split(\"/\");\n        return urlParts[urlParts.length - 1];\n    };\n    const fetchTweetContent = async (tweetId)=>{\n    // Fetch tweet content using Twitter API\n    };\n    const formStyle = {\n        fontFamily: \"'Franklin Gothic Medium', 'Arial Narrow'\",\n        textAlign: \"center\"\n    };\n    const formContainerStyle = {\n        display: \"flex\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        height: \"100vh\"\n    };\n    const formHoverStyle = {\n        backgroundColor: \"blue\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: formContainerStyle,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Tweet Analysis\"\n            }, void 0, false, {\n                fileName: \"/Users/codewithdev/Documents/opensource/x-feeds-analysis/x-feed-analysis/pages/index.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                style: formStyle,\n                onSubmit: handleSubmit,\n                onMouseOver: (e)=>e.currentTarget.style.backgroundColor = \"blue\",\n                onMouseOut: (e)=>e.currentTarget.style.backgroundColor = \"\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: tweetUrl,\n                        onChange: (e)=>setTweetUrl(e.target.value),\n                        placeholder: \"Enter Tweet URL\"\n                    }, void 0, false, {\n                        fileName: \"/Users/codewithdev/Documents/opensource/x-feeds-analysis/x-feed-analysis/pages/index.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Analyze\"\n                    }, void 0, false, {\n                        fileName: \"/Users/codewithdev/Documents/opensource/x-feeds-analysis/x-feed-analysis/pages/index.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/codewithdev/Documents/opensource/x-feeds-analysis/x-feed-analysis/pages/index.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            analysis && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Analysis Result\"\n                    }, void 0, false, {\n                        fileName: \"/Users/codewithdev/Documents/opensource/x-feeds-analysis/x-feed-analysis/pages/index.js\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: analysis.explanation\n                    }, void 0, false, {\n                        fileName: \"/Users/codewithdev/Documents/opensource/x-feeds-analysis/x-feed-analysis/pages/index.js\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/codewithdev/Documents/opensource/x-feeds-analysis/x-feed-analysis/pages/index.js\",\n                lineNumber: 58,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/codewithdev/Documents/opensource/x-feeds-analysis/x-feed-analysis/pages/index.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"xllsz2CB7ojESGh7gYTHiyd+WlY=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWlDO0FBRWxCLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0gsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDSSxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1NLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDLGNBQWM7UUFDaEIsTUFBTUMsVUFBVUMsZUFBZVI7UUFDL0IsTUFBTVMsZUFBZSxNQUFNQyxrQkFBa0JIO1FBQzdDLE1BQU1JLGlCQUFpQixNQUFNQyxhQUFhSDtRQUMxQ04sWUFBWVE7SUFDZDtJQUVBLE1BQU1ILGlCQUFpQixDQUFDSztRQUN0QixNQUFNQyxXQUFXRCxJQUFJRSxLQUFLLENBQUM7UUFDM0IsT0FBT0QsUUFBUSxDQUFDQSxTQUFTRSxNQUFNLEdBQUcsRUFBRTtJQUN0QztJQUVBLE1BQU1OLG9CQUFvQixPQUFPSDtJQUMvQix3Q0FBd0M7SUFDMUM7SUFFQSxNQUFNVSxZQUFZO1FBQ2hCQyxZQUFZO1FBQ1pDLFdBQVc7SUFDYjtJQUVBLE1BQU1DLHFCQUFxQjtRQUN6QkMsU0FBUztRQUNUQyxnQkFBZ0I7UUFDaEJDLFlBQVk7UUFDWkMsUUFBUTtJQUNWO0lBRUEsTUFBTUMsaUJBQWlCO1FBQ3JCQyxpQkFBaUI7SUFDbkI7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsT0FBT1I7OzBCQUNWLDhEQUFDUzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFDQ0YsT0FBT1g7Z0JBQ1BjLFVBQVUzQjtnQkFDVjRCLGFBQWEsQ0FBQzNCLElBQU9BLEVBQUU0QixhQUFhLENBQUNMLEtBQUssQ0FBQ0YsZUFBZSxHQUFHO2dCQUM3RFEsWUFBWSxDQUFDN0IsSUFBT0EsRUFBRTRCLGFBQWEsQ0FBQ0wsS0FBSyxDQUFDRixlQUFlLEdBQUc7O2tDQUU1RCw4REFBQ1M7d0JBQ0NDLE1BQUs7d0JBQ0xDLE9BQU9yQzt3QkFDUHNDLFVBQVUsQ0FBQ2pDLElBQU1KLFlBQVlJLEVBQUVrQyxNQUFNLENBQUNGLEtBQUs7d0JBQzNDRyxhQUFZOzs7Ozs7a0NBRWQsOERBQUNDO3dCQUFPTCxNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7WUFFdkJsQywwQkFDQyw4REFBQ3lCOztrQ0FDQyw4REFBQ2U7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0M7a0NBQUd6QyxTQUFTMEMsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xDO0dBOUR3QjdDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFt0d2VldFVybCwgc2V0VHdlZXRVcmxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbYW5hbHlzaXMsIHNldEFuYWx5c2lzXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHR3ZWV0SWQgPSBleHRyYWN0VHdlZXRJZCh0d2VldFVybCk7XG4gICAgY29uc3QgdHdlZXRDb250ZW50ID0gYXdhaXQgZmV0Y2hUd2VldENvbnRlbnQodHdlZXRJZCk7XG4gICAgY29uc3QgYW5hbHlzaXNSZXN1bHQgPSBhd2FpdCBhbmFseXplVHdlZXQodHdlZXRDb250ZW50KTtcbiAgICBzZXRBbmFseXNpcyhhbmFseXNpc1Jlc3VsdCk7XG4gIH07XG5cbiAgY29uc3QgZXh0cmFjdFR3ZWV0SWQgPSAodXJsKSA9PiB7XG4gICAgY29uc3QgdXJsUGFydHMgPSB1cmwuc3BsaXQoJy8nKTtcbiAgICByZXR1cm4gdXJsUGFydHNbdXJsUGFydHMubGVuZ3RoIC0gMV07XG4gIH07XG5cbiAgY29uc3QgZmV0Y2hUd2VldENvbnRlbnQgPSBhc3luYyAodHdlZXRJZCkgPT4ge1xuICAgIC8vIEZldGNoIHR3ZWV0IGNvbnRlbnQgdXNpbmcgVHdpdHRlciBBUElcbiAgfTtcblxuICBjb25zdCBmb3JtU3R5bGUgPSB7XG4gICAgZm9udEZhbWlseTogXCInRnJhbmtsaW4gR290aGljIE1lZGl1bScsICdBcmlhbCBOYXJyb3cnXCIsXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgfTtcblxuICBjb25zdCBmb3JtQ29udGFpbmVyU3R5bGUgPSB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gIH07XG5cbiAgY29uc3QgZm9ybUhvdmVyU3R5bGUgPSB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnYmx1ZScsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtmb3JtQ29udGFpbmVyU3R5bGV9PlxuICAgICAgPGgxPlR3ZWV0IEFuYWx5c2lzPC9oMT5cbiAgICAgIDxmb3JtXG4gICAgICAgIHN0eWxlPXtmb3JtU3R5bGV9XG4gICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XG4gICAgICAgIG9uTW91c2VPdmVyPXsoZSkgPT4gKGUuY3VycmVudFRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnYmx1ZScpfVxuICAgICAgICBvbk1vdXNlT3V0PXsoZSkgPT4gKGUuY3VycmVudFRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnJyl9XG4gICAgICA+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICB2YWx1ZT17dHdlZXRVcmx9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUd2VldFVybChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBUd2VldCBVUkxcIlxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BbmFseXplPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICB7YW5hbHlzaXMgJiYgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMj5BbmFseXNpcyBSZXN1bHQ8L2gyPlxuICAgICAgICAgIDxwPnthbmFseXNpcy5leHBsYW5hdGlvbn08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIb21lIiwidHdlZXRVcmwiLCJzZXRUd2VldFVybCIsImFuYWx5c2lzIiwic2V0QW5hbHlzaXMiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0d2VldElkIiwiZXh0cmFjdFR3ZWV0SWQiLCJ0d2VldENvbnRlbnQiLCJmZXRjaFR3ZWV0Q29udGVudCIsImFuYWx5c2lzUmVzdWx0IiwiYW5hbHl6ZVR3ZWV0IiwidXJsIiwidXJsUGFydHMiLCJzcGxpdCIsImxlbmd0aCIsImZvcm1TdHlsZSIsImZvbnRGYW1pbHkiLCJ0ZXh0QWxpZ24iLCJmb3JtQ29udGFpbmVyU3R5bGUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiaGVpZ2h0IiwiZm9ybUhvdmVyU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXYiLCJzdHlsZSIsImgxIiwiZm9ybSIsIm9uU3VibWl0Iiwib25Nb3VzZU92ZXIiLCJjdXJyZW50VGFyZ2V0Iiwib25Nb3VzZU91dCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsImgyIiwicCIsImV4cGxhbmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});