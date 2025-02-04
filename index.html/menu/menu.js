document.addEventListener("DOMContentLoaded", function() {
    // Отримуємо елементи
    const hamburger = document.getElementById("vectorIcon");
    const menuOverlay = document.getElementById("menuContainer");
    // Знаходимо внутрішній блок меню
    const menu = menuOverlay.querySelector(".menu");
  
    if (!hamburger || !menuOverlay || !menu) {
      console.error("❌ Помилка: Один з елементів не знайдено!");
      return;
    }
  
    // Натискання на бургер-іконку – відкриваємо/закриваємо меню
    hamburger.addEventListener("click", function(e) {
      e.stopPropagation(); // Запобігаємо спливанню події
      menuOverlay.classList.toggle("active");
    });
  
    // Закриваємо меню при кліку поза внутрішнім блоком меню
    menuOverlay.addEventListener("click", function(e) {
      if (!menu.contains(e.target)) {
        menuOverlay.classList.remove("active");
      }
    });
  });
  