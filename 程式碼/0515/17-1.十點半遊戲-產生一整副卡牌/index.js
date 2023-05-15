const desk = document.getElementById('desk')

// poker函式庫產生卡片圖形的參數
// 參考：https://tairraos.github.io/Poker.JS/#chinese-version-readme
// suit:'h', 'd', 's', 'c'
// point: 1~13
// displayPoint: 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'

function createCard(suit, point) {
  const displayPoints = [
    'A',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
  ];

  return {
    suit: suit,
    point: point,
    display: Poker.getCardImage(100, suit, displayPoints[point - 1]),
  };
}

// 產生一副牌的函式
function initCards() {
  const cards = [];

  const suits = ['h', 'd', 's', 'c'];
  const points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < points.length; j++) {
      // 呼叫createCard建立新的卡牌物件
      const newCard = createCard(suits[i], points[j]);
      // 加入到陣列中
      cards.push(newCard);
    }
  }

  return cards;
}


const newCards = initCards();
console.log(newCards);

// const card = createCard('s', 13);
// const card2 = createCard('h', 12);

document.getElementById('desk').appendChild(newCards[0].display);
document.getElementById('desk').appendChild(newCards[13].display);