import calculator from './calculator';

// Testing the add function in the calculator module.
describe('Add', () => {
    it('should add two numbers together', () => {
        expect(calculator.add(2, 3)).toBe(5);
    });
});

// Testing the subtract function in the calculator module.
describe('Subtract', () => {
    it('should subtract one number from another', () => {
        expect(calculator.subtract(4, 1)).toEqual(3);
    });
});

// Testing the divide function in the calculator module.
describe('Divide', () => {
    it('should divide one number by the other', () => {
        expect(calculator.divide(8, 2)).toEqual(4);
    })
})

// Testing the multiply function in the calculator module.
describe('Multiply', () => {
    it('should multiply one number with the other', () => {
        expect(calculator.multiply(4, 4)).toEqual(16);
    })
})