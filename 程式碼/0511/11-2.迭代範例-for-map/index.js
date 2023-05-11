// 結論:

// 1. for/while迴圈是處理陣列的最基本的方法，各種程式語言都有同樣語法
// 2. for/while迴圈是處理陣列最高效率、彈性最高的方法，速度約快迭代方法(如forEach..)10x以上
// 3. for/while迴圈裡可以使用continue或break進行流程控制，提早跳出迴圈。迭代方法(如forEach..)沒有。

// 1. 迭代方法(如forEach..)的閱讀性很高，可以為特定需求加入/設計新的迭代方法
// 2. 迭代方法(如forEach..)可以使用連鎖語法，語法更簡短

// 範例: 陣列中尋找大於5的成員，然後大於5的成員每個*2
// [9,1,1,5,6,7,8]
// for
const ae = [9, 1, 1, 5, 6, 7, 8];
const af = [];

for (let i = 0; i < ae.length; i++) {
    if (ae[i] > 5) {
        // 相當於 af.push(ae[i] * 2)
        af[i] = ae[i] * 2;
    } else {
        af[i] = ae[i];
    }
}

console.log("af=", af);

// map
const ag = [9, 1, 1, 5, 6, 7, 8];

// const ah = ag.map(function (value, index) {
//     return value > 5 ? value * 2 : value;
// })

const ah = ag.map(v => v > 5 ? v * 2 : v)

console.log("ah=", ah);

// 範例: 同上陣列，要過濾掉小於等於5的(新陣列只剩大於5)，然後新陣列的成員*2

// const ai = ag.filter(function (value, index) {
//     return value > 5;
// }).map(function (value, index) {
//     return value * 2;
// })

const ai = ag.filter(v => v > 5).map(v => v * 2);

console.log("ai=", ai);

// 範例: 陣列中每個成員*2
const aa = [1, 2, 3];

// for
// for迴圈的處理角度是由索引值會遞增，限定範圍內進行的循環語法
for (let i = 0; i < aa.length; i++) {
    aa[i] = aa[i] * 2;
}

console.log("aa=", aa);

// forEach
const ab = [1, 2, 3];

// 迭代是以該陣列的方法出發，用回調函式作為處理各成員用的語法
ab.forEach(function (value, index, array) {
    // array相當於ab
    array[index] = value * 2;
});

console.log("ab=", ab);

// map
const ac = [1, 2, 3];

// map會回傳新的陣列，其中帶有每個成員經改變的值
const ad = ac.map(function (value, index, array) {
    return value * 2;
})

console.log("ac=", ac, "ad=", ad);