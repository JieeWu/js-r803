// 函式可以回傳另個函式
function outer(x) {
    return function inner() {
        console.log(x + 1);
    }
}

// 箭頭函式語法簡化
const outer1 = (x) => () => console.log(x + 1)

const fa = outer(999);
// console.log(fa);
// fa();

// outer(999)()
// outer1(999)()


function aFunc(x) {
    function bFunc() {
        console.log(x++);
    }
    return bFunc;
}

const newFunc = aFunc(1);
console.log(newFunc);
newFunc();
newFunc();
newFunc();
newFunc();

////////////////////////////////////////////
// 函式可以作為另個函式的傳入參數

// function add1(value) {
//     return value + 1;
// }

const add1 = function (value) {
    return value + 1;
}

// const add100 = function (value) {
//     return value + 100;
// }

// 參數值要代入函式，常用 fn/func/callback/xxxxFn/cb/xxx-er/xxx-or
function add2(value, cb) {
    return cb(value) + 2;
}

// 第二個傳入參數值可以傳入函式的名字
add2(999, add1);

// 第二個傳入參數值可以也可以直接定義函式內容(匿名函式，也是函式表達式)
add2(999, function (v) {
    return v + 1
});





