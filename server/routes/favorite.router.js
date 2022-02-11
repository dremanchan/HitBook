const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
  const user = req.user;
  const sqlQuery = `
  SELECT * FROM "favorite"
  JOIN "user"
  ON "user"."id"="favorite"."user_id"
  WHERE "favorite"."user_id" =$1;
  `;
  pool.query(sqlQuery, [user])
    .then(dbRes => {
      console.log(dbRes.rows);
      res.send(dbRes.Rows);
    })
    .catch(err => {
      console.error('GET favorites failed', error);
      res.sendStatus(500);
    })

});

// Post Favorites Route
router.post('/', (req, res) => {
  const sqlQuery = `
  INSERT INTO "favorite" ( "userId", "characterId" )
  VALUES ( $1, $2 );`;
  const queryParams = [
    req.user.id,
    req.character.id
  ]
  pool.query(sqlQuery, queryParams)
  .then( result => {
    res.sendStatus(201);
  }).catch(err => {
    console.error('POST favorites failed', err);
    res.sendStatus(500);
  })
});

router.put('/', (req, res) => {

})

module.exports = router;
