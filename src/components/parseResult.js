import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ParseResultLine from './parseResultLine';

const ParseResultHeader = ({children}) => <h4>{children}</h4>;

class ParseResult extends Component {
    static Header = ParseResultHeader

    render = () => {
        const { result, children } = this.props;


        return (
            <div className="result">
                { children }
                { 
                    result.map(
                        (line, index) => <ParseResultLine key={index} line={line}></ParseResultLine>)
                }
            </div>);
    }
};

ParseResult.propTypes = {
    result: PropTypes.array.isRequired,
};

export default ParseResult;