
var app = angular.module("river");

app.factory("topicService",function(){
  var _topics = [{
    title: "Technology",
    posts: [{
      title: "An important message",
      content: "Foo bar baz bin"
    },{
      title: "Word of wisdom",
      content: "Carpe noctem!"
    },{
      title: "Another post",
      content: "Lorem ipsum dolor sit amet"
    }]
  },{
    title: "Religion",
    posts: [{
      title: "Yada yada yada",
      content: "Lorem ipsum dolor sit amet"
    },{
      title: "Alea Jacta Est",
      content: "Si si claro"
    }]
  }];
  var _subscribers = [];
  var _currentTopic;
  return {
    getAllTopics: function(){
      return _topics;
    },
    subscribeToCurrentTopic: function(callback){
      _subscribers.push(callback);
      if (_currentTopic){
        callback(_currentTopic);
      }
    },
    selectTopic: function(topic){
      _currentTopic = topic;
      _subscribers.forEach(function(callback){
        callback(_currentTopic);
      });
    }
  };
});
