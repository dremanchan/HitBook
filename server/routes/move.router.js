const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

// Router to render moves table
router.get("/", rejectUnauthenticated, (req, res) => {
  const characterId = req.query.id;
  const sqlQuery = `
    SELECT 
        "move"."input" AS "moveInput",
        "move"."frames" AS "moveFrames",
        "move"."id",
        "move"."characterId"
    FROM "move"
    JOIN "character" on "move"."characterId"="character"."id"
    WHERE "characterId" = $1;
    `;
  pool
    .query(sqlQuery, [characterId])
    .then((dbRes) => {
      console.log(dbRes.rows);
      res.send(dbRes.rows);
    })
    .catch((err) => {
      console.error("GET character failed", err);
      res.sendStatus(500);
    });
});

// Route to add new moves
router.post("/", (req, res) => {
  const sqlQuery =`
  INSERT INTO "move" ("input", "frames", "characterId")
  VALUES ($1, $2, $3);`;
  const queryParams = [
    req.body.input,
    req.body.frames,
    req.body.characterId
  ];
  pool.query(sqlQuery, queryParams)
    .then(dbRes => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error('POST moves failed', err);
      res.sendStatus(500);
    })
});

// Delete Route
router.delete("/:id", rejectUnauthenticated, (req, res) => {
  console.log('req.body is,', req.body.id);

  const sqlQuery = `
  DELETE FROM "move"
  WHERE "move"."id" = $1 AND "move"."characterId" = $2
  ;`;
  // This isn't working
  const queryParams = [
    req.body.id,
    req.body.characterId
  ];
  pool
    .query(sqlQuery, queryParams)
    .then((dbRes) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error("DELETE move failed", err);
      res.sendStatus(500);
    });
});

module.exports = router;
