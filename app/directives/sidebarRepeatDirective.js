(function () {
    angular.module('perf_reportingApp').directive('sidebarRepeatDirective', function () {
        return function (scope, element, attrs) {
            if (scope.$last) {
                
/*               console.log('Last Item');
                
                $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
                var that = $('.tree li.parent_li > span');
                var children = that.parent('li.parent_li').find(' > ul > li');*/

              //  if (children.is(":visible")) {
                var children = element.parent().find('li');
                children.hide('fast');
                //    that.attr('title', 'Expand this branch').find(' > i').addClass('glyphicon-plus-sign').removeClass('glyphicon-minus-sign');
   /*              } else {
                    children.show('fast');
                    that.attr('title', 'Collapse this branch').find(' > i').addClass('glyphicon-minus-sign').removeClass('glyphicon-plus-sign');
                }

                console.log('After Last Item');*/



            }
        }
    })
}());