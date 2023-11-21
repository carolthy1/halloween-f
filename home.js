document.addEventListener("DOMContentLoaded", function () {
  // Obtém o elemento p com o ID 'jogador'
  const jogadorElement = document.getElementById("jogador");

  // Obtém o nome do jogador do localStorage
  const nomeDoJogador = localStorage.getItem("nomeDoJogador");

  // Verifica se o nome do jogador foi armazenado
  if (nomeDoJogador) {
    // Atualiza o conteúdo do elemento 'jogador' com o nome do jogador
    jogadorElement.textContent = nomeDoJogador;
  }
});

function irParaDesafio1() {
  // Exibir messagebox com a mensagem do desafio
  window.alert(
    "Bem-vindo ao Desafio 1!\nEncontre 6 objetos relacionados ao Halloween."
  );

  // Redirecionar para a página do Desafio 1
  window.location.href = "desafio1.html";
}

function irParaDesafio2() {
  window.location.href = "desafio2.html";
}
function abrirCarrinho() {
  window.location.href = "loja.html";
}

document.addEventListener("DOMContentLoaded", function () {
  const scoreDisplay = document.getElementById("score-display");

  const storedScore = localStorage.getItem("score");
  if (storedScore) {
    scoreDisplay.textContent = `Pontuação: ${storedScore}`;
  }
});
