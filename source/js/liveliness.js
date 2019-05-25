'use strict';

(function() {
  // Меню
  const toggleButton = document.getElementById('toggle-button');
  const mainNav = document.querySelector('.main-nav');
  const siteNavigation = document.querySelector('.site-list');
  const userNavigation = document.querySelector('.user-list');

  if (mainNav && mainNav.classList.contains('main-nav--no-js')) {
    mainNav.classList.remove('main-nav--no-js');

    if (siteNavigation && userNavigation) {
      siteNavigation.classList.add('site-list--closed');
      userNavigation.classList.add('user-list--closed');
    }
  }

  if (toggleButton) {
    toggleButton.addEventListener('click', function(event) {
      event.preventDefault();
      siteNavigation.classList.toggle('site-list--closed');
      userNavigation.classList.toggle('user-list--closed');
      this.classList.toggle('main-nav__toggle--closed');
    });
  }
      // Модальное окно заказа товара
  const overlayModal = document.querySelector('.modal-overlay');
  const catalogBlock = document.querySelector('.catalog');
  const orderButton = document.querySelector('.product-week__button');

  if (overlayModal) {
    if (catalogBlock) {
      catalogBlock.addEventListener('click', openOrderForm);
    }

    if (orderButton) {
      orderButton.addEventListener('click', openOrderForm);
    }

    overlayModal.addEventListener('click', closeOrderForm);
    window.addEventListener('keydown', closeOrderForm);
  }

  function openOrderForm(event) {
    let element = event.target;

    if (
      element.classList.contains('card-product__button') ||
      element.classList.contains('product-week__button')
    ) {
      event.preventDefault();
      overlayModal.classList.add('modal-overlay--opened');
    }
  }

  function closeOrderForm(event) {
    let element = event.target;

    if (element.classList.contains('modal-overlay') || event.keyCode === 27) {
      overlayModal.classList.remove('modal-overlay--opened');
    }
  }
})();
