(function() {
    
    var RunController = function ($scope, $routeParams, perfFactory) {
        var routParamName = $routeParams.runBuildNumber;
        
        $scope.hello = routParamName;
        
        console.log('$scope hello is: ' + $scope.hello);
        
        function init() {
            perfFactory.runs()
                .success(function(runs) {
                $scope.runs = runs;
                    console.log("runs are: " + runs);
                })
                .error(function(data, status, headers, config) {
                    console.log('Error while getting Runs');
                    console.log(data.error + ' ' + status);
                });
        }
        
        init();
    };
    
    RunController.$inject = ['$scope', '$routeParams', 'perfFactory'];
    
    angular.module('perf_reportingApp').controller('RunController', RunController);
    
}());