import PropTypes from 'prop-types';

function Item({ marca, ano_lacamento }) {
    return(
        <>
            {marca} - {ano_lacamento}
        </>
    )
}

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lacamento: PropTypes.number.isRequired
};

Item.defaultProps = {
    marca: "Faltou a marca",
    ano_lacamento: 0
};

export default Item;