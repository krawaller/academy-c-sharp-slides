
var app = angular.module("river",[]);

app.controller("listOfPosts",function($scope){
  // initialising variables

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

  $scope.selectedPost = $scope.posts[0];

  // event handlers

  $scope.viewPost = function(post){
    $scope.selectedPost = post;
  };
});


