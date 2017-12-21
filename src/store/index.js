import { observable, action } from 'mobx';

/*
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
*/

const appState = new class AppState {
    @observable grammar = null;
    @observable textCode = '';
    @observable parseResult = [];
    @observable grammarList = ['Hello', 'ETMRules', 'arithmetic', 'other'];
    @observable hasParseResult = false;

    @action setParseLine = line => {
        appState.parseResult = [...appState.parseResult, line];
        appState.hasParseResult = true;
    }

    @action setCode = code => {
        appState.textCode = code;
    }

    @action setGrammar = grammar => {
        appState.grammar = grammar;
        appState.parseResult = [];
    }
}
export default appState;