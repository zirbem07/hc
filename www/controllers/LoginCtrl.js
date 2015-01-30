angular.module('hc.controllers.login', [])
    .controller('LoginCtrl', function($state, $scope){

        $scope.login = function() {
            $state.go('home');
        }

    });
