var InboxModel = Backbone.Model.extend({

    defaults: function() {
      return {
        title: "empty inbox...",
        messages: []
      };
    },

   
    // toggle: function() {
    //   this.save({done: !this.get("done")});
    // }

  });