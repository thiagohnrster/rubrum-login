document.addEventListener("DOMContentLoaded", function() {
    var btnForgot = document.querySelector("#pwdForgot");
    var btnEnter = document.querySelector("#enter");
    var body = document.querySelector("body");

    btnForgot.addEventListener("click", function() {
        document.querySelector("label[for='usrEmail']").classList.remove("has-error");
        document.querySelector("label[for='pwdSenha']").classList.remove("has-error");
        document.getElementById("usrEmail").value = "";
        document.getElementById("pwdSenha").value = "";

        body.className = "content-second-js";

        if (document.querySelector("label[for='usrEmail'] .error-span")) {
            $("label[for='usrEmail'] .error-span").remove();
        }

        if (document.querySelector("label[for='pwdSenha'] .error-span")) {
            $("label[for='pwdSenha'] .error-span").remove();
        }
    });

    btnEnter.addEventListener("click", function() {
        document.querySelector("label[for='usrLoginEmail']").classList.remove("has-error");
        document.getElementById("usrLoginEmail").value = "";

        body.className = "content-first-js";

        if (document.querySelector("label[for='usrLoginEmail'] .error-span")) {
            $("label .error-span").remove();
        }
    });
});