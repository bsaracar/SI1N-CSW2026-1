function calcularIdade() {
    // 1. Pega o valor que o usuário digitou no campo de texto
    let campoAno = document.getElementById('anoNascimento');
    let anoNascimento = Number(campoAno.value);
    
    // 2. Pega automaticamente o ano atual do relógio do computador
    let anoAtual = new Date().getFullYear();
    
    // 3. Pega o elemento onde o resultado será exibido
    let elementoResultado = document.getElementById('resultado');

    // 4. Validações básicas (campo vazio ou anos impossíveis)
    if (campoAno.value === "") {
        elementoResultado.innerText = "Por favor, digite um ano!";
        return;
    }
    if (anoNascimento > anoAtual || anoNascimento < 1900) {
        elementoResultado.innerText = "Digite um ano válido!";
        return;
    }

    // 5. Faz a conta de subtração
    let idade = anoAtual - anoNascimento;

    // 6. Mostra o resultado final na tela
    elementoResultado.innerText = "Você tem " + idade + " anos";
}