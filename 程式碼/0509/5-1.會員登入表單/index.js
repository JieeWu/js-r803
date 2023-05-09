// 獲取dom元素物件
// input
const username = document.getElementById('username');
const password = document.getElementById('password');
// button
const login = document.getElementById('login');


// 檢查是否有獲得元素物件
console.log(username, password, login);

// 按下登入按鈕，檢查帳號密碼有沒有填
login.addEventListener('click', function () {
    // if (username.value !== '')
    // if (username.value.length > 0)

    // 帳號"有填(truthy)"時的判斷
    if (username.value) {
    } else {
        alert('帳號沒填寫');
    }

    // 帳號"沒有填(falsy)"時的判斷
    if (!username.value) {
        alert('帳號沒填寫');
    }
})



    // 帳號沒填的情況
    // if (username.value === '') {
    // if (username.value.length === 0) {
    // if (username.value) {