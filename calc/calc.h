/*************************************************************************
	> File Name: calc.h
	> Author: 
	> Mail: 
	> Created Time: Mon Dec 21 00:13:47 2015
 ************************************************************************/

#ifndef _CALC_H
#define _CALC_H

extern int yylineno;
void yyerror(char *s, ...);

struct ast {
    int nodetype;
    struct ast *l;
    struct ast *r;
};

struct numval {
    int nodetype;
    double number;
};

struct ast *newast(int nodetype, struct ast *l, struct ast *r);
struct ast *newnum(double d);

double eval(struct ast *);

void treefree(struct ast *);

#endif
