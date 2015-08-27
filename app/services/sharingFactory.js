

(function() {
    
    var sharingFactory = function() {
        var factory = {};
        
        factory.runs = [];
        
        return factory;
    };
    
    angular.module('perf_reportingApp').factory('sharingFactory', sharingFactory);
    
    
}());