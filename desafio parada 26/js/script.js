function validaForm() {
    let idade = document.getElementById('idade').value
    if(isNaN(idade) || idade < 18 || idade > 80){
        alert('idade invalida');
        document.getElementById('idade').focus();
        return false;
    }
    
    let senhavalor = document.getElementById('senha').value.length;
    if(senhavalor < 6){
        alert('senha deve ser maior ou igual a 6')
        return false
    }

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.value.match(mailformat)){
        return true
    }else{            
        alert('email é invalido')
        email.focus()
        return false
    }
    
}
  