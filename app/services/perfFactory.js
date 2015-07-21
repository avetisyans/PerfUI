(function() {
    
    var perfFactory = function($http) {
        var contextPath = "http://localhost:8080/performance-report/"
        var factory = {};
        
        factory.runs = function() {
            return $http.get(contextPath + "rest/runs");
        };
        
        factory.environments = function() {
            return $http.get(contextPath + "rest/environments");
        };
        
        return factory;
    };
    
    perfFactory.$inject = ['$http'];
    
    angular.module('perf_reportingApp').factory('perfFactory', perfFactory);
    
    
}());