require.config({
  baseUrl: '.',
  paths: {
    // Both jQuery and Crafty hardcode the exported module name.
    "jquery": "js/vendor/jquery-1.9.0",
    "crafty": "js/vendor/crafty-0.5.4-c177c5e",
    "lodash": "js/vendor/lodash-1.0.0-rc3",
    "backbone": "js/vendor/backbone-0.9.10"
  },
  shim: {
    "backbone": {
      "deps": ["lodash", "jquery"],
      "exports": "Backbone"
    }
  }
});

require(["lodash", "jquery", "crafty", "backbone"], function(_, $, Crafty, Backbone) {

  // Initialize a top-level game object.
  var game = {
    scenes: new Backbone.Collection()
  }

  $(document).ready(function(){
    Crafty.init(600, 420);
    Crafty.background('rgb(0,0,0)');

    require(['crafty', 'game/scenes/level01'], function(Crafty, Level01) {
      game.scenes.add(new Level01());
      game.scenes.first().play();
    });

  });
});
