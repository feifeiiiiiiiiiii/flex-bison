%option noyywrap nodefault yylineno case-insensitive

%{
#include "sql.tab.h"
#include <stdarg.h>
#include <string.h>

void yyerror(char *s, ...);

int oldstate;
%}

%%


SELECT { return SELECT; }
FROM { return FROM; }
WHERE { return WHERE; }

-?[0-9]+            { yylval.intval = atoi(yytext); return INTNUM; } 

-?[0-9]+"."[0-9]* |
-?"."[0-9]+ |
-?[0-9]+E[-+]?[0-9]+    |
-?[0-9]+"."[0-9]*E[-+]?[0-9]+ |
-?"."[0-9]*E[-+]?[0-9]+ { yylval.floatval = atof(yytext) ; return APPROXNUM; }


'(\\.|''|[^'\n])*'  |
\"(\\.|\"\"|[^"\n])*\"  {  yylval.strval = strdup(yytext); return STRING; }

'(\\.|[^'\n])*$         { yyerror("Unterminated string %s", yytext); }
\"(\\.|[^"\n])*$    { yyerror("Unterminated string %s", yytext); }



[-+&~|^/%*(),.;!]   { return yytext[0]; }

"&&"        { return ANDOP; }
"||"            { return OR; }

"=" {  yylval.subtok = 4; return COMPARISON; }
">="    {  yylval.subtok = 6; return COMPARISON; }
">" {  yylval.subtok = 2; return COMPARISON; }
"<="    {  yylval.subtok = 5;return COMPARISON; }
"<" {  yylval.subtok = 1;return COMPARISON; }
"!="    |
"<>"    { yylval.subtok = 3; return COMPARISON; }

[A-Za-z][A-Za-z0-9_]*   { yylval.strval = strdup(yytext); return NAME; }
`[^`/\\.\n]+`           { yylval.strval = strdup(yytext+1); yylval.strval[yyleng-2] = 0; return NAME; }

`[^`\n]*$               { yyerror("unterminated quoted name %s", yytext); }

@[0-9a-z_.$]+ |
@\"[^"\n]+\" |
@`[^`\n]+` |
@'[^'\n]+' { yylval.strval = strdup(yytext+1); return USERVAR; }

@\"[^"\n]*$ { yyerror("unterminated quoted user variable %s", yytext); }
@`[^`\n]*$ { yyerror("unterminated quoted user variable %s", yytext); }
@'[^'\n]*$ { yyerror("unterminated quoted user variable %s", yytext); }

[ \t\n]         /* white space */
. { yyerror("Mystery chartacter %c\n", *yytext);}

%%
