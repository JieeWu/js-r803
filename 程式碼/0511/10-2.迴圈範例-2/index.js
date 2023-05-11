// 拷貝陣列
const aa = [1, 2, 3];

// for
const ab = [];

for (let i = 0; i < aa.length; i++) {
    ab[i] = aa[i];
}

console.log('ab=', ab);

// while
const ac = [];
let k = 0;

while (k < aa.length) {
    ac[k] = aa[k];
    k++;
}

console.log('ac=', ac);

// while
const ad = [];
let l = aa.length;

while (l--) {
    ad[l] = aa[l];
}

console.log('ad=', ad);

////////////////////////////////////////////////////////////////////////
// 範例: 印出1~10
// for
for (let i = 0; i < 10; i++) {
    console.log(i + 1);
}

// console.log(i);

// while
let j = 0;

while (j < 10) {
    console.log(j + 1);
    j++;
}

// console.log(j);