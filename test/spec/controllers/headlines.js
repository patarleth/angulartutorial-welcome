'use strict';

describe('Controller: HeadlinesCtrl', function () {

  // load the controller's module
  beforeEach(module('ngTutorialApp'));

  var HeadlinesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HeadlinesCtrl = $controller('HeadlinesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(!!HeadlinesCtrl).toBe(true);
  });
});
