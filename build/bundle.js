webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const ARCHER = 'ARCHER';
const CANNONEER = 'CANNONEER';
const DUAL_BLADE = 'DUAL_BLADE';
const MAGICIAN = 'MAGICIAN';
const PIRATE = 'PIRATE';
const THIEF = 'THIEF';
const WARRIOR = 'WARRIOR';

/* harmony default export */ __webpack_exports__["a"] = ({
  ARCHER,
  //CANNONEER,
  //DUAL_BLADE,
  MAGICIAN,
  PIRATE,
  THIEF,
  WARRIOR,
});


/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const IDLE_STATE = 'IDLE_STATE';
const JUMP_STATE = 'JUMP_STATE';
const ATTACK_STATE = 'ATTACK_STATE';
const JUMP_ATTACK_STATE = 'JUMP_ATTACK_STATE';
const CROUCH_STATE = 'CROUCH_STATE';
const COMBO_STATE = 'COMBO_STATE';

/* harmony default export */ __webpack_exports__["a"] = ({
  IDLE_STATE,
  JUMP_STATE,
  ATTACK_STATE,
  JUMP_ATTACK_STATE,
  CROUCH_STATE,
  COMBO_STATE
});


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Hero__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HeroStates__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__HeroTypes__ = __webpack_require__(1);




const SLASH_BLAST = 'SLASH_BLAST';
const DARK_IMPALE = 'DARK_IMPALE';
const FLAME_STRIKE = 'FLAME_STRIKE';
const ICE_STRIKE = 'ICE_STRIKE';
const LIGHTING_STRIKE = 'LIGHTING_STRIKE';
const COMBO_ATTACK = 'COMBO_ATTACK';
const SHOUT = 'SHOUT';

class Warrior extends __WEBPACK_IMPORTED_MODULE_0__Hero__["a" /* default */] {
  constructor(game, x, y) {
    super(game, x, y);

    this.initCombos();
    this.initSprites();
    this.initAnimations();

    this.playAnimation('stand');
  }

  initAnimations() {
    super.initAnimations();
    this.sprite.animations.add('attack1', Phaser.Animation.generateFrameNames('attack', 1, 3), 3);
    this.sprite.animations.add('attack2', Phaser.Animation.generateFrameNames('attack', 4, 6), 3);
    this.sprite.animations.add('darkimpale', Phaser.Animation.generateFrameNames('dark_impale', 1, 10), 10);
    this.sprite.animations.add('flamestrike', Phaser.Animation.generateFrameNames('flame', 1, 9), 9);
    this.sprite.animations.add('icestrike', Phaser.Animation.generateFrameNames('ice', 1, 9), 9);
    this.sprite.animations.add('lightingstrike', Phaser.Animation.generateFrameNames('lighting', 1, 9), 9);
    this.sprite.animations.add('shout', Phaser.Animation.generateFrameNames('shout', 1, 14), 14);
    this.sprite.animations.add('slashblast', Phaser.Animation.generateFrameNames('sb', 1, 10), 9);

    this.sprite.animations.getAnimation('darkimpale').onComplete.add(() => {
      this.state = __WEBPACK_IMPORTED_MODULE_1__HeroStates__["a" /* default */].IDLE_STATE;
      this.playAnimation('stand');
    });
    this.sprite.animations.getAnimation('flamestrike').onComplete.add(() => {
      this.state = __WEBPACK_IMPORTED_MODULE_1__HeroStates__["a" /* default */].IDLE_STATE;
      this.playAnimation('stand');
    });
    this.sprite.animations.getAnimation('icestrike').onComplete.add(() => {
      this.state = __WEBPACK_IMPORTED_MODULE_1__HeroStates__["a" /* default */].IDLE_STATE;
      this.playAnimation('stand');
    });
    this.sprite.animations.getAnimation('lightingstrike').onComplete.add(() => {
      this.state = __WEBPACK_IMPORTED_MODULE_1__HeroStates__["a" /* default */].IDLE_STATE;
      this.playAnimation('stand');
    });
    this.sprite.animations.getAnimation('shout').onComplete.add(() => {
      this.state = __WEBPACK_IMPORTED_MODULE_1__HeroStates__["a" /* default */].IDLE_STATE;
      this.playAnimation('stand');
    });
    this.sprite.animations.getAnimation('slashblast').onComplete.add(() => {
      this.state = __WEBPACK_IMPORTED_MODULE_1__HeroStates__["a" /* default */].IDLE_STATE;
      this.playAnimation('stand');
    });
    this.sprite.animations.getAnimation('attack1').onComplete.add(() => {
      this.state = __WEBPACK_IMPORTED_MODULE_1__HeroStates__["a" /* default */].IDLE_STATE;
      this.playAnimation('stand');
    });
    this.sprite.animations.getAnimation('attack2').onComplete.add(() => {
      this.state = __WEBPACK_IMPORTED_MODULE_1__HeroStates__["a" /* default */].IDLE_STATE;
      this.playAnimation('stand');
    });
  }

  initCombos() {
    this.combos.push({
      name: SLASH_BLAST,
      keys: ['right', 'left', 'attack']
    });
    this.combos.push({
      name: DARK_IMPALE,
      keys: ['left', 'right', 'attack']
    });
    this.combos.push({
      name: FLAME_STRIKE,
      keys: ['down', 'right', 'attack']
    });
    this.combos.push({
      name: ICE_STRIKE,
      keys: ['down', 'right', 'jump']
    });
    this.combos.push({
      name: LIGHTING_STRIKE,
      keys: ['down', 'right', 'crouch']
    });
    this.combos.push({
      name: COMBO_ATTACK,
      keys: ['down', 'up', 'crouch']
    });
    this.combos.push({
      name: SHOUT,
      keys: ['down', 'up', 'attack']
    });

    this.comboAttack = this.game.add.image(0, 0, COMBO_ATTACK);
    this.comboAttack.width = 50;
    this.comboAttack.height = 50;
    this.comboAttack.kill();
    this.comboAttack.anchor.set(0.5);
    this.add(this.comboAttack);
  }

  initSprites() {
    this.sprite = this.create(0, 0, __WEBPACK_IMPORTED_MODULE_2__HeroTypes__["a" /* default */].WARRIOR);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.anchor.x= 0.5;
    this.sprite.anchor.y = 1;
    this.sprite.bringToTop();
  }

  activateCombo(combo) {
    super.activateCombo(combo);
    switch(combo.name) {
        case COMBO_ATTACK:
          this.activateComboAttack();
          break;
        case SLASH_BLAST:
          this.activateSlashBlast();
          break;
        case DARK_IMPALE:
          this.activateDarkImpale();
          break;
        case FLAME_STRIKE:
          this.activateFlameStrike();
          break;
        case ICE_STRIKE:
          this.activateIceStrike();
          break;
        case LIGHTING_STRIKE:
          this.activateLightingStrike();
          break;
        case SHOUT:
          this.activateShout();
          break;
    }
  }

  activateComboAttack() {
    if(this.comboAttack.isAlive && this.comboAttack.frame < 5) {
      this.normalAttack += 5;
      this.comboAttack.setFrame(this.comboAttack.frame + 1);
    } else {
      this.normalAttack += 5;
      this.comboAttack.revive();
    }
  }

  activateSlashBlast() {
    this.sprite.animations.play('slashblast');
  }

  activateDarkImpale() {
    this.sprite.animations.play('darkimpale');
  }

  activateFlameStrike() {
    this.sprite.animations.play('flamestrike');
  }

  activateIceStrike() {
    this.sprite.animations.play('icestrike');
  }

  activateLightingStrike() {
    this.sprite.animations.play('lightingstrike');
  }

  activateShout() {
    this.sprite.animations.play('shout');
  }

  playAnimation(animation) {
    super.playAnimation(animation);
    switch(animation) {
      case 'stand_attack':
        if(this.sprite.animations.currentAnim.name !== 'attack1') this.sprite.animations.play('attack1');
        break;
      case 'jump_attack':
        if(this.sprite.animations.currentAnim.name !== 'attack2') this.sprite.animations.play('attack2');
        break;
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Warrior;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_phaser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__heroes_Warrior__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__heroes_HeroTypes__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ui_battle_menu__ = __webpack_require__(17);







class BattleState extends __WEBPACK_IMPORTED_MODULE_0_phaser___default.a.State {
  create() {
    this.game.heroes = [];
    this.game.physics.startSystem(__WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Physics.ARCADE);
    this.playerOne = this.createHero(this.game.player0, 100, this.game.world.centerY);
    this.playerTwo = this.createHero(this.game.player1, 200, this.game.world.centerY);
    this.menu = new __WEBPACK_IMPORTED_MODULE_3__ui_battle_menu__["a" /* default */](this.game, [this.playerOne, this.playerTwo]);

    this.initActions();
  }

  createHero(hero, x, y) {
    // switch(hero) {
    //   case HeroTypes.ARCHER:
    //     return new Archer(this.game, x, y);
    //   case HeroTypes.CANNONEER:
    //     return new Cannoneer(this.game, x, y);
    //   case HeroTypes.DUAL_BLADE:
    //     return new DualBlade(this.game, x, y);
    //   case HeroTypes.MAGICIAN:
    //     return new Magician(this.game, x, y);
    //   case HeroTypes.PIRATE:
    //     return new Pirate(this.game, x, y);
    //   case HeroTypes.THIEF:
    //     return new Thief(this.game, x, y);
    //   case HeroTypes.WARRIOR:
    //     return new Warrior(this.game, x, y);
    // }
    return new __WEBPACK_IMPORTED_MODULE_1__heroes_Warrior__["a" /* default */](this.game, x, y);
  }

  //event listeners for players
  initActions() {
    // player one actions
    this.playerOne.actions.up = this.game.input.keyboard.addKey(__WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Keyboard.W);
    this.playerOne.actions.down = this.game.input.keyboard.addKey(__WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Keyboard.S);
    this.playerOne.actions.left = this.game.input.keyboard.addKey(__WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Keyboard.A);
    this.playerOne.actions.right = this.game.input.keyboard.addKey(__WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Keyboard.D);
    this.playerOne.actions.attack = this.game.input.keyboard.addKey(__WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Keyboard.J);
    this.playerOne.actions.jump = this.game.input.keyboard.addKey(__WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Keyboard.K);
    this.playerOne.actions.crouch = this.game.input.keyboard.addKey(__WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Keyboard.L);

    this.playerOne.actions.up.onUp.add(function() {
      this.checkAnimation();
    }, this.playerOne);
    this.playerOne.actions.down.onUp.add(function() {
      this.checkAnimation();
    }, this.playerOne);
    this.playerOne.actions.left.onUp.add(function() {
      this.checkAnimation();
    }, this.playerOne);
    this.playerOne.actions.right.onUp.add(function() {
      this.checkAnimation();
    }, this.playerOne);
    this.playerOne.actions.attack.onDown.add(function () {
      this.processAttack();
    }, this.playerOne);
    this.playerOne.actions.jump.onDown.add(function () {
      this.processJump();
    }, this.playerOne);
    this.playerOne.actions.crouch.onDown.add(function () {
      this.processCrouch();
    }, this.playerOne);

    // player two actions
    this.playerTwo.actions.up = this.game.input.keyboard.addKey(__WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Keyboard.UP);
    this.playerTwo.actions.down = this.game.input.keyboard.addKey(__WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Keyboard.DOWN);
    this.playerTwo.actions.left = this.game.input.keyboard.addKey(__WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Keyboard.LEFT);
    this.playerTwo.actions.right = this.game.input.keyboard.addKey(__WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Keyboard.RIGHT);
    this.playerTwo.actions.attack = this.game.input.keyboard.addKey(__WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Keyboard.NUMPAD_1);
    this.playerTwo.actions.jump = this.game.input.keyboard.addKey(__WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Keyboard.NUMPAD_2);
    this.playerTwo.actions.crouch = this.game.input.keyboard.addKey(__WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Keyboard.NUMPAD_3);

    this.playerTwo.actions.up.onUp.add(function() {
      this.checkAnimation();
    }, this.playerTwo);
    this.playerTwo.actions.down.onUp.add(function() {
      this.checkAnimation();
    }, this.playerTwo);
    this.playerTwo.actions.left.onUp.add(function() {
      this.checkAnimation();
    }, this.playerTwo);
    this.playerTwo.actions.right.onUp.add(function() {
      this.checkAnimation();
    }, this.playerTwo);
    this.playerTwo.actions.attack.onDown.add(function () {
      this.processAttack();
    }, this.playerTwo);
    this.playerTwo.actions.jump.onDown.add(function () {
      this.processJump();
    }, this.playerTwo);
    this.playerTwo.actions.crouch.onDown.add(function () {
      this.processCrouch();
    }, this.playerTwo);
  }

  update() {
    this.menu.update();
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BattleState;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_phaser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__heroes_HeroTypes__ = __webpack_require__(1);



class BootState extends __WEBPACK_IMPORTED_MODULE_0_phaser___default.a.State {
  constructor() {
    super();
    this.ready = false;
  }

  preload() {
    this.load.onLoadComplete.addOnce(() => {
      this.ready = true;
    }, this);
    this.ready = true;
    this.game.stage.backgroundColor = '#d77826';

    this.game.load.atlas(__WEBPACK_IMPORTED_MODULE_1__heroes_HeroTypes__["a" /* default */].ARCHER, 'resources/imgs/heroes/archer/archer.png', 'resources/imgs/heroes/archer/archer.json');
    //this.game.load.atlas(HeroTypes.CANNONEER, 'resources/imgs/heroes/cannoneer/cannoneer.png', 'resources/imgs/heroes/cannoneer/cannoneer.json');
    //this.game.load.atlas(HeroTypes.DUAL_BLADE, 'resources/imgs/heroes/dual_blade/dual_blade.png', 'resources/imgs/heroes/dual_blade/dual_blade.json');
    this.game.load.atlas(__WEBPACK_IMPORTED_MODULE_1__heroes_HeroTypes__["a" /* default */].MAGICIAN, 'resources/imgs/heroes/magician/magician.png', 'resources/imgs/heroes/magician/magician.json');
    this.game.load.atlas(__WEBPACK_IMPORTED_MODULE_1__heroes_HeroTypes__["a" /* default */].PIRATE, 'resources/imgs/heroes/pirate/pirate.png', 'resources/imgs/heroes/pirate/pirate.json');
    this.game.load.atlas(__WEBPACK_IMPORTED_MODULE_1__heroes_HeroTypes__["a" /* default */].THIEF, 'resources/imgs/heroes/thief/thief.png', 'resources/imgs/heroes/thief/thief.json');
    this.game.load.atlas(__WEBPACK_IMPORTED_MODULE_1__heroes_HeroTypes__["a" /* default */].WARRIOR, 'resources/imgs/heroes/warrior/warrior.png', 'resources/imgs/heroes/warrior/warrior.json');
  }

  update() {
    if (this.ready) {
      this.game.state.start('menu', true, false);
    }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = BootState;



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_phaser__);


class MenuState extends __WEBPACK_IMPORTED_MODULE_0_phaser___default.a.State {
  create() {
    const title = this.game.add.text(this.game.world.centerX, this.game.world.height / 5,
      'Maple Fighter', {
        fill: '#ffffff',
        fontSize: '64px',
      });
    title.anchor.set(0.5);

    const battle = this.game.add.text(this.game.world.centerX, this.game.world.centerY,
      'Battle Mode', {
        fill: '#ffffff',
      });
    battle.anchor.set(0.5);
    battle.inputEnabled = true;
    battle.events.onInputUp.add(() => {
      this.game.mode = 'battle';
      this.game.state.start('selection', true, false);
    });
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MenuState;



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_phaser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__heroes_HeroTypes__ = __webpack_require__(1);



class SelectionState extends __WEBPACK_IMPORTED_MODULE_0_phaser___default.a.State {
  create() {
    this.heroSelections = [];
    this.heroChoices = [];
    this.initHeroSelection();
    this.initHeroChoices();
    this.initPlayers();
    this.initKeys();

    const back = this.game.add.text(25, 25, 'Back', {
      fill: '#ffffff',
      fontSize: '32px',
    });
    back.inputEnabled = true;
    back.events.onInputUp.add(() => {
      this.game.mode = 'menu';
      this.game.state.start('menu', true, false);
    });

    const start = this.game.add.text(this.game.world.width - 100, this.game.world.height - 50, 'Start', {
      fill: '#ffffff',
      fontSize: '32px',
    });
    start.inputEnabled = true;
    start.events.onInputUp.add(() => {
      if (this.game.player0 && this.game.player1) {
        this.game.mode = 'battle';
        this.game.state.start('battle', true, false);
      }
    });
  }

  initPlayers() {
    this.playerOne = this.createPlayer(0);
    this.selectHero(this.playerOne);
    this.playerTwo = this.createPlayer(1);
    this.selectHero(this.playerTwo);
  }

  initKeys() {
    // player one input
    const w = this.game.input.keyboard.addKey(__WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Keyboard.W);
    w.onDown.add(() => {

    });
    const a = this.game.input.keyboard.addKey(__WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Keyboard.A);
    a.onDown.add(() => {
      if (this.playerOne.index > 0) {
        this.highlightChoice(this.playerOne.index - 1, this.playerOne);
      }
    });
    const s = this.game.input.keyboard.addKey(__WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Keyboard.S);
    s.onDown.add(() => {

    });
    const d = this.game.input.keyboard.addKey(__WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Keyboard.D);
    d.onDown.add(() => {
      if (this.playerOne.index < this.heroChoices.length - 1) {
        this.highlightChoice(this.playerOne.index + 1, this.playerOne);
      }
    });
    const j = this.game.input.keyboard.addKey(__WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Keyboard.J);
    j.onDown.add(() => {
      this.selectHero(this.playerOne);
    });
    const k = this.game.input.keyboard.addKey(__WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Keyboard.K);
    k.onDown.add(() => {
      this.cancelSelect(this.playerOne);
    });

    // player two input
    const up = this.game.input.keyboard.addKey(__WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Keyboard.UP);
    up.onDown.add(() => {

    });
    const left = this.game.input.keyboard.addKey(__WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Keyboard.LEFT);
    left.onDown.add(() => {
      if (this.playerTwo.index > 0) {
        this.highlightChoice(this.playerTwo.index - 1, this.playerTwo);
      }
    });
    const down = this.game.input.keyboard.addKey(__WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Keyboard.DOWN);
    down.onDown.add(() => {

    });
    const right = this.game.input.keyboard.addKey(__WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Keyboard.RIGHT);
    right.onDown.add(() => {
      if (this.playerTwo.index < this.heroChoices.length - 1) {
        this.highlightChoice(this.playerTwo.index + 1, this.playerTwo);
      }
    });
    const one = this.game.input.keyboard.addKey(__WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Keyboard.NUMPAD_1);
    one.onDown.add(() => {
      this.selectHero(this.playerTwo);
    });
    const two = this.game.input.keyboard.addKey(__WEBPACK_IMPORTED_MODULE_0_phaser___default.a.Keyboard.NUMPAD_2);
    two.onDown.add(() => {
      this.cancelSelect(this.playerTwo);
    });
  }

  initHeroSelection() {
    for (let i = 0; i < 2; i++) {
      const heroSelection = this.game.add.graphics(200 + (i * 300), 100);
      heroSelection.beginFill(0xffffff);
      heroSelection.drawRect(0, 0, 150, 200);
      heroSelection.endFill();
      this.heroSelections.push(heroSelection);
    }
  }

  initHeroChoices() {
    Object.keys(__WEBPACK_IMPORTED_MODULE_1__heroes_HeroTypes__["a" /* default */]).forEach((type, i) => {
      const heroChoice = this.game.add.sprite(50 + (i * 105), 450, type);
      heroChoice.width = 75;
      heroChoice.height = 75;
      this.heroChoices.push(heroChoice);
    });
  }

  createPlayer(num) {
    const heroSelection = this.heroSelections[num];
    const player = {
      id: num,
      index: num,
      border: 10,
      hero: this.game.add.image(heroSelection.left, heroSelection.top),
      highlight: this.game.add.graphics(),
    };
    if (num === 0) {
      player.color = 0xde2e1c;
    } else {
      player.color = 0x1c8dde;
    }
    player.highlight.lineStyle(2, player.color, 1);
    player.highlight.drawRect(
      this.heroChoices[player.index].left - 10,
      this.heroChoices[player.index].top - 10,
      this.heroChoices[player.index].width + 20,
      this.heroChoices[player.index].height + 20,
    );

    return player;
  }

  selectHero(player) {
    const heroSelection = this.heroSelections[player.id];
    player.hero.loadTexture(this.heroChoices[player.index].key);
    player.hero.width = heroSelection.width;
    player.hero.height = heroSelection.height;
    this.game[`player${player.id}`] = this.heroChoices[player.index].key;
  }

  cancelSelect(player) {
    player.hero.loadTexture();
    this.game[`player${player.id}`] = null;
  }

  highlightChoice(index, player) {
    const choice = this.heroChoices[index];
    let border = 10;
    if (
      (player === this.playerTwo && this.playerOne.index === index && this.playerOne.border === border) ||
      (player === this.playerOne && this.playerTwo.index === index && this.playerTwo.border === border)
    ) {
      border = 12;
    }
    player.highlight.clear();
    player.highlight.lineStyle(2, player.color, 1);
    player.highlight.drawRect(choice.left - border, choice.top - border, choice.width + border * 2, choice.height + border * 2);
    player.border = border;
    player.index = index;
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SelectionState;



/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_phaser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_phaser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__HeroStates__ = __webpack_require__(5);



class Hero extends Phaser.Group {
  constructor(game, x, y) {
    super(game);

    this.normalAttack = 5;
    this.width = 60;
    this.height = 60;
    this.health = 100;
    this.mana = 100;
    this.speed = 100;
    this.x = x;
    this.y = y;
    this.actions = {};
    this.combos = [];
    this.state = __WEBPACK_IMPORTED_MODULE_1__HeroStates__["a" /* default */].IDLE_STATE;

    this.game.heroes.push(this);

    this.activeCombo = this.create(0, 0);
    this.activeCombo.anchor.set(0.5);
    this.activeCombo.kill();

    // enable physics
    this.game.add.existing(this);
    this.enableBody = true;
    this.physicsBodyType = Phaser.Physics.ARCADE;

    // jump and fall animations
    this.jump = this.game.add.tween(this);
    this.jump.to({ y: 0 }, 500);
    this.jump.onComplete.add(() => this.fall.start());

    this.fall = this.game.add.tween(this);
    this.fall.to({ y: 0 }, 500);
    this.fall.onComplete.add(() => {
      this.playAnimation('stand');
      this.state = __WEBPACK_IMPORTED_MODULE_1__HeroStates__["a" /* default */].IDLE_STATE;
    });
  }

  initAnimations() {
    this.sprite.animations.add('stand', Phaser.Animation.generateFrameNames('stand', 1, 3), 3, true);
    this.sprite.animations.add('walk', Phaser.Animation.generateFrameNames('walk', 1, 4), 4);
    this.sprite.animations.add('pain', Phaser.Animation.generateFrameNames('pain', 1, 3), 3)
    this.sprite.animations.add('jump', ['jump'], 1);
  }

  checkAnimation() {
    if(this.sprite.animations.currentAnim.name === 'walk') {
      this.playAnimation('stand');
    }
  }

  update() {
    switch (this.state) {
      case __WEBPACK_IMPORTED_MODULE_1__HeroStates__["a" /* default */].IDLE_STATE:
      case __WEBPACK_IMPORTED_MODULE_1__HeroStates__["a" /* default */].JUMP_STATE:
      case __WEBPACK_IMPORTED_MODULE_1__HeroStates__["a" /* default */].JUMP_ATTACK_STATE:
        this.processMovement();
        break;
      case __WEBPACK_IMPORTED_MODULE_1__HeroStates__["a" /* default */].ATTACK_STATE:
        break;
    }
    //check if combo is active
    if(this.activeCombo.isAlive) {
      this.game.world.hash.forEach((sprite) => {
        if (sprite === this) return;
        if (this.isColliding(this.activeCombo, sprite)) {
          sprite.onHit(this.activeCombo.damage);
        }
      });
    }
  }

  activateCombo(combo) {
    this.state = __WEBPACK_IMPORTED_MODULE_1__HeroStates__["a" /* default */].COMBO_STATE;
  }

  //check if sprite is colliding with other sprites
  checkCollision() {
    if (this.state === __WEBPACK_IMPORTED_MODULE_1__HeroStates__["a" /* default */].IDLE_STATE) return;
    this.game.heroes.forEach((hero) => {
      if (hero === this) return;
      if (this.isColliding(this.sprite, hero.sprite)) {
        if (this.state === __WEBPACK_IMPORTED_MODULE_1__HeroStates__["a" /* default */].ATTACK_STATE || this.state === __WEBPACK_IMPORTED_MODULE_1__HeroStates__["a" /* default */].JUMP_ATTACK_STATE) {
          hero.onHit(this.normalAttack);
        }
      }
    });
  }

  //check if user has activated a combo
  checkCombos() {
    for(let i = 0; i <this.combos.length; i++) {
      let combo = this.combos[i];
      let keys = combo.keys;
      let j = 0;
      let timeDiff = 0;
      for(j = 1; j<keys.length; j++) {
        if(keys[j] === keys[j-1]) timeDiff = this.actions[keys[j]].timeDown - this.actions[keys[j-1]].prevTimeDown;
        else timeDiff = this.actions[keys[j]].timeDown - this.actions[keys[j-1]].timeDown;
        if(timeDiff < 10 || timeDiff > 200) break;
      }
      if(j === keys.length && this.state === __WEBPACK_IMPORTED_MODULE_1__HeroStates__["a" /* default */].IDLE_STATE) return this.activateCombo(combo);
    }
  }

  //check if two sprites are colliding in a 2.5d context
  isColliding(spriteA, spriteB) {
    const boundsA = spriteA.getBounds();
    const boundsB = spriteB.getBounds();
    //sprites are only colliding if their top parts are touching
    boundsA.scale(1, 0.5);
    boundsB.scale(1, 0.5);
    const shadowBoundsA = boundsA.clone();
    const shadowBoundsB = boundsB.clone();
    shadowBoundsA.y = (spriteA.state === __WEBPACK_IMPORTED_MODULE_1__HeroStates__["a" /* default */].JUMP_STATE || spriteA.state === __WEBPACK_IMPORTED_MODULE_1__HeroStates__["a" /* default */].JUMP_ATTACK_STATE)
    ? spriteA.jump.timeline[0].vStart.y : shadowBoundsA.y;
    shadowBoundsB.y = (spriteB.state === __WEBPACK_IMPORTED_MODULE_1__HeroStates__["a" /* default */].JUMP_STATE || spriteB.state === __WEBPACK_IMPORTED_MODULE_1__HeroStates__["a" /* default */].JUMP_ATTACK_STATE)
    ? spriteB.jump.timeline[0].vStart.y : shadowBoundsB.y;
    //check sprite itself and its shadow
    return Phaser.Rectangle.intersects(boundsA, boundsB) && Phaser.Rectangle.intersects(shadowBoundsA, shadowBoundsB);
  }

  onHit(damage) {
    if (!this.alive) return;
    this.health = this.health - damage;
    if (this.health <= 0) this.kill();
  }

  processMovement() {
    if (this.actions.up.isDown && this.y >= this.game.world.centerY) {
      this.playAnimation('walk');
      this.y -= 2;
    }
    if (this.actions.left.isDown) {
      this.sprite.scale.x = 1;
      this.playAnimation('walk');
      this.x -= 2;
    }
    if (this.actions.down.isDown && this.state === __WEBPACK_IMPORTED_MODULE_1__HeroStates__["a" /* default */].IDLE_STATE) {
      this.playAnimation('walk');
      this.y += 2;
    }
    if (this.actions.right.isDown) {
      this.sprite.scale.x = -1;
      this.playAnimation('walk');
      this.x += 2;
    }
  }

  processAttack() {
    this.checkCombos();
    switch (this.state) {
      case __WEBPACK_IMPORTED_MODULE_1__HeroStates__["a" /* default */].JUMP_STATE:
        this.state = __WEBPACK_IMPORTED_MODULE_1__HeroStates__["a" /* default */].JUMP_ATTACK_STATE;
        this.playAnimation('jump_attack');
        this.checkCollision();
        break;
      case __WEBPACK_IMPORTED_MODULE_1__HeroStates__["a" /* default */].IDLE_STATE:
        this.state = __WEBPACK_IMPORTED_MODULE_1__HeroStates__["a" /* default */].ATTACK_STATE;
        this.playAnimation('stand_attack');
        this.checkCollision();
        break;
    }
    this.actions.attack.prevTimeDown = this.actions.attack.timeDown;
  }

  processJump() {
    this.checkCombos();
    if (this.state === __WEBPACK_IMPORTED_MODULE_1__HeroStates__["a" /* default */].IDLE_STATE) {
      this.jump.updateTweenData('vEnd', { y: this.y - 100 });
      this.fall.updateTweenData('vEnd', { y: this.y });
      this.state = __WEBPACK_IMPORTED_MODULE_1__HeroStates__["a" /* default */].JUMP_STATE;
      this.jump.start();
      this.playAnimation('jump');
    }
  }

  processCrouch() {
    this.checkCombos();
    if (this.state === __WEBPACK_IMPORTED_MODULE_1__HeroStates__["a" /* default */].IDLE_STATE) {
      this.playAnimation('crouch');
    }
  }

  playAnimation(animation) {
      switch(animation) {
        case 'stand':
          if(this.sprite.animations.currentAnim.name !== 'stand') this.sprite.animations.play('stand');
          break;
        case 'walk':
          if(this.sprite.animations.currentAnim.name === 'stand') this.sprite.animations.play('walk');
          break;
        case 'jump':
          if(this.sprite.animations.currentAnim.name !== 'jump') this.sprite.animations.play('jump');
          break;
      }
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Hero;



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pixi__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_pixi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_pixi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_p2__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_p2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_p2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_phaser__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_phaser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_phaser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__states_boot__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__states_menu__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__states_battle__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__states_selection__ = __webpack_require__(10);








class MapleFighter extends __WEBPACK_IMPORTED_MODULE_2_phaser___default.a.Game {
  constructor() {
    // const docElement = document.documentElement;
    super(800, 600, __WEBPACK_IMPORTED_MODULE_2_phaser___default.a.CANVAS);

    this.state.add('boot', __WEBPACK_IMPORTED_MODULE_3__states_boot__["a" /* default */], false);
    this.state.add('menu', __WEBPACK_IMPORTED_MODULE_4__states_menu__["a" /* default */], false);
    this.state.add('battle', __WEBPACK_IMPORTED_MODULE_5__states_battle__["a" /* default */], false);
    this.state.add('selection', __WEBPACK_IMPORTED_MODULE_6__states_selection__["a" /* default */], false);
  }

  start() {
    this.state.start('boot');
  }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = MapleFighter;


const mapleFighter = new MapleFighter();
mapleFighter.start();


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Menu {
  constructor(game, fighters) {
    this.game = game;
    this.fighters = fighters;

    this.drawBackground();
    this.drawFighters();
  }

  update() {
    this.fighters.forEach((fighter) => {
      fighter.healthBar.clear();
      fighter.healthBar.beginFill(0xff0000);
      fighter.healthBar.drawRect(0, 0, fighter.health, 15);
      fighter.healthBar.endFill();
      fighter.manaBar.clear();
      fighter.manaBar.beginFill(0x0000ff);
      fighter.manaBar.drawRect(0, 0, fighter.mana, 15);
      fighter.healthBar.endFill();
    });
  }

  drawBackground() {
    this.background = this.game.add.graphics(0, 0);
    this.background.beginFill(0x007eff);
    this.background.drawRect(0, 0, this.game.world.width, this.game.world.height * 1 / 4);
    this.background.endFill();
    this.background.lineStyle(1, 0xffd900, 1);
    this.background.moveTo(0, this.game.world.height * 1 / 8);
    this.background.lineTo(this.game.world.width, this.game.world.height * 1 / 8);
    this.background.moveTo(this.game.world.width * 1 / 4, 0);
    this.background.lineTo(this.game.world.width * 1 / 4, this.game.world.height * 1 / 4);
    this.background.moveTo(this.game.world.width * 1 / 2, 0);
    this.background.lineTo(this.game.world.width * 1 / 2, this.game.world.height * 1 / 4);
    this.background.moveTo(this.game.world.width * 3 / 4, 0);
    this.background.lineTo(this.game.world.width * 3 / 4, this.game.world.height * 1 / 4);
    this.background.endFill();
  }

  drawFighters() {
    this.fighters.forEach((fighter, i) => {
      const row = i > 3 ? 1 : 0;
      const col = i > 3 ? i % 4 : i;
      fighter.img = this.game.add.image(this.game.world.width * col / 4 + 20, this.game.world.height * row / 8 + 20, this.game.player0);
      fighter.healthBar = this.game.add.graphics(this.game.world.width * col / 4 + 70, this.game.world.height * row / 8 + 20);
      fighter.healthBar.beginFill(0xff0000);
      fighter.healthBar.drawRect(0, 0, fighter.health, 15);
      fighter.healthBar.endFill();
      fighter.manaBar = this.game.add.graphics(this.game.world.width * col / 4 + 70, this.game.world.height * row / 8 + 40);
      fighter.manaBar.beginFill(0x0000ff);
      fighter.manaBar.drawRect(0, 0, fighter.mana, 15);
      fighter.healthBar.endFill();
    });
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Menu;



/***/ })
],[16]);