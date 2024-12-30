import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class MyParseIntPipe implements PipeTransform {
  async transform(value: string) {
    const int = parseInt(value, 10);

    console.log('sleep in pipe');
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (isNaN(int)) {
      throw new BadRequestException(
        `значение должно быть числом, получено ${value}`,
      );
    }
    return int;
  }
}
