package storage

import (
	"database/sql"
	"log"
	"os"

	_ "github.com/jackc/pgx/v5/stdlib"
)

func Connect() *sql.DB {
	dsn := os.Getenv("DATABASE_URL")
	db, err := sql.Open("pgx", dsn)
	if err != nil { log.Fatal(err) }
	if err = db.Ping(); err != nil { log.Fatal(err) }
	return db
}
