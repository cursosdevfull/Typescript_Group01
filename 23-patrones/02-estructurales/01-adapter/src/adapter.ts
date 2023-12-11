declare var axios: any;

export interface IHttp {
  call(url: string, callback: Function): void;
}

export class ClientHttp implements IHttp {
  async call(url: string, callback: Function): Promise<void> {
    //const response = await axios.get(url);
    //callback(response.data);
    fetch(url)
      .then((response) => response.json())
      .then((data) => callback(data));
  }
}
