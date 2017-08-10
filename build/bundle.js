webpackJsonp([0],{

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_phaser__);


class BootState extends __WEBPACK_IMPORTED_MODULE_0_phaser___default.a.State{

  constructor(){
    super();

  }

  preload(){

  }

  create(){

  }

  onLoadComplete() {
    
  }

  update(){

  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = BootState;



/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pixi__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pixi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_pixi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_p2__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_p2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_p2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_phaser__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_phaser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_phaser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__states_boot_js__ = __webpack_require__(4);





class MapleFighter extends __WEBPACK_IMPORTED_MODULE_2_phaser___default.a.Game{

  constructor(){
    super();

    this.state.add('boot', __WEBPACK_IMPORTED_MODULE_3__states_boot_js__["a" /* default */], false);

    this.state.start('boot');

  }

}
/* harmony export (immutable) */ __webpack_exports__["default"] = MapleFighter;


const maplefighter = new MapleFighter();


/***/ })

},[9]);