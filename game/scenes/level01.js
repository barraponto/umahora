// Load everything this first scene will require.
define([
  'crafty',
  'lodash',
  'game/scenes/_base',
  'game/entities/player',
  'game/entities/enemy'
], function(Crafty, _, BaseScene, Player, Enemy) {
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
