(function() {
    
    var CompareController = function ($scope, $routeParams, perfFactory, sharingFactory) {
        
        function init() {
            perfFactory.environments()
                .success(function(envs) {
                    sharingFactory.environments = envs;
                    $scope.environments = sharingFactory.environments;
                })
                .error(function(data, status, headers, config) {
                    console.log('Error while getting Environments');
                    console.log(data.error + ' ' + status); 
                });
        }
        
        init();
        
        $scope.title = "CompareControllerTitle";
        
    };
    
    CompareController.$inject = ['$scope', '$routeParams', 'perfFactory', 'sharingFactory'];
    
    angular.module('perf_reportingApp').controller('CompareController', CompareController);
    
    
}());





/*        function init() {
            perfFactory.runs()
                .success(function(runs) {
                $scope.runs = runs;
                })
                .error(function(data, status, headers, config) {
                    console.log('Error while getting Runs');
                    console.log(data.error + ' ' + status);
                });
        }*/