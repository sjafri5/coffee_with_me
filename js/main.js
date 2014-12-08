var myApp = angular.module('myApp', ['firebase']);

myApp.controller('MainCtrl', [ '$scope', '$http', '$interval', function ($scope, $http, $interval) {
        
        $scope.init = function(){
          $scope.thingsToDo = ['grab coffee', 'write code', 'grab a beer', 'climb a tree', 'smoke a joint', 'smoke a joint in a tree', 'visit a bookstore', 'go to a park']
          $scope.show_index = 0;
        };

        $scope.change = function(){
          if ( $scope.show_index >= ($scope.thingsToDo.length - 1) ) {
            $scope.show_index = 0;
          }
          else {
            $scope.show_index += 1;
          }
          
        };

        var p = $interval(function () {
          $scope.change();
        }, 1500);

       


        $scope.init();
        // $scope.change()
    }]);