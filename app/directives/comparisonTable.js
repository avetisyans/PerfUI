(function () {
    angular.module('perf_reportingApp').directive('comparisonTable', function () {


        function getTestCaseNamesFromEnv(environments) {
            var testCaseNameArray = [];

            for (var i = 0; i < environments.length; ++i) {
                for (var j = 0; j < environments[i].testSuites.length; ++j) {
                    for (var k = 0; k < environments[i].testSuites[j].testCaseStats.length; ++k) {
                        if (testCaseNameArray.indexOf(environments[i].testSuites[j].testCaseStats[k].name) < 0) {
                            testCaseNameArray.push(environments[i].testSuites[j].testCaseStats[k].name);
                        }
                    }
                }
            }

            return testCaseNameArray;

        }

        function getTestFieldNamesFromEnv(environments) {
            var testFieldNameArray = [];

            for (var i = 0; i < environments.length; ++i) {
                for (var j = 0; j < environments[i].testSuites.length; ++j) {
                    for (var k in environments[i].testSuites[j].testCaseStats[0]) {
                        testFieldNameArray.push(k);
                    }
                    return testFieldNameArray;
                }
            }
        }



        function generateTableData(testCaseNames, testFieldNames) {
            tableData = [];

            for (var i = 0; i < testCaseNames.length; ++i) {
                for (var j = 0; j <= testFieldNames.length; ++j) {
                    var obj = {};
                    obj["testCaseName"] = testCaseNames[i];

                    obj["fieldName"] = (j === 0) ? testCaseNames[i] : testFieldNames[j - 1];

                    tableData.push(obj);
                }
            }

            return tableData;
        }

        function removeNameField(array) {
            var nameIndex = array.indexOf("name");
            if (nameIndex !== -1) {
                array.splice(nameIndex, 1);
            }
            return array;
        }

        var controller = function ($scope) {
            console.log('$scope from $scope.environments ', $scope.environments);

            var testCaseNames = getTestCaseNamesFromEnv($scope.environments);
            console.log('testCaseNames is:', testCaseNames);

            var testFieldNames = removeNameField(getTestFieldNamesFromEnv($scope.environments));
            console.log('testFieldNames is: ', testFieldNames);


            $scope.fieldLength = testFieldNames.length + 1;

            $scope.findByTestCaseAndField = function (env, testCaseName, testFieldName) {
                for (var i = 0; i < env.testSuites.length; ++i) {
                    for (var j = 0; j < env.testSuites[i].testCaseStats.length; ++j) {
                        if (env.testSuites[i].testCaseStats[j].name === testCaseName) {
                            return env.testSuites[i].testCaseStats[j][testFieldName];
                        }
                    }
                }
            }

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

            $scope.tableData = generateTableData(testCaseNames, testFieldNames);
            console.log('tableData', tableData);

        };

        return {
            restrict: 'E',
            scope: {
                environments: '='
            },
            controller: controller,
            templateUrl: 'app/views/comparisonTable.html',
            link: function(scope, el, attrs) {
                console.log('scope', scope);
            }
        }
    });
}());