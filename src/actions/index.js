
import { createAction } from 'redux-actions';
import { SET_CODE, SET_GRAMMAR, SET_PARSE_LINE } from './../constants';

export const setCode = createAction(SET_CODE);
export const setGrammar = createAction(SET_GRAMMAR);
export const setParseLine = createAction(SET_PARSE_LINE);