const db = require("./db_config");
const app = require("./factory");

app.post("/prescription", (req, res) => {
  const { doctor_id, patient_id, total_amount, note, items } = req.body;

  db.query(
    `INSERT INTO prescriptionHeader (doctor_id , patient_id , total_amount , note)
            VALUES('${doctor_id}' , '${patient_id}' , '${total_amount}' , '${note}') RETURNING *`,
  )
    .then((result) => {
      let newId = result.rows[0].id;
      let values = items
        .map((item) => {
          return `('${newId}', '${item.medicine_id}','${item.price}' , '${item.quantity}' ,'${item.note}')`;
        })
        .join(",");
      db.query(
        `INSERT INTO prescriptionItems (prescription_id , medicine_id , price , quantity , note)
                    VALUES ${values} RETURNING *;
                `,
      ).then((result) => {
        res.json(result.rows);
      });
    })
    .catch((error) => {
      res.json(error);
    });
});

module.exports = app;
