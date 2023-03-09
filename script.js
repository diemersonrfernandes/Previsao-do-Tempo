//variáveis- um espaço da memória do pc que guardamos algo
//function- é um trecho de código que só é executado quando é chamado

let chave = "cebcd482eda57fa9a6714c1c2ba91885"

function colocarNaTela(dados) {
  console.log(dados)
  document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
  document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + "°C"
  document.querySelector(".descricao").innerHTML = dados.weather[0].description
  document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
  document.querySelector(".umi").innerHTML = "Umidade: " + dados.main.humidity + "%"
}

async function buscarCidade(cidade) {
  let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
    cidade +
    "&appid=" +
    chave +
    "&lang=pt_br" +
    "&units=metric"
  )
    .then(resposta => resposta.json())

  colocarNaTela(dados)
}

function cliqueiNoBotao() { //função
  let cidade = document.querySelector(".input-cidade").value //cria a variavel, apelido do html é document

  buscarCidade(cidade)
}