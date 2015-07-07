(function () {
    var app = angular.module('perf_reportingApp', ['ngRoute']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: '',
                templateUrl: 'app/views/home.html'
             })            
            .when('/runs/:runBuildNumber', {
                controller: 'RunController',
                templateUrl: 'app/views/run.html'
             })
            .otherwise( { redirectTo: '/' });
    });
    
}());