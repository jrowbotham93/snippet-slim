import * as dotenv from "dotenv";

dotenv.config();

const {
  DATABASE_ENDPOINT,
  DATABASE_KEY,
  DATABASE_ID,
  CONTAINER_ID,
} = process.env;

export const config = {
  endpoint: `${DATABASE_ENDPOINT}`,
  key: `${DATABASE_KEY}`,
  databaseId: `${DATABASE_ID}`,
  containerId: `${CONTAINER_ID}`,
  partitionKey: { kind: "Hash", paths: ["/category"] },
};
