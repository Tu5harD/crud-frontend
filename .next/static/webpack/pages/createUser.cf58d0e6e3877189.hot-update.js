"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/createUser",{

/***/ "./pages/createUser.js":
/*!*****************************!*\
  !*** ./pages/createUser.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_userSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redux/userSlice */ \"./pages/redux/userSlice.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst AddDataCard = ()=>{\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleAddData = async (e)=>{\n        e.preventDefault();\n        try {\n            const userData = {\n                name,\n                email\n            };\n            const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"https://crud-backend-beta-gray.vercel.app/create\", userData);\n            dispatch((0,_redux_userSlice__WEBPACK_IMPORTED_MODULE_3__.addUser)(response.data));\n            alert(\"Data is added...!\");\n        } catch (error) {\n            console.error(\"Error creating user:\", error);\n            if (error.response) {\n                console.error(\"Server responded with:\", error.response.status, error.response.data);\n            }\n            setError(\"Error creating user. Please try again.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-md mx-auto bg-white rounded-md shadow-md p-6\",\n        children: [\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-red-500\",\n                children: error\n            }, void 0, false, {\n                fileName: \"/Users/tushardukane/Documents/web/CRUD/client/pages/createUser.js\",\n                lineNumber: 33,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-lg font-semibold mb-4\",\n                children: \"Add Data\"\n            }, void 0, false, {\n                fileName: \"/Users/tushardukane/Documents/web/CRUD/client/pages/createUser.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"block text-gray-700 text-sm font-bold mb-2\",\n                        htmlFor: \"name\",\n                        children: \"Name\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tushardukane/Documents/web/CRUD/client/pages/createUser.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"border rounded-md py-2 px-3 text-gray-700 w-full\",\n                        type: \"text\",\n                        id: \"name\",\n                        value: name,\n                        onChange: (e)=>setName(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/tushardukane/Documents/web/CRUD/client/pages/createUser.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tushardukane/Documents/web/CRUD/client/pages/createUser.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"block text-gray-700 text-sm font-bold mb-2\",\n                        htmlFor: \"email\",\n                        children: \"Email\"\n                    }, void 0, false, {\n                        fileName: \"/Users/tushardukane/Documents/web/CRUD/client/pages/createUser.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"border rounded-md py-2 px-3 text-gray-700 w-full\",\n                        type: \"email\",\n                        id: \"email\",\n                        value: email,\n                        onChange: (e)=>setEmail(e.target.value)\n                    }, void 0, false, {\n                        fileName: \"/Users/tushardukane/Documents/web/CRUD/client/pages/createUser.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tushardukane/Documents/web/CRUD/client/pages/createUser.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded\",\n                onClick: handleAddData,\n                children: \"Add\"\n            }, void 0, false, {\n                fileName: \"/Users/tushardukane/Documents/web/CRUD/client/pages/createUser.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tushardukane/Documents/web/CRUD/client/pages/createUser.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AddDataCard, \"prpX2TN9ow4S9JPbiW9HaT4rrJw=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch\n    ];\n});\n_c = AddDataCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddDataCard);\nvar _c;\n$RefreshReg$(_c, \"AddDataCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jcmVhdGVVc2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNjO0FBQ047QUFDVTtBQUNGO0FBRTFDLE1BQU1LLGNBQWMsSUFBTTs7SUFDeEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ00sT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNUSxXQUFXTix3REFBV0E7SUFFNUIsTUFBTSxDQUFDTyxPQUFPQyxTQUFTLEdBQUdWLCtDQUFRQSxDQUFDLElBQUk7SUFFdkMsTUFBTVcsZ0JBQWdCLE9BQU9DLElBQU07UUFDakNBLEVBQUVDLGNBQWM7UUFDaEIsSUFBSTtZQUNGLE1BQU1DLFdBQVc7Z0JBQUVWO2dCQUFNRTtZQUFNO1lBQy9CLE1BQU1TLFdBQVcsTUFBTWpCLGtEQUFVLENBQUMsb0RBQW9EZ0I7WUFDdEZOLFNBQVNQLHlEQUFPQSxDQUFDYyxTQUFTRSxJQUFJO1lBQzlCQyxNQUFNO1FBQ1IsRUFBRSxPQUFPVCxPQUFPO1lBQ2RVLFFBQVFWLEtBQUssQ0FBQyx3QkFBd0JBO1lBQ3RDLElBQUlBLE1BQU1NLFFBQVEsRUFBRTtnQkFDbEJJLFFBQVFWLEtBQUssQ0FBQywwQkFBMEJBLE1BQU1NLFFBQVEsQ0FBQ0ssTUFBTSxFQUFFWCxNQUFNTSxRQUFRLENBQUNFLElBQUk7WUFDcEYsQ0FBQztZQUNEUCxTQUFTO1FBQ1g7SUFDRjtJQUdBLHFCQUNFLDhEQUFDVztRQUFJQyxXQUFVOztZQUNaYix1QkFBUyw4REFBQ1k7Z0JBQUlDLFdBQVU7MEJBQWdCYjs7Ozs7OzBCQUV6Qyw4REFBQ2M7Z0JBQUdELFdBQVU7MEJBQTZCOzs7Ozs7MEJBQzNDLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNFO3dCQUNDRixXQUFVO3dCQUNWRyxTQUFRO2tDQUNUOzs7Ozs7a0NBR0QsOERBQUNDO3dCQUNDSixXQUFVO3dCQUNWSyxNQUFLO3dCQUNMQyxJQUFHO3dCQUNIQyxPQUFPekI7d0JBQ1AwQixVQUFVLENBQUNsQixJQUFNUCxRQUFRTyxFQUFFbUIsTUFBTSxDQUFDRixLQUFLOzs7Ozs7Ozs7Ozs7MEJBRzNDLDhEQUFDUjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNFO3dCQUNDRixXQUFVO3dCQUNWRyxTQUFRO2tDQUNUOzs7Ozs7a0NBR0QsOERBQUNDO3dCQUNDSixXQUFVO3dCQUNWSyxNQUFLO3dCQUNMQyxJQUFHO3dCQUNIQyxPQUFPdkI7d0JBQ1B3QixVQUFVLENBQUNsQixJQUFNTCxTQUFTSyxFQUFFbUIsTUFBTSxDQUFDRixLQUFLOzs7Ozs7Ozs7Ozs7MEJBRzVDLDhEQUFDRztnQkFDQ1YsV0FBVTtnQkFDVlcsU0FBU3RCOzBCQUNWOzs7Ozs7Ozs7Ozs7QUFLUDtHQW5FTVI7O1FBR2FELG9EQUFXQTs7O0tBSHhCQztBQXFFTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jcmVhdGVVc2VyLmpzP2IzMTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCJ0YWlsd2luZGNzcy90YWlsd2luZC5jc3NcIjtcbmltcG9ydCB7IGFkZFVzZXIgfSBmcm9tIFwiLi9yZWR1eC91c2VyU2xpY2VcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmNvbnN0IEFkZERhdGFDYXJkID0gKCkgPT4ge1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlQWRkRGF0YSA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1c2VyRGF0YSA9IHsgbmFtZSwgZW1haWwgfTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHBzOi8vY3J1ZC1iYWNrZW5kLWJldGEtZ3JheS52ZXJjZWwuYXBwL2NyZWF0ZVwiLCB1c2VyRGF0YSk7XG4gICAgICBkaXNwYXRjaChhZGRVc2VyKHJlc3BvbnNlLmRhdGEpKTtcbiAgICAgIGFsZXJ0KFwiRGF0YSBpcyBhZGRlZC4uLiFcIik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyB1c2VyOlwiLCBlcnJvcik7XG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlNlcnZlciByZXNwb25kZWQgd2l0aDpcIiwgZXJyb3IucmVzcG9uc2Uuc3RhdHVzLCBlcnJvci5yZXNwb25zZS5kYXRhKTtcbiAgICAgIH1cbiAgICAgIHNldEVycm9yKFwiRXJyb3IgY3JlYXRpbmcgdXNlci4gUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gICAgfVxuICB9O1xuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LW1kIG14LWF1dG8gYmctd2hpdGUgcm91bmRlZC1tZCBzaGFkb3ctbWQgcC02XCI+XG4gICAgICB7ZXJyb3IgJiYgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDBcIj57ZXJyb3J9PC9kaXY+fVxuXG4gICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LXNlbWlib2xkIG1iLTRcIj5BZGQgRGF0YTwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cbiAgICAgICAgPGxhYmVsXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1ncmF5LTcwMCB0ZXh0LXNtIGZvbnQtYm9sZCBtYi0yXCJcbiAgICAgICAgICBodG1sRm9yPVwibmFtZVwiXG4gICAgICAgID5cbiAgICAgICAgICBOYW1lXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkLW1kIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIHctZnVsbFwiXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgIDxsYWJlbFxuICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtZ3JheS03MDAgdGV4dC1zbSBmb250LWJvbGQgbWItMlwiXG4gICAgICAgICAgaHRtbEZvcj1cImVtYWlsXCJcbiAgICAgICAgPlxuICAgICAgICAgIEVtYWlsXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkLW1kIHB5LTIgcHgtMyB0ZXh0LWdyYXktNzAwIHctZnVsbFwiXG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICBpZD1cImVtYWlsXCJcbiAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWRcIlxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVBZGREYXRhfVxuICAgICAgPlxuICAgICAgICBBZGRcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkRGF0YUNhcmQ7XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJSZWFjdCIsInVzZVN0YXRlIiwiYWRkVXNlciIsInVzZURpc3BhdGNoIiwiQWRkRGF0YUNhcmQiLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJkaXNwYXRjaCIsImVycm9yIiwic2V0RXJyb3IiLCJoYW5kbGVBZGREYXRhIiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlckRhdGEiLCJyZXNwb25zZSIsInBvc3QiLCJkYXRhIiwiYWxlcnQiLCJjb25zb2xlIiwic3RhdHVzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/createUser.js\n"));

/***/ })

});