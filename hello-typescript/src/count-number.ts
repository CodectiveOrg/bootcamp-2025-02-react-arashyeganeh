const countNumberOfArray = <T>(inputArray: T[]): number => {
    inputArray = inputArray.filter((entity) => {
        return typeof entity === "number";
    })

    return inputArray.length
}

const a = ["A", 2, "3"];

export default countNumberOfArray;