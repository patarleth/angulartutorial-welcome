'use strict';

describe('Controller: CookieCtrl', function () {

  // load the controller's module
  beforeEach(module('ngTutorialApp'));

  var CookieCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CookieCtrl = $controller('CookieCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
  });
});
