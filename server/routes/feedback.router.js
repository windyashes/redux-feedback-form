const express = require('express');
const router = express.Router;
const pool = require('../modules/pool')



// TODO: This route adds a new feedback entry
router.post('/', (req, res) => {

})


// DO NOT EDIT THIS ROUTE
// This route must return all feedback.
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM 'feedback'`;
    pool.query(sqlText).then(result => {
        res.send(result.rows)
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router;