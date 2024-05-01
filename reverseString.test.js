import reverseString from './reverseString'

test("A reverseString function that takes a string and returns it reversed.", () => {
    expect(reverseString('Hello World')).toBe('dlroW olleH');
});

// test with empty string  
test("A reverseString function that handles an empty string", () => {
    expect(reverseString('')).toBe('');
});