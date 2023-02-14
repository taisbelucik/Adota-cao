var inputNome = document.querySelector("#nome");
inputNome.addEventListener("keypress", function (e) {
  var keyCode = e.keyCode ? e.keyCode : e.which;

  if (keyCode > 47 && keyCode < 58) {
    e.preventDefault();
  }
});

var inputRaca = document.querySelector("#raca");
inputRaca.addEventListener("keypress", function (e) {
  var keyCode = e.keyCode ? e.keyCode : e.which;

  if (keyCode > 47 && keyCode < 58) {
    e.preventDefault();
  }
});
