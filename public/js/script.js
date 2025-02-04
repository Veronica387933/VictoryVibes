document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("vectorIcon"); // Використовуємо твоє ID
    const menu = document.getElementById("menu");

    hamburger.addEventListener("click", function() {
        menu.classList.toggle("active"); // Додає або прибирає клас .active
    });

    // Закриваємо меню при кліку поза ним
    document.addEventListener("click", function(event) {
        if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
            menu.classList.remove("active");
        }
    });
});