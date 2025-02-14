import { calculateAge } from "./module";

let people20years;

beforeEach(() => {
    let date = new Date();
    people20years = {
        birth: new Date(date.setFullYear(date.getFullYear() - 20))
    };
    console.log(people20years);
});

/**
 * @function calculateAge
 */

describe("calculateAge Unit Test Suites", () => {
    it("should return a correct age", () => {
        expect(calculateAge(people20years)).toEqual(20);
    });

    it('should throw a "missing param p" error', () => {
        expect(() => calculateAge()).toThrow("missing param p");
    });

    it("should throw an error when the parameter is not an object", () => {
        expect(() => calculateAge("notAnObject")).toThrow("parameter must be an object");
    });

    it("should throw an error when the object does not contain a birth field", () => {
        const p = {};
        expect(() => calculateAge(p)).toThrow("missing birth field");
    });

    it("should throw an error when the birth field is not a Date object", () => {
        const person = { birth: "notADate" };
        expect(() => calculateAge(person)).toThrow("birth must be a valid Date object");
    });
});
