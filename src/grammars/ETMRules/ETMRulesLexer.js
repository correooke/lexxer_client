// Generated from ETMRules.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0011G\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0003\u0002\u0005\u0002#\n\u0002\u0003\u0003\u0003\u0003\u0005",
    "\u0003\'\n\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003",
    "\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003",
    "\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0006",
    "\u0010B\n\u0010\r\u0010\u000e\u0010C\u0003\u0010\u0003\u0010\u0002\u0002",
    "\u0011\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f",
    "\t\u0011\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d",
    "\u0010\u001f\u0011\u0003\u0002\u0004\u0005\u0002C\\aac|\u0005\u0002",
    "\u000b\f\u000f\u000f\"\"\u0002H\u0002\u0003\u0003\u0002\u0002\u0002",
    "\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002",
    "\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002",
    "\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002",
    "\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002",
    "\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002",
    "\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002",
    "\u0002\u001d\u0003\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002",
    "\u0003\"\u0003\u0002\u0002\u0002\u0005&\u0003\u0002\u0002\u0002\u0007",
    "(\u0003\u0002\u0002\u0002\t*\u0003\u0002\u0002\u0002\u000b,\u0003\u0002",
    "\u0002\u0002\r.\u0003\u0002\u0002\u0002\u000f0\u0003\u0002\u0002\u0002",
    "\u00112\u0003\u0002\u0002\u0002\u00134\u0003\u0002\u0002\u0002\u0015",
    "6\u0003\u0002\u0002\u0002\u00178\u0003\u0002\u0002\u0002\u0019:\u0003",
    "\u0002\u0002\u0002\u001b<\u0003\u0002\u0002\u0002\u001d>\u0003\u0002",
    "\u0002\u0002\u001fA\u0003\u0002\u0002\u0002!#\t\u0002\u0002\u0002\"",
    "!\u0003\u0002\u0002\u0002#\u0004\u0003\u0002\u0002\u0002$\'\u0005\u0003",
    "\u0002\u0002%\'\u00042;\u0002&$\u0003\u0002\u0002\u0002&%\u0003\u0002",
    "\u0002\u0002\'\u0006\u0003\u0002\u0002\u0002()\u0007$\u0002\u0002)\b",
    "\u0003\u0002\u0002\u0002*+\u0007*\u0002\u0002+\n\u0003\u0002\u0002\u0002",
    ",-\u0007+\u0002\u0002-\f\u0003\u0002\u0002\u0002./\u0007-\u0002\u0002",
    "/\u000e\u0003\u0002\u0002\u000201\u0007/\u0002\u00021\u0010\u0003\u0002",
    "\u0002\u000223\u0007,\u0002\u00023\u0012\u0003\u0002\u0002\u000245\u0007",
    "1\u0002\u00025\u0014\u0003\u0002\u0002\u000267\u0007@\u0002\u00027\u0016",
    "\u0003\u0002\u0002\u000289\u0007>\u0002\u00029\u0018\u0003\u0002\u0002",
    "\u0002:;\u0007?\u0002\u0002;\u001a\u0003\u0002\u0002\u0002<=\u00070",
    "\u0002\u0002=\u001c\u0003\u0002\u0002\u0002>?\u0007`\u0002\u0002?\u001e",
    "\u0003\u0002\u0002\u0002@B\t\u0003\u0002\u0002A@\u0003\u0002\u0002\u0002",
    "BC\u0003\u0002\u0002\u0002CA\u0003\u0002\u0002\u0002CD\u0003\u0002\u0002",
    "\u0002DE\u0003\u0002\u0002\u0002EF\b\u0010\u0002\u0002F \u0003\u0002",
    "\u0002\u0002\u0006\u0002\"&C\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function ETMRulesLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

ETMRulesLexer.prototype = Object.create(antlr4.Lexer.prototype);
ETMRulesLexer.prototype.constructor = ETMRulesLexer;

Object.defineProperty(ETMRulesLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

ETMRulesLexer.EOF = antlr4.Token.EOF;
ETMRulesLexer.VALID_ID_START = 1;
ETMRulesLexer.VALID_ID_CHAR = 2;
ETMRulesLexer.QUOTES = 3;
ETMRulesLexer.LPAREN = 4;
ETMRulesLexer.RPAREN = 5;
ETMRulesLexer.PLUS = 6;
ETMRulesLexer.MINUS = 7;
ETMRulesLexer.TIMES = 8;
ETMRulesLexer.DIV = 9;
ETMRulesLexer.GT = 10;
ETMRulesLexer.LT = 11;
ETMRulesLexer.EQ = 12;
ETMRulesLexer.POINT = 13;
ETMRulesLexer.POW = 14;
ETMRulesLexer.WS = 15;

ETMRulesLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

ETMRulesLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

ETMRulesLexer.prototype.literalNames = [ null, null, null, "'\"'", "'('", 
                                         "')'", "'+'", "'-'", "'*'", "'/'", 
                                         "'>'", "'<'", "'='", "'.'", "'^'" ];

ETMRulesLexer.prototype.symbolicNames = [ null, "VALID_ID_START", "VALID_ID_CHAR", 
                                          "QUOTES", "LPAREN", "RPAREN", 
                                          "PLUS", "MINUS", "TIMES", "DIV", 
                                          "GT", "LT", "EQ", "POINT", "POW", 
                                          "WS" ];

ETMRulesLexer.prototype.ruleNames = [ "VALID_ID_START", "VALID_ID_CHAR", 
                                      "QUOTES", "LPAREN", "RPAREN", "PLUS", 
                                      "MINUS", "TIMES", "DIV", "GT", "LT", 
                                      "EQ", "POINT", "POW", "WS" ];

ETMRulesLexer.prototype.grammarFileName = "ETMRules.g4";



exports.ETMRulesLexer = ETMRulesLexer;

