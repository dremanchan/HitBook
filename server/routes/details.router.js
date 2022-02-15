const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


router.get('/', rejectUnauthenticated, (req, res) => {
  const characterId = req.query.id;
  const sqlQuery = `SELECT
                      "character"."name" AS "characterName",
                      "character"."image" AS "characterImg",
                      "character"."strategy" AS "characterStrategy",
                      "character"."combos" AS "characterCombos"
                    FROM "character"
                    WHERE "character"."id"=$1
                    GROUP BY "characterName", "characterImg", "characterStrategy", "characterCombos";`;
  pool.query(sqlQuery, [characterId])
    .then(dbRes => {
      console.log(dbRes.rows);
      res.send(dbRes.rows);
    })
    .catch(err => {
      console.error('GET details failed', err);
      res.sendStatus(500);
    })
});

/**
 * POST route template
 */
router.post('/', rejectUnauthenticated,  (req, res) => {
  // POST route code here
});

module.exports = router;
