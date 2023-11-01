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
});
s;
