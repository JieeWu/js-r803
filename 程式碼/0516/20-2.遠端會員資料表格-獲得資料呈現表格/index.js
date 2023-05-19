// 獲得dom元素
// tbody
const data = document.getElementById('data');

// fetch
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

fetch(url, { method: 'get' })
    //第一次回傳是response物件
    .then((res) => res.json()) // 要轉為js的物件陣列資料
    .then(display) // 這裡才能得到js的物件陣列
    .catch( (error) => console.log(error))



