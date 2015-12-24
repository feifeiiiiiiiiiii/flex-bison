%lex
%options case-insensitive

%%

'SELECT' return 'SELECT'
'FROM'	 return 'FROM'
'WHERE'  return 'WHERE'
'LIMIT'  return 'LIMIT'
'ORDER'	 return 'ORDER'
'BY'	 return 'BY'
'ASC'	 return 'ASC'
'DESC'	 return 'DESC'
'||'	 return 'OR'
'&&'	 return 'AND'
'>'		 return 'GT'
'>='	 return 'GTE'
'<'		 return 'LT'
'<=' 	 return 'LTE'
'='		 return 'EQ'
'!='	 return 'NQ'
'('		 return '('
')'		 return ')'

(\d*[.])?\d+[eE]\d+						return 'NUMBER'
(\d*[.])?\d+							return 'NUMBER'

(['](\\.|[^']|\\\')*?['])+              return 'STRING'
(["](\\.|[^"]|\\\")*?["])+              return 'STRING'
'*'									    return 'STAR'
';'												return 'SEMICOLON'
[A-Za-z][A-Za-z0-9_]*    				return 'NAME'


\s+                                             /* skip whitespace */
[ \t\n]         								/* white space */
<<EOF>>               					return 'EOF'
.                     					return 'INVALID'

/lex

%left OR
%left AND
%left GT GTE LT LTE NQ EQ

%ebnf
%start stmt_list
%%

stmt_list: 
	| stmt SEMICOLON EOF
	| stmt_list SEMICOLON EOF
	;

stmt: select_stmt { console.log('STMT'); }
	;

select_stmt: SELECT select_opts FROM table_references opt_where opt_orderby opt_limit
			{ console.log('SELECT', $1); }
			;

select_opts: expr;

opt_where: 
	| WHERE expr { console.log('WHERE') }
	;

table_references: table_reference { $$ = $1; }
	| table_reference ',' table_reference { $$ = $1 + 1; }
	;

table_reference: table_factor;


table_factor: 
	| NAME { console.log('table', $1); }
	| NAME '.' NAME { console.log('table', $1, $3);}
	;

opt_orderby: 
	| ORDER BY groupby_list {console.log('orderby ', $3);}
	;

groupby_list: expr opt_asc_desc {console.log("groupby", $2); $$ = 1;}
	| groupby_list ',' expr opt_asc_desc {console.log('groupby', $4); $$ = $1 + 1;}
	;

opt_asc_desc: {$$ = 0;}
	| ASC {$$ = 0;}
	| DESC {$$ = 1;}
	;

opt_limit: | LIMIT expr {console.log('limit 1');}
	| LIMIT expr ',' expr {console.log('limit 2');}
	;

expr: NAME { console.log('name', $1); }
	| NAME '.' NAME { console.log('name', $1, $3); }
	| STRING { console.log('string', $1); }
	| NUMBER { console.log('number', $1); }
	| STAR { console.log('star', $1); }
	| expr NQ expr {console.log('nq', $2);}
	| expr EQ expr {console.log('eq', $2);}
	| expr GT expr {console.log('gt', $2);}
	| expr GTE expr {console.log('gte', $2);}
	| expr LT expr {console.log('lt', $2);}
	| expr LTE expr {console.log('lte', $2);}
	| expr OR expr {console.log('and', $2);}
	| expr AND expr {console.log('and');}
	| '(' expr AND expr ')' {console.log('and');}
	| '(' expr OR expr ')' {console.log('or');}
	;