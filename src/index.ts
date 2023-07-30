import {
  inquirerMenu,
  listarLugares,
  pausa,
  readInput,
} from "./helpers/inquirer";
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

        const lugares = await busquedas.ciudad(lugar);

        const id = await listarLugares(lugares);

        const lugarSeleccionado = lugares.find((lugar) => lugar.id === id);

        console.log(colors.green("\nInformación de la ciudad"));
        console.log("Ciudad:", lugarSeleccionado?.nombre);
        console.log("Lat:", lugarSeleccionado?.lat);
        console.log("Lng:", lugarSeleccionado?.lng);
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
