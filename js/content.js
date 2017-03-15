(function($) {

  var stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.type = 'text/css';
  stylesheet.href = chrome.extension.getURL('css/style.css');

  // rearrange columns of table
  $.each($("table.table.table-striped.table-bordered.table-hover.gridTable tr"), function() {
    $(this).children(":eq(10)").after($(this).children(":eq(1)"));
    $(this).children(":eq(9)").after($(this).children(":eq(3)"));
    $(this).children(":eq(8)").after($(this).children(":eq(4)"));
    $(this).children(":eq(5)").after($(this).children(":eq(3)"));
  });

  $.each($('#ccrm_studentInterviews #ccrm_studentInterviewsTableID tr'), function() {
    $(this).children(":eq(0)").after($(this).children(":eq(4)"));
  });

  // still keepin it real
  $('.orbisFooter .span6').html('© 2017 Orbis Communications Inc. - Orbis Career / Co-op Portal Professional v2 / <a href="http://sharonzheng.com" target="_blank">SHARON ZHENG</a>');

  $('.orbisModuleHeader .row-fluid .span10').html('<h1>Co-op Jobs <a class="btn btn-custom btn-info btn-small" href="https://waterlooworks.uwaterloo.ca/myAccount/co-op/coop-postings.htm">Jobs / Applications</a><a class="btn btn-custom btn-primary btn-small" href="https://waterlooworks.uwaterloo.ca/myAccount/co-op/interviews-co-op.htm">Interviews</a></h1>');

})(jQuery);
