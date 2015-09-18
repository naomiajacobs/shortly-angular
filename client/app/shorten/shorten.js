angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function () {
    Links.postLink($scope.link).then(function (response) {
      $scope.link = {};
    });
  };

});
