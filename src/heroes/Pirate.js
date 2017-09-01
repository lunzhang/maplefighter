import Hero from './Hero';
import HeroTypes from './HeroTypes';

const SUPER_TRANSFORMATION = 'SUPER_TRANSFORMATION';
const BATTLESHIP = 'BATTLESHIP';
const EIGHT_LEG_EASTON = 'EIGHT_LEG_EASTON';
const DRAGON_STRIKE = 'DRAGON_STRIKE';
const OCTOPUNCH = 'OCTOPUNCH';
const TRIPLE_FIRE = 'TRIPLE_FIRE';

export default class Pirate extends Hero {
  constructor(game, x, y) {
    super(game, x, y, HeroTypes.PIRATE);
  }

  activateCombo(combo) {
    super.activateCombo(combo);
    switch(combo.name) {

    }
  }

}
