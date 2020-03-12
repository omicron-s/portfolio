var commentSlider = $('#carousel1');

$(document).ready(function() {
	commentSlider.owlCarousel({
		items: 1,
		dots: false,
		nav: false
	});
});

$('#sliderRight').click(function() {
	commentSlider.trigger('next.owl.carousel');
});

$('#sliderLeft').click(function() {
	commentSlider.trigger('prev.owl.carousel');
});
