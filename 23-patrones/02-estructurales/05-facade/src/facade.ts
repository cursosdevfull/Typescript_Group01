class DecameronAPI {
  searchByAvailability(params: ParametersSearch) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { name: "Decameron Marazul", price: 100, type: "Luxury" },
          { name: "Decameron Baru", price: 200, type: "Economic" },
          { name: "Decameron Galeon", price: 300, type: "Luxury" },
        ]);
      }, 2000);
    });
  }
}

class MarriotAPI {
  searchByHotel(params: ParametersSearch) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { name: "Marriot Cartagena", price: 100, type: "Luxury" },
          { name: "Marriot Bogota", price: 200, type: "Economic" },
          { name: "Marriot Medellin", price: 300, type: "Luxury" },
        ]);
      }, 4000);
    });
  }
}

export interface ParametersSearch {
  dateStart: Date;
  days: number;
  people: {
    adults: number;
    children: number;
  };
  price: {
    min: number;
    max: number;
  };
}

export class Facade {
  private readonly decameronAPI: DecameronAPI;
  private readonly marriotAPI: MarriotAPI;

  constructor() {
    this.decameronAPI = new DecameronAPI();
    this.marriotAPI = new MarriotAPI();
  }

  search(params: ParametersSearch) {
    return Promise.all([
      this.decameronAPI.searchByAvailability(params),
      this.marriotAPI.searchByHotel(params),
    ]);
  }
}
