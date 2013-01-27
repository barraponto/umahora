define(['backbone'], function(Backbone) {
  BaseScene = Backbone.Model.extend({
    defaults: {
      scene:  null
    },
    initialize: function () {
    },
    getEntity: function() {
      return this.get('scene');
    },
    remove: function() {
      var scene = this.getScene();
      if (scene) {
        scene.uninit();
      }
    }
  });
  return BaseScene;
});
