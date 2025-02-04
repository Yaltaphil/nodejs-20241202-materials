import { UsersService } from '../users.service';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { Test } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { NestApplication } from '@nestjs/core';

describe('UsersService (mocked)', () => {
  let app: NestApplication;
  let service: UsersService;
  let repository: Repository<User>;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'sqlite',
          database: ':memory:',
          entities: [User],
          synchronize: true,
        }),
        TypeOrmModule.forFeature([User]),
      ],
      providers: [UsersService],
    }).compile();

    app = module.createNestApplication();
    await app.init();

    service = module.get(UsersService);
    repository = module.get(getRepositoryToken(User));

    const user = repository.create({ username: 'John' });
    await repository.save(user);
  });

  afterAll(async () => {
    await app.close();
  });

  it('should return user by username', async () => {
    const result = await service.findOne('John');
    expect(result).toEqual({
      id: 1,
      username: 'John',
      password: null,
      role: 'user',
    });
  });

  it('should return null if user not found', () => {});

  it('should create new user', async () => {
    const result = await service.create('Sergey');
    expect(result).toHaveProperty('username', 'Sergey');

    const entity = await repository.findOneBy({ username: 'Sergey' });
    expect(entity).toEqual(result);
  });
});
