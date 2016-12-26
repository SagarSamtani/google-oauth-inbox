var EmailInboxModel=Backbone.Model.extend({
      defaults:{
          message:null;
          subject:null;
          description:null;
          
      }

});

var EmailInboxCollection=Backbone.Collection.extend({
  model:emailInboxModel

});
