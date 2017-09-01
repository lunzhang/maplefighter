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

    // this.game.load.image(HeroTypes.ARCHER, 'resources/imgs/heroes/archer.png');
    // this.game.load.image(HeroTypes.CANNONEER, 'resources/imgs/heroes/cannoneer.png');
    // this.game.load.image(HeroTypes.DUAL_BLADE, 'resources/imgs/heroes/dual_blade.png');
    // this.game.load.image(HeroTypes.MAGICIAN, 'resources/imgs/heroes/magician.png');
    // this.game.load.image(HeroTypes.PIRATE, 'resources/imgs/heroes/pirate.png');
    // this.game.load.image(HeroTypes.THIEF, 'resources/imgs/heroes/thief.png');
    // this.game.load.image(HeroTypes.WARRIOR, 'resources/imgs/heroes/warrior.png');
  }

  update() {
    if (this.ready) {
      this.game.state.start('menu', true, false);
    }
  }
}
