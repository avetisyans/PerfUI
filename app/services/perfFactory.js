(function() {
    
    var perfFactory = function($http) {
        var factory = {};
        
        factory.runs = function() {
            return $http.get('http://localhost:8080/performance-reporting/rest/runs');
        };
        
        factory.environments = function() {
            return $http.get('http://localhost:8080/performance-reporting/rest/environments');
        };
        
        return factory;
    };
    
    perfFactory.$inject = ['$http'];
    
    angular.module('perf_reportingApp').factory('perfFactory', perfFactory);
    
    
}());