(function() {
    
    var EnvironmentController = function ($scope, $routeParams, perfFactory) {
        
        function init() {
/*         $scope.$parent.runs.forEach(function(run) {
            run.children.foreach(function(childRun) {
               
            })
        });  */
/*            perfFactory.environments()
                .success(function(environments) {
                $scope.environments = environments;
                })
                .error(function(data, status, headers, config) {
                    console.log('Error while getting Environments');
                    console.log(data.error + ' ' + status);
                });*/

            
            
            
            
           // tabArray.push({ title:'Dynamic Title 1', content:'Dynamic content 1', active: true });
           // tabArray.push({ title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true });
        }
        
        init();
        
    
        
    $scope.envTest = "Test of Environment";
        
   
        
    
        
    };
    
    EnvironmentController.$inject = ['$scope', '$routeParams', 'perfFactory'];
    
    angular.module('perf_reportingApp').controller('EnvironmentController', EnvironmentController);
    
}());