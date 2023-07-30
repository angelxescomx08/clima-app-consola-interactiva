import axios from "axios";
import "dotenv/config";

export class Busquedas {
  private historial: string[] = [];

  constructor() {}

  get paramsMapbox() {
    return {
      language: "es",
      access_token: process.env.MAPBOX,
      limit: 5,
    };
  }

  async ciudad(lugar: string) {
    try {
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
        params: this.paramsMapbox,
      });
      const res = await instance.get("");
      console.log(res.data);
      return [];
    } catch (error) {
      return [];
    }
  }
}
