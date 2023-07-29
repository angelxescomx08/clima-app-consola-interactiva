import inquirer, { Answers, QuestionCollection } from "inquirer";
import color from "colors";

const preguntas: QuestionCollection<any> = [
  {
    type: "list",
    name: "opcion",
    message: "¿Qué desea hacer?",
    choices: [
      {
        value: 1,
        name: `${color.green("1.")} Buscar ciudad`,
      },
      {
        value: 2,
        name: `${color.green("2.")} Historial`,
      },
      {
        value: 0,
        name: `${color.green("0.")} Salir`,
      },
    ],
  },
];

export const inquirerMenu = async () => {
  console.clear();
  const { opcion } = await inquirer.prompt(preguntas);
  return opcion;
};

export const pausa = () => {
  const question: QuestionCollection<any> = [
    {
      type: "input",
      name: "enter",
      message: `Presione ${color.green("Enter")} para continuar`,
    },
  ];
  return inquirer.prompt(question);
};

export const readInput = async (message: string) => {
  const question: QuestionCollection<Answers> = [
    {
      type: "input",
      name: "description",
      message,
      validate(value: string) {
        if (value.length === 0) return "Por favor ingrese una descripción";
        return true;
      },
    },
  ];

  const { description } = await inquirer.prompt(question);
  return description;
};

/* export const listadoTareasBorrar = async (tareas: Tarea[]) => {
  const choices = tareas.map((tarea, index) => ({
    value: tarea.id,
    name: `${color.green(`${index + 1}.`)} ${tarea.description}`,
  }));
  choices.unshift({
    value: "0",
    name: `${color.green("0.")} Cancelar`,
  });
  const preguntas: QuestionCollection<Answers> = [
    {
      type: "list",
      name: "id",
      message: "borrar",
      choices,
    },
  ];
  const { id } = await inquirer.prompt(preguntas);
  return id;
}; */

export const confirmar = async (message: string) => {
  const question: QuestionCollection<Answers> = [
    {
      type: "confirm",
      name: "ok",
      message,
    },
  ];

  const { ok } = await inquirer.prompt(question);
  return ok;
};

/* export const mostrarListadoCheckList = async (tareas: Tarea[]) => {
  const choices = tareas.map((tarea, index) => ({
    value: tarea.id,
    name: `${color.green(`${index + 1}.`)} ${tarea.description}`,
    checked: !!tarea.completedDate,
  }));

  const pregunta: QuestionCollection<Answers> = [
    {
      type: "checkbox",
      name: "ids",
      message: "Selecciona",
      choices,
    },
  ];
  const { ids } = await inquirer.prompt(pregunta);
  return ids;
}; */
