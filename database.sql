
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "admin" BOOLEAN DEFAULT FALSE,
);

-- This table holds the character information
CREATE TABLE "character" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100),
    "gameId" INTEGER,
    "moveList" VARCHAR (4096),
    "strategy" VARCHAR (4096),
    "combos" VARCHAR (2048),
    "image" VARCHAR (2048)
);

-- Character input to character table
INSERT INTO "character" ("gameId", "name", "moveList", "strategy", "combos", "image")
VALUES  (3, 'Captain Falcon', 'Falcon Punch', 'Hit and Run', 'Downthrow -> Knee', 'public/images/cfalcon.jpeg');

-- This table is for games
CREATE TABLE "game" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80),
);

INSERT INTO "game" ("name")
VALUES ('Smash Ultimate');


