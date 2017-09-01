import Phaser from 'phaser';
import HeroTypes from '../heroes/HeroTypes';

export default class BootState extends Phaser.State {
  constructor() {
    super();
    this.ready = false;
  }

  preload() {
    this.load.onLoadComplete.addOnce(() => {
      this.ready = true;
    }, this);
    this.ready = true;
    this.game.stage.backgroundColor = '#d77826';

    // this.game.load.image(HeroTypes.ARCHER, 'resources/imgs/fighters/archer.png');
    // this.game.load.image(HeroTypes.CANNONEER, 'resources/imgs/fighters/cannoneer.png');
    // this.game.load.image(HeroTypes.DUAL_BLADE, 'resources/imgs/fighters/dual_blade.png');
    // this.game.load.image(HeroTypes.MAGICIAN, 'resources/imgs/fighters/magician.png');
    // this.game.load.image(HeroTypes.PIRATE, 'resources/imgs/fighters/pirate.png');
    // this.game.load.image(HeroTypes.THIEF, 'resources/imgs/fighters/thief.png');
    // this.game.load.image(HeroTypes.WARRIOR, 'resources/imgs/fighters/warrior.png');
  }

  update() {
    if (this.ready) {
      this.game.state.start('menu', true, false);
    }
  }
}
