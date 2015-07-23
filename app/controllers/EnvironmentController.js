(function() {
    
    var EnvironmentController = function ($scope, $routeParams, perfFactory, sharingFactory) {
        var envName = $routeParams.envName;
        var allSuites = [];
        var tabArray = [];
        
        function init() {
            if (envName) {
                    $scope.$parent.environments.forEach(function(env) {
                        if (envName === env.name) {
                            $scope.env = env;
                            return;
                        }
                    });
                
                    $scope.env.testSuites.forEach(function (testSuite) {
                        tabArray.push({
                            title: testSuite.name,
                            content: testSuite.testCaseStats
                        });
                        allSuites.push.apply(allSuites, testSuite.testCaseStats);
                    });
                }
         }
        
        init();
        
        tabArray.push({
            title: 'All Suites*',
            content: allSuites
        });
        
        $scope.tabs = tabArray;
    };
    
    EnvironmentController.$inject = ['$scope', '$routeParams', 'perfFactory', 'sharingFactory'];
    
    angular.module('perf_reportingApp').controller('EnvironmentController', EnvironmentController);
    
}());

/*    var RunController = function ($scope, $routeParams, perfFactory) {
        var childRunId = parseInt($routeParams.childRunId);
        var tabArray = [];
        
        function init() {

                if (childRunId) {
                  //  console.log("Setting $scope.run");
                    $scope.$parent.runs.forEach(function (run) {
                        run.children.forEach(function (childRun) {
                           // console.log('childRun.id', childRun.id);
                           // console.log('childRunId', childRunId);
                            if (childRun.id === childRunId) {
                                $scope.run = childRun;
                                return;
                            }
                        })
                    });

                    $scope.run.testSuites.forEach(function (testSuite) {
                        //var table = '<table class="table table-bordered table-hover table-striped"><thead><tr>';
                        //$scope.testCases = testSuite.testCases;

                        tabArray.push({
                            title: testSuite.name,
                            content: testSuite.testCases
                        });
                    })
                }


            
            
            
            
           // tabArray.push({ title:'Dynamic Title 1', content:'Dynamic content 1', active: true });
           // tabArray.push({ title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true });
        }
        
        init();
        
       // console.log("___runController__");
    
        
    $scope.tabs = tabArray;
        
   
        
    
        
    };*/