(function($) {
  
  $.each($('#ccrm_studentInterviews #ccrm_studentInterviewsTableID tr'), function() {
    $(this).children(":eq(0)").after($(this).children(":eq(4)"));
  });

})(jQuery);
