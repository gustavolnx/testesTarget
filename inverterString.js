function inverterString() {
  var stringOriginal = document.getElementById("inputString").value;
  var stringInvertida = "";

  for (var i = stringOriginal.length - 1; i >= 0; i--) {
    stringInvertida += stringOriginal[i];
  }

  document.getElementById("resultado2").textContent =
    "String Invertida: " + stringInvertida;
}
