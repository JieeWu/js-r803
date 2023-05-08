// 先獲取所有所需DOM元素物件
// h1
const total = document.getElementById('total');
const add = document.getElementById('add');
const sub = document.getElementById('sub');

// 檢查是否有獲取到元素物件
//console.log(total, add, sub);

// 加入事件監聽
add.addEventListener('click', function () {
    // 轉換來自網頁上的文字為數字
    total.innerText = Number(total.innerText) + 1;
});

sub.addEventListener('click', function () {
    // 轉換來自網頁上的文字為數字
    total.innerText = Number(total.innerText) - 1;
});