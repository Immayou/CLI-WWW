import inquirer from "inquirer";

const questions = [
  {
    name: "values",
    type: "input",
    message: "Введіть 10 слів або чисел, розділяючи їх пробілом",
    validate: (input) => {
      const arrayOfValues = input
        .trim()
        .split(" ")
        .filter((item) => item !== "");
      if (arrayOfValues.length !== 10) {
        return `Введена вами кількість слів або чисел - ${arrayOfValues.length}. Будь ласка, введіть 10 слів або чисел.`;
      }
      return true;
    },
  },
  {
    name: "operation",
    type: "rawlist",
    message:
      "Яку з наведених нижче операцій ви б хотіли виконати зі словами та числами? Оберіть варіант та натисніть Enter.",
    choices: [
      "Розсортуйте слова за алфавітом",
      "Показувати числа від меншого до більшого",
      "Показуйте числа від більших до менших",
      "Відображення слів у порядку зростання за кількістю букв у слові",
      "Показувати лише унікальні слова",
      "Відображати лише унікальні значення з набору слів і чисел, введених користувачем",
    ],
  },
];

function workWithValues() {
  const { values, operation } = arguments[0];
  const arrayOfValues = values
    .trim()
    .split(" ")
    .filter((item) => item !== "");
  const words = arrayOfValues.filter((item) => !Number(item));
  const numbers = arrayOfValues.filter((item) => Number(item));
  switch (operation) {
    case "Розсортуйте слова за алфавітом":
      const sortedWords = [...words].sort();
      console.log(sortedWords);
      break;
    case "Показувати числа від меншого до більшого":
      const sortedNumbersInc = [...numbers].sort();
      console.log(sortedNumbersInc);
      break;
    case "Показуйте числа від більших до менших":
      const sortedNumbersDec = [...numbers].sort((a, b) => b - a);
      console.log(sortedNumbersDec);
      break;
    case "Відображення слів у порядку зростання за кількістю букв у слові":
      const sortedWordsByLength = [...words].sort((a, b) => {
        a.length - b.length;
      });
      console.log(sortedWordsByLength);
      break;
    case "Показувати лише унікальні слова":
      const uniqueWords = words.filter(
        (item, index, array) => array.indexOf(item) === index
      );
      console.log(uniqueWords);
      break;
    case "Відображати лише унікальні значення з набору слів і чисел, введених користувачем":
      const uniqueValues = arrayOfValues.filter(
        (item, index, array) => array.indexOf(item) === index
      );
      console.log(uniqueValues);
      break;
    default:
      console.log(values);
  }
}

inquirer.prompt(questions).then(workWithValues);

// // Exit the inquirer prompt
// function exit() {
//   prompt.ui.close();
// }

// // close inquirer input if user press "escape" key
// process.stdin.on("keypress", (_, key) => {
//   if (key.name === "escape") {
//     exit();
//   }
// });

// // Declare your prompt and save it
// const prompt = inquirer.prompt({
//   name: "myInput",
//   type: "input",
//   // ...
// });

// // Listen when the user submit a value
// prompt.then((values) => {
//   console.log(values["myInput"]);
//   // ...
// });
// import inquirer from "inquirer";

// function getGithubCredentials(callback) {
//   const questions = [
//     {
//       name: "values",
//       type: "input",
//       message: "Введіть 10 слів або чисел, розділяючи їх пробілом",
//       validate: (input) => {
//         const arrayOfValues = input.split(" ");
//         const arrayWithoutSpaces = arrayOfValues.filter((item) => item !== "");
//         if (arrayWithoutSpaces.length !== 10) {
//           return `Введена вами кількість слів або чисел - ${arrayWithoutSpaces.length}. Будь ласка, введіть 10 слів або чисел.`;
//         }
//         return true;
//       },
//     },
//     {
//       name: "operation",
//       type: "rawlist",
//       message:
//         "Яку з наведених нижче операцій ви б хотіли виконати зі словами та числами? Оберіть варіант та натисніть Enter.",
//       choices: [
//         "Розсортуйте слова за алфавітом",
//         "Показувати числа від меншого до більшого",
//         "Показуйте числа від більших до менших",
//         "Відображення слів у порядку зростання за кількістю букв у слові",
//         "Показувати лише унікальні слова",
//         "Відображати лише унікальні значення з набору слів і чисел, введених користувачем",
//       ],
//       validate: (options) => {
//         if (options) {
//           console.log(options);
//           return true;
//         }
//         return true;
//       },
//     },
//   ];

//   inquirer.prompt(questions).then(callback);
// }

// getGithubCredentials(function () {
//   const { values, operation } = arguments[0];
//   const arrayOfValues = values.split(" ");
//   const words = arrayOfValues.filter((item) => !Number(item));
//   const numbers = arrayOfValues.filter((item) => Number(item));
//   switch (operation) {
//     case "Розсортуйте слова за алфавітом":
//       const sortedWords = [...words].sort();
//       console.log(sortedWords);
//       break;
//     case "Показувати числа від меншого до більшого":
//       const sortedNumbers = [...numbers].sort();
//       console.log(sortedNumbers);
//       break;
//     case "Відображення слів у порядку зростання за кількістю букв у слові":
//       const sortedWordsByLength = [...words].sort((a, b) => {
//         a.length - b.length;
//       });
//       console.log(sortedWordsByLength);
//       break;
//     case "Показувати лише унікальні слова":
//       const uniqueWords = words.filter(
//         (item, index, array) => array.indexOf(item) === index
//       );
//       console.log(uniqueWords);
//       break;
//     case "Відображати лише унікальні значення з набору слів і чисел, введених користувачем":
//       const uniqueValues = arrayOfValues.filter(
//         (item, index, array) => array.indexOf(item) === index
//       );
//       console.log(uniqueValues);
//       break;
//     default:
//       break;
//   }
// });
