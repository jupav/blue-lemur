'use strict';

/**
 * @ngdoc function
 * @name bluelemurApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bluelemurApp
 */
angular.module('bluelemurApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
