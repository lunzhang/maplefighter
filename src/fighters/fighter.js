import Phaser from 'phaser';

const IDLE_STATE = 'IDLE_STATE';
const JUMP_STATE = 'JUMP_STATE';

export default class Fighter extends Phaser.Sprite {
  constructor(game, x, y, key, frame) {
    super(game, x, y, key, frame);
    this.game.add.existing(this);
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.collideWorldBounds = true;

    this.width = 60;
    this.height = 60;
    this.actions = {
      up: false,
      left: false,
      down: false,
      right: false,
      attack: false,
      jump: false,
      defend: false,
    };
    this.health = 100;
    this.mana = 100;
    this.speed = 100;

    this.jump = this.game.add.tween(this);
    this.jump.to({ y: 0 }, 500);
    this.jump.onComplete.add(() => this.fall.start());

    this.fall = this.game.add.tween(this);
    this.fall.to({ y: 0 }, 500);
    this.fall.onComplete.add(() => {
      this.state = IDLE_STATE;
    });
    this.state = IDLE_STATE;
  }

  update() {
    this.processAction();
    this.reset();
  }

  processAction() {
    this.body.velocity.y = 0;
    this.body.velocity.x = 0;

    if (this.actions.up && this.y >= this.game.world.centerY) {
      this.body.velocity.y = -100;
    }
    if (this.actions.left) {
      this.body.velocity.x = -100;
    }
    if (this.actions.down && this.state === IDLE_STATE) {
      this.body.velocity.y = 100;
    }
    if (this.actions.right) {
      this.body.velocity.x = 100;
    }

    if (this.actions.attack) {
      this.attack();
    }

    if (this.actions.jump && this.state === IDLE_STATE) {
      this.jump.updateTweenData('vEnd', { y: this.y - 100 });
      this.fall.updateTweenData('vEnd', { y: this.y });
      this.jump.start();
      this.state = JUMP_STATE;
    }
  }

  attack() {
    console.log(this);
  }

  reset() {
    this.actions.up = false;
    this.actions.left = false;
    this.actions.down = false;
    this.actions.right = false;
    this.actions.attack = false;
    this.actions.jump = false;
    this.actions.defend = false;
  }
}
