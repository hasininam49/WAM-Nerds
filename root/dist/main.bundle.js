/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ var __webpack_modules__ = ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (() => {

eval("console.log('JavaScript file is loaded.');\r\n\r\nvar alerted = localStorage.getItem('alerted') || '';\r\nif (alerted != 'yes') {\r\nalert(\"This website is under construction if there are any issues please email me at wamnerds@gmail.com\");\r\nlocalStorage.setItem('alerted','yes');\r\nconsole.log(\"It worked\")\r\n}\r\nelse {\r\n    console.log(\"Already alerted\");\r\n}\r\n\r\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\r\nconst firebaseConfig = {\r\n  apiKey: 'AIzaSyCazKdmZ8R_frkKnMn3_PwEKBh2d93bHns',\r\n  authDomain: \"the-wam-nerds.firebaseapp.com\",\r\n  databaseURL: \"https://the-wam-nerds-default-rtdb.firebaseio.com\",\r\n  projectId: \"the-wam-nerds\",\r\n  storageBucket: \"the-wam-nerds.appspot.com\",\r\n  messagingSenderId: \"898296095199\",\r\n  appId: \"1:898296095199:web:1a26ab29a47cc01b9ae46a\",\r\n  measurementId: \"G-G9H3E4G704\"\r\n};\r\n\r\n// Initialize Firebase\r\n\r\nfirebase.initializeApp(firebaseConfig);\r\n\r\n\r\n\n\n//# sourceURL=webpack://docs/./src/main.js?");

/***/ })

/******/ });
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module can't be inlined because the eval devtool is used.
/******/ var __webpack_exports__ = {};
/******/ __webpack_modules__["./src/main.js"]();
/******/ 
