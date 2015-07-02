(function () {
    var app = angular.module('perf_reportingApp', ['ngRoute']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: '',
                templateUrl: 'app/views/home.html'
             })            
/*            .when('/books/:genreName', {
                controller: 'RunController',
                templateUrl: 'app/views/books.html'
             })*/
            .otherwise( { redirectTo: '/' });
    });
    
}());