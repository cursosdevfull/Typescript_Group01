export class Database {
  private static instance: Database;
  private constructor() {
    console.log("Initialize database");
  }

  static getInstanceDatabase(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  private connection(): Promise<string> {
    return new Promise((resolve, reject) => {
      const timeExecution = Math.round(Math.random() * 4 + 1) * 1000;
      console.log(`Time execution: ${timeExecution}`);

      setTimeout(() => {
        const connectionDB = `connection: ${new Date().toISOString()}`;
        resolve(connectionDB);
      }, timeExecution);
    });
  }

  async getConnection(): Promise<string> {
    return await this.connection();
  }
}
