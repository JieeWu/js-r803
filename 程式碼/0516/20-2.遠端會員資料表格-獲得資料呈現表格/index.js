// 獲得dom元素
// tbody
const data = document.getElementById('data');

// fetch
const url = 'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users';

fetch(url, { method: 'get' })
    //第一次回傳是response物件
    .then(function (res) {
        return res.json(); // 要轉為js的物件陣列資料
    })
    // 這裡才能得到js的物件陣列
    .then(function (users) {
        console.log(users);

        const displayList = users.map((v) => {
            return `<tr>
                        <td>${v.id}</td>
                        <td>${v.name}</td>
                        <td>${v.age}</td>
                    </tr>`
        })

        data.innerHTML = displayList.join("");
    })
    .catch(function (error) {
        console.log(error);
    })