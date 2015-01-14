'use strict';

angular.module('ngTutorialApp')
  .controller('CtrlFnCallCtrl', function ($scope) {
      $scope.hello = 'nurse';
      $scope.foo = function() {
          $scope.hello='goodbye';
        };
    });
