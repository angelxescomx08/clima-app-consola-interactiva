import { readInput } from "./helpers/inquirer";

const main = async () => {
  const texto = await readInput("hola");
  console.log(texto);
};

main();
