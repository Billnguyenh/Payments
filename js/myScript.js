
$(document).ready(function() {

  $("#summary-button").click(function() {
      $('html, body').animate({
          scrollTop: $(".summary").offset().top
      }, 1000);
  });
  $("#experience-button").click(function() {
      $('html, body').animate({
          scrollTop: $(".experience").offset().top
      }, 1000);
  });
  $("#involvements-button").click(function() {
      $('html, body').animate({
          scrollTop: $(".involvement").offset().top
      }, 1000);
  });
  $("#contact-button").click(function() {
      $('html, body').animate({
          scrollTop: $(".contact").offset().top
      }, 1000);
  });

});
