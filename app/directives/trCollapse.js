(function () {
    angular.module('perf_reportingApp').directive('trCollapse', function ($timeout) {
        return {
            restrict: 'A',
            link: function (scope, el, attrs) {
                el.on('click', function () {
                    if (el.hasClass('testCaseTitle')) {
                        el.toggleClass("collapsed");
                        var subTrs = el.nextUntil('.testCaseTitle');
                        var avgTitles = el.find('td');
                        var nodeAvg = $("td:contains('successfulAvg')", subTrs);
                        var nextTDs = nodeAvg.nextAll();

                        var clicks = el.data('clicks');
                        if (clicks) {
                            subTrs.show();
                            el.find('td > i').addClass("glyphicon-chevron-down").removeClass("glyphicon-chevron-right");
                            for (var i = 1; i < avgTitles.length; ++i) {
                                $(avgTitles[i]).text('');
/*                                var avgClass= $(nextTDs[i-1]).attr("class");
                                console.log('avgClass',avgClass);
                                $(avgTitles[i]).removeClass(avgClass)*/
                                
                            }
                        } else {
                            subTrs.hide();
                            el.find('td > i').addClass("glyphicon-chevron-right").removeClass("glyphicon-chevron-down");

                            for (var i = 1; i < avgTitles.length; ++i) {
                                var avgClass= $(nextTDs[i-1]).attr("class");
                                //console.log('avgClass',avgClass);
                                console.log('$(nextTDs[i - 1]).text()',$(nextTDs[i - 1]).text(),$(nextTDs[i - 1]).text().length);
                                if ($(nextTDs[i - 1]).text().length === 0) {
                                    
                                    var noData = "<i>No Data available for selected runs</i>";
                                    $(avgTitles[i]).removeClass().addClass(avgClass).html(noData);
                                } else {
                                    $(avgTitles[i]).removeClass().addClass(avgClass).html('successfulAvg: ' + $(nextTDs[i - 1]).html());
                                }
                            }
                        }
                        el.data('clicks', !clicks);

                    }
                });

                if (scope.$last) {
                    $timeout(function () {
                        console.log('calling timeout', el);
                        $('tr.testCaseTitle').each(function (el, val) {
                            val.click();
                        });
                        
                        $('#comparisonTable').dragtable({dragaccept:'.dragAccept'});
                        
                    });
                }

            }
        }
    });
}());