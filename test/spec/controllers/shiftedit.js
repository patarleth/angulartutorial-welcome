'use strict';

describe('Controller: ShifteditCtrl', function () {

  // load the controller's module
  beforeEach(module('ngTutorialApp'));

  var ShifteditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShifteditCtrl = $controller('ShifteditCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
