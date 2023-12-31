const iconOpen = document.getElementById('iconOpen')
const iconOpenShop = document.getElementById('iconOpenShop')
const iconClose = document.getElementById('iconClose')
const menuIcons = document.getElementById('menuIcons')
const meinMenu = document.getElementById('meinMenu')

menuIcons.addEventListener('click', ()=> {
    iconOpenShop.classList.toggle('hide')
    iconOpen.classList.toggle('hide')
    iconClose.classList.toggle('hide')
    meinMenu.classList.toggle('hide')
})

// ВВІД ТЕЛЕФОНА

const phoneInput = document.getElementById('phone');

phoneInput.addEventListener('input', ()=> {
    // Перевіряємо, чи не починається значення вводу з "+380"
    if (!phoneInput.value.startsWith('+380')) {
        // Якщо не починається, то додаємо "+380" на початок значення
        phoneInput.value = '+380' + phoneInput.value;
    }
    phoneInput.value = phoneInput.value.replace(/^(\+380)(\d{2})(\d{3})(\d{2})(\d{2})$/, '$1 $2 $3 $4 $5');
});

phoneInput.addEventListener('keypress', (event) => {
    // Отримуємо charCode введеного символу
    const charCode = event.charCode;
    // Перевіряємо, чи символ не є цифрою (від 48 до 57 за ASCII-кодом)
    if (charCode < 48 || charCode > 57) {
        // Якщо символ не є цифрою, блокуємо його введення
        event.preventDefault();
    }
});

// ГАЛЕРЕЯ

const slides = document.querySelectorAll(".slide");
const slideNav = document.querySelectorAll(".slide-nav p");
let currentIndex = 0;

// Функція, яка відображає відповідний слайд
function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = "block"; // Показуємо поточний слайд
        } else {
            slide.style.display = "none"; // Ховаємо інші слайди
        }
    });
}


// Функція, яка активує відповідну навігаційну точку
function activateNavPoint(index) {
    // Перебираємо всі навігаційні точки
    slideNav.forEach((point, i) => {
        if (i === index) {
            point.classList.add("active"); // Додаємо клас "active" для активної точки
        } else {
            point.classList.remove("active"); // Видаляємо клас "active" для інших точок
        }
    });
}

// Додаємо обробники подій для навігаційних точок
slideNav.forEach((point, i) => {
    point.addEventListener("click", () => {
        currentIndex = i;
        showSlide(currentIndex);
        activateNavPoint(currentIndex);
    });
});

// Функція для перехіду до наступного слайду
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
    activateNavPoint(currentIndex);
}

// Функція для перехіду до попереднього слайду
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
    activateNavPoint(currentIndex);
}

// Додаємо обробники подій для кнопок прокрутки
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

leftArrow.addEventListener("click", prevSlide);
rightArrow.addEventListener("click", nextSlide);

// Показуємо перший слайд при завантаженні сторінки
showSlide(currentIndex);
activateNavPoint(currentIndex);

//ЗАКРІПКА МЕНЮ

const menu = document.getElementById("window");
const offset = menu.offsetTop;
let lastScrollTop = 0; // Змінна для зберігання попереднього значення scrollTop
function fixMenu() {
const currentScrollTop = window.pageYOffset;
// Перевіряємо, чи перевищує поточний scrollTop відступ меню
if (currentScrollTop >= offset) {
menu.classList.add("fixed-menu");
document.body.style.paddingTop = menu.offsetHeight + "px";
// Змінюємо колір меню
menu.style.backgroundColor = "#e2e4e8";
} else {
menu.classList.remove("fixed-menu");
document.body.style.paddingTop = 0;
// Повертаємо оригінальний колір меню
menu.style.backgroundColor = ""; // Оце очищає стиль
}
// Перевірка напрямку скролу
if (currentScrollTop < lastScrollTop) {
// Якщо скролл вгору, то знову знімаємо клас "fixed-menu" та відступ для body
menu.classList.remove("fixed-menu");
document.body.style.paddingTop = 0;
// Повертаємо оригінальний колір меню
menu.style.backgroundColor = ""; // Оце очищає стиль
}
lastScrollTop = currentScrollTop; // Зберігаємо поточне значення scrollTop
}
// Додаємо обробник події scroll для виклику функції fixMenu при скролі
window.addEventListener("scroll", fixMenu);

// Обробник події DOMContentLoaded, який може виконатися після завантаження DOM
document.addEventListener("DOMContentLoaded", () => {
const menuHeight = menu.offsetHeight; // Отримуємо висоту меню
});
