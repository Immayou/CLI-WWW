import inquirer from "inquirer";
import { questions } from "./questions.js";

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
      prompt(workWithValues);
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
