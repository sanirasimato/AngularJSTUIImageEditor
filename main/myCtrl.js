
(function(){
    "use strict";

    angular.module('app')
        .controller('myCtrl', ['$scope','tui', function ($scope, tui) {

            // $scope.openDialog = function(width,height){
            //     var file = document.getElementById('fileItem').files[0];
            //     tui.showImageEditor(width,height);
            // }

            $scope.file_changed = function (element,width,height) {

                var file = element.files[0];
                var reader = new FileReader();
                var fileUrl;

                reader.addEventListener("load", function(){
                    fileUrl = reader.result;
                    tui.callImageEditor(fileUrl, width, height);
                });

                if (file) {
                    reader.readAsDataURL(file);
                }
            };
        }]);
})();