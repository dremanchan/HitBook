const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  const characterId = req.query.id;
  const sqlQuery = `
    SELECT
      "character"."name" AS "characterName",
      "character"."strategy" AS "characterStrategy",
      "character"."combos" AS "characterCombos",
      "character"."image" AS "characterImg",
      "character"."thumbnail" AS "characterThumb"
    FROM "character"
    JOIN "moves"
      ON "moves"."characterId" = "character"."id"
    WHERE "character"."id"=$1
    GROUP BY "characterName", "characterStrategy", "characterCombos","characterImg";
    `;
    pool.query(sqlQuery, [characterId])
      .then(dbRes => {
        console.log(dbRes.rows);
        res.send(dbRes.rows);
      })
      .catch(err => {
        console.error('GET character failed', err);
        res.sendStatus(500);
      });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
