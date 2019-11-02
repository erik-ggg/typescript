import { CarBrands } from "./CarBrands"

type Discount = {
    code: string;
    percent: number;
    used?: boolean;
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

// Coalescing
console.log(getDiscountWithoutCoalescing(car1));
console.log(getDiscountWithCoalescing(car1));

// Chaining
let discount1: Discount = {
    code: "Example",
    percent: 15
}

car1.discount = discount1;

// Without chaining
let withoutChaining = car1 ? (car1.discount ? car1.discount.used : undefined) : undefined;  // undefined
// With chaining
let withChaining = car1 ?.discount ?.used;    // undefined
let withChaining1 = car1 ?.discount ?.percent;    // 15

console.log(withoutChaining)
console.log(withChaining)
console.log(withChaining1)