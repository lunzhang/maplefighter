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

    this.game.load.atlas(HeroTypes.ARCHER, 'resources/imgs/heroes/archer/archer.png', 'resources/imgs/heroes/archer/archer.json');
    //this.game.load.atlas(HeroTypes.CANNONEER, 'resources/imgs/heroes/cannoneer/cannoneer.png', 'resources/imgs/heroes/cannoneer/cannoneer.json');
    //this.game.load.atlas(HeroTypes.DUAL_BLADE, 'resources/imgs/heroes/dual_blade/dual_blade.png', 'resources/imgs/heroes/dual_blade/dual_blade.json');
    this.game.load.atlas(HeroTypes.MAGICIAN, 'resources/imgs/heroes/magician/magician.png', 'resources/imgs/heroes/magician/magician.json');
    this.game.load.atlas(HeroTypes.PIRATE, 'resources/imgs/heroes/pirate/pirate.png', 'resources/imgs/heroes/pirate/pirate.json');
    this.game.load.atlas(HeroTypes.THIEF, 'resources/imgs/heroes/thief/thief.png', 'resources/imgs/heroes/thief/thief.json');
    this.game.load.atlas(HeroTypes.WARRIOR, 'resources/imgs/heroes/warrior/warrior.png', 'resources/imgs/heroes/warrior/warrior.json');
  }

  update() {
    if (this.ready) {
      this.game.state.start('menu', true, false);
    }
  }
}
