import "reflect-metadata";

import app from "./app";
import { ServerBootstrap } from "./core/bootstrap/server.bootstrap";

(async () => {
  const serverBootstrap = new ServerBootstrap(app);

  try {
    await serverBootstrap.initialize();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
