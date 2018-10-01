
(function(){
    "use strict";

    angular.module('app')
        .controller('myCtrl', ['$scope','tui', function ($scope, tui) {

            $scope.openDialog = function(){
                tui.showImageEditor();
            }
        }]);
})();