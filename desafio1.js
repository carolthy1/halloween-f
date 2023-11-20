document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".contain img");
  const message = document.getElementById("message");
  const scoreDisplay = document.getElementById("score");
  const winMessage = document.getElementById("win-message");
  let score = 0;
  let foundCount = 0;

  images.forEach((img) => {
    img.addEventListener("click", function () {
      if (!img.classList.contains("found")) {
        img.classList.add("found");
        const objectName = img.getAttribute("data-name");
        showMessage(objectName);

        // Adicionar pontos ao placar
        score += 5;
        updateScore();

        // Remover a classe "found" e ocultar a mensagem automaticamente após 1 segundo
        setTimeout(() => {
          img.classList.remove("found");
          hideMessage();
        }, 1000);

        // Verificar se todos os itens foram encontrados
        foundCount++;
        if (foundCount === images.length) {
          // Exibir mensagem de vitória após encontrar todos os itens
          setTimeout(() => {
            showWinMessage();
          }, 500);
        }
      }
    });
  });

  function showMessage(objectName) {
    message.textContent = `Objeto encontrado: ${objectName}`;
    message.style.display = "block";
    setTimeout(hideMessage, 2000); // A mensagem será exibida por 2 segundos (ajuste conforme necessário)
  }

  function hideMessage() {
    message.style.display = "none";
  }

  function updateScore() {
    scoreDisplay.textContent = `Pontuação: ${score}`;
  }

  function showWinMessage() {
    winMessage.style.display = "block";
  }
});

function redirectToHome() {
  window.location.href = "home.html";
}
