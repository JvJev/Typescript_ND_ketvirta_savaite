// import Car from "../types/car";
// import Model from "../types/model";
// import Brand from "../types/brand";
// import CarJoined from "../types/car-joined";
//
// type CarsCollectionProps = {
//     cars: Car[],
//     brands: Brand[],
//     models: Model[],
//
// };
//
// class CarsCollection {
//     private props: CarsCollectionProps;
//
//     constructor(props: CarsCollectionProps) {
//         this.props = props;
//     }
//
//     private joinCar = ({model_id, ...car}: Car) => {
//         const { brands, models } = this.props;
//         const carModel = models.find((model) => model.id === model_id);
//         const carBrand = brands.find((brand) => brand.id === brand.id);
//
//
//         return {
//             ...car,
//             brand: (carBrand && carBrand.title) ?? 'unknown',
//             model: (carModel && carModel.title) ?? 'unknown',
//         };
//     };
//     public get all(): CarJoined[] {
//         return this.props.cars.map(this.joinCar);
//     }
// }
//
// export default CarsCollection;

//mano variantas

import Car from '../types/car';
import Model from '../types/model';
import Brand from '../types/brand';
import CarJoined from '../types/car-joined';

type CarsCollectionProps = {
    cars: Car[],
    brands: Brand[],
    models: Model[],
};

class CarsCollection {
    private props: { cars: { year: number; modelId: string; price: number; id: string }[] };

    constructor(props: {
        cars: ({ year: number; modelId: string; price: number; id: string } | { year: number; modelId: string; price: number; id: string } | { year: number; modelId: string; price: number; id: string } | { year: number; modelId: string; price: number; id: string } | { year: number; modelId: string; price: number; id: string } | { year: number; modelId: string; price: number; id: string } | { year: number; modelId: string; price: number; id: string } | { year: number; modelId: string; price: number; id: string } | { year: number; modelId: string; price: number; id: string } | { year: number; modelId: string; price: number; id: string } | { year: number; modelId: string; price: number; id: string } | { year: number; modelId: string; price: number; id: string } | { year: number; modelId: string; price: number; id: string } | { year: number; modelId: string; price: number; id: string } | { year: number; modelId: string; price: number; id: string } | { year: number; modelId: string; price: number; id: string } | { year: number; modelId: string; price: number; id: string } | { year: number; modelId: string; price: number; id: string } | { year: number; modelId: string; price: number; id: string } | { year: number; modelId: string; price: number; id: string } | { year: number; modelId: string; price: number; id: string } | { year: number; modelId: string; price: number; id: string } | { year: number; modelId: string; price: number; id: string } | { year: number; modelId: string; price: number; id: string } | { year: number; modelId: string; price: number; id: string })[]; models: ({ brandId: string; id: string; title: string } | { brandId: string; id: string; title: string } | { brandId: string; id: string; title: string } | { brandId: string; id: string; title: string } | { brandId: string; id: string; title: string } | { brandId: string; id: string; title: string } | { brandId: string; id: string; title: string } | { brandId: string; id: string; title: string } | { brandId: string; id: string; title: string })[]; brands: ({ id: string; title: string } | { id: string; title: string } | { id: string; title: string })[]
    }) {
        this.props = props;
    }

    private joinCar = ({ model_id, ...car}: Car) => {
        // @ts-ignore
        const { brands, models } = this.props;
        const carModel = models.find((model: { id: string; }) => model.id === model_id);
        const carBrand = brands.find((brand: { id: any; }) => brand.id === carModel?.brand_id);

        return {
            ...car,
            brand: (carBrand && carBrand.title) ?? 'unknown',
            model: (carModel && carModel.title) ?? 'unknown',
        };
    };

    public get all(): CarJoined[] {
        // @ts-ignore
        return this.props.cars.map(this.joinCar);
    }


}

export default CarsCollection;
