//import * as XML from "xml2js";
declare var require: any;

const XML = require("xml2js");

export interface IData {
  title: string;
  quantity: number;
  total: number;
}

export interface ISummary {
  origin: string;
  summary: object;
}

export abstract class Data {
  async getSummary(): Promise<ISummary> {
    return {
      origin: this.getOrigin(),
      summary: await this.getData(),
    };
  }

  protected abstract getData(): Promise<IData[]>;
  protected abstract getOrigin(): string;
}

export class SucursalLima extends Data {
  constructor(private readonly dataJSON: object) {
    super();
  }

  protected getData(): Promise<IData[]> {
    const data = (this.dataJSON as any[]).reduce((acc: any, item: any) => {
      if (acc[item.title]) {
        acc[item.title].quantity += item.quantity;
        acc[item.title].total += item.total;
      } else {
        acc[item.title] = {};
        acc[item.title].quantity = 1;
        acc[item.title].total = item.total;
      }
    }, {});

    return Promise.resolve(data);
  }

  protected getOrigin(): string {
    return "SUCURSAL LIMA";
  }
}

export class SucursalArequipa extends Data {
  constructor(private readonly dataXML: any) {
    super();
  }

  protected async getData(): Promise<IData[]> {
    const promise = new Promise((resolve, reject) => {
      XML.parseString(this.dataXML, (err: any, result: any) => {
        let data = result.sales.book;

        data = data
          .map((el: any) => ({
            title: el.title[0],
            price: Number(el.price[0]),
          }))
          .reduce((acc: any, item: any) => {
            if (acc[item.title]) {
              acc[item.title].quantity += 1;
              acc[item.title].total += item.price;
            } else {
              acc[item.title] = {};
              acc[item.title].quantity = 1;
              acc[item.title].total = item.price;
            }
          }, {});

        resolve(data);
      });
    });

    const result: any = await promise;
    return result;
  }

  protected getOrigin(): string {
    return "SUCURSAL AREQUIPA";
  }
}
