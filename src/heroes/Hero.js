import Phaser from 'phaser';
import HeroStates from './HeroStates';

export default class Hero extends Phaser.Group {
  constructor(game, x, y) {
    super(game);

    this.width = 60;
    this.height = 60;
    this.health = 100;
    this.mana = 100;
    this.speed = 100;
    this.x = x;
    this.y = y;
    this.actions = {};
    this.combos = [];
    this.state = HeroStates.IDLE_STATE;

    this.game.sprites.push(this);

    this.activeCombo = new Phaser.Sprite(game, x, y);
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
      this.state = HeroStates.IDLE_STATE;
    });

  }

  update() {
    switch (this.state) {
      case HeroStates.IDLE_STATE:
      case HeroStates.JUMP_STATE:
      case HeroStates.JUMP_ATTACK_STATE:
        this.processMovement();
        break;
      case HeroStates.ATTACK_STATE:
        break;
    }
    //check if combo is active
    if(this.activeCombo.isAlive) {
      this.game.world.hash.forEach((sprite) => {
        if (sprite === this) return;
        if (this.isColliding(this.activeCombo, sprite)) {
          sprite.onHit(10);
        }
      });
    }
  }

  activateCombo(combo) {
    this.state = HeroStates.COMBO_STATE;
  }

  //check if sprite is colliding with other sprites
  checkCollision() {
    if (this.state === HeroStates.IDLE_STATE) return;
    this.game.sprites.forEach((sprite) => {
      if (sprite === this) return;
      if (this.isColliding(this, sprite)) {
        if (this.state === HeroStates.ATTACK_STATE || this.state === HeroStates.JUMP_ATTACK_STATE) {
          sprite.onHit(10);
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
      if(j === keys.length) return this.activateCombo(combo);
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
    shadowBoundsA.y = (spriteA.state === HeroStates.JUMP_STATE || spriteA.state === HeroStates.JUMP_ATTACK_STATE)
    ? spriteA.jump.timeline[0].vStart.y : shadowBoundsA.y;
    shadowBoundsB.y = (spriteB.state === HeroStates.JUMP_STATE || spriteB.state === HeroStates.JUMP_ATTACK_STATE)
    ? spriteB.jump.timeline[0].vStart.y : shadowBoundsB.y;
    //check sprite itself and its shadow
    return Phaser.Rectangle.intersects(boundsA, boundsB) && Phaser.Rectangle.intersects(shadowBoundsA, shadowBoundsB);
  }

  onHit(damage) {
    if (!this.alive) return;
    if (this.state !== HeroStates.DEFEND_STATE) this.health = this.health - damage;
    if (this.health <= 0) this.kill();
  }

  processMovement() {
    if (this.actions.up.isDown && this.y >= this.game.world.centerY) {
      this.y -= 2;
    }
    if (this.actions.left.isDown) {
      this.x -= 2;
    }
    if (this.actions.down.isDown && this.state === HeroStates.IDLE_STATE) {
      this.y += 2;
    }
    if (this.actions.right.isDown) {
      this.x += 2;
    }
  }

  processAttack() {
    this.checkCombos();
    switch (this.state) {
      case HeroStates.JUMP_STATE:
        this.state = HeroStates.JUMP_ATTACK_STATE;
        setTimeout(() => {
          this.state = HeroStates.IDLE_STATE;
        }, 1000);
        this.checkCollision();
        break;
      case HeroStates.IDLE_STATE:
        this.state = HeroStates.ATTACK_STATE;
        setTimeout(() => {
          this.state = HeroStates.IDLE_STATE;
        }, 600);
        this.checkCollision();
        break;
    }
    this.actions.attack.prevTimeDown = this.actions.attack.timeDown;
  }

  processJump() {
    this.checkCombos();
    if (this.state === HeroStates.IDLE_STATE) {
      this.jump.updateTweenData('vEnd', { y: this.y - 100 });
      this.fall.updateTweenData('vEnd', { y: this.y });
      this.state = HeroStates.JUMP_STATE;
      this.jump.start();
    }
  }

  processDefend() {
    this.checkCombos();
    if (this.state === HeroStates.IDLE_STATE) {
      this.state = HeroStates.DEFEND_STATE;
      setTimeout(() => {
        this.state = HeroStates.IDLE_STATE;
      }, 600);
    }
  }
}
