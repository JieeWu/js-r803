// 先獲得dom元素物件
// p
const result = document.getElementById('result');
// button
const start = document.getElementById('start');
const reset = document.getElementById('reset');

// 檢查
console.log(result, start);

reset.addEventListener('click', function () {
    result.innerHTML = '';
});

start.addEventListener('click', function () {
    for (let i = 0; i < 10; i++) {
        //Math.floor(Math.random() * (max - min + 1)) + min
        const rand = Math.floor(Math.random() * 100) + 1;

        // - 5星卡(共有3種)：機率3%
        // - 4星卡(共有10種)：機率17%
        // - 3星卡(共有30種)：機率80%
        if (rand >= 1 && rand <= 3) {
            result.innerHTML += '你抽到了 <span style="color:gold">5星卡</span>';
        } 
        
        if (rand >= 4 && rand <= 20) {
            result.innerHTML += '你抽到了 <span style="color:green">4星卡</span>';
        } 
        
        if (rand >= 21 && rand <= 100) {
            result.innerHTML += '你抽到了 3星卡';
        }

        result.innerHTML += '<br>';
    }

});
