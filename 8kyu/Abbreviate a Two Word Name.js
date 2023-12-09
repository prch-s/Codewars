function abbrevName(name) {
    const n = name.split(" ")
    return `${n[0][0].toUpperCase()}.${n[1][0].toUpperCase()}`
}
