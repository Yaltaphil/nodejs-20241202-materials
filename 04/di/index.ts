import { Container } from "./src/Container";
import { Controller } from "./src/Controller";

const container = new Container();
const controller = container.resolve(Controller);

controller.start();
