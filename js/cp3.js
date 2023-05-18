document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
  
    validarPrimeiroNome();
    validarSegundoNome();
    validarEmail();
    validarSenha();
    validarConfirmacaoSenha();
  
    // Se houver algum campo inválido, retorna false para impedir o envio do formulário
    if (document.querySelectorAll('.erro').length > 0) {
      return false;
    }
  
    // Aqui você pode prosseguir com o envio do formulário ou realizar outras ações desejadas.
    // Por exemplo, você pode enviar os dados para um servidor usando AJAX ou realizar outras manipulações.
  
    alert('Formulário enviado com sucesso!');
    // Aqui você pode fazer outras ações, como limpar os campos do formulário ou redirecionar para outra página.
  });
  
  function validarPrimeiroNome() {
    const primeiroNomeInput = document.getElementById('primeiroNome');
    const valor = primeiroNomeInput.value;
  
    if (valor.length < 5) {
      alert('O primeiro nome deve ter no mínimo 5 caracteres.');
    }
  }
  
  function validarSegundoNome() {
    const segundoNomeInput = document.getElementById('segundoNome');
    const valor = segundoNomeInput.value;
  
    if (valor.length < 5) {
      alert('O segundo nome deve ter no mínimo 5 caracteres.');
    }
  }
  
  function validarEmail() {
    const emailInput = document.getElementById('email');
    const valor = emailInput.value;
  
    if (valor.length < 5 || !valor.includes('@')) {
      alert('O email deve ter no mínimo 5 caracteres e conter o caractere "@".');
    }
  }
  
  function validarSenha() {
    const senhaInput = document.getElementById('senha');
    const valor = senhaInput.value;
  
    if (valor.length < 6 || valor.length > 8) {
      alert('A senha deve ter entre 6 e 8 caracteres.');
    }
  }
  
  function validarConfirmacaoSenha() {
    const senhaInput = document.getElementById('senha');
    const confirmacaoSenhaInput = document.getElementById('confirmacaoSenha');
    const senha = senhaInput.value;
    const confirmacaoSenha = confirmacaoSenhaInput.value;
  
    if (senha !== confirmacaoSenha) {
      alert('A confirmação de senha não corresponde à senha informada.');
    }
  }




function alternarDarkMode() {
    const stylesheet = document.getElementById('darkModeStylesheet');

    if (stylesheet.getAttribute('href')) {
        stylesheet.removeAttribute('href');
    } else {
        stylesheet.setAttribute('href', 'dark-mode.css');
    }
}
