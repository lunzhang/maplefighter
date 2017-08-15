import 'pixi';
import 'p2';
import Phaser from 'phaser';
import BootState from './states/boot.js';
import MenuState from './states/menu.js';
import BattleState from './states/battle.js';
import SelectionState from './states/selection.js';

export default class MapleFighter extends Phaser.Game{

  constructor(){
    const docElement = document.documentElement;
    super(800,600,Phaser.CANVAS);

    this.global = {

    };

    this.state.add('boot', BootState, false);
    this.state.add('menu', MenuState, false);
    this.state.add('battle', BattleState, false);
    this.state.add('selection', SelectionState, false);

    this.state.start('boot');

  }

}

const maplefighter = new MapleFighter();
