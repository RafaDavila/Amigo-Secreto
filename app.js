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
    // Seleciona o elemento da lista onde os nomes serão exibidos
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpa o conteúdo atual da lista para evitar duplicatas
    listaAmigos.innerHTML = '';

    // Percorre o array 'amigos' utilizando um loop for
    for (let i = 0; i < amigos.length; i++) {
        // Cria um novo elemento <li> para cada amigo
        const itemLista = document.createElement('li');
        itemLista.textContent = amigos[i];

        // Adiciona o elemento <li> à lista
        listaAmigos.appendChild(itemLista);
    }
}

