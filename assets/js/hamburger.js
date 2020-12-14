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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/hamburger.js":
/*!*****************************!*\
  !*** ./src/js/hamburger.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval(";\n\n(function () {\n  var $hamburger = document.querySelector('.hamburger');\n  var $modal = document.querySelector('.modal');\n  $hamburger.addEventListener('click', function () {\n    $hamburger.classList.toggle('is-active');\n    $modal.classList.toggle('is-show');\n  });\n  var $anchors = document.querySelectorAll('.modal-menu-item a');\n  $anchors.forEach(function ($anchor) {\n    $anchor.addEventListener('click', function () {\n      if ($modal.classList.contains('is-show')) {\n        $modal.classList.remove('is-show');\n      }\n    });\n  });\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaGFtYnVyZ2VyLmpzPzFjMmQiXSwibmFtZXMiOlsiJGhhbWJ1cmdlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIiRtb2RhbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCIkYW5jaG9ycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiJGFuY2hvciIsImNvbnRhaW5zIiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFBQyxDQUFDLFlBQVc7QUFDWCxNQUFNQSxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixZQUF2QixDQUFuQjtBQUNBLE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQWY7QUFDQUYsWUFBVSxDQUFDSSxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxZQUFXO0FBQzlDSixjQUFVLENBQUNLLFNBQVgsQ0FBcUJDLE1BQXJCLENBQTRCLFdBQTVCO0FBQ0FILFVBQU0sQ0FBQ0UsU0FBUCxDQUFpQkMsTUFBakIsQ0FBd0IsU0FBeEI7QUFDRCxHQUhEO0FBS0EsTUFBTUMsUUFBUSxHQUFHTixRQUFRLENBQUNPLGdCQUFULENBQTBCLG9CQUExQixDQUFqQjtBQUNBRCxVQUFRLENBQUNFLE9BQVQsQ0FBaUIsVUFBQ0MsT0FBRCxFQUFhO0FBQzVCQSxXQUFPLENBQUNOLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFlBQVc7QUFDM0MsVUFBSUQsTUFBTSxDQUFDRSxTQUFQLENBQWlCTSxRQUFqQixDQUEwQixTQUExQixDQUFKLEVBQTBDO0FBQ3hDUixjQUFNLENBQUNFLFNBQVAsQ0FBaUJPLE1BQWpCLENBQXdCLFNBQXhCO0FBQ0Q7QUFDRixLQUpEO0FBS0QsR0FORDtBQU9ELENBaEJBIiwiZmlsZSI6Ii4vc3JjL2pzL2hhbWJ1cmdlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjsoZnVuY3Rpb24oKSB7XHJcbiAgY29uc3QgJGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1idXJnZXInKVxyXG4gIGNvbnN0ICRtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpXHJcbiAgJGhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgJGhhbWJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKVxyXG4gICAgJG1vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ2lzLXNob3cnKVxyXG4gIH0pXHJcblxyXG4gIGNvbnN0ICRhbmNob3JzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLW1lbnUtaXRlbSBhJylcclxuICAkYW5jaG9ycy5mb3JFYWNoKCgkYW5jaG9yKSA9PiB7XHJcbiAgICAkYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGlmICgkbW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdpcy1zaG93JykpIHtcclxuICAgICAgICAkbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnaXMtc2hvdycpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSlcclxufSkoKVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/hamburger.js\n");

/***/ }),

/***/ 2:
/*!***********************************!*\
  !*** multi ./src/js/hamburger.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kiyo/dan/usinc/room705/room705/src/js/hamburger.js */"./src/js/hamburger.js");


/***/ })

/******/ });