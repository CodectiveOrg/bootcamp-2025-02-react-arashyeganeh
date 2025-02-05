interface IInputArray {
  createdAt: string;
  modifiedAt?: string;
}

const sortArray = (inputArray: IInputArray[]): IInputArray[] => {
  for (let i = 0; i < inputArray.length; i++) {
    for (let j = 0; j < inputArray.length - i - 1; j++) {
      const current = new Date(
        inputArray[j].modifiedAt || inputArray[j].createdAt
      );
      const next = new Date(
        inputArray[j + 1].modifiedAt || inputArray[j + 1].createdAt
      );

      if (current < next) {
        [inputArray[j], inputArray[j + 1]] = [inputArray[j + 1], inputArray[j]];
      }
    }
  }
  return inputArray;
};

export default sortArray;
