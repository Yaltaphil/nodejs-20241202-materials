import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MyExceptionfilter } from './my.exceptionfilter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useGlobalFilters(new MyExceptionfilter());
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
