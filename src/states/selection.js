import Phaser from 'phaser';

const fighters = ['archer', 'cannoneer', 'dual_blade', 'magician', 'pirate', 'thief', 'warrior'];

export default class SelectionState extends Phaser.State {
  create() {
    this.fighterSelections = [];
    this.fighterChoices = [];
    this.initFighterSelection();
    this.initFighterChoices();
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
    this.selectFighter(this.playerOne);
    this.playerTwo = this.createPlayer(1);
    this.selectFighter(this.playerTwo);
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
      if (this.playerOne.index < this.fighterChoices.length - 1) {
        this.highlightChoice(this.playerOne.index + 1, this.playerOne);
      }
    });
    const j = this.game.input.keyboard.addKey(Phaser.Keyboard.J);
    j.onDown.add(() => {
      this.selectFighter(this.playerOne);
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
      if (this.playerTwo.index < this.fighterChoices.length - 1) {
        this.highlightChoice(this.playerTwo.index + 1, this.playerTwo);
      }
    });
    const one = this.game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_1);
    one.onDown.add(() => {
      this.selectFighter(this.playerTwo);
    });
    const two = this.game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_2);
    two.onDown.add(() => {
      this.cancelSelect(this.playerTwo);
    });
  }

  initFighterSelection() {
    for (let i = 0; i < 2; i++) {
      const fighterSelection = this.game.add.graphics(200 + (i * 300), 100);
      fighterSelection.beginFill(0xffffff);
      fighterSelection.drawRect(0, 0, 150, 200);
      fighterSelection.endFill();
      this.fighterSelections.push(fighterSelection);
    }
  }

  initFighterChoices() {
    for (let i = 0; i < fighters.length; i++) {
      const fighterChoice = this.game.add.image(50 + (i * 105), 450, fighters[i]);
      fighterChoice.width = 75;
      fighterChoice.height = 75;
      this.fighterChoices.push(fighterChoice);
    }
  }

  createPlayer(num) {
    const fighterSelection = this.fighterSelections[num];
    const player = {
      id: num,
      index: num,
      border: 10,
      fighter: this.game.add.image(fighterSelection.left, fighterSelection.top),
      highlight: this.game.add.graphics(),
    };
    if (num === 0) {
      player.color = 0xde2e1c;
    } else {
      player.color = 0x1c8dde;
    }
    player.highlight.lineStyle(2, player.color, 1);
    player.highlight.drawRect(
      this.fighterChoices[player.index].left - 10,
      this.fighterChoices[player.index].top - 10,
      this.fighterChoices[player.index].width + 20,
      this.fighterChoices[player.index].height + 20,
    );

    return player;
  }

  selectFighter(player) {
    const fighterSelection = this.fighterSelections[player.id];
    player.fighter.loadTexture(fighters[player.index]);
    player.fighter.width = fighterSelection.width;
    player.fighter.height = fighterSelection.height;
    this.game[`player${player.id}`] = fighters[player.index];
  }

  cancelSelect(player) {
    player.fighter.loadTexture();
    this.game[`player${player.id}`] = null;
  }

  highlightChoice(index, player) {
    const choice = this.fighterChoices[index];
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
