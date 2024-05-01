function reverseString(string) {
    if (string == '') {
        return ''
    }

    return string.split("").reverse().join("");
}
export default reverseString