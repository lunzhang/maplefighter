import 'pixi';
import 'p2';
import Phaser from 'phaser';
import BootState from './states/boot';
import MenuState from './states/menu';
import BattleState from './states/battle';
import SelectionState from './states/selection';

export default class MapleFighter extends Phaser.Game {
  constructor() {
    // const docElement = document.documentElement;
    super(800, 600, Phaser.CANVAS);

    this.state.add('boot', BootState, false);
    this.state.add('menu', MenuState, false);
    this.state.add('battle', BattleState, false);
    this.state.add('selection', SelectionState, false);
  }

  start() {
    this.state.start('boot');
  }
}

const mapleFighter = new MapleFighter();
mapleFighter.start();
