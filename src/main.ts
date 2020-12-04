import createDatabase from "./services/createDatabase";

let database = createDatabase("cosmosDb") || {};

export default database;
