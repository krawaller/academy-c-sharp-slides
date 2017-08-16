
var app = angular.module("demoapp",[]);

app.component("clicker",{
  template: `
    <div>
      {{$ctrl.count}} bottles of beer on the wall
      <button ng-click="$ctrl.buyMore()">Buy one more</button>
    </div>
  `,
  controller: class Clicker {
    constructor($scope){
      this.count = 3;
    };
    buyMore(){
      this.count++;
    };
  }
});