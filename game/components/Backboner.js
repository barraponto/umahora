define(['crafty'], function(Crafty) {
  Crafty.c('backboner', {
    init: function() {
    },
    backboner: function(model) {
      this._bb_model = model;
      return this;
    },
    bb_getModel: function() {
      if (this._bb_model == undefined) {
        console.log('Error: no model has been passed to backboner constructor.');
        return false;
      } else {
        return this._bb_model;
      }
    }
  });
});
