import { observable } from 'mobx';

const appState = observable({
    grammar: null, 
    textCode: '',
    parseResult: [],
    grammarList: ['Hello', 'ETMRules', 'arithmetic', 'other'],
    hasParseResult: false,
});

appState.setParseLine = line => {
    appState.parseResult = [...appState.parseResult, line];
    appState.hasParseResult = true;
}

appState.setCode = code => {
    appState.textCode = code;
}

appState.setGrammar = grammar => {
    appState.grammar = grammar;
    appState.parseResult = [];
}

export default appState;