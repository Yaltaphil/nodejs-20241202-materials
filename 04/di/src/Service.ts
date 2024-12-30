import { Logger } from "./Logger";
import { Injectable } from "./Injectable";

@Injectable()
export class Service {
  constructor(private logger: Logger) {}

  foo() {
    this.logger.log("method 'foo' from Service");
  }
}
