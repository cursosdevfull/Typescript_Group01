class DecameronAPI {
    searchByAvailability(params) {
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
    searchByHotel(params) {
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
export class Facade {
    constructor() {
        this.decameronAPI = new DecameronAPI();
        this.marriotAPI = new MarriotAPI();
    }
    search(params) {
        return Promise.all([
            this.decameronAPI.searchByAvailability(params),
            this.marriotAPI.searchByHotel(params),
        ]);
    }
}
