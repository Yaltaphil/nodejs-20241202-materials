import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';

@Catch(HttpException)
export class MyExceptionfilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const status = exception.getStatus();
    const message = exception.message;

    console.log(status, message);

    const response = host.switchToHttp().getResponse();

    response
      .status(status)
      .json({ error: status === 500 ? 'Internal Server Error' : message });
  }
}
