var app = angular.module('demoapp',[]);

app.controller("democontroller",function($scope){
  $scope.name = 'Steve';
  $scope.putOnCostume = function(){
    $scope.name = 'Batman';
  }
});