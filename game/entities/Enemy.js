define([
       'crafty',
       'lodash',
       'game/entities/_base',
       "game/spriters/Enemy",
       "game/components/Moveto"
], function(Crafty, _, BaseEntity, EnemySpriter) {
  var Enemy = BaseEntity.extend({
    defaults: {
      spriter: new EnemySpriter(),
      // Yay for random generated enemies.
      x: Math.round(Crafty.viewport.width * Math.random()),
      y: Math.round(Crafty.viewport.height * Math.random()),
      w: 64,
      h: 64
    },
    initialize: function() {
      var model = this;
      // Calling the spriter.create() with no arg will load the default
      // currentSprite attribute from the sprite
      model.get('spriter').create();
      var entity = Crafty.e('Enemy, backboner, DOM, 2D, Multiway, enemyrun, MoveTo')
      .backboner(model)
      .attr({
        x: model.get('x') - model.get('w'),
        y: model.get('y') - model.get('h'),
        w: model.get('w'),
        h: model.get('h')
      }).bind('EnterFrame', model.stayAlert);

      model.set({'entity': entity});
    },
    searchArea: function(area) {
      var entity = this.get('entity');
      return Crafty.map.search({
        _x: entity.pos()._x - area/2,
        _y: entity.pos()._y - area/2,
        _w: area,
        _h: area,
      }, true);
    },
    stayAlert: function() {
      var entity = this,
      model = entity.bb_getModel();
      if ((Crafty.frame() % 9) === 0) {
        _.some(model.searchArea(300), function(e,i,a) {
          if (e.has('Player')) {
            // Do something!
            entity.unbind('EnterFrame', model.stayAlert);
            // Pretend to click
            entity._onmousedown({realX: e.pos()._x, realY: e.pos()._y});
            return true;
          }
        });
      }
    }
  });

  return Enemy;
});
