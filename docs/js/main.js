// page-nav
$("#page-nav").onePageNav({
  currentClass: "current",
  changeHash: false,
  scrollThreshold: 0.4
});

//Smooth scrolling
$(".header a").on("click", function() {
  var el = $(this);
  var dest = el.attr("href"); // получаем направление
  if (dest !== undefined && dest !== "") {
    // проверяем существование
    $("html").animate(
      {
        scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
      },
      750 // скорость прокрутки
    );
  }
  return false;
});

//Sticky navbar
$(window).scroll(function() {
  if ($(window).scrollTop() >= 20 && $(window).width() < 768) {
    $(".navbar").addClass("navbar--fixed");
  }
  if (
    $(window).scrollTop() >= 30 &&
    $(window).width() >= 768 &&
    $(window).width() < 1200
  ) {
    $(".navbar").addClass("navbar--fixed");
  }
  if ($(window).scrollTop() >= 60 && $(window).width() >= 1200) {
    $(".navbar").addClass("navbar--fixed");
  }
  //remove
  if ($(window).scrollTop() <= 20 && $(window).width() < 768) {
    $(".navbar").removeClass("navbar--fixed");
  }
  if (
    $(window).scrollTop() <= 30 &&
    $(window).width() >= 768 &&
    $(window).width() < 1200
  ) {
    $(".navbar").removeClass("navbar--fixed");
  }
  if ($(window).scrollTop() <= 60 && $(window).width() >= 1200) {
    $(".navbar").removeClass("navbar--fixed");
  }
});

// mobile-menu
$(function() {
  $(".navbar__btn").click(function() {
    $(this).toggleClass("act");
    if ($(this).hasClass("act")) {
      $(".navbar__menu").addClass("act");
      $(".navbar").css("height", "150vh");
      $("body").css("overflow", "hidden");

      if ($(window).width() >= 768) {
        $(".navbar").css("width", "320px");
      }
    } else {
      $(".navbar__menu").removeClass("act");
      $(".navbar").css("height", "63px");
      $("body").css("overflow", "unset");
      if ($(window).width() >= 768) {
        $(".navbar").css("width", "100%");
      }
    }
  });
});

// autoclose when resizing
$(window).resize(function() {
  $(".navbar__btn").removeClass("act");
  $(".navbar__menu").removeClass("act");
  $(".navbar").css("height", "63px");
  $("body").css("overflow", "unset");
  $(".navbar").css("width", "100%");
});

// portfolio__pagination ul li active
$(".portfolio__pagination a").click(function(e) {
  e.preventDefault();
  $(".portfolio__pagination a").removeClass("active");
  $(this).addClass("active");
});

// portfolio__pagination sort
$(function() {
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
    $(".portfolio-card--another").remove();
  });

  $("#select-wordpress").click(function() {
    $(".portfolio-card--bootstrap").remove();
    wordpress.appendTo(".portfolio-row");
    $(".portfolio-card--frontend").remove();
    $(".portfolio-card--another").remove();
  });

  $("#select-frontend").click(function() {
    $(".portfolio-card--bootstrap").remove();
    $(".portfolio-card--wordpress").remove();
    frontend.appendTo(".portfolio-row");
    $(".portfolio-card--another").remove();
  });
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
    $("body,html").animate({ scrollTop: scrolling }, 50);
  }
});

//planning animate
$(document).ready(function() {
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
});
//planning scroll
$(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop() + $(window).height() / 1.8;
    var pc1Offset = $("#pc1").offset().top + $("#pc1").height() / 2;
    var pc2Offset = $("#pc2").offset().top + $("#pc2").height() / 2;
    var pc3Offset = $("#pc3").offset().top + $("#pc3").height() / 2;
    var pc4Offset = $("#pc4").offset().top + $("#pc4").height() / 2;
    var pc5Offset = $("#pc5").offset().top + $("#pc5").height() / 2;

    if (scroll > pc1Offset && scroll < pc2Offset) {
      $("#pc1").addClass("planning-act");
    } else {
      $("#pc1").removeClass("planning-act");
    }
    if (scroll > pc2Offset && scroll < pc3Offset) {
      $("#pc2").addClass("planning-act");
      $("#pc2").addClass("hover");
    } else {
      $("#pc2").removeClass("planning-act");
      $("#pc2").removeClass("hover");
    }
    if (scroll > pc3Offset && scroll < pc4Offset) {
      $("#pc3").addClass("planning-act");
    } else {
      $("#pc3").removeClass("planning-act");
    }
    if (scroll > pc4Offset && scroll < pc5Offset) {
      $("#pc4").addClass("planning-act");
      $("#pc4").addClass("hover");
    } else {
      $("#pc4").removeClass("planning-act");
      $("#pc4").removeClass("hover");
    }
    if (scroll > pc5Offset && scroll < pc5Offset + 200) {
      $("#pc5").addClass("planning-act");
    } else {
      $("#pc5").removeClass("planning-act");
    }
  });
});

$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 1,
    dots: false,
    nav: false,
    center: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    startPosition: "URLHash",
    responsive: {
      768: {
        items: 3
      },
      1200: {
        items: 4
      }
    }
  });

  $(".projects-btn__right").click(function() {
    $(".owl-carousel").trigger("next.owl.carousel");
    $(".owl-carousel")
      .trigger("stop.owl.autoplay")
      .delay(3000)
      .queue(function() {
        $(this)
          .trigger("play.owl.autoplay")
          .dequeue();
      });
  });

  $(".projects-btn__left").click(function() {
    $(".owl-carousel").trigger("prev.owl.carousel");
    $(".owl-carousel")
      .trigger("stop.owl.autoplay")
      .delay(3000)
      .queue(function() {
        $(this)
          .trigger("play.owl.autoplay")
          .dequeue();
      });
  });
});
