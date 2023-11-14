"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users",{

/***/ "./pages/users.js":
/*!************************!*\
  !*** ./pages/users.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_userSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./redux/userSlice */ \"./pages/redux/userSlice.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst UserTable = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    const users = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.users.users);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchUserData = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:3001/get\");\n                console.log(\"Response data:\", response.data);\n                dispatch((0,_redux_userSlice__WEBPACK_IMPORTED_MODULE_4__.getUser)(response.data));\n            } catch (error) {\n                console.error(\"Error fetching users:\", error);\n            }\n        };\n        fetchUserData();\n    }, []);\n    const handleDelete = async (id)=>{\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"][\"delete\"](\"http://localhost:3001/delete/\" + id);\n            dispatch((0,_redux_userSlice__WEBPACK_IMPORTED_MODULE_4__.deleteUser)({\n                id\n            })).catch((error)=>{\n                console.error(\"Error deleting user:\", error);\n            // Handle error or inform the user about the failure\n            });\n        } catch (error) {\n            console.error(\"Error:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n        className: \"min-w-full divide-y divide-gray-200\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                className: \"bg-gray-50\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            className: \"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider\",\n                            children: \"Name\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tushardukane/Documents/web/CRUD/client/pages/users.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            className: \"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider\",\n                            children: \"Email\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tushardukane/Documents/web/CRUD/client/pages/users.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            className: \"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider\",\n                            children: \"Actions\"\n                        }, void 0, false, {\n                            fileName: \"/Users/tushardukane/Documents/web/CRUD/client/pages/users.js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/tushardukane/Documents/web/CRUD/client/pages/users.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/tushardukane/Documents/web/CRUD/client/pages/users.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                className: \"bg-white divide-y divide-gray-200\",\n                children: users.map((data)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                className: \"px-6 py-4 whitespace-nowrap\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-sm text-gray-900\",\n                                    children: data.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/tushardukane/Documents/web/CRUD/client/pages/users.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/tushardukane/Documents/web/CRUD/client/pages/users.js\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                className: \"px-6 py-4 whitespace-nowrap\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-sm text-gray-900\",\n                                    children: data.email\n                                }, void 0, false, {\n                                    fileName: \"/Users/tushardukane/Documents/web/CRUD/client/pages/users.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/tushardukane/Documents/web/CRUD/client/pages/users.js\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                className: \"px-6 py-4 whitespace-nowrap\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>handleDelete(data.id),\n                                    className: \"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded\",\n                                    children: \"Delete\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/tushardukane/Documents/web/CRUD/client/pages/users.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/tushardukane/Documents/web/CRUD/client/pages/users.js\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, data.id, true, {\n                        fileName: \"/Users/tushardukane/Documents/web/CRUD/client/pages/users.js\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"/Users/tushardukane/Documents/web/CRUD/client/pages/users.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tushardukane/Documents/web/CRUD/client/pages/users.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, undefined);\n};\n_s(UserTable, \"4X33Gq5WNquvmpYNZCa4A/J7s1c=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = UserTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserTable); // import React, { useEffect, useState } from \"react\";\n // import \"tailwindcss/tailwind.css\";\n // import axios from \"axios\";\n // const UserTable = ({ handleUpdate, handleDelete }) => {\n //   // const users = [\n //   //   {id: 1, name: \"Tushar Dukane\", email: \"xyz@gmail.com\"}\n //   // ]\n //   // const [users, setUsers] = useState([]);\n //   // useEffect(() => {\n //   //   const fetchData = async () => {\n //   //     try {\n //   //       const response = await axios.get(\"http://localhost:3001/usrdatas\");\n //   //       setUsers(response.data);\n //   //     } catch (error) {\n //   //       console.error(\"Error fetching users:\", error);\n //   //     }\n //   //   };\n //   //   fetchData();\n //   // }, []);\n //   const [users, setUsers] = useState([]);\n //   useEffect(() => {\n //     // Replace the URL with the correct API endpoint\n //     axios\n //       .get(\"http://localhost:3001/usrdatas\") // Assuming it's a valid REST API URL\n //       .then((response) => setUsers(response.data))\n //       .catch((err) => console.log(err));\n //   }, []);\n //   return (\n //     <table className=\"min-w-full divide-y divide-gray-200\">\n //       <thead className=\"bg-gray-50\">\n //         <tr>\n //           <th className=\"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider\">\n //             Name\n //           </th>\n //           <th className=\"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider\">\n //             Email\n //           </th>\n //           <th className=\"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider\">\n //             Actions\n //           </th>\n //         </tr>\n //       </thead>\n //       <tbody className=\"bg-white divide-y divide-gray-200\">\n //         {users.map((user) => (\n //           <tr key={user.id}>\n //             <td className=\"px-6 py-4 whitespace-nowrap\">\n //               <div className=\"text-sm text-gray-900\">{user.name}</div>\n //             </td>\n //             <td className=\"px-6 py-4 whitespace-nowrap\">\n //               <div className=\"text-sm text-gray-900\">{user.email}</div>\n //             </td>\n //             <td className=\"px-6 py-4 whitespace-nowrap\">\n //               <button\n //                 onClick={() => handleUpdate(user.id)}\n //                 className=\"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2\"\n //               >\n //                 Update\n //               </button>\n //               <button\n //                 onClick={() => handleDelete(user.id)}\n //                 className=\"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded\"\n //               >\n //                 Delete\n //               </button>\n //             </td>\n //           </tr>\n //         ))}\n //       </tbody>\n //     </table>\n //   );\n // };\n // export default UserTable;\nvar _c;\n$RefreshReg$(_c, \"UserTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtDQUNsQiw0R0FBNEc7Q0FDNUcsc0JBQXNCO0NBQ3RCLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLDhEQUE4RDtDQUM5RCxpQ0FBaUM7Q0FDakMsK0JBQStCO0NBQy9CLDJEQUEyRDtDQUMzRCx5RUFBeUU7Q0FDekUsb0JBQW9CO0NBQ3BCLDJEQUEyRDtDQUMzRCwwRUFBMEU7Q0FDMUUsb0JBQW9CO0NBQ3BCLDJEQUEyRDtDQUMzRCx3QkFBd0I7Q0FDeEIsd0RBQXdEO0NBQ3hELHdHQUF3RztDQUN4RyxrQkFBa0I7Q0FDbEIseUJBQXlCO0NBQ3pCLDBCQUEwQjtDQUMxQix3QkFBd0I7Q0FDeEIsd0RBQXdEO0NBQ3hELGlHQUFpRztDQUNqRyxrQkFBa0I7Q0FDbEIseUJBQXlCO0NBQ3pCLDBCQUEwQjtDQUMxQixvQkFBb0I7Q0FDcEIsa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCxpQkFBaUI7Q0FDakIsZUFBZTtDQUNmLE9BQU87Q0FDUCxLQUFLO0NBRUwsNEJBQTRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXJzLmpzPzAwNjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBcInRhaWx3aW5kY3NzL3RhaWx3aW5kLmNzc1wiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBnZXRVc2VyLCBkZWxldGVVc2VyIH0gZnJvbSBcIi4vcmVkdXgvdXNlclNsaWNlXCI7XG5jb25zdCBVc2VyVGFibGUgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgdXNlcnMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXJzLnVzZXJzKTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hVc2VyRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2dldFwiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZXNwb25zZSBkYXRhOlwiLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgZGlzcGF0Y2goZ2V0VXNlcihyZXNwb25zZS5kYXRhKSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgdXNlcnM6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuICBcbiAgICBmZXRjaFVzZXJEYXRhKCk7XG4gIH0sIFtdKTtcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICBhd2FpdCBheGlvcy5kZWxldGUoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvZGVsZXRlL1wiICsgaWQpXG4gICAgICAgIGRpc3BhdGNoKGRlbGV0ZVVzZXIoe2lkfSkpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGRlbGV0aW5nIHVzZXI6XCIsIGVycm9yKTtcbiAgICAgICAgICAvLyBIYW5kbGUgZXJyb3Igb3IgaW5mb3JtIHRoZSB1c2VyIGFib3V0IHRoZSBmYWlsdXJlXG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPHRhYmxlIGNsYXNzTmFtZT1cIm1pbi13LWZ1bGwgZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwXCI+XG4gICAgICA8dGhlYWQgY2xhc3NOYW1lPVwiYmctZ3JheS01MFwiPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWxlZnQgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiPlxuICAgICAgICAgICAgTmFtZVxuICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgPHRoIGNsYXNzTmFtZT1cInB4LTYgcHktMyB0ZXh0LWxlZnQgdGV4dC14cyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNTAwIHVwcGVyY2FzZSB0cmFja2luZy13aWRlclwiPlxuICAgICAgICAgICAgRW1haWxcbiAgICAgICAgICA8L3RoPlxuICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1sZWZ0IHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIj5cbiAgICAgICAgICAgIEFjdGlvbnNcbiAgICAgICAgICA8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90aGVhZD5cbiAgICAgIDx0Ym9keSBjbGFzc05hbWU9XCJiZy13aGl0ZSBkaXZpZGUteSBkaXZpZGUtZ3JheS0yMDBcIj5cbiAgICAgICAge3VzZXJzLm1hcCgoZGF0YSkgPT4gKFxuICAgICAgICAgIDx0ciBrZXk9e2RhdGEuaWR9PlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTkwMFwiPntkYXRhLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTYgcHktNCB3aGl0ZXNwYWNlLW5vd3JhcFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTkwMFwiPntkYXRhLmVtYWlsfTwvZGl2PlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShkYXRhLmlkKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIGhvdmVyOmJnLXJlZC03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICApKX1cbiAgICAgIDwvdGJvZHk+XG4gICAgPC90YWJsZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJUYWJsZTtcblxuLy8gaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBcInRhaWx3aW5kY3NzL3RhaWx3aW5kLmNzc1wiO1xuLy8gaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuLy8gY29uc3QgVXNlclRhYmxlID0gKHsgaGFuZGxlVXBkYXRlLCBoYW5kbGVEZWxldGUgfSkgPT4ge1xuLy8gICAvLyBjb25zdCB1c2VycyA9IFtcbi8vICAgLy8gICB7aWQ6IDEsIG5hbWU6IFwiVHVzaGFyIER1a2FuZVwiLCBlbWFpbDogXCJ4eXpAZ21haWwuY29tXCJ9XG4vLyAgIC8vIF1cblxuLy8gICAvLyBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlKFtdKTtcbi8vICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbi8vICAgLy8gICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4vLyAgIC8vICAgICB0cnkge1xuLy8gICAvLyAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS91c3JkYXRhc1wiKTtcbi8vICAgLy8gICAgICAgc2V0VXNlcnMocmVzcG9uc2UuZGF0YSk7XG4vLyAgIC8vICAgICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAvLyAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgdXNlcnM6XCIsIGVycm9yKTtcbi8vICAgLy8gICAgIH1cbi8vICAgLy8gICB9O1xuLy8gICAvLyAgIGZldGNoRGF0YSgpO1xuLy8gICAvLyB9LCBbXSk7XG4vLyAgIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGUoW10pO1xuXG4vLyAgIHVzZUVmZmVjdCgoKSA9PiB7XG4vLyAgICAgLy8gUmVwbGFjZSB0aGUgVVJMIHdpdGggdGhlIGNvcnJlY3QgQVBJIGVuZHBvaW50XG4vLyAgICAgYXhpb3Ncbi8vICAgICAgIC5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvdXNyZGF0YXNcIikgLy8gQXNzdW1pbmcgaXQncyBhIHZhbGlkIFJFU1QgQVBJIFVSTFxuLy8gICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBzZXRVc2VycyhyZXNwb25zZS5kYXRhKSlcbi8vICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbi8vICAgfSwgW10pO1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDx0YWJsZSBjbGFzc05hbWU9XCJtaW4tdy1mdWxsIGRpdmlkZS15IGRpdmlkZS1ncmF5LTIwMFwiPlxuLy8gICAgICAgPHRoZWFkIGNsYXNzTmFtZT1cImJnLWdyYXktNTBcIj5cbi8vICAgICAgICAgPHRyPlxuLy8gICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1sZWZ0IHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIj5cbi8vICAgICAgICAgICAgIE5hbWVcbi8vICAgICAgICAgICA8L3RoPlxuLy8gICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJweC02IHB5LTMgdGV4dC1sZWZ0IHRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMCB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZXJcIj5cbi8vICAgICAgICAgICAgIEVtYWlsXG4vLyAgICAgICAgICAgPC90aD5cbi8vICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwicHgtNiBweS0zIHRleHQtbGVmdCB0ZXh0LXhzIGZvbnQtbWVkaXVtIHRleHQtZ3JheS01MDAgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGVyXCI+XG4vLyAgICAgICAgICAgICBBY3Rpb25zXG4vLyAgICAgICAgICAgPC90aD5cbi8vICAgICAgICAgPC90cj5cbi8vICAgICAgIDwvdGhlYWQ+XG4vLyAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwiYmctd2hpdGUgZGl2aWRlLXkgZGl2aWRlLWdyYXktMjAwXCI+XG4vLyAgICAgICAgIHt1c2Vycy5tYXAoKHVzZXIpID0+IChcbi8vICAgICAgICAgICA8dHIga2V5PXt1c2VyLmlkfT5cbi8vICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cbi8vICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj57dXNlci5uYW1lfTwvZGl2PlxuLy8gICAgICAgICAgICAgPC90ZD5cbi8vICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJweC02IHB5LTQgd2hpdGVzcGFjZS1ub3dyYXBcIj5cbi8vICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS05MDBcIj57dXNlci5lbWFpbH08L2Rpdj5cbi8vICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicHgtNiBweS00IHdoaXRlc3BhY2Utbm93cmFwXCI+XG4vLyAgICAgICAgICAgICAgIDxidXR0b25cbi8vICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVVcGRhdGUodXNlci5pZCl9XG4vLyAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS03MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgbXItMlwiXG4vLyAgICAgICAgICAgICAgID5cbi8vICAgICAgICAgICAgICAgICBVcGRhdGVcbi8vICAgICAgICAgICAgICAgPC9idXR0b24+XG4vLyAgICAgICAgICAgICAgIDxidXR0b25cbi8vICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUodXNlci5pZCl9XG4vLyAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcmVkLTUwMCBob3ZlcjpiZy1yZWQtNzAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTIgcHgtNCByb3VuZGVkXCJcbi8vICAgICAgICAgICAgICAgPlxuLy8gICAgICAgICAgICAgICAgIERlbGV0ZVxuLy8gICAgICAgICAgICAgICA8L2J1dHRvbj5cbi8vICAgICAgICAgICAgIDwvdGQ+XG4vLyAgICAgICAgICAgPC90cj5cbi8vICAgICAgICAgKSl9XG4vLyAgICAgICA8L3Rib2R5PlxuLy8gICAgIDwvdGFibGU+XG4vLyAgICk7XG4vLyB9O1xuXG4vLyBleHBvcnQgZGVmYXVsdCBVc2VyVGFibGU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsImdldFVzZXIiLCJkZWxldGVVc2VyIiwiVXNlclRhYmxlIiwiZGlzcGF0Y2giLCJ1c2VycyIsInN0YXRlIiwiZmV0Y2hVc2VyRGF0YSIsInJlc3BvbnNlIiwiZ2V0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJlcnJvciIsImhhbmRsZURlbGV0ZSIsImlkIiwiZGVsZXRlIiwiY2F0Y2giLCJ0YWJsZSIsImNsYXNzTmFtZSIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5IiwibWFwIiwidGQiLCJkaXYiLCJuYW1lIiwiZW1haWwiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/users.js\n"));

/***/ })

});