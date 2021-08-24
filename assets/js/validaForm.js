function validaCampos(){
	var nome = document.getElementById("nome").value;
	var email = document.getElementById("email").value;
	var assunto = document.getElementById("assunto").value;
		var msg = document.getElementById("descricao").value;
	if(nome != "" && email != "" && assunto != "" && msg != ""){
		alert("Sua mensagem foi enviada com sucesso");
	}else{
		alert("todos os campos são obrigatórios");
	}
}