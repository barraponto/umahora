define(['crafty', 'lodash', 'backbone'], function(Crafty, _, Backbone) {
  var BaseSpriter = Backbone.Model.extend({
    defaults: {
      images: {
      }
    },
    initialize: function() {
    },
    create: function(key) {
      if (key != undefined) {
        element = this.get('images')[key];
        if (element['tileh'] == undefined) {
          Crafty.sprite(element['tile'], element['file'], element['elements']);
        } else {
          Crafty.sprite(element['tile'], element['tileh'], element['file'], element['elements']);
        }
      } else {
        _.each(this.get('images'), function(element, k) {
          if(element['tileh'] == undefined)
            Crafty.sprite(element['tile'], element['file'], element['elements']);
          else
            Crafty.sprite(element['tile'], element['tileh'], element['file'], element['elements']);
        });
      }
    },
    getPaths: function(){
      var array = [], i=0;
      _.each(this.get('images'), function(element, key){
        array[i] = element['file']
        i++;
      });
      return array;
    }
  });
  return BaseSpriter;
});
