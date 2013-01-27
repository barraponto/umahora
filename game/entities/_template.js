/*
 * Template for Crafty backboner entities.
 * Happy VIm users type :%s/Template/NewEntityName/g<CR> then dd in this line.
 */
define([
       'crafty',
       'game/entities/_base',
       'game/spriters/Template',
       'game/components/backboner'
], function(Crafty, BaseEntity, TemplateSpriter) {
  var Template = BaseEntity.extend({
    defaults: {
      spriter: new TemplateSpriter(),
      x: 0,
      y: 0,
      w: 64,
      h: 64
    },
    initialize: function() {
      var model = this;
      // Calling the spriter.create() with no arg will initialize the sprite
      // component for the TemplateSpriter.get('currentSprite ') attribute.
      model.get('spriter').create();

      // Setting backboner early.
      var entity = Crafty.e('Template, backboner, DOM, 2D');

      // Initialize the entity components.
      entity.addComponent(model.get('tile'))
      .attr({
        // x: ,
        // y: ,
        // w: ,
        // h:
      });

      // Set an attribute to be able to refer to it when necessary.
      model.set({'entity': entity});
    }
  });

  return Template;
});

