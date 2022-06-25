// Aliases
type PlaneBrand = string;
type PlaneType = string;
type PlaneYear = number;
type Plane = {
    brand: PlaneBrand,
    pType: PlaneType,
    year: PlaneYear
};

const planeBrand: PlaneBrand = "Airbus A350-1000 XWB";
const planeType: PlaneType = "Commercial";
const planeYear: PlaneYear = 2018;

const plane: Plane = {
    brand: planeBrand,
    pType: planeType,
    year: planeYear

}

console.log(plane);