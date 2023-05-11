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

// 勝利條件，前者勝後者
const winningMap = ["21", "32", "13"]; // [[2,1], [3,2], [1,3]]

// 共用的函式，傳入值 userState 代表目前玩家出拳的對應數字值
function play(userState) {
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
        return; // 已經有結果了，不需要再往下判斷
    }

    // 玩家勝 21 32 13
    // 改用勝利條件的陣列判斷，是否有字串值，有代表勝利
    if (winningMap.includes(String(userState) + String(comState))) {
        result.innerText = '結果 :你贏了';
        return; // 已經有結果了，不需要再往下判斷
    }

    // 會執行到這行，代表不符合上面的 平手 或 勝利 條件，唯一情況就是輸了
    result.innerText = '結果 :電腦贏，你輸了';
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