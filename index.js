import inquirer from "inquirer";

const questions = [
  {
    name: "values",
    type: "input",
    message: "Введіть 10 слів або чисел, розділяючи їх пробілом",
    validate: (input) => {
      if (input.toLowerCase() === "exit") {
        exit();
      }
      const arrayOfValues = input
        .trim()
        .split(" ")
        .filter((item) => item !== "");
      if (arrayOfValues.length !== 10) {
        return `Введена вами кількість слів або чисел - ${arrayOfValues.length}. Будь ласка, введіть 10 слів або чисел.`;
      }
      const valuesWithoutSpaces = input.replace(/ /g, "");
      if (!/^[а-яА-ЯёЁa-zA-Z0-9]+$/.test(valuesWithoutSpaces)) {
        console.log(/^[а-яА-ЯёЁa-zA-Z0-9]+$/.test(input));
        return "Ви використали недоспустимі символи. Введіть, буль-ласка, літери та цифри";
      }
      return true;
    },
  },
  {
    name: "operation",
    type: "input",
    message:
      "Яку з наведених нижче операцій ви б хотіли виконати зі словами та числами? Введіть цифру варіанту та натисніть Enter." +
      "\n" +
      "1. Розсортуйте слова за алфавітом" +
      "\n" +
      "2. Показувати числа від меншого до більшого" +
      "\n" +
      "3. Показуйте числа від більших до менших" +
      "\n" +
      "4. Відображення слів у порядку зростання за кількістю букв у слові" +
      "\n" +
      "5. Показувати лише унікальні слова" +
      "\n" +
      "6. Відображати лише унікальні значення з набору слів і чисел, введених користувачем" +
      "\n" +
      "Option: ",
    validate: (input) => {
      if (input.toLowerCase() === "exit") {
        exit();
      }
      if (!Number(input) || Number(input) < 1 || Number(input) > 6) {
        return "Введіть цифру 1-6 відповідно до обраної операції";
      }
      return true;
    },
  },
];

function exit() {
  console.log("\n" + "До побачення!");
  process.exit();
}

function workWithValues() {
  const { values, operation } = arguments[0];

  const arrayOfValues = values
    .trim()
    .split(" ")
    .map((item) => item.toLowerCase())
    .filter((item) => item !== "");

  const words = arrayOfValues.filter((item) => !Number(item));

  const numbers = arrayOfValues.filter((item) => Number(item));

  switch (operation) {
    case "1":
      const sortedWords = [...words].sort();
      console.log(sortedWords);
      prompt(workWithValues);
      break;
    case "2":
      const sortedNumbersInc = [...numbers].sort();
      console.log(sortedNumbersInc);
      prompt(workWithValues);
      break;
    case "3":
      const sortedNumbersDec = [...numbers].sort((a, b) => b - a);
      console.log(sortedNumbersDec);
      break;
    case "4":
      const sortedWordsByLength = [...words].sort((a, b) => {
        a.length - b.length;
      });
      console.log(sortedWordsByLength);
      prompt(workWithValues);
      break;
    case "5":
      const uniqueWords = words.filter(
        (item, index, array) => array.indexOf(item) === index
      );
      console.log(uniqueWords);
      prompt(workWithValues);
      break;
    case "6":
      const uniqueValues = arrayOfValues.filter(
        (item, index, array) => array.indexOf(item) === index
      );
      console.log(uniqueValues);
      prompt(workWithValues);
      break;
    default:
      console.log(values);
  }
}

const prompt = (callback) => {
  inquirer.prompt(questions).then(callback);
};

prompt(workWithValues);

// import inquirer from "inquirer";

// const questions = [
//   {
//     name: "values",
//     type: "input",
//     message: "Введіть 10 слів або чисел, розділяючи їх пробілом",
//     validate: (input) => {
//       if (input === "exit") {
//         console.log("\n" + "Goodbye!");
//         process.exit();
//       }
//       const arrayOfValues = input
//         .trim()
//         .split(" ")
//         .filter((item) => item !== "");
//       if (arrayOfValues.length !== 10) {
//         return `Введена вами кількість слів або чисел - ${arrayOfValues.length}. Будь ласка, введіть 10 слів або чисел.`;
//       }
//       return true;
//     },
//   },
//   {
//     name: "operation",
//     type: "rawlist",
//     message:
//       "Яку з наведених нижче операцій ви б хотіли виконати зі словами та числами? Оберіть варіант або введіть цифру варіанту та натисніть Enter.",
//     choices: [
//       "Розсортуйте слова за алфавітом",
//       "Показувати числа від меншого до більшого",
//       "Показуйте числа від більших до менших",
//       "Відображення слів у порядку зростання за кількістю букв у слові",
//       "Показувати лише унікальні слова",
//       "Відображати лише унікальні значення з набору слів і чисел, введених користувачем",
//     ],
//     filter: function (val) {
//       console.log(val[0]);
//     },
//     //   if (input === "exit") {
//     //     console.log("Goodbye!");
//     //     process.exit();
//     //   }
//     //   return input;
//     // },
//   },
// ];

// function workWithValues() {
//   const { values, operation } = arguments[0];
//   const arrayOfValues = values
//     .trim()
//     .split(" ")
//     .map((item) => item.toLowerCase())
//     .filter((item) => item !== "");
//   const words = arrayOfValues
//     .map((item) => item.toLowerCase())
//     .filter((item) => !Number(item));
//   const numbers = arrayOfValues.filter((item) => Number(item));
//   switch (operation) {
//     case "Розсортуйте слова за алфавітом":
//       const sortedWords = [...words].sort();
//       console.log(sortedWords);
//       prompt(workWithValues);
//       break;
//     case "Показувати числа від меншого до більшого":
//       const sortedNumbersInc = [...numbers].sort();
//       console.log(sortedNumbersInc);
//       prompt(workWithValues);
//       break;
//     case "Показуйте числа від більших до менших":
//       const sortedNumbersDec = [...numbers].sort((a, b) => b - a);
//       console.log(sortedNumbersDec);
//       break;
//     case "Відображення слів у порядку зростання за кількістю букв у слові":
//       const sortedWordsByLength = [...words].sort((a, b) => {
//         a.length - b.length;
//       });
//       console.log(sortedWordsByLength);
//       prompt(workWithValues);
//       break;
//     case "Показувати лише унікальні слова":
//       const uniqueWords = words.filter(
//         (item, index, array) => array.indexOf(item) === index
//       );
//       console.log(uniqueWords);
//       prompt(workWithValues);
//       break;
//     case "Відображати лише унікальні значення з набору слів і чисел, введених користувачем":
//       const uniqueValues = arrayOfValues.filter(
//         (item, index, array) => array.indexOf(item) === index
//       );
//       console.log(uniqueValues);
//       prompt(workWithValues);
//       break;
//     default:
//       console.log(values);
//   }
// }

// const prompt = (callback) => {
//   inquirer.prompt(questions).then(callback);
// };

// prompt(workWithValues);
