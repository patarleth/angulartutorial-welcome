'use strict';

describe('Controller: WireHeadlinesCtrl', function () {

  // load the controller's module
  beforeEach(module('ngTutorialApp'));

  var WireHeadlinesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WireHeadlinesCtrl = $controller('WireHeadlinesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
