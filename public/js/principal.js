// var cao = document.querySelector("#primeiro-cao");

// var tdIdade = cao.querySelector(".info-idade");
// var idade = tdIdade.textContent;

// if (idade < 0 || idade > 30) {
//   console.log("idade inválida");
// }

var botaoAdicionar = document.querySelector("#adicionar-cao");

botaoAdicionar.addEventListener("click", function (event) {
  //chama a função que pega os dados do formulário
  const form = document.querySelector("#form-adiciona");
  const cao = obtemCaoDoFormulario(form);

  //adiciona o TR e o TD dentro da tabela
  const tabela = document.querySelector("#tabela-adocao");

  existeErro = false;

  //valida se está faltando informações no formulário
  if (cao.nome === "") {
    const faltaNome = document.querySelector("#falta-nome");
    faltaNome.textContent = "Está faltando informar o nome";

    existeErro = true;
  }

  if (cao.soIdade !== "") {
    const idade = Math.sign(cao.soIdade);
    if (idade === -1) {
      const faltaIdade = document.querySelector("#falta-idade");
      faltaIdade.textContent = "A idade não pode ser negativa";
      existeErro = true;
    }
  }

  if (cao.soIdade === "") {
    const faltaIdade = document.querySelector("#falta-idade");
    faltaIdade.textContent = "Informação inválida";
    existeErro = true;
  }

  if (cao.porte === "") {
    const faltaPorte = document.querySelector("#falta-porte");
    faltaPorte.textContent = "Está faltando informar o porte";
    existeErro = true;
  }
  if (cao.raça === "") {
    const faltaRaca = document.querySelector("#falta-raca");
    faltaRaca.textContent = "Está faltando informar a raça";
    existeErro = true;
  }

  if (existeErro === false) {
    //limpa o formulário
    form.reset();

    // chama a função que cria o TR e o TD
    var caoTr = montaTr(cao);

    tabela.appendChild(caoTr);
  }
});
//------------------------------------------------------------------//
// apaga as mensagens de erro quando é digitado no input
function digitaCampo(input) {
  if (input === nome) {
    var spanNome = document.querySelector("#falta-nome");
    spanNome.textContent = "";
  }
  if (input === idade) {
    var spanIdade = document.querySelector("#falta-idade");
    spanIdade.textContent = "";
  }
  if (input === porte) {
    var spanPorte = document.querySelector("#falta-porte");
    spanPorte.textContent = "";
  }

  if (input === raca) {
    var spanRaca = document.querySelector("#falta-raca");
    spanRaca.textContent = "";
  }
}

//--------------------------------------------//
//pega o conteúdo dos inputs do formulário
function obtemCaoDoFormulario(form) {
  const mesEano = `${form.idade.value} ${form.mes_ano.value}`;
  const cao = {
    nome: form.nome.value,
    idade: mesEano,
    soIdade: form.idade.value,
    porte: form.porte.value,
    raça: form.raca.value,
    mesAno: form.mes_ano.value,
  };

  return cao;
}
//--------------------------------------------------------//
function montaTr(cao) {
  //cria a linha da tabela
  var caoTr = document.createElement("tr");
  caoTr.classList.add("cao");
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
