// 獲得dom元素物件
const yearAndMonth = document.getElementById('yearAndMonth');
const data = document.getElementById('data');

// 檢查
console.log(yearAndMonth, data);

// 獲得目前的時間日期物件
const now = new Date();

// 目前年份與月份
const nowY = now.getFullYear();
// 注意: getMonth回傳值是0~11(索引值)
const nowM = now.getMonth() + 1;

yearAndMonth.innerText = `目前: ${nowY}年${nowM}月`;

// 這個月有幾天
const days = new Date(nowY, nowM, 0).getDate();
console.log(days);

// 這個月的1號是星期幾
// 注意會得到索引值0~6，0代表星期日，1~6是星期一~六
const weekdayFirst = new Date(`${nowY}/${nowM}/1`).getDay();
console.log(weekdayFirst);

// 建立資料陣列

// 計算要需要多少陣列成員(長度)
const numberOfMember = days + weekdayFirst;

// 所有資料的陣列
const allData = [];

for (let i = 0; i < numberOfMember; i++) {
    if (i < weekdayFirst) {
        allData.push("");
    } else {
        allData.push(i - weekdayFirst + 1);
    }
}

console.log(allData);

let display = '<tr>';

for (let i = 0; i < allData.length; i++) {
    display += `<td>${allData[i]}</td>`;

    // 每7個要加入換列
    if ((i + 1) % 7 === 0) {
        display += "</tr><tr>"
    }
}

display += "</tr>";

console.log(display);

data.innerHTML = display