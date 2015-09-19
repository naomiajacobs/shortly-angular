angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.pending = false;


  $scope.addLink = function () {
    $scope.pending = true;
    Links.postLink($scope.link).then(function (response) {
      $scope.link = {};
    })
    .catch(function (err) {
      console.log('Error adding link: ', err);
    })
    .then(function () {
      $scope.pending = false;
    });
  };

});
