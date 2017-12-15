import React from 'react';
import PropTypes from 'prop-types';

const ParseResultLine = ({ line }) => {
    return (
        <div className='parse-result-line'>
            {line}
        </div>
    );
};

ParseResultLine.propTypes = {
    line: PropTypes.string.isRequired,
};

export default ParseResultLine;