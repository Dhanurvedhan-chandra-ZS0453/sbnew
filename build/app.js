/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\r\nconst config = __webpack_require__(/*! ./config */ \"./config.js\");\r\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\r\nconst app = express();\r\nconst PORT = config.SERVER_PORT;\r\napp.use(express.urlencoded({ extended: true }));\r\napp.use(express.json());\r\n\r\n\r\nvar mysql = __webpack_require__(/*! mysql2 */ \"mysql2\");\r\nvar connection = mysql.createConnection({\r\n  host: config.host,\r\n  user: config.user,\r\n  password: config.password,\r\n  database:config.database,\r\n  port: config.port,  \r\n});\r\nconnection.connect(function(err) {\r\n  if (err) throw err;\r\n  console.log(\"Connected!\");\r\n});\r\napp.get(\"/\", (req, res) => {\r\n    res.send(\"Sample Node Application\");\r\n  });\r\napp.get(\"/users\", (req, res) => {\r\n    connection.query('SELECT * FROM department', function(err, results) {\r\n      if (err) throw err;\r\n      res.send(results);\r\n    });\r\n  });\r\n\r\n\r\nconsole.log(\"Server is running on port \" + PORT);\r\n\r\napp.listen(PORT, () => {\r\n    console.log(`Server is running on port ${PORT}`);\r\n  });\n\n//# sourceURL=webpack://sbnew/./app.js?");

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\r\n\r\nmodule.exports = {\r\n  SERVER_PORT: '3006',\r\n  host: 'localhost',\r\n  user: 'root',\r\n  password: 'Password@1',\r\n  database:'vms_sample',\r\n  port: '3306'\r\n};\n\n//# sourceURL=webpack://sbnew/./config.js?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "mysql2":
/*!*************************!*\
  !*** external "mysql2" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("mysql2");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app.js");
/******/ 	
/******/ })()
;