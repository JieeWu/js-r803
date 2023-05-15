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

// 計算要需要多少陣列成員(長度)，星期日(剛好是0)時不需要額外成員
const numberOfMember = days + weekdayFirst;

// 所有資料的陣列
const allData = [];

for (let i = 0; i < numberOfMember; i++) {
    // 星期日(剛好是0)時不需要額外成員，1的時候一個額外成員""…以此類推
    if (i < weekdayFirst) {
        allData.push("");
    } else {
        // 因weedayFirst是陣列索引值，所以要再加1才是它的代表值
        // 例如第1天為星期三，weekdayFirst=3
        // 上面0,1,2均為""成員
        // 到i=3之後會進到此運算，`3-3+1`為第1天呈現數字
        // `4-3+1`為第2天呈現數字…以此類推
        allData.push(i - weekdayFirst + 1);
    }
}

console.log(allData);

// 用for迴圈，以tr+td呈現在表格上
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