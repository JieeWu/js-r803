// 原始商品資料
const products = [
    {
        id: 1,
        picture: 'https://via.placeholder.com/48',
        stock: 5,
        name: 'iPhone 12 Pro',
        price: 25000,
        tags: '蘋果,大螢幕',
    },
    {
        id: 2,
        picture: 'https://via.placeholder.com/48',
        stock: 5,
        name: 'iPhone 12',
        price: 15000,
        tags: '蘋果,小螢幕',
    },
    {
        id: 3,
        picture: 'https://via.placeholder.com/48',
        stock: 10,
        name: 'iPhone SE',
        price: 12500,
        tags: '蘋果,小螢幕',
    },
    {
        id: 4,
        picture: 'https://via.placeholder.com/48',
        stock: 10,
        name: 'iPhone XS',
        price: 22000,
        tags: '蘋果,大螢幕',
    },
    {
        id: 5,
        picture: 'https://via.placeholder.com/48',
        stock: 6,
        name: 'Google Pixel 5',
        price: 17000,
        tags: '安卓,大螢幕',
    },
    {
        id: 6,
        picture: 'https://via.placeholder.com/48',
        stock: 6,
        name: 'Google Pixel 4',
        price: 15500,
        tags: '安卓,大螢幕',
    },
];

// 加入 count:0 屬性在原商品的物件中
const productsCount = products.map((v) => {
    return { ...v, count: 0 }
})


// 獲得dom元素物件
// tbody
const data = document.getElementById('data');

// 檢查
// console.log(data);

// 處理localStorage getItem 沒得到值會回傳null
// 不論得到值或設定值都使用字串值
// 宣告購物車陣列
let cart = [];

if (localStorage.getItem('cart')) {
    // 從localStorage得到鍵是"cart"儲存的值
    const cartJson = localStorage.getItem('cart');

    // cart轉為js的資料格式(物件陣列)
    // 前提假設parse不會發生格式錯誤，不然要用try...catch才保証不會在應用錯誤時整個中斷
    cart = JSON.parse(cartJson);

} else {
    // 商品資料要轉為json字串再設定到localStorage中
    // localStorage"只能"儲存字串類型
    localStorage.setItem('cart', JSON.stringify(productsCount));

    // 第一次或localStorage中沒有記錄時，使用原始資料
    cart = productsCount;
}


// 套上tr與td標記在所需值上
const displayList = cart.map((v) => {
    return `<tr>
                <td>${v.id}</td>
                <td><img src="${v.picture}"></td>
                <td>${v.name}</td>
                <td><button>+</button>${v.count}<button>-</button></td>
                <td>${v.price}</td>
                <td>${v.price * v.count}</td>
            </tr>`;
});

console.log(displayList);

// 呈現在tbody中
data.innerHTML = displayList.join('');