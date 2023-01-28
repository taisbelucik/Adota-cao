// var cao = document.querySelector("#primeiro-cao");

// var tdIdade = cao.querySelector(".info-idade");
// var idade = tdIdade.textContent;

// if (idade < 0 || idade > 30) {
//   console.log("idade inválida");
// }

// console.log(idade);

var botaoAdicionar = document.querySelector("#adicionar-cao");

botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();
  var form = document.querySelector("#form-adiciona");

  //pega o conteúdo dos inputs do formulário
  var nome = form.nome.value;
  var idade = form.idade.value;
  var porte = form.porte.value;
  var raça = form.raça.value;

  //cria a linha da tabela
  var caoTr = document.createElement("tr");

  // cria os espaços da tabela
  var nomeTd = document.createElement("td");
  var idadeTd = document.createElement("td");
  var porteTd = document.createElement("td");
  var raçaTd = document.createElement("td");

  // pega o conteúdo dos inputs do formulário e coloca nos espaços da linha
  nomeTd.textContent = nome;
  idadeTd.textContent = idade;
  porteTd.textContent = porte;
  raçaTd.textContent = raça;

  //adiciona os espaços (td) dentro da linha(tr) com as informações
  caoTr.appendChild(nomeTd);
  caoTr.appendChild(idadeTd);
  caoTr.appendChild(porteTd);
  caoTr.appendChild(raçaTd);

  var tabela = document.querySelector("#tabela-adocao");

  tabela.appendChild(caoTr);

  console.log(caoTr);
});
