/* parser generated by jison 0.4.15 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,5],$V1=[1,14],$V2=[1,15],$V3=[1,16],$V4=[1,17],$V5=[1,18],$V6=[11,19],$V7=[1,21],$V8=[1,22],$V9=[1,23],$Va=[1,24],$Vb=[1,25],$Vc=[1,26],$Vd=[1,27],$Ve=[1,28],$Vf=[5,11,19,25,29,30,31,35,36,37,38,39,40,41,42,44],$Vg=[5,16,19,25,31],$Vh=[2,15],$Vi=[1,34],$Vj=[5,25,31],$Vk=[5,16,25,31],$Vl=[2,40],$Vm=[2,41],$Vn=[5,31],$Vo=[5,19,31],$Vp=[2,22],$Vq=[1,69],$Vr=[1,70];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"stmt_list":3,"stmt":4,"SEMICOLON":5,"EOF":6,"select_stmt":7,"SELECT":8,"select_opts":9,"select_expr_list":10,"FROM":11,"table_references":12,"opt_where":13,"opt_orderby":14,"opt_limit":15,"WHERE":16,"expr":17,"select_expr":18,",":19,"*":20,"table_reference":21,"table_factor":22,"NAME":23,".":24,"ORDER":25,"BY":26,"groupby_list":27,"opt_asc_desc":28,"ASC":29,"DESC":30,"LIMIT":31,"STRING":32,"NUMBER":33,"STAR":34,"NQ":35,"EQ":36,"GT":37,"GTE":38,"LT":39,"LTE":40,"OR":41,"AND":42,"(":43,")":44,"$accept":0,"$end":1},
terminals_: {2:"error",5:"SEMICOLON",6:"EOF",8:"SELECT",11:"FROM",16:"WHERE",19:",",20:"*",23:"NAME",24:".",25:"ORDER",26:"BY",29:"ASC",30:"DESC",31:"LIMIT",32:"STRING",33:"NUMBER",34:"STAR",35:"NQ",36:"EQ",37:"GT",38:"GTE",39:"LT",40:"LTE",41:"OR",42:"AND",43:"(",44:")"},
productions_: [0,[3,0],[3,3],[3,3],[4,1],[7,8],[9,0],[13,0],[13,2],[10,1],[10,3],[10,1],[12,1],[12,3],[21,1],[22,0],[22,1],[22,3],[14,0],[14,3],[27,2],[27,4],[28,0],[28,1],[28,1],[15,0],[15,2],[15,4],[18,1],[17,1],[17,3],[17,1],[17,1],[17,1],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,3],[17,5],[17,5]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 2: case 3:
return rpnList; 
break;
case 4:
 rpnList.push({op: 'STMT'}); 
break;
case 5:
 rpnList.push({op: 'SELECT', args: [$$[$0-6], $$[$0-5]]});  
break;
case 6:
 this.$ = 0; 
break;
case 8:
 rpnList.push({op: 'WHERE', args: []}); 
break;
case 9: case 12:
 this.$ = 1; 
break;
case 10: case 13:
 this.$ = $$[$0-2] + 1; 
break;
case 11:
 rpnList.push({op: 'SELECTALL'}); this.$ = 1; 
break;
case 16:
 rpnList.push({op: 'TABLE', args: [$$[$0]]}); 
break;
case 17:
 rpnList.push({op: 'TABLE', args: [$$[$0-2], $$[$0]]}); 
break;
case 19:
 rpnList.push({op: 'ORDERBY', args: [$$[$0]]}); 
break;
case 20:
 rpnList.push({op: 'GROUPBY', args: [$$[$0]]}); this.$ = 1;
break;
case 21:
rpnList.push({op: 'GROUPBY', args: [$$[$0]]}); this.$ = $$[$0-3] + 1;
break;
case 22: case 23:
this.$ = 0;
break;
case 24:
this.$ = 1;
break;
case 26:
 rpnList.push({op: 'LIMIT', args: [$$[$0-1]]}); 
break;
case 27:
 rpnList.push({op: 'LIMIT', args: [$$[$0-2], $$[$0-1]]});  
break;
case 29:
 rpnList.push({op: 'NAME', args: [$$[$0]]}); 
break;
case 30:
 rpnList.push({op: 'NAME', args: [$$[$0-2], $$[$0]]}); 
break;
case 31:
 rpnList.push({op: 'STRING', args: [$$[$0]]}); 
break;
case 32:
 rpnList.push({op: 'NUMBER', args: [$$[$0]]}); 
break;
case 33:
 rpnList.push({op: 'STAR', args: []}); 
break;
case 34:
rpnList.push({op: 'NQ'});
break;
case 35:
rpnList.push({op: 'EQ'});
break;
case 36:
rpnList.push({op: 'GT'});
break;
case 37:
rpnList.push({op: 'GTE'});
break;
case 38:
rpnList.push({op: 'LT'});
break;
case 39:
rpnList.push({op: 'LTE'});
break;
case 40:
rpnList.push({op: 'OR'}); 
break;
case 41: case 42:
rpnList.push({op: 'AND'});
break;
case 43:
rpnList.push({op: 'OR'});
break;
}
},
table: [o($V0,[2,1],{3:1,4:2,7:3,8:[1,4]}),{1:[3],5:$V0},{5:[1,6]},{5:[2,4]},o([20,23,32,33,34,43],[2,6],{9:7}),{6:[1,8]},{6:[1,9]},{10:10,17:13,18:11,20:[1,12],23:$V1,32:$V2,33:$V3,34:$V4,43:$V5},o($V0,[2,3]),o($V0,[2,2]),{11:[1,19],19:[1,20]},o($V6,[2,9]),o($V6,[2,11]),o($V6,[2,28],{35:$V7,36:$V8,37:$V9,38:$Va,39:$Vb,40:$Vc,41:$Vd,42:$Ve}),o($Vf,[2,29],{24:[1,29]}),o($Vf,[2,31]),o($Vf,[2,32]),o($Vf,[2,33]),{17:30,23:$V1,32:$V2,33:$V3,34:$V4,43:$V5},o($Vg,$Vh,{12:31,21:32,22:33,23:$Vi}),{17:13,18:35,23:$V1,32:$V2,33:$V3,34:$V4,43:$V5},{17:36,23:$V1,32:$V2,33:$V3,34:$V4,43:$V5},{17:37,23:$V1,32:$V2,33:$V3,34:$V4,43:$V5},{17:38,23:$V1,32:$V2,33:$V3,34:$V4,43:$V5},{17:39,23:$V1,32:$V2,33:$V3,34:$V4,43:$V5},{17:40,23:$V1,32:$V2,33:$V3,34:$V4,43:$V5},{17:41,23:$V1,32:$V2,33:$V3,34:$V4,43:$V5},{17:42,23:$V1,32:$V2,33:$V3,34:$V4,43:$V5},{17:43,23:$V1,32:$V2,33:$V3,34:$V4,43:$V5},{23:[1,44]},{35:$V7,36:$V8,37:$V9,38:$Va,39:$Vb,40:$Vc,41:[1,46],42:[1,45]},o($Vj,[2,7],{13:47,16:[1,48]}),o($Vk,[2,12],{19:[1,49]}),o($Vg,[2,14]),o($Vg,[2,16],{24:[1,50]}),o($V6,[2,10]),o($Vf,[2,34]),o($Vf,[2,35]),o($Vf,[2,36]),o($Vf,[2,37]),o($Vf,[2,38]),o($Vf,[2,39]),o([5,11,19,25,29,30,31,41,44],$Vl,{35:$V7,36:$V8,37:$V9,38:$Va,39:$Vb,40:$Vc,42:$Ve}),o([5,11,19,25,29,30,31,41,42,44],$Vm,{35:$V7,36:$V8,37:$V9,38:$Va,39:$Vb,40:$Vc}),o($Vf,[2,30]),{17:51,23:$V1,32:$V2,33:$V3,34:$V4,43:$V5},{17:52,23:$V1,32:$V2,33:$V3,34:$V4,43:$V5},o($Vn,[2,18],{14:53,25:[1,54]}),{17:55,23:$V1,32:$V2,33:$V3,34:$V4,43:$V5},o($Vk,$Vh,{22:33,21:56,23:$Vi}),{23:[1,57]},o([41,42],$Vm,{35:$V7,36:$V8,37:$V9,38:$Va,39:$Vb,40:$Vc,44:[1,58]}),{35:$V7,36:$V8,37:$V9,38:$Va,39:$Vb,40:$Vc,41:$Vl,42:$Ve,44:[1,59]},{5:[2,25],15:60,31:[1,61]},{26:[1,62]},o($Vj,[2,8],{35:$V7,36:$V8,37:$V9,38:$Va,39:$Vb,40:$Vc,41:$Vd,42:$Ve}),o($Vk,[2,13]),o($Vg,[2,17]),o($Vf,[2,42]),o($Vf,[2,43]),{5:[2,5]},{17:63,23:$V1,32:$V2,33:$V3,34:$V4,43:$V5},{17:65,23:$V1,27:64,32:$V2,33:$V3,34:$V4,43:$V5},{5:[2,26],19:[1,66],35:$V7,36:$V8,37:$V9,38:$Va,39:$Vb,40:$Vc,41:$Vd,42:$Ve},o($Vn,[2,19],{19:[1,67]}),o($Vo,$Vp,{28:68,29:$Vq,30:$Vr,35:$V7,36:$V8,37:$V9,38:$Va,39:$Vb,40:$Vc,41:$Vd,42:$Ve}),{17:71,23:$V1,32:$V2,33:$V3,34:$V4,43:$V5},{17:72,23:$V1,32:$V2,33:$V3,34:$V4,43:$V5},o($Vo,[2,20]),o($Vo,[2,23]),o($Vo,[2,24]),{5:[2,27],35:$V7,36:$V8,37:$V9,38:$Va,39:$Vb,40:$Vc,41:$Vd,42:$Ve},o($Vo,$Vp,{28:73,29:$Vq,30:$Vr,35:$V7,36:$V8,37:$V9,38:$Va,39:$Vb,40:$Vc,41:$Vd,42:$Ve}),o($Vo,[2,21])],
defaultActions: {3:[2,4],60:[2,5]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        function lex() {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

var rpnList = [];
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return 8
break;
case 1:return 11
break;
case 2:return 16
break;
case 3:return 31
break;
case 4:return 25
break;
case 5:return 26
break;
case 6:return 29
break;
case 7:return 30
break;
case 8:return 41
break;
case 9:return 42
break;
case 10:return 37
break;
case 11:return 38
break;
case 12:return 39
break;
case 13:return 40
break;
case 14:return 36
break;
case 15:return 35
break;
case 16:return 43
break;
case 17:return 44
break;
case 18:return 19
break;
case 19:return 33
break;
case 20:return 33
break;
case 21:return 32
break;
case 22:return 32
break;
case 23:return 34
break;
case 24:return 5
break;
case 25:return 23
break;
case 26:/* skip whitespace */
break;
case 27:/* white space */
break;
case 28:return 6
break;
case 29:return 'INVALID'
break;
}
},
rules: [/^(?:SELECT\b)/i,/^(?:FROM\b)/i,/^(?:WHERE\b)/i,/^(?:LIMIT\b)/i,/^(?:ORDER\b)/i,/^(?:BY\b)/i,/^(?:ASC\b)/i,/^(?:DESC\b)/i,/^(?:\|\|)/i,/^(?:&&)/i,/^(?:>)/i,/^(?:>=)/i,/^(?:<)/i,/^(?:<=)/i,/^(?:=)/i,/^(?:!=)/i,/^(?:\()/i,/^(?:\))/i,/^(?:,)/i,/^(?:(\d*[.])?\d+[eE]\d+)/i,/^(?:(\d*[.])?\d+)/i,/^(?:(['](\\.|[^']|\\')*?['])+)/i,/^(?:(["](\\.|[^"]|\\")*?["])+)/i,/^(?:\*)/i,/^(?:;)/i,/^(?:[A-Za-z][A-Za-z0-9_]*)/i,/^(?:\s+)/i,/^(?:[ \t\n])/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}