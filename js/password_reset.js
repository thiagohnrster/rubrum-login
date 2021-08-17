document.addEventListener("DOMContentLoaded", function() {
    var formNewPassword = document.querySelector(".form-new-password");
    var errorDOM = document.createElement('span');
    
    errorDOM.classList.add('error-span');

    function formNewPwdValidate() {
        if (document.getElementById('usrNewPassword').value.length < 6) {
            formNewPassword.classList.add("validate-error");
            document.querySelector("label[for='usrNewPassword']").appendChild(errorDOM);
            errorDOM.textContent = "Verifique o preenchimento do campo.";
            document.querySelector("label[for='usrNewPassword']").classList.add("has-error");
            document.getElementById("usrNewPassword").focus();

            return false;
        } else if (document.getElementById('usrNewPasswordConfirm').value.length < 6) {
            formNewPassword.classList.add("validate-error");
            document.querySelector("label[for='usrNewPassword']").classList.remove("has-error");
           	document.querySelector("label[for='usrNewPasswordConfirm']").appendChild(errorDOM);
            errorDOM.textContent = "Verifique o preenchimento do campo.";
            document.querySelector("label[for='usrNewPasswordConfirm']").classList.add("has-error");
            document.getElementById("usrNewPasswordConfirm").focus();

            return false;
        } else if (document.getElementById('usrNewPassword').value !== document.getElementById('usrNewPasswordConfirm').value) {
        	formNewPassword.classList.add("validate-error");
            document.querySelector("label[for='usrNewPassword']").classList.remove("has-error");
           	document.querySelector("label[for='usrNewPasswordConfirm']").appendChild(errorDOM);
            errorDOM.textContent = "Os dados preenchidos não são iguais.";
            document.querySelector("label[for='usrNewPasswordConfirm']").classList.add("has-error");
            document.getElementById("usrNewPasswordConfirm").focus();
        }
    }

    document.querySelector(".save-access").addEventListener('click', function(event) {
        event.preventDefault();

        $('.label-input').remove(errorDOM);

        document.addEventListener("animationend", function(event) {
            if (event.animationName === "nono") {
                formNewPassword.classList.remove("validate-error");
            }
        });
    });

    document.querySelector(".save-access").addEventListener("click", formNewPwdValidate);
});