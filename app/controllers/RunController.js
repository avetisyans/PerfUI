(function () {

    var RunController = function ($scope, $routeParams, perfFactory, sharingFactory) {
        var childRunId = parseInt($routeParams.childRunId);
        $scope.sharingFactory = sharingFactory;
        $scope.test2 = "lslsk";
        var allSuites = [];
        var tabArray = [];

        function init() {

            if (childRunId) {
                $scope.$parent.runs.forEach(function (run) {
                    run.children.forEach(function (childRun) {
                        if (childRun.id === childRunId) {
                            $scope.run = childRun;
                            return;
                        }
                    });
                });

                $scope.run.testSuites.forEach(function (testSuite) {

                    tabArray.push({
                        title: testSuite.name,
                        content: testSuite.testCases
                    });

                    allSuites.push.apply(allSuites, testSuite.testCases);
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

    RunController.$inject = ['$scope', '$routeParams', 'perfFactory', 'sharingFactory'];

    angular.module('perf_reportingApp').controller('RunController', RunController);

}());