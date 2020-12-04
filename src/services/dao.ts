export class SnippetDao {
  container: Object;

  constructor(container: Object) {
    this.container = container;
  }
  async read(item: any) {
    try {
      let query = `SELECT * from c`;
      const { resources } = await this.container.items.query(query).fetchAll();
      return resources;
    } catch (error) {
      console.log(error);
    }
  }
}
