const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");

// Get all characters
router.get("/", rejectUnauthenticated, (req, res) => {
  const sqlQuery = `
    SELECT * from "character" ORDER BY "name" DESC;
    `;
  pool
    .query(sqlQuery)
    .then((dbRes) => {
      console.log(dbRes.rows);
      res.send(dbRes.rows);
    })
    .catch((err) => {
      console.error("GET character failed", err);
      res.sendStatus(500);
    });
});

// Get selected character

router.get('/:id', rejectUnauthenticated, (req, res) => {
  const sqlText =`
    SELECT * FROM character
    WHERE "id" = $1
    ;`;
  const queryParams = [ req.params.id ]
  pool.query(sqlText, queryParams)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.error(`GET selected char failed`, error);
      res.sendStatus(500);
    });
});


/**
 * POST route template
 */
router.post("/", rejectUnauthenticated, (req, res) => {
  const queryText = `
  INSERT INTO "character" ( "name", "gameId", "strategy", "combos", "image","thumbnail")
  VALUES ($1, $2, $3, $4, $5, $6);`;
  const queryParams = [
    req.body.name,
    req.body.gameId,
    req.body.strategy,
    req.body.combos,
    req.body.image,
    req.body.thumbnail,
  ];
  pool
    .query(queryText, queryParams)
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.error("POST character failed", err);
      res.sendStatus(500);
    });
});

// Update characters
router.put(":id", rejectUnauthenticated, (req, res) => {
  const sqlText = `
    UPDATE "character"
    SET 
      "name" = $1,
      "strategy" = $2,
      "combos" = $3,
      "image" = $4,
    WHERE "id" = $5
'`;
  const queryParams = [
    req.body.name,
    req.body.strategy,
    req.body.combos,
    req.body.image,
    req.params.id,
  ];
  pool
    .query(sqlText, queryParams)
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error("PUT failed ", error);
      res.sendStatus(500);
    });
});

module.exports = router;
