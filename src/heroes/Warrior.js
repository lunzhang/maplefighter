import Hero from './Hero';
import HeroStates from './HeroStates';
import HeroTypes from './HeroTypes';

const SLASH_BLAST = 'SLASH_BLAST';
const DARK_IMPALE = 'DARK_IMPALE';
const FLAME_STRIKE = 'FLAME_STRIKE';
const ICE_STRIKE = 'ICE_STRIKE';
const LIGHTING_STRIKE = 'LIGHTING_STRIKE';
const COMBO_ATTACK = 'COMBO_ATTACK';
const SHOUT = 'SHOUT';

export default class Warrior extends Hero {
  constructor(game, x, y) {
    super(game, x, y);

    this.initCombos();
    this.initSprites();
    this.initAnimations();

    this.playAnimation('stand');
  }

  initAnimations() {
    super.initAnimations();
    this.sprite.animations.add('attack1', Phaser.Animation.generateFrameNames('attack', 1, 3), 3);
    this.sprite.animations.add('attack2', Phaser.Animation.generateFrameNames('attack', 4, 6), 3);
    this.sprite.animations.add('darkimpale', Phaser.Animation.generateFrameNames('dark_impale', 1, 10), 10);
    this.sprite.animations.add('flamestrike', Phaser.Animation.generateFrameNames('flame', 1, 9), 9);
    this.sprite.animations.add('icestrike', Phaser.Animation.generateFrameNames('ice', 1, 9), 9);
    this.sprite.animations.add('lightingstrike', Phaser.Animation.generateFrameNames('lighting', 1, 9), 9);
    this.sprite.animations.add('shout', Phaser.Animation.generateFrameNames('shout', 1, 14), 14);
    this.sprite.animations.add('slashblast', Phaser.Animation.generateFrameNames('sb', 1, 10), 9);

    this.sprite.animations.getAnimation('darkimpale').onComplete.add(() => {
      this.state = HeroStates.IDLE_STATE;
    });
    this.sprite.animations.getAnimation('flamestrike').onComplete.add(() => {
      this.state = HeroStates.IDLE_STATE;
    });
    this.sprite.animations.getAnimation('icestrike').onComplete.add(() => {
      this.state = HeroStates.IDLE_STATE;
    });
    this.sprite.animations.getAnimation('lightingstrike').onComplete.add(() => {
      this.state = HeroStates.IDLE_STATE;
    });
    this.sprite.animations.getAnimation('shout').onComplete.add(() => {
      this.state = HeroStates.IDLE_STATE;
    });
    this.sprite.animations.getAnimation('slashblast').onComplete.add(() => {
      this.state = HeroStates.IDLE_STATE;
    });
  }

  initCombos() {
    this.combos.push({
      name: SLASH_BLAST,
      keys: ['right', 'left', 'attack']
    });
    this.combos.push({
      name: DARK_IMPALE,
      keys: ['left', 'right', 'attack']
    });
    this.combos.push({
      name: FLAME_STRIKE,
      keys: ['down', 'right', 'attack']
    });
    this.combos.push({
      name: ICE_STRIKE,
      keys: ['down', 'right', 'jump']
    });
    this.combos.push({
      name: LIGHTING_STRIKE,
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

    this.comboAttack = this.game.add.image(0, 0, COMBO_ATTACK);
    this.comboAttack.width = 50;
    this.comboAttack.height = 50;
    this.comboAttack.kill();
    this.comboAttack.anchor.set(0.5);
    this.add(this.comboAttack);
  }

  initSprites() {
    this.sprite = this.create(0, 0, HeroTypes.WARRIOR + '-sprite');
    this.sprite.body.collideWorldBounds = true;
    this.sprite.anchor.set(0.5);

    this.sprite.bringToTop();
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
        case FLAME_STRIKE:
          this.activateFlameStrike();
          break;
        case ICE_STRIKE:
          this.activateIceStrike();
          break;
        case LIGHTING_STRIKE:
          this.activateLightingStrike();
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
    this.sprite.animations.play('slashblast');
  }

  activateDarkImpale() {
    this.sprite.animations.play('darkimpale');
  }

  activateFlameStrike() {
    this.sprite.animations.play('flamestrike');
  }

  activateIceStrike() {
    this.sprite.animations.play('icestrike');
  }

  activateLightingStrike() {
    this.sprite.animations.play('lightingstrike');
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
