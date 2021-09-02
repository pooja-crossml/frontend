function validation(){
        var name = document.getElementById('fname').value;
        var mail = document.getElementById('email').value;
        var pass = document.getElementById('password').value;
        var con_pass = document.getElementById('re-password').value;
        var number = document.getElementById('phone').value;
        document.getElementById('nm').innerHTML=name;
        document.getElementById('em').innerHTML=mail;
        document.getElementById('ph').innerHTML=number;
        document.getElementById('ps').innerHTML=pass;


        if(name == ""){
            document.getElementById('uname').innerHTML="* can not be blank";
            return false;
        }
        
        var email_patt = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!email_patt.test(mail)){
            document.getElementById('uemail').innerHTML="Please check the format of the email.Example ab@ab.com";
            return false;
        }

        var pass_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;

        if(!pass.match(pass_pattern)){
        document.getElementById('upassword').innerHTML = "Password must have 1 capital, 1 numeric, 1 special character. length 8-20.";
        return false;
        }


        if (con_pass != pass){
            document.getElementById('urpassword').innerHTML = "Password must match";
            return false;
        }

        var mob_pattern = /^[0-9]{3}?-[0-9]{3}-[0-9]{4}$/;

        if (!mob_pattern.test(number)){
            document.getElementById('mobile').innerHTML="* must be 111-222-4444 format";
            return false;
        }
    }