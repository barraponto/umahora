define([
  'crafty',
  'game/entities/_base',
  "game/spriters/Enemy"
], function(Crafty, BaseEntity, EnemySpriter) {
  var Enemy = BaseEntity.extend({
    defaults: {
      spriter: new EnemySpriter(),
      // Yay for random generated enemies.
      x: Math.round(Crafty.viewport.width * Math.random()),
      y: Math.round(Crafty.viewport.height * Math.random()),
      w: 64,
      h: 64
    },
    initialize: function() {
      var model = this;
      // Calling the spriter.create() with no arg will load the default
      // currentSprite attribute from the sprite
      model.get('spriter').create();
      var entity = Crafty.e('Enemy, DOM, 2D, Multiway, enemyrun');
      entity.attr({
        x: model.get('x') - model.get('w'),
        y: model.get('y') - model.get('h'),
        w: model.get('w'),
        h: model.get('h')
      });

      model.set({'entity': entity});
    }
  });

  return Enemy;
});
