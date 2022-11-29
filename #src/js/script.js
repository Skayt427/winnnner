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
});