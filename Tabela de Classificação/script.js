var bayern = {
    time: "Bayern",
    vitorias: 9,
    empates: 0,
    derrotas: 0,
    pontos: 0
  };
  var flamengo = {
    time: "Flamengo",
    vitorias: 2,
    empates: 1,
    derrotas: 1,
    pontos: 0
  };
  var avai = {
    time: "Avai",
    vitorias: 1,
    empates: 1,
    derrotas: 2,
    pontos: 0
  };
  var times = [flamengo, avai, bayern];
  
  function calculaPartidas(times) {
    var partidas = times.vitorias + times.derrotas + times.empates;
    return partidas;
  }
  
  function calculaPontos(times) {
    var pontos = times.vitorias * 3 + times.empates;
    return pontos;
  }
  // calculando as partidas dos times
  flamengo.partidas = calculaPartidas(flamengo);
  avai.partidas = calculaPartidas(avai);
  bayern.partidas = calculaPartidas(bayern);
  // calculando os pontos dos times
  flamengo.pontos = calculaPontos(flamengo);
  avai.pontos = calculaPontos(avai);
  bayern.pontos = calculaPontos(bayern);
  
  function exibeTimes(times) {
    var elemento = "";
    for (var i = 0; i < times.length; i++) {
      elemento += "<tr><td>" + times[i].time + "</td>";
      elemento += "<td>" + times[i].vitorias + "</td>";
      elemento += "<td>" + times[i].empates + "</td>";
      elemento += "<td>" + times[i].derrotas + "</td>";
      elemento += "<td>" + times[i].pontos + "</td>";
      elemento += "<td>" + times[i].partidas + "</td>";
      elemento +=
        "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
      elemento +=
        "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
      elemento +=
        "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
      elemento += "</tr>";
    }
    var tabelaTimes = document.getElementById("tabelaTimes");
    tabelaTimes.innerHTML = elemento;
  }
  
  exibeTimes(times);
  // Adicionando Vitoria, Empate e Derrota
  function adicionarVitoria(i) {
    var timeX = times[i];
    timeX.vitorias++;
    timeX.pontos = calculaPontos(timeX);
    timeX.partidas = calculaPartidas(timeX);
    exibeTimes(times);
  }
  
  function adicionarEmpate(i) {
    var timeX = times[i];
    timeX.empates++;
    timeX.pontos = calculaPontos(timeX);
    timeX.partidas = calculaPartidas(timeX);
    exibeTimes(times);
  }
  
  function adicionarDerrota(i) {
    var timeX = times[i];
    timeX.derrotas++;
    timeX.partidas = calculaPartidas(timeX);
    exibeTimes(times);
  }