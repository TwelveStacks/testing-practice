import analyzeArray from "./analyzeArray";

describe('Analyze  Array', () => {
    test('should take an array of numbers and return an object with an "average" property.', () => {
        expect(analyzeArray([1, 2, 3, 4])).toHaveProperty("average");
    });

    test('should take an array of numbers and return an object with an "min" property.', () => {
        expect(analyzeArray([1, 2, 3, 4])).toHaveProperty("min");
    });

    test('should take an array of numbers and return an object with an "max" property.', () => {
        expect(analyzeArray([1, 2, 3, 4])).toHaveProperty("max");
    });

    test('should take an array of numbers and return an object with an "length" property.', () => {
        expect(analyzeArray([1, 2, 3, 4])).toHaveProperty("length");
    });

    test('should throw error if the input is not an array.', () => {
        expect(() => mockFunction(123)).toThrowError();
    });

    test('on an empty array, should return NaN.', () => {
        expect(isNaN(analyzeArray([]).average)).toBeTruthy();
        expect(isNaN(analyzeArray([]).min)).toBeTruthy();
        expect(isNaN(analyzeArray([]).max)).toBeTruthy();
        expect(analyzeArray([]).length).toEqual(0);
    });
});