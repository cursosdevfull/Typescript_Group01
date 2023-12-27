var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const XML = require("xml2js");
export class Data {
    getSummary() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                origin: this.getOrigin(),
                summary: yield this.getData(),
            };
        });
    }
}
export class SucursalLima extends Data {
    constructor(dataJSON) {
        super();
        this.dataJSON = dataJSON;
    }
    getData() {
        const data = this.dataJSON.reduce((acc, item) => {
            if (acc[item.title]) {
                acc[item.title].quantity += item.quantity;
                acc[item.title].total += item.total;
            }
            else {
                acc[item.title] = {};
                acc[item.title].quantity = 1;
                acc[item.title].total = item.total;
            }
        }, {});
        return Promise.resolve(data);
    }
    getOrigin() {
        return "SUCURSAL LIMA";
    }
}
export class SucursalArequipa extends Data {
    constructor(dataXML) {
        super();
        this.dataXML = dataXML;
    }
    getData() {
        return __awaiter(this, void 0, void 0, function* () {
            const promise = new Promise((resolve, reject) => {
                XML.parseString(this.dataXML, (err, result) => {
                    let data = result.sales.book;
                    data = data
                        .map((el) => ({
                        title: el.title[0],
                        price: Number(el.price[0]),
                    }))
                        .reduce((acc, item) => {
                        if (acc[item.title]) {
                            acc[item.title].quantity += 1;
                            acc[item.title].total += item.price;
                        }
                        else {
                            acc[item.title] = {};
                            acc[item.title].quantity = 1;
                            acc[item.title].total = item.price;
                        }
                    }, {});
                    resolve(data);
                });
            });
            const result = yield promise;
            return result;
        });
    }
    getOrigin() {
        return "SUCURSAL AREQUIPA";
    }
}
