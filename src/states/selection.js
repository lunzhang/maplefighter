import Phaser from 'phaser';
import HeroTypes from '../heroes/HeroTypes';

export default class SelectionState extends Phaser.State {
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
    const w = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
    w.onDown.add(() => {

    });
    const a = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
    a.onDown.add(() => {
      if (this.playerOne.index > 0) {
        this.highlightChoice(this.playerOne.index - 1, this.playerOne);
      }
    });
    const s = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
    s.onDown.add(() => {

    });
    const d = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
    d.onDown.add(() => {
      if (this.playerOne.index < this.heroChoices.length - 1) {
        this.highlightChoice(this.playerOne.index + 1, this.playerOne);
      }
    });
    const j = this.game.input.keyboard.addKey(Phaser.Keyboard.J);
    j.onDown.add(() => {
      this.selectHero(this.playerOne);
    });
    const k = this.game.input.keyboard.addKey(Phaser.Keyboard.K);
    k.onDown.add(() => {
      this.cancelSelect(this.playerOne);
    });

    // player two input
    const up = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
    up.onDown.add(() => {

    });
    const left = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    left.onDown.add(() => {
      if (this.playerTwo.index > 0) {
        this.highlightChoice(this.playerTwo.index - 1, this.playerTwo);
      }
    });
    const down = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    down.onDown.add(() => {

    });
    const right = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    right.onDown.add(() => {
      if (this.playerTwo.index < this.heroChoices.length - 1) {
        this.highlightChoice(this.playerTwo.index + 1, this.playerTwo);
      }
    });
    const one = this.game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_1);
    one.onDown.add(() => {
      this.selectHero(this.playerTwo);
    });
    const two = this.game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_2);
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
    Object.keys(HeroTypes).forEach((type, i) => {
      const heroChoice = this.game.add.image(50 + (i * 105), 450, type);
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
