angular.module("shortly.nav", [])
  .controller("NavController", function ($rootScope, $location, $scope, Auth) {

    $scope.links = function () {
      $location.path('/links');
    };

    $scope.shorten = function () {
      $location.path('/shorten');
    };

  });