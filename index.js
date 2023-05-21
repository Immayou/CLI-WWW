import inquirer from "inquirer";

inquirer
  .prompt(["Hello!"])
  .then((answers) => {
    `Welcome ${answers}!`;
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
