sql: sql.l sql.y
	bison -d sql.y
	flex -osql.lex.c sql.l
	gcc -o $@ sql.tab.c sql.lex.c

clean:
	rm *.c *.h sql
