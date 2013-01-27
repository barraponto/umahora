/*
 * Wall for Crafty backboner entities.
 */
define([
       'crafty',
       'backbone',
       'game/spriters/_base'
], function(Crafty, Backbone, BaseSpriter) {
  var WallSpriter = BaseSpriter.extend({
    defaults: {
      currentSprite: 'vertical',
      images: {
        "vertical": {
          "file": "game/assets/images/Wall.png",
          "tile": 64,
          "tileh": 128,
          "elements": {
            "left": [0, 0],
            "right": [0, 1],
          }
        }
      }
    },
  });
  return WallSpriter;
});
