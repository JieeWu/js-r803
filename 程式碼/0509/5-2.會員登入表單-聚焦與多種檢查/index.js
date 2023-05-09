// 獲取dom元素物件
// input
const username = document.getElementById('username');
const password = document.getElementById('password');
// button
const login = document.getElementById('login');
// span
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');


// 檢查是否有獲得元素物件
console.log(username, password, login, usernameError, passwordError);

// 先協助聚焦在第一個文字輸入欄位(帳號)上
username.focus();

// 按下登入按鈕，檢查帳號密碼有沒有填
login.addEventListener('click', function () {
    // 先回復沒有錯誤的情況
    usernameError.innerText = '';
    passwordError.innerText = '';

    // 帳號"沒有填(falsy)"時的判斷
    if (!username.value) {
        usernameError.innerText += ' 帳號沒填寫';
    }

    // 密碼"沒有填(falsy)"時的判斷
    if (!password.value) {
        passwordError.innerText += ' 密碼沒填寫';
    }

    if (password.value.length < 6) {
        passwordError.innerText += ' 密碼至少需要6個字元';
    }

    // 先判斷username是否有填，沒填 -> focus username
    // 再判斷password是否有填，沒填 -> focus password
    // 同時間username與password都沒填 -> focus username
    if (usernameError.innerText) {
        username.focus();
        // 此處加上return，是為了終止函式，不會再往下面的password程式碼繼續判斷
        return; 
    }

    if (passwordError.innerText) {
        password.focus();
    }

})





