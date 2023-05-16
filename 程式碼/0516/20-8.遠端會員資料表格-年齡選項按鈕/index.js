// 獲得dom元素
// tbody
const data = document.getElementById('data');
// table
const dataTable = document.getElementById('dataTable');
// div
const loader = document.getElementById('loader');
// button
const search = document.getElementById('search');
// const ageG20 = document.getElementById('ageG20');
// const ageL20 = document.getElementById('ageL20');
/**
 * @type HTMLInputElement
 */
const fullName = document.getElementById('fullName');

//檢查
//console.log(data, dataTable, loader, search, userName);

// server url
const url = 'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users';

// 記錄第一次從伺服器得到的會員所有資料
let allUsers = [];

// 呈現用函式
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

// true = 呈現動畫
// false = 關閉動畫
function loading(flag = true) {
    if (flag) {
        // 呈現動畫，隱藏表格
        loader.style.display = "block";
        dataTable.style.display = "none";
    } else {
        // 呈現表格，隱藏動畫
        // 因回應速度太快，所以撥放約1.5秒動畫再關起
        setTimeout(() => {
            loader.style.display = "none";
            dataTable.style.display = "block";
        }, 1500);
    }
}
// async-await
// 查詢用函式
// async function getUsersByName(fullName) {
//     // 呈現動畫，隱藏表格
//     loading(true);

//     // 向伺服器要求資料載入，後面要加條件
//     // 第一次回傳是response物件
//     const res = await fetch(url + `?name_like=${fullName}`, { method: 'get' });
//     // 要轉為js的物件陣列資料
//     const users = await res.json();
//     // 呈現資料
//     display(users);

//     // 呈現表格，隱藏動畫
//     loading(false);
// }

// 獲得所有會員資料的函式
async function getUsers() {
    // 呈現動畫，隱藏表格
    loading(true);

    // 向伺服器要求資料載入
    // 第一次回傳是response物件
    const res = await fetch(url, { method: 'get' });
    // 要轉為js的物件陣列資料
    const users = await res.json();

    // 設定給全域變數allUsers
    allUsers = users

    // 呈現資料
    display(users);

    // 呈現表格，隱藏動畫
    loading(false);
}

// 第一次呈現先呼叫函式，向伺服器要求所有資料
getUsers();

// fullName.addEventListener('input', function (event) {
//     console.log(fullName.value);

//     if (!fullName.value) {
//         display(allUsers);
//     } else {
//         const filteredUsers = allUsers.filter((v) => {
//             return v.name.includes(fullName.value);
//         });
//         display(filteredUsers);
//     }
// })

fullName.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        const filteredUsers = allUsers.filter((v) => {
            return v.name.includes(fullName.value);
        });
        display(filteredUsers);
    }
})

// 獲得radio元素集合
const radioButtons = document.getElementsByName('ageType');

for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('change', function (event) {
        if (event.target.value === '大於等於20') {
            // 按下 大於等於20 按鈕
            const filteredUsers = allUsers.filter((v) => {
                return v.age >= 20;
            });
            display(filteredUsers);
        } else {
            // 按下 小於20 按鈕
            const filteredUsers = allUsers.filter((v) => {
                return v.age < 20;
            });
            display(filteredUsers);
        }
    })
}

// 按下查詢按鈕
search.addEventListener('click', function () {
    // 有輸入姓名要查詢時，使用js直接過濾一開始設定好的allUsers變數
    if (fullName.value) {
        //getUsersByName(fullName.value);
        //loading(true);
        // 單純只用js作查詢過濾
        const filteredUsers = allUsers.filter((v) => {
            return v.name.includes(fullName.value);
        });

        display(filteredUsers);

        // loading(false);
    } else {
        // getUsers();
        //loading(true);

        // 單純只用js作查詢過濾
        display(allUsers);

        // loading(false);
    }
})




