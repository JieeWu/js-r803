// 獲得dom元素物件
// p
const user = document.getElementById('user');
const com = document.getElementById('com');
const result = document.getElementById('result');
// button
const scissors = document.getElementById('scissors');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');

// 檢查
console.log(user, com, result, scissors, rock, paper);

// 定義隨機數的對應值: 剪刀=1 /石頭=2 /布=3

// 按下 剪刀 按鈕
scissors.addEventListener('click', function () {
    // userState 代表目前使用者出拳的對應數字值
    const userState = 1;

    // 呈現user的訊息
    user.innerText = '你出了: 剪刀';

    // 隨機產生1~3的整數值(代表三者其一的拳)
    const comState = Math.floor(Math.random() * 3) + 1;

    // 對照定義的隨機數和代表意義，呈現在網頁上
    // 剪刀=1 /石頭=2 /布=3
    switch (comState) {
        case 1:
            com.innerText = '電腦出了: 剪刀';
            break;
        case 2:
            com.innerText = '電腦出了: 石頭';
            break;
        case 3:
            com.innerText = '電腦出了: 布';
            break;
        default:
            com.innerText = '電腦出了: 布';
    }

    // 以玩家角度，判斷 勝 負 平手

    // 平手
    // if (comState === 1) {
    if (userState === comState) {
        result.innerText = '結果 :平手';
    }

    // 玩家勝利 電腦出布
    if (comState === 3) {
        result.innerText = '結果 :你贏了';
    }

    // 玩家輸 電腦出石頭
    if (comState === 2) {
        result.innerText = '結果 :電腦贏，你輸了';
    }




});