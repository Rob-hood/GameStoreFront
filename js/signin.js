// Implémenter le JS de ma page

const inputNom = document.getElementById("NomInput");
const inputPrenom = document.getElementById("PrenomInput");
const inputEmail = document.getElementById("EmailInput");
const inputPassword = document.getElementById("PasswordInput");
const inputValidationPassword = document.getElementById("ValidatePasswordInput");
const btnValidation = document.getElementById("btn-validation-inscription");

inputNom.addEventListener("keyup", validateForm);
inputPrenom.addEventListener("keyup", validateForm);
inputEmail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidationPassword.addEventListener("keyup", validateForm);

//Function permettant de valider tout le formulaire
function validateForm(){
    const nomOk = valideRequired(inputNom);
    const prenomOk = valideRequired(inputPrenom);
    const mailOk = validateMail(inputEmail);
    const passwordOk = validatePassword(inputPassword);

    if(nomOk && prenomOk && mailOk && passwordOk){
        btnValidation.disable = false;
    }
    else{
        btnValidation.disable = true;
    }
}

function validatePassword(input){
    //Définir mon regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = input.value;
    if(passwordUser.match(paswordRegex)){
        input.classsList.add("is-valid");
        input.classsList.remove("is-invalid");
        return true;
    }
    else{
        input.classsList.remove("is-valid");
        input.classsList.add("is-invalid");
        return false;
    }
}


function validateMail(input){
    //Définir mon regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if(mailUser.match(emailRegex)){
        input.classsList.add("is-valid");
        input.classsList.remove("is-invalid");
        return true;
    }
    else{
        input.classsList.remove("is-valid");
        input.classsList.add("is-invalid");
        return false;
    }
}

function valideRequired(input){
    if(input.value !=''){
        input.classsList.add("is-valid");
        input.classsList.remove("is-invalid")
        return true;
    }
    else{
        input.classsList.remove("is-valid");
        input.classsList.add("is-invalid");
        return false;
    }
}

console.log(document.getElementById("NomInput"));