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

// 宣告購物車陣列
let cart = [];

if (localStorage.getItem('cart')) {
    // 處理localStorage getItem 沒得到值會回傳null
    // 不論得到值或設定值都使用字串值
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

// 增減cart的函式
function updateCart(cart, id, value) {
    return cart.map((v) => {
        // id相符時，作增減count欄位的動作
        if (v.id === id) {
            // 最少數量為0
            const newCount = (v.count + value) < 0 ? 0 : v.count + value;

            return { ...v, count: newCount };
        }
        // 其它不相符時，按原本回傳
        return { ...v }
    })
}

// 呈現用函式
function display(cart) {
    // 套上tr與td標記在所需值上
    const displayList = cart.map((v) => {
        return `<tr>
                <td>${v.id}</td>
                <td><img src="${v.picture}"></td>
                <td>${v.name}</td>
                <td>
                    <button class="add" data-id="${v.id}">+</button>${v.count}
                    <button class="sub" data-id="${v.id}">-</button>
                </td>
                <td>${v.price}</td>
                <td>${v.price * v.count}</td>
            </tr>`;
    });

    let totalNumber = 0;
    let totalPrice = 0;

    for (let i = 0; i < cart.length; i++) {
        totalNumber += cart[i].count;
        totalPrice += cart[i].count * cart[i].price;
    }

    const displayTotal = `<tr>
                    <td colspan="3">總訂購數量: ${totalNumber}</td>
                    <td colspan="3">總計: ${totalPrice}</td>
                  </tr>`

    // console.log(displayList);

    // 呈現在tbody中
    data.innerHTML = displayList.join('') + displayTotal;


    // 每次重新呈現頁面上的資訊，需要重新加入按鈕事件監聽
    // +1按鈕
    const addButtons = document.getElementsByClassName('add');

    for (let i = 0; i < addButtons.length; i++) {
        addButtons[i].addEventListener('click', function (event) {
            // console.log('按了+按鈕 id=', event.target.dataset.id);
            cart = updateCart(cart, Number(event.target.dataset.id), 1);
            // 儲存更新到localStorage中
            localStorage.setItem('cart', JSON.stringify(cart));
            // 重新呈現頁面上的資訊
            display(cart);
        })
    }

    // +1按鈕
    const subButtons = document.getElementsByClassName('sub');

    for (let i = 0; i < subButtons.length; i++) {
        subButtons[i].addEventListener('click', function (event) {
            // console.log('按了-按鈕 id=', event.target.dataset.id);
            cart = updateCart(cart, Number(event.target.dataset.id), -1);
            // 儲存更新到localStorage中
            localStorage.setItem('cart', JSON.stringify(cart));
            // 重新呈現頁面上的資訊
            display(cart);
        })
    }
}

// 一開始先初始呈現一次
display(cart);


