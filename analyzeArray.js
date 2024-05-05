function analyzeArray(arr) {
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