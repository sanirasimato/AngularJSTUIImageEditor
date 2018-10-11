
(function () {
    "use strict";

    angular.module('app')
        .factory('tui', ['$mdDialog', function ($mdDialog) {
            
            showImageEditor =  function (_fileUrl, _width, _height) {
                return $mdDialog.show({
                    controller: 'editorUICtrl',
                    templateUrl: 'editor.html',
                    clickOutsideToClose: true,
                    locals: {
                        fileUrl: _fileUrl,
                        width: _width,
                        height: _height
                    },
                });
            }
            return{
                callImageEditor: function (_fileUrl, _width, _height) {
                    tui.showImageEditor(_fileUrl, _width, _height);
                },
            }    
        }]);
})();