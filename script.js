// Função para validar se todos os campos estão preenchidos
function validarFormulario() {
    let valido = true;
    document.querySelectorAll('input').forEach(input => {
        if (input.value.trim() === '') {
            input.classList.add('invalid');
            input.classList.remove('valid');
            valido = false;
        } else {
            input.classList.remove('invalid');
            input.classList.add('valid');
        }
    });
    return valido;
}

// Adiciona evento de input para validação dinâmica
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('input', function() {
        if (this.value.trim() === '') {
            this.classList.add('invalid');
            this.classList.remove('valid');
        } else {
            this.classList.remove('invalid');
            this.classList.add('valid');
        }
    });
});

// Adiciona um listener para o envio do formulário
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    if (!validarFormulario()) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Simula um carregamento para melhor experiência do usuário
    const botao = document.querySelector('button');
    botao.innerHTML = 'Cadastrando...';
    botao.disabled = true;

    setTimeout(() => {
        window.location.replace('dashboard.html');
    }, 2000); // Simula um carregamento de 2 segundos
});
