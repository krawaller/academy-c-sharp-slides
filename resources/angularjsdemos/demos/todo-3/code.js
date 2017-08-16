
var app = angular.module("demoapp",[]);

app.controller("choreController", function($scope){
  $scope.chores = [
    {text: "Do the dishes"},
    {text: "Take out trash"},
    {text: "Make the bed"}
  ];

  $scope.direction = "ascending";

  $scope.addChore = function(){
    $scope.chores.push({
      text: $scope.newChoreDesc,
      completed: false
    });
    $scope.newChoreDesc = '';
  };
});


/*

chore = {
  text: string,
  completed: boolean
}

*/
