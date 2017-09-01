import Hero from './Hero';
import HeroTypes from './HeroTypes';

const DARK_SIGHT = 'DARK_SIGHT';
const BLADE_FURRY = 'BLADE_FURRY';
const TORNADO_SPIN = 'TORNADO_SPIN';
const CHAINS_OF_HELL = 'CHAINS_OF_HELL';
const FLYING_ASSAULTER = 'FLYING_ASSAULTER';

export default class DualBlade extends Hero {
  constructor(game, x, y) {
    super(game, x, y, HeroTypes.DUAL_BLADE);
  }

  activateCombo(combo) {
    super.activateCombo(combo);
    switch(combo.name) {

    }
  }

}
