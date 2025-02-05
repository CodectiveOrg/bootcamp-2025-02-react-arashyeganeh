const reverseArray = <T>(inputArray: T[]): T[] => {
  const tempArray: T[] = [];

  for (let i = inputArray.length - 1; i >= 0; i--) {
    tempArray.push(inputArray[i]);
  }

  return tempArray;
};

export default reverseArray;
