'use strict';

describe('Controller: YeomanTestCtrl', function () {

  // load the controller's module
  beforeEach(module('ngTutorialApp'));

  var YeomanTestCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    YeomanTestCtrl = $controller('YeomanTestCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
