function ValidateLogin(){
    var username=document.getElementId("username").value;
    var password=document.getElementId("password").value;
    if(username==="admin"&&password==="1234"){
        window.location.href="index.html";
        return false;
        }
    else{
    }
}
