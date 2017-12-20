grammar ETMRules;
/*
PSEUDO_SQL = SELECT SUM(PRICE) FROM ORDER.ORDERLINES WHERE OL.PRODUCT_CODE = 90 AND OL.ORDER_OPERATION_CODE = 2  

VALUE => CONST(10)
VALUE => DB(SQL)
VALUE => CONTEXT(PSEUDO_SQL)

OPERATIONS => + - * /

CONST: 

 */

sql_operation: RPAREN native_sql LPAREN;

native_sql: QUOTES VALID_ID_CHAR* QUOTES;

VALID_ID_START : ('a' .. 'z') | ('A' .. 'Z') | '_';

VALID_ID_CHAR : VALID_ID_START | ('0' .. '9');

QUOTES : '"';
LPAREN : '(';
RPAREN : ')';
PLUS : '+';
MINUS : '-';
TIMES : '*';
DIV : '/';
GT : '>';
LT : '<' ;
EQ : '=' ;
POINT : '.';
POW : '^';
WS : [ \r\n\t] + -> skip;
