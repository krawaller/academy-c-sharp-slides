var app = angular.module("gameApp", []);

app.controller("gameCtrl", function($scope){
  $scope.choose = function(opt){
    $scope.page = adventure.pages[opt.target];
  }
  $scope.page = adventure.pages.start;
});