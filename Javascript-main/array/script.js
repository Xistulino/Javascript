function adicionar(){
  const nome = document.getElementById("txtNome").value;
  const listaNomes = ['Ana', 'Beto', 'Caio', 12, true, 10.8];

  for(const item in listaNomes){
    alert(`O valor do item é: ${listaNomes[item]}`);
  }
}