
var app = angular.module("demoapp",[]);

app.controller("clicker",function(){
  this.count = 3;
  this.buyMore = function(){
    this.count++;
  }
});