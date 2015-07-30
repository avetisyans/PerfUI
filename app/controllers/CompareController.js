(function() {
    
    var CompareController = function ($scope, $routeParams, perfFactory, sharingFactory) {
        $scope.title = "CompareControllerTitle";
    };
    
    CompareController.$inject = ['$scope', '$routeParams', 'perfFactory', 'sharingFactory'];
    
    angular.module('perf_reportingApp').controller('CompareController', CompareController);
    
}());