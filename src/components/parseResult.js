import React from 'react';
import PropTypes from 'prop-types';
import ParseResultLine from './parseResultLine';

const ParseResult = ({ result }) => {
    return (
        <div className="result">
            { 
                result.map(
                    (line, index) => <ParseResultLine key={index} line={line}></ParseResultLine>)
            }
        </div>
    );
};

ParseResult.propTypes = {
    result: PropTypes.array.isRequired,
};

export default ParseResult;