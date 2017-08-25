import Phaser from 'phaser';
import Fighter from '../fighters/fighter';
import Menu from '../ui/battle/menu';

export default class BattleState extends Phaser.State {
  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.playerOne = new Fighter(this.game, 100, this.game.world.centerY, this.game.player0);
    this.playerTwo = new Fighter(this.game, 200, this.game.world.centerY, this.game.player1);
    this.menu = new Menu(this.game, [this.playerOne, this.playerTwo]);

    this.initActions();
  }

  initActions() {
    // player one actions
    this.playerOne.actions.up = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
    this.playerOne.actions.down = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
    this.playerOne.actions.left = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
    this.playerOne.actions.right = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
    this.playerOne.actions.attack = this.game.input.keyboard.addKey(Phaser.Keyboard.J);
    this.playerOne.actions.jump = this.game.input.keyboard.addKey(Phaser.Keyboard.K);
    this.playerOne.actions.defend = this.game.input.keyboard.addKey(Phaser.Keyboard.L);

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
