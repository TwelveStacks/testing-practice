import reverseString from './reverseString'

// Test with string 'Hello World'. Should return dlroW olleH
test("A reverseString function that takes the string 'Hello World' and returns it reversed.", () => {
    expect(reverseString('Hello World')).toBe('dlroW olleH');
});

// test with empty string  
test("A reverseString function that handles an empty string", () => {
    expect(reverseString('')).toBe('');
});

// Test with a different string. 'I love coding'
test("Should return a reversed string. The string 'I love coding' should return 'gindoc evol I.", () => {
    expect(reverseString('I love coding')).toBe('gnidoc evol I')
});

// Test with another string. '1234567890'.
test("Function should reverse the string '1234567890' to '0987654321'.", () => {
    expect(reverseString('1234567890')).toBe('0987654321');
});

// Test when non string is passed. Should throw error
test("The function should throw an error if a non-string argument is provided", () => {
    expect(() => reverseString(123)).toThrow();
});