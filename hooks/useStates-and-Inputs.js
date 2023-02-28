//Atrelando o useState a um input podemos fazer algumas ações
//Alteração de um state por evento de onChange;
//limpeza de inputs (Controled Input)
//Após o preenchimento total do form, unir os states e fazer o envio dos dados para o back-end


const [age, setAge] = useState(18)

const handleSubmit = (e) => {
  e.preventDefault() //Evita recarregar a página quando eu clicar em submit

  //Envio a uma API
  console.log(age);
}

return (
  <form onSubmit={handleSubmit}>
    <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
  <input type="submit" value="Enviar" />
  </form>
  <p>Você tem {age} anos!</p>
);