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

  // still keepin it real
  $('.orbisFooter .span6').html('© 2017 Orbis Communications Inc. - Orbis Career / Co-op Portal Professional v2 / <a href="http://sharonzheng.com" target="_blank">SHARON ZHENG</a>')

})(jQuery);
