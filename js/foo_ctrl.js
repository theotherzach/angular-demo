(function () {
  "use strict";

  angular.module("purpleHippo").controller("fooCtrl", function ($scope) {
    $scope.dog = "Max";


    $scope.dogName = function() {
      return $scope.dog;
    };
  });

})();
