import Concluir from '../concluir/concluir.js'
import Deletar from '../deletar/deletar.js'

const criaTarefa = (valor) => {
    
    const tarefa = document.createElement('li');
    tarefa.classList.add("tarefa");
    
    
    const conteudo = document.createElement('p')
    conteudo.classList.add('conteudo');
    conteudo.innerHTML = `${valor}`
    
    const deletar = document.createElement('button');
    deletar.classList.add('botao-deletar');
    deletar.innerText = 'Deletar';
    console.log(conteudo.innerHTML)
    
    
    tarefa.appendChild(Concluir());
    tarefa.appendChild(conteudo);
    tarefa.appendChild(Deletar());
        
    return tarefa;
}

export default criaTarefa;
