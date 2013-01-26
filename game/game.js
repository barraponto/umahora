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
  });
});
