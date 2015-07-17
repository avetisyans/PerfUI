(function() {
    
    var EnvironmentController = function ($scope, $routeParams, perfFactory) {
        var envName = $routeParams.envName;
        function init() {
            if (envName) {
                    $scope.$parent.environments.forEach(function(env) {
                        if (envName === env.name) {
                            $scope.env = env;
                            return;
                        }
                    });
                }
         }
        
        init();        
    };
    
    EnvironmentController.$inject = ['$scope', '$routeParams', 'perfFactory'];
    
    angular.module('perf_reportingApp').controller('EnvironmentController', EnvironmentController);
    
}());