define(['crafty', 'game/entities/_base'], function(Crafty, BaseEntity) {
  Player = BaseEntity.extend({
    defaults: {
      x: Crafty.viewport.width / 2,
      y: Crafty.viewport.height / 2,
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
      .multiway(5, {W: -90, A: 180, S: 90, D: 0});

      model.set({'entity': entity});
    }
  });

  return Player;
});
