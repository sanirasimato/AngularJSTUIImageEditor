
(function () {
    "use strict";

    angular.module('app')
        .controller('editorUICtrl', [function () {
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

                    imageEditor.setCropRect(400,200);

                    window.onresize = function () {
                        imageEditor.ui.resizeEditor();
                    }

                }
                , 1000)
        }]);
})();