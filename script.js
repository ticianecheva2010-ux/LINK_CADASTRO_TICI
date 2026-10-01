// Selecionar elementos
const entrada = document.getElementById("entradaTarefa");
const adicionar = document.getElementById("botaoAdicionar");
const lista = document.getElementById("listaTarefas");
const tema = document.getElementById("botaoTema");


// Adicionar tarefa
adicionar.onclick = function () {

    const texto = entrada.value.trim();

    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    // Criar tarefa
    const item = document.createElement("li");
    item.className = "item-tarefa";

    // Criar texto
    const span = document.createElement("span");
    span.textContent = texto;

    // Criar área dos botões
    const acoes = document.createElement("div");
    acoes.className = "acoes-tarefa";

    // Botão concluir
    const concluir = document.createElement("button");
    concluir.className = "botao-acao";
    concluir.textContent = "✓";

    // Botão excluir
    const excluir = document.createElement("button");
    excluir.className = "botao-acao excluir";
    excluir.textContent = "🗑";

    // Montar tarefa
    acoes.appendChild(concluir);
    acoes.appendChild(excluir);

    item.appendChild(span);
    item.appendChild(acoes);

    lista.appendChild(item);

    // Limpar entrada
    entrada.value = "";
    entrada.focus();
};


// Concluir ou excluir tarefa
lista.onclick = function (evento) {

    const botao = evento.target;

    if (botao.classList.contains("excluir")) {

        botao.parentElement.parentElement.remove();

    }

    else if (botao.classList.contains("botao-acao")) {

        botao.parentElement.parentElement.classList.toggle("concluida");

    }
};


// Adicionar com Enter
entrada.onkeydown = function (evento) {

    if (evento.key === "Enter") {
        adicionar.click();
    }

};


// Mudar tema
tema.onclick = function () {

    document.body.classList.toggle("modoescuro");

    if (document.body.classList.contains("modoescuro")) {

        tema.textContent = "☀️";

    } else {

        tema.textContent = "🌙";

    }

};