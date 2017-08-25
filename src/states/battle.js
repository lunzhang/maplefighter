import Phaser from 'phaser';
import Fighter from '../fighters/fighter';
import Menu from '../ui/battle/menu';

export default class BattleState extends Phaser.State {
  create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.playerOne = new Fighter(this.game, 100, this.game.world.centerY, this.game.player0);
    this.playerTwo = new Fighter(this.game, 200, this.game.world.centerY, this.game.player1);

    this.menu = new Menu(this.game, [this.playerOne, this.playerTwo]);
  }

  update() {
    this.checkInputs();
    this.menu.update();
  }

  checkInputs() {
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.W)) {
      this.playerOne.actions.up = true;
    }
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.A)) {
      this.playerOne.actions.left = true;
    }
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.S)) {
      this.playerOne.actions.down = true;
    }
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.D)) {
      this.playerOne.actions.right = true;
    }
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.J)) {
      this.playerOne.actions.attack = true;
    }
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.K)) {
      this.playerOne.actions.jump = true;
    }
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.L)) {
      this.playerOne.actions.defend = true;
    }

    if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
      this.playerTwo.actions.up = true;
    }
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      this.playerTwo.actions.left = true;
    }
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
      this.playerTwo.actions.down = true;
    }
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      this.playerTwo.actions.right = true;
    }
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.NUMPAD_1)) {
      this.playerTwo.actions.attack = true;
    }
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.NUMPAD_2)) {
      this.playerTwo.actions.jump = true;
    }
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.NUMPAD_3)) {
      this.playerTwo.actions.defend = true;
    }
  }
}
