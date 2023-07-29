import axios from "axios";

export class Busquedas {
  private historial: string[] = [];

  constructor() {}

  async ciudad(lugar: string) {
    try {
      const res = await axios.get("");
      return [];
    } catch (error) {
      return [];
    }
  }
}
