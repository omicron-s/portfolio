// portfolio__pagination ul li active
$(".portfolio__pagination a").click(function(e) {
  e.preventDefault();
  $(".portfolio__pagination a").removeClass("active");
  $(this).addClass("active");
});
// --portfolio__pagination ul li active
