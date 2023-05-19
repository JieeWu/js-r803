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

const card = createCard('s', 13);
const card2 = createCard('h', 5);
document.getElementById('desk').appendChild(card.display);
document.getElementById('desk').appendChild(card2.display);