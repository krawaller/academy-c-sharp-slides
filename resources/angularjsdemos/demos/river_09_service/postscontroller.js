
var app = angular.module("river");

app.controller("listOfPosts",function($scope,topicService){
  $scope.posts = [];
  topicService.subscribeToCurrentTopic(function(topic){
    $scope.posts = topic.posts;
    $scope.selectedPost = $scope.posts[0];
  });
  $scope.viewPost = function(post){
    $scope.selectedPost = post;
  };
});
