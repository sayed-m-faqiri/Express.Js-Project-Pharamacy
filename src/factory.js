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
  if(obj.routes.post) {
    app.post(obj.routeName + "s" , (req,res) => {
      const {name , lastname , bio , sickness} = obj.fields
      db 
        .query()
    })
  }
});
module.exports = app;
