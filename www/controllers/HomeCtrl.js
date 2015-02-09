angular.module('hc.controllers.home', [])

    .controller('HomeCtrl', function($scope, $state, TDCardDelegate){


        $scope.toGraph = function() {

            $state.go('graph');
        };

        var cardTypes = [
            { name: 'Heel Slide', time: '2:00', reps: '12', img: './img/HeelSlide.png', desc: 'Movement exercises for osteoarthritis', video: './video/HeelSlide.mp4'},
            { name: 'Knee Rehab', time: '1:30', reps: '8', img: './img/KneeRehab.png', desc: 'Knee, quad set, highland cartilage', video: './video/HeelSlide.mp4'},
            { name: 'Neck Exercise', time: '2:30', reps: '26', img: './img/NeckExercise.png', desc: 'Neck, stiff neck, resistance bands, neck pain', video: './video/HeelSlide.mp4'},
            { name: 'Sky Punch', time: '3:00', reps: '22', img: './img/SkyPunch.png', desc: 'Shoulder, sky punch, should band exercise', video: './video/HeelSlide.mp4'},
            { name: 'Shoulder Exercise', time: '1:00', reps: '8', img: './img/ShoulderExercise.png', desc: 'Shoulder, neck, wall angel, external shoulder rotators, scapular retractors', video: './video/HeelSlide.mp4'}
        ];

        $scope.cards = Array.prototype.slice.call(cardTypes, 0);

        $scope.cardDestroyed = function(index) {
            console.log("card destroyer");
            $scope.cards.splice(index, 1);
        };

        $scope.addCard = function(index) {
            var newCard = cardTypes[index];
            newCard.id = Math.random();
            $scope.cards.push(angular.extend({}, newCard));
        };

        $scope.cardSwipedLeft = function(index) {
            console.log('LEFT SWIPE');
            $scope.addCard(index);
        };

        $scope.cardSwipedRight = function(index) {
            console.log('RIGHT SWIPE' + index);
            $scope.addCard(index);
        };
    })

    .controller('CardCtrl', function($scope, TDCardDelegate) {

        console.log('CARDS CTRL');

        $scope.cardSwipedLeft = function(index) {
            console.log('LEFT SWIPE');
            $scope.addCard();
        };

        $scope.cardSwipedRight = function(index) {
            console.log('RIGHT SWIPE');
            $scope.addCard();
        };
    });

