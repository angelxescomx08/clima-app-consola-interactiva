import { inquirerMenu, pausa, readInput } from "./helpers/inquirer";
import { Busquedas } from "./models/busquedas";
import colors from "colors";

const main = async () => {
  let opt;
  const busquedas = new Busquedas();
  do {
    opt = await inquirerMenu();

    switch (opt) {
      case 1:
        const lugar = await readInput("Ciudad:");

        await busquedas.ciudad(lugar);

        console.log(colors.green("\nInformación de la ciudad"));
        console.log("Ciudad:");
        console.log("Lat:");
        console.log("Lng:");
        console.log("Temperatura:");
        console.log("Mínima:");
        console.log("Máxima:");
        break;
    }

    if (opt !== 0) {
      await pausa();
    }
  } while (opt !== 0);
};

main();
