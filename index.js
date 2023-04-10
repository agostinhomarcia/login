const usuariosRegistrados = [
  { usuario: "marcia", senha: "123" },
  { usuario: "usuario2", senha: "senha2" },
  // Adicione mais usuários registrados aqui
];

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let usuario = document.getElementById("usuarioInput").value;
    let senha = document.getElementById("senhaInput").value;

    // Verifica se o usuário e senha estão registrados
    const usuarioRegistrado = usuariosRegistrados.find(
      (u) => u.usuario === usuario && u.senha === senha
    );

    if (usuarioRegistrado) {
      alert("Login bem sucedido! Redirecionando para a página de perfil...");
      window.open(
        "https://www.linkedin.com/in/marcia-agostinho-developer/",
        "_blank"
      );
    } else {
      document.getElementById("mensagemErro").textContent =
        "Usuário ou senha incorretos.";
    }
  });
