var execute = setInterval(function myFn(){
    if(document.getElementById('LoginUserPassword_auth_password')  != null){
        document.getElementById('LoginUserPassword_auth_username').value = '20ucs243';
        document.getElementById('LoginUserPassword_auth_password').value = 'DfaT1487*';
        document.getElementById('UserCheck_Login_Button_span').click();        
    }    

    if(document.getElementById('UserCheck_Logoff_Button_span')!= null){
        setTimeout(function myFn(){
            document.getElementById('UserCheck_Logoff_Button_span').click();
            location='Reset';             
        }, 10800000);
    }         
}, 1000);

