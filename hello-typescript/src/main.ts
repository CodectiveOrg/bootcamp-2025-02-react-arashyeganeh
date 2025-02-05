import reverseArray from "./reverse-array";
import countNumberOfArray from "./count-number";
import sortArray from "./sortArray";

function getReverseArray(): void {
  const array = ["A", 2, true, , null];
  console.log(array, "=>", reverseArray(array));
  console.info("###################");
}

function getCountNumberOfArray(): void {
  const array = ["A", 2, "C", false, 5];
  console.log(array, "=>", `Count is ${countNumberOfArray(array)}`);
  console.info("###################");
}

function sortingArray(): void {
  const inputArray = [
    {
      name: "B (2023-03)",
      createdAt: "2023-03-03T00:00:01.851Z",
    },
    {
      name: "C (2025-02)",
      createdAt: "2020-01-01T00:00:01.851Z",
      modifiedAt: "2025-02-02T02:02:02.851Z",
    },
    {
      name: "A (2025-01)",
      createdAt: "2025-01-01T00:00:01.851Z",
      modifiedAt: "2025-01-02T02:02:02.851Z",
    },
  ];
  console.log(sortArray(inputArray));
  console.info("###################");
}

getReverseArray();
getCountNumberOfArray();
sortingArray();
