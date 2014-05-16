'use strict';

describe('Controller: SshCtrl', function () {

  // load the controller's module
  beforeEach(module('ngTutorialApp'));

  var SshCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SshCtrl = $controller('SshCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
