define([
  'crafty',
  'game/entities/_base',
  'game/sprites/player'
], function(Crafty, BaseEntity, PlayerSprite) {
  Player = BaseEntity.extend({
    defaults: {
      sprite: new PlayerSprite(),
      // Center player by default.
      x: Crafty.viewport.width / 2,
      y: Crafty.viewport.height / 2,
      w: 64,
      h: 64
    },
    initialize: function() {
      var model = this;
      // Mind that the last component is generated by the sprite.
      model.get('sprite').create('idle');
      var entity = Crafty.e('player, DOM, 2D, Multiway, dummylks');
      // Initializing entity components.
      entity.attr({
        x: model.get('x') - model.get('w'),
        y: model.get('y') - model.get('h'),
        w: model.get('w'),
        h: model.get('h')
      })
      // first arg is speed in pixels, second is dict of keys and directions in degrees (0 is right).
      .multiway(5, {W: -90, A: 180, S: 90, D: 0});

      model.set({'entity': entity});
    }
  });

  return Player;
});
