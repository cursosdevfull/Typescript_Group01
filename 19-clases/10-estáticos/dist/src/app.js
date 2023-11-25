"use strict";
class Database {
    static getConnection() {
        // console.log("host", this.host);
        // console.log("Connection to database");
        console.log(`${this.protocol}://${this.host}:${this.port}/${this.user}@${this.password}`);
    }
    static createConnection(host, protocol, 
    //port: number,
    user, password) {
        // if(this.protocol !== "http" && this.protocol !== "https" && this.protocol !== "ftp" && this.protocol !== "ftps" && this.protocol !== "ssh" && this.protocol !== "sftp" && this.protocol !== "tcp" && this.protocol !== "udp") throw "Protocol invalid"
        const protocolList = [
            "http",
            "https",
            "ftp",
            "ftps",
            "ssh",
            "sftp",
            "tcp",
            "udp",
        ];
        if (!protocolList.includes(protocol))
            throw "Protocol invalid";
        this.host = host;
        this.protocol = protocol;
        //this.port = port;
        this.user = user;
        this.password = password;
    }
    closeConnection() {
        console.log("Close connection");
        Database.getConnection();
    }
}
Database.port = 3306;
Database.createConnection("localhost", "http", "root", "123456");
Database.getConnection();
const db = new Database();
db.closeConnection();
//console.log("password", Database.password);
//console.log("port", Database.port);
