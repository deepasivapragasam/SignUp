function validate()
{
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    var upperCaseLetters = /[A-Z]/g;
    var lowerCaseLetters = /[a-z]/g;
    var numbers = /[0-9]/g;
    var emailPattern=/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/g;
    var valid=true;
    if(name=="")
    {
       document.getElementById("nameError").innerHTML="Please enter the name";
       valid=false;
    }
    else
    {
        document.getElementById("nameError").innerHTML="";
    }
    if(email=="")
    {
       document.getElementById("emailError").innerHTML="Please enter the email";
       valid=false;
    }
    else if(!email.match(emailPattern))
    {
       document.getElementById("emailError").innerHTML="Please enter the valid email";
       valid=false;
    }
    else
    {
        document.getElementById("emailError").innerHTML="";
    }
    if(password=="")
    {
       document.getElementById("passwordError").innerHTML="Please enter the password";
       valid=false;
    }
    else if(!password.match(upperCaseLetters))
    {
        document.getElementById("passwordError").innerHTML="Please include one upperCaseLetter";
        valid=false;
    }
    else if(!password.match(lowerCaseLetters))
    {
        document.getElementById("passwordError").innerHTML="Please include one lowerCaseLetter";
        valid=false;
    }
    else if(!password.match(numbers))
    {
        document.getElementById("passwordError").innerHTML="Please include number";
        valid=false;
    }
    else if(password.length<7)
    {
        document.getElementById("passwordError").innerHTML="Please include seven characters atleast";
        valid=false;
    }
    else
    {
        document.getElementById("passwordError").innerHTML="";
    }
    return valid;
}