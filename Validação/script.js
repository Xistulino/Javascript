function validar(){
 
  const nome = document.getElementById('txtNome').value;

  if(nome.length <= 2){
    alert("Seu nome é muito curto, digite o nome completo completo");
  }else{
    alert("Cadastro com sucesso");
  }

  const email = document.getElementById('email').value;

  if(email.length = "@"){
    alert("Faltou o @ do seu e-mail. Por favor consertar");
  }else{
    alert("E-mail correto");
  }

  const date = document.getElementById(date).value;

  if(data.length <= 2005){
    alert("Você é menor de idade");
  }else{
    alert("Você é maior de idade");
  }



}