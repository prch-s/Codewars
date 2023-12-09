function persistence(num) {
    let cnt = 0

    while (num >= 10) {
        let product = 1
        num.toString()
            .split("")
            .forEach((digit) => {
                product *= digit
            })

        num = product
        cnt += 1
    }
    return cnt
}
