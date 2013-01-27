define([
       'crafty',
       'backbone',
       'game/spriters/_base'
], function(Crafty, Backbone, BaseSpriter) {
  var PlayerSpriter = BaseSpriter.extend({
    defaults: {
      currentSprite: "idle",
      images: {
        "idle": {
          "file": "game/assets/images/Player.png",
          "tile": 32,
          "tileh": 64,
          "elements": {
            "west": [0, 0],
            "south": [1, 0],
            "north": [2, 0],
            "east": [3, 0],
          }
        }
      }
    },
  });
  return PlayerSpriter;
});
