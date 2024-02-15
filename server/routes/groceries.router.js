const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// GET GROCERIES
router.get("/", (req, res) => {
  let queryText = `SELECT * FROM "groceries" ORDER BY 
  (purchased is true) ASC, item_name ASC;`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(`Error making database query ${queryText}`, err);
      res.sendStatus(500);
    });
});

// POST GROCERIES

router.post("/", (req, res) => {
  const newGrocery = req.body;
  console.log(req.body);
  let queryText = `INSERT INTO "groceries" ("item_name", "quantity", "unit")
    values ($1, $2, $3);`;

  pool
    .query(queryText, [
      newGrocery.item_name,
      newGrocery.quantity,
      newGrocery.unit,
    ])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(`Error making database query ${queryText}`, err);
      res.sendStatus(500);
    });
});

// UPDATE GROCERIES SET PURCHASE

router.put("/:id", (req, res) => {
  console.log("In put on server");
  let id = req.params.id;
  console.log(id);
  let queryText = `UPDATE "groceries" SET "purchased" = true 
    WHERE "id" = $1;`;

  pool
    .query(queryText, [id])
    .then((result) => {
      console.log(`PUT query worked ${queryText}`, result);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(`PUT query failed ${queryText}`, err);
      res.sendStatus(500);
    });
});

// UPDATE GROCERIES UNPURCHASE ALL

router.put("/g/unpurchase", (req, res) => {
  let queryText = `UPDATE "groceries" SET "purchased" = 'false'`;

  pool
    .query(queryText)
    .then((result) => {
      console.log(`PUT query worked ${queryText}`, result);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(`PUT query failed, ${queryText}`, err);
    });
});

// DELETE SINGLE ITEM

router.delete("/:id", (req, res) => {
  console.log("req params: ", req.params);

  let id = req.params.id;

  let queryText = `DELETE FROM "groceries" WHERE "id" = $1;`;

  pool
    .query(queryText, [id])
    .then((result) => {
      console.log(`DELETE query worked, ${queryText}`, result);
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log(`DELETE query failed, ${queryText}`, err);
      res.sendStatus(500);
    });
});

// DELETE ALL

router.delete("/g/all", (req, res) => {
  let queryText = `DELETE FROM "groceries";`;

  pool
    .query(queryText)
    .then((result) => {
      console.log(`DELETE query worked, ${queryText}`, result);
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log(`DELETE query failed, ${queryText}`, err);
      res.sendStatus(500);
    });
});

// LEAVE AT BOTTOM
module.exports = router;
