(function () {

    var EnvironmentController = function ($scope, $routeParams, perfFactory, sharingFactory, $cacheFactory) {
        var envName = $routeParams.envName;
        var allSuites = [];
        var tabArray = [];
        $scope.numberOfRecentRuns = 3;

        $scope.setInitEvironment = function (numberOfRecentRuns) {
            $scope.environments = sharingFactory.environments;

            $scope.environments.forEach(function (envir) {
                if (envName === envir.name) {
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

        $scope.setEvironment = function (numberOfRecentRuns) {


            perfFactory.deleteMyCache();

            perfFactory.environments(numberOfRecentRuns)
                .success(function (environments) {
                    $scope.environments = environments;
                    $scope.environments.forEach(function (envir) {
                        if (envName === envir.name) {
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
                .error(function (data, status, headers, config) {
                    console.log('Error while getting Runs');
                    console.log(data.error + ' ' + status);
                });

        }


        function init() {
            console.log('init from EnvironmentController');
            $scope.setInitEvironment(3);
        }

        init();
    };

    EnvironmentController.$inject = ['$scope', '$routeParams', 'perfFactory', 'sharingFactory', '$cacheFactory'];

    angular.module('perf_reportingApp').controller('EnvironmentController', EnvironmentController);

}());