import { CosmosClient } from "@azure/cosmos";
import { config } from "../config";
import { SnippetDao } from "./dao";

export default function createDb(db: Object) {
  if (!db) throw new Error("Missing database!");

  if (db === "cosmosDb") {
    console.log("connecting to cosmos");

    const { endpoint, key, databaseId, containerId } = config;

    const client = new CosmosClient({ endpoint, key });
    const database = client.database(databaseId);
    console.log(`connected, using ${database}`);
    const container = database.container(containerId);
    console.log(`connected, using ${container}`);
    const db = new SnippetDao(container);
    return db;
  }
}
