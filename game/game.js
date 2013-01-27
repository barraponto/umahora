// Require.js config is thoroughfully explained at http://requirejs.org/docs/start.html
require.config({
  // Sets up full paths for game/stuff.
  baseUrl: '.',
  // Both jQuery and Crafty hardcode the exported module name.
  // The other vendor libraries would get jealous, so I aliased them too.
  paths: {
    "jquery": "js/vendor/jquery-1.9.0",
    "crafty": "js/vendor/crafty-0.5.4-c177c5e",
    "lodash": "js/vendor/lodash-1.0.0-rc3",
    "backbone": "js/vendor/backbone-0.9.10"
  },
  // Backbone still requires a shim, so...
  shim: {
    "backbone": {
      "deps": ["lodash", "jquery"],
      "exports": "Backbone"
    }
  }
});

// Require vendor javascript magic powers.
require(["lodash", "jquery", "crafty", "backbone"], function(_, $, Crafty, Backbone) {

  // Initialize a top-level game object.
  var game = {
    // Handy collection methods available for game scenes :)
    scenes: new Backbone.Collection()
  }

  // I'm pretty sure this is not needed, but anyhow, here it is.
  $(document).ready(function(){
    // Start the canvas and paint it black.
    Crafty.init(600, 420);
    Crafty.background('rgb(0,0,0)');

    // Load the first scene.
    require(['game/scenes/Level01'], function(Level01) {
      // Save it to the game object scene collection.
      game.scenes.add(new Level01());
      // And play it.
      game.scenes.first().play();
    });

  });
});
