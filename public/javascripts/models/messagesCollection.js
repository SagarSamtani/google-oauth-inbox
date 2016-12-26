(function(){
var MessagesCollection = Backbone.Collection.extend({

	model: InboxModel,

 	getMessages: function(){
    	gapi.client.load('gmail', 'v1', this.listMessages); 
    },

    listMessages: function (userId, query, callback) {
      console.log("is this getting called");

      // var appendMessages= function (message) {
      //   var pre = document.getElementById('containerPage');
      //   var textContent = document.createTextNode(message + '\n');
      //   pre.appendChild(textContent);
      // };

      var getPageOfMessages = function(request, result) {
        request.execute(function(resp) {
          console.log("response", resp);
          result = result.concat(JSON.stringify(resp.messages));
          // appendMessages(result);
          this.messages.push(result);
        });
      };

      var initialRequest = gapi.client.gmail.users.messages.list({
        'userId': 'me',
        'q': query,
        "maxResults": 10
      });

      getPageOfMessages(initialRequest, []);
    },
});

var Messages = new MessagesCollection();

})();