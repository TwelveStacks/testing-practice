import caesarChipher from "./caesarCipher";

// Test with string Hello and shift factor of 1
describe('Caesar Cipher', () => {
    it('should take a string and a shift factor and returns it with each character "shifted".', () => {
        expect(caesarChipher('Hello', 1)).toBe('IFMMP');
    });

    // Test with string World and shift factor of 2
    test("should take the string 'World' with shift factor of 2, and return with each character shifted based on shift factor.", () => {
        expect(caesarChipher('World', 2)).toEqual('YQTNF');
    });

    // Test wrapping from z to a.
    test("should handle wrapping from Z to A", () => {
        expect(caesarChipher('Z', 1)).toBe('A');
    });

    // Test keeping punctuation
    test("should preserve punctuation", () => {
        expect(caesarChipher('Hello, World!', 1)).toBe('IFMMP, XPSME!');
    });

    // Test large shift factor
    test("should preserve the case", () => {
        expect(caesarChipher('HeLlO wOrLd', 33)).toBe('OLSSV DVYSK');
    });

    // Testing negative shift factor
    test("should work with negative shift factor", () => {
        expect(caesarChipher('Hello', -1)).toBe('GDKKN');
    });

    // Test bigger negative shift factor
    test("should work with a bigger negative shift factor", () => {
        expect
    });
});