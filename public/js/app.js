angular.module('mainModule', ['ngDraggable'])

.controller('mainController', ['$scope', function($scope) {
   	
  $scope.list1 = [];
  $scope.list2 = [
    { 'icon':'/icons/small_pink_balloon.png', 'title': 'Field 1' },
    { 'icon':'/icons/10112937181875221497.png', 'title': 'Field 2' },
    { 'icon':'/icons/7969356681255372218.png', 'title': 'Field 3' },
    { 'icon':'/icons/20395231031705032008.png', 'title': 'Field 4' }
  ];
 
  $(".inputcss").focus();

  $('input[type="text"]')
    .keyup(resizeInput)
    .each(resizeInput);

  function resizeInput() {
    $(this).attr('size', $(this).val().length);
  }

  
  $scope.onDropComplete1=function(data,evt){
    var index = $scope.list1.indexOf(data);
    if (index == -1)
    $scope.list1.push(data);
    $("#fullval").append($scope.textval+' '+'<div ng-repeat="item in $scope.list1" class="btn btn-sm btn-default itembtn" >'+data.title+'</div> ');
    $scope.textval = "";
    $("#droparea").html("");   
  }

  $scope.onDragSuccess1=function(data,evt){
    console.log("$scope","onDragSuccess1", "", evt);
    var index = $scope.list1.indexOf(data);
    if (index > -1) {
        $scope.list1.splice(index, 1);
    }
  }

  /******Delete items********/  
  $('.inputcss').on( 'keydown', function( event ) {
    if(event.which === 8 && $('.inputcss').val() == ""){
      var str = $("#fullval").html().trim();
      var len = str.length;
      if(str[len-1] == ">")
      {
        $("#fullval").find("div:last").remove();
      }else{
        $("#fullval").html($.trim($("#fullval").html()).slice(0,-1));
      }
    }
  });

  /*****Buttons click*******/
  $scope.clean = function(){
    $scope.textval = "";
    $("#fullval").html("");
    $(".inputcss").focus();
  }

  $scope.completeItem = function(){
    console.log("final ", $("#fullval").html()+" "+$scope.textval);
    $(".inputcss").focus();
  }
  
}]);