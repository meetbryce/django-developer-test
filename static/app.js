angular.module('devTestApp', []);

angular.module('devTestApp')
.config(['$interpolateProvider', function ($interpolateProvider) {
  $interpolateProvider.startSymbol('{$');
  $interpolateProvider.endSymbol('$}');
}])

angular.module('devTestApp')
.controller('MainController', ['$scope', 'apiService', function ($scope, apiService) {
    apiService.get().then(function (data) {
      $scope.projects = data;
    });
}]);

angular.module('devTestApp')
.service('apiService', ['$http', '$log', function ($http, $log) {
  this.get = function() {
    return $http.get('/api/projects').then(
      function (response) {
        return response.data;
      }, 
      function (response) {
        $log.error(response.status + ' (' + response.statusText + ')' + ' error occured while retrieving data');        
        return {
          "error": response.status,
          "detail": response.statusText
        };
      }
    );
  }
}])