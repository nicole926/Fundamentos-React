// Reat Fragments sõo elementos que premitem uma lista de filhos sem 
// adicionar nós extras ao DOM. Eles são representados por <> e </>.

import Item from './Item';

function List() {
    return(
      <>
        <h1>Minha Lista</h1>
        <ul>
          <Item marca="Ferrari"/>
          <Item marca = "Fiat"/>
          <Item marca = "BMW"/>
        </ul>
      </>  
    )
}

export default List;