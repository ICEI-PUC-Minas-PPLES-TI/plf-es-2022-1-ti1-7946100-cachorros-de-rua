function store(){

    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Por favor, preencha o e-mail');

    }else if(pw.value.length == 0){
        alert('Por favor, preencha a senha');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Por favor, preencha o email e a senha');
    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        window.open("mapa.html");
    }
}

//checking
function check(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    var userRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userPw.value == storedPw){

    window.open("mapa.html");


    }else{
        alert('Login invalido');
    }
}




