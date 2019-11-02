import { CarBrands } from "./CarBrands"

type Discount = {
    code: string;
    percent: number;
}

type Car = {
    id: number;
    price: number;
    brand: CarBrands;
    discount?: Discount;
}

// Without coalescing
function getDiscountWithoutCoalescing(car: Car): Discount | null {
    if (car.discount !== undefined && car.discount.percent <= 5 && car.price > 30000)
        return { code: "TEN", percent: 10 };
}

// With coalescing
function getDiscountWithCoalescing(car: Car): Discount | null {
    if ((car.discount ?? 0) <= 5 && car.price > 30000) {
        return { code: "TEN", percent: 10 };
    }
}

let car1: Car = {
    id: 1,
    price: 45000,
    brand: CarBrands.BMW
}

console.log(getDiscountWithoutCoalescing(car1));
console.log(getDiscountWithCoalescing(car1));