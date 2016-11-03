angular.module('forexApp')
    .controller('HomeCtrl', ['$scope', 'ServerRequest', function($scope, ServerRequest) {
        $scope.user = {};
        $scope.login = function() {
            // ServerRequest.login($scope.user).then(function(user) {
            //     console.log(user);
            // }, function(error) {
            //     console.log(error);
            // });
            ServerRequest.getSpecificRate($scope.baseCurrency);
        };

        $scope.baseCurrency = '';

    }]);
