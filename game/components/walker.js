define(['crafty', 'game/components/backboner'], function(Crafty) {
  Crafty.c('walker', {
    init: function(){
      this.requires('backboner');
      this.bind('NewDirection', this.walker_newDirection);
    },
    walker_newDirection: function(direction) {
      if (this.bb_getModel().get('spriter') == undefined) {
        console.log('Error: Walker behavior requires a spriter.');
      } else if (direction.x > 0) {
        this.walker_look('east');
      } else if (direction.x < 0) {
        this.walker_look('west');
      } else if (direction.y > 0) {
        this.walker_look('south');
      } else if (direction.y < 0) {
        this.walker_look('north');
      }
    },
    walker_look: function(sprite) {
      if (!this.has(sprite)) {
        var spriter = this.bb_getModel().get('spriter'),
        current = spriter.get('currentSprite'),
        elements = spriter.get('images')[current]['elements'];
        Object.keys(elements).some(function(e, i, a) {
          if (this.has(e)) {
            this.toggleComponent(e, sprite);
            return true;
          }
        }, this);
      }
    }
  });
});
