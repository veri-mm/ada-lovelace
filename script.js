document.getElementById("send-button").addEventListener("click",validForm)

var userName = document.getElementById("user-name");
var userEmail = document.getElementById("user-email");
var userTel = document.getElementById("user-tel");

function validForm(){
    if(userName.value != "" && userEmail.value != "" && userTel.value != ""){
        alert("Você receberá nossas mensagens por email!")
    }else{
        alert("Preencha todos os campos")
    }
}
