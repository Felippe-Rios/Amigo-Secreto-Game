let amigos = [];

function adicionar() {
    const campoNome = document.getElementById("nome-amigo");
    const nome = campoNome.value.trim();

    if (nome === "") {
        alert("Digite o nome de um amigo.");
        return;
    }

    const nomeJaAdicionado = amigos.some(
        amigo => amigo.toLowerCase() === nome.toLowerCase()
    );

    if (nomeJaAdicionado) {
        alert("Esse nome já foi adicionado.");
        return;
    }

    amigos.push(nome);
    document.getElementById("lista-amigos").textContent = amigos.join(", ");
    document.getElementById("lista-sorteio").textContent = "";
    campoNome.value = "";
}

function sortear() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para fazer o sorteio.");
        return;
    }

    const amigosEmbaralhados = [...amigos];
    embaralha(amigosEmbaralhados);

    const pares = [];

    for (let i = 0; i < amigosEmbaralhados.length; i++) {
        const proximo = (i + 1) % amigosEmbaralhados.length;
        pares.push(`${amigosEmbaralhados[i]} --> ${amigosEmbaralhados[proximo]}`);
    }

    document.getElementById("lista-sorteio").textContent = pares.join("\n");
}

function reiniciar() {
    amigos = [];
    document.getElementById("lista-amigos").textContent = "";
    document.getElementById("lista-sorteio").textContent = "";
    document.getElementById("nome-amigo").value = "";
}

function embaralha(lista) {
    for (let indice = lista.length; indice > 0; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}
