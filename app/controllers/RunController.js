(function() {
    
    var RunController = function ($scope, $routeParams, perfFactory) {
        var childRunId = parseInt($routeParams.childRunId);
        
        function init() {
/*         $scope.$parent.runs.forEach(function(run) {
            run.children.foreach(function(childRun) {
               
            })
        });  */
            
            $scope.$parent.runs.forEach(function(run) {
               run.children.forEach(function(childRun) {
                    console.log('childRun.id', childRun.id);
                    console.log('childRunId', childRunId);
                   if (childRun.id === childRunId) {
                       $scope.run = childRun;
                       return;
                   }
               })
            });
            
        }
        
        init();
        
    };
    
    RunController.$inject = ['$scope', '$routeParams', 'perfFactory'];
    
    angular.module('perf_reportingApp').controller('RunController', RunController);
    
}());