import { Database } from "./database.js";

(async () => {
  const database = Database.getInstanceDatabase();
  const connection = await database.getConnection();
  console.log(connection);
})();
