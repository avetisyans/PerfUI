

(function() {
    
    var sharingFactory = function() {
        var factory = {};
        
        factory.runPath = "test --> path";
        
        return factory;
    };
    
    angular.module('perf_reportingApp').factory('sharingFactory', sharingFactory);
    
    
}());