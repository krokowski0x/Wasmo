CREATE TABLE "users" (
  "id" int PRIMARY KEY,
  "username" varchar,
  "password" varchar,
  "email" varchar UNIQUE,
  "created_at" varchar,
  "games_played_ids" int
);

CREATE TABLE "developers" (
  "id" int PRIMARY KEY,
  "username" varchar,
  "password" varchar,
  "email" varchar UNIQUE,
  "created_at" varchar,
  "game_id" int
);

CREATE TABLE "admins" (
  "id" int PRIMARY KEY,
  "username" varchar,
  "password" varchar,
  "email" varchar UNIQUE,
  "created_at" varchar
);

CREATE TABLE "games" (
  "id" int PRIMARY KEY,
  "source_code" varchar,
  "comment_ids" int UNIQUE,
  "category_ids" int UNIQUE,
  "statistics_ids" int UNIQUE,
  "created_at" varchar
);

CREATE TABLE "game_statistics" (
  "user_id" int PRIMARY KEY,
  "game_id" int
);

CREATE TABLE "comments" (
  "id" int PRIMARY KEY,
  "user_id" int UNIQUE NOT NULL,
  "comment" varchar,
  "created_at" varchar
);

CREATE TABLE "categories" (
  "id" int PRIMARY KEY,
  "name" varchar,
  "num_games" int
);

ALTER TABLE "games" ADD FOREIGN KEY ("id") REFERENCES "developers" ("game_id");

ALTER TABLE "comments" ADD FOREIGN KEY ("id") REFERENCES "games" ("comment_ids");

ALTER TABLE "categories" ADD FOREIGN KEY ("id") REFERENCES "games" ("category_ids");

ALTER TABLE "game_statistics" ADD FOREIGN KEY ("game_id") REFERENCES "games" ("statistics_ids");

ALTER TABLE "users" ADD FOREIGN KEY ("id") REFERENCES "game_statistics" ("user_id");

ALTER TABLE "users" ADD FOREIGN KEY ("id") REFERENCES "comments" ("user_id");