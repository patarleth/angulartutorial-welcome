'use strict';

describe('Controller: HistoryRepeatsCtrl', function () {

  // load the controller's module
  beforeEach(module('ngTutorialApp'));

  var HistoryRepeatsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HistoryRepeatsCtrl = $controller('HistoryRepeatsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
