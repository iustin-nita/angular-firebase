'use strict';

app.controller('NavCtrl',['$scope', '$location', 'Post', function ($scope, $location, Post) {
  $scope.post = {url: 'http://', title: ''};
  // $scope.signedIn = Auth.signedIn;
  // $scope.logout = Auth.logout;
  $scope.submitPost = function () {
    Post.create($scope.post).then(function (ref) {
      $location.path('/posts/' + ref.name());
      $scope.post = {url: 'http://', title: ''};
    });
  };

}]	);