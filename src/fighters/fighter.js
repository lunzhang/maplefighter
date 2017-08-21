export default class Fighter {
  constructor(game, x, y, frame) {
    this.game = game;
    this.sprite = game.add.sprite(x, y, frame);
    game.physics.arcade.enable(this.sprite);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.width = 60;
    this.sprite.height = 60;
    this.actions = {
      up: false,
      left: false,
      down: false,
      right: false,
      attack: false,
      jump: false,
      defend: false,
    };

    this.jump = this.game.add.tween(this.sprite);
    this.jump.to({ y: this.sprite.y - 50 }, 1500);
    this.jump.onComplete.add(() => this.fall.start());

    this.fall = this.game.add.tween(this.sprite);
    this.fall.to({ y: this.sprite.y + 50 }, 1500);
    this.fall.onComplete.add(() => {
      this.inProgress = false;
    });
  }

  update() {
    if (this.inProgress) {
      // in action
    } else {
      this.processAction();
    }

    this.reset();
  }

  processAction() {
    if (this.actions.up) {
      this.sprite.y -= 3;
    }
    if (this.actions.left) {
      this.sprite.x -= 3;
    }
    if (this.actions.down) {
      this.sprite.y += 3;
    }
    if (this.actions.right) {
      this.sprite.x += 3;
    }
    if (this.actions.attack) {
      this.attack();
    }
    if (this.actions.jump) {
      console.log(this.jump);
      this.jump.updateTweenData('y', this.sprite.y - 50);
      this.fall.properties.y = this.sprite.y + 50;
      this.jump.start();
      this.inProgress = true;
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
