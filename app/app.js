(function () {
    var app = angular.module('perf_reportingApp', ['ngRoute','ui.bootstrap', 'n3-line-chart']);

    app.config(function($routeProvider, $httpProvider) {
        $routeProvider
            .when('/', {
                controller: 'CompareController',
                templateUrl: 'app/views/home.html',
                resolve: {
                    hasSidebar: function($rootScope) { 
                            $rootScope.hasSidebar = true;
                            $rootScope.viewSidebar = "compare_sidebar";
       //                     $rootScope.viewSidebar = "env_sidebar"
                            return true; 
                    },
                    perfFactory: "perfFactory",
                    environments: function (perfFactory) {
                        return perfFactory.environments();
                    }
        }
             })            
            .when('/runs/:childRunId', {
                controller: 'RunController',
                templateUrl: 'app/views/run.html',
                resolve: {
                    hasSidebar: function($rootScope) {
                        $rootScope.hasSidebar = true;
                        $rootScope.viewSidebar = "run_sidebar";
                        return true;
                    }
                }
             })
             .when('/runs', {
                controller: 'RunController',
  //              templateUrl: 'app/views/run_home.html',
                resolve: {
                    hasSidebar: function($rootScope) {
                        $rootScope.hasSidebar = true;
                        $rootScope.viewSidebar = "run_sidebar";
                        return true;
                    }
                }
             })
            .when('/environments', {
                controller: '',
          //      templateUrl: 'app/views/environment_home.html',
                resolve: {
                    hasSidebar: function($rootScope) {
                        $rootScope.hasSidebar = true;
                        $rootScope.viewSidebar = "env_sidebar";
                        return true;
                    }
                }
             })
             .when('/environments/:envName', {
                controller: 'EnvironmentController',
                templateUrl: 'app/views/environment.html',
                resolve: {
                    hasSidebar: function($rootScope) {
                        $rootScope.hasSidebar = true;
                        $rootScope.viewSidebar = "env_sidebar";
                        return true;
                    }
                }
             })
            .when('/chart', {
                controller: 'ChartController',
                templateUrl: 'app/views/chart.html',
                resolve: {
                    hasSidebar: function($rootScope) {
                        $rootScope.hasSidebar = true;
                        $rootScope.viewSidebar = "compare_sidebar";
                        return true;
                    }
                }
            })
            .otherwise( { redirectTo: '/' });
        
            $httpProvider.defaults.cache = false;
            //$httpProvider.defaults.cache = $cacheFactoryProvider('myCache', {capacity: 10});
    });
    
}());