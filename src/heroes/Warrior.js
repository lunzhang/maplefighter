import Hero from './Hero';
import HeroStates from './HeroStates';
import HeroTypes from './HeroTypes';

const SLASH_BLAST = 'SLASH_BLAST';
const DARK_IMPALE = 'DARK_IMPALE';
const FLAME_CHARGE = 'FLAME_CHARGE';
const BLIZZARD_CHARGE = 'BLIZZARD_CHARGE';
const LIGHTING_CHARGE = 'LIGHTING_CHARGE';
const COMBO_ATTACK = 'COMBO_ATTACK';
const SHOUT = 'SHOUT';

export default class Warrior extends Hero {
  constructor(game, x, y) {
    super(game, x, y);

    this.combos.push({
      name: SLASH_BLAST,
      keys: ['right', 'left', 'attack']
    });
    this.combos.push({
      name: DARK_IMPALE,
      keys: ['left', 'right', 'attack']
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
      name: COMBO_ATTACK,
      keys: ['down', 'up', 'defend']
    });
    this.combos.push({
      name: SHOUT,
      keys: ['down', 'up', 'attack']
    });

    this.sprite = this.create(0, 0, HeroTypes.WARRIOR);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.anchor.set(0.5);

    this.comboAttack = this.game.add.image(0, 0, COMBO_ATTACK);
    this.comboAttack.width = 50;
    this.comboAttack.height = 50;
    this.comboAttack.kill();
    this.comboAttack.anchor.set(0.5);
    this.add(this.comboAttack);

    this.charge = this.game.add.image(0, 0);
    this.charge.width = 30;
    this.charge.height = 30;
    this.charge.kill();
    this.charge.anchor.set(0.5);
    this.add(this.charge);

    this.sprite.bringToTop();
    this.charge.bringToTop();
  }

  activateCombo(combo) {
    super.activateCombo(combo);
    switch(combo.name) {
        case COMBO_ATTACK:
          this.activateComboAttack();
          break;
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

  activateComboAttack() {
    if(this.comboAttack.isAlive && this.comboAttack.frame < 5) {
      this.normalAttack += 5;
      this.comboAttack.setFrame(this.comboAttack.frame + 1);
    } else {
      this.normalAttack += 5;
      this.comboAttack.revive();
    }
    setTimeout(() => {
      this.state = HeroStates.IDLE_STATE;
    },800);
  }

  activateSlashBlast() {
    this.activeCombo.loadTexture(SLASH_BLAST);
    this.activeCombo.revive();
    this.activeCombo.y = 0;
    this.activeCombo.x = 25;

    setTimeout(() => {
      this.state = HeroStates.IDLE_STATE;
      this.activeCombo.kill();
    },600);
  }

  activateDarkImpale() {
    this.activeCombo.loadTexture(DARK_IMPALE);
    this.activeCombo.revive();
    this.activeCombo.y = 0;
    this.activeCombo.x = 25;

    setTimeout(() => {
      this.state = HeroStates.IDLE_STATE;
      this.activeCombo.kill();
    },600);
  }

  activateFlameCharge() {
    this.charge.loadTexture(FLAME_CHARGE);
    this.charge.revive();

    setTimeout(() => {
      this.state = HeroStates.IDLE_STATE;
    },600);

    setTimeout(() => {
      this.charge.kill();
    },1000);
  }

  activateBlizzardCharge() {
    this.charge.loadTexture(BLIZZARD_CHARGE);
    this.charge.revive();

    setTimeout(() => {
      this.state = HeroStates.IDLE_STATE;
    },600);

    setTimeout(() => {
      this.charge.kill();
    },1000);
  }

  activateLightingCharge() {
    this.charge.loadTexture(LIGHTING_CHARGE);
    this.charge.revive();

    setTimeout(() => {
      this.state = HeroStates.IDLE_STATE;
    },600);

    setTimeout(() => {
      this.charge.kill();
    },1000);
  }

  activateShout() {
    this.activeCombo.loadTexture(SHOUT);
    this.activeCombo.revive();
    this.activeCombo.y = -30;
    this.activeCombo.x = 0;

    setTimeout(() => {
      this.state = HeroStates.IDLE_STATE;
      this.activeCombo.kill();
    },600);
  }
}
