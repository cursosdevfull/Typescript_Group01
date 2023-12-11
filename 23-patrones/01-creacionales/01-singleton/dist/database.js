var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Database {
    constructor() {
        console.log("Initialize database");
    }
    static getInstanceDatabase() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
    connection() {
        return new Promise((resolve, reject) => {
            const timeExecution = Math.round(Math.random() * 4 + 1) * 1000;
            console.log(`Time execution: ${timeExecution}`);
            setTimeout(() => {
                const connectionDB = `connection: ${new Date().toISOString()}`;
                resolve(connectionDB);
            }, timeExecution);
        });
    }
    getConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.connection();
        });
    }
}
