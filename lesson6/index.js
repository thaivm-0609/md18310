window.onload = function () {
    var arrayDivs = document.getElementsByTagName('div'); //lấy toàn bộ thẻ div
    console.dir(event);
    for(let i=0; i<arrayDivs.length; i++) { //chạy vòng for để truy cập từng phần tử
        arrayDivs[i].onmouseover = function () { // gán sự kiện di chuột đến phần tử
            arrayDivs[i].style.backgroundColor = arrayDivs[i].id; //sự kiển đổi màu background bằng id
        };
        arrayDivs[i].addEventListener('mouseleave', function () {
            arrayDivs[i].style.backgroundColor = "white";
        })
    }    
}

function addElement() {
    var newElement = document.createElement('p'); // taọ thẻ p
    document.getElementById('d1').appendChild(newElement); // gán p vào làm con của div
    var content = document.createTextNode('MD18310'); //tạo nội dung text
    newElement.appendChild(content); //gán nội dung text vào cho newElement
}

function changeCss() {
    var div = document.getElementById('d1');
    var p1 = document.getElementById('p1');
    var p2 = document.getElementById('p2');

    // p1.classList.add('newClass');
    // p2.classList.remove('newClass');
    p1.classList.toggle('newClass');
}

function anHienAnh() {
    var img = document.getElementsByTagName('img');
    img[0].classList.toggle('anHien');
}

function hienMau() {
    // var red = document.getElementById('red'); //khai bao element
    // red.style.backgroundColor = 'red'; //doi background
    var divs = document.getElementsByTagName('div'); // danh sach the div
    for (let i=0; i<divs.length; i++) {
        divs[i].style.backgroundColor = divs[i].id;
    }
}



//slide ảnh
var listImages = [
    'anh/1920x1080-23689-A.C.-MilanPaolo-Maldini-HD-Wallpaper.png', 
    'anh/294fb6e4-0a5d-4ff7-9a56-4aace3b60830.png',
    'anh/42f3f16f6caf46202517e4bb4ebac5af.jpg',
];
var currentImageIndex = 0;
var intervalId;
function hienThi() {
    var image = document.getElementById('slide');
    image.src = this.listImages[currentImageIndex];
}

function next() {
    currentImageIndex++;
    if (currentImageIndex == this.listImages.length) {
        currentImageIndex = 0;
    }
    hienThi();
}

function previous() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = this.listImages.length - 1;
    }
    hienThi();
}

function play() {
    intervalId = setInterval(next,1000);
}

function stop() {
    clearInterval(intervalId);
}


/* 3 cách để gán xử lý sự kiện
- C1: truyền trực tiếp qua html
- C2: 
    document.getElementById('id').onmouseover = function () {

    }

- C3: addEventListener:
    document.getElementById('id').addEventListener('sự kiện', function());
*/