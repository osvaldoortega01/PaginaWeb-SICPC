function go(){
            
    if (document.form.password.value=='CONTRASEÑA' && document.form.login.value=='USUARIO'){ 
            document.form.submit(); 
            alert("Datos Correctos.");
        } 
        else{ 
             alert("Porfavor ingrese, nombre de usuario y contraseña correctos."); 
        } 
    } 