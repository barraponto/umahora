define(['backbone'], function(Backbone) {
  BaseEntity = Backbone.Model.extend({
    defaults: {
      entity:  null
    },
    initialize: function () {
    },
    getEntity: function() {
      return this.getEntity();
    },
    remove: function() {
      var entity = this.getEntity();
      if (entity) {
        entity.destroy();
      }
    }
  });
  return BaseEntity;
});
