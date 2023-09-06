CREATE TABLE IF NOT EXISTS "todos" (
	"id" serial PRIMARY KEY NOT NULL,
	"completed" boolean DEFAULT false,
	"title" text,
	"token" text
);
