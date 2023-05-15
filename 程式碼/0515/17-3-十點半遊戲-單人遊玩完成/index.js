const desk = document.getElementById('desk')
const point = document.getElementById('point')
const message = document.getElementById('message')
const dispatch = document.getElementById('dispatch')
const reset = document.getElementById('reset')

// suit:'h', 'd', 's', 'c'
// point(number): 1~13
// displayPoint: 'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'
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
  ]

  return {
    suit: suit,
    point: point,
    display: Poker.getCardImage(100, suit, displayPoints[point - 1]),
  }
}

// 洗牌的演算法
// 傳入一個陣列，洗好後回傳陣列
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

// 產生一整副牌
function initCards() {
  const tempCards = [];
  const suits = ['h', 'd', 's', 'c'];
  const points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < points.length; j++) {
      tempCards.push(createCard(suits[i], points[j]));
    }
  }

  // 指定目前的牌(全域變數)
  return shuffle(tempCards);
}

// 從這裡開始寫程式的部份
// 全域變數，代表整副要使用的撲克牌
let cards = initCards();
// 目前發到的牌的索引值(第一張牌索引值是0)
let cardIndex = 0;
// 目前所有桌面的牌的點數總合
let totalPoint = 0;

// console.log(cards)

dispatch.addEventListener('click', function () {
  // 總點數小於10.5才發牌
  if (totalPoint < 10.5) {
    // 顯示卡牌
    desk.appendChild(cards[cardIndex].display);

    // 點數總合要加上目前發出的卡牌的點數
    let tempPoint = cards[cardIndex].point;

    // 牌是11 12 13(JQK)算是半點 = 0.5
    if (tempPoint > 10) tempPoint = 0.5;

    totalPoint += tempPoint;
  }

  // 顯示目前的點數總合
  point.innerHTML = `目前的點數總合：${totalPoint}點`;

  // 檢查是否超過10.5
  if (totalPoint > 10.5) {
    message.innerHTML = '爆掉了';
  }

  // 每次發完索引值要遞增
  cardIndex++;
})

reset.addEventListener('click', function () {
  // 所有用到的全域變數都要重設
  cards = initCards();
  cardIndex = 0;
  totalPoint = 0;

  // 清空網頁上的所有訊息
  desk.innerHTML = '';
  point.innerHTML = '';
  message.innerHTML = '';
})
