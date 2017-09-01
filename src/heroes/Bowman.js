import Hero from './Hero';
import HeroTypes from './HeroTypes';

const HURRICANE = 'HURRICANE';
const ARROW_BLOW = 'ARROW_BLOW';
const DRAGONS_BREATH = 'DRAGONS_BREATH';
const PIERCING_ARROW = 'PIERCING_ARROW';
const FLAME_SURGE = 'FLAME_SURGE';

export default class Bowman extends Hero {
  constructor(game, x, y) {
    super(game, x, y, HeroTypes.ARCHER);
  }

  activateCombo(combo) {
    super.activateCombo(combo);
    switch(combo.name) {
    
    }
  }

}
