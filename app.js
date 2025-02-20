let amigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    // Valida a entrada
    if (nomeAmigo === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(nomeAmigo);
    inputAmigo.value = '';

    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    // Limpa a lista para evitar duplicatas
    listaAmigos.innerHTML = '';

    // Percorre o array 'amigos' utilizando um loop for
    for (let i = 0; i < amigos.length; i++) {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigos[i];
        listaAmigos.appendChild(itemLista);
    }
}

function sortearAmigo() {
    // Verifica se há amigos no array
    if (amigos.length === 0) {
        alert('Não há amigos para sortear!');
        return;
    }

    // Gera um índice aleatório utilizando Math.random() e Math.floor()
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Atualiza o conteúdo do elemento de resultado
    const elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = amigoSorteado;
}

