import Brand from "./brand";
import Car from "./car";
import Model from "./model";

type CarJoined = {
    brand: Brand['title'],
    model: Model['title'],
    id: Car['id'],
    price: Car['price'],
    year: Car['year']
};

export default CarJoined;

//veikia
