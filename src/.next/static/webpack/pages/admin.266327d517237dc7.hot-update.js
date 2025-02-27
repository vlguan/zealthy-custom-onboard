"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/admin",{

/***/ "./components/adminPage.tsx":
/*!**********************************!*\
  !*** ./components/adminPage.tsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"../node_modules/axios/lib/axios.js\");\n\nvar _s = $RefreshSig$();\n\n\n// import './AdminPage.css';\nconsole.log(\"http://localhost:5000\");\n// const isDebug = process.env.REACT_APP_DEBUG === 'true';\nconst AdminPage = ()=>{\n    _s();\n    const apiUrl = \"http://localhost:5000\";\n    const [page2, setPage2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [page3, setPage3] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const [options] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        'about',\n        'address',\n        'birthdate'\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AdminPage.useEffect\": ()=>{\n            const checkFields = {\n                \"AdminPage.useEffect.checkFields\": async ()=>{\n                    console.log(apiUrl);\n                    try {\n                        const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"\".concat(apiUrl, \"/fields\"));\n                        const fields = response.data;\n                        // console.log(fields.page2)\n                        // setOptions(fields)\n                        setPage2(fields.page2 || []);\n                        setPage3(fields.page3[0] || '');\n                    } catch (error) {\n                        console.error(\"error fetching fields:\", error);\n                    }\n                }\n            }[\"AdminPage.useEffect.checkFields\"];\n            checkFields();\n        }\n    }[\"AdminPage.useEffect\"], []);\n    const sendFields = async ()=>{\n        try {\n            const allSelectedOptions = [\n                ...page2,\n                page3\n            ];\n            const uniqueOptions = new Set(allSelectedOptions);\n            console.log(page2, page3);\n            //check if user has inputted page options with constraints described in doc\n            if (page2.toString() === [\n                \"\",\n                \"\"\n            ].toString() || page3.toString() === \"b\".toString()) {\n                console.log(page2, page3);\n                alert('Error: You need to atleast one component per page!');\n                return;\n            //validator to check if unique options are selected in admin component\n            } else if (uniqueOptions.size != allSelectedOptions.length) {\n                alert(\"Error: Duplicate options are not allowed!\");\n                return;\n            }\n            const results = {\n                page2: page2,\n                page3: page3\n            };\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"\".concat(apiUrl, \"/fields\"), results);\n            console.log(response);\n            alert('Successfully changed user onboarding workflow');\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const handlePage2Change = (index, value)=>{\n        const updatedPage2 = [\n            ...page2\n        ];\n        updatedPage2[index] = value;\n        setPage2(updatedPage2);\n    };\n    const handlePage3Change = (value)=>{\n        setPage3(value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"admin-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"instructions\",\n                children: \"Select User workflow for Onboarding\"\n            }, void 0, false, {\n                fileName: \"/Users/vlguan/Documents/Code/zealthy_challenge/zealthy-user-onboard/src/components/adminPage.tsx\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"column\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Page 2\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vlguan/Documents/Code/zealthy_challenge/zealthy-user-onboard/src/components/adminPage.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    }, undefined),\n                    page2.map((selectedOption, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                                className: \"select-dropdown\",\n                                value: selectedOption || '',\n                                onChange: (e)=>handlePage2Change(index, e.target.value),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: \"\",\n                                        children: \"Select an option\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vlguan/Documents/Code/zealthy_challenge/zealthy-user-onboard/src/components/adminPage.tsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    options.map((option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                            value: option,\n                                            children: option\n                                        }, option, false, {\n                                            fileName: \"/Users/vlguan/Documents/Code/zealthy_challenge/zealthy-user-onboard/src/components/adminPage.tsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 33\n                                        }, undefined))\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/vlguan/Documents/Code/zealthy_challenge/zealthy-user-onboard/src/components/adminPage.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 25\n                            }, undefined)\n                        }, index, false, {\n                            fileName: \"/Users/vlguan/Documents/Code/zealthy_challenge/zealthy-user-onboard/src/components/adminPage.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 21\n                        }, undefined)),\n                    page2.length < 2 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"add-field-button\",\n                        onClick: ()=>setPage2([\n                                ...page2,\n                                ''\n                            ]),\n                        children: \"Add Field\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vlguan/Documents/Code/zealthy_challenge/zealthy-user-onboard/src/components/adminPage.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vlguan/Documents/Code/zealthy_challenge/zealthy-user-onboard/src/components/adminPage.tsx\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"column\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Page 3\"\n                    }, void 0, false, {\n                        fileName: \"/Users/vlguan/Documents/Code/zealthy_challenge/zealthy-user-onboard/src/components/adminPage.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        className: \"select-dropdown\",\n                        value: page3,\n                        onChange: (e)=>handlePage3Change(e.target.value),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"\",\n                                children: \"Select an option\"\n                            }, void 0, false, {\n                                fileName: \"/Users/vlguan/Documents/Code/zealthy_challenge/zealthy-user-onboard/src/components/adminPage.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 21\n                            }, undefined),\n                            options.map((option)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: option,\n                                    children: option\n                                }, option, false, {\n                                    fileName: \"/Users/vlguan/Documents/Code/zealthy_challenge/zealthy-user-onboard/src/components/adminPage.tsx\",\n                                    lineNumber: 104,\n                                    columnNumber: 25\n                                }, undefined))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/vlguan/Documents/Code/zealthy_challenge/zealthy-user-onboard/src/components/adminPage.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/vlguan/Documents/Code/zealthy_challenge/zealthy-user-onboard/src/components/adminPage.tsx\",\n                lineNumber: 95,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"submit-button-container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: sendFields,\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"/Users/vlguan/Documents/Code/zealthy_challenge/zealthy-user-onboard/src/components/adminPage.tsx\",\n                    lineNumber: 112,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/vlguan/Documents/Code/zealthy_challenge/zealthy-user-onboard/src/components/adminPage.tsx\",\n                lineNumber: 111,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vlguan/Documents/Code/zealthy_challenge/zealthy-user-onboard/src/components/adminPage.tsx\",\n        lineNumber: 70,\n        columnNumber: 9\n    }, undefined);\n};\n_s(AdminPage, \"C+qbvnMvtjENASxZkjB7OcQ3kXg=\");\n_c = AdminPage;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminPage);\nvar _c;\n$RefreshReg$(_c, \"AdminPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFvQmIsT0FBT2E7c0RBQ3ZCQTsyQ0FEUUE7Ozs7Ozs7Ozs7OzJCQVJmZDs7Ozs7b0JBZWJ0QixNQUFNa0IsTUFBTSxHQUFHLG1CQUNaLDhEQUFDbUI7d0JBQU9WLFdBQVU7d0JBQW1CVyxTQUFTLElBQU1yQyxTQUFTO21DQUFJRDtnQ0FBTzs2QkFBRztrQ0FBRzs7Ozs7Ozs7Ozs7OzBCQUd0Riw4REFBQzBCO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0U7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0c7d0JBQ0dMLFdBQVU7d0JBQ1ZKLE9BQU9yQjt3QkFDUCtCLFVBQVUsQ0FBQ0MsSUFBTVQsa0JBQWtCUyxFQUFFQyxNQUFNLENBQUNaLEtBQUs7OzBDQUVqRCw4REFBQ2E7Z0NBQU9iLE9BQU07MENBQUc7Ozs7Ozs0QkFDaEJuQixRQUFRMEIsR0FBRyxDQUFDTSxDQUFBQSx1QkFDVCw4REFBQ0E7b0NBQW9CYixPQUFPYTs4Q0FDdkJBO21DQURRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBT3pCLDhEQUFDVjtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ1U7b0JBQU9DLFNBQVMzQjs4QkFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJN0M7R0F6R01iO0tBQUFBO0FBMkdOLGlFQUFlQSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvdmxndWFuL0RvY3VtZW50cy9Db2RlL3plYWx0aHlfY2hhbGxlbmdlL3plYWx0aHktdXNlci1vbmJvYXJkL3NyYy9jb21wb25lbnRzL2FkbWluUGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuLy8gaW1wb3J0ICcuL0FkbWluUGFnZS5jc3MnO1xuXG5cblxuY29uc29sZS5sb2cocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBQX0FQSV9VUkwpXG4vLyBjb25zdCBpc0RlYnVnID0gcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0RFQlVHID09PSAndHJ1ZSc7XG5cblxuY29uc3QgQWRtaW5QYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICBjb25zdCBhcGlVcmwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUFBfQVBJX1VSTDtcbiAgICBjb25zdCBbcGFnZTIsIHNldFBhZ2UyXSA9IHVzZVN0YXRlPEFycmF5PHN0cmluZz4+KFtdKTtcbiAgICBjb25zdCBbcGFnZTMsIHNldFBhZ2UzXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xuICAgIGNvbnN0IFtvcHRpb25zXSA9IHVzZVN0YXRlPEFycmF5PHN0cmluZz4+KFsnYWJvdXQnLCAnYWRkcmVzcycsICdiaXJ0aGRhdGUnXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgY2hlY2tGaWVsZHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcGlVcmwpXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke2FwaVVybH0vZmllbGRzYCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGRzID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhmaWVsZHMucGFnZTIpXG4gICAgICAgICAgICAgICAgLy8gc2V0T3B0aW9ucyhmaWVsZHMpXG4gICAgICAgICAgICAgICAgc2V0UGFnZTIoZmllbGRzLnBhZ2UyIHx8IFtdKTtcbiAgICAgICAgICAgICAgICBzZXRQYWdlMyhmaWVsZHMucGFnZTNbMF0gfHwgJycpOyBcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcImVycm9yIGZldGNoaW5nIGZpZWxkczpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjaGVja0ZpZWxkcygpO1xuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IHNlbmRGaWVsZHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBhbGxTZWxlY3RlZE9wdGlvbnMgPSBbLi4ucGFnZTIscGFnZTNdO1xuICAgICAgICAgICAgY29uc3QgdW5pcXVlT3B0aW9ucyA9IG5ldyBTZXQoYWxsU2VsZWN0ZWRPcHRpb25zKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhZ2UyLCBwYWdlMylcbiAgICAgICAgICAgIC8vY2hlY2sgaWYgdXNlciBoYXMgaW5wdXR0ZWQgcGFnZSBvcHRpb25zIHdpdGggY29uc3RyYWludHMgZGVzY3JpYmVkIGluIGRvY1xuICAgICAgICAgICAgaWYocGFnZTIudG9TdHJpbmcoKSA9PT0gW1wiXCIsXCJcIl0udG9TdHJpbmcoKSB8fCBwYWdlMy50b1N0cmluZygpID09PSBcImJcIi50b1N0cmluZygpKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwYWdlMixwYWdlMylcbiAgICAgICAgICAgICAgICBhbGVydCgnRXJyb3I6IFlvdSBuZWVkIHRvIGF0bGVhc3Qgb25lIGNvbXBvbmVudCBwZXIgcGFnZSEnKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIC8vdmFsaWRhdG9yIHRvIGNoZWNrIGlmIHVuaXF1ZSBvcHRpb25zIGFyZSBzZWxlY3RlZCBpbiBhZG1pbiBjb21wb25lbnRcbiAgICAgICAgICAgIH1lbHNlIGlmICh1bmlxdWVPcHRpb25zLnNpemUgIT0gYWxsU2VsZWN0ZWRPcHRpb25zLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJvcjogRHVwbGljYXRlIG9wdGlvbnMgYXJlIG5vdCBhbGxvd2VkIVwiKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSB7XG4gICAgICAgICAgICAgICAgcGFnZTI6IHBhZ2UyLFxuICAgICAgICAgICAgICAgIHBhZ2UzOiBwYWdlMyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7YXBpVXJsfS9maWVsZHNgLCByZXN1bHRzKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIGFsZXJ0KCdTdWNjZXNzZnVsbHkgY2hhbmdlZCB1c2VyIG9uYm9hcmRpbmcgd29ya2Zsb3cnKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZVBhZ2UyQ2hhbmdlID0gKGluZGV4OiBudW1iZXIsIHZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgdXBkYXRlZFBhZ2UyID0gWy4uLnBhZ2UyXTtcbiAgICAgICAgdXBkYXRlZFBhZ2UyW2luZGV4XSA9IHZhbHVlO1xuICAgICAgICBzZXRQYWdlMih1cGRhdGVkUGFnZTIpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVQYWdlM0NoYW5nZSA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHNldFBhZ2UzKHZhbHVlKTtcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRtaW4tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpbnN0cnVjdGlvbnNcIj5TZWxlY3QgVXNlciB3b3JrZmxvdyBmb3IgT25ib2FyZGluZzwvcD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICA8aDI+UGFnZSAyPC9oMj5cbiAgICAgICAgICAgICAgICB7cGFnZTIubWFwKChzZWxlY3RlZE9wdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzZWxlY3QtZHJvcGRvd25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZE9wdGlvbiB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZVBhZ2UyQ2hhbmdlKGluZGV4LCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjdCBhbiBvcHRpb248L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9ucy5tYXAob3B0aW9uID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e29wdGlvbn0gdmFsdWU9e29wdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICB7cGFnZTIubGVuZ3RoIDwgMiAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWRkLWZpZWxkLWJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UyKFsuLi5wYWdlMiwgJyddKX0+QWRkIEZpZWxkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICA8aDI+UGFnZSAzPC9oMj5cbiAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlbGVjdC1kcm9wZG93blwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYWdlM31cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVQYWdlM0NoYW5nZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IGFuIG9wdGlvbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICB7b3B0aW9ucy5tYXAob3B0aW9uID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtvcHRpb259IHZhbHVlPXtvcHRpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtaXQtYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17c2VuZEZpZWxkc30+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkbWluUGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJjb25zb2xlIiwibG9nIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQUF9BUElfVVJMIiwiQWRtaW5QYWdlIiwiYXBpVXJsIiwicGFnZTIiLCJzZXRQYWdlMiIsInBhZ2UzIiwic2V0UGFnZTMiLCJvcHRpb25zIiwiY2hlY2tGaWVsZHMiLCJyZXNwb25zZSIsImdldCIsImZpZWxkcyIsImRhdGEiLCJlcnJvciIsInNlbmRGaWVsZHMiLCJhbGxTZWxlY3RlZE9wdGlvbnMiLCJ1bmlxdWVPcHRpb25zIiwiU2V0IiwidG9TdHJpbmciLCJhbGVydCIsInNpemUiLCJsZW5ndGgiLCJyZXN1bHRzIiwicG9zdCIsImhhbmRsZVBhZ2UyQ2hhbmdlIiwiaW5kZXgiLCJ2YWx1ZSIsInVwZGF0ZWRQYWdlMiIsImhhbmRsZVBhZ2UzQ2hhbmdlIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImgyIiwibWFwIiwic2VsZWN0ZWRPcHRpb24iLCJzZWxlY3QiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvcHRpb24iLCJidXR0b24iLCJvbkNsaWNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/adminPage.tsx\n"));

/***/ })

});