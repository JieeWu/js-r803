// 先獲取所有所需DOM元素物件
// h1
const total = document.getElementById('total');

// 檢查是否有獲取到元素物件
// console.log(total);

// 加入事件監聽
total.addEventListener('click', function () {
    // 轉換來自網頁上的文字為數字才能相加
    total.innerText = Number(total.innerText) + 1;
});