document.addEventListener("DOMContentLoaded", function () {
  // Меню
  let menu = document.querySelector('.js-menu');
  let burger = document.querySelector('.js-burger');
  let menuItem = document.querySelectorAll('.js-menu-item');

  // Открытие меню
  burger.addEventListener('click', function () {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active');
    } else {
      menu.classList.remove('active');
    };
  });

  menuItem.forEach(item => {
    item.addEventListener('click', function () {
      if (!menu.classList.contains('active')) {
        menu.classList.add('active');
      };
    });
  });

  // Клик вне элементов
  document.addEventListener('click', (e) => {
    let menuAllItems = e.composedPath().includes(menu);

    if (!menuAllItems) {
      if (menu.classList.contains('active')) {
        menu.classList.remove('active');
      };
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