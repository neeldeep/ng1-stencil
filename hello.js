angular.module("app", []).controller("HelloWorldCtrl", function($scope) {  
    var stencilElem=document.querySelector('uc-side-drawer');
    stencilElem.componentOnReady().then(() => {
        stencilElem.InitCompVariables('wwww.google.com')
       });
    $scope.message="Hello World" 
   
    $scope.CheckDrawer=function(){
   
    if(stencilElem.open!=true)
  {
    stencilElem.open=true;
  }
}

    } )