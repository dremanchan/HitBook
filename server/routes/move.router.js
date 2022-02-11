const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  const characterId = req.query.id
  const sqlQuery = `
    SELECT 
        "move"."input" AS "moveInput",
        "move"."frames" AS "moveFrames"
    FROM "move"
    JOIN "character" on "move"."characterId"="character"."id"
    WHERE "characterId" = $1;
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
