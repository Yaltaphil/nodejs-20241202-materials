import { Service } from "./Service";
import { Injectable } from "./Injectable";

@Injectable()
export class Controller {
  constructor(private service: Service) {}

  start() {
    this.service.foo();
  }
}
