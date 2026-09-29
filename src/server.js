const PORT = 5000;
const app = require("./factory.js");

// app.get("/", (_, res) => {
//   db.query(`SELECT NOW();`)
//     .then(() => {
//       res.json({
//         message: "Server Is Running On Port" + PORT,
//         database: "Database Is Active!",
//       });
//     })
//     .catch(() => {
//       res.json({
//         message: "Server Is Running On Port" + PORT,
//         database: "Database Is Inactive!",
//       });
//     });
// });
// app.get("/doctors", (req, res) => {
//   db.query(`SELECT * FORM doctor;`)
//     .then((result, error) => {
//       res.json(result.rows);
//     })
//     .catch(() => {
//       res.json({ error: "Something Went Wrong!" });
//     });
// });
// app.get("/doctor/:id", (req, res) => {
//   const { id } = req.params;
//   db.query(`SELECT * FROM doctor WHERE id = ${id};`)
//     .then((result, error) => {
//       res.json(result.rows);
//     })
//     .catch(() => {
//       res.json({ error: "Something Went Wrong!" });
//     });
// });
// app.post("/doctor", (req, res) => {
//   const { name, lastname, bio } = req.body;

//   db.query(
//     `INSERT INTO doctor (name , lastname , bio) VALUES ('${name}' , '${lastname}' , '${bio}');`,
//   )
//     .then((result) => {
//       res.json(result[1].rows[0]);
//     })
//     .catch(() => {
//       res.json({ error: "Something Went Wrong!" });
//     });
// });
// app.put("/doctor/:id", (req, res) => {
//   const { id } = req.params;
//   const { data } = req.body;
//   db.query(
//     `UPDATE doctor SET name='${data.name}' , 'lastname=${data.lastname}' , 'bio=${data.bio}' WHERE id = '${id}'`,
//   )
//     .then(() => {
//       res.json({ message: "DONE!" });
//     })
//     .catch(() => {
//       res.json({ error: "Something Went Wrong!" });
//     });
// });
// app.delete("/doctor/:id", (req, res) => {
//   const { id } = req.params;
//   db.query(`DELETE FROM doctor WHERE id = ${id}`)
//      .then((result) => {
//       res.json(result[result.length - 1 ].rows[0]);
//     })
//     .catch(() => {
//       res.json({ error: "Something Went Wrong!" });
//     });
// });

app.listen(PORT, () => {
  console.log("Server Is Running On Port" + PORT);
});
