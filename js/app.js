var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");

btnSignin.addEventListener("click", function () {
    body.className = "sign-in-js";
});

btnSignup.addEventListener("click", function (){
    body.className = "sign-up-js";
});

/* Animação CSS */

@keyframes slidein {
    from {
      margin-left: 100%;
      width: 300%;
    }
  
    to {
      margin-left: 0%;
      width: 100%;
    }
  }