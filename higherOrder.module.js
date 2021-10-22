// map filter find reduce (any every)

const obj = {
  name: "Ionel",
  age: 71,
};
console.log(obj.name); //Ionel
console.log(obj.age); //71

const arrayObj = [
  {
    name: "gigel",
    matematica: 5,
  },
  {
    name: "Ionica",
    matematica: 8,
  },
  {
    name: "Elena",
    matematica: 9,
  },
];

const clonearrayObj = JSON.parse(JSON.stringify(arrayObj));

for (let i = 0; i < arrayObj.length; i++) {
  arrayObj[i].matematica += 1;
}

const newArrayMap = clonearrayObj.map((currentElement, index, initialArray) => {
  currentElement.matematica += 1;
  return currentElement;
});

const lessThan8 = (currentElement) => currentElement.matematica <= 8;
const newArrayFiltered = clonearrayObj.filter(lessThan8);
const newArrayFind = clonearrayObj.find(lessThan8);

const sum = clonearrayObj.reduce(
  (accumulator, currentElement, index, initialArray) => {
    accumulator += currentElement.matematica;
    return accumulator;
  },
  0
);
console.log(sum);
