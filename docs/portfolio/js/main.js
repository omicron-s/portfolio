
// portfolio__pagination ul li active
$(".portfolio__pagination a").click(function(e) {
  e.preventDefault();
  $(".portfolio__pagination a").removeClass("active");
  $(this).addClass("active");
});

// $(".portfolio__pagination label").keyup(function(event) {
//   if (event.keyCode == 13) {
//     $(".portfolio__pagination label:focus").click();
//   }
// });

var bootstrap = $(".portfolio-card--bootstrap");
var wordpress = $(".portfolio-card--wordpress");
var frontend = $(".portfolio-card--frontend");

$("#select-all").click(function() {
  bootstrap.appendTo(".portfolio-row");
  wordpress.appendTo(".portfolio-row");
  frontend.appendTo(".portfolio-row");
});

$("#select-bootstrap").click(function() {
  bootstrap.appendTo(".portfolio-row");
  $(".portfolio-card--wordpress").remove();
  $(".portfolio-card--frontend").remove();
});

$("#select-wordpress").click(function() {
  $(".portfolio-card--bootstrap").remove();
  wordpress.appendTo(".portfolio-row");
  $(".portfolio-card--frontend").remove();
});

$("#select-frontend").click(function() {
  $(".portfolio-card--bootstrap").remove();
  $(".portfolio-card--wordpress").remove();
  frontend.appendTo(".portfolio-row");
});