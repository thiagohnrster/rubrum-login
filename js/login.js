document.addEventListener("DOMContentLoaded", function() {
    var formLogin = document.querySelector(".form-login");
    var formPwdForgot = document.querySelector(".form-password-forgot");
    var emailRegex = /^([a-z0-9_\.\-])+\@(([a-z0-9\-])+\.)+([a-z0-9]{2,4})+$/;
    var errorDOM = document.createElement('span');
    var btnSubmit = document.querySelectorAll('.btn-submit');
    
    errorDOM.classList.add('error-span');
    	
    function formLoginValidate() {
    	if (document.getElementById("usrEmail").value === "" || !emailRegex.test(document.getElementById("usrEmail").value)) {
            formLogin.classList.add("validate-error");
            document.querySelector("label[for='usrEmail']").appendChild(errorDOM);
            errorDOM.textContent = "Verifique o preenchimento do campo.";
            document.querySelector("label[for='usrEmail']").classList.add("has-error");
            document.getElementById("usrEmail").focus();
            
            return false;
        } else if (document.getElementById("pwdSenha").value === "") {
            formLogin.classList.add("validate-error");
            document.querySelector("label[for='usrEmail']").classList.remove("has-error");
            document.querySelector("label[for='pwdSenha']").appendChild(errorDOM);
            errorDOM.textContent = "Verifique o preenchimento do campo.";
            document.querySelector("label[for='pwdSenha']").classList.add("has-error");
            document.getElementById("pwdSenha").focus();
            
            return false;
        }

        errorDOM.textContent = "";
            
        document.querySelector("label[for='usrEmail']").classList.remove("has-error");
        document.querySelector("label[for='pwdSenha']").classList.remove("has-error");
        
        formLogin.submit();
    }

    function formPwdForgotValidate() {
        if (document.getElementById("usrLoginEmail").value === "" || !emailRegex.test(document.getElementById("usrLoginEmail").value)) {
            formPwdForgot.classList.add("validate-error");
            document.querySelector("label[for='usrLoginEmail']").appendChild(errorDOM);
            errorDOM.textContent = "Verifique o preenchimento do campo.";
            document.querySelector("label[for='usrLoginEmail']").classList.add("has-error");
            document.getElementById("usrLoginEmail").focus();

            return false;
        }

        errorDOM.textContent = "";
        
        document.querySelector("label[for='usrLoginEmail']").classList.remove("has-error");
        document.querySelector(".reset-password .btn-txt strong").textContent = "Enviando";
        document.querySelector(".reset-password").disabled = true;
        document.querySelector(".reset-password .icon-btn").className += "fa fa-circle-o-notch fa-spin";
        
        setTimeout(function () {
            formPwdForgot.submit();
        }, 3000);
    }
    
    for (var i = 0; i < btnSubmit.length; i++) {
        btnSubmit[i].addEventListener('click', function(event) {
            event.preventDefault();

            $('.label-input').remove(errorDOM);

            document.addEventListener("animationend", function(event) {
                if (event.animationName === "nono") {
                    formLogin.classList.remove("validate-error");
                    formPwdForgot.classList.remove("validate-error");
                }
            });
        });
    }

    document.querySelector(".sign-in").addEventListener("click", formLoginValidate);
    document.querySelector(".reset-password").addEventListener("click", formPwdForgotValidate);
});