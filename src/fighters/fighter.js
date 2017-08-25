import Phaser from 'phaser';

const IDLE_STATE = 'IDLE_STATE';
const JUMP_STATE = 'JUMP_STATE';
const ATTACK_STATE = 'ATTACK_STATE';
const JUMP_ATTACK_STATE = 'JUMP_ATTACK_STATE';

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
      this.reset();
    });
    this.state = IDLE_STATE;
  }

  update() {
    this.body.velocity.y = 0;
    this.body.velocity.x = 0;
    switch (this.state) {
      case IDLE_STATE:
        this.processAction();
        break;
      case JUMP_STATE:
        this.processAttack();
        this.processMovement();
        break;
      case JUMP_ATTACK_STATE:
        this.processMovement();
        break;
      case ATTACK_STATE:
        break;
    }
    this.reset();
  }

  checkCollision() {
    if (this.state === IDLE_STATE) return;
    this.game.world.hash.forEach((sprite) => {
      if (sprite === this) return;
      if (this.isColliding(this, sprite)) {
        if (this.state === ATTACK_STATE || this.state === JUMP_ATTACK_STATE) {
          sprite.onHit(10);
        }
      }
    });
  }

  isColliding(spriteA, spriteB) {
    const boundsA = spriteA.getBounds();
    const boundsB = spriteB.getBounds();
    boundsA.scale(1, 0.5);
    boundsB.scale(1, 0.5);
    const shadowBoundsA = boundsA.clone();
    const shadowBoundsB = boundsB.clone();
    shadowBoundsA.y = spriteA.state === JUMP_STATE || JUMP_ATTACK_STATE ? spriteA.jump.timeline[0].vStart : shadowBoundsA.y;
    shadowBoundsB.y = spriteB.state === JUMP_STATE || JUMP_ATTACK_STATE ? spriteB.jump.timeline[0].vStart : shadowBoundsB.y;
    return Phaser.Rectangle.intersects(boundsA, boundsB) && Phaser.Rectangle.intersects(shadowBoundsA, shadowBoundsB);
  }

  onHit(damage) {
    this.health = this.health - damage;
    if (this.health <= 0) this.kill();
  }

  processMovement() {
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
  }

  processAttack() {
    if (this.actions.attack) {
      this.attack();
    }
  }

  processJump() {
    if (this.actions.jump) {
      this.jump.updateTweenData('vEnd', { y: this.y - 100 });
      this.fall.updateTweenData('vEnd', { y: this.y });
      this.state = JUMP_STATE;
      this.jump.start();
    }
  }

  processAction() {
    this.processMovement();
    this.processAttack();
    this.processJump();
  }

  attack() {
    if (this.state === JUMP_STATE) {
      this.state = JUMP_ATTACK_STATE;
    } else {
      this.state = ATTACK_STATE;
      this.body.velocity.y = 0;
      this.body.velocity.x = 0;
    }
    this.checkCollision();
    setTimeout(() => {
      this.state = IDLE_STATE;
    }, 600);
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
