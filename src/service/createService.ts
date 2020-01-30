import { MyService } from "./Service";
import { ServiceConfig, Service } from "../types";


export const createService = (config: ServiceConfig): Service => {
  // dependencies that need passed to many should be created externally
  // create encapsulatd dependencies
  return new MyService({});
};
