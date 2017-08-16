
var app = angular.module("river");

app.controller("listOfTopics",function($scope){
  $scope.name = "River";
  $scope.topics = [{
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
  $scope.selectTopic = function(topic){
    $scope.$emit("selectTopic",topic);
    $scope.selectedTopic = topic;
  };
});
