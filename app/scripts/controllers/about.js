'use strict';

/**
 * @ngdoc function
 * @name frisbskiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frisbskiApp
 */
angular.module('frisbskiApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.sheets = [{
  		title:'History',
  		text:'It all started in Einar and Torfi\'s annual skitrip in 2012, Einar had just gotten a some new toys which he brought along on the trip...',
  		class:'first'
  	},
  	{
  		title:'Competitions',
  		text:'Each year competitions are announced in the blog part on the front page',
  		class:'second'
  	},
  	{
  		title:'Contact',
  		text:'Call us now ate 123456789 or send us an email to bananabender@eatem.all',
  		class:'first'
  	}];
  });
