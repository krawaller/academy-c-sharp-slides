
var app = angular.module("river");

app.controller("listOfPosts",function($scope,$rootScope){
  $scope.posts = [];
  $rootScope.$on("selectTopic",function(e,topic){
    $scope.posts = topic.posts;
    $scope.selectedPost = $scope.posts[0];
  });
  $scope.viewPost = function(post){
    $scope.selectedPost = post;
  };
});
