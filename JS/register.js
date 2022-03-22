function go(){
            
    if (document.form.password.value=='' || document.form.user.value==''|| document.form.email.value==''|| document.form.Nombre.value==''|| document.form.Direccion.value==''|| document.form.edad.value=='' ){ 
            alert("Porfavor rellene todos los espacios en blanco");
        } 
        else{ 
            document.form.submit(); 
             alert("Gracias por registrarse, redireccionandolo a la pagina de login"); 
        } 
    } 