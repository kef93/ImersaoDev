document.getElementsByTagName("h1")[0].style.fontSize = "1";

let nome = "Fabio";

let notaDoPrimeiroBimestre = 7;
let notaDoSegundoBimestre = 8;
let notaDoTerceiroBimestre = 6.3;
let notaDoQuartoBimestre = 10;

let notaFinal =
	(notaDoPrimeiroBimestre +
		notaDoSegundoBimestre +
		notaDoTerceiroBimestre +
		notaDoQuartoBimestre) /
	4;

let notaFixada = notaFinal.toFixed(1);

function criaResultado() {
	if (notaFixada >= 6) {
		console.log(nome + " está APROVADO!! Sua nota final foi: " + notaFixada);
	} else {
		console.log(nome + " está REPROVADO!! Sua nota final foi: " + notaFixada);
	}
}
criaResultado();
