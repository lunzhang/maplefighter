import Hero from './Hero';
import HeroTypes from './HeroTypes';

const DARK_SIGHT = 'DARK_SIGHT';
const SAVAGE_BLOW = 'SAVEAGE_BLOW';
const TRIPLE_THROW = 'TRIPLE_THROW';
const SHADOW_PARTNER = 'SHADOW_PARTNER';
const BOOMERANG_STEP = 'BOOMERANG_STEP';

export default class Thief extends Hero {
  constructor(game, x, y) {
    super(game, x, y, HeroTypes.THIEF);
  }

  activateCombo(combo) {
    super.activateCombo(combo);
    switch(combo.name) {

    }
  }

}
