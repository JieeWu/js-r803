//console.log(window);

//console.log(document.title);

// console.log(
//     document.getElementById('total').innerText
// );

// document.getElementById('total').innerText = 1

document.getElementById('total').addEventListener('click', function () {
    document.getElementById('total').innerText = Number(document.getElementById('total').innerText) + 1
});