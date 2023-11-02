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
