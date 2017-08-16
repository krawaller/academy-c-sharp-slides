
var app = angular.module("orderbyapp",[]);

app.controller('fruitCtrl',function($scope){
  $scope.fruits = [
    {name:"Apple",tastiness:6},
    {name:"Cherry",tastiness:10},
    {name:"Strawberry",tastiness:4}
  ];
  $scope.getProp = function(){
    return $scope.taste ? "tastiness" : "name";
  }
});
