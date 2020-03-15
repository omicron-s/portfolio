// portfolio__pagination ul li active
// $(".portfolio__pagination a").click(function(e) {
//   e.preventDefault();
//   $(".portfolio__pagination a").removeClass("active");
//   $(this).addClass("active");
// });

$(".portfolio__pagination label").keyup(function(event) {
  if (event.keyCode == 13) {
    $(".portfolio__pagination label:focus").click();
  }
});

// portfolio__pagination ul li active
var selectAll;
var bootstrap;
var wordpress;
var frontend;

$("#select-all").click(function() {
  bootstrap.appendTo(".portfolio-row");
  wordpress.appendTo(".portfolio-row");
  frontend.appendTo(".portfolio-row");
  bootstrap = null;
  wordpress = null;
  frontend = null;
});

$("#select-bootstrap").click(function() {
  if (bootstrap) {
    bootstrap.appendTo(".portfolio-row");
    bootstrap = null;
  }
  bootstrap = $(".portfolio-card--bootstrap");
  if (wordpress == null) {
    wordpress = $(".portfolio-card--wordpress").detach();
  }
  if (frontend == null) {
    frontend = $(".portfolio-card--frontend").detach();
  }
});

$("#select-wordpress").click(function() {
  if (wordpress) {
    wordpress.appendTo(".portfolio-row");
    wordpress = null;
  }
  if (bootstrap == null) {
    bootstrap = $(".portfolio-card--bootstrap").detach();
  }
  wordpress = $(".portfolio-card--wordpress");
  if (frontend == null) {
    frontend = $(".portfolio-card--frontend").detach();
  }
});

$("#select-frontend").click(function() {
  if (frontend) {
    frontend.appendTo(".portfolio-row");
    frontend = null;
  }
  if (bootstrap == null) {
    bootstrap = $(".portfolio-card--bootstrap").detach();
  }
  if (wordpress == null) {
    wordpress = $(".portfolio-card--wordpress").detach();
  }
  frontend = $(".portfolio-card--frontend");
});

// $("#select-bootstrap").click(function() {
//   if (bootstrap) {
//     bootstrap.appendTo(".portfolio-row");
//     bootstrap = null;
//   } else {
//     bootstrap = $(".portfolio-card--bootstrap").detach();
//   }
// });

// $("#select-all").click(function() {

//   }
// });
// --portfolio__pagination ul li active
