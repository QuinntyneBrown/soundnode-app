'use strict'

app.controller('AppCtrl', ['$scope', function ($scope) {

    $scope.showBigArtwork = function (img) {
        var newArtwork;
        if ( img !== null ) {
            newArtwork = img.replace('large', 't300x300');
            return newArtwork;
        } else {
            return img;
        }
    }

    $scope.isEmptyArtwork = function (img) {

    }

}]);