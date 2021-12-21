let tarefas = [{
        nome: 'Comprar leite',
        categoria: 'compras',
        realizada: false
    },
    {
        nome: 'Escutar chimbinha',
        categoria: 'lazer',
        realizada: true
    }
];

function insereTarefaNaPagina(tarefa) {
    let ulEl = document.querySelector('#lista-tarefas')

    let tarefaLi = document.createElement('li')
    tarefaLi.classList.add('item-tarefa')
    if (tarefa.realizada) {
        tarefaLi.classList.add('marcado')
    }
    tarefaLi.innerHTML = `${tarefa.nome}`

    ulEl.appendChild(tarefaLi)
}

tarefas.forEach(insereTarefaNaPagina);

function incluiNovaTarefa() {
    let novaTarefaNomeEl = document.querySelector('#nova-tarefa-nome')
    let novaTarefaCategoriaEl = document.querySelector('#nova-tarefa-categoria')
    tarefas.push({ nome: novaTarefaNomeEl.value, categoria: novaTarefaCategoriaEl.value, realizada: false })
    const index = tarefas.length
    insereTarefaNaPagina(tarefas[index - 1])
    novaTarefaNomeEl.value = null
    novaTarefaNomeEl.focus()
}

let incluiNovaTarefaBt = document.querySelector('#incluir-nova-tarefa')
incluiNovaTarefaBt.addEventListener('click', incluiNovaTarefa)