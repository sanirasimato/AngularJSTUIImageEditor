
(function () {
    "use strict";

    angular.module('app')
        .factory('tui', ['$mdDialog', function ($mdDialog) {
            
            return{
                showImageEditor: function (){
                    return $mdDialog.show({
                        controller: 'editorUICtrl',
                        templateUrl: 'editor.html',
                        clickOutsideToClose: true
                    });
                }
                // openDialog : function () {
                //     return $mdDialog.show({
                //         controller: 'editorCtrl',
                //         template: '../editor.html',
                //         clickOutsideToClose: true
                //     });
                // }
            }
            
        }]);
})();