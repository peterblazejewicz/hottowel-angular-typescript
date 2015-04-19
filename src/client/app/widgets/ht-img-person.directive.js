(function () {
    'use strict';
    angular.module('app.widgets').directive('htImgPerson', htImgPerson);
    htImgPerson.$inject = ['config'];
    function htImgPerson(config) {
        var basePath = config.imageBasePath;
        var unknownImage = config.unknownPersonImageSource;
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;
        function link(scope, element, attrs) {
            attrs.$observe('htImgPerson', function (value) {
                value = basePath + (value || unknownImage);
                attrs.$set('src', value);
            });
        }
    }
})();

//# sourceMappingURL=../../../client/app/widgets/ht-img-person.directive.js.map