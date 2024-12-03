
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Проверяем, что ссылка ведет на якорь внутри текущей страницы
        if (href.startsWith('#')) {
            e.preventDefault();

            const target = document.querySelector(href);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 100, // Для корректного отображения
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Анимация появления элементов при прокрутке
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    
    const options = {
        threshold: 0.5 // Элемент должен быть видим на 50% для активации
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
