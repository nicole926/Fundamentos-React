import Celular from "./Celular";

function ListCelular2() {
    return(
        <>
            <h1>Lista de Celulares</h1>
            <Celular nome="Samsung Galaxy S24" marca="Samsung" ano={2024} preco={5000.00}/>
            <Celular nome="iPhone 15" marca="Apple" ano={2023} preco={6000.00}/>
            <Celular nome="Xiaomi 13" marca="Xiaomi" ano={2023} preco={4000.00}/>
            <Celular nome="Motorola Edge 40" marca="Motorola" ano={2023} preco={3500.00}/>
        </>
    )
};

export default ListCelular2;
