// Exibir mensagem ao clicar no botão “Saiba mais”
document.getElementById("botao-servico").addEventListener("click", function() { 
    document.getElementById("mensagem-servico").innerText = "Aqui estão mais detalhes sobre nossos serviços!"; 
}); 

// Exibir uma mensagem ao enviar o formulário de contato
document.getElementById("contato-form").addEventListener("submit", function(event) { 
    event.preventDefault();  // Evita o envio do formulário para teste 
    alert("Obrigado por entrar em contato! Responderemos em breve."); 
});