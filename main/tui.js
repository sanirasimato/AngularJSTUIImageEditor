
(function () {
    "use strict";

    angular.module('app')
        .factory('tui', ['$mdDialog', function ($mdDialog) {
            
            function showImageEditor(_fileUrl, _width, _height){
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
            };

            return{
                callImageEditor: function (_file,_width,_height){
                    var reader = new FileReader();
                    var fileUrl;

                    if (_file) {
                        reader.readAsDataURL(_file);
                    }
                    reader.onload = function(){
                        fileUrl = reader.result;
                        showImageEditor(fileUrl, _width, _height);
                    }
                },

                // showImageEditor: function (_fileUrl,_width,_height){
                    
                //     return $mdDialog.show({
                //         controller: 'editorUICtrl',
                //         templateUrl: 'editor.html',
                //         clickOutsideToClose: true,
                //         locals: {
                //             fileUrl: _fileUrl,
                //             width: _width,
                //             height: _height
                //         },
                //     });
                // }
            }    
        }]);
})();