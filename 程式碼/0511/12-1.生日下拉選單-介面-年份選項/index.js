// 獲得dom元素物件
// select
const yy = document.getElementById('yy');
const mm = document.getElementById('mm');
const dd = document.getElementById('dd');

// 檢查
console.log(yy, mm, dd);

// 產生西元年的選項 1950~2020
// <option value="1950">1950</option>
let yearOptions = '';

for (let i = 1950; i < 2021; i++) {
    // 不斷地串接選項的字串
    yearOptions += `<option value="${i}">${i}</option>`;
}

// 呈現在對應的表單元素中
yy.innerHTML = yearOptions;

// 產生月的選項 1~12

// 產生日的選項 1~31

