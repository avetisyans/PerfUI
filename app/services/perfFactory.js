(function() {
    
    var perfFactory = function($http) {
        var contextPath = "http://localhost:8080/performance-report/";
       /* var contextPath = "http://10.152.28.75:8080/performance-report/";*/
        var factory = {};
        
        factory.runs = function() {
            return $http.get(contextPath + "rest/runs");
        };
        
        factory.environments = function(numberOfRecentRuns) {
            if (numberOfRecentRuns != 0) {
                numberOfRecentRuns = numberOfRecentRuns || 3;     
            }

            return $http.get(contextPath + "rest/environments", {params: {"numberOfRecentRuns": numberOfRecentRuns}});
        };
        
        return factory;
    };
    
    perfFactory.$inject = ['$http'];
    
    angular.module('perf_reportingApp').factory('perfFactory', perfFactory);
    
    
}());