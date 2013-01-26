define(['crafty', 'game/entities/_base'], function(Crafty, BaseEntity) {
  Enemy = BaseEntity.extend({
    defaults: {
      x: Math.round(Crafty.viewport.width * Math.random()),
      y: Math.round(Crafty.viewport.height * Math.random()),
      w: 64,
      h: 64
    },
    initialize: function() {
      var model = this;
      var entity = Crafty.e('player, DOM, 2D, Multiway, dummylks')
      entity.attr({
        x: model.get('x') - model.get('w'),
        y: model.get('y') - model.get('h'),
        w: model.get('w'),
        h: model.get('h')
      })

      model.set({'entity': entity});
    }
  });

  return Player;
});
