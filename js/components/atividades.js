document.querySelectorAll('.atividade-form').forEach(form => {
  const feedback = form.querySelector('.feedback');

  const respostasCorretas = form.dataset.respostas
    .split(',')
    .map(resposta => resposta.trim().toLowerCase());

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
      form.classList.add('sucesso'); // ADICIONA estilo visual positivo
    } else {
      feedback.textContent = `Você acertou ${acertos} de 5. Tente novamente!`;
      feedback.style.color = "orange";
      form.classList.remove('sucesso'); // REMOVE o estilo se não for tudo certo
    }
  });
});
