const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


// TODO: This route adds a new feedback entry
router.post('/', (req, res) => {
    const queryText = `
    INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);
    `
    pool.query(queryText, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
    .then(response => {
        res.status(201).send('Succesfully posted feedback')
    }).catch(err => {
        res.sendStatus(500)
    })
})


// DO NOT EDIT THIS ROUTE
// This route must return all feedback.
router.get('/', (req, res) => {
    console.log('testing')
    const sqlText = `SELECT * FROM "feedback" ORDER BY "id"`;
    pool.query(sqlText).then(result => {
        res.send(result.rows)
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
})
router.delete('/:id', (req,res) => {
    console.log('in DELETE')
    const queryText = `DELETE FROM "feedback" WHERE "id"=$1;`
    pool.query(queryText, [req.params.id]).then(response => {
        res.status(204).send('Deleted Successfully.')
    }).catch(err => {
        console.error('Error deleting', err);
    })
})
router.put('/:id', (req,res) => {
    console.log('in PUT')
    const queryText = `UPDATE "feedback"
     SET "flagged"= NOT "flagged"
     WHERE "id"=$1;`
    pool.query(queryText, [req.params.id]).then(response => {
        res.status(204).send('PUT Successfully.')
    }).catch(err => {
        console.error('Error putting', err);
    })
})

module.exports = router;
