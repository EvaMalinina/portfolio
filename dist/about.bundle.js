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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/about.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/about.js":
/*!*************************************!*\
  !*** ./src/assets/scripts/about.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction initMap() {\n\n    //coздание карты\n    var mapg = new google.maps.Map(document.getElementById('map'), {\n        center: { lat: 55.754471, lng: 37.605409 },\n        zoom: 8,\n        disableDefaultUI: true,\n        styles: [{ elementType: 'geometry', stylers: [{ color: '#242f3e' }] }, { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] }, { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] }, {\n            featureType: 'administrative.locality',\n            elementType: 'labels.text.fill',\n            stylers: [{ color: '#d59563' }]\n        }, {\n            featureType: 'poi',\n            elementType: 'labels.text.fill',\n            stylers: [{ color: '#d59563' }]\n        }, {\n            featureType: 'poi.park',\n            elementType: 'geometry',\n            stylers: [{ color: '#ff0000' }]\n        }, {\n            featureType: 'poi.park',\n            elementType: 'labels.text.fill',\n            stylers: [{ color: '#6b9a76' }]\n        }, {\n            featureType: 'road',\n            elementType: 'geometry',\n            stylers: [{ color: '#38414e' }]\n        }, {\n            featureType: 'road',\n            elementType: 'geometry.stroke',\n            stylers: [{ color: '#212a37' }]\n        }, {\n            featureType: 'road',\n            elementType: 'labels.text.fill',\n            stylers: [{ color: '#9ca5b3' }]\n        }, {\n            featureType: 'road.highway',\n            elementType: 'geometry',\n            stylers: [{ color: '#746855' }]\n        }, {\n            featureType: 'road.highway',\n            elementType: 'geometry.stroke',\n            stylers: [{ color: '#1f2835' }]\n        }, {\n            featureType: 'road.highway',\n            elementType: 'labels.text.fill',\n            stylers: [{ color: '#f3d19c' }]\n        }, {\n            featureType: 'transit',\n            elementType: 'geometry',\n            stylers: [{ color: '#2f3948' }]\n        }, {\n            featureType: 'transit.station',\n            elementType: 'labels.text.fill',\n            stylers: [{ color: '#d59563' }]\n        }, {\n            featureType: 'water',\n            elementType: 'geometry',\n            stylers: [{ color: '#00FFFF' }]\n        }, {\n            featureType: 'water',\n            elementType: 'labels.text.fill',\n            stylers: [{ color: '#515c6d' }]\n        }, {\n            featureType: 'water',\n            elementType: 'labels.text.stroke',\n            stylers: [{ color: '#17263c' }]\n        }]\n    });\n}\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYWJvdXQuanM/ZDdmNSJdLCJuYW1lcyI6WyJpbml0TWFwIiwibWFwZyIsImdvb2dsZSIsIm1hcHMiLCJNYXAiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2VudGVyIiwibGF0IiwibG5nIiwiem9vbSIsImRpc2FibGVEZWZhdWx0VUkiLCJzdHlsZXMiLCJlbGVtZW50VHlwZSIsInN0eWxlcnMiLCJjb2xvciIsImZlYXR1cmVUeXBlIl0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVNBLE9BQVQsR0FBbUI7O0FBRWY7QUFDQSxRQUFJQyxPQUFPLElBQUlDLE9BQU9DLElBQVAsQ0FBWUMsR0FBaEIsQ0FBb0JDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBcEIsRUFBb0Q7QUFDM0RDLGdCQUFRLEVBQUVDLEtBQUssU0FBUCxFQUFrQkMsS0FBSyxTQUF2QixFQURtRDtBQUUzREMsY0FBTSxDQUZxRDtBQUczREMsMEJBQWtCLElBSHlDO0FBSTNEQyxnQkFBUSxDQUNKLEVBQUVDLGFBQWEsVUFBZixFQUEyQkMsU0FBUyxDQUFDLEVBQUVDLE9BQU8sU0FBVCxFQUFELENBQXBDLEVBREksRUFFSixFQUFFRixhQUFhLG9CQUFmLEVBQXFDQyxTQUFTLENBQUMsRUFBRUMsT0FBTyxTQUFULEVBQUQsQ0FBOUMsRUFGSSxFQUdKLEVBQUVGLGFBQWEsa0JBQWYsRUFBbUNDLFNBQVMsQ0FBQyxFQUFFQyxPQUFPLFNBQVQsRUFBRCxDQUE1QyxFQUhJLEVBSUo7QUFDSUMseUJBQWEseUJBRGpCO0FBRUlILHlCQUFhLGtCQUZqQjtBQUdJQyxxQkFBUyxDQUFDLEVBQUVDLE9BQU8sU0FBVCxFQUFEO0FBSGIsU0FKSSxFQVNKO0FBQ0lDLHlCQUFhLEtBRGpCO0FBRUlILHlCQUFhLGtCQUZqQjtBQUdJQyxxQkFBUyxDQUFDLEVBQUVDLE9BQU8sU0FBVCxFQUFEO0FBSGIsU0FUSSxFQWNKO0FBQ0lDLHlCQUFhLFVBRGpCO0FBRUlILHlCQUFhLFVBRmpCO0FBR0lDLHFCQUFTLENBQUMsRUFBRUMsT0FBTyxTQUFULEVBQUQ7QUFIYixTQWRJLEVBbUJKO0FBQ0lDLHlCQUFhLFVBRGpCO0FBRUlILHlCQUFhLGtCQUZqQjtBQUdJQyxxQkFBUyxDQUFDLEVBQUVDLE9BQU8sU0FBVCxFQUFEO0FBSGIsU0FuQkksRUF3Qko7QUFDSUMseUJBQWEsTUFEakI7QUFFSUgseUJBQWEsVUFGakI7QUFHSUMscUJBQVMsQ0FBQyxFQUFFQyxPQUFPLFNBQVQsRUFBRDtBQUhiLFNBeEJJLEVBNkJKO0FBQ0lDLHlCQUFhLE1BRGpCO0FBRUlILHlCQUFhLGlCQUZqQjtBQUdJQyxxQkFBUyxDQUFDLEVBQUVDLE9BQU8sU0FBVCxFQUFEO0FBSGIsU0E3QkksRUFrQ0o7QUFDSUMseUJBQWEsTUFEakI7QUFFSUgseUJBQWEsa0JBRmpCO0FBR0lDLHFCQUFTLENBQUMsRUFBRUMsT0FBTyxTQUFULEVBQUQ7QUFIYixTQWxDSSxFQXVDSjtBQUNJQyx5QkFBYSxjQURqQjtBQUVJSCx5QkFBYSxVQUZqQjtBQUdJQyxxQkFBUyxDQUFDLEVBQUVDLE9BQU8sU0FBVCxFQUFEO0FBSGIsU0F2Q0ksRUE0Q0o7QUFDSUMseUJBQWEsY0FEakI7QUFFSUgseUJBQWEsaUJBRmpCO0FBR0lDLHFCQUFTLENBQUMsRUFBRUMsT0FBTyxTQUFULEVBQUQ7QUFIYixTQTVDSSxFQWlESjtBQUNJQyx5QkFBYSxjQURqQjtBQUVJSCx5QkFBYSxrQkFGakI7QUFHSUMscUJBQVMsQ0FBQyxFQUFFQyxPQUFPLFNBQVQsRUFBRDtBQUhiLFNBakRJLEVBc0RKO0FBQ0lDLHlCQUFhLFNBRGpCO0FBRUlILHlCQUFhLFVBRmpCO0FBR0lDLHFCQUFTLENBQUMsRUFBRUMsT0FBTyxTQUFULEVBQUQ7QUFIYixTQXRESSxFQTJESjtBQUNJQyx5QkFBYSxpQkFEakI7QUFFSUgseUJBQWEsa0JBRmpCO0FBR0lDLHFCQUFTLENBQUMsRUFBRUMsT0FBTyxTQUFULEVBQUQ7QUFIYixTQTNESSxFQWdFSjtBQUNJQyx5QkFBYSxPQURqQjtBQUVJSCx5QkFBYSxVQUZqQjtBQUdJQyxxQkFBUyxDQUFDLEVBQUVDLE9BQU8sU0FBVCxFQUFEO0FBSGIsU0FoRUksRUFxRUo7QUFDSUMseUJBQWEsT0FEakI7QUFFSUgseUJBQWEsa0JBRmpCO0FBR0lDLHFCQUFTLENBQUMsRUFBRUMsT0FBTyxTQUFULEVBQUQ7QUFIYixTQXJFSSxFQTBFSjtBQUNJQyx5QkFBYSxPQURqQjtBQUVJSCx5QkFBYSxvQkFGakI7QUFHSUMscUJBQVMsQ0FBQyxFQUFFQyxPQUFPLFNBQVQsRUFBRDtBQUhiLFNBMUVJO0FBSm1ELEtBQXBELENBQVg7QUFzRkgiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvYWJvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBpbml0TWFwKCkge1xuICAgIFxuICAgIC8vY2/Qt9C00LDQvdC40LUg0LrQsNGA0YLRi1xuICAgIHZhciBtYXBnID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcbiAgICAgICAgY2VudGVyOiB7IGxhdDogNTUuNzU0NDcxLCBsbmc6IDM3LjYwNTQwOSB9LFxuICAgICAgICB6b29tOiA4LFxuICAgICAgICBkaXNhYmxlRGVmYXVsdFVJOiB0cnVlLFxuICAgICAgICBzdHlsZXM6IFtcbiAgICAgICAgICAgIHsgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsIHN0eWxlcnM6IFt7IGNvbG9yOiAnIzI0MmYzZScgfV0gfSxcbiAgICAgICAgICAgIHsgZWxlbWVudFR5cGU6ICdsYWJlbHMudGV4dC5zdHJva2UnLCBzdHlsZXJzOiBbeyBjb2xvcjogJyMyNDJmM2UnIH1dIH0sXG4gICAgICAgICAgICB7IGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsIHN0eWxlcnM6IFt7IGNvbG9yOiAnIzc0Njg1NScgfV0gfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ2FkbWluaXN0cmF0aXZlLmxvY2FsaXR5JyxcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LmZpbGwnLFxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiAnI2Q1OTU2MycgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdwb2knLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6ICcjZDU5NTYzJyB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3BvaS5wYXJrJyxcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5JyxcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogJyNmZjAwMDAnIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAncG9pLnBhcmsnLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6ICcjNmI5YTc2JyB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3JvYWQnLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLFxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiAnIzM4NDE0ZScgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdyb2FkJyxcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5LnN0cm9rZScsXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6ICcjMjEyYTM3JyB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3JvYWQnLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6ICcjOWNhNWIzJyB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3JvYWQuaGlnaHdheScsXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeScsXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6ICcjNzQ2ODU1JyB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3JvYWQuaGlnaHdheScsXG4gICAgICAgICAgICAgICAgZWxlbWVudFR5cGU6ICdnZW9tZXRyeS5zdHJva2UnLFxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiAnIzFmMjgzNScgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICdyb2FkLmhpZ2h3YXknLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6ICcjZjNkMTljJyB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3RyYW5zaXQnLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnZ2VvbWV0cnknLFxuICAgICAgICAgICAgICAgIHN0eWxlcnM6IFt7IGNvbG9yOiAnIzJmMzk0OCcgfV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmVhdHVyZVR5cGU6ICd0cmFuc2l0LnN0YXRpb24nLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6ICcjZDU5NTYzJyB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3dhdGVyJyxcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2dlb21ldHJ5JyxcbiAgICAgICAgICAgICAgICBzdHlsZXJzOiBbeyBjb2xvcjogJyMwMEZGRkYnIH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZlYXR1cmVUeXBlOiAnd2F0ZXInLFxuICAgICAgICAgICAgICAgIGVsZW1lbnRUeXBlOiAnbGFiZWxzLnRleHQuZmlsbCcsXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6ICcjNTE1YzZkJyB9XVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmZWF0dXJlVHlwZTogJ3dhdGVyJyxcbiAgICAgICAgICAgICAgICBlbGVtZW50VHlwZTogJ2xhYmVscy50ZXh0LnN0cm9rZScsXG4gICAgICAgICAgICAgICAgc3R5bGVyczogW3sgY29sb3I6ICcjMTcyNjNjJyB9XVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSk7XG4gICAgXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/about.js\n");

/***/ })

/******/ });