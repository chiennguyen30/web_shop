// onclick cho the icon
function icon() {
    document.getElementById("heart").classList.toggle("myStyle");
}
// lay du lieu cua the p
var pElements = document.querySelectorAll('p')
for (var i = 0; i < pElements.length; i++) {
    pElements[i].onclick = function(e) {
        console.log(e.target)
    }
}

// làm cho thẻ span nhấp nháy
var boxElement = document.querySelector('.content-right_header span')
setInterval(() => {
    boxElement.classList.toggle('red');
}, 1000);


// lấy value của thẻ input / select
// bắt sự kiện từ bàn phím onkeyup / onkeydown/onkeypress
document.onkeydown = function(e) {

    switch (e.which) {
        case 27:
            console.log('exit');
            break;
        case 9:
            console.log('tab')
    }
}

// lấy value của thẻ key up / key down
// var inputValue = document.querySelector('input[type="text]')
// inputValue.onkeyup = function(e) {
//     console.log(e.target.value);
// }

var ulElement = document.querySelector('ul');
// loai bo chuc nang an cua display dùng preventDefault
ulElement.onmousedown = function(e) {
    e.preventDefault();
}
ulElement.onclick = function(e) {
    console.log(e.target)
}


// ngăn sự nổi bọt stopPropagation
// document.querySelector('div').onclick = function(e){
//     console.log('div')
// }
// document.querySelector('button').onclick = function(e){
//     e.stopPropagation();
//     console.log('click me')
// }


// //hủy bỏ lắng nghe 
// var btnElement = document.getElementById('btn')
// btn.onclick = function(){
// 	console.log('viec 1')
//   console.log('viec 2')
// 	alert('viec 3')
// }
// setTimeout(function(){
// 	btn.onclick = function(){}
// },3000);