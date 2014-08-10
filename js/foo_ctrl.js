(function () {
  "use strict";

  angular.module("purpleHippo").controller("fooCtrl", function ($scope) {
    $scope.firstNumber = "0";
    $scope.secondNumber = "0";


    $scope.sum = function() {
      var first = parseInt($scope.firstNumber);
      var second = parseInt($scope.secondNumber);
      var result = first + second;

      if (result + 0 === result) {
        return result;
      } else {
        return "Please enter a valid number. Like, for reals.";
      }
    };
  });

})();
