define([
       'crafty',
       'backbone',
       'game/spriters/_base'
], function(Crafty, Backbone, BaseSpriter) {
  var EnemySpriter = BaseSpriter.extend({
    defaults: {
      currentSprite: 'misc',
      images: {
        "misc": {
          "file": "game/assets/images/Enemy.png",
          "tile": 64,
          "tileh": 64,
          "elements": {
            "enemyrun": [0, 0],
            "enemyang": [1, 0],
            "enemywlk": [2, 0],
            "enemylke": [3, 0],
            "enemylks": [4, 0],
            "enemylkw": [4, 0],
          }
        }
      }
    },
  });
  return EnemySpriter;
});
