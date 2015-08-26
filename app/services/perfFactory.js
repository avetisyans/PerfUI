(function() {
    
    var perfFactory = function($http, $cacheFactory) {
        var myCache = $cacheFactory('myCache', {capacity: 10});
        var contextPath = "http://localhost:8080/performance-report/";
       /* var contextPath = "http://10.152.28.75:8080/performance-report/";*/
        var factory = {};
        
        factory.runs = function() {
            return $http.get(contextPath + "rest/runs");
        };
        
        factory.deleteMyCache = function() {
            var myCache = $cacheFactory.get('myCache');
            myCache.remove('myCache');
            myCache.removeAll();
            console.log('removing cache...');
        };
        
        factory.environments = function(numberOfRecentRuns) {
            if (numberOfRecentRuns != 0) {
                numberOfRecentRuns = numberOfRecentRuns || 3;     
            }

            return $http.get(contextPath + "rest/environments", {params: {"numberOfRecentRuns": numberOfRecentRuns}, cache: myCache });
        };
        
        factory.parentRuns(numberOfParentRuns) {
            if (numberOfParentRuns != 0) {
                numberOfParentRuns = numberOfParentRuns || 3;
            }
            
            return $http.get(contextPath + "rest/runs", {params: {"numberOfParentRuns": numberOfParentRuns}});
        }
        
        factory.allEnvironments = function() {
            return $http.get(contextPath + "rest/allEnvironments");
        }
        
        factory.testCases = function() {
            return $http.get(contextPath + "rest/testCases");
        }
        
        factory.testResults = function(envId, testCaseId, numberOfRecentDays) {
            return $http.get(contextPath + "rest/testResults", {params: {"envId": envId, "testCaseId": testCaseId, "numberOfRecentDays": numberOfRecentDays}})
        }
        
        return factory;
    };
    
    perfFactory.$inject = ['$http', '$cacheFactory'];
    
    angular.module('perf_reportingApp').factory('perfFactory', perfFactory);
    
    
}());







//perfFactory.parentRuns(numberOfParentRuns)