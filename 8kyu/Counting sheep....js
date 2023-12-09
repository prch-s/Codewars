function countSheeps(sheep) {
    let cnt = 0
    for (i of sheep) {
        cnt += i ? 1 : 0
    }
    return cnt
}
