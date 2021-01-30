function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username=="admin" && password=="admin"){
        Redirect();
        alert("Login Successful");
    }
    else{
        alert("Login failed");
    }

    function Redirect() {
        window.location = "./index.html";
     }
}