// Nothing to see here, moving on.
define(['backbone'], function(Backbone) {
  var BaseScene = Backbone.Model.extend({
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
