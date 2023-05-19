// 獲得dom元素
// tbody
const data = document.getElementById('data');

// server url
const url = 'https://my-json-server.typicode132.com/eyesofkids/json-fake-data/users';

// async-await
async function getUsers() {
    try {
        const res = await fetch(url, { method: 'get' }); //第一次回傳是response物件
        const users = await res.json(); // 要轉為js的物件陣列資料

        const displayList = users.map((v) => {
            return `<tr>
                  <td>${v.id}</td>
                  <td>${v.name}</td>
                  <td>${v.age}</td>
                </tr>`;
        })

        data.innerHTML = displayList.join("");
    } catch (error) {
        console.error(error);

        data.innerHTML = `<tr>
                            <td>錯誤，無法取得資料！</td>
                            <td>xxx</td>
                            <td>xxx</td>
                        </tr>`;
    }

}

// 呼叫函式，向伺服器要求資料
getUsers();


// fetch
// fetch(url, { method: 'get' })
//     //第一次回傳是response物件
//     .then((res) => res.json()) // 要轉為js的物件陣列資料
//     .then(function (users) {
//         const displayList = users.map((v) => {
//             return `<tr>
//                       <td>${v.id}</td>
//                       <td>${v.name}</td>
//                       <td>${v.age}</td>
//                     </tr>`;
//         })

//         data.innerHTML = displayList.join("");
//     }) // 這裡才能得到js的物件陣列
//     .catch((error) => console.log(error))



