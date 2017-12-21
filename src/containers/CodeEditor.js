import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GrammarSelect from './../components/grammarSelect';
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

    componentDidMount() {
        if (this.grammarSelect)
            this.grammarSelect.focus();
    }
    
    handleGrammar = value => {
        this.props.setGrammar(value);
        if (this.CodeTxt)
            this.CodeTxt.focus();
    }
    
    render() {
        const { parseResult, grammar, grammarList } = this.props;
        const res = parseResult && parseResult.length > 0;
        return (
            <div className={`code-editor ${res && 'with-result'}`}>
                <GrammarSelect 
                    innnerRef={gs => { this.grammarSelect = gs; }}
                    handleGrammar={this.handleGrammar} 
                    selectedGrammar={grammar}
                    grammarList={grammarList}></GrammarSelect>
                <div className="code-area">
                    <textarea  rows="4" ref={input => { this.CodeTxt = input; } } onChange={this.handleCodeChange} />
                    <Actions handleGenerate={this.handleGenerate} ></Actions>
                </div>
                { 
                    res && 
                    <ParseResult result={parseResult}>
                        <ParseResult.Header>Resultados de compilación</ParseResult.Header>
                    </ParseResult>
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
    grammarList: PropTypes.arrayOf(PropTypes.string),
};

export default CodeEditor;