(function(){
  var CLIENT_ID = '840746466796-8iigl2prf4b39vsferadfkeqesp24dpl.apps.googleusercontent.com';

  var SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];

  var InboxView = Backbone.View.extend({

    el: $("#containerPage"),

     events: {
        "click .gsignin": "handleAuthClick"
      },

    initialize: function() {
      console.log("View Initialized");
      // this.listenTo(this.model, "change", this.render);
    },

    listMessages: function (userId, query, callback) {
      console.log("is this getting called");

      var appendMessages= function (message) {
        var pre = document.getElementById('containerPage');
        var textContent = document.createTextNode(message + '\n');
        pre.appendChild(textContent);
      };

      var getPageOfMessages = function(request, result) {
        request.execute(function(resp) {
          console.log("response", resp);
          result = result.concat(JSON.stringify(resp.messages));
          appendMessages(result);
        });
      };

      var initialRequest = gapi.client.gmail.users.messages.list({
        'userId': 'me',
        'q': query,
        "maxResults": 10
      });

      getPageOfMessages(initialRequest, []);
    },

    handleAuthClick: function(event) {
      var self = this;
        gapi.auth.authorize(
          {client_id: CLIENT_ID, scope: SCOPES, immediate: false},function(authResult){
            if (authResult && !authResult.error) {
          gapi.client.load('gmail', 'v1', self.listMessages);
        }
          });
        return false;
      },

    render: function() {
     		// "Print somwething"
    }

  });

  var GetInbox = new InboxView();

})();