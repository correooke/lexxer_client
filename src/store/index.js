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
// @computed : son pure actions, calculos en base a los datos de observable
const appState = new class AppState {
    @observable grammar = null;
    @observable textCode = '';
    @observable parseResult = [];
    @observable grammarList = ['Hello', 'ETMRules', 'arithmetic', 'SQLite', 'other'];
    @observable hasParseResult = false;

    @action("agrego una línea de resultado") 
    setParseLine = line => {
        this.parseResult = [...appState.parseResult, line];
        this.hasParseResult = true;
    }

    @action("escribo código")
    setCode = code => {
        this.textCode = code;
    }

    @action("establezco la gramática a usar") 
    setGrammar = grammar => {
        this.grammar = grammar;
        this.parseResult = [];
        this.hasParseResult = false;
    }
}
export default appState;