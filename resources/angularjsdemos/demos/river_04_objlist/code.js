
var app = angular.module("river",[]);

app.controller("listOfPosts",function($scope){
  $scope.name = "River";
  $scope.posts = [{
    title: "An important message",
    content: "Foo bar baz bin"
  },{
    title: "Word of wisdom",
    content: "Carpe noctem!"
  },{
    title: "Another post",
    content: "Lorem ipsum dolor sit amet"
  }];
});


