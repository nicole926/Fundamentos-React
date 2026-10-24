// Reat Fragments sõo elementos que premitem uma lista de filhos sem 
// adicionar nós extras ao DOM. Eles são representados por <> e </>.

import Item from './Item';

function List() {
    return(
      <>
        <h1>Minha Lista</h1>
        <ul>
          <Item marca="Ferrari" ano_lacamento={2020}/>
          <Item marca="Fiat" ano_lacamento={2019}/>
          <Item marca="BMW" ano_lacamento={2021}/>
          <Item />
        </ul>
      </>  
    )
}

export default List;