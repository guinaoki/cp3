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
    const segundoNome = document.getElementById('segundoNome').value;
    const erroSegundoNome = document.getElementById('erroSegundoNome');

    if (segundoNome.length < 5) {
        erroSegundoNome.innerHTML = 'O Segundo Nome deve conter no mínimo 5 caracteres.';
    } else {
        erroSegundoNome.innerHTML = '';
    }
}

function validarEmail() {
    const email = document.getElementById('email').value;
    const erroEmail = document.getElementById('erroEmail');

    if (email.length < 5) {
        erroEmail.innerHTML = 'O Email deve conter no mínimo 5 caracteres.';
    } else if (!email.includes('@')) {
        erroEmail.innerHTML = 'O Email deve conter o caractere "@"';
    } else {
        erroEmail.innerHTML = '';
    }
}

function validarSenha() {
    const senha = document.getElementById('senha').value;
    const confirmacaoSenha = document.getElementById('confirmacaoSenha').value;
    const erroSenha = document.getElementById('erroSenha');

    if (senha.length < 6 || senha.length > 8) {
        erroSenha.innerHTML = 'A Senha deve conter entre 6 e 8 caracteres.';
    } else if (senha !== confirmacaoSenha) {
        erroSenha.innerHTML = 'A Confirmação de Senha não corresponde à senha digitada.';
    } else {
        erroSenha.innerHTML = '';
    }
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


function alternarDarkMode() {
    const stylesheet = document.getElementById('darkModeStylesheet');

    if (stylesheet.getAttribute('href')) {
        stylesheet.removeAttribute('href');
    } else {
        stylesheet.setAttribute('href', 'dark-mode.css');
    }
}
