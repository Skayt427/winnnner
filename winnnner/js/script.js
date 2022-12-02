AOS.init();

document.addEventListener("DOMContentLoaded", function () {
  // Меню
  let menu = document.querySelector('.js-menu');
  let burger = document.querySelector('.js-burger');
  let burgerMobile = document.querySelector('.js-burger-mobile');
  let menuItem = document.querySelectorAll('.js-menu-item');
  let menuOverlay = document.querySelector('.menu__overlay');
  let menuPersonal = document.querySelector('.personal');

  // Клик по бургеру
  burger.addEventListener('click', function () {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active');
    } else {
      menu.classList.remove('active');
      if (menuPersonal.classList.contains('active')) {
        menuPersonal.classList.remove('active');
      };

      // Закрытие пункта меню, начало
      let activeMenuBtn = document.querySelector('.js-menu-item.active');
      let activeContent = document.querySelector('.js-menu-content.active');
      if (activeMenuBtn) {
        activeMenuBtn.classList.remove('active');
      };
      if (activeContent) {
        activeContent.classList.remove('active');
      };
      // Закрытие пункта меню, конец
    };
  });

  // Клик по пунктам меню
  menuItem.forEach(item => {
    item.addEventListener('click', function () {
      if (!menu.classList.contains('active')) {
        menu.classList.add('active');
      };
      if (!menuPersonal.classList.contains('active')) {
        menuPersonal.classList.add('active');
      };

      // Открытие пунктов в меню, начало
      let id = this.getAttribute('data-menu');
      let content = document.querySelector('.js-menu-content[data-menu="' + id + '"]');
      let activeMenuBtn = document.querySelector('.js-menu-item.active');
      let activeContent = document.querySelector('.js-menu-content.active');

      if (activeMenuBtn) {
        activeMenuBtn.classList.remove('active');
      };
      this.classList.add('active');
      if (activeContent) {
        activeContent.classList.remove('active');
      };
      content.classList.add('active');
      // Открытие пунктов в меню, конец
    });
  });

  // Клик вне меню
  menuOverlay.addEventListener('click', (e) => {
    menu.classList.remove('active');
    menuPersonal.classList.remove('active');

    // Закрытие пункта меню, начало
    let activeMenuBtn = document.querySelector('.js-menu-item.active');
    let activeContent = document.querySelector('.js-menu-content.active');

    if (activeMenuBtn) {
      activeMenuBtn.classList.remove('active');
    };
    if (activeContent) {
      activeContent.classList.remove('active');
    };
    // Закрытие пункта меню, конец
  });

  // Клик по бургеру мобильной
  burgerMobile.addEventListener('click', function () {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active');
    };
  });

  // Ячейка Сейчас в игре, перенос на мобильных
  let boxPlayers = document.querySelector('.js-box-players');
  let mainInner = document.querySelector('.js-main-inner');
  let gameArea = document.querySelector('.js-game-area');

  function adaptiveBoxPlayers() {
    if (window.innerWidth <= 1024) {
      gameArea.before(boxPlayers);
    } else {
      mainInner.prepend(boxPlayers);
    };
  };
  adaptiveBoxPlayers();
  window.addEventListener('resize', adaptiveBoxPlayers);

  // Скрытие/открытие рейтинга
  let ratingTable = document.querySelector('.js-rating');
  let ratingTableBtn = document.querySelector('.js-rating-btn');

  ratingTableBtn.addEventListener('click', function () {
    ratingTable.classList.toggle('active');
  });
});