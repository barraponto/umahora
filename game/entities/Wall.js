define([
  'crafty',
  'game/entities/_base',
  "game/spriters/Wall"
], function(Crafty, BaseEntity, WallSpriter) {
  var Wall = BaseEntity.extend({
    defaults: {
      spriter: new WallSpriter(),
      x: 0,
      y: 0,
      w: 64,
      h: 128
    },
    initialize: function() {
      var model = this;
      if (model.get('tile') == undefined) {
        console.log('Error: Wall constructor was not passed a tile value.');
      }
      // Calling the spriter.create() with no arg will initialize the sprite
      // component for the WallSpriter.get('currentSprite ') attribute.
      model.get('spriter').create();
      var entity = Crafty.e('Wall, DOM, 2D, solid');
      entity.addComponent(model.get('tile'))
      .attr({
        x: model.get('x'),
        y: model.get('y'),
        w: model.get('w'),
        h: model.get('h')
      });

      model.set({'entity': entity});
    }
  });

  return Wall;
});

