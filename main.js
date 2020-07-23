import criaTarefa from './componentes/tarefa/criarTarefa.js';

const enviar = evento => {
    
    evento.preventDefault();
    
    const lista = document.querySelector('.lista');
    const input = document.querySelector('.input');
    const valor = input.value;
    
    const tarefa = criaTarefa(valor)

    
    lista.appendChild(tarefa);
    
    input.value = "";
    input.focus();
    
    return true;
};

const criarTarefa = document.querySelector('.botao-enviar');
criarTarefa.addEventListener('click', enviar);