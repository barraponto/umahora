require.config({
  baseUrl: '.',
  paths: {
    // Both jQuery and Crafty hardcode the exported module name.
    "jquery": "js/vendor/jquery-1.9.0",
    "crafty": "js/vendor/crafty-0.5.4-c177c5e",
    // Everything else should come from vendor.
    "vendor": "js/vendor"
  },
});

require(["jquery", "crafty"], function($, Crafty) {
  $(document).ready(function(){
    Crafty.init(600, 420);
    Crafty.background('rgb(0,0,0)');

    require(['game/scenes/level1'], function(){
      Crafty.scene('level1');
    });

  });
});
