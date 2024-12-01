// Registration form validation and confirmation
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (username && email && password && password === confirmPassword) {
        document.getElementById('confirmationMessage').classList.remove('hidden');
        document.getElementById('registerForm').reset(); // Reset form
    } else {
        alert("Пожалуйста, заполните все поля корректно.");
    }
});

// Login form validation
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;

    if (login && password) {
        window.location.href = "db.html"; // Redirect to personal dashboard
    } else {
        alert("Введите правильные данные для входа.");
    }
});
