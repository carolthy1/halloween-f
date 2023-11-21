document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".contain img");
  const message = document.getElementById("message");
  const scoreDisplay = document.getElementById("score");
  const winMessage = document.getElementById("win-message");
  let score = 0;
  let foundCount = 0;

  // Recuperar pontuação anterior (se existir)
  const storedScore = localStorage.getItem("score");
  if (storedScore) {
    score = parseInt(storedScore, 10);
    updateScore();
  }

  const imageState = {};

  images.forEach((img) => {
    const objectName = img.getAttribute("data-name");
    const objectValue = getRandomValue();

    imageState[objectName] = {
      clicked: false,
      value: objectValue,
    };

    img.addEventListener("click", function () {
      if (!imageState[objectName].clicked) {
        imageState[objectName].clicked = true;

        showMessage(objectName, imageState[objectName].value);

        // Adicionar pontos ao placar
        score += imageState[objectName].value;
        updateScore();

        // Salvar pontuação no localStorage
        localStorage.setItem("score", score);

        setTimeout(() => {
          img.classList.remove("found");
          hideMessage();
        }, 1000);

        foundCount++;
        if (foundCount === images.length) {
          setTimeout(() => {
            showWinMessage();
          }, 500);
        }
      }
    });
  });

  function showMessage(objectName, objectValue) {
    message.textContent = `Objeto encontrado: ${objectName} `;
    message.style.display = "block";
    setTimeout(hideMessage, 2000);
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

  function getRandomValue() {
    return Math.floor(Math.random() * 10) + 1;
  }
});

function redirectToHome() {
  window.location.href = "home.html";
}

document.addEventListener("keydown", function (event) {
  // Verifica se a tecla pressionada é a tecla 'A' e o botão 'Ctrl' (ou 'Command' em MacOS)
  if (
    (event.key === "a" || event.key === "A") &&
    (event.ctrlKey || event.metaKey)
  ) {
    event.preventDefault(); // Impede o comportamento padrão (seleção de texto)
    console.log("Seleção de texto bloqueada.");
  }

  // Verifica se a tecla pressionada é a tecla F12
  if (event.key === "F12") {
    event.preventDefault(); // Impede o comportamento padrão (abertura das DevTools)
    console.log("Tecla F12 bloqueada.");
  }
});

document.addEventListener("contextmenu", function (event) {
  event.preventDefault(); // Impede o menu de contexto (botão direito do mouse)
  console.log("Menu de contexto bloqueado.");
});
window.addEventListener("resize", function () {
  window.resizeTo(window.innerWidth, window.innerHeight);
});
function updateScore() {
  scoreDisplay.textContent = `Pontuação: ${score}`;

  // Salvar pontuação no localStorage
  localStorage.setItem("score", score);
}
