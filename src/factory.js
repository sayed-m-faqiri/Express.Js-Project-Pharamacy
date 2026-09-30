const { bodyParseSQL } = require("../utils");
const db = require("./db_config");
const tables = require("./masterfile");
const express = require("express");
const app = express();
app.use(express.json());

tables.forEach((obj) => {
  if (obj.routes.get) {
    app.get(obj.routeName + "s", (_, res) => {
      db.query(`SELECT * FROM ${obj.tableName}`)
        .then((result) => {
          res.json(result.rows);
        })
        .catch((error) => {
          res.json(error);
        });
    });
  }
  if (obj.routes.get_one) {
    app.get(obj.routeName + "/:id", (req, res) => {
      const { id } = req.params;
      db.query(`SELECT * FROM ${obj.tableName}  WHERE id = '${id}';`)
        .then((result) => {
          res.json(result.rows);
        })
        .catch((error) => {
          res.json(error);
        });
    });
  }
  if (obj.routes.post) {
    app.post(obj.routeName + "s", (req, res) => {
      const { name, lastname, bio, sickness } = obj.fields;
      db.query();
    });
  }
  if (obj.routes.post) {
    app.post(obj.routeName + "s", (req, res) => {
      const body = req.body;
      const columns = obj.fields.join(",");
      let values = bodyParseSQL(columns, body);
      db.query(
        `INSERT INTO  ${obj.tableName} (${columns}) VALUES(${values}) ; SELECT * FROM ${obj.tableName} ORDER BY id DESC LIMIT 1`,
      )
        .then((result) => {
          res.json(result[1].rows[0]);
        })
        .catch(() => {
          res.json({
            message: "Error Occured!",
          });
        });
    });
  }
  if (obj.routes.put) {
    app.put(obj.routeName + "/:id", async (req, res) => {
      const body = req.body;
      const { id } = req.params;
      const keys = Object.keys(body);
      const values = Object.values(body);
      try {
        for (let i = 0; i <= keys.length - 1; i++) {
          console.log(`${keys[i]} = ${values[i]}`);
          await db.query(
            `UPDATE ${obj.tableName} SET ${keys[i]} = '${values[i]}' WHERE id = ${id} ;`,
          );
        }
        res.json({
          message: "Updated!",
        });
      } catch (error) {
        console.log(error);
        res.json({
          error: "Error Ocurred!",
        });
      }
    });
  }
  if (obj.routes.delete) {
    app.delete(obj.routeName + "/:id", (req, res) => {
      const { id } = req.params;
      db.query(`DELETE FROM ${obj.tableName} WHERE id = ${id}`)
        .then(() => {
          res.json({
            message: "Deleted Successfuly!",
          });
        })
        .catch((error) => {
          res.json(error);
        });
    });
  }
});
module.exports = app;
