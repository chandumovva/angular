angular.module("challenge", ['ui.router', 'challenge1'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider.
        state('list', {
                url: '/',
                templateUrl: "../challenge1/templates/challenge1.html",
                controller: "loginctrl"
            })
            .state('success', {
                url: '/success',
                templateUrl: "../challenge1/templates/success.html",
                controller: "loginctrl"
            })

    })
