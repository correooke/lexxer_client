import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { SET_CODE, SET_GRAMMAR, SET_PARSE_LINE } from '../constants/index';
import { grammars } from './../grammars';

const initialState = {
    grammar: {
        list: grammars
    }
}
const lexerReducer = handleActions({
    [SET_CODE]: (state, {payload}) => ({ ...state, code: payload, parseLines: []  }),
    [SET_GRAMMAR]: (state, {payload}) => ({ ...state, grammar: { list: (state.grammar && state.grammar.list), selectedGrammar: payload }, parseLines: [] }),
    [SET_PARSE_LINE]: (state, {payload}) => ({ ...state, parseLines: [ ...state.parseLines, payload ]}),
}, initialState);


export default combineReducers({ lexerReducer });