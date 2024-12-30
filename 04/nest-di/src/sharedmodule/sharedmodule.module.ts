import { Module } from '@nestjs/common';
import { MyProvider } from './provider/my.provider';

@Module({
  providers: [MyProvider],
  exports: [MyProvider],
})
export class SharedmoduleModule {}
