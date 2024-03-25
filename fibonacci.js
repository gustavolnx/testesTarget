let numerosVerificados = [];

function checkFibonacci() {
  const num = parseInt(document.getElementById("inputnum").value);
  if (isNaN(num)) {
    document.getElementById("resultado").innerText =
      "Por favor, insira um número válido.";
    return;
  }

  let a = 0;
  let b = 1;
  while (b <= num) {
    if (b === num) {
      document.getElementById(
        "resultado"
      ).innerText = `${num} pertence à sequência de Fibonacci.`;
      numerosVerificados.push(num);
      updateVerificados();
      return;
    }
    const temp = b;
    b = a + b;
    a = temp;
  }
  document.getElementById(
    "resultado"
  ).innerText = `${num} não pertence à sequência de Fibonacci.`;
}

function updateVerificados() {
  const verificadosParagraph = document.getElementById("verificados");
  verificadosParagraph.innerText = "Números verificados como Fibonacci: ";
  for (let i = 0; i < numerosVerificados.length; i++) {
    if (i > 0) {
      verificadosParagraph.innerText += ", ";
    }
    verificadosParagraph.innerText += numerosVerificados[i];
  }
}
