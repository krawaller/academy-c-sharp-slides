
var app = angular.module("selectapp",[]);

app.controller('fruitCtrl',function($scope){
  $scope.fruits = [
    {name:"Apple",tastiness:6},
    {name:"Cherry",tastiness:10},
    {name:"Strawberry",tastiness:4}
  ];
  $scope.selectedFruit = $scope.fruits[0];
});
