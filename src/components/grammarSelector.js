import React from 'react';
import PropTypes from 'prop-types';

const GrammarSelector = ( { handleGrammar }) => {
    return (
        <div className='grammar-selector'>
            <span>Seleccione la gramática</span>
            <select onChange={event => handleGrammar(event.target.value)} >
                <option value={null} selected disabled>Seleccione</option>
                <option value="Hello">Hello</option>
                <option value="arithmetic">Arithmetic</option>
                <option value="">Otra</option>
            </select>
        </div>
    );
};

GrammarSelector.propTypes = {
    handleGrammar: PropTypes.func.isRequired,
};

export default GrammarSelector;