'use strict';

describe('Controller: MainRouteCtrl', function () {

  // load the controller's module
  beforeEach(module('ngTutorialApp'));

  var MainRouteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainRouteCtrl = $controller('MainRouteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
