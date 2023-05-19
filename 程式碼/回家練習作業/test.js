const yearAndMonth = document.getElementById("yearAndMonth");
const data = document.getElementById("data");

console.log(yearAndMonth,data);

const now = new Date();
const nowY = now.getFullYear();
const nowM = now.getMonth()+1;
const nowD = now.getDate();
yearAndMonth.innerText = `目前: ${nowY}年${nowM}月${nowD}號`;
const days = new Date(nowY,nowM,nowD);
let DataDays = [];
// let 可變 const 不可變
const a = now.getDay();
console.log(a);
