(function() {
    
    var HomeController = function ($scope, $routeParams, perfFactory) {
        
        $scope.hello = 'Hello from Home!';
        
        $scope.toggleTree = function ($event) {
            console.log('LABEL is CLICKED --------------------------  LABEL is CLICKED')
            $($event.currentTarget).parent().children('ul.tree').toggle(200);
            console.log($($event.currentTarget).parent().children('ul.tree'));
        }
        
        $scope.displayRunTree = function() {
             perfFactory.runs()
                .success(function(runs) {
                $scope.runs = runs;
                })
                .error(function(data, status, headers, config) {
                    console.log('Error while getting Runs');
                    console.log(data.error + ' ' + status);
                });           
        }  
        
        $scope.displayEnvTree = function() {
             perfFactory.environments()
                .success(function(environments) {
                $scope.environments = environments;
                })
                .error(function(data, status, headers, config) {
                    console.log('Error while getting Runs');
                    console.log(data.error + ' ' + status);
                });           
        }
        
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
        
       // init();
    };
    
    HomeController.$inject = ['$scope', '$routeParams', 'perfFactory'];
    
    angular.module('perf_reportingApp').controller('HomeController', HomeController);
    
}());