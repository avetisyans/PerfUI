(function() {
angular.module('perf_reportingApp').directive('comparisonCheckbox', function() {
    console.log('inside comparisonCheckbox');
  return {
    restrict: 'E',
    templateUrl: 'app/views/comparisonCheckbox.html'
	};
})
}());