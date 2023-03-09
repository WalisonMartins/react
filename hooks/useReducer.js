//O useReducer tem a mesma função que o useState, ele gerencia valores;
//Porém temos a possibilidade de executar uma função na hora da alteração do valor;
//Então temos que o useReducer recebe um valor para gerenciar e uma função para alterar este valor;

import { useReducer } from 'react'
//  1- Começando com o useReducer
const [number, dispatch] = useReducer((state, action) => { //State é o valor recebido
  return Math.random(state)
})

const HookUseReducer = () => {
  return (
    <div>
      <h2>useReducer</h2>
      <p>Número: {number}</p>
      <button onClick={dispatch}>Alterar Número!</button>
      <hr/>
    </div>
  )
}


// USE REDUCER COM ACTIONS

/*
- Se o useReducer fosse utilizado como no exemplo passado, não teria tanta diferença do useState.
- Por isso o reducer geralmente contém operações mais complexas, utilizando a estrutura switch  actions
- Esta situação foi apresentada na seção de context API

 */

const initialTasks = [
  { id: 1, text: 'Fazer alguma coisa' },
  { id:2, text: 'Fazer outra coisa'}
]
 
const taskReducer = (state, action) => {
   
}
 
 const [tasks, dispatchTasks] = 