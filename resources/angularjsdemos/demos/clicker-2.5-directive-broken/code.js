
var app = angular.module("demoapp",[]);

app.directive("clicker", function(){
  return {
    restrict: "E",
    template: `<div>
      {{count}} bottles of beer on the wall
      <button ng-click="buyMore()">Buy one more</button>
    </div>`,
    link: function(scope,elem,attrs){
      scope.count = 3;
      scope.buyMore = function(){
        scope.count++;
      }
    }
  };
});
