var velocidadeCarroApostado = 0;
var velocidadeReducaoOponenteAleatorio = 0;
var velocidadeReducaoOponenteFrente = 0;

function apostar() {
  var saldoAtual = parseFloat(document.getElementById('saldo').innerText);
  var aposta = parseFloat(document.getElementById('aposta').value);
  var pilotoSelecionado = document.getElementById('pilotos').value;

  if (aposta < 5 || aposta > saldoAtual || aposta == isNaN)  {
    alert('Valor de aposta inválido!');
    return;
  }

  var carros = document.querySelectorAll('.carro');
  var vencedor = Math.floor(Math.random() * 5) + 1; // Sorteia o vencedor

  var resultado = document.getElementById('resultado');
  resultado.innerText = '';

  for (var i = 0; i < carros.length; i++) {
    carros[i].style.marginLeft = '0px';
    if (i + 1 === parseInt(pilotoSelecionado)) {
      velocidadeCarroApostado = Math.random() * 1;// Definindo uma velocidade aleatória para o carro apostado
    }
    if (i + 1 === vencedor) {
      carros[i];
    } else {
      carros[i];
    }
  }

  var intervalo = setInterval(function() {
    for (var i = 0; i < carros.length; i++) {
      var marginLeft = parseInt(carros[i].style.marginLeft);
      if (marginLeft >= 600) {
        clearInterval(intervalo);
        if (i + 1 === parseInt(pilotoSelecionado)) {
          resultado.innerText = 'Você ganhou! Dobrou a aposta.';
          document.getElementById('saldo').innerText = saldoAtual + aposta * 2;
        } else {
          resultado.innerText = 'Você perdeu. Tente novamente.';
          document.getElementById('saldo').innerText = saldoAtual - aposta;
        }
        return;
      }
      var passo = Math.floor(Math.random() * 10) + 1; // Movimento aleatório
      if (i + 1 === parseInt(pilotoSelecionado)) {
        passo += velocidadeCarroApostado;
      } else if (Math.random() < 0.1) {
        passo -= velocidadeReducaoOponenteAleatorio;
      } else if (i < 4 && marginLeft > 300 && Math.random() < 0.1) {
        passo -= velocidadeReducaoOponenteFrente;
      }
      carros[i].style.marginLeft = (marginLeft + passo) + 'px';
    }
  }, 50);
}

function comprarItem(preco) {
  var saldoAtual = parseFloat(document.getElementById('saldo').innerText);
  if (saldoAtual < preco) {
    alert('Saldo insuficiente!');
    return;
  }
  switch (preco) {
    case 7:
      velocidadeCarroApostado++;
      break;
    case 5:
      velocidadeReducaoOponenteAleatorio++;
      break;
    case 10:
      velocidadeReducaoOponenteFrente++;
      break;
  }
  document.getElementById('saldo').innerText = saldoAtual - preco;
}
