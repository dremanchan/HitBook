
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
    "name" VARCHAR (100) UNIQUE,
    "gameId" INTEGER,
    "strategy" VARCHAR (4096),
    "combos" VARCHAR (2048),
    "image" VARCHAR (2048)
);

-- Character input to character table
INSERT INTO "character" ("gameId", "name", "strategy", "combos", "image", "thumbnail")
VALUES  (1, 'Captain Falcon', 'Hit and Run', 'Down Throw -> Up Air -> Up Air', '/images/falcon.png', '/images/captain-falcon-ramen.');

INSERT INTO "character" ("gameId", "name", "strategy", "combos", "image", "thumbnail")
VALUES  (1, 'Ganondorf', 'Control space with large normals and pressure the enemy with aerials', 'Down Throw -> Down B', '/images/ganon.png', '/images/ganon.gif');

INSERT INTO "character" ("gameId", "name", "strategy", "combos", "image", "thumbnail")
VALUES  (1, 'Ike', 'Knock opponents into the air with grabs and tilts and finish with smash attacks and aerials', 'Up Tilt -> Up Air -> Forward Air', '/images/ike.png', '/images/ike.gif');

INSERT INTO "character" ("gameId", "name", "strategy", "combos", "image", "thumbnail")
VALUES  (1, 'Kirby', '', 'Up Tilt -> Up Tilt -> Up Tilt/ Forward Throw -> Up Special', '/images/kirby.jpeg', '/images/kirby.gif');



-- This table is for games
CREATE TABLE "game" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) UNIQUE,
);

-- Starter Game Input
INSERT INTO "game" ("name")
VALUES ('Smash Ultimate');

-- Character move table
CREATE TABLE "moves" (
    "id" SERIAL PRIMARY KEY,
    "input" VARCHAR (80),
    "frames" VARCHAR (80),
    "characterId" INTEGER
);

-- Starter moves

INSERT INTO "moves" ("input", "frames", "characterId")
VALUES 

('Neutral B grounded', '53-62', 1),
('Jab 1 (A)', '3', 1),
('Jab 2 (A, A)', '5', 1),
('Jab 3 (A, A, A)', '6', 1);
('Forward Smash', '19', 1);
('Down Smash', '19', 1);
('Up Smash', '22', 1);







-- Favorite Table

CREATE TABLE "favorite" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INTEGER,
    "characterId" INTEGER UNIQUE
);




