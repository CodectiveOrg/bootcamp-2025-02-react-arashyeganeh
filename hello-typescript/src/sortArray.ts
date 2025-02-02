interface IInputArray {
    createdAt: string | number;
    modifiedAt?: string | number;
}

const sortArray = (inputArray: IInputArray[]): IInputArray[] => {
    inputArray.map((entity) => {
        entity.createdAt = new Date(entity.createdAt).getTime();

        if (entity.modifiedAt) {
            entity.modifiedAt = new Date(entity.modifiedAt).getTime();
        }

        return entity
    });

    for (let j = 0; j < inputArray.length; j++) {
        for (let i = 0; i < inputArray.length; i++) {
            if (!inputArray[i + 1]) {
                continue;
            }

            const firstEntity = inputArray[i] && inputArray[i]?.modifiedAt || inputArray[i].createdAt;
            const secondEntity = inputArray[i + 1] && inputArray[i + 1]?.modifiedAt || inputArray[i + 1].createdAt;

            const condition = firstEntity < secondEntity;

            if (condition) {
                [inputArray[i], inputArray[i + 1]] = [inputArray[i + 1], inputArray[i]]
            }
        }
    }

    return inputArray;
}

export default sortArray;