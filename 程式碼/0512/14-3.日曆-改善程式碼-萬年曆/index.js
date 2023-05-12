// 獲得dom元素物件
const yearAndMonth = document.getElementById('yearAndMonth');
const data = document.getElementById('data');

// 檢查
console.log(yearAndMonth, data);

// 獲得目前的時間日期物件
const now = new Date("2023/5");

// 目前年份與月份
const nowY = now.getFullYear();
// 注意: getMonth回傳值是0~11(索引值)
const nowM = now.getMonth() + 1;

yearAndMonth.innerText = `目前: ${nowY}年${nowM}月`;

// 這個月有幾天
const days = new Date(nowY, nowM, 0).getDate();
//console.log(days);

// 這個月的1號是星期幾
// 注意會得到索引值0~6，0代表星期日，1~6是星期一~六
const weekdayFirst = new Date(`${nowY}/${nowM}/1`).getDay();
//console.log(weekdayFirst);

// 建立資料陣列

// 計算要需要多少陣列成員(長度)，星期日(剛好是0)時不需要額外成員
const numberOfMember = days + weekdayFirst;

// 所有資料的陣列

// 建立空白字串的陣列
// const emptyData = [];
// for (let i = 0; i < weekdayFirst; i++) {
//     emptyData.push("");
// }
const emptyData = Array(weekdayFirst).fill("");

// 建立有資料的陣列 1~這個月有幾天
// const valueData = [];

// for (let i = 0; i < days; i++) {
//     valueData.push(i + 1);
// }

const valueData = Array(days).fill("").map((v, i) => i + 1);

// 組合為一整個陣列
// 先讓每個資料包裹`<td>XX</td>`標記
const allData = [...emptyData, ...valueData].map((v) => `<td>${v}</td>`);

console.log(allData);

// 進行陣列分塊，每7個一組(一列)
const chunkSize = 7;
const allDataChunks = [];

for (let i = 0; i < allData.length; i += chunkSize) {
    const chunk = allData.slice(i, i + chunkSize);
    allDataChunks.push(chunk);
}

//console.log(allDataChunks);

// 包裹`<tr>...</tr>`標記，中間每個內部陣列值作join。最後再join成一整個要呈現的html元素字串
const display = allDataChunks.map((v) => `<tr>${v.join("")}</tr>`).join("");
//console.log(display);

data.innerHTML = display;

