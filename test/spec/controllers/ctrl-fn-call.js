'use strict';

describe('Controller: CtrlFnCallCtrl', function () {

  // load the controller's module
  beforeEach(module('ngTutorialApp'));

  var CtrlFnCallCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CtrlFnCallCtrl = $controller('CtrlFnCallCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
