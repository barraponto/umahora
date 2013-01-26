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
  $(document).ready(function(){
    Crafty.init(600, 420);
    Crafty.background('rgb(0,0,0)');

    require(['game/scenes/level1'], function(){
      Crafty.scene('level1');
    });

  });
});
