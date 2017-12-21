import React from 'react';
import PropTypes from 'prop-types';

const Actions = ({ handleGenerate }) => {
    return (
        <div className='actions'>
            <button className="btn" onClick={handleGenerate} >Generar!</button>               
        </div>
    );
};

Actions.displayName = 'PowerActions';

Actions.propTypes = {
    handleGenerate: PropTypes.func.isRequired,
};

export default Actions;