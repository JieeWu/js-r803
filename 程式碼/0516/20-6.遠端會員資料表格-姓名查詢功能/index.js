// 獲得dom元素
// tbody
const data = document.getElementById('data');
// table
const dataTable = document.getElementById('dataTable');
// div
const loader = document.getElementById('loader');
// button
const search = document.getElementById('search');
/**
 * @type HTMLInputElement
 */
const fullName = document.getElementById('fullName');

//檢查
//console.log(data, dataTable, loader, search, userName);

// server url
const url = 'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users';

function display(users) {
    const displayList = users.map((v) => {
        return `<tr>
                    <td>${v.id}</td>
                    <td>${v.name}</td>
                    <td>${v.age}</td>
                </tr>`;
    })

    data.innerHTML = displayList.join("");
}



// async-await
async function getUsersByName(fullName) {
    // 呈現動畫，隱藏表格
    loader.style.display = "block";
    dataTable.style.display = "none";

    //向伺服器要求資料載入，後面要加條件
    const res = await fetch(url + `?name_like=${fullName}`, { method: 'get' }); //第一次回傳是response物件
    const users = await res.json(); // 要轉為js的物件陣列資料
    display(users); // 呈現資料

    // 呈現表格，隱藏動畫
    // 因回應速度太快，所以撥放約1.5秒動畫再關起
    setTimeout(() => {
        loader.style.display = "none";
        dataTable.style.display = "block";
    }, 1500);
}

async function getUsers() {
    // 呈現動畫，隱藏表格
    loader.style.display = "block";
    dataTable.style.display = "none";

    //向伺服器要求資料載入
    const res = await fetch(url, { method: 'get' }); //第一次回傳是response物件
    const users = await res.json(); // 要轉為js的物件陣列資料
    display(users); // 呈現資料

    // 呈現表格，隱藏動畫
    // 因回應速度太快，所以撥放約1.5秒動畫再關起
    setTimeout(() => {
        loader.style.display = "none";
        dataTable.style.display = "block";
    }, 1500);
}

// 呼叫函式，向伺服器要求資料
getUsers();

// 按下查詢按鈕
search.addEventListener('click', function () {
    // 有輸入姓名要查詢時，依伺服器查詢的結果重新呈現
    if (fullName.value) {
        getUsersByName(fullName.value);
    } else {
        getUsers();
    }
})




