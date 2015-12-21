%{
#include <stdlib.h>
#include <stdarg.h>
#include <string.h>
#include <stdio.h>

void yyerror(char *s, ...);
void emit(char *s, ...);
%}

%union {
  int intval;
  double floatval;
  char *strval;
  int subtok;
}

%token <strval> NAME
%token <strval> STRING
%token <intval> INTNUM
%token <intval> BOOL
%token <floatval> APPROXNUM

%token <strval> USERVAR

%token OR
%token MOD
%token ADD
%token SUB
%token MUL
%token DIV
%token AND
%token ANDOP
%token WHERE
%token SELECT
%token FROM

%right ASSIGN
%left OR
%left ANDOP
%left <subtok> COMPARISON /* = <> < > <= >= <=> */
%left '|'
%left '&'
%left <subtok> SHIFT /* << >> */
%left '+' '-'
%left '*' '/' '%' MOD

%type <intval> table_references
%type <intval> select_opts select_expr_list

%start stmt_list

%%

stmt_list: stmt ';'
  | stmt_list stmt ';'
  ;

stmt: select_stmt { emit("STMT"); }
   ;

select_stmt: SELECT select_opts select_expr_list FROM table_references opt_where
              { emit("SELECT %d %d", $2, $3); } ;

select_expr_list: select_expr { $$ = 1; }
    | select_expr_list ',' select_expr {$$ = $1 + 1; }
    | '*' { emit("SELECTALL"); $$ = 1; }
    ;

table_references:    table_reference { $$ = 1; }
    | table_references ',' table_reference { $$ = $1 + 1; }
    ;

table_factor:
    NAME  { emit("TABLE %s", $1); free($1); }
  | NAME '.' NAME { emit("TABLE %s.%s", $1, $3);
                               free($1); free($3); };

table_reference:  table_factor;


select_expr: expr ;

select_opts: { $$ = 0; }

opt_where: /* nil */ 
   | WHERE expr { emit("WHERE"); };

expr: NAME         { emit("NAME %s", $1); free($1); }
   | NAME '.' NAME { emit("FIELDNAME %s.%s", $1, $3); free($1); free($3); }
   | USERVAR       { emit("USERVAR %s", $1); free($1); }
   | STRING        { emit("STRING %s", $1); free($1); }
   | INTNUM        { emit("NUMBER %d", $1); }
   | APPROXNUM     { emit("FLOAT %g", $1); }
   | expr COMPARISON expr { emit("CMP %d", $2); } 
   ;

expr: expr ANDOP expr { emit("AND"); }
   | expr OR expr { emit("OR"); }
   | '(' expr ')' ANDOP '(' expr ')' { emit("AND"); }
   | '(' expr ')' OR '(' expr ')' { emit("OR"); }
   | expr  OR '(' expr ')' { emit("OR"); }
   | expr  ANDOP '(' expr ')' { emit("AND"); }
   | '(' expr ')' ANDOP expr  { emit("AND"); }
   | '(' expr ')' OR expr  { emit("OR"); }
   ;

%%

void
emit(char *s, ...)
{
  extern int yylineno;

  va_list ap;
  va_start(ap, s);

  printf("rpn: ");
  vfprintf(stdout, s, ap);
  printf("\n");
}

void
yyerror(char *s, ...)
{
  extern int yylineno;

  va_list ap;
  va_start(ap, s);

  fprintf(stderr, "%d: error: ", yylineno);
  vfprintf(stderr, s, ap);
  fprintf(stderr, "\n");
}

int main(int ac, char **av)
{
  extern FILE *yyin;

  if(ac > 1 && !strcmp(av[1], "-d")) {
    ac--; av++;
  }

  if(ac > 1 && (yyin = fopen(av[1], "r")) == NULL) {
    perror(av[1]);
    exit(1);
  }

  if(!yyparse())
    printf("SQL parse worked\n");
  else
    printf("SQL parse failed\n");
} /* main */
