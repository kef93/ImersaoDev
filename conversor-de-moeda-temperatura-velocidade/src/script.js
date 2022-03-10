//FUNÇÃO CONVERTER MOEDA
function converterMoeda() {
	const valorReal = parseFloat(document.getElementById("valor").value);
	const valorDolar = 5.0;
	const valorEuro = 5.5;
	const valorBtc = 210000.0;

	const convertidoDolar = (valorReal / valorDolar).toFixed(2);
	const convertidoEuro = (valorReal / valorEuro).toFixed(2);
	const convertidoBtc = (valorReal / valorBtc).toFixed(6);

	document.getElementById(
		"resultado_txt_dol"
	).innerHTML = `$ ${convertidoDolar}`;
	document.getElementById("resultado_txt_eur").innerHTML = `€ ${convertidoEuro}`;
	document.getElementById(
		"resultado_txt_BTC"
	).innerHTML = `BTC ${convertidoBtc}`;
}

//FUNÇÃO CONVERTER TEMPERATURA
function converterTemperatura() {
	const tempCelsius = parseFloat(document.getElementById("tempC").value);
	const tempKelvin = (tempCelsius + 273).toFixed(2);
	const tempFahrenheit = (1.8 * tempCelsius + 32).toFixed(2);

	document.getElementById("resultado_txt_kelvin").innerHTML = `${tempKelvin}`;
	document.getElementById(
		"resultado_txt_fahrenheit"
	).innerHTML = `${tempFahrenheit}`;
}

//FUNÇÃO CONVERTER VELOCIDADE
function converterVelocidade() {
	const km = parseFloat(document.getElementById("km").value);
	const anoluz = 9460536207068.016;

	const tempoConvertido = (km / anoluz).toFixed(1);

	document.getElementById(
		"resultado_txt_anoluz"
	).innerHTML = `Você levará ${tempoConvertido} ano-luz`;
}
