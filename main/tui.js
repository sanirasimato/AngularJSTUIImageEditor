
(function () {
    "use strict";

    angular.module('app')
        .factory('tui', ['$mdDialog', function ($mdDialog) {
            
            return{
                showImageEditor: function (_width,_height){
                    return $mdDialog.show({
                        controller: 'editorUICtrl',
                        templateUrl: 'editor.html',
                        clickOutsideToClose: true,

                        locals: {
                            width: _width,
                            height: _height
                        }
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