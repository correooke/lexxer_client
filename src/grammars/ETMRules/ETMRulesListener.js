// Generated from ETMRules.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by ETMRulesParser.
function ETMRulesListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

ETMRulesListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
ETMRulesListener.prototype.constructor = ETMRulesListener;

// Enter a parse tree produced by ETMRulesParser#sql_operation.
ETMRulesListener.prototype.enterSql_operation = function(ctx) {
};

// Exit a parse tree produced by ETMRulesParser#sql_operation.
ETMRulesListener.prototype.exitSql_operation = function(ctx) {
};


// Enter a parse tree produced by ETMRulesParser#native_sql.
ETMRulesListener.prototype.enterNative_sql = function(ctx) {
};

// Exit a parse tree produced by ETMRulesParser#native_sql.
ETMRulesListener.prototype.exitNative_sql = function(ctx) {
};



exports.ETMRulesListener = ETMRulesListener;