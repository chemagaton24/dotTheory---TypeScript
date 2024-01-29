function addFn(
  n1: number,
  n2: number,
  showResult: boolean,
  resultPhrase: string
) {
  // if (typeof n1 !== "number" || typeof n2 !== "number") {
  //   throw new Error("Incorrect input!");
  // }
  const result = n1 + n2;
  if (showResult) {
    console.log(resultPhrase + result);
  } else {
    return n1 + n2;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

addFn(number1, number2, printResult, resultPhrase);

//-----------//

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
  roleTuple: [number, string];
} = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
  roleTuple: [2, "author"],
};

person.roleTuple = [0, "admin"];

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
  console.log("is author");
}

function unionTypesPractice(a: string | number, b: string | number) {
  let result;
  if (typeof a === "number" && typeof b === "number") {
    result = a + b;
  } else {
    result = a.toString() + b.toString();
  }
  return result;
}

console.log(unionTypesPractice(1, 2));
console.log(unionTypesPractice("Hey ", "Bruh"));

type Combinable = number | string;
type ConversionDescription = "as-number" | "as-text";

function literalTypesPractice(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescription
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

console.log(literalTypesPractice(2, 4, "as-number"));

function add2(n1: number, n2: number): number {
  return n1 + n2;
}

function printResults(num: number): void {
  console.log("Result: " + num);
}

printResults(add2(5, 12));

let combineValues: (a: number, b: number) => number;

combineValues = add2;
//combineValues = 5;

console.log(combineValues(8, 8));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});
