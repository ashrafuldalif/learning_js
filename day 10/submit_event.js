var form=document.getElementById("form");
var nam=form.getElementById("name");
var email=form.getElementById("email");
var pass=form.getElementById("password");
console.log(form);
console.log(nam);
console.log(email);
console.log(pass);
form.addEventListener("submit",getInfo);
function getInfo(e){
        e.preventDefault();

        // console.log("Name :"+nam.value);
        // console.log("Email :" + email.value);
        // console.log("Password :" + pass.value);

        const userInfo={
                Name : nam.value,
                Email : email.value,
                Password : pass.value
        }
        console.log(userInfo);
        nam.value='';
        email.value='';
        password.value='';
}
