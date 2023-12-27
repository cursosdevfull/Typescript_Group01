import { Application } from "express";
import http from "http";

export class ServerBootstrap {
  constructor(private readonly app: Application) {}

  async initialize() {
    return new Promise((resolve, reject) => {
      const server = http.createServer(this.app);
      const port = 4000;

      server
        .listen(port)
        .on("listening", () => {
          console.log(`Server running at http://localhost:${port}`);
          resolve(true);
        })
        .on("error", (error: NodeJS.ErrnoException) => {
          console.error(error);
          reject(error);
          process.exit(1);
        });
    });
  }
}
