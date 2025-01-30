
// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

// Função para atualizar a exibição da lista de amigos
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    amigos.forEach(function(amigo) {
        const item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

// Função para sortear um amigo aleatoriamente e apagar a lista digitada
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione nomes antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Apaga a lista de amigos digitados
    amigos = [];  // Limpa o array
    document.getElementById('listaAmigos').innerHTML = "";  // Remove da tela

    // Exibe o resultado do sorteio
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = "";  // Limpa resultados anteriores
    const itemResultado = document.createElement('li');
    itemResultado.textContent = `Amigo sorteado: ${amigoSorteado}`;
    resultado.appendChild(itemResultado);
}


// Função para reiniciar o sorteio
function reiniciarSorteio() {
    amigos = [];  // Esvazia o array de amigos
    sorteados = []; // Esvazia o array de sorteados (se houver)
    
    // Limpa a exibição das listas
    document.getElementById('listaAmigos').innerHTML = "";
    document.getElementById('resultado').innerHTML = "";
    
    alert("O sorteio foi reiniciado!");
}
