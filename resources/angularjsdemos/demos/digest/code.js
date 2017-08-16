
var app = angular.module("demoapp",[]);

app.controller("digestController", function($scope,$timeout){
  $scope.value = 42;
  $scope.increase = function(){
    $scope.value++;
  }
  $timeout(function(){
    $scope.value = 666;
  },2000);
  document.getElementById("fakebutton").addEventListener("click",function(){
    $scope.value++;
  });
})
