define(['crafty', 'game/entities/_base'], function(Crafty, BaseEntity) {
  Enemy = BaseEntity.extend({
    defaults: {
      // Yay for random generated enemies.
      x: Math.round(Crafty.viewport.width * Math.random()),
      y: Math.round(Crafty.viewport.height * Math.random()),
      w: 64,
      h: 64
    },
    initialize: function() {
      Crafty.sprite(64, 'game/assets/images/enemy.png', {
        enemyrun: [0, 0],
        enemyang: [1, 0],
        enemywlk: [2, 0],
        enemylke: [3, 0],
        enemylks: [4, 0],
        enemylkw: [4, 0],
      });
      var model = this;
      var entity = Crafty.e('enemy, DOM, 2D, Multiway, enemyrun');
      entity.attr({
        x: model.get('x') - model.get('w'),
        y: model.get('y') - model.get('h'),
        w: model.get('w'),
        h: model.get('h')
      })

      model.set({'entity': entity});
    }
  });

  return Enemy;
});
