(function () {
    "use strict";

    angular.module('app')
        .controller('editorUICtrl', ['fileUrl', 'width', 'height', function (fileUrl, width, height) {

            setTimeout(
                () => {
                    var imageEditor = new tui.ImageEditor('#tui-image-editor-container', {
                        includeUI: {
                            loadImage: {
                                path: fileUrl,
                                // path: './img/test.png',
                                name: 'SampleImage'
                            },
                            theme: blackTheme, // or whiteTheme
                            initMenu: 'crop',
                            menuBarPosition: 'bottom'
                        },
                        cssMaxWidth: 700,
                        cssMaxHeight: 300
                    });

                    if (width != undefined && height != undefined) {
                        console.log(width + ' , ' + height)
                        imageEditor.setCropRect(width, height);
                    }


                    window.onresize = function () {
                        imageEditor.ui.resizeEditor();
                    }

                }
                , 1000)

        }]);
})();
