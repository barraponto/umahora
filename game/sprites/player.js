define(['crafty', 'backbone', 'game/sprites/_base'], function(Crafty, Backbone, BaseSprite) {
  PlayerSprite = BaseSprite.extend({
    defaults: {
      images: {
        "idle": {
          "file": "game/assets/images/dummy.png",
          "tile": 64,
          "tileh": 64,
          "elements": {
            "dummylkw": [0, 0],
            "dummylks": [1, 0],
            "dummylkn": [2, 0],
            "dummylke": [3, 0],
          }
        }
      }
    },
  });
  return PlayerSprite;
});
