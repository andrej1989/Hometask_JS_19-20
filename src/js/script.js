;
$(function(){
	$('.accordion__head').on('click', accordion);
	$('.slider__link').on('click', slider);

	function accordion(){
		if($(this).hasClass('accordion__head-active')){
			$(this).removeClass('accordion__head-active');
			$(this).siblings('.accordion__text').slideUp(200);
		} else {
			$('.accordion__head').removeClass('accordion__head-active');
			$('.accordion__text').slideUp(200);
			$(this).siblings('.accordion__text').slideDown(200);
			$(this).addClass('accordion__head-active');
		}
	}

	function slider (e) {
		var slide = $(this); 
		var href = slide.attr('href');
		console.log('fsdF');

		$('.slider__link').removeClass('slider__link-active');

		$('.slider__item').slideUp(400);
		$(href).slideDown(400);

		slide.addClass('slider__link-active');

		e.preventDefault();
	}
		
});