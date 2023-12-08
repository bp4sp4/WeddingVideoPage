$(document).ready(function () {
  // Check the scroll position on page load
  if ($(this).scrollTop() > 300) {
    $(".btn_gotop").show();
  }

  // Check the scroll position when the user scrolls
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".btn_gotop").fadeIn(); // Use fadeIn() for a smooth appearance
    } else {
      $(".btn_gotop").fadeOut(); // Use fadeOut() for a smooth disappearance
    }
  });

  // Scroll to top when the button is clicked
  $(".btn_gotop").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });
});
