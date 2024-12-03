// Пример простого JavaScript кода
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Страница загружена!');

    // Обработчик для формы регистрации
    const form = document.getElementById('registrationForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Предотвращаем отправку формы
            alert('Спасибо за регистрацию! Мы свяжемся с вами.');
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('.full-screen');
    
    sections.forEach((section, index) => {
        section.style.transition = "opacity 0.5s ease-in-out";
        section.style.opacity = "0";
        
        setTimeout(() => {
            section.style.opacity = "1"; // Fade-in effect
        }, 500 * (index + 1)); // Adding delay between sections
    });
});
