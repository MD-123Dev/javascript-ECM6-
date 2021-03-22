//**19-03-2021 MD-123Dev */

function emalivalider(email){
    
    if(email.match(/^[a-z A-Z 0-9 _]+@(gmail)\.com$/)){
        console.log("email is valide ");
    }
    else{
         console.log("email is not valide ");
    }

}

//var emailtest = "googe_1152@gmail.com";
var emailtest = "googe_1152gmail.com";
//var emailtest = "googe_1152@gmail";

emalivalider(emailtest);


///************************************************************************ 2 ***** */


function checkIsBeginUpperCaseAndString(name){
   if(name.match(/^[A-Z][A-Z a-z]+$/)){
        console.log(" name is valide ");
    }
    else{
         console.log(" name is not valide ");
    }

}

var nametest = "Ali";
//var nametest = "Al1112LL23";
//var nametest = "ali";

checkIsBeginUpperCaseAndString(nametest);


//************************************************** ** 3 ****************************** */


//**password 14 cratcetr and must be 0-9 and @ _ A-Z a-z */
function checkPassword(password){
   if(password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,14}$/)){
        console.log(" password  valide ");
    }
    else{
         console.log(" name is not valide  must be @ A-Z a-z 1-9 ");
    }

}

//var passwordtest = "ggh41@Ajjjh425";
//var passwordtest = "Al1112LL23";
var passwordtest = "12345678952";
//var passwordtest = "1234^$5678952";

checkPassword(passwordtest);