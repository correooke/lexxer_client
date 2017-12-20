import React from 'react';
import PropTypes from 'prop-types';

const GrammarSelectOptions = options => 
    options.map(opt => <option key={opt} value={opt}>{opt}</option>);

const GrammarSelect = ( { handleGrammar, selectedGrammar, grammarList }) => {
    return (
        <div className='grammar-selector'>
            <span>Seleccione la gramática</span>
            <select 
                defaultValue={selectedGrammar ? selectedGrammar : 0}
                onChange={event => handleGrammar(event.target.value)} >
                <option value={0} disabled>Seleccione</option>
                { 
                    grammarList && GrammarSelectOptions(grammarList)
                }
            </select>
        </div>
    );
};

GrammarSelect.propTypes = {
    handleGrammar: PropTypes.func.isRequired,
    selectedGrammar: PropTypes.string,
    grammarList: PropTypes.arrayOf(PropTypes.string),
};

export default GrammarSelect;