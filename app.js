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
    listaAmigos.innerHTML = ''; 

    amigos.forEach((amigo) => {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaAmigos.appendChild(itemLista);
    });
}