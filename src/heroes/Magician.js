import Hero from './Hero';
import HeroTypes from './HeroTypes';

const ENERGY_BOLT = 'ENERGY_BOLT';
const POISON_MIST = 'POISON_MIST';
const BLIZZARD = 'BLIZZARD';
const HEAL = 'HEAL';
const SHINNING_RAY = 'SHINNING_RAY';

export default class Magician extends Hero {
  constructor(game, x, y) {
    super(game, x, y, HeroTypes.MAGICIAN);
  }

  activateCombo(combo) {
    super.activateCombo(combo);
    switch(combo.name) {

    }
  }

}
