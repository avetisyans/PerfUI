(function() {
angular.module('perf_reportingApp').directive('sidebarMainDirective', function() {
  return function(scope, element, attrs) {
      
/*                  if (scope.$last) {
                      console.log('inside Last');
                
$('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
var children = element.parent('li.parent_li').find(' > ul > li');
        if (children.is(":visible")) {
            console.log('Hiding Children');
            children.hide('fast');
            element.attr('title', 'Expand this branch').find(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
        }

            }*/
      
   //   console.log("inside sidebarMainDirective !!!!");
      
                    element.on('click', function (e) {
                        console.log(element);
                    console.log('CCCCCCCCCCCCCCCLicked !!!!!!!!');
                    var children = element.parent().find('li');
                        console.log('children', children);
                    if (children.is(":visible")) {
                        console.log("Inside Visible");
                        children.hide('fast');
                        element.attr('title', 'Expand this branch').find(' > i').addClass('glyphicon-plus-sign').removeClass('glyphicon-minus-sign');
                    } else {
                        console.log("Inside non-Visible");
                        children.show('fast');
                        element.attr('title', 'Collapse this branch').find(' > i').addClass('glyphicon-minus-sign').removeClass('glyphicon-plus-sign');
                    }
                    e.stopPropagation();
                });
  }
});
}());