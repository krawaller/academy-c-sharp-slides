
var app = angular.module("demoapp",[]);

app.controller("choreController", function($scope){
  $scope.chores = [
    {desc: "Do the dishes"},
    {desc: "Take out trash"},
    {desc: "Make the bed"}
  ];

  $scope.opts = [
    {text: "Ascending"},
    {text: "Descending", reverse: true}
  ];
  $scope.direction = $scope.opts[0];

  $scope.addChore = function(){
    $scope.chores.push({
      desc: $scope.newChoreDesc
    });
    $scope.newChoreDesc = '';
    console.log("After adding",$scope.chores);
  };
})
