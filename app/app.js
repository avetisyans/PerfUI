(function () {
    var app = angular.module('perf_reportingApp', ['ngRoute','ui.bootstrap']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: '',
                templateUrl: 'app/views/home.html'
             })            
            .when('/runs/:childRunId', {
                controller: 'RunController',
                templateUrl: 'app/views/run.html'
             })
            .otherwise( { redirectTo: '/' });
    });
    
}());