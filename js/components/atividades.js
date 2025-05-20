
  const form = document.querySelector('.atividade-form');
  const feedback = document.querySelector('.feedback');

  const respostasCorretas = ["wake", "take", "have", "go", "get"];

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const respostasUsuario = [
      form.resposta1.value.trim().toLowerCase(),
      form.resposta2.value.trim().toLowerCase(),
      form.resposta3.value.trim().toLowerCase(),
      form.resposta4.value.trim().toLowerCase(),
      form.resposta5.value.trim().toLowerCase()
    ];

    let acertos = 0;

    respostasUsuario.forEach((resposta, i) => {
      if (resposta === respostasCorretas[i]) {
        acertos++;
      }
    });

    if (acertos === 5) {
      feedback.textContent = "🎉 Parabéns! Você acertou tudo!";
      feedback.style.color = "green";
    } else {
      feedback.textContent = `Você acertou ${acertos} de 5. Tente novamente!`;
      feedback.style.color = "orange";
    }
  });

