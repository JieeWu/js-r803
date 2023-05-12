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
    // 預設選項，後面可以用來判斷使用者有沒有選擇
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
// 一開始不讓使用者選日，必需要選了年+月才會出現
dd.innerHTML = '<option value="0">請選擇</option>';

// 定義三個變數記錄使用者選擇的年月日
// 這裡使用數字資料類型，是為了要套用有年+月後的動態產生日數的語法公式
let birthY = 0;
let birthM = 0;
let birthD = 0;

yy.addEventListener('change', function () {
    // 設定到全域變數中
    birthY = Number(yy.value);
    //console.log(birthY, birthM, birthD);

    // 目前年+月都有值(>0)，出現對應的日下拉選項
    // if (birthY > 0 && birthM > 0) {
    if (birthY && birthM) {
        dd.innerHTML = makeOptions(1, new Date(birthY, birthM, 0).getDate());

        // 內部記錄日的變數要回復初始值
        birthD = 0;
    }
});

mm.addEventListener('change', function () {
    birthM = Number(mm.value);
    //console.log(birthY, birthM, birthD);

    // 目前年+月都有值(>0)，出現對應的日下拉選項
    if (birthY && birthM) {
        dd.innerHTML = makeOptions(1, new Date(birthY, birthM, 0).getDate());
        // 內部記錄日的變數要回復初始值
        birthD = 0;
    }
});

dd.addEventListener('change', function () {
    birthD = Number(dd.value);
    console.log(birthY, birthM, birthD);
});