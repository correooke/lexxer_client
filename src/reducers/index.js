import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { SET_CODE, SET_GRAMMAR, SET_PARSE_LINE } from '../constants/index';

const lexerReducer = handleActions({
    [SET_CODE]: (state, {payload}) => ({ ...state, code: payload, parseLines: []  }),
    [SET_GRAMMAR]: (state, {payload}) => ({ ...state, grammar: payload, parseLines: [] }),
    [SET_PARSE_LINE]: (state, {payload}) => ({ ...state, parseLines: [ ...state.parseLines, payload ]}),
}, {});


export default combineReducers({ lexerReducer });