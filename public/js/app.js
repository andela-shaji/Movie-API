angular.module('forexApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

        // For any unmatched url, go to home route
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('home', {
                url: '/',
                controller: 'HomeCtrl',
                templateUrl: 'views/home.html'
            })
            .state('login', {
                url: '/login',
                controller: 'LoginCtrl',
                templateUrl: 'views/login.html'
            })
            .state('forex', {
                url: '/forex',
                controller: 'ForexCtrl',
                templateUrl: 'views/forex.html'
            });

        $locationProvider.html5Mode(true);
    });
