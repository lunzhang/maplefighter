import Phaser from 'phaser';

export default class MenuState extends Phaser.State {
  create() {
    const title = this.game.add.text(this.game.world.centerX, this.game.world.height / 5,
      'Maple Fighter', {
        fill: '#ffffff',
        fontSize: '64px',
      });
    title.anchor.set(0.5);

    const battle = this.game.add.text(this.game.world.centerX, this.game.world.centerY,
      'Battle Mode', {
        fill: '#ffffff',
      });
    battle.anchor.set(0.5);
    battle.inputEnabled = true;
    battle.events.onInputUp.add(() => {
      this.game.mode = 'battle';
      this.game.state.start('selection', true, false);
    });
  }
}
