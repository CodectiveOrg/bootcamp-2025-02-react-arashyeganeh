const countNumberOfArray = <T>(inputArray: T[]): number => {
  let counter = 0;

  inputArray.forEach((entity) => {
    if (typeof entity === "number") {
      counter++;
    }
  });

  return counter;
};

export default countNumberOfArray;
