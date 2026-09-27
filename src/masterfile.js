const tables = [
  {
    tableName: "doctor",
    routeName: "/doctor",
    fields: ["name", "lastname", "bio"],
    routes: ["get", "get-one", "put", "post", "delete"],
  },
  {
    tableName: "patient",
    routeName: "/patient",
    fields: ["name", "sickness"],
    routes: ["get", "delete"],
  },
];
module.exports = tables
