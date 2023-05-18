function validarPrimeiroNome() {
    const primeiroNomeInput = document.getElementById('primeiroNome');
    const valor = primeiroNomeInput.value;
    const minLength = parseInt(primeiroNomeInput.getAttribute('minlength'));

    if (valor.length < minLength) {
        primeiroNomeInput.style.border = '1px solid red';
        alert('O primeiro nome deve ter no mínimo ' + minLength + ' caracteres.');
    } else {
        primeiroNomeInput.style.border = '';
    }
}

function validarSegundoNome() {
    // Implemente a função de validação para o campo Segundo Nome
    // seguindo o mesmo padrão da função validarPrimeiroNome
}

function validarEmail() {
    // Implemente a função de validação para o campo Email
    // seguindo o mesmo padrão da função validarPrimeiroNome
}

function validarSenha() {
    // Implemente a função de validação para o campo Senha
    // seguindo o mesmo padrão da função validarPrimeiroNome
}

function validarConfirmacaoSenha() {
    const senhaInput = document.getElementById('senha');
    const confirmacaoSenhaInput = document.getElementById('confirmacaoSenha');
    const senha = senhaInput.value;
    const confirmacaoSenha = confirmacaoSenhaInput.value;

    if (senha !== confirmacaoSenha) {
        confirmacaoSenhaInput.style.border = '1px solid red';
        alert('A confirmação de senha não corresponde à senha informada.');
    } else {
        confirmacaoSenhaInput.style.border = '';
    }
}

function validarFormulario() {
    validarPrimeiroNome();
    validarSegundoNome();
    validarEmail();
    validarSenha();
    validarConfirmacaoSenha();

    // Se houver algum campo inválido, retorna false para impedir o envio do formulário
    return !document.querySelectorAll('.invalid').length;
}


function toggleDarkMode() {
    const stylesheet = document.getElementById('darkModeStylesheet');

    if (stylesheet.getAttribute('href')) {
        stylesheet.removeAttribute('href');
    } else {
        stylesheet.setAttribute('href', 'dark-mode.css');
    }
}
