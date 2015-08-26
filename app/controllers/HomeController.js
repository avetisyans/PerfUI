(function() {
    
    var HomeController = function ($scope, $routeParams, perfFactory, sharingFactory) {
        $scope.states = {};
        $scope.states.activeBrand = 'home';
        $scope.sharingFactory = sharingFactory;
        $scope.hello = 'Hello from Home!';
        $scope.chartMode = true;
        
        $scope.toggleTree = function ($event) {
            $($event.currentTarget).parent().children('ul.tree').toggle(200);
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
                    sharingFactory.environments = environments;
                    console.log($scope.environments,'$scope.environments');
                    console.log(sharingFactory.environments,'sharingFactory.environments');
                })
                .error(function(data, status, headers, config) {
                    console.log('Error while getting Environments');
                    console.log(data.error + ' ' + status);
                });           
        }
        
        $scope.displayChartLabel = function() {
            $scope.chartLabel = true;
        }
        
        $scope.toggleChartMode = function() {
            $scope.chartMode = !$scope.chartMode;
            return $scope.chartMode;
        }
        
        $scope.getParentRuns = function(numberOfParentRuns) {
            perfFactory.parentRuns(numberOfParentRuns)
            .success(function(runs) {
                console.log('runs are_______________________+++++++++++____________', runs);
                $scope.runs = runs;
            })
            .error(function(data, status, headers, config) {
                console.log('Error while getting ParentRuns');
                console.log(data.error + ' ' + status);
            });  
        }
    };
    
    HomeController.$inject = ['$scope', '$routeParams', 'perfFactory', 'sharingFactory'];
    
    angular.module('perf_reportingApp').controller('HomeController', HomeController);
    
}());