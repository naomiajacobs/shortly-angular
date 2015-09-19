angular.module("shortly.nav", [])
  .controller("NavController", function ($scope, Auth, $state) {

    $scope.signOut = function () {
      Auth.signout();
      $state.go('signin');
    };

  });
