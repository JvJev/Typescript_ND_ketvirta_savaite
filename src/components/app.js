"use strict";
// import cars from "../data/cars";
// import brands from "../data/brands";
// import models from "../data/models";
// import CarsCollection from '../helpers/cars-collection';
// import stringifyProps from "../helpers/stingify-object";
//
//
// class App {
//   private htmlElement: HTMLElement;
//   private carsCollection: CarsCollection;
//
//   constructor(selector: string) {
//     const foundElement = document.querySelector<HTMLElement>(selector);
//     this.carsCollection = new CarsCollection({ cars, brands, models });
//
//
//     if (foundElement === null) throw new Error(`Nerastas elementas su selektoriumi '${selector}'`);
//
//     this.htmlElement = foundElement;
//
//   //   const carsCollection = {
//   //
//   //   }
//   // }
//
//   initialize = (): void => {
//
//
//     const carTable = new Table({
//       title: 'Visi automobiliai',
//       Columns: {
//         id: 'Id',
//         brand: 'Markė',
//         model: 'Modelis',
//         price: 'Kaina',
//         year: 'Metai',
//       }
//       rowsData: this.carsCollection.all.map(stringifyProps),
//     });
//     const container = document.createElement('div');
//     container.className = 'container my-5';
//     container.innerHTML = 'Laukiu kol būsiu sukurtas';
//
//     this.htmlElement.append(container);
//   };
// }
//
// export default App;
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//-----------------------------------------------
// kazkas napavyko, todel nusikopijavau sia dali
const table_1 = __importDefault(require("./table"));
const cars_1 = __importDefault(require("../data/cars"));
const brands_1 = __importDefault(require("../data/brands"));
const models_1 = __importDefault(require("../data/models"));
const cars_collection_1 = __importDefault(require("../helpers/cars-collection"));
const stingify_object_1 = __importDefault(require("../helpers/stingify-object"));
class App {
    constructor(selector) {
        this.initialize = () => {
            const carTable = new table_1.default({
                title: 'Visi automobiliai',
                columns: {
                    id: 'Id',
                    brand: 'Markė',
                    model: 'Modelis',
                    price: 'Kaina',
                    year: 'Metai',
                },
                rowsData: this.carsCollection.all.map(stingify_object_1.default),
            });
            ;
            const container = document.createElement('div');
            container.className = 'container my-5';
            container.appendChild(carTable.htmlElement);
            this.htmlElement.append(container);
        };
        const foundElement = document.querySelector(selector);
        this.carsCollection = new cars_collection_1.default({ cars: cars_1.default, brands: brands_1.default, models: models_1.default });
        if (foundElement === null)
            throw new Error(`Nerastas elementas su selektoriumi '${selector}'`);
        this.htmlElement = foundElement;
    }
}
exports.default = App;
