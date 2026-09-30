const tables = [
  {
    tableName: "doctor",
    routeName: "/doctor",
    fields: ["name", "lastname", "bio"],
    routes: {
      get: true,
      get_one: true,
      post: true,
      patch: true,
      put: true,
    },
  },
  {
    tableName: "patient",
    routeName: "/patient",
    fields: ["name", "sickness"],
    routes: {
      get: true,
      get_one: true,
      post: true,
      patch: true,
      put: true,
    },
  },
];
module.exports = tables;
