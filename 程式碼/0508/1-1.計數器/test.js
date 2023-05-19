const add = document.getElementById("add");
const sub = document.getElementById("sub");
const ans = document.getElementById("ans");

console.log(add,sub,ans);

let a = 0;
add.addEventListener('click',function(){
    a++;
    ans.innerText = a;
})
sub.addEventListener('click',function(){
    a--;
    ans.innerText = a;
})
