angular.module('forexApp')
    .factory('ServerRequest', ['$http', '$q', function($http, $q) {
        var api_url = '/api/';

        // function getLatestForex() {
        //     var url = api_url + 'forex';
        //     var deferred = $q.defer();
        //     $http({
        //         url: url,
        //         method: 'GET'
        //     }).then(function(resp) {
        //         forexData = resp.data;
        //         deferred.resolve(data);
        //     }, function error(error) {
        //         forexData = error;
        //         deferred.reject(error);
        //     });
        // }

        function getSpecificRate(currency) {
            var url = api_url + '/forex/' + currency.toString();
            $http({
                url: url,
                method: 'GET',
            }).then(function(resp) {
                console.log(resp.data);
            }, function(error) {
                console.log(error);
            });
        }

        function login(data) {
            var url = api_url + '/users/login';
            var user = '';
            var deferred = $q.defer();

            $http({
                url: url,
                method: 'POST',
                data: data
            }).then(function(resp) {
                user = resp.data;
                deferred.resolve(user);
            }, function(error) {
                user = error;
                deferred.reject(error);
            });
        }


        return {
            // getLatestForex: getLatestForex,
            login: login,
            getSpecificRate: getSpecificRate
        };
    }]);
