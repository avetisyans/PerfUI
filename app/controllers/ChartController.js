(function () {

    var ChartController = function ($scope) {
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
x: {key: 'x', labelFunction: function(value) {return value;}, type: 'linear', min: 0, max: 10, ticks: 2}  
  },
  lineMode: 'cardinal',
  transition: {ease: 'elastic', duration: 1000, delay: 50},
  tension: 0.7,
  drawLegend: true,
  drawDots: true,
  columnsHGap: 3,
  tooltip: {mode: 'scrubber', formatter: function(x, y, series) {
      return 'x is: ' + x + '\n y is: ' + y;
  }},
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

    ChartController.$inject = ['$scope'];

    angular.module('perf_reportingApp').controller('ChartController', ChartController);

    function computeFor(x) {
    return 'sdfjasldfjasldkfjslkdfjslkdjfalsdkfj';
}
}());