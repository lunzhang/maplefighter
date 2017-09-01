import Hero from './Hero';
import HeroTypes from './HeroTypes';

const SLASH_BLAST = 'SLASH_BLAST';
const DARK_IMPALE = 'DARK_IMPALE';
const FLAME_CHARGE = 'FLAME_CHARGE';
const BLIZZARD_CHARGE = 'BLIZZARD_CHARGE';
const LIGHTING_CHARGE = 'LIGHTING_CHARGE';
const SHOUT = 'SHOUT';

export default class Warrior extends Hero {
  constructor(game, x, y) {
    super(game, x, y, HeroTypes.WARRIOR);

    this.combos.push({
      name: SLASH_BLAST,
      keys: ['left', 'right', 'attack']
    });
    this.combos.push({
      name: DARK_IMPALE,
      keys: ['down', 'left', 'attack']
    });
    this.combos.push({
      name: FLAME_CHARGE,
      keys: ['down', 'right', 'attack']
    });
    this.combos.push({
      name: BLIZZARD_CHARGE,
      keys: ['down', 'right', 'jump']
    });
    this.combos.push({
      name: LIGHTING_CHARGE,
      keys: ['down', 'right', 'defend']
    });
    this.combos.push({
      name: SHOUT,
      keys: ['down', 'up', 'defend']
    });
  }

  activateCombo(combo) {
    super.activateCombo(combo);
    switch(combo.name) {
        case SLASH_BLAST:
          this.activateSlashBlast();
          break;
        case DARK_IMPALE:
          this.activateDarkImpale();
          break;
        case FLAME_CHARGE:
          this.activateFlameCharge();
          break;
        case BLIZZARD_CHARGE:
          this.activateBlizzardCharge();
          break;
        case LIGHTING_CHARGE:
          this.activateLightingCharge();
          break;
        case SHOUT:
          this.activateShout();
          break;
    }
  }

  activateSlashBlast() {
    this.activeCombo.loadTexture(SLASH_BLAST);
    this.activeCombo.revive();
    setTimeout(() => {
      this.activeCombo.kill();
    },600);
  }

  activateDarkImpale() {
    this.activeCombo.loadTexture(DARK_IMPALE);
    this.activeCombo.revive();
    setTimeout(() => {
      this.activeCombo.kill();
    },600);
  }

  activateFlameCharge() {
    this.activeCombo.loadTexture(FLAME_CHARGE);
    this.activeCombo.visibility = true;
  }

  activateBlizzardCharge() {
    this.activeCombo.loadTexture(BLIZZARD_CHARGE);
    this.activeCombo.visibility = true;
  }

  activateLightingCharge() {
    this.activeCombo.loadTexture(LIGHTING_CHARGE);
    this.activeCombo.visibility = true;
  }

  activateShout() {
    this.activeCombo.loadTexture(SHOUT);
    this.activeCombo.revive();
    setTimeout(() => {
      this.activeCombo.kill();
    },600);
  }
}
