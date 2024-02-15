const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET GROCERIES
router.get('/', (req, res) => {
    let queryText = `SELECT * FROM "groceries" ORDER BY 
    item_name ASC, purchased ASC;`;
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((err) => {
        console.log(`Error making database query ${queryText}`, err);
        res.sendStatus(500);
    });
});

// POST GROCERIES

router.post('/', (req, res) => {
    const newGrocery = req.body;
    console.log(req.body);
    let queryText = `INSERT INTO "groceries" ("item_name", "quantity", "unit")
    values ($1, $2, $3);`

    pool.query(queryText, [newGrocery])
        .then((result) => {
            res.sendStatus(201);
        }) 
        .catch((err) => {
            console.log(`Error making database query ${queryText}`, err);
            res.sendStatus(500);
        });
});

// UPDATE GROCERIES SET PURCHASE

router.put('/:id', (req, res) => {
    console.log('In put on server');
    let id = req.params.id;
    let queryText = `UPDATE "groceries" SET "purchased" = 'true' 
    WHERE 'id' = $1;`;

    pool.query(queryText, [id])
    .then((result) => {
        console.log(`PUT query worked ${queryText}`, result);
        res.sendStatus(500);
    });
});

// UPDATE GROCERIES UNPURCHASE ALL

router.put('/unpurchase', (req, res) => {
    let queryText = `UPDATE * FROM "groceries" SET "purchased" = 'false'`
})


// LEAVE AT BOTTOM
module.exports = router;