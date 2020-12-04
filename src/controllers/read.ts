async function controllerRead(res: any, database: any) {
  const querySpec = {
    query: `SELECT * FROM c WHERE c.id=${res.params.id}`,
  };
  let items = await database.read(querySpec);
  return items;
}

export default controllerRead;
