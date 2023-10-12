function newFunction() {
    var button = event.target;
    var username = event.target.form[0].value;
    var oldPass = event.target.form[1].value;
    var newPass =  event.target.form[2].value;
    var confirmPass = event.target.form[3].value;

    console.log(username, newPass, confirmPass);
    if (oldPass !== '123@abc123') {
        console.log(oldPass);
        document.getElementById('errorOldPass').textContent = 'Mật khẩu nhập vào không hợp lệ';
    }

    if (username.length == 0) {
        document.getElementById('errorName').textContent = 'Username khong duoc bo trong';
    }
}

function checkValidPass() {
    var newPass = event.target.value;
    
    if (newPass.length < 3) {
        document.getElementById('errorNewPass').textContent = 'Mật khẩu yếu';
        event.target.style.backgroundColor = 'red';
    } else if (newPass.length < 8) {
        document.getElementById('errorNewPass').textContent = 'Mật khẩu trung bình';
        event.target.style.backgroundColor = 'yellow';
    } else {
        document.getElementById('errorNewPass').textContent = 'Mật khẩu mạnh';
        document.getElementById('errorNewPass').style.color = 'green';
        event.target.style.backgroundColor = 'white';
    }
}

function checkConfirmPassword() {
    var confirmPass = event.target.value;
    var newPass = event.target.form[2].value;

    if (newPass !== confirmPass) {
        document.getElementById('errorConfirmPass').textContent = 'Mật khẩu nhập lại không khớp';
    } else {
        document.getElementById('errorConfirmPass').textContent = '';
    }
}

function uploadFiles(files) {
    console.log(files[0]);
    document.getElementById('avatar').src = URL.createObjectURL(files[0]);
}

function dinhVi() {
    navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
    var kinhdo = position.coords.longitude;
    var vido = position.coords.latitude;

    document.getElementById('location').innerHTML = `Vi tri cua ban la kinh do ${kinhdo}, vi do ${vido} `;
}
