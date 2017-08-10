import 'pixi';
import 'p2';
import Phaser from 'phaser';
import BootState from './states/boot.js';

export default class MapleFighter extends Phaser.Game{

  constructor(){
    super();

    this.state.add('boot', BootState, false);

    this.state.start('boot');

  }

}

const maplefighter = new MapleFighter();
