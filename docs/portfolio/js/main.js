// page-nav
$("#page-nav").onePageNav({
  currentClass: "current",
  changeHash: true,
  scrollThreshold: 0.4
});
// portfolio__pagination ul li active
$(".portfolio__pagination a").click(function(e) {
  e.preventDefault();
  $(".portfolio__pagination a").removeClass("active");
  $(this).addClass("active");
});

// portfolio__pagination sort
var selectAll = $(".portfolio-card");
var bootstrap = $(".portfolio-card--bootstrap");
var wordpress = $(".portfolio-card--wordpress");
var frontend = $(".portfolio-card--frontend");

$("#select-all").click(function() {
  $(".portfolio-card--bootstrap").remove();
  $(".portfolio-card--wordpress").remove();
  $(".portfolio-card--frontend").remove();
  selectAll.appendTo(".portfolio-row");
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

// portfolio__card show/hide  *mobile*
$(".portfolio__link span").click(function(e) {
  e.preventDefault();
  $(this).toggleClass("show");
  if ($(this).hasClass("show")) {
    $(".portfolio-card:not(:nth-child(-n + 4))").slideDown(300);
  } else {
    $(".portfolio-card:not(:nth-child(-n + 4))").slideUp(300);
    var scrolling = $(".portfolio-card:nth-child(4)").offset().top;
    $("body,html").animate({ scrollTop: scrolling }, 350);
  }
});

//planning animate
var typed = new Typed("#pc4-anim i", {
  strings: [
    "Привет...",
    "Здесь этап создания блоков и не только...",
    "Медленно, но верно, я проделаю всё..."
  ],
  typeSpeed: 40,
  loop: true,
  loopCount: Infinity,
  showCursor: false
});
