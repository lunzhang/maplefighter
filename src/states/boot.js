import Phaser from 'phaser';

export default class BootState extends Phaser.State{

  constructor(){
    super();
    this.ready = false;

  }

  create(){

  }

  preload(){
    this.load.onLoadComplete.addOnce(()=>{
        this.ready = true;
    },this);
    this.game.stage.backgroundColor = '#d77826';

    this.game.load.image('archer','resources/imgs/archer.png');
    this.game.load.image('cannoneer','resources/imgs/cannoneer.png');
    this.game.load.image('dual_blade','resources/imgs/dual_blade.png');
    this.game.load.image('magician','resources/imgs/magician.png');
    this.game.load.image('pirate','resources/imgs/pirate.png');
    this.game.load.image('thief','resources/imgs/thief.png');
    this.game.load.image('warrior','resources/imgs/warrior.png');

  }

  update(){
    if(this.ready){
      this.game.state.start('menu', true, false);
    }
  }

}
