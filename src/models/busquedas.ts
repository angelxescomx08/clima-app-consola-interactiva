import axios from "axios";
import "dotenv/config";
import { Lugar, MapboxResponse } from "../interfaces";

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

  async ciudad(lugar: string): Promise<Lugar[]> {
    try {
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
        params: this.paramsMapbox,
      });
      const res = await instance.get<MapboxResponse>("");
      return res.data.features.map((feature) => ({
        id: feature.id,
        nombre: feature.place_name_es,
        lng: feature.center[0],
        lat: feature.center[1],
      }));
    } catch (error) {
      return [];
    }
  }
}
