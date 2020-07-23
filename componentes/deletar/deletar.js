const Deletar = () => {
    const deletar = document.createElement('button');
    deletar.classList.add('botao-deletar');
    deletar.innerText = 'Deletar';
    deletar.addEventListener('click', deletarTarefa)

    return deletar;
}

const deletarTarefa = (evento) => {
    const deletar = evento.target;
    deletar.parentElement.remove()
}

export default Deletar;