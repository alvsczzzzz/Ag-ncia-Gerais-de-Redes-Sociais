document.getElementById("orcamentoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Pegando os valores do formulário
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const marca = document.getElementById("marca").value;
    const tamanho = document.getElementById("tamanho").value;
    const detalhes = document.getElementById("detalhes").value;

    // Salvando no Firebase (depois configuramos)
    console.log("Orçamento enviado:", { nome, email, marca, tamanho, detalhes });

    // Redirecionando para o chat.html com os dados na URL
    window.location.href = `chat.html?nome=${encodeURIComponent(nome)}&marca=${encodeURIComponent(marca)}&tamanho=${encodeURIComponent(tamanho)}&detalhes=${encodeURIComponent(detalhes)}`;
});
