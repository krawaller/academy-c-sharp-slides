var app = angular.module("river");

app.controller("listOfPosts",function($scope){
  $scope.viewPost = function(post){
    $scope.selectedPost = post;
  };
});