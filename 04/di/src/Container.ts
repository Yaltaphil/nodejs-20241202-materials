import "reflect-metadata";

export class Container {
  private providers = new Map();

  resolve(provider: any) {
    const parameters = Reflect.getMetadata("design:paramtypes", provider) || [];

    console.log("target parameters", parameters, provider.name);

    const dependencies = parameters.map((parameter: any) =>
      this.resolve(parameter),
    );

    const instance = new provider(...dependencies);
    this.providers.set(provider.name, instance);
    return instance;
  }
}

// controller -> service -> logger
