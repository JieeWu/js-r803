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
// 宣告一個用於對照的陣列字串組
const types = ["剪刀", "石頭", "布"];

function play(userState) {
    // userState 代表目前使用者出拳的對應數字值

    // 呈現user的訊息，查types對照陣列，索引值需要減1
    user.innerText = `你出了: ${types[userState - 1]}`;

    // 隨機產生1~3的整數值(代表 剪刀=1 /石頭=2 /布=3 三者其一的拳)
    const comState = Math.floor(Math.random() * 3) + 1;

    // 對照定義的隨機數和代表意義，呈現在網頁上
    com.innerText = `電腦出了: ${types[comState - 1]}`;

    // 以玩家角度，判斷 勝/負/平手 三種情況

    // 平手 11 22 33 
    if (userState === comState) {
        result.innerText = '結果 :平手';
    }

    // 玩家勝 21 32 13
    if (userState === 1 && comState === 3) {
        result.innerText = '結果 :你贏了';
    }

    if (userState === 3 && comState === 2) {
        result.innerText = '結果 :你贏了';
    }

    if (userState === 2 && comState === 1) {
        result.innerText = '結果 :你贏了';
    }

    // 玩家輸 12 23 31
    if (userState === 1 && comState === 2) {
        result.innerText = '結果 :電腦贏，你輸了';
    }

    if (userState === 2 && comState === 3) {
        result.innerText = '結果 :電腦贏，你輸了';
    }

    if (userState === 3 && comState === 1) {
        result.innerText = '結果 :電腦贏，你輸了';
    }
}

// 按下 剪刀 按鈕
scissors.addEventListener('click', function () {
    play(1);
});

// 按下 石頭 按鈕
rock.addEventListener('click', function () {
    play(2);
});

// 按下 布 按鈕
paper.addEventListener('click', function () {
    play(3);
});