define(['crafty', 'game/entities/player'], function(Crafty, Player) {
  return Crafty.scene('level1', function() {
    Crafty.sprite(64, 'game/assets/images/enemy.png', {
      enemyrun: [0, 0],
      enemyang: [1, 0],
      enemywlk: [2, 0],
      enemylke: [3, 0],
      enemylks: [4, 0],
      enemylkw: [4, 0],
    });
    Crafty.sprite(64, 'game/assets/images/dummy.png', {
      dummylkw: [0, 0],
      dummylks: [1, 0],
      dummylkn: [2, 0],
      dummylke: [3, 0],
    });

    var player = new Player();

    Crafty.e('enemy, DOM, 2D, enemyrun')
    .attr({x: 240, y: 80, w: 64, h: 64});
  });
});
