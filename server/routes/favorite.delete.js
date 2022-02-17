const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {


});



router.delete('/:id', rejectUnauthenticated, (req, res) => {
  const sqlQuery = `
  DELETE FROM "favorite"
  WHERE "favorite"."characterId" = $1 AND "favorite"."user_Id" = $2`;
  const queryParams = [
    req.params.id,
    req.user.id
  ];
  pool.query(sqlQuery, queryParams)
  .then( dbRes => {
    res.sendStatus(201);
  }).catch(err => {
    console.error('DELETE favorites failed', err);
    res.sendStatus(500);
  })
});

router.put('/', (req, res) => {

})

module.exports = router;
