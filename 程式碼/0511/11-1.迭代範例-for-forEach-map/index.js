// 範例: 陣列中每個成員*2
const aa = [1, 2, 3];

// for
// for迴圈的角度是由索引值會遞增，限定範圍內進行的循環語法
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