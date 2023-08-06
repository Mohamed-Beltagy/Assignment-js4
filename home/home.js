var userName = localStorage.getItem('userName');
document.getElementById("userName").innerHTML='Welcome ' + userName;

function logout() {
    localStorage.removeItem('name');
}