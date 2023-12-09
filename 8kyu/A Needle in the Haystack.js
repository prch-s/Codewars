function findNeedle(haystack) {
    const position = haystack.findIndex((x) => x === "needle")
    if (position >= 0) {
        return `found the needle at position ${position}`
    }
    return "Your function didn't return anything"
}
