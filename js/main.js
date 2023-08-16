(function($) {

	"use strict";


	/*----------------------------------------------------- */
	/* Alert Boxes
	------------------------------------------------------- */
	$('.alert-box').on('click', '.close', function() {
		$(this).parent().fadeOut(500);
	});	


	/*----------------------------------------------------*/
	/* Modal Popup
	------------------------------------------------------*/
	$('.item-wrap a').magnificPopup({

		type:'inline',
		fixedContentPos: false,
		removalDelay: 300,
		showCloseBtn: false,
		mainClass: 'mfp-fade'

	});

	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});


	/*-----------------------------------------------------*/
	/* Navigation Menu
	------------------------------------------------------ */  
	var toggleButton = $('.menu-toggle'),
		nav = $('.main-navigation');

	// toggle button
	toggleButton.on('click', function(e) {

		e.preventDefault();
		toggleButton.toggleClass('is-clicked');
		nav.slideToggle();

	});

	// nav items
	nav.find('li a').on("click", function() {   

		// update the toggle button 		
		toggleButton.toggleClass('is-clicked'); 
		// fadeout the navigation panel
		nav.fadeOut();   		

	});



	/*---------------------------------------------------- */
	/* H5 Effect Hello, World !
	------------------------------------------------------ */
	const span = (text, index) => {
		const node = document.createElement('span')
		node.textContent = text
		node.style.setProperty('--index', index)
		return node
	}

	const byLetter = text =>
		[...text].map(span)

	const {matches:motionOK} = window.matchMedia(
		'(prefers-reduced-motion: no-preference)'
	)

	if (motionOK) {
		const splitTargets = document.querySelectorAll('[split-by]')
		splitTargets.forEach(node => {
			let nodes = byLetter(node.innerText)
			if (nodes)
				node.firstChild.replaceWith(...nodes)
		})
	}


	/*---------------------------------------------------- */
	/* Smooth Scrolling
	------------------------------------------------------ */
	$('.smoothscroll').on('click', function (e) {	 	
		e.preventDefault();
		var target = this.hash,
			$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 800, 'swing', function () {
			window.location.hash = target;
		});
	});  


	/*----------------------------------------------------- */
	/* Back to top
	------------------------------------------------------- */ 
	var pxShow = 300; // height on which the button will show
	var fadeInTime = 400; // how slow/fast you want the button to show
	var fadeOutTime = 400; // how slow/fast you want the button to hide
	var scrollSpeed = 300; // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'

	// Show or hide the sticky footer button
	jQuery(window).scroll(function() {
		if (!( $("#header-search").hasClass('is-visible'))) {
			if (jQuery(window).scrollTop() >= pxShow) {
				jQuery("#go-top").fadeIn(fadeInTime);
			} else {
				jQuery("#go-top").fadeOut(fadeOutTime);
			}
		}		
	});		

})(jQuery);
