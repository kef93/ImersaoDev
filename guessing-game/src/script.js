var numeroSecreto = parseInt(Math.random() * 11);
var elementoResultado = document.getElementById("resultado");
var chute = parseInt(document.getElementById("valor").value);

function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML =
      "Parabéns, você acertou! O número secreto era " + chute;
  } else if (chute > 10 || chute < 0) {
    elementoResultado = "Atenção! Digite um número de 0 a 10!";
  } else if (chute > numeroSecreto) {
    elementoResultado.innerHTML =
      "Você errou! O número secreto é menor que " + chute;
  } else if (chute < numeroSecreto) {
    elementoResultado.innerHTML =
      "Você errou! O número secreto é maior que " + chute;
  }
}
