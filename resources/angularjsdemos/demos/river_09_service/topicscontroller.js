
var app = angular.module("river");

app.controller("listOfTopics",function($scope,topicService){
  $scope.name = "River";
  $scope.topics = topicService.getAllTopics();
  $scope.selectTopic = function(topic){
    topicService.selectTopic(topic);
    $scope.selectedTopic = topic;
  };
});
