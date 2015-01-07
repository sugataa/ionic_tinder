// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ionic.contrib.ui.tinderCards'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

})

.directive('noScroll', function($document) {

  return {
    restrict: 'A',
    link: function($scope, $element, $attr) {

      $document.on('touchmove', function(e) {
        e.preventDefault();
      })
    }
  }
})

.controller('CardsCtrl', function($scope, TDCardDelegate) {
  console.log('CARDS CTRL');
  var cardTypes = [
    { title: 'Max',
      image: 'img/max.jpg' },
    { title: 'Ben',
      image: 'img/ben.png' },
    { title: 'Perry',
      image: 'img/perry.jpg' },
  ];

  $scope.cards = Array.prototype.slice.call(cardTypes, 0);

  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
  };

  $scope.addCard = function() {
    var randomNumber = Math.floor(Math.random() * (cardTypes.length - 1 + 1)) + 1;
    console.log(randomNumber);
    var newCard = cardTypes[randomNumber];
    newCard.id = Math.random();
    $scope.cards.push(angular.extend({}, newCard));
  }

  $scope.cardSwipedLeft = function(index) {
    console.log('LEFT SWIPE');
    $scope.addCard();
  };
  $scope.cardSwipedRight = function(index) {
    console.log('RIGHT SWIPE');
    $scope.addCard();
  };
});

