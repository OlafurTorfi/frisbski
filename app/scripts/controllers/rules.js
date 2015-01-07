'use strict';

angular.module('frisbskiApp')
  .controller('RulesCtrl', function ($scope) {
  	$scope.sheets = [{
  		title:'Aim of the game',
  		text:'from startline until the end, 2 players throw the frisbee between each other and catch.',
  		class:'first'
  	},
  	{
  		title:'Points',
  		text:'Points are counted by measuring the length travelled using gps and altitude measurements of both the frisbee and the skier. Only the "par x" longest throws count on each slope (So on a par 3 slope the 3 first throws count.',
  		class:'second'
  	},
  	{
  		title:'Equipment',
  		text:'Standard ski equipment. And Einar & Torfi\'s super funtime frisbee are required to compete',
  		class:'first'
  	}];
  });