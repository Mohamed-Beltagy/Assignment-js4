var signUpName = document.getElementById("signUpName");
var signUpEmail = document.getElementById("signUpEmail");
var signUpPassword = document.getElementById("signUpPassword");
var signInEmail = document.getElementById("signInEmail");
var signInPassword = document.getElementById("signInPassword");
var arr = [];

if (localStorage.getItem('info') != null) {
    arr = JSON.parse(localStorage.getItem('info'));
}

function emailExist() {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].email.toLowerCase() == signUpEmail.value.toLowerCase()) {
            return false
        }
    }
}

function add() {
    if (signUpName.value == "" || signUpName.value == "" || signUpPassword.value == "") {
        document.getElementById("invaledData").innerHTML = `<p class="text-danger">All Input Is Required</p>`
    }
    if (emailExist() == false) {
        document.getElementById("invaledData").innerHTML = `<p class="text-danger">email already exists</p>`
    }
    else {
        var signUpInfo = {
            name: signUpName.value,
            email: signUpEmail.value,
            password: signUpPassword.value
        }
        arr.push(signUpInfo);
        document.getElementById("invaledData").innerHTML = `<p class="text-success">Success</p>`
        location = "../index.html"
        localStorage.setItem('info', JSON.stringify(arr));
    }
}

function logIn() {
    if (signInEmail.value == "" || signInPassword.value == "") {
        document.getElementById("invaledData").innerHTML = `<p class="text-danger">All Input Is Required</p>`
    } else {
        for (var i = 0; i < arr.length; i++) {
            if (signInEmail.value == arr[i].email && signInPassword.value == arr[i].password) {
                localStorage.setItem('userName', arr[i].name);
                location = '../Assignment-js4/home/index.html'
            }
        }
    }
}
