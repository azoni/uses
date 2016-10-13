'use strict';
 
angular.module('myApp.sidebar', ['ngRoute'])
// Home controller
.controller('SidebarCtrl', ["$scope", "$location", "Auth", function($scope, $location, Auth) {
  $scope.isActiveMenu = function(path) {
    return  path == $location.$$path;
  }

  $scope.signOut = function() {
  	Auth.$signOut();
  	$location.path('/home');
  }
}]);

// $("#menu-toggle").click(function(e) {
//         e.preventDefault();
//         $("#wrapper").toggleClass("toggled");
//     });
//      $("#menu-toggle-2").click(function(e) {
//         e.preventDefault();
//         $("#wrapper").toggleClass("toggled-2");
//         $('#menu ul').hide();
//     });
 
//      function initMenu() {
//       $('#menu ul').hide();
//       $('#menu ul').children('.current').parent().show();
//       //$('#menu ul:first').show();
//       $('#menu li a').click(
//         function() {
//           var checkElement = $(this).next();
//           if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
//             return false;
//             }
//           if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
//             $('#menu ul:visible').slideUp('normal');
//             checkElement.slideDown('normal');
//             return false;
//             }
//           }
//         );
//       }
//     $(document).ready(function() {initMenu();});