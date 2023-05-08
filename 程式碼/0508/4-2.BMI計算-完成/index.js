// 先獲取所有所需DOM元素物件
// input
const height = document.getElementById('height');
const weight = document.getElementById('weight');
// button
const calc = document.getElementById('calc');
// span
const result = document.getElementById('result');


// 測試
console.log(height, weight, calc, result);

// 按下計算按鈕
// BMI = 體重(公斤) / 身高<sup>2</sup>(公尺平方)
// 身高的平方公尺(假設身高輸入為公分，變數名稱為`height`)：`Math.pow(height/100, 2)`
calc.addEventListener('click', function () {
    // 先獲得文字輸入框的體重和身高，並轉換為數字資料類型
    const w = Number(weight.value);
    const h = Number(height.value);
     
    // 計算bmi值
    const bmi = w / Math.pow(h / 100, 2);

    // 呈現結果在網頁上，並保留一個小數點位，之後四捨五入
    result.innerText = bmi.toFixed(1);
})