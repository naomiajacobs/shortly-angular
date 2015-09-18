angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.pending = false;

  $scope.addLink = function () {
    $scope.pending = true;
    Links.postLink($scope.link).then(function (response) {
      $scope.pending = false;
      $scope.link = {};
    });
  };

});
