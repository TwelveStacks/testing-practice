import capitalize from './capitalize';

// Test with word hello
test('Function that takes a string and returns it with the first character capitalized.', () => {
    expect(capitalize("hello")).toBe("Hello");
});

// Test with no argument passed
test('If no argument is passed, it should return an empty string.', () => {
    expect(capitalize()).toBe("");
});

// Test with non string passed
test('If non string is passed, it should throw an error', () => {
    expect(() => capitalize(123)).toThrow();
});

// Test with a different word: world
test('Capitalize the word "world".', () => {
    expect(capitalize("world")).toBe("World")
})