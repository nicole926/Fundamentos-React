import PropTypes from 'prop-types';

function Celular({nome, marca, ano, preco}) {
    return(
        <>
            <h4>Nome: {nome}</h4>
            <p>Marca: {marca}</p>
            <p>Ano: {ano}</p>
            <p>Preço: R$ {preco}</p>
        </>
    );
}

Celular.propTypes = {
    nome: PropTypes.string.isRequired,
    marca: PropTypes.string.isRequired,
    ano: PropTypes.number.isRequired,
    preco: PropTypes.number.isRequired
};

export default Celular;