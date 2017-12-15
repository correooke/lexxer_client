import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCode, setGrammar, setParseLine } from './../actions';
import { getParseResult, getGrammar, getCode } from './../selectors';
import Actions from './../components/actions';
import GrammarSelector from './../components/grammarSelector';
import { walkGrammar } from './../services';
import ParseResult from './../components/parseResult';

class CodeEditor extends Component {

    handleGenerate = () => {
        const { grammar, textCode } = this.props;
        
        if (textCode && grammar) {
            walkGrammar(grammar, textCode, this.parseOutEvent);
        }
    }

    parseOutEvent = (ruleName, ctx) => {
        const line = `rule: ${ruleName} valor:${ctx.getText()}`;
        console.log(line);
        this.props.setParseLine(line)
    }

    handleCodeChange = (event) => {
        this.props.setCode(event.target.value);
    }

    handleGrammar = value => {
        this.props.setGrammar(value);
    }

    render() {
        const { parseResult } = this.props;
        const res = parseResult && parseResult.length > 0;
        return (
            <div className={`code-editor ${res && 'with-result'}`}>
                <GrammarSelector handleGrammar={this.handleGrammar} ></GrammarSelector>
                <div className="code-area">
                    <textarea  rows="4" ref={input => { this.CodeTxt = input; } } onChange={this.handleCodeChange} />
                    <Actions handleGenerate={this.handleGenerate} ></Actions>
                </div>
                { 
                    res && 
                    <ParseResult result={parseResult}></ParseResult>
                }
            </div>
        );
    }
}

CodeEditor.propTypes = {
    setCode: PropTypes.func.isRequired,
    setGrammar: PropTypes.func.isRequired,
    setParseLine: PropTypes.func.isRequired,
    parseResult: PropTypes.array,
};
const mapStateToProps = state => ({
    textCode: getCode(state),
    parseResult: getParseResult(state),
    grammar: getGrammar(state),
});

export default connect(mapStateToProps, 
                { setCode, setGrammar, setParseLine })(CodeEditor);