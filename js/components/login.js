const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const loginBtn = document.querySelector(".login-btn");
  const lembrarCheck = document.getElementById("remember-me");
  const criarContaBtn = document.getElementById("criarConta");

  // Auto preenche se tiver armazenado
  window.onload = () => {
    const savedEmail = localStorage.getItem("savedEmail");
    const savedPassword = localStorage.getItem("savedPassword");
    if (savedEmail && savedPassword) {
      emailInput.value = savedEmail;
      passwordInput.value = savedPassword;
      lembrarCheck.checked = true;
    }
  };

  // Login
  loginBtn.addEventListener("click", () => {
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
      if (lembrarCheck.checked) {
        localStorage.setItem("savedEmail", email);
        localStorage.setItem("savedPassword", password);
      } else {
        localStorage.removeItem("savedEmail");
        localStorage.removeItem("savedPassword");
      }

      alert("Login bem-sucedido!");
      // Redirecionar para a área logada:
      // window.location.href = "dashboard.html";
    } else {
      alert("Email ou senha incorretos!");
    }
  });

  // Criar Conta
  criarContaBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const email = prompt("Digite seu email:");
    const password = prompt("Crie uma senha:");

    if (email && password.length >= 4) {
      localStorage.setItem("userEmail", email.trim());
      localStorage.setItem("userPassword", password.trim());
      alert("Conta criada com sucesso! Agora é só logar.");
    } else {
      alert("Preencha um email e senha válidos (mínimo 4 caracteres).");
    }
  });
