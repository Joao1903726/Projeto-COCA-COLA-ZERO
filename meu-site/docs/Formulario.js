document.querySelector("button[type='submit']").addEventListener("click", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const perguntas = ["sabor", "preco", "saude", "mercado", "preferencia"];
    let todasRespondidas = nome !== "";

    const respostas = { nome };

    perguntas.forEach(nomePergunta => {
      const resposta = document.querySelector(`input[name="${nomePergunta}"]:checked`);
      if (!resposta) {
        todasRespondidas = false;
      } else {
        respostas[nomePergunta] = resposta.value;
      }
    });

    if (todasRespondidas) {
      // Recupera lista existente ou cria nova
      let lista = JSON.parse(localStorage.getItem("respostasUsuarios")) || [];
      lista.push(respostas); // adiciona novo usuário
      localStorage.setItem("respostasUsuarios", JSON.stringify(lista));

      // Redireciona para tabela
      window.location.href = "Tabela.html";
    } else {
      alert("Preencha o nome e todas as respostas antes de enviar.");
    }
  });




document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const perguntas = ["sabor", "preco", "saude", "mercado", "preferencia"];
  let todasRespondidas = nome !== "";

  const respostas = { nome };

  perguntas.forEach(pergunta => {
    const resposta = document.querySelector(`input[name="${pergunta}"]:checked`);
    if (!resposta) {
      todasRespondidas = false;
    } else {
      respostas[pergunta] = resposta.value;
    }
  });

  if (todasRespondidas) {
    let lista = JSON.parse(localStorage.getItem("respostasUsuarios")) || [];
    lista.push(respostas);
    localStorage.setItem("respostasUsuarios", JSON.stringify(lista));

    window.location.href = "Tabela.html";
  } else {
    alert("Preencha o nome e todas as respostas antes de enviar.");
  }
});
