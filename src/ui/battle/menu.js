export default class Menu {
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
