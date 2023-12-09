function generateHashtag(str) {
    const word = str.split(" ")
    let hashtag = ""
    for (x of word) {
        hashtag += x.charAt(0).toUpperCase() + x.substring(1)
    }

    if (hashtag.length > 0 && hashtag.length < 140) {
        return `#${hashtag}`
    }
    return false
}
