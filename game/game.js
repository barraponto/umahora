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

    Crafty.scene('level1', function() {
      Crafty.e('player1, DOM, 2D, Multiway, Color')
      .attr({x: 0, y: 0, w: 10, h: 10})
      .multiway(5, {W: -90, A: 180, S: 90, D: 0})
      .color('#ffffff');
    });
    Crafty.scene('level1');
  });
});
