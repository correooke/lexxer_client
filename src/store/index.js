import { observable } from 'mobx';

const appState = observable({
    grammar: null, 
    textCode: '',
    parseResult: '',
    grammarList: ['Hello', 'ETMRules', 'arithmetic', 'other']
});

appState.setParseLine = line => {}

appState.setCode = code => {}

appState.setGrammar = grammar => {}

export default appState;