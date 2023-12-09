function squareSum(num) {
    return num.reduce((prev, curr) => {
        return prev + curr * curr
    }, 0)
}
