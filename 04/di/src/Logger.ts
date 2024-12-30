import { Injectable } from "./Injectable";

@Injectable()
export class Logger {
  log(message: string) {
    console.log(`[LOG] ${message}`);
  }
}
