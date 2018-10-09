
(function () {
    "use strict";

    angular.module('app')
        .controller('editorUICtrl', [function ($scope, $mdDialog, initialData, width, height) {
            
            console.log(width+' , '+height);
            
            setTimeout(
                () => {

                    var imageEditor = new tui.ImageEditor('#tui-image-editor-container', {
                        includeUI: {
                            loadImage: {
                                menu: ['shape'],
                                path: './img/test.png',
                                name: 'SampleImage'
                            },
                            theme: blackTheme, // or whiteTheme
                            initMenu: 'crop',
                            menuBarPosition: 'bottom'
                        },
                        cssMaxWidth: 700,
                        cssMaxHeight: 300
                    });
                    // console.log(imageEditor.ui.initMenu);
                    imageEditor.setCropRect(width,height);

                    window.onresize = function () {
                        imageEditor.ui.resizeEditor();
                    }

                }
                , 1000)
                
        }]);
})();
