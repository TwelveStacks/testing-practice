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
});