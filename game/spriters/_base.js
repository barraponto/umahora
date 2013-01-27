define(['crafty', 'lodash', 'backbone'], function(Crafty, _, Backbone) {
  var BaseSpriter = Backbone.Model.extend({
    defaults: {
      images: {
      }
    },
    initialize: function() {
    },
    create: function(key) {
      key = (key == undefined) ? this.get('currentSprite') : key;
      if (key != undefined) {
        this.set('currentSprite', key);
        element = this.get('images')[key];
        if (element['tileh'] == undefined) {
          Crafty.sprite(element['tile'], element['file'], element['elements']);
        } else {
          Crafty.sprite(element['tile'], element['tileh'], element['file'], element['elements']);
        }
      } else {
        console.log('ERROR: no key passed to Spriter.create().');
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
