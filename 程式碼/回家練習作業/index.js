/*
我們在這裡儲存遊戲狀態元素，以便稍後更輕鬆地使用它。
*/
const statusDisplay = document.querySelector('.game--status');
/*
在這裡，我們聲明了一些變量，用於在整個遊戲中追蹤遊戲狀態。
*/
/*
在結束場景時，我們將使用gameActive來暫停遊戲。
*/
let gameActive = true;
/*
我們將在這裡儲存當前的玩家，這樣我們就知道輪到誰了。

*/
let currentPlayer = "X";
/*
我們將在這裡儲存當前的遊戲狀態，以空字符串的形式存放在陣列中。
這樣可以方便追蹤已經下過的格子並在後續驗證遊戲狀態時使用。
*/
let gameState = ["", "", "", "", "", "", "", "", ""];
/*
在這裡，我們聲明了一些在遊戲期間將顯示給使用者的訊息。
由於這些訊息中有一些動態因素，
例如當前玩家，我們將它們聲明為函式，
這樣每次需要時都可以使用當前的資料創建實際的訊息。
*/
const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
/*
我們設定初始訊息，以讓玩家知道輪到誰了。
*/
statusDisplay.innerHTML = currentPlayerTurn();
function handleCellPlayed() {

}
function handlePlayerChange() {

}
function handleResultValidation() {

}
function handleCellClick() {

}
function handleRestartGame() {

}
/*
最後，我們將事件監聽器添加到實際的遊戲格子以及重新開始按鈕上。





*/
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);

function handleCellClick(clickedCellEvent) {
    /*
我們將點擊的 HTML 元素保存在一個變量中，以便稍後更輕鬆地使用。
    */
    const clickedCell = clickedCellEvent.target;
    /*
    
在這裡，我們將從點擊的單元格中獲取 'data-cell-index' 屬性，以識別該單元格在我們的網格中的位置。
請注意，
getAttribute 
方法將返回一個字符串值。由於我們需要一個實際的數字，我們將將其解析為整數（數字）格式。
    */
    const clickedCellIndex = parseInt(
        clickedCell.getAttribute('data-cell-index')
    );
    /* 
    接下來，我們需要檢查該格子是否已經被下過，或者遊戲是否暫停。
    如果其中任何一個條件成立，我們將忽略該點擊事件。
    */
    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }
    /* 
如果一切都符合要求，我們將繼續進行遊戲流程。
    */
    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}
function handleCellPlayed(clickedCell, clickedCellIndex) {
    /*
    我們更新內部的遊戲狀態以反映已下的棋步，同時更新使用者界面以顯示已下的棋步。
    */
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        } 
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }
    if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }
    /* 
    我們將檢查遊戲狀態陣列中是否還有未被玩家填入的值。
    */
    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }
    /*
    如果我們到了這裡，表示目前還沒有玩家獲勝，且還有可下的步數，因此我們繼續遊戲，更換當前玩家。
    */
    handlePlayerChange();
}
function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}
function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell')
        .forEach(cell => cell.innerHTML = "");
}