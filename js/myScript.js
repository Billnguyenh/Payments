
$(document).ready(function() {

  $("#summary-button").click(function() {
      $('html, body').animate({
          scrollTop: $(".summary").offset().top
      }, 1000);
  });
  $("#experience-button").click(function() {
      $('html, body').animate({
          scrollTop: $(".experience").offset().top
      }, 1200);
  });
  $("#involvements-button").click(function() {
      $('html, body').animate({
          scrollTop: $(".involvements").offset().top
      }, 1400);
  });
  $("#contact-button").click(function() {
      $('html, body').animate({
          scrollTop: $(".contact").offset().top
      }, 1600);
  });

});
