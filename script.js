document.addEventListener("DOMContentLoaded", function () {
  var loginDiv = document.getElementById("login");
  var cadastrarDiv = document.getElementById("cadastrar");
  var trocaLink = document.getElementById("troca");

  // Inicialmente, mostrar a div de login e ocultar a div de cadastro
  loginDiv.style.display = "flex";
  cadastrarDiv.style.display = "none";

  // Adicionar um event listener ao link 'troca'
  trocaLink.addEventListener("click", function () {
    // Alternar a exibição das divs de login e cadastro
    if (loginDiv.style.display === "flex") {
      loginDiv.style.display = "none";
      cadastrarDiv.style.display = "flex";
    } else {
      loginDiv.style.display = "flex";
      cadastrarDiv.style.display = "none";
    }
  });

  document.getElementById("send").addEventListener("click", function () {
    var nome = document.getElementById("nome").value;
    var password = document.getElementById("password").value;

    var data = {
      nome: nome,
      password: password,
    };

    fetch("https://bacend-d4ze.onrender.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          console.log("success");
          window.location.href = "home.html";
        } else {
          // Login falhou, mostrar uma mensagem de erro
          var errorMessageElement = document.getElementById("error-message");
          errorMessageElement.textContent = "Credenciais inválidas";
        }
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  });

  document.getElementById("C_send").addEventListener("click", function () {
    var nome = document.getElementById("C_nome").value;
    var password = document.getElementById("C_password").value;

    var data = {
      nome: nome,
      password: password,
    };

    var errorMessageElement = document.getElementById("C_error-message");

    fetch("https://bacend-d4ze.onrender.com/api/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Mostra a resposta da API no console (opcional)

        // Se a API confirmar o cadastro, redirecione para home.html
        if (data.success) {
          window.location.href = "home.html";
        } else {
          // Mostrar mensagem de erro ao cadastrar usuário
          errorMessageElement.textContent = "Erro ao cadastrar usuário";
        }
      })
      .catch((error) => {
        console.error("Erro:", error);
      });
  });

  // Obtém o botão de login com o ID 'send'
  const loginButton = document.getElementById("send");

  // Adiciona um evento de clique ao botão de login
  loginButton.addEventListener("click", function () {
    // Obtém o valor do input com o ID 'nome'
    const nomeDoJogador = document.getElementById("nome").value;

    // Armazena o valor do input no localStorage
    localStorage.setItem("nomeDoJogador", nomeDoJogador);

    // Redireciona para a página onde você deseja mostrar o nome do jogador
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var troca = document.getElementById("cadastrar");
  var trocadiv = document.getElementById("login");
  var trocaLink1 = document.getElementById("volta");

  // Inicialmente, mostrar a div de login e ocultar a div de cadastro
  troca.style.display = "flex";
  trocadiv.style.display = "none";

  // Adicionar um event listener ao link 'troca'
  trocaLink1.addEventListener("click", function () {
    // Alternar a exibição das divs de login e cadastro
    if (troca.style.display === "flex") {
      troca.style.display = "none";
      trocadiv.style.display = "flex";
    } else {
      troca.style.display = "flex";
      trocadiv.style.display = "none";
    }
  });
});
