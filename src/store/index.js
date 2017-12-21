import { observable, action, when } from 'mobx';

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

    constructor() {
        when(
            () => {
                return this.parseResult !== [];
            },
            () => {
                debugger;
                console.log("pasoooooooooooooooooo!");
                this.hasParseResult = false;
            }
        );        
    }
    
    @observable grammar = null;
    @observable textCode = '';
    @observable parseResult = [];
    @observable grammarList = ['Hello', 'ETMRules', 'arithmetic', 'other'];
    @observable hasParseResult = false;

    @action("agrego una línea de resultado") 
    setParseLine = line => {
        this.parseResult = [...appState.parseResult, line];
    }

    @action("escribo código")
    setCode = code => {
        this.textCode = code;
    }

    @action("establezco la gramática a usar") 
    setGrammar = grammar => {
        this.grammar = grammar;
        this.parseResult = [];
    }
}



export default appState;