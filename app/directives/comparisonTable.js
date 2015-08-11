(function () {
    angular.module('perf_reportingApp').directive('comparisonTable', function (comparisonFactory) {
        
        var controller = function ($scope) {
            
            $scope.envCheckBox = false;

            var testCaseNames = comparisonFactory.getTestCaseNamesFromEnv($scope.environments);

            var testFieldNames = comparisonFactory.removeNameField(comparisonFactory.getTestFieldNamesFromEnv($scope.environments));

            $scope.fieldLength = testFieldNames.length + 1;

            $scope.findByTestCaseAndField = comparisonFactory.findByTestCaseAndField;

            $scope.collapseAll = function () {
                $('tr.testCaseTitle').each(function (el, val) {
                    if (!$(val).hasClass("collapsed")) {
                        val.click();
                    }
                });
            }

            $scope.expandAll = function () {
                $('tr.testCaseTitle').each(function (el, val) {
                    if ($(val).hasClass("collapsed")) {
                        val.click();
                    }
                });
            }
            
            $scope.displayDeleteMark = function() {
                console.log('displaying ...');
                $scope.deleteMark = true;
            }

            $scope.tableData = comparisonFactory.generateTableData(testCaseNames, testFieldNames);
            
            $scope.selectEnvs = function() {
                console.log('selecting ...');
                $scope.envCheckBox = !$scope.envCheckBox;
                console.log('$scope.envCheckBox',$scope.envCheckBox);
                
            }

        };

        return {
            restrict: 'E',
            scope: {
                environments: '='
            },
            controller: controller,
            templateUrl: 'app/views/comparisonTable.html'
        }
    });
}());