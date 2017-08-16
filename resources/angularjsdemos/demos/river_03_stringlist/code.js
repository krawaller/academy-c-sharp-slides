
var app = angular.module("river",[]);

app.controller("listOfPosts",function($scope){
  $scope.name = "River";
  $scope.posts = ["foo","bar","baz"];
});


