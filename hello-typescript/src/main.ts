import reverseArray from "./reverse-array";
import countNumberOfArray from "./count-number";

{
    // Task 1
    console.info("Task 1")
    const ar = ["A", 2, true, , null]
    console.log(ar, "=>", reverseArray(ar))
    console.info("###################")
}

{
    // Task 2
    console.info("Task 2")
    const ar = ["A", 2, "C", false, 5]
    console.log(ar, "=>", `Count is ${countNumberOfArray(ar)}`)
    console.info("###################")
}