var verificationService = angular.module('verificationService', ['ngResource']);

verificationService.factory('Verify', ['$resource', '$rootScope', function($resource, $rootScope) {
    return $resource($rootScope.apiBaseUrl+'/verify/', {}, {
        post: {
            method:'POST', 
            interceptor: {
                response: function(response) {
                    var result = response.resource;
                    result.status = response.status;
                    return result;
                }
            }
        }
    });
}]);

verificationService.service('Authorize', ['$rootScope', function($rootScope) {
    var $scope = {};
    return {
        setScope:function(scope) {
            $scope = scope;
        },
        buy:function() {
            $scope.buy($scope.content);
        }
    };
}]);
