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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var swiper = new Swiper('.swiper-container', {\n  effect: 'fade',\n  loop: true,\n  speed: 2000,\n  autoplay: {\n    delay: 2000,\n    disableOnInteraction: true\n  },\n  pagination: {\n    el: '.swiper-pagination',\n    renderBullet: function renderBullet(index, className) {\n      return '<span class=\"' + className + '\"></span>';\n    }\n  }\n});\nvar aboutSwiper = new Swiper('.about-swiper-container', {\n  effect: 'fade',\n  loop: true,\n  speed: 2000,\n  autoplay: {\n    delay: 2000,\n    disableOnInteraction: true\n  },\n  pagination: {\n    el: '.swiper-pagination',\n    renderBullet: function renderBullet(index, className) {\n      return '<span class=\"' + className + '\"></span>';\n    }\n  }\n});\nvar instaSwiper;\nvar mediaQuery = matchMedia('(max-width: 798px)');\nhandle(mediaQuery);\n\nfunction handle(mq) {\n  if (mq.matches) {\n    instaSwiper = new Swiper('.insta-swiper-container', {\n      slidesPerColumn: 3,\n      slidesPerColumnFill: 'row',\n      slidesPerView: 3,\n      spaceBetween: 5\n    });\n  } else {\n    instaSwiper = new Swiper('.insta-swiper-container', {\n      loop: true,\n      autoplay: {\n        delay: 5000,\n        disableOnInteraction: true\n      },\n      slidesPerView: 3,\n      spaceBetween: 100,\n      initialSlide: 1\n    });\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvc2xpZGVyLmpzPzRmZWEiXSwibmFtZXMiOlsic3dpcGVyIiwiU3dpcGVyIiwiZWZmZWN0IiwibG9vcCIsInNwZWVkIiwiYXV0b3BsYXkiLCJkZWxheSIsImRpc2FibGVPbkludGVyYWN0aW9uIiwicGFnaW5hdGlvbiIsImVsIiwicmVuZGVyQnVsbGV0IiwiaW5kZXgiLCJjbGFzc05hbWUiLCJhYm91dFN3aXBlciIsImluc3RhU3dpcGVyIiwibWVkaWFRdWVyeSIsIm1hdGNoTWVkaWEiLCJoYW5kbGUiLCJtcSIsIm1hdGNoZXMiLCJzbGlkZXNQZXJDb2x1bW4iLCJzbGlkZXNQZXJDb2x1bW5GaWxsIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsImluaXRpYWxTbGlkZSJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsTUFBTSxHQUFHLElBQUlDLE1BQUosQ0FBVyxtQkFBWCxFQUFnQztBQUM3Q0MsUUFBTSxFQUFFLE1BRHFDO0FBRTdDQyxNQUFJLEVBQUUsSUFGdUM7QUFHN0NDLE9BQUssRUFBRSxJQUhzQztBQUk3Q0MsVUFBUSxFQUFFO0FBQ1JDLFNBQUssRUFBRSxJQURDO0FBRVJDLHdCQUFvQixFQUFFO0FBRmQsR0FKbUM7QUFRN0NDLFlBQVUsRUFBRTtBQUNWQyxNQUFFLEVBQUUsb0JBRE07QUFFVkMsZ0JBQVksRUFBRSxzQkFBU0MsS0FBVCxFQUFnQkMsU0FBaEIsRUFBMkI7QUFDdkMsYUFBTyxrQkFBa0JBLFNBQWxCLEdBQThCLFdBQXJDO0FBQ0Q7QUFKUztBQVJpQyxDQUFoQyxDQUFmO0FBZ0JBLElBQU1DLFdBQVcsR0FBRyxJQUFJWixNQUFKLENBQVcseUJBQVgsRUFBc0M7QUFDeERDLFFBQU0sRUFBRSxNQURnRDtBQUV4REMsTUFBSSxFQUFFLElBRmtEO0FBR3hEQyxPQUFLLEVBQUUsSUFIaUQ7QUFJeERDLFVBQVEsRUFBRTtBQUNSQyxTQUFLLEVBQUUsSUFEQztBQUVSQyx3QkFBb0IsRUFBRTtBQUZkLEdBSjhDO0FBUXhEQyxZQUFVLEVBQUU7QUFDVkMsTUFBRSxFQUFFLG9CQURNO0FBRVZDLGdCQUFZLEVBQUUsc0JBQVNDLEtBQVQsRUFBZ0JDLFNBQWhCLEVBQTJCO0FBQ3ZDLGFBQU8sa0JBQWtCQSxTQUFsQixHQUE4QixXQUFyQztBQUNEO0FBSlM7QUFSNEMsQ0FBdEMsQ0FBcEI7QUFnQkEsSUFBSUUsV0FBSjtBQUVBLElBQUlDLFVBQVUsR0FBR0MsVUFBVSxDQUFDLG9CQUFELENBQTNCO0FBRUFDLE1BQU0sQ0FBQ0YsVUFBRCxDQUFOOztBQUVBLFNBQVNFLE1BQVQsQ0FBZ0JDLEVBQWhCLEVBQW9CO0FBQ2xCLE1BQUdBLEVBQUUsQ0FBQ0MsT0FBTixFQUFlO0FBQ2JMLGVBQVcsR0FBRyxJQUFJYixNQUFKLENBQVcseUJBQVgsRUFBc0M7QUFDbERtQixxQkFBZSxFQUFFLENBRGlDO0FBRWxEQyx5QkFBbUIsRUFBRSxLQUY2QjtBQUdsREMsbUJBQWEsRUFBRSxDQUhtQztBQUlsREMsa0JBQVksRUFBRTtBQUpvQyxLQUF0QyxDQUFkO0FBTUQsR0FQRCxNQU9PO0FBQ0xULGVBQVcsR0FBRyxJQUFJYixNQUFKLENBQVcseUJBQVgsRUFBc0M7QUFDbERFLFVBQUksRUFBRSxJQUQ0QztBQUVsREUsY0FBUSxFQUFFO0FBQ1JDLGFBQUssRUFBRSxJQURDO0FBRVJDLDRCQUFvQixFQUFFO0FBRmQsT0FGd0M7QUFNbERlLG1CQUFhLEVBQUUsQ0FObUM7QUFPbERDLGtCQUFZLEVBQUUsR0FQb0M7QUFRbERDLGtCQUFZLEVBQUU7QUFSb0MsS0FBdEMsQ0FBZDtBQVVEO0FBQ0YiLCJmaWxlIjoiLi9zcmMvanMvc2xpZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcignLnN3aXBlci1jb250YWluZXInLCB7XHJcbiAgZWZmZWN0OiAnZmFkZScsXHJcbiAgbG9vcDogdHJ1ZSxcclxuICBzcGVlZDogMjAwMCxcclxuICBhdXRvcGxheToge1xyXG4gICAgZGVsYXk6IDIwMDAsXHJcbiAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogdHJ1ZVxyXG4gIH0sXHJcbiAgcGFnaW5hdGlvbjoge1xyXG4gICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgcmVuZGVyQnVsbGV0OiBmdW5jdGlvbihpbmRleCwgY2xhc3NOYW1lKSB7XHJcbiAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCInICsgY2xhc3NOYW1lICsgJ1wiPjwvc3Bhbj4nXHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5cclxuY29uc3QgYWJvdXRTd2lwZXIgPSBuZXcgU3dpcGVyKCcuYWJvdXQtc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICBlZmZlY3Q6ICdmYWRlJyxcclxuICBsb29wOiB0cnVlLFxyXG4gIHNwZWVkOiAyMDAwLFxyXG4gIGF1dG9wbGF5OiB7XHJcbiAgICBkZWxheTogMjAwMCxcclxuICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiB0cnVlXHJcbiAgfSxcclxuICBwYWdpbmF0aW9uOiB7XHJcbiAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICByZW5kZXJCdWxsZXQ6IGZ1bmN0aW9uKGluZGV4LCBjbGFzc05hbWUpIHtcclxuICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIicgKyBjbGFzc05hbWUgKyAnXCI+PC9zcGFuPidcclxuICAgIH1cclxuICB9XHJcbn0pXHJcblxyXG5sZXQgaW5zdGFTd2lwZXJcclxuXHJcbmxldCBtZWRpYVF1ZXJ5ID0gbWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNzk4cHgpJylcclxuXHJcbmhhbmRsZShtZWRpYVF1ZXJ5KVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlKG1xKSB7XHJcbiAgaWYobXEubWF0Y2hlcykge1xyXG4gICAgaW5zdGFTd2lwZXIgPSBuZXcgU3dpcGVyKCcuaW5zdGEtc3dpcGVyLWNvbnRhaW5lcicsIHtcclxuICAgICAgc2xpZGVzUGVyQ29sdW1uOiAzLFxyXG4gICAgICBzbGlkZXNQZXJDb2x1bW5GaWxsOiAncm93JyxcclxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiA1XHJcbiAgICB9KVxyXG4gIH0gZWxzZSB7XHJcbiAgICBpbnN0YVN3aXBlciA9IG5ldyBTd2lwZXIoJy5pbnN0YS1zd2lwZXItY29udGFpbmVyJywge1xyXG4gICAgICBsb29wOiB0cnVlLFxyXG4gICAgICBhdXRvcGxheToge1xyXG4gICAgICAgIGRlbGF5OiA1MDAwLFxyXG4gICAgICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMTAwLFxyXG4gICAgICBpbml0aWFsU2xpZGU6IDEsXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/slider.js\n");

/***/ }),

/***/ 1:
/*!********************************!*\
  !*** multi ./src/js/slider.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kiyo/dan/usinc/room705/room705/src/js/slider.js */"./src/js/slider.js");


/***/ })

/******/ });