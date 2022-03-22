const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

var sub = document.getElementById("sd");

sub.onclick = function validate(){

    var n = document.getElementById("fn");
    var m = document.getElementById("ps");

    if(n.value=='' ||m.value=='' ){
        alert("Field can't be empty");
}

    else{}

    if(m.value.length<3 || m.value>9){
    alert("Password is not valid");
    }
    var str=n.value.slice(0,1);
    if(str=='_' || str=='$'){
        alert("Username is not valid");
    }

}

function checkEmail(input) {
 
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(input.value.trim()).toLowerCase())) showSuccess(input);
  else showError(input, `${getFieldName(input)} is not valid`);
}



form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkRequired([username, email, password]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordMatch(password, password2);
});