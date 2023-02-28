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