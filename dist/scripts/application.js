document.addEventListener("DOMContentLoaded", function() {
    // Array com frases motivacionais
    const frases = [
        "🌟 Acredite em você! Grandes conquistas começam com pequenos passos.",
        "💖 Sua força é maior do que você imagina. Continue em frente!",
        "🌿 A vida é feita de ciclos, e cada dia é uma nova chance de recomeçar.",
        "💡 Seu esforço hoje define suas vitórias de amanhã!",
        "✨ Você é capaz, incrível e merece tudo de bom!",
        "📚 Aprenda com o passado, viva o presente e construa um futuro brilhante."
    ];

    // Selecionando o botão e o elemento de exibição da frase
    const botao = document.getElementById("gerarFrase");
    const fraseElemento = document.getElementById("frase");

    // Verificando se o botão e o elemento estão no DOM
    if (botao && fraseElemento) {
        // Adicionando evento de clique ao botão
        botao.addEventListener("click", function() {
            // Gerando um índice aleatório para selecionar uma frase
            const randomIndex = Math.floor(Math.random() * frases.length);
            // Definindo o conteúdo da frase
            fraseElemento.textContent = frases[randomIndex];
        });
    } else {
        console.error("Botão ou elemento de frase não encontrados no DOM!");
    }
});
