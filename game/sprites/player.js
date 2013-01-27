define(['crafty', 'backbone', 'game/sprites/_base'], function(Crafty, Backbone, BaseSprite) {
  var PlayerSprite = BaseSprite.extend({
    defaults: {
      images: {
        "idle": {
          "file": "game/assets/images/dummy.png",
          "tile": 64,
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
  return PlayerSprite;
});
