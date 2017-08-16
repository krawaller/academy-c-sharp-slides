
var app = angular.module("demoapp",[]);

app.component("clicker",{
  template: `
    <div>
      {{$ctrl.count}} bottles of beer on the wall
      <button ng-click="$ctrl.buyMore()">Buy one more</button>
    </div>
  `,
  controller: function($scope){
    this.count = 3;
    this.buyMore = function(){
      this.count++;
    }
  }
});