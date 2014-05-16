'use strict';

describe('Controller: RorCtrl', function () {

  // load the controller's module
  beforeEach(module('ngTutorialApp'));

  var RorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RorCtrl = $controller('RorCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
