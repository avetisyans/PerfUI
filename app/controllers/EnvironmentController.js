(function() {
    
    var EnvironmentController = function ($scope, $routeParams, perfFactory, sharingFactory) {
        var envName = $routeParams.envName;
        var allSuites = [];
        var tabArray = [];
        console.log('EEEEEEEEEEEEEEEEEEEEEnv');
        $scope.numberOfRecentRuns = 3;
        
/*        $scope.setParentEvironment = function(numberOfRecentRuns) {
                perfFactory.environments(numberOfRecentRuns)
                .success(function(environments) {
                $scope.$parent.environments = environments;
                    $scope.$parent.environments.forEach(function(envir) {
                        console.log('envName', envName);
                        if (envName === envir.name) {
                            console.log('equalssssssssss');
                            console.log('envir', envir);
                            $scope.env = envir;
                            return;
                        }
                    });
                    
                    allSuites = [];
                    tabArray = [];
                    
                    var i = 0;
                    $scope.env.testSuites.forEach(function (testSuite) {
                        if (i === 0) {
                            tabArray.push({
                            title: testSuite.name,
                            content: testSuite.testCaseStats,
                            active: true
                            });
                        } else {
                            tabArray.push({
                            title: testSuite.name,
                            content: testSuite.testCaseStats
                            });
                        }
                        ++i;
                        allSuites.push.apply(allSuites, testSuite.testCaseStats);
                    });
                    
                    tabArray.push({
                        title: 'All Suites*',
                        content: allSuites
                    });
                    
                    $scope.tabs = tabArray;
                    
                })
                .error(function(data, status, headers, config) {
                    console.log('Error while getting Runs');
                    console.log(data.error + ' ' + status);
                }); 
            
                
            
              //  $scope.tabs = [{title: 'Some Title', content: 'Some Content'}];
        }*/
        $scope.setInitEvironment = function(numberOfRecentRuns) {
            $scope.environments = sharingFactory.environments;
            
            $scope.environments.forEach(function(envir) {
                console.log('envName', envName);
                if (envName === envir.name) {
                    console.log('envir', envir);
                    $scope.env = envir;
                    return;
                }
            });
            
                    allSuites = [];
                    tabArray = [];
                    
                    var i = 0;
                    $scope.env.testSuites.forEach(function (testSuite) {
                        if (i === 0) {
                            tabArray.push({
                            title: testSuite.name,
                            content: testSuite.testCaseStats,
                            active: true
                            });
                        } else {
                            tabArray.push({
                            title: testSuite.name,
                            content: testSuite.testCaseStats
                            });
                        }
                        ++i;
                        allSuites.push.apply(allSuites, testSuite.testCaseStats);
                    });
                    
                    tabArray.push({
                        title: 'All Suites*',
                        content: allSuites
                    });
                    
                    $scope.tabs = tabArray;
            
        }

        $scope.setEvironment = function(numberOfRecentRuns) {
                perfFactory.environments(numberOfRecentRuns)
                .success(function(environments) {
                $scope.environments = environments;
                    $scope.environments.forEach(function(envir) {
                        console.log('envName', envName);
                        if (envName === envir.name) {
                            console.log('equalssssssssss');
                            console.log('envir', envir);
                            $scope.env = envir;
                            return;
                        }
                    });
                    
                    allSuites = [];
                    tabArray = [];
                    
                    var i = 0;
                    $scope.env.testSuites.forEach(function (testSuite) {
                        if (i === 0) {
                            tabArray.push({
                            title: testSuite.name,
                            content: testSuite.testCaseStats,
                            active: true
                            });
                        } else {
                            tabArray.push({
                            title: testSuite.name,
                            content: testSuite.testCaseStats
                            });
                        }
                        ++i;
                        allSuites.push.apply(allSuites, testSuite.testCaseStats);
                    });
                    
                    tabArray.push({
                        title: 'All Suites*',
                        content: allSuites
                    });
                    
                    $scope.tabs = tabArray;
                    
                })
                .error(function(data, status, headers, config) {
                    console.log('Error while getting Runs');
                    console.log(data.error + ' ' + status);
                });
            
        }

        
        function init() {
            console.log('init from EnvironmentController');
            $scope.setInitEvironment(3);
         }
        
        init();
        
        //init();
        // $scope.setParentEvironment(3);
        
/*        tabArray.push({
            title: 'All Suites*',
            content: allSuites
        });
        
        $scope.tabs = tabArray;*/
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