var superDPR = angular.module('superDPR', []);

superDPR.controller('ClassesCtrl', function ($scope, $http)
  {
    $scope.loadClasses = function()
    {
      $http.get("cscore/list").then(function(data)
        {
          $scope.classList = data;
        });
    }
    $scope.loadClasses();
  });

