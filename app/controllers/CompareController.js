(function () {

    var CompareController = function ($scope, $routeParams, $timeout, perfFactory, sharingFactory, environments, $cacheFactory) {

        $scope.displayDelete = function () {
            console.log('displaying mark...');
            $scope.mark = true;
        }

        $scope.environments = environments.data;
        $scope.numberOfRecentRuns = 3;
        $scope.title = "CompareControllerTitle";

        $scope.setEvironments = function (numberOfRecentRuns) {

            perfFactory.deleteMyCache();

            perfFactory.environments(numberOfRecentRuns)
                .success(function (_environments) {
                    $scope.environments = _environments;
                    console.log('env has been set: ', $scope.environments);
                    $timeout(function () {
                        console.log('calling timeout');

                        $('tr.testCaseTitle').each(function (el, val) {
                            if ($(val).hasClass("collapsed")) {
                                val.click();
                            }

                            if (!$(val).hasClass("collapsed")) {
                                val.click();
                            }
                        });
                    });
                })
                .error(function (data, status, headers, config) {
                    console.log('Error while getting Runs');
                    console.log(data.error + ' ' + status);
                });
        }
        
    };

    CompareController.$inject = ['$scope', '$routeParams', '$timeout', 'perfFactory', 'sharingFactory', 'environments', '$cacheFactory'];

    angular.module('perf_reportingApp').controller('CompareController', CompareController);

}());
