(function () {



    var comparisonFactory = function () {

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
        
         function findByTestCaseAndField(env, testCaseName, testFieldName) {
             var successfulArray = ['successfulMin', 'successfulMax', 'successfulAvg'];
                for (var i = 0; i < env.testSuites.length; ++i) {
                    for (var j = 0; j < env.testSuites[i].testCaseStats.length; ++j) {
                        if (env.testSuites[i].testCaseStats[j].name === testCaseName) {
                            var obj = {};
                            
                            if (successfulArray.indexOf(testFieldName) >= 0) {
                                if (env.testSuites[i].testCaseStats[j][testFieldName] < 30000) {

                                   // console.log('testFieldName', testFieldName);
                                   // console.log('env.testSuites[i].testCaseStats[j][testFieldName]', env.testSuites[i].testCaseStats[j][testFieldName]);
                                    obj.value = env.testSuites[i].testCaseStats[j][testFieldName];
                                    obj.speed = 'fast';
                                    return obj;
                                }
                                if (env.testSuites[i].testCaseStats[j][testFieldName] >= 30000 && env.testSuites[i].testCaseStats[j][testFieldName] <= 35000) {

                                   // console.log('testFieldName', testFieldName);
                                   // console.log('env.testSuites[i].testCaseStats[j][testFieldName]', env.testSuites[i].testCaseStats[j][testFieldName]);
                                    obj.value = env.testSuites[i].testCaseStats[j][testFieldName];
                                    obj.speed = 'normal';
                                    return obj;
                                }
                                if (env.testSuites[i].testCaseStats[j][testFieldName] > 35000) {

                                   // console.log('testFieldName', testFieldName);
                                   // console.log('env.testSuites[i].testCaseStats[j][testFieldName]', env.testSuites[i].testCaseStats[j][testFieldName]);
                                    obj.value = env.testSuites[i].testCaseStats[j][testFieldName];
                                    obj.speed = 'slow';
                                    return obj;
                                }
                            }
                            
                            
                            obj.value = env.testSuites[i].testCaseStats[j][testFieldName]
                            
                            return obj;
                        }
                    }
                }
          }

        return {
            getTestCaseNamesFromEnv : getTestCaseNamesFromEnv,
            getTestFieldNamesFromEnv : getTestFieldNamesFromEnv,
            generateTableData : generateTableData,
            findByTestCaseAndField : findByTestCaseAndField,
            removeNameField : removeNameField
        }
    };

    angular.module('perf_reportingApp').factory('comparisonFactory', comparisonFactory);


}());