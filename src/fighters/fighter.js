import Phaser from 'phaser';

const IDLE_STATE = 'IDLE_STATE';
const JUMP_STATE = 'JUMP_STATE';
const ATTACK_STATE = 'ATTACK_STATE';
const JUMP_ATTACK_STATE = 'JUMP_ATTACK_STATE';
const DEFEND_STATE = 'DEFEND_STATE';

export default class Fighter extends Phaser.Sprite {
  constructor(game, x, y, key, frame) {
    super(game, x, y, key, frame);

    this.width = 60;
    this.height = 60;
    this.health = 100;
    this.mana = 100;
    this.speed = 100;
    this.actions = {};

    // enable physics
    this.game.add.existing(this);
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.collideWorldBounds = true;

    // jump and fall animations
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
    switch (this.state) {
      case IDLE_STATE:
      case JUMP_STATE:
      case JUMP_ATTACK_STATE:
        this.processMovement();
        break;
      case ATTACK_STATE:
        break;
    }
  }

  checkCollision() {
    if (this.state === IDLE_STATE) return;
    this.game.world.hash.forEach((sprite) => {
      if (sprite === this) return;
      if (this.isColliding(this, sprite)) {
        if (this.state === ATTACK_STATE || this.state === JUMP_ATTACK_STATE
          && sprite.state !== DEFEND_STATE) {
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
    if (!this.alive) return;
    this.health = this.health - damage;
    if (this.health <= 0) this.kill();
  }

  processMovement() {
    if (this.actions.up.isDown && this.y >= this.game.world.centerY) {
      this.body.y -= 2;
    }
    if (this.actions.left.isDown) {
      this.body.x -= 2;
    }
    if (this.actions.down.isDown && this.state === IDLE_STATE) {
      this.body.y += 2;
    }
    if (this.actions.right.isDown) {
      this.body.x += 2;
    }
  }

  processAttack() {
    switch (this.state) {
      case JUMP_STATE:
        this.state = JUMP_ATTACK_STATE;
        setTimeout(() => {
          this.state = IDLE_STATE;
        }, 1000);
        this.checkCollision();
        break;
      case IDLE_STATE:
        this.state = ATTACK_STATE;
        this.body.velocity.y = 0;
        this.body.velocity.x = 0;
        setTimeout(() => {
          this.state = IDLE_STATE;
        }, 600);
        this.checkCollision();
        break;
    }
  }

  processJump() {
    if (this.state === IDLE_STATE) {
      this.jump.updateTweenData('vEnd', { y: this.y - 100 });
      this.fall.updateTweenData('vEnd', { y: this.y });
      this.state = JUMP_STATE;
      this.jump.start();
    }
  }

  processDefend() {
    if (this.state === IDLE_STATE) {
      this.state = DEFEND_STATE;
      this.body.velocity.y = 0;
      this.body.velocity.x = 0;
      setTimeout(() => {
        this.state = IDLE_STATE;
      }, 600);
    }
  }
}
