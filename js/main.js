(function($) {

	"use strict";

	/*----------------------------------------------------*/
	/* Modal Popup
	------------------------------------------------------*/
	$('.item-wrap a').magnificPopup({

		type:'inline', // Type of content to display in the popup (in this case, inline content)
		fixedContentPos: false, // Prevent content inside the popup from overflowing
		removalDelay: 300, // Delay before removing the popup after closing
		showCloseBtn: false,  // Show or hide the close button
		mainClass: 'mfp-fade'  // CSS class for the fade effect

	});

	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close(); // Close the popup
	});


	/*-----------------------------------------------------*/
	/* Navigation Menu
	------------------------------------------------------ */  
	var toggleButton = $('.menu-toggle'),
		nav = $('.main-navigation');

	// Toggle button
	toggleButton.on('click', function(e) {

		e.preventDefault();
		toggleButton.toggleClass('is-clicked');
		nav.slideToggle(); // Toggle the navigation menu up or down

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
	// Create a span element for each letter in the text
	const span = (text, index) => {
		const node = document.createElement('span')
		node.textContent = text
		node.style.setProperty('--index', index)
		return node
	}

	// Apply the "byLetter" function to split text into individual letters
	const byLetter = text =>
		[...text].map(span)

	// Check if motion is allowed (reduce motion preference)
	const {matches:motionOK} = window.matchMedia(
		'(prefers-reduced-motion: no-preference)'
	)

	// Apply the letter-by-letter effect to specified elements
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
	// Smooth scroll behavior for anchor links with "smoothscroll" class
	$('.smoothscroll').on('click', function (e) {	 	
		e.preventDefault();
		var target = this.hash,
			$target = $(target);
		// Animate scroll to the target with a duration of 800 milliseconds
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
