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

  //chama a função que pega os dados do formulário
  var form = document.querySelector("#form-adiciona");
  var cao = obtemCaoDoFormulario(form);

  //adiciona o TR e o TD dentro da tabela
  var tabela = document.querySelector("#tabela-adocao");

  //valida se está faltando informações no formulário
  if (cao.nome === "") {
    var faltaNome = document.querySelector("#falta-nome");
    faltaNome.textContent = "Está faltando informar o nome";
  }
  if (cao.idade === "") {
    var faltaIdade = document.querySelector("#falta-idade");
    faltaIdade.textContent = "Está faltando informar a idade";
  }
  if (cao.porte === "") {
    var faltaPorte = document.querySelector("#falta-porte");
    faltaPorte.textContent = "Está faltando informar o porte";
  }
  if (cao.raça === "") {
    var faltaRaca = document.querySelector("#falta-raca");
    faltaRaca.textContent = "Está faltando informar a raça";
  } else {
    //limpa o formulário
    form.reset();

    // chama a função que cria o TR e o TD
    var caoTr = montaTr(cao);

    tabela.appendChild(caoTr);
  }
});
//--------------------------------------------//
//pega o conteúdo dos inputs do formulário
function obtemCaoDoFormulario(form) {
  var cao = {
    nome: form.nome.value,
    idade: form.idade.value,
    porte: form.porte.value,
    raça: form.raca.value,
  };

  return cao;
}
//--------------------------------------------------------//
function montaTr(cao) {
  //cria a linha da tabela
  var caoTr = document.createElement("tr");
  caoTr.classList.add("cao");
  console.log(caoTr);
  var nomeTd = montaTd(cao.nome, "info-nome");
  var idadeTd = montaTd(cao.idade, "info-idade");
  var porteTd = montaTd(cao.porte, "info-porte");
  var racaTd = montaTd(cao.raça, "info-raca");

  //adiciona os espaços (td) dentro da linha(tr) com as informações
  caoTr.appendChild(nomeTd);
  caoTr.appendChild(idadeTd);
  caoTr.appendChild(porteTd);
  caoTr.appendChild(racaTd);

  return caoTr;
}
//---------------------------------------------------------------//
function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}
