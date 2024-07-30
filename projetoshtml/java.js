function validateForm() {
    // Validação do nome
    var nome = document.getElementById("nome").value.trim();
    if (nome === "") {
      alert("Por favor, preencha o campo Nome.");
      return false;
    }
  
    // Validação do email
    var email = document.getElementById("email").value.trim();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, insira um endereço de email válido.");
      return false;
    }
  
    // Validação da senha
    var senha = document.getElementById("senha").value;
    if (senha.length < 8) {
      alert("A senha deve ter pelo menos 8 caracteres.");
      return false;
    }
  
    // Verifica se a senha contém pelo menos uma letra maiúscula, um caractere especial e um número
    var regexMaiuscula = /[A-Z]/;
    var regexEspecial = /[!@#$%^&*(),.?":{}|<>]/;
    var regexNumero = /[0-9]/;
    
    if (!regexMaiuscula.test(senha) || !regexEspecial.test(senha) || !regexNumero.test(senha)) {
      alert("A senha deve conter pelo menos uma letra maiúscula, um caractere especial e um número.");
      return false;
    }
  
    // Validação da repetição de senha
    var senhaRepetida = document.getElementById("senhaRepetida").value;
    if (senha !== senhaRepetida) {
      alert("As senhas digitadas não coincidem.");
      return false;
    }
  
    // Bloqueio para menores de 18 anos
    var idade = document.getElementById("idade").value;
    if (idade < 18) {
      alert("Você deve ter pelo menos 18 anos para se cadastrar.");
      return false;
    }
  
    // Validação do estado e cidade
    var estado = document.getElementById("estado").value;
    var cidade = document.getElementById("cidade").value;
    if (estado === "" || cidade === "") {
      alert("Por favor, selecione um estado e uma cidade.");
      return false;
    }
  
    // Envio bem sucedido
    alert("Cadastro realizado com sucesso!");
    return true;
  }
  
  function habilitarCidades() {
    var estado = document.getElementById("estado").value;
    var selectCidade = document.getElementById("cidade");
    selectCidade.disabled = false;
    
    // Limpa as opções existentes
    selectCidade.innerHTML = "";
  
    // Adiciona as cidades correspondentes ao estado selecionado
    switch (estado) {
      case "SP":
        selectCidade.options.add(new Option("São Paulo", "São Paulo"));
        selectCidade.options.add(new Option("Campinas", "Campinas"));
        selectCidade.options.add(new Option("Santos", "Santos"));
        break;
      case "RJ":
        selectCidade.options.add(new Option("Rio de Janeiro", "Rio de Janeiro"));
        selectCidade.options.add(new Option("Niterói", "Niterói"));
        selectCidade.options.add(new Option("Campos dos Goytacazes", "Campos dos Goytacazes"));
        break;
      case "MG":
        selectCidade.options.add(new Option("Belo Horizonte", "Belo Horizonte"));
        selectCidade.options.add(new Option("Uberlândia", "Uberlândia"));
        selectCidade.options.add(new Option("Juiz de Fora", "Juiz de Fora"));
        break;
      case "ES":
        selectCidade.options.add(new Option("Vitória", "Vitória"));
        selectCidade.options.add(new Option("Vila Velha", "Vila Velha"));
        selectCidade.options.add(new Option("Cariacica", "Cariacica"));
        break;
      default:
        selectCidade.options.add(new Option("Selecione um estado primeiro", ""));
        selectCidade.disabled = true;
        break;
    }
  }
  