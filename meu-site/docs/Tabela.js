window.onload = function () {
  const tabela = document.querySelector("#tabela-respostas tbody");
  const lista = JSON.parse(localStorage.getItem("respostasUsuarios")) || [];

  lista.forEach(resposta => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${resposta.nome}</td>
      <td>${resposta.sabor}</td>
      <td>${resposta.preco}</td>
      <td>${resposta.saude}</td>
      <td>${resposta.mercado}</td>
      <td>${resposta.preferencia}</td>
    `;
    tabela.appendChild(row);
  });

  // Botão excluir sempre visível
  document.getElementById("excluir").style.display = "block";

  document.getElementById("excluir").addEventListener("click", function () {
    localStorage.removeItem("respostasUsuarios");
    location.reload();
  });
};
