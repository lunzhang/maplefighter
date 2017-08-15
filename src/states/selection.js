import Phaser from 'phaser';

var classes = ['archer','cannoneer','dual_blade','magician','pirate','thief','warrior'];

export default class SelectionState extends Phaser.State{

  init(){
    this.classSelections = [];
    this.classChoices = [];
  }

  create(){
    this.initClassSelection();
    this.initClassChoices();
    this.initPlayers();
    this.initKeys();
    let back = this.game.add.text(25,25,"Back",{
      fill:'#ffffff',
      fontSize :'32px'
    });
    back.inputEnabled = true;
    back.events.onInputUp.add(()=>{
      this.game.global['mode'] = 'menu';
      this.game.state.start('menu', true, false);
    });
    let start = this.game.add.text(this.game.world.width-100,this.game.world.height-50,"Start",{
      fill:'#ffffff',
      fontSize :'32px'
    });
    start.inputEnabled = true;
    start.events.onInputUp.add(()=>{
      if(this.playerOne.class.key && this.playerTwo.class.key){
        this.game.global['mode'] = 'battle';
        this.game.state.start('battle', true, false);
      }
    });
  }

  initPlayers(){
    this.playerOne = this.createPlayer(0);
    this.playerTwo = this.createPlayer(1);
  }

  initKeys(){
    //player one input
    let w = this.game.input.keyboard.addKey(Phaser.Keyboard.W);
    w.onDown.add(()=>{

    });
    let a = this.game.input.keyboard.addKey(Phaser.Keyboard.A);
    a.onDown.add(()=>{
      if(this.playerOne.index > 0){
        this.highlightChoice(this.playerOne.index-1,this.playerOne);
      }
    });
    let s = this.game.input.keyboard.addKey(Phaser.Keyboard.S);
    s.onDown.add(()=>{

    });
    let d = this.game.input.keyboard.addKey(Phaser.Keyboard.D);
    d.onDown.add(()=>{
      if(this.playerOne.index < this.classChoices.length-1){
        this.highlightChoice(this.playerOne.index+1, this.playerOne);
      }
    });
    let j = this.game.input.keyboard.addKey(Phaser.Keyboard.J);
    j.onDown.add(()=>{
      this.selectClass(this.playerOne);
    });
    let k = this.game.input.keyboard.addKey(Phaser.Keyboard.K);
    k.onDown.add(()=>{
      this.cancelSelect(this.playerOne);
    });

    //player two input
    let up = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
    up.onDown.add(()=>{

    });
    let left = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    left.onDown.add(()=>{
      if(this.playerTwo.index > 0){
        this.highlightChoice(this.playerTwo.index-1,this.playerTwo);
      }
    });
    let down = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    down.onDown.add(()=>{

    });
    let right = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    right.onDown.add(()=>{
      if(this.playerTwo.index < this.classChoices.length-1){
        this.highlightChoice(this.playerTwo.index+1, this.playerTwo);
      }
    });
    let one = this.game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_1);
    one.onDown.add(()=>{
      this.selectClass(this.playerTwo);
    });
    let two = this.game.input.keyboard.addKey(Phaser.Keyboard.NUMPAD_2);
    two.onDown.add(()=>{
      this.cancelSelect(this.playerTwo);
    });
  }

  initClassSelection(){
      for(let i = 0;i<2;i++){
        let classSelection = this.game.add.graphics(200+(i*300),100);
        classSelection.beginFill(0xffffff);
        classSelection.drawRect(0,0,150,200);
        classSelection.endFill();
        this.classSelections.push(classSelection);
      }
  }

  initClassChoices(){
      for(let i = 0;i<classes.length;i++){
          let classChoice = this.game.add.image(50+(i*105),450,classes[i]);
          classChoice.width = 75;
          classChoice.height = 75;
          this.classChoices.push(classChoice);
      }
  }

  createPlayer(num){
      let classSelection = this.classSelections[num];
      let player = {
        id:num,
        index:num,
        border:10,
        class:this.game.add.image(classSelection.left,classSelection.top),
        highlight:this.game.add.graphics()
      };
      if(num == 0){
        player.color = 0xde2e1c;
      }else{
        player.color = 0x1c8dde;
      }
      player.highlight.lineStyle(2, player.color, 1);
      player.highlight.drawRect(this.classChoices[player.index].left-10,this.classChoices[player.index].top-10,
         this.classChoices[player.index].width+20, this.classChoices[player.index].height+20);

      return player;
  }

  selectClass(player){
    let classSelection = this.classSelections[player.id];
    player.class.loadTexture(classes[player.index]);
    player.class.width = classSelection.width;
    player.class.height = classSelection.height;
  }

  cancelSelect(player){
    player.class.loadTexture();
    player.class.key = null;
  }

  highlightChoice(index,player){
      let choice = this.classChoices[index];
      let border = 10;
      if((player == this.playerTwo && this.playerOne.index == index && this.playerOne.border == border) ||
        (player == this.playerOne && this.playerTwo.index == index && this.playerTwo.border == border)){
        border = 12;
      }
      player.highlight.clear();
      player.highlight.lineStyle(2, player.color, 1);
      player.highlight.drawRect(choice.left-border,choice.top-border,choice.width+border*2,choice.height+border*2);
      player.border = border;
      player.index = index;
  }

}
