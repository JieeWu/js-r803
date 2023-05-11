// 獲得dom元素物件
// select
const yy = document.getElementById('yy');
const mm = document.getElementById('mm');
const dd = document.getElementById('dd');

// 檢查
console.log(yy, mm, dd);

// 同義詞: make/create/generate/new
// params(傳入值): min, max : number
// return(返回值): string
function makeOptions(min, max) {
    let options = '<option value="0">請選擇</option>';

    for (let i = min; i < max + 1; i++) {
        // 不斷地串接選項的字串
        options += `<option value="${i}">${i}</option>`;
    }

    return options;
}

// 產生西元年的選項 1950~2020 呈現在對應的表單元素中
yy.innerHTML = makeOptions(1960, 2020);

// 產生月的選項 1~12  呈現在對應的表單元素中
mm.innerHTML = makeOptions(1, 12);

// 產生日的選項 1~31  呈現在對應的表單元素中
dd.innerHTML = makeOptions(1, 31);
