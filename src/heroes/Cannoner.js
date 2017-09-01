import Hero from './Hero';
import HeroTypes from './HeroTypes';

const BLAST_BACK = 'BLAST_BACK';
const CANNON_BARRAGE = 'CANNON_BARRAGE';
const BARREL_BOMB = 'BARREL_BOMB';
const CANNON_BAZZOKA = 'CANNON_BAZZOKA';
const ANCHORS_AWEIGH = 'ANCHORS_AWEIGH';

export default class Cannoner extends Hero {
  constructor(game, x, y) {
    super(game, x, y, HeroTypes.CANNONER);
  }

  activateCombo(combo) {
    super.activateCombo(combo);
    switch(combo.name) {

    }
  }

}
