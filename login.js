function validacao(){
	
	var email = document.getElementById('email');

	
	if(email.value.indexOf('') == -1) {
		    document.getElementById("erro").innerHTML= "Favor preencher o campo email";
			document.getElementById('erro').className = 'style-message';
			email.focus();
			return false;
	}
    
	if(email.value.indexOf('@') == -1) {
		document.getElementById("erro").innerHTML= "Formato de email incorreto ";
		document.getElementById('erro').className = 'style-message';
			email.focus();
			return false;
	}
	
	if(email.value.indexOf('.') == -1) {
		document.getElementById("erro").innerHTML= "Formato de email incorreto ";
		document.getElementById('erro').className = 'style-message';
		email.focus();
		return false;
	}


    var senha = document.getElementById('senha');
	
	if(senha.value == '') {
		    document.getElementById("erro").innerHTML= "Favor preencher o campo senha";
			document.getElementById('erro').className = 'style-message';
			senha.focus();
			return false;
	}

    if (senha.length < 8) {    
            document.getElementById("erro").innerHTML= "senha deve ter pelo menos 8 caracteres";
			document.getElementById('erro').className = 'style-message';
			senha.focus();
			return false;
      }
    return true

}

function limpa(){
	document.getElementById('erro').innerHTML = "";
}