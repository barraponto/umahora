/*
 * Template for Crafty backboner entities.
 * Happy VIm users type :%s/Template/NewEntityName/g<CR> then dd in this line.
 */
define([
       'crafty',
       'backbone',
       'game/spriters/_base'
], function(Crafty, Backbone, BaseSpriter) {
  var TemplateSpriter = BaseSpriter.extend({
    defaults: {
      currentSprite: 'misc',
      images: {
        "misc": {
          "file": "game/assets/images/Template.png",
          "tile": 64,
          "tileh": 64,
          "elements": {
            "example": [0, 0],
          }
        }
      }
    },
  });
  return TemplateSpriter;
});
