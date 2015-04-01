'use strict';

app.factory('Post', function ($firebaseArray) {
  var ref = new Firebase('https://dazzling-heat-502.firebaseio.com/');
  var posts = $firebaseArray(ref.child('posts'));
  var postsTime = posts.push();
  var Post = {
  	all: posts,
  	create: function (post) {
      return posts.$add(post).then(postsTime.update({timestamp: Firebase.ServerValue.TIMESTAMP}));
    },
    get: function (postId) {
    	console.log($firebaseArray(ref.child('posts').child(postId)));
      return $firebaseArray(ref.child('posts').child(postId));
    },
    delete: function (post) {
      Post.delete(post);
    }
  };

      // Record the current time immediately, and queue an event to
// record the time at which the user disconnects.
var sessionsRef = new Firebase('https://samplechat.firebaseio-demo.com/sessions/');
var mySessionRef = sessionsRef.push();
mySessionRef.onDisconnect().update({ endedAt: Firebase.ServerValue.TIMESTAMP });
mySessionRef.update({ startedAt: Firebase.ServerValue.TIMESTAMP });
    

  return Post;
});