
(function(){
    "use strict";

    angular.module('app')
        .controller('myCtrl', ['$scope','tui', function ($scope, tui) {

            $scope.openDialog = function(width,height){
                tui.showImageEditor(width,height);
            }
        }]);
})();