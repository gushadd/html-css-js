function adicionarTarefa() {
    const tarefaInput = document.getElementById('novaTarefa');
    const tarefaTexto = tarefaInput.value.trim();

    if (tarefaTexto !== '') {
        const listaTarefas = document.getElementById('listaTarefas');

        const novaTarefa = document.createElement('li');
        novaTarefa.textContent = tarefaTexto;

        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover';
        botaoRemover.onclick = function () {
            listaTarefas.removeChild(novaTarefa);
        };

        novaTarefa.appendChild(botaoRemover);

        novaTarefa.onclick = function () {
            novaTarefa.classList.toggle('completed');
        };

        listaTarefas.appendChild(novaTarefa);
        tarefaInput.value = '';
    }
}
