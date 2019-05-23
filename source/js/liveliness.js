'use strict';

	svg4everybody(); // eslint-disable-line

	(function() {
	  // Меню
	  const toggleButton = document.getElementById('toggle-button');
	  const mainNav = document.querySelector('.main-nav');
	  const siteNavigation = document.querySelector('.site-list');
	  const userNavigation = document.querySelector('.user-list');

	  if (mainNav && mainNav.classList.contains('main-nav--no-js')) {
	    mainNav.classList.remove('main-nav--no-js');

	    if (siteNavigation && userNavigation) {
	      siteNavigation.classList.add('site-list --closed');
	      userNavigation.classList.add('user-list --closed');
	    }
	  }

	  if (toggleButton) {
	    toggleButton.addEventListener('click', function(event) {
	      event.preventDefault();
	      siteNavigation.classList.toggle('site-list --closed');
	      userNavigation.classList.toggle('user-list --closed');
	      this.classList.toggle('main-nav__toggle--closed');
	    });
    }
  })()
