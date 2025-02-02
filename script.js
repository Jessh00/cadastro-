// Adiciona um listener para o envio do formulário
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    // Impede o envio padrão do formulário
    event.preventDefault();

    // Verifica se todos os campos estão preenchidos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if (nome === '' || email === '' || senha === '') {
        alert('Por favor, preencha todos os campos.');
    } else {
        // Redireciona para a página de boas-vindas sem mostrar a mensagem de sucesso
        window.location.replace('dashboard.html'); // Redireciona para a página de boas-vindas sem deixar histórico
    }
});