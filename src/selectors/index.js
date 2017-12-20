
import { createSelector } from 'reselect';

const getLexer = createSelector(state => state.lexerReducer, lexer => lexer);

export const getParseResult = createSelector(getLexer, state => state.parseLines);

export const getGrammar = createSelector(getLexer, state => state.grammar && state.grammar.selectedGrammar);

export const getGrammarList = createSelector(getLexer, state => state.grammar && state.grammar.list);

export const getCode = createSelector(getLexer, state => state.code);

export const getHasParseResult = createSelector(getParseResult, parseResult => parseResult && parseResult.length > 0 );
