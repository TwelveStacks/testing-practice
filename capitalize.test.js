import capitalize from './capitalize';

test('Function that takes a string and returns it with the first character capitalized.', () => {
    expect(capitalize("hello")).toBe("Hello");
});

test('If no argument is passed, it should return an empty string.', () => {
    expect(capitalize()).toBe("");
});

test('If non string is passed, it should throw an error', () => {
    expect(() => capitalize(123)).toThrow();
});
