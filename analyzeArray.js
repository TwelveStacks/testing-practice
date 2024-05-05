function analyzeArray(arr) {
    // IF input is not an array throw an error
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array");
    }

    if (arr.length === 0) {
        return {
            average: NaN,
            min: NaN,
            max: NaN,
            length: 0
        }
    }

    const sum = arr.reduce((total, val) => total + val, 0)
    const average = sum / arr.length
    const min = Math.min(...arr)
    const max = Math.max(...arr)

    return {
        average,
        min,
        max,
        length: arr.length
    }
}
export default analyzeArray