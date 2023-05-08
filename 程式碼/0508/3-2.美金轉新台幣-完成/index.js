// 先獲取所有所需DOM元素物件
// input
const money = document.getElementById('money');
// button
const u2t = document.getElementById('u2t');
const t2u = document.getElementById('t2u');
// span
const result = document.getElementById('result');

// 檢查是否有獲取到元素物件
//console.log(money, u2t, t2u, result);

// 按下 美金->新台幣 按鈕
// u2t
// (1 USD 美金 = 30.44 TWD 新台幣)
u2t.addEventListener('click', function () {
    // 注意要轉為數字再運算，不要使用內部自動轉換機制
    const cMoney = Number(money.value) * 30.44;

    // 利用toFixed格式化呈現的文字，0代表小數點位為0，之後四捨五入。
    result.innerText = cMoney.toFixed(0);
});


// 按下 新台幣->美金 按鈕
t2u.addEventListener('click', function () {
    // 注意要轉為數字再運算，不要使用內部自動轉換機制
    const cMoney = Number(money.value) / 30.44;

    // 利用toFixed格式化呈現的文字，2代表小數點位為2，之後四捨五入。
    result.innerText = cMoney.toFixed(2);
});
