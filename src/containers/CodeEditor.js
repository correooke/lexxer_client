import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import GrammarSelect from './../components/grammarSelect';
import { walkGrammar } from './../services';
import ParseResult from './../components/parseResult';
import Actions from './../components/actions';


@observer 
class CodeEditor extends Component {

    handleGenerate = () => {
        const { grammar, textCode } = this.props.store;
        
        if (textCode && grammar) {
            walkGrammar(grammar, textCode, this.parseOutEvent);
        }
    }

    parseOutEvent = (ruleName, ctx) => {
        const { setParseLine } = this.props.store;

        const line = `rule: ${ruleName} valor:${ctx.getText()}`;
        console.log(line);
        setParseLine(line)
    }

    handleCodeChange = (event) => {
        const { setCode } = this.props.store;
        
        setCode(event.target.value);
    }

    componentDidMount() {
        if (this.grammarSelect)
            this.grammarSelect.focus();
    }
    
    handleGrammar = value => {
        const { setGrammar } = this.props.store;

        setGrammar(value);
        
        if (this.CodeTxt)
            this.CodeTxt.focus();
    }
    
    render() {
        const { parseResult, grammar, grammarList } = this.props.store;
        
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