'use strict';

/**
 * @ngdoc function
 * @name frisbskiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frisbskiApp
 */
angular.module('frisbskiApp')
  .controller('MainCtrl', ['$scope', '$sce', function ($scope, $sce) {
      $scope.blogs = [{
                  title:'Bláfjöll 3.1.2015 compilation',
                  text:'This is a picture showing my beautiful self',
                  image:'images/SettingUpCamera.jpg',
                  embedded:$sce.trustAsHtml('<iframe width="560" height="315" src="//www.youtube.com/embed/GM2DeCQ7GfU" frameborder="0" allowfullscreen></iframe>')
            },
            {
                  title:'Næsta Vídjó'
            }];
      $scope.blog = $scope.blogs[0];
      $scope.nextBlog = function(){
            var next = $scope.blogs.indexOf($scope.blog)+1;
            if(next > ($scope.blogs.length - 1)){
                  next = 0;
            }
            $scope.blog = $scope.blogs[next];
      };
      $scope.previousBlog = function(){
            var next = $scope.blogs.indexOf($scope.blog)-1;
            if(next < 0){
                  next = 0;
            }
            $scope.blog = $scope.blogs[next];
      };
      /*$scope.users = [{
                  title:'Einar',
                  text:'One two three four, I wanna take one ride more. Five six seven eight, it\'s never too late',
                  image:'images/SettingUpCamera.jpg',
                  footer:'co-creator of Frisbski'
            },
            {
                  title:'Torfi',
                  text:'One two three frisbskeeee',
                  image:'images/SettingUpCamera.jpg',
                  footer:'co-creator of Frisbski'
            }];*/
            
      $scope.setPost = function(post){
            $scope.post = post;
      };
  }]);
