'use strict';

describe('Controller: YoDirectivesCtrl', function () {

  // load the controller's module
  beforeEach(module('ngTutorialApp'));

  var YoDirectivesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    YoDirectivesCtrl = $controller('YoDirectivesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
