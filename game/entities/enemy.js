define([
  'crafty',
  'game/entities/_base',
  "game/sprites/enemy"
], function(Crafty, BaseEntity) {
  var Enemy = BaseEntity.extend({
    defaults: {
      sprite: new EnemySprite(),
      // Yay for random generated enemies.
      x: Math.round(Crafty.viewport.width * Math.random()),
      y: Math.round(Crafty.viewport.height * Math.random()),
      w: 64,
      h: 64
    },
    initialize: function() {
      var model = this;
      model.get('sprite').create('misc');
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
