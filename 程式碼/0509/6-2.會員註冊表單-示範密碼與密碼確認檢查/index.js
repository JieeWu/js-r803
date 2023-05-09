const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// button
const register = document.getElementById('register');

register.addEventListener('click', function () {
    if (password.value !== password2.value) {
        alert('兩次輸入的密碼不同！')
    }
})