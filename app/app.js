(function () {
    var app = angular.module('perf_reportingApp', ['ngRoute','ui.bootstrap']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: '',
                templateUrl: 'app/views/home.html',
                resolve: {
                    hasSidebar: function($rootScope) { 
                            $rootScope.hasSidebar = true;
       //                     $rootScope.viewSidebar = "env_sidebar"
                            return true; 
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
                controller: 'EnvironmentController',
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
             
            .otherwise( { redirectTo: '/' });
    });
    
}());