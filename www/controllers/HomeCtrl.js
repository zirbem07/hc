angular.module('hc.controllers.home', [])

    .controller('HomeCtrl', function($scope, TDCardDelegate){

        console.log('CARDS CTRL');
        var cardTypes = [
            { image: 'http://maxwellzirbel.com/assets/max_header.jpeg' },
            { image: 'https://media.licdn.com/mpr/mpr/shrink_200_200/p/6/005/07d/020/0c27ae7.jpg' },
            { image: 'http://www.uwosh.edu/cob/sbdc/professional-staff/jordanrhodessmallerpicture.jpg' }
        ];

        $scope.cards = Array.prototype.slice.call(cardTypes, 0);

        $scope.cardDestroyed = function(index) {
            $scope.cards.splice(index, 1);
        };

        $scope.addCard = function() {
            var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
            newCard.id = Math.random();
            $scope.cards.push(angular.extend({}, newCard));
        }
    })

    .controller('CardCtrl', function($scope, TDCardDelegate) {
        $scope.cardSwipedLeft = function(index) {
            console.log('LEFT SWIPE');
            $scope.addCard();
        };
        $scope.cardSwipedRight = function(index) {
            console.log('RIGHT SWIPE');
            $scope.addCard();
        };
    });

