var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {
  console.log(this.value);
  var caes = document.querySelectorAll(".cao");

  if (this.value.length > 0) {
    console.log("tem algo digitado");
    for (var i = 0; i < caes.length; i++) {
      var cao = caes[i];
      var tdNome = cao.querySelector(".info-nome");
      var nome = tdNome.textContent;
      var expressao = new RegExp(this.value, "i");
      if (!expressao.test(nome)) {
        cao.classList.add("invisivel");
      } else {
        cao.classList.remove("invisivel");
      }
    }
  } else {
    for (var i = 0; i < caes.length; i++) {
      var cao = caes[i];
      cao.classList.remove("invisivel");
    }
  }
});
