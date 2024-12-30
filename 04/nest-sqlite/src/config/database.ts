import { registerAs } from '@nestjs/config';

export default registerAs('database', () => {
  return {
    type: process.env.DB_TYPE || 'sqlite',
    database: process.env.DATABASE || 'db.sqlite',
    synchronize: true,
    autoLoadEntities: true,
  };
});
