define([
  'crafty',
  'game/scenes/_base',
  'game/entities/player',
  'game/entities/enemy'
], function(Crafty, BaseEntity) {
  Level01 = BaseScene.extend({
    defaults: {
      name: 'level01'
    },
    initialize: function() {
      var model = this;
      var scene = Crafty.scene(model.get('name'), function(){
        Crafty.sprite(64, 'game/assets/images/enemy.png', {
          enemyrun: [0, 0],
          enemyang: [1, 0],
          enemywlk: [2, 0],
          enemylke: [3, 0],
          enemylks: [4, 0],
          enemylkw: [4, 0],
        });
        Crafty.sprite(64, 'game/assets/images/dummy.png', {
          dummylkw: [0, 0],
          dummylks: [1, 0],
          dummylkn: [2, 0],
          dummylke: [3, 0],
        });
        model.set({'player': new Player()});
        model.set({'enemy': new Enemy()});
      });
      model.set({'scene': scene});
    },
    play: function() {
      var model = this;
      Crafty.scene(model.get('name'));
    }
  });

  return Level01;
});
