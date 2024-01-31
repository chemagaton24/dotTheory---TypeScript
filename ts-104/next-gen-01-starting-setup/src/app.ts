// // Code goes here!
// const userName = "Max";
// // let age = 30;

// // age = 29;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

// // if (age > 20) {
// //   let isOld = true;
// // }

// const add2 = (a: number, b: number = 1) => a + b;

// console.log(add2(2, 5));

// const printOutput: (a: number | string) => void = (output: string | number) =>
//   console.log(output);

// printOutput(add2(5, 2));

// const button = document.querySelector("button");

// if (button) {
//   button.addEventListener("click", (event) => console.log(event));
// }

// const hobbies = ["Sports", "Cooking"];
// const activeHobbies = ["Hiking"];

// activeHobbies.push(...hobbies);

// const person = {
//   firstName: "Max",
//   age: 30,
// };

// const copiedPerson = person;

// const [hobby1, hobby2, ...remainingHobbies] = hobbies;

// console.log(hobbies, hobby1, hobby2);

// const { firstName: uName, age } = person;

// console.log(uName, age);

const restParam = (num1: number, num2: number, ...numbers: number[]) => {
  const totalRes = numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
  return num1 + num2 + totalRes;
};

const addedNumbers = restParam(5, 10, 2, 3.7);
console.log("restParam", addedNumbers);

const deconstructArrayFn = (arr: string[]) => {
  return arr;
};

const deconstructArray = deconstructArrayFn(["cat", "dog", " frog"]);

const [animal1, animal2, animal3] = deconstructArray;
console.log(animal1, animal2, animal3);

const person = {
  fullname: "john doe",
  age: 23,
  hobby: "football",
};

const deconstructObjectFn = (obj: {
  fullname: string;
  age: number;
  hobby: string;
}) => {
  return obj;
};

const deconstructObject = deconstructObjectFn(person);

const { fullname, age, hobby } = deconstructObject;
console.log(fullname, age, hobby);
