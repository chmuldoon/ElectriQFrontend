/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Render.js":
/*!*******************!*\
  !*** ./Render.js ***!
  \*******************/
/*! exports provided: RenderStuff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RenderStuff\", function() { return RenderStuff; });\nconst createProductItem = product => {\n  let productItem = document.createElement('div');\n  productItem.className += \"product-item\";\n\n  let itemPhoto = document.createElement(\"img\");\n  itemPhoto.src = product.image.src;\n  itemPhoto.className += \"item-photo\";\n\n  let itemName = document.createElement(\"p\");\n  itemName.className += \"item-name\";\n  itemName.innerHTML = product.title\n\n  let itemPrice = document.createElement(\"p\");\n  itemPrice.className += \"item-price\";\n  itemPrice.innerHTML = product.variants[0].price\n\n  productItem.append(itemPhoto);\n  productItem.append(itemName);\n  productItem.append(itemPrice);\n\n\n  return productItem;\n}\nconst RenderStuff = (products) => {\n  let $el = document.querySelector(\".products-section\")\n  products.forEach(element => {\n    const newItem = createProductItem(element)\n    $el.append(newItem);\n  });\n}\n\n//# sourceURL=webpack:///./Render.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// import _ from \"lodash\";\n// function component() {\n//   const element = document.createElement(\"div\");\n\nconst { RenderStuff } = __webpack_require__(/*! ../Render */ \"./Render.js\");\n\n//   // Lodash, currently included via a script, is required for this line to work\n//   element.innerHTML = \"Hey\"\n\n//   return element;\n// }\n\n// document.querySelector(\"#main\").appendChild(component())\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  async function getData(url) {\n    const res = await fetch(url)\n    return res.json()\n  }\n  async function fetchProducts() {\n    const products = await getData(\"https://protected-fortress-19687.herokuapp.com/api/products\")\n    console.log(products)\n    debugger\n    RenderStuff(products.products);\n  }\n  fetchProducts();\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });