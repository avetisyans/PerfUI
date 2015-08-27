(function () {

    var ChartController = function ($scope, perfFactory) {

        $scope.envIds = [];
        perfFactory.allEnvironments().success(function (envs) {
                $scope.environments = envs;
            })
            .error(function (data, status, headers, config) {
                console.log('Error while getting Runs');
                console.log(data.error + ' ' + status);
            });

        perfFactory.testCases().success(function (testCases) {
                $scope.testCases = testCases;
            })
            .error(function (data, status, headers, config) {
                console.log('Error while getting Runs');
                console.log(data.error + ' ' + status);
            });
        
        $scope.setEnvs = function(env) {
            console.log('env', env);
            console.log('$scope.environments', $scope.environments);
        }

        $scope.getTestResults = function () {
            $scope.envIds = [];
            for (var k = 0; k < $scope.environments.length; ++k) {
                if ($scope.environments[k].state) {
                    if ($scope.environments[k].state === true) {
                        $scope.envIds.push($scope.environments[k].id);
                    }
                }
            }
            
            console.log('$scope.envIds',$scope.envIds);
            
            perfFactory.testResults($scope.envIds, $scope.selectedTestcase.id, $scope.numberOfRecentDays).success(function (data) {
                    if (data.dateStatistics.length === 0) {
                        $scope.availableData = false;
                    } else {
                        $scope.availableData = true;
                    }
                    setDataAndOptionsForChart(data);
                })
                .error(function (data, status, headers, config) {
                    console.log('Error while getting Runs');
                    console.log(data.error + ' ' + status);
                });

            console.log('$scope.selectedEnv', $scope.selectedEnv);
            console.log('$scope.selectedTestcase', $scope.selectedTestcase);
            console.log('$scope.numberOfRecentDays', $scope.numberOfRecentDays);

        }

        /*    var chart1 = {};
            chart1.type = "LineChart";
            chart1.cssStyle = "height:500px; width:1000px;";
            chart1.data = [['X', 'Y1', {
                    'type': 'string',
                    'role': 'style'
                }, 'Y2', {
                    'type': 'string',
                    'role': 'style'
                }],
                      [1, 3, null, 4, null],
                      [2, 2.5, null, 8, null],
                      [3, 3, null, 9, null],
                      [4, 4, null, 10, null],
                      [5, 4, null, 11, null],
                      [6, 12, 'point { size: 10; shape-type: triangle; fill-color: red', 3, 'point { size: 10; shape-type: triangle; fill-color: #a52714'],
                      [7, 2.5, null, 10, null],
                      [8, 3, null, 7, null]
                ];
            chart1.options = {
                legend: 'bottom',
                hAxis: {
                    minValue: 0,
                    maxValue: 10
                },
                curveType: 'function',
                pointSize: 7,
                dataOpacity: 0.7,
                "colors": ['#0000FF', 'green'],
                //defaultColors property is not part of the strandard options
                //object.  I've added it here to keep a backup of the original
                //colors to call on when re-enabling a series.
                "defaultColors": ['#0000FF', 'green'],
            };

            chart1.view = {
                columns: [0, 1, 2, 3, 4]
            };

            $scope.chart = chart1;

            $scope.seriesSelected = function (selectedItem) {
                if (selectedItem) {
                    var col = selectedItem.column;
                    console.log('col is: ', col);
                    //If there's no row value, user clicked the legend.
                    if (selectedItem.row === null) {
                        //If true, the chart series is currently displayed normally.  Hide it.
                        if ($scope.chart.view.columns[col] == col) {
                            //Replace the integer value with this object initializer.
                            $scope.chart.view.columns[col] = {
                                //Take the label value and type from the existing column.
                                label: $scope.chart.data[0][col],
                                type: 'number',
                                //makes the new column a calculated column based on a function that returns null, 
                                //effectively hiding the series.
                                calc: function () {
                                    return null;
                                }
                            };
                            //Change the series color to grey to indicate that it is hidden.
                            //Uses color[col-1] instead of colors[col] because the domain column (in my case the date values)
                            //does not need a color value.
                            if (col === 1) {
                                $scope.chart.options.colors[col - 1] = '#CCCCCC';
                            } else {
                                $scope.chart.options.colors[col - 2] = '#CCCCCC';
                            }

                        }
                        //series is currently hidden, bring it back.
                        else {
                            //Simply reassigning the integer column index value removes the calculated column.
                            $scope.chart.view.columns[col] = col;
                            //I had the original colors already backed up in another array.  If you want to do this in a more
                            //dynamic way (say if the user could change colors for example), then you'd need to have them backed
                            //up when you switch to grey.

                            if (col === 1) {
                                $scope.chart.options.colors[col - 1] = $scope.chart.options.defaultColors[col - 1];
                            } else {
                                $scope.chart.options.colors[col - 2] = $scope.chart.options.defaultColors[col - 2];
                            }
                        }
                    }
                }
            }; */

        function setDataAndOptionsForChart(data) {
            $scope.data = [];
            for (var i = 0; i < data.dateStatistics.length; ++i) {
                $scope.data.push({
                    x: data.dateStatistics[i].date,
                    successfulMin: data.dateStatistics[i].successfulMin,
                    successfulMax: data.dateStatistics[i].successfulMax,
                    successfulAvg: data.dateStatistics[i].successfulAvg
                });

            }

            $scope.options = {
/*                stacks: [{
                        axes: "y",
                        series: [ "successfulMin", "successfulMax", "successfulAvg" ]
                        }],*/
                axes: {
                    x: {
                        type: 'date',
                        labelFunction: function (x) {
                            return d3.time.format('%d %b %Y')(x);
                        }
                    }
                },
                lineMode: 'cardinal',
/*                transition: {
                    ease: 'elastic',
                    duration: 1000,
                    delay: 50
                },
                tension: 0.7,
                drawLegend: true,
                drawDots: true,
                columnsHGap: 3,*/
                tooltip: {
                    mode: 'scrubber',
                    formatter: function (x, y, series) {
                        //console.log('y is: ' + y);
                        //console.log('series', series);
                        return getStats(x, y, series);
                    }
                },
                series: [{
                        id: "successfulMin",
                        y: "successfulMin",
                        label: "Min",
                       // type: "area",
                        striped: true,
                        color: "#5CB85C",
                        dotSize: 4
                        },
                    {
                        id: "successfulMax",
                        y: "successfulMax",
                        label: "Max",
                      //  type: "area",
                        striped: true,
                        color: "#D9534F",
                        dotSize: 8
                        },
                    {
                        id: "successfulAvg",
                        y: "successfulAvg",
                        label: "Avg",
                       // type: "area",
                        striped: true,
                        color: "blue",
                        dotSize: 6
                        }]
            };

            function getStats(x, y, series) {
                var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
                var yField = "";
                for (var i = 0; i < data.dateStatistics.length; ++i) {
                    if (data.dateStatistics[i].date === x) {
                        /*console.log(new Date(x));*/
                        /*                        for (var t = 0; t < Object.keys(data.dateStatistics[i]).length; ++t) {
                                                    if (data.dateStatistics[i][Object.keys(data.dateStatistics[i])[t]] === y) {
                                                        yField = Object.keys(data.dateStatistics[i])[t];
                                                    }
                                                }*/
                        yField = series.y;
                        var date = new Date(x);
                        var dd = date.getDate();
                        var mm = date.getMonth();
                        var yy = date.getFullYear();
                        return "Total Runs: " + data.dateStatistics[i].totalRuns + " | " +
                            " \n Passed: " + data.dateStatistics[i].passed + " | " +
                            " \n Failed: " + data.dateStatistics[i].failed + " | " +
                            yField + " is: " + y + " | " +
                            "Date: " + dd + " " + months[mm] + " " + yy;
                    }
                }
            }

        }

        $scope.data = [
            {
                x: 0,
                val_1: 0,
                val_2: 0,
                val_3: 0
  },
            {
                x: 1,
                val_1: 5,
                val_2: 6,
                val_3: 7
  },
            {
                x: 2,
                val_1: 7,
                val_2: 8,
                val_3: 9
  },
            {
                x: 3,
                val_1: 10,
                val_2: 15,
                val_3: 20
  },
            {
                x: 4,
                val_1: 27,
                val_2: 32,
                val_3: 37
  },
            {
                x: 5,
                val_1: 32,
                val_2: 36,
                val_3: 40
  },
            {
                x: 6,
                val_1: 22,
                val_2: 24,
                val_3: 26
  },
            {
                x: 7,
                val_1: 3.35,
                val_2: 13.074,
                val_3: 12.625
  },
            {
                x: 8,
                val_1: 18,
                val_2: 22,
                val_3: 26
  },
            {
                x: 9,
                val_1: 12,
                val_2: 15,
                val_3: 18
  },
            {
                x: 10,
                val_1: 8,
                val_2: 11,
                val_3: 14
  },

];

        $scope.options = {
            axes: {
                x: {
                    key: 'x',
                    labelFunction: function (value) {
                        return value;
                    },
                    type: 'linear',
                    min: 0,
                    max: 10,
                    ticks: 2
                }
            },
            lineMode: 'cardinal',
            transition: {
                ease: 'elastic',
                duration: 1000,
                delay: 50
            },
            tension: 0.7,
            drawLegend: true,
            drawDots: true,
            columnsHGap: 3,
            tooltip: {
                mode: 'scrubber',
                formatter: function (x, y, series) {
                    return 'x is: ' + x + '\n y is: ' + y;
                }
            },
            series: [
                {
                    y: "val_1",
                    label: "Min",
                    type: "column",
                    striped: true,
                    color: "#ff7f0e",
                    dotSize: 5
    },
                {
                    y: "val_2",
                    label: "Average",
                    type: "area",
                    striped: true,
                    color: "blue"
    },
                {
                    y: "val_3",
                    label: "Max",
                    type: "area",
                    striped: true,
                    color: "red"
    }

  ]
        };

    };

    ChartController.$inject = ['$scope', 'perfFactory'];

    angular.module('perf_reportingApp').controller('ChartController', ChartController);

    function computeFor(x) {
        return 'sdfjasldfjasldkfjslkdfjslkdjfalsdkfj';
    }
}());