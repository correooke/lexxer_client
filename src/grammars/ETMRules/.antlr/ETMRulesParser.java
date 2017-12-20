// Generated from c:\learning\lexter\rules\src\grammars\ETMRules\ETMRules.g4 by ANTLR 4.7
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class ETMRulesParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		VALID_ID_START=1, VALID_ID_CHAR=2, QUOTES=3, LPAREN=4, RPAREN=5, PLUS=6, 
		MINUS=7, TIMES=8, DIV=9, GT=10, LT=11, EQ=12, POINT=13, POW=14, WS=15;
	public static final int
		RULE_sql_operation = 0, RULE_native_sql = 1;
	public static final String[] ruleNames = {
		"sql_operation", "native_sql"
	};

	private static final String[] _LITERAL_NAMES = {
		null, null, null, "'\"'", "'('", "')'", "'+'", "'-'", "'*'", "'/'", "'>'", 
		"'<'", "'='", "'.'", "'^'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, "VALID_ID_START", "VALID_ID_CHAR", "QUOTES", "LPAREN", "RPAREN", 
		"PLUS", "MINUS", "TIMES", "DIV", "GT", "LT", "EQ", "POINT", "POW", "WS"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "ETMRules.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public ETMRulesParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class Sql_operationContext extends ParserRuleContext {
		public TerminalNode RPAREN() { return getToken(ETMRulesParser.RPAREN, 0); }
		public Native_sqlContext native_sql() {
			return getRuleContext(Native_sqlContext.class,0);
		}
		public TerminalNode LPAREN() { return getToken(ETMRulesParser.LPAREN, 0); }
		public Sql_operationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sql_operation; }
	}

	public final Sql_operationContext sql_operation() throws RecognitionException {
		Sql_operationContext _localctx = new Sql_operationContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_sql_operation);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(4);
			match(RPAREN);
			setState(5);
			native_sql();
			setState(6);
			match(LPAREN);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Native_sqlContext extends ParserRuleContext {
		public List<TerminalNode> QUOTES() { return getTokens(ETMRulesParser.QUOTES); }
		public TerminalNode QUOTES(int i) {
			return getToken(ETMRulesParser.QUOTES, i);
		}
		public List<TerminalNode> VALID_ID_CHAR() { return getTokens(ETMRulesParser.VALID_ID_CHAR); }
		public TerminalNode VALID_ID_CHAR(int i) {
			return getToken(ETMRulesParser.VALID_ID_CHAR, i);
		}
		public Native_sqlContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_native_sql; }
	}

	public final Native_sqlContext native_sql() throws RecognitionException {
		Native_sqlContext _localctx = new Native_sqlContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_native_sql);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(8);
			match(QUOTES);
			setState(12);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==VALID_ID_CHAR) {
				{
				{
				setState(9);
				match(VALID_ID_CHAR);
				}
				}
				setState(14);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(15);
			match(QUOTES);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\21\24\4\2\t\2\4\3"+
		"\t\3\3\2\3\2\3\2\3\2\3\3\3\3\7\3\r\n\3\f\3\16\3\20\13\3\3\3\3\3\3\3\2"+
		"\2\4\2\4\2\2\2\22\2\6\3\2\2\2\4\n\3\2\2\2\6\7\7\7\2\2\7\b\5\4\3\2\b\t"+
		"\7\6\2\2\t\3\3\2\2\2\n\16\7\5\2\2\13\r\7\4\2\2\f\13\3\2\2\2\r\20\3\2\2"+
		"\2\16\f\3\2\2\2\16\17\3\2\2\2\17\21\3\2\2\2\20\16\3\2\2\2\21\22\7\5\2"+
		"\2\22\5\3\2\2\2\3\16";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}