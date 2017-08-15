webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_phaser__);


class BattleState extends __WEBPACK_IMPORTED_MODULE_0_phaser___default.a.State{

  create(){

  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = BattleState;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_phaser__);


class BootState extends __WEBPACK_IMPORTED_MODULE_0_phaser___default.a.State{

  constructor(){
    super();
    this.ready = false;

  }

  create(){

  }

  preload(){
    this.load.onLoadComplete.addOnce(()=>{
        this.ready = true;
    },this);
    this.game.stage.backgroundColor = '#d77826';

    this.game.load.image('archer','resources/imgs/archer.png');
    this.game.load.image('cannoneer','resources/imgs/cannoneer.png');
    this.game.load.image('dual_blade','resources/imgs/dual_blade.png');
    this.game.load.image('magician','resources/imgs/magician.png');
    this.game.load.image('pirate','resources/imgs/pirate.png');
    this.game.load.image('thief','resources/imgs/thief.png');
    this.game.load.image('warrior','resources/imgs/warrior.png');

  }

  update(){
    if(this.ready){
      this.game.state.start('menu', true, false);
    }
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = BootState;



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_phaser__);


class MenuState extends __WEBPACK_IMPORTED_MODULE_0_phaser___default.a.State{

  create(){
    let title = this.game.add.text(this.game.world.centerX, this.game.world.height/5,
      "Maple Fighter",{
        fill:'#ffffff',
        fontSize :'64px'
      });
    title.anchor.set(0.5);

    let battle = this.game.add.text(this.game.world.centerX, this.game.world.centerY,
      "Battle Mode",{
        fill:'#ffffff'
      });
    battle.anchor.set(0.5);
    battle.inputEnabled = true;
    battle.events.onInputUp.add(()=>{
      this.game.global['mode'] = 'battle';
      this.game.state.start('selection', true, false);
    });
  }


}
/* harmony export (immutable) */ __webpack_exports__["a"] = MenuState;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_phaser__);


var classes = ['archer','cannoneer','dual_blade','magician','pirate','thief','warrior'];

class SelectionState extends __WEBPACK_IMPORTED_MODULE_0_phaser___default.a.State{

  init(){
    this.classSelections = [];
    this.classChoices = [];
  }

  create(){
    this.initClassSelection();
    this.initClassChoices();
    this.initPlayers();
    this.initKeys();
    let back = this.game.add.text(25,25,"Back",{
      fill:'#ffffff',
      fontSize :'32px'
    });
    back.inputEnabled = true;
    back.events.onInputUp.add(()=>{
      this.game.global['mode'] = 'menu';
      this.game.state.start('menu', true, false);
    });
    let start = this.game.add.text(this.game.world.width-100,this.game.world.height-50,"Start",{
      fill:'#ffffff',
      fontSize :'32px'
    });
    start.inputEnabled = true;
    start.events.onInputUp.add(()=>{
      if(this.playerOne.class.key && this.playerTwo.class.key){
        this.game.global['mode'] = 'battle';
        this.game.state.start('battle', true, false);
      }
    });
  }

  initPlayers(){
    this.playerOne = this.createPlayer(0);
    this.playerTwo = this.createPlayer(1);
  }

  initKeys(){
    //player one input
    let w = this.game.input.keyboard.addKey(__WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Keyboard.W);
    w.onDown.add(()=>{

    });
    let a = this.game.input.keyboard.addKey(__WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Keyboard.A);
    a.onDown.add(()=>{
      if(this.playerOne.index > 0){
        this.highlightChoice(this.playerOne.index-1,this.playerOne);
      }
    });
    let s = this.game.input.keyboard.addKey(__WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Keyboard.S);
    s.onDown.add(()=>{

    });
    let d = this.game.input.keyboard.addKey(__WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Keyboard.D);
    d.onDown.add(()=>{
      if(this.playerOne.index < this.classChoices.length-1){
        this.highlightChoice(this.playerOne.index+1, this.playerOne);
      }
    });
    let j = this.game.input.keyboard.addKey(__WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Keyboard.J);
    j.onDown.add(()=>{
      this.selectClass(this.playerOne);
    });
    let k = this.game.input.keyboard.addKey(__WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Keyboard.K);
    k.onDown.add(()=>{
      this.cancelSelect(this.playerOne);
    });

    //player two input
    let up = this.game.input.keyboard.addKey(__WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Keyboard.UP);
    up.onDown.add(()=>{

    });
    let left = this.game.input.keyboard.addKey(__WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Keyboard.LEFT);
    left.onDown.add(()=>{
      if(this.playerTwo.index > 0){
        this.highlightChoice(this.playerTwo.index-1,this.playerTwo);
      }
    });
    let down = this.game.input.keyboard.addKey(__WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Keyboard.DOWN);
    down.onDown.add(()=>{

    });
    let right = this.game.input.keyboard.addKey(__WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Keyboard.RIGHT);
    right.onDown.add(()=>{
      if(this.playerTwo.index < this.classChoices.length-1){
        this.highlightChoice(this.playerTwo.index+1, this.playerTwo);
      }
    });
    let one = this.game.input.keyboard.addKey(__WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Keyboard.NUMPAD_1);
    one.onDown.add(()=>{
      this.selectClass(this.playerTwo);
    });
    let two = this.game.input.keyboard.addKey(__WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Keyboard.NUMPAD_2);
    two.onDown.add(()=>{
      this.cancelSelect(this.playerTwo);
    });
  }

  initClassSelection(){
      for(let i = 0;i<2;i++){
        let classSelection = this.game.add.graphics(200+(i*300),100);
        classSelection.beginFill(0xffffff);
        classSelection.drawRect(0,0,150,200);
        classSelection.endFill();
        this.classSelections.push(classSelection);
      }
  }

  initClassChoices(){
      for(let i = 0;i<classes.length;i++){
          let classChoice = this.game.add.image(50+(i*105),450,classes[i]);
          classChoice.width = 75;
          classChoice.height = 75;
          this.classChoices.push(classChoice);
      }
  }

  createPlayer(num){
      let classSelection = this.classSelections[num];
      let player = {
        id:num,
        index:num,
        border:10,
        class:this.game.add.image(classSelection.left,classSelection.top),
        highlight:this.game.add.graphics()
      };
      if(num == 0){
        player.color = 0xde2e1c;
      }else{
        player.color = 0x1c8dde;
      }
      player.highlight.lineStyle(2, player.color, 1);
      player.highlight.drawRect(this.classChoices[player.index].left-10,this.classChoices[player.index].top-10,
         this.classChoices[player.index].width+20, this.classChoices[player.index].height+20);

      return player;
  }

  selectClass(player){
    let classSelection = this.classSelections[player.id];
    player.class.loadTexture(classes[player.index]);
    player.class.width = classSelection.width;
    player.class.height = classSelection.height;
  }

  cancelSelect(player){
    player.class.loadTexture();
    player.class.key = null;
  }

  highlightChoice(index,player){
      let choice = this.classChoices[index];
      let border = 10;
      if((player == this.playerTwo && this.playerOne.index == index && this.playerOne.border == border) ||
        (player == this.playerOne && this.playerTwo.index == index && this.playerTwo.border == border)){
        border = 12;
      }
      player.highlight.clear();
      player.highlight.lineStyle(2, player.color, 1);
      player.highlight.drawRect(choice.left-border,choice.top-border,choice.width+border*2,choice.height+border*2);
      player.border = border;
      player.index = index;
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = SelectionState;



/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pixi__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pixi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_pixi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_p2__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_p2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_p2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_phaser__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_phaser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_phaser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__states_boot_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__states_menu_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__states_battle_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__states_selection_js__ = __webpack_require__(7);








class MapleFighter extends __WEBPACK_IMPORTED_MODULE_2_phaser___default.a.Game{

  constructor(){
    const docElement = document.documentElement;
    super(800,600,__WEBPACK_IMPORTED_MODULE_2_phaser___default.a.CANVAS);

    this.global = {

    };

    this.state.add('boot', __WEBPACK_IMPORTED_MODULE_3__states_boot_js__["a" /* default */], false);
    this.state.add('menu', __WEBPACK_IMPORTED_MODULE_4__states_menu_js__["a" /* default */], false);
    this.state.add('battle', __WEBPACK_IMPORTED_MODULE_5__states_battle_js__["a" /* default */], false);
    this.state.add('selection', __WEBPACK_IMPORTED_MODULE_6__states_selection_js__["a" /* default */], false);

    this.state.start('boot');

  }

}
/* harmony export (immutable) */ __webpack_exports__["default"] = MapleFighter;


const maplefighter = new MapleFighter();


/***/ })
],[12]);