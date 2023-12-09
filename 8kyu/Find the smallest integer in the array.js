class SmallestIntegerFinder {
    findSmallestInt(args) {
        return args.reduce((prev, curr) => {
            return prev < curr ? prev : curr
        })
    }
}
