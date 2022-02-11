const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
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
router.post('/', rejectUnauthenticated, (req, res) => {
  console.log('req.user is', req.body.user);
  console.log('req.characterId is', req.body.characterId);
  const sqlQuery = `
  INSERT INTO "favorite" ( "user_Id", "characterId" )
  VALUES ( $1, $2 );`;
  const queryParams = [
    req.body.user,
    req.body.characterId
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
