const Concluir = () => {

    const checado = document.createElement('input');

    checado.classList.add('checkbox');
    checado.setAttribute('type', 'checkbox')
    checado.addEventListener('change', concluirTarefa);

    return checado
}

const concluirTarefa = (evento) => {
    const concluir = evento.target;
    const tarefaCompleta = concluir.parentElement;
    tarefaCompleta.children[1].classList.toggle('tachado');
}

export default Concluir;