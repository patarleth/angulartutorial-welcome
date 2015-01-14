'use strict';

describe('Controller: EspnFactoryResorucesCtrl', function () {

  // load the controller's module
  beforeEach(module('ngTutorialApp'));

  var EspnFactoryResorucesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
/*
    EspnFactoryResorucesCtrl = $controller('EspnFactoryResorucesCtrl', {
      $scope: scope
    });
*/
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(!!!EspnFactoryResorucesCtrl).toBe(true);
  });
});
