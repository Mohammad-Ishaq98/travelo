(function ($) {
"use strict";

// meanmenu
$('#mobile-menu').meanmenu({
	meanMenuContainer: '.mobile-menu',
	meanScreenWidth: "991"
});
//sidebar
$(".menu_toggle_btn").on("click", function () {
	$(".sidebar__area").addClass("sidebar__open");
});
$(".sidebar__close-btn").on("click", function () {
	$(".sidebar__area").removeClass("sidebar__open");
});
// data background
$("[data-background]").each(function(){
	$(this).css("background-image", "url(" + $(this).attr("data-background") + ")");
});
// One Page Nav
// var top_offset = $('.header-area').height() - 10;
// $('.main-menu nav ul').onePageNav({
// 	currentClass: 'active',
// 	scrollOffset: top_offset,
// });

//date
$('#chech_in').datetimepicker({
  format:'d.m.Y H:i',
  lang:'en'
});
$('#chech_out').datetimepicker({
  format:'d.m.Y H:i',
  lang:'en'
});
	
//customer slider
$('.customer_slider').slick({
	infinity:true,
	slidesToShow:2,
	slidesToScroll:1,
	arrows:false,
	dots:false,
	responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});



// mainSlider
// function mainSlider() {
// 	var BasicSlider = $('.slider-active');
// 	BasicSlider.on('init', function (e, slick) {
// 		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
// 		doAnimations($firstAnimatingElements);
// 	});
// 	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
// 		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
// 		doAnimations($animatingElements);
// 	});
// 	BasicSlider.slick({
// 		autoplay: false,
// 		autoplaySpeed: 10000,
// 		dots: false,
// 		fade: true,
// 		arrows: false,
// 		responsive: [
// 			{ breakpoint: 767, settings: { dots: false, arrows: false } }
// 		]
// 	});

// 	function doAnimations(elements) {
// 		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
// 		elements.each(function () {
// 			var $this = $(this);
// 			var $animationDelay = $this.data('delay');
// 			var $animationType = 'animated ' + $this.data('animation');
// 			$this.css({
// 				'animation-delay': $animationDelay,
// 				'-webkit-animation-delay': $animationDelay
// 			});
// 			$this.addClass($animationType).one(animationEndEvents, function () {
// 				$this.removeClass($animationType);
// 			});
// 		});
// 	}
// }
// mainSlider();


// isotop
// isotop
$('.grid').imagesLoaded( function() {
	
	$('.filter-button-group').on( 'click', 'button', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
});


	var $grid = $('.grid').isotope({
			itemSelector: '.grid-item',
			percentPosition: true,
			masonry: {
					// use outer width of grid-sizer for columnWidth
					columnWidth: '.grid-item',
			}
	})
});



//for menu active class
$('.filter-button-group button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});




// scrollToTop
// $.scrollUp({
// 	scrollName: 'scrollUp', // Element ID
// 	topDistance: '300', // Distance from top before showing element (px)
// 	topSpeed: 300, // Speed back to top (ms)
// 	animation: 'fade', // Fade, slide, none
// 	animationInSpeed: 200, // Animation in speed (ms)
// 	animationOutSpeed: 200, // Animation out speed (ms)
// 	scrollText: '<i class="icofont icofont-long-arrow-up"></i>', // Text for element
// 	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
// });

// WOW active
new WOW().init();


})(jQuery);