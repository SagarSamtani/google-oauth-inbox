var InboxView = Backbone.View.extend({

  tagName: "div",

  className: "output",

  el: $("#containerPage"),

   events: {
      "click .gsignin": "signIn"
    },

  initialize: function() {
    this.listenTo(this.model, "change", this.render);
  },

  sigIn: function(){
  	this.$el.html("Hey there is this working, Am I in view");

  },

  render: function() {
   		// "Print somwething"
  }

});