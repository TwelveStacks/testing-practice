function caesarChipher(string, shiftFactor) {
    string = string.toUpperCase();
    // if shift factor is greater than 26 should loop back to the beginning of alphabet
    shiftFactor = shiftFactor % 26
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const shifted = alphabet.slice(shiftFactor) + alphabet.slice(0, shiftFactor);

    if (shiftFactor < 0) {
        // Add 26 to negative shift factor
        shiftFactor += 26
    }

    let result = ''

    for (let i = 0; i < string.length; i++) {
        // Character at index i of string
        const char = string[i];
        // Get the index that corresponds with the character
        const index = alphabet.indexOf(char);

        if (index === -1) { // If char not a letter, just add the character to the result string and move on
            result += char;
        } else {
            result += shifted[index] // Add the shifted character to the result string
        }
    }

    return result
}

export default caesarChipher