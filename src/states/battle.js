import Phaser from 'phaser';
import Fighter from '../heroes/Warrior';
import Warrior from '../heroes/Warrior';
import HeroTypes from '../heroes/HeroTypes';

import Menu from '../ui/battle/menu';

export default class BattleState extends Phaser.State {
  create() {
    this.game.heroes = [];
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.playerOne = this.createHero(this.game.player0, 100, this.game.world.centerY);
    this.playerTwo = this.createHero(this.game.player1, 200, this.game.world.centerY);
    this.menu = new Menu(this.game, [this.playerOne, this.playerTwo]);

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
    return new Warrior(this.game, x, y);
  }

  //event listeners for players
  initActions() {
    // player one actions
    this.playerOne.actions.up = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
    this.playerOne.actions.down = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
    this.playerOne.actions.left = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
    this.playerOne.actions.right = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
    this.playerOne.actions.attack = this.game.input.keyboard.addKey(Phaser.Keyboard.J);
    this.playerOne.actions.jump = this.game.input.keyboard.addKey(Phaser.Keyboard.K);
    this.playerOne.actions.defend = this.game.input.keyboard.addKey(Phaser.Keyboard.L);

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
    this.playerOne.actions.defend.onDown.add(function () {
      this.processDefend();
    }, this.playerOne);

    // player two actions
    this.playerTwo.actions.up = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
    this.playerTwo.actions.down = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    this.playerTwo.actions.left = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    this.playerTwo.actions.right = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    this.playerTwo.actions.attack = this.game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_1);
    this.playerTwo.actions.jump = this.game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_2);
    this.playerTwo.actions.defend = this.game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_3);

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
    this.playerTwo.actions.defend.onDown.add(function () {
      this.processDefend();
    }, this.playerTwo);
  }

  update() {
    this.menu.update();
  }
}
