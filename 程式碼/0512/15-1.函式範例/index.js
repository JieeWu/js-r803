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





