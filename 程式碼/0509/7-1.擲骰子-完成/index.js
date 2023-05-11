// 先獲得dom元素物件
// div
const dice = document.getElementById('dice');
// h1
const point = document.getElementById('point');
// button
const start = document.getElementById('start');

// 檢查
console.log(dice, point, start);

// 按下開始按鈕
start.addEventListener('click', function () {
    // 產生一個1~6的隨機整數(數字資料類型)
    const rand = Math.floor(Math.random() * 6) + 1;

    // 對照骰子的圖示字體
    let diceType = '';

    switch (rand) {
        case 1:
            diceType = 'one';
            break;
        case 2:
            diceType = 'two';
            break;
        case 3:
            diceType = 'three';
            break;
        case 4:
            diceType = 'four';
            break;
        case 5:
            diceType = 'five';
            break;
        case 6:
            diceType = 'six';
            break;
        default:
            diceType = 'six';
    }

    // 替換掉骰子的圖片，使用樣版字串代入diceType值
    dice.innerHTML = `<i class="fas fa-dice-${diceType}"></i>`;

    // 呈現點數
    point.innerText = rand + '點';
})