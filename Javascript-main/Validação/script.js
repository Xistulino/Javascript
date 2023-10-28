function validar(){
 
  const nome = document.getElementById('txtNome').value;
  const email = document.getElementById('email').value;
  const nascimento = document.getElementById("nascimento").value;

  if(nome.length < 2){
    alert("Seu nome é muito curto, digite o nome completo completo");
  }

  if(email.length == 0){
    alert("Faltou preencher o campo");

  }if(!email.includes('@')){
    alert("Seu email está incorreto!")
  }

  if(nascimento > '2005-01-01'){
    alert("Você é menor de idade");
  }



}