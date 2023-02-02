/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _knights__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knights */ \"./src/knights.js\");\n\r\n\r\n// for(const move of knightsMoves([2,2],[4,7])){\r\n//     console.log(move);\r\n// }\r\n\r\n// knightsMoves([1,1],[3,1])\r\n\r\nconsole.log((0,_knights__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([4,5],[0,0,0]))\n\n//# sourceURL=webpack://knights-travails/./src/index.js?");

/***/ }),

/***/ "./src/knights.js":
/*!************************!*\
  !*** ./src/knights.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst KNIGHT_OFFSETS = [\r\n  [1, 2],\r\n  [1, -2],\r\n  [2, 1],\r\n  [2, -1],\r\n  [-1, 2],\r\n  [-1, -2],\r\n  [-2, 1],\r\n  [-2, -1],\r\n];\r\n\r\nclass ChessSquare {\r\n  constructor(x, y, distance = 0) {\r\n    this.xPos = x;\r\n    this.yPos = y;\r\n    this.distance = distance;\r\n    this.edges = this.getEdges();\r\n  }\r\n\r\n  getEdges() {\r\n    const edges = [];\r\n\r\n    for(let move of KNIGHT_OFFSETS){\r\n      const newX = this.xPos + move[0];\r\n      const newY = this.yPos + move[1];\r\n\r\n      if(0 <= newX && newX < 8 && 0 <= newY && newY < 8){\r\n        edges.push([newX, newY, this.distance + 1]);\r\n        // edges.push(new ChessSquare(newX, newY, this.distance + 1)) // path can be found by edges but it gives infinite loop\r\n      }\r\n    }\r\n    return edges;\r\n  }\r\n\r\n  getPosition(){\r\n    return `${this.xPos}, ${this.yPos}`\r\n  }\r\n}\r\n\r\nfunction knightsMoves(start, end) { // check if it is neccessary to recreate ChessSquare objects\r\n  const origin = new ChessSquare(start[0], start[1]);\r\n  const target = new ChessSquare(end[0], end[1], ...end);\r\n  let que = [];\r\n  // que.push([origin.xPos, origin.yPos]);\r\n  que.push(origin)\r\n\r\n  const visited = new Set();\r\n  const path = [];\r\n  let pathStr = ``;\r\n  while(que.length > 0) {\r\n    const deque = que.shift()\r\n    // const currentSquare = new ChessSquare(deque[0], deque[1], deque[2])\r\n    const currentSquare = new ChessSquare(deque.xPos, deque.yPos, deque.distance)\r\n\r\n    visited.add(currentSquare.getPosition());\r\n    path.push(currentSquare)\r\n    for(const move of path){\r\n      for(const edge of move.edges){\r\n        // if(edge[0] === target.xPos &&  edge[1] === target.yPos) return path.at(-1);\r\n        if(edge[0] === target.xPos &&  edge[1] === target.yPos){\r\n          let predecessor = path.at(-1); // object\r\n          pathStr += `${predecessor.getPosition()}`;\r\n          // console.log(pathStr)\r\n          if(target.distance === 1 || (currentSquare.getPosition() === origin.getPosition())) return path[0].getPosition();\r\n          return `${knightsMoves(start, [predecessor.xPos, predecessor.yPos, predecessor.distance])} -> ${pathStr}`;\r\n        }\r\n      }\r\n    }\r\n    // if(currentSquare.xPos === target.xPos &&  currentSquare.yPos === target.yPos) return path;\r\n\r\n    for(const edge of currentSquare.getEdges()){\r\n      // const edgeSquare = new ChessSquare(edge.xPos, edge.yPos, edge.distance);\r\n      const edgeSquare = new ChessSquare(edge[0], edge[1], edge[2]);\r\n      if(!visited.has(edgeSquare.getPosition())) {\r\n        que.push(edgeSquare);\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (knightsMoves);\n\n//# sourceURL=webpack://knights-travails/./src/knights.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;