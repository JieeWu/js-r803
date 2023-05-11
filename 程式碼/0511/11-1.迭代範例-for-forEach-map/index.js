// 範例: 陣列中每個成員*2
const aa = [1, 2, 3];

// for
for (let i = 0; i < aa.length; i++) {
    aa[i] = aa[i] * 2;
}

console.log("aa=", aa);

// forEach
const ab = [1, 2, 3];

ab.forEach(function (value, index, array) {
    array[index] = value * 2;
});

console.log("ab=", ab);

// map
const ac = [1, 2, 3];

const ad = ac.map(function (value, index, array) {
    return value * 2;
})

console.log("ac=", ac, "ad=", ad);