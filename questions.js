function exit() {
  console.log("\n" + "До побачення!");
  process.exit();
}

export const questions = [
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
        return "Ви використали недоспустимі символи. Введіть, буль-ласка, літери латиниці/кирилиці або цифри";
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
