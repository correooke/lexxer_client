import toPairs from 'lodash.topairs';
import isFunction from 'lodash.isfunction';
import { URL, PORT } from '../constants/index';

export const walkGrammar = (grammar, textCode, parseOut) => {
    debugger;
    var antlr4 = require('antlr4/index');
    var MyLexer = require(`./../grammars/${grammar}/${grammar}Lexer`);
    var MyParser = require(`./../grammars/${grammar}/${grammar}Parser`);
    var MyListener = require(`./../grammars/${grammar}/${grammar}Listener`);

    var input = textCode;
    var chars = new antlr4.InputStream(input);
    var lexer = new MyLexer[`${grammar}Lexer`](chars);
    var tokens  = new antlr4.CommonTokenStream(lexer);
    var parser = new MyParser[`${grammar}Parser`](tokens);
    parser.buildParseTrees = true;

    const ruleName = getFirstRuleName(MyParser[`${grammar}Parser`]);

    var tree = parser[ruleName](); 

    var listen = getWrappedListener(MyListener, grammar, parseOut);
    
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listen, tree);
}

const getWrappedListener = (OriginalListener, grammar, parseOut) => {

    function ListenerExt() {}
    
    ListenerExt.prototype = new OriginalListener[`${grammar}Listener`]();

    const listProps = toPairs(ListenerExt.prototype.__proto__, lp => lp);
    
    listProps.filter(([ name, prop ]) => isFunction(prop)).forEach(
        ([ name, func ]) => {
            if (name.includes('exit')) {
                ListenerExt.prototype[name] = (arg) => {
                    const ruleName = name.replace('exit', '');
                    parseOut(ruleName, arg);
                    debugger;
                    console.log("Parsed: " + arg.getText());
            }
        }
    });

    var listen = new ListenerExt();

    return listen;
};

const getFirstRuleName = parser => {
    const props = toPairs(parser, ([name, value]) => [name, value]); 

    const [name, value] = props.find(
        ([name, value]) => value === 0 && name.includes('RULE_'));

    return name.replace('RULE_', '');
}

export const buildUrl = path => {
    const finalUrl = `${URL}:${PORT}/${path}`;
    console.log(process.env.NODE_ENV);
    console.log(finalUrl);
    debugger;
    return finalUrl;
}
