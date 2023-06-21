/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ var __webpack_modules__ = ({

/***/ "./src/Share.js":
/*!**********************!*\
  !*** ./src/Share.js ***!
  \**********************/
/***/ (() => {

eval("console.log('JavaScript file is for html sharing is loaded.');\r\n\r\nvar ShareCode = `\r\n<nav class=\"navbar navbar-expand-lg\">\r\n    <div class=\"container-fluid\">\r\n        <a class=\"navbar-brand Nav_Text_A\" href=\"index.html\" style=\"color:aliceblue;\" id=\"Branding\">\r\n            <img src=\"../assets/favicon.ico\" width=\"50px\" height=\"50px\" id=\"NavLogo\">\r\n            TheWAMnerds\r\n        </a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n            <ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link Nav_Text_A\" href=\"aboutus.html\">About us</a>\r\n                </li>\r\n                <li class=\"nav-item dropdown\">\r\n                    <a class=\"nav-link dropdown-toggle Nav_Text_A\" role=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" style=\"color: aliceblue;\">\r\n                        Content\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li><a class=\"dropdown-item\" href=\"#\">Book Reviews</a></li>\r\n                        <li><a class=\"dropdown-item\" href=\"#\">School blogs</a></li>\r\n                        <li><a class=\"dropdown-item\" href=\"#\"> Perspectives </a></li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>`;\r\n\r\nfunction loadShareCode() {\r\n    var body = document.getElementsByTagName('body')[0];\r\n    body.insertAdjacentHTML('afterbegin', ShareCode);\r\n}\r\n\r\n// Call loadShareCode after DOM has loaded\r\ndocument.addEventListener('DOMContentLoaded', loadShareCode);\r\n\n\n//# sourceURL=webpack://docs/./src/Share.js?");

/***/ })

/******/ });
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module can't be inlined because the eval devtool is used.
/******/ var __webpack_exports__ = {};
/******/ __webpack_modules__["./src/Share.js"]();
/******/ 
