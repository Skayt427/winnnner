document.addEventListener("DOMContentLoaded", function () {
  AOS.init();

  // Меню
  let menu = document.querySelector('.js-menu');
  let burger = document.querySelector('.js-burger');
  let burgerMobile = document.querySelector('.js-burger-mobile');
  let menuItem = document.querySelectorAll('.js-menu-item');
  let menuOverlay = document.querySelector('.menu__overlay');
  let menuPersonal = document.querySelector('.personal');
  let personalBack = document.querySelectorAll('.js-back');

  // Клик по бургеру
  burger.addEventListener('click', function () {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active');
    } else {
      menu.classList.remove('active');
      if (menuPersonal.classList.contains('active')) {
        menuPersonal.classList.remove('active');
      };
      if (menu.classList.contains('active-for-mobile')) {
        menu.classList.remove('active-for-mobile');
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
      menu.classList.add('active-for-mobile');

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

  // Клик по кнопке назад в пугктах меню
  personalBack.forEach(backBtn => {
    backBtn.addEventListener('click', function () {
      let activeMenuBtn = document.querySelector('.js-menu-item.active');
      let activeContent = document.querySelector('.js-menu-content.active');

      activeMenuBtn.classList.remove('active');
      activeContent.classList.remove('active');
      menu.classList.remove('active-for-mobile');
      menuPersonal.classList.remove('active');
    });
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

  // Табы
  let tabsBtns = document.querySelectorAll('.js-tabs-btn');

  tabsBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      let id = this.getAttribute('data-tab');
      let tabWrapper = this.closest('.js-tabs');
      let content = tabWrapper.querySelector('.js-tabs-item[data-tab="' + id + '"]');

      tabWrapper.querySelector('.js-tabs-btn.active').classList.remove('active');
      this.classList.add('active');

      tabWrapper.querySelector('.js-tabs-item.active').classList.remove('active');
      content.classList.add('active');
    });
  });
});