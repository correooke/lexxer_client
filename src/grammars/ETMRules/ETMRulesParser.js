// Generated from ETMRules.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ETMRulesListener = require('./ETMRulesListener').ETMRulesListener;
var grammarFileName = "ETMRules.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0011\u0014\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0007\u0003",
    "\r\n\u0003\f\u0003\u000e\u0003\u0010\u000b\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0002\u0002\u0004\u0002\u0004\u0002\u0002\u0002\u0012\u0002",
    "\u0006\u0003\u0002\u0002\u0002\u0004\n\u0003\u0002\u0002\u0002\u0006",
    "\u0007\u0007\u0007\u0002\u0002\u0007\b\u0005\u0004\u0003\u0002\b\t\u0007",
    "\u0006\u0002\u0002\t\u0003\u0003\u0002\u0002\u0002\n\u000e\u0007\u0005",
    "\u0002\u0002\u000b\r\u0007\u0004\u0002\u0002\f\u000b\u0003\u0002\u0002",
    "\u0002\r\u0010\u0003\u0002\u0002\u0002\u000e\f\u0003\u0002\u0002\u0002",
    "\u000e\u000f\u0003\u0002\u0002\u0002\u000f\u0011\u0003\u0002\u0002\u0002",
    "\u0010\u000e\u0003\u0002\u0002\u0002\u0011\u0012\u0007\u0005\u0002\u0002",
    "\u0012\u0005\u0003\u0002\u0002\u0002\u0003\u000e"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, "'\"'", "'('", "')'", "'+'", "'-'", 
                     "'*'", "'/'", "'>'", "'<'", "'='", "'.'", "'^'" ];

var symbolicNames = [ null, "VALID_ID_START", "VALID_ID_CHAR", "QUOTES", 
                      "LPAREN", "RPAREN", "PLUS", "MINUS", "TIMES", "DIV", 
                      "GT", "LT", "EQ", "POINT", "POW", "WS" ];

var ruleNames =  [ "sql_operation", "native_sql" ];

function ETMRulesParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ETMRulesParser.prototype = Object.create(antlr4.Parser.prototype);
ETMRulesParser.prototype.constructor = ETMRulesParser;

Object.defineProperty(ETMRulesParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ETMRulesParser.EOF = antlr4.Token.EOF;
ETMRulesParser.VALID_ID_START = 1;
ETMRulesParser.VALID_ID_CHAR = 2;
ETMRulesParser.QUOTES = 3;
ETMRulesParser.LPAREN = 4;
ETMRulesParser.RPAREN = 5;
ETMRulesParser.PLUS = 6;
ETMRulesParser.MINUS = 7;
ETMRulesParser.TIMES = 8;
ETMRulesParser.DIV = 9;
ETMRulesParser.GT = 10;
ETMRulesParser.LT = 11;
ETMRulesParser.EQ = 12;
ETMRulesParser.POINT = 13;
ETMRulesParser.POW = 14;
ETMRulesParser.WS = 15;

ETMRulesParser.RULE_sql_operation = 0;
ETMRulesParser.RULE_native_sql = 1;

function Sql_operationContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ETMRulesParser.RULE_sql_operation;
    return this;
}

Sql_operationContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Sql_operationContext.prototype.constructor = Sql_operationContext;

Sql_operationContext.prototype.RPAREN = function() {
    return this.getToken(ETMRulesParser.RPAREN, 0);
};

Sql_operationContext.prototype.native_sql = function() {
    return this.getTypedRuleContext(Native_sqlContext,0);
};

Sql_operationContext.prototype.LPAREN = function() {
    return this.getToken(ETMRulesParser.LPAREN, 0);
};

Sql_operationContext.prototype.enterRule = function(listener) {
    if(listener instanceof ETMRulesListener ) {
        listener.enterSql_operation(this);
	}
};

Sql_operationContext.prototype.exitRule = function(listener) {
    if(listener instanceof ETMRulesListener ) {
        listener.exitSql_operation(this);
	}
};




ETMRulesParser.Sql_operationContext = Sql_operationContext;

ETMRulesParser.prototype.sql_operation = function() {

    var localctx = new Sql_operationContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ETMRulesParser.RULE_sql_operation);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 4;
        this.match(ETMRulesParser.RPAREN);
        this.state = 5;
        this.native_sql();
        this.state = 6;
        this.match(ETMRulesParser.LPAREN);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Native_sqlContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ETMRulesParser.RULE_native_sql;
    return this;
}

Native_sqlContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Native_sqlContext.prototype.constructor = Native_sqlContext;

Native_sqlContext.prototype.QUOTES = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ETMRulesParser.QUOTES);
    } else {
        return this.getToken(ETMRulesParser.QUOTES, i);
    }
};


Native_sqlContext.prototype.VALID_ID_CHAR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ETMRulesParser.VALID_ID_CHAR);
    } else {
        return this.getToken(ETMRulesParser.VALID_ID_CHAR, i);
    }
};


Native_sqlContext.prototype.enterRule = function(listener) {
    if(listener instanceof ETMRulesListener ) {
        listener.enterNative_sql(this);
	}
};

Native_sqlContext.prototype.exitRule = function(listener) {
    if(listener instanceof ETMRulesListener ) {
        listener.exitNative_sql(this);
	}
};




ETMRulesParser.Native_sqlContext = Native_sqlContext;

ETMRulesParser.prototype.native_sql = function() {

    var localctx = new Native_sqlContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ETMRulesParser.RULE_native_sql);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 8;
        this.match(ETMRulesParser.QUOTES);
        this.state = 12;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ETMRulesParser.VALID_ID_CHAR) {
            this.state = 9;
            this.match(ETMRulesParser.VALID_ID_CHAR);
            this.state = 14;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 15;
        this.match(ETMRulesParser.QUOTES);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.ETMRulesParser = ETMRulesParser;
