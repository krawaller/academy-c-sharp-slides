
var app = angular.module("demoapp",[]);

app.controller("clicker",function($scope){
  $scope.count = 3;
  $scope.buyMore = function(){
    $scope.count++;
  }
});
