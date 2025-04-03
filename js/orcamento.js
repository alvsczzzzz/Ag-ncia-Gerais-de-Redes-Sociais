document.getElementById('orcamento-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const marca = document.getElementById('marca').value;
    const tamanho = document.getElementById('tamanho').value;
    const detalhes = document.getElementById('detalhes').value;

    const url = `chat.html?nome=${encodeURIComponent(nome)}&email=${encodeURIComponent(email)}&marca=${encodeURIComponent(marca)}&tamanho=${encodeURIComponent(tamanho)}&detalhes=${encodeURIComponent(detalhes)}`;
    
    window.location.href = url;
});
