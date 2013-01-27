// Load everything this first scene will require.
define([
  'crafty',
  'lodash',
  'backbone',
  'game/scenes/_base',
  'game/entities/Player',
  'game/entities/Enemy',
  'game/entities/Wall',
], function(Crafty, _, Backbone, BaseScene, Player, Enemy, Map) {
  var Level01 = BaseScene.extend({
    defaults: {
      // This will be used later to name the scene and load it.
      name: 'level01'
    },
    initialize: function() {
      // I'm just wary of calling _.bindAll(), so I'm aliasing this to a variable.
      var model = this;
      var scene = Crafty.scene(model.get('name'), function(){
        // Save references to these entities, they might be handy later.
        model.set({'player': new Player()});
        model.set({'enemy': new Enemy()});
        model.set({'map': new Backbone.Collection()})
        model.get('map').add([
          new Map({x: 0, y: 0, tile: 'left'}),
          new Map({x: 0, y: 128, tile: 'left'}),
          new Map({x: 0, y: 256, tile: 'left'}),
          new Map({x: 0, y: 384, tile: 'left'})
        ]);
      });
      // This is mostly to call scene.uninit() on when BaseScene.destroy() is triggered.
      model.set({'scene': scene});
    },
    play: function() {
      var model = this;
      Crafty.scene(model.get('name'));
    }
  });

  return Level01;
});
